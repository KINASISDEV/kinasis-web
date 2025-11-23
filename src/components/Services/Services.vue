<template>
  <div class="services-container">
    <h2 class="services-title">Lo que hemos desarrollado</h2>
    <div class="services-grid">
      <div
        v-for="service in services"
        :key="service.id"
        class="service-card-horizontal"
      >
        <div class="service-icon">
          <img :src="service.image" :alt="service.title" />
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
      services: servicesData
    }
  }
}
</script>