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
import component from './Services.js'
export default component
</script>