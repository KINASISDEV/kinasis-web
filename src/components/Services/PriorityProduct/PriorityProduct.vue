<template>
  <div class="priority-product-container">
    <div class="priority-content">
      <div class="priority-text">
        <h2 class="priority-title">Producto Estrella</h2>
        <div class="priority-description">
          <h3>Ecosistema de Gestión </h3>
          <p>
            Nuestra solución integra todos los procesos de tu empresa en una red completa. 
            Desde gestión de inventarios, ventas, compras, integracion de herramientas en cada parte del sistema.
          </p>
          <ul>
            <li>
              <span> Experiencia de Usuario</span>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="1.6" fill="none"/>
                  <path d="M6 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </li>
            <li>
              <span> Procesos Inteligentes</span>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="6" r="1.6" fill="currentColor"/>
                  <circle cx="6" cy="17" r="1.6" fill="currentColor"/>
                  <circle cx="18" cy="17" r="1.6" fill="currentColor"/>
                  <path d="M12 7v6.5M12 13.5L6 17M12 13.5L18 17" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </li>
            <li>
              <span> Almacenamiento Confiable</span>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <ellipse cx="12" cy="6" rx="7" ry="2.2" stroke="currentColor" stroke-width="1.3" fill="none"/>
                  <path d="M5 6.2v7.5c0 1 3.1 2.5 7 2.5s7-1.4 7-2.5v-7.5" stroke="currentColor" stroke-width="1.3" fill="none"/>
                </svg>
              </span>
            </li>
            <li>
              <span> Soporte y Servicio</span>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M3 15v-1a9 9 0 0118 0v1" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                  <path d="M6 15v1a1 1 0 001 1h1" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                  <path d="M18 15v1a1 1 0 01-1 1h-1" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="priority-image">
        <div class="priority-card" tabindex="0">
            <img
              src="/products/eco_Kinasis.png"
              srcset="/products/eco_Kinasis.png 1x, /products/eco_Kinasis.png 2x"
              sizes="(max-width: 620px) 100vw, (max-width: 1080px) 60vw, 45vw"
              alt="Kinasis ERP - Producto Estrella"
              class="priority-img"
              loading="lazy"
              decoding="async"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import './PriorityProduct.css'

export default {
  name: 'PriorityProduct'
}
</script>