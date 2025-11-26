<template>
  <div class="readywork-wrapper">
    <div class="readywork-banner">
      <div class="readywork-banner-inner">
        <h1 class="readywork-title">SERVICIOS QUE OFRECEMOS</h1>
        <p class="readywork-subtitle">Innovación, escalabilidad y calidad en cada entrega</p>
        <p class="readywork-description">
          Soluciones diseñadas para acelerar tu adopción tecnológica y potenciar tus procesos
          clave de negocio mediante productos, servicios y desarrollos a medida.
        </p>
      </div>
    </div>
    <div class="readywork-content">
      <div class="readywork-section">
        <PriorityProduct />
      </div>
      
      <div class="readywork-section">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import './ReadyWork.css'
import PriorityProduct from '../Services/PriorityProduct/PriorityProduct.vue'

export default {
  name: 'ReadyWork',
  components: { PriorityProduct }
}
</script>