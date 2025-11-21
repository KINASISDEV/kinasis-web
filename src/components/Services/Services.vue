<template>
  <div class="services-container">
    <h2 class="services-title">Lo que hemos desarrollado</h2>
    <div class="services-grid">
      <div
        v-for="service in services"
        :key="service.id"
        class="service-card-horizontal"
      >
        <div class="service-icon">{{ service.icon }}</div>
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

export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Desarrollo Web',
          description: 'Aplicaciones web modernas y escalables',
          icon: '🌐'
        },
        {
          id: 2,
          title: 'Desarrollo Móvil',
          description: 'Apps nativas e híbridas iOS/Android',
          icon: '📱'
        },
        {
          id: 3,
          title: 'Cloud Solutions',
          description: 'Infraestructura en la nube AWS/Azure',
          icon: '☁️'
        },
        {
          id: 4,
          title: 'Consultoría IT',
          description: 'Asesoramiento tecnológico experto',
          icon: '💡'
        }
      ]
    }
  }
}
</script>