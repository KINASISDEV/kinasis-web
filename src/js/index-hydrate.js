// Moved from public/js/index-hydrate.js

(function () {
  function safeNumber(n, fallback = 0) {
    return (typeof n === 'number' && !Number.isNaN(n)) ? n : fallback
  }

  function computeIconWidthFor(img, serviceEl) {
    if (!img || !serviceEl) return
    const cardEl = serviceEl.closest('.service-card-horizontal') || serviceEl
    const cardHeight = safeNumber(cardEl.clientHeight || cardEl.getBoundingClientRect().height, 352)
    const iconHeight = Math.round(cardHeight * 0.75)
    const nW = img.naturalWidth || 0
    const nH = img.naturalHeight || 0
    const ratio = (nW && nH) ? (nW / nH) : 1
    let desiredWidth = Math.round(iconHeight * ratio)
    let minWidth = 120
    if (ratio > 1.3) minWidth = Math.max(minWidth, 220)
    let maxWidth = Math.max(240, Math.round(window.innerWidth * 0.35))
    if (ratio > 1.3) maxWidth = Math.max(maxWidth, Math.round(window.innerWidth * 0.45))
    desiredWidth = Math.min(maxWidth, Math.max(minWidth, desiredWidth))
    if (ratio > 1.3) desiredWidth = Math.max(desiredWidth, 320)
    const dataMin = parseInt(serviceEl.getAttribute('data-min-icon-width'))
    if (!Number.isNaN(dataMin)) desiredWidth = Math.max(desiredWidth, dataMin)

    const iconContainer = serviceEl.querySelector('.service-icon')
    if (iconContainer) iconContainer.style.width = desiredWidth + 'px'
  }

  function updateAllServiceIcons() {
    const services = document.querySelectorAll('.services-container .service-card-horizontal')
    services.forEach(serviceEl => {
      const img = serviceEl.querySelector('img')
      if (!img) return
      if (img.naturalWidth && img.naturalHeight) {
        computeIconWidthFor(img, serviceEl)
      } else {
        img.addEventListener('load', function onLoad() {
          computeIconWidthFor(img, serviceEl)
          img.removeEventListener('load', onLoad)
        })
      }
    })
  }

  let resizeTimer = null
  function onResize() {
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => updateAllServiceIcons(), 120)
  }


  function initSimpleCarousel() {
    const carousels = document.querySelectorAll('.products-carousel')
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track') || carousel
      const items = carousel.querySelectorAll('.product-card')
      if (!items.length) return

      const prevBtn = carousel.querySelector('.carousel-btn.prev') || carousel.querySelector('.carousel-prev')
      const nextBtn = carousel.querySelector('.carousel-btn.next') || carousel.querySelector('.carousel-next')
      const dots = carousel.querySelectorAll('.dot')
      let index = 0

      function goTo(i) {
        index = (i + items.length) % items.length

        items.forEach((card, idx) => {
          const offsetPct = (idx - index) * 110
          card.style.transform = `translateX(${offsetPct}%)`
          card.style.opacity = (idx === index) ? '1' : '0.3'
          if (idx === index) {
            card.classList.add('active')
            card.style.zIndex = 10
          } else {
            card.classList.remove('active')
            card.style.zIndex = ''
          }
        })

        if (dots && dots.length) {
          dots.forEach(d => d.classList.remove('active'))
          if (dots[index]) dots[index].classList.add('active')
        }
      }

      if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1))
      if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1))
      if (dots && dots.length) {
        dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)))
      }


      setTimeout(() => goTo(0), 50)
      window.addEventListener('resize', () => goTo(index))
    })
  }


  function initOnReady() {
    updateAllServiceIcons()
    initSimpleCarousel()

    const scrollBtn = document.querySelector('.scroll-arrow')
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function (ev) {
        ev.preventDefault()
        const main = document.querySelector('.main-content')
        if (main) main.scrollIntoView({ behavior: 'smooth' })
      })
    }
    window.addEventListener('resize', onResize)

    window.addEventListener('resize', addReadMoreToAboutSections)

    window.addEventListener('resize', () => { if (window.innerWidth > 1024) removeMainLock() })


    lockMainStatic()
    if (window.innerWidth > 1024) removeMainLock()
    addReadMoreToAboutSections()
  }



  function lockMainStatic() {
    const main = document.querySelector('.main-content')
    if (!main) return

    const applyLock = () => {

      if (window.innerWidth > 1024) return
      try {

        main.style.setProperty('transform', 'none', 'important')
        main.style.setProperty('left', '0px', 'important')
        main.style.setProperty('margin-left', '0px', 'important')
        main.style.setProperty('margin-right', '0px', 'important')
        main.style.setProperty('transition', 'none', 'important')
        main.style.setProperty('animation', 'none', 'important')
        main.style.setProperty('position', 'relative', 'important')
      } catch (e) {

      }
    }

    applyLock()


    window.addEventListener('resize', applyLock)


    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        if (m.type === 'attributes' && m.attributeName === 'style') {
          applyLock()
        }
      })
    })
    observer.observe(main, { attributes: true })


    let tries = 0
    const intervalId = setInterval(() => {
      applyLock()
      tries += 1
      if (tries > 8) clearInterval(intervalId)
    }, 250)
  }


  function removeMainLock() {
    const main = document.querySelector('.main-content')
    if (!main) return
    try {
      main.style.removeProperty('transform')
      main.style.removeProperty('left')
      main.style.removeProperty('margin-left')
      main.style.removeProperty('margin-right')
      main.style.removeProperty('transition')
      main.style.removeProperty('animation')
      main.style.removeProperty('position')
    } catch (e) { }
  }

  function addReadMoreToAboutSections() {
    if (typeof window !== 'undefined' && window.location && window.location.pathname === '/') return
    const aboutSections = Array.from(document.querySelectorAll('.main-content .about-section'))
    aboutSections.forEach(section => {

      if (section.querySelector('.read-more')) return


      if (section.scrollHeight <= section.clientHeight + 4) return

      const btn = document.createElement('button')
      btn.className = 'read-more'
      btn.setAttribute('aria-expanded', 'false')
      btn.textContent = 'Leer más'

      const heading = section.querySelector('h1, h2, h3, h4, h5')
      const headingText = heading ? heading.textContent.trim() : 'sección'

      if (!section.id) section.id = `about-section-${Math.random().toString(36).slice(2, 8)}`
      btn.setAttribute('aria-controls', section.id)
      btn.setAttribute('aria-label', `Mostrar contenido completo de ${headingText}`)

      const clampValue = parseFloat(getComputedStyle(section).maxHeight) || 220

      section.style.transition = section.style.transition || 'max-height 300ms ease'

      const expand = () => {

        section.style.maxHeight = section.scrollHeight + 'px'
        section.classList.add('expanded')
        btn.setAttribute('aria-expanded', 'true')
        btn.textContent = 'Leer menos'

        const overlay = section.querySelector('.fade-overlay')
        if (overlay) overlay.style.display = 'none'
      }

      const collapse = () => {

        section.style.maxHeight = clampValue + 'px'
        section.classList.remove('expanded')
        btn.setAttribute('aria-expanded', 'false')
        btn.textContent = 'Leer más'
        const overlay = section.querySelector('.fade-overlay')
        if (overlay) overlay.style.display = 'block'
      }

      btn.addEventListener('click', () => {
        if (section.classList.contains('expanded')) {
          collapse()
        } else {
          expand()
        }
      })


      window.addEventListener('resize', () => {
        if (section.classList.contains('expanded')) {
          section.style.maxHeight = section.scrollHeight + 'px'
        } else {
          section.style.maxHeight = clampValue + 'px'
        }
      })


      const overlay = document.createElement('div')
      overlay.className = 'fade-overlay'


      section.appendChild(overlay)
      section.appendChild(btn)
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnReady)
  } else {
    initOnReady()
  }


  window.__kinasis_index_hydrate = {
    updateAllServiceIcons,
    initSimpleCarousel
  }
})();
