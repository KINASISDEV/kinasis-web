<template>
  <div class="products-container">
    <h2 class="products-title">Servicios Especializados</h2>
    
    <div class="products-carousel">
      <button class="carousel-btn prev" @click="prevSlide">‹</button>
      
      <div class="carousel-track">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          :class="['product-card', { active: index === currentIndex }]"
          :style="{
            transform: `translateX(${(index - currentIndex) * 110}%)`,
            opacity: index === currentIndex ? 1 : 0.3
          }"
        >
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <span class="product-tech">{{ product.technology }}</span>
          </div>
        </div>
      </div>
      
      <button class="carousel-btn next" @click="nextSlide">›</button>
    </div>
    
    <div class="carousel-dots">
      <button
        v-for="(product, index) in products"
        :key="index"
        :class="['dot', { active: index === currentIndex }]"
        @click="currentIndex = index"
      />
    </div>
  </div>
</template>

<script>
import './Products.css'
import productsData from './Products.json'

export default {
  name: 'Products',
  data() {
    return {
      products: productsData,
      currentIndex: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length
    }
  }
}
</script>