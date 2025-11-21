<template>
  <div>
    <header class="readywork-banner">
      <div class="readywork-banner-inner">
        <h1 class="readywork-title">SERVICIOS QUE OFRECEMOS</h1>
        <p class="readywork-subtitle">Innovación, escalabilidad y calidad en cada entrega</p>
        <p class="readywork-description">
          Soluciones diseñadas para acelerar tu adopción tecnológica y potenciar tus procesos
          clave de negocio mediante productos, servicios y desarrollos a medida.
        </p>
      </div>
    </header>
    <main class="readywork-content">
      <section class="section">
        <PriorityProduct />
      </section>
      
      <section class="section">
        <Products />
      </section>
      
      <section class="section">
        <Services />
      </section>
    </main>
  </div>
</template>

<script>
import './ReadyWork.css'
import PriorityProduct from '../Services/PriorityProduct/PriorityProduct.vue'
import Products from '../Services/Products/Products.vue'
import Services from '../Services/Services.vue'

export default {
  name: 'ReadyWork',
  components: { PriorityProduct, Products, Services }
}
</script>