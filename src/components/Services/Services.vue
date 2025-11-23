<template>
  <div class="services-container">
    <h2 class="services-title">Lo que hemos desarrollado</h2>
    <div class="services-grid">
      <div
        v-for="service in services"
        :key="service.id"
        class="service-card-horizontal"
      >
        <div class="service-icon" :class="{ wide: service.aspect === 'wide', tall: service.aspect === 'tall' }" :style="{ width: service.iconWidth ? service.iconWidth + 'px' : '' }">
          <img :ref="'serviceImg-' + service.id" :src="service.image" :alt="service.title" @load="onImgLoad($event, service.id)" />
        </div>
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Services.css'
import servicesData from './Services.json'

export default {
  name: 'Services',
  data() {
    return {
      services: servicesData.map(s => ({ ...s, aspect: s.orientation || 'normal', iconWidth: null }))
    }
  },
  mounted() {
    // Recompute icon widths after mount and on resize
    this.$nextTick(() => this.updateAllIcons())
    window.addEventListener('resize', this.updateAllIcons)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateAllIcons)
  },
  methods: {
    onImgLoad(e, id) {
      const img = e.target
      const ratio = img.naturalWidth / img.naturalHeight
      const service = this.services.find(s => s.id === id)
      if (!service) return
      // Update aspect flag only if not manually provided
      if (!servicesData.find(sd => sd.id === id && sd.orientation)) {
        service.aspect = ratio > 1.3 ? 'wide' : ratio < 0.8 ? 'tall' : 'normal'
      }
      this.computeIconWidth(img, service)
    },
    computeIconWidth(img, service) {
      const iconEl = img.closest('.service-icon')
      const cardEl = img.closest('.service-card-horizontal')
      if (!iconEl || !cardEl) return
      const cardHeight = cardEl.clientHeight || cardEl.getBoundingClientRect().height || 352
      // Use icon's relative height (75% of card height) as base
      const iconHeight = Math.round(cardHeight * 0.75)
      const nW = img.naturalWidth || 0
      const nH = img.naturalHeight || 0
      const ratio = (nW && nH) ? (nW / nH) : 1
      // Desired width based on aspect ratio and icon height
      let desiredWidth = Math.round(iconHeight * ratio)
      // Clamp width so it doesn't overflow excessively
      let minWidth = 120
      // Give wide images a larger minimum width so they look larger
      if (service.aspect === 'wide' || (service.orientation && service.orientation === 'wide')) {
        minWidth = Math.max(minWidth, 220)
      }
      let maxWidth = Math.max(240, Math.round(window.innerWidth * 0.35))
      if (service.aspect === 'wide' || (service.orientation && service.orientation === 'wide')) {
        maxWidth = Math.max(maxWidth, Math.round(window.innerWidth * 0.45))
      }
      desiredWidth = Math.min(maxWidth, Math.max(minWidth, desiredWidth))
      // For wide images, ensure a larger min width so they are visibly bigger
      if (service.aspect === 'wide' || (service.orientation && service.orientation === 'wide')) {
        desiredWidth = Math.max(desiredWidth, 320)
      }
      // Debugging: log computed values to help diagnose sizing issues (temporary)
      if (service.id === 2 && import.meta.env.MODE !== 'production') {
        // eslint-disable-next-line no-console
        console.debug('computeIconWidth', service.id, { cardHeight, iconHeight, naturalWidth: nW, naturalHeight: nH, ratio, desiredWidth, minWidth, maxWidth })
      }
      // Respect per-service minimum width override from data, if provided
      if (service.minIconWidth) {
        desiredWidth = Math.max(desiredWidth, service.minIconWidth)
      }
      service.iconWidth = desiredWidth
    },
    updateAllIcons() {
      // recompute widths for all loaded images
      this.services.forEach(service => {
        const refName = 'serviceImg-' + service.id
        let img = this.$refs[refName]
        // Vue may return an array when refs are used in loops or dynamic refs
        if (Array.isArray(img)) {
          img = img[0]
        }
        if (img) {
          // Vue may expose arrayed refs in loops
          // If the image has already loaded, compute immediately
          if (img.naturalWidth && img.naturalHeight) {
            this.computeIconWidth(img, service)
          } else if (img.complete) {
            // Cache-hit loaded image but naturalWidth may be zero; still attempt compute
            this.computeIconWidth(img, service)
          } else {
            // Attach a load handler for images that haven't loaded yet
            const loadHandler = (ev) => {
              this.computeIconWidth(ev.target, service)
              img.removeEventListener('load', loadHandler)
            }
            img.addEventListener('load', loadHandler)
            // Debug: log missing refs to help track why width isn't computed
            if (import.meta.env.MODE !== 'production') {
              // eslint-disable-next-line no-console
              console.debug(`updateAllIcons: waiting for image ref to load for service id=${service.id}`)
            }
          }
        } else {
          if (import.meta.env.MODE !== 'production') {
            // eslint-disable-next-line no-console
            console.debug(`updateAllIcons: image ref not ready for service id=${service.id}`, img)
          }
        }
      })
    }
    ,
    // Generate a consistent color from a string (title)
    // removed placeholder methods — use explicit icon paths (JSON) instead
  }
}
</script>