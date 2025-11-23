<template>
  <div>
    <header class="banner">
      <div class="banner-video">
        <iframe
          src="https://www.youtube.com/embed/sH4uierF0Lc?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=sH4uierF0Lc&modestbranding=1&start=60"
          title="Background video"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="banner-overlay"></div>

      <div class="banner-inner">
        <h1>Kinasis</h1>
        <h2>La Calidad es nuestra Prioridad en Soluciones que escalan.</h2>
      </div>

      <div class="banner-svg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#45ccac;stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:#d72638;stop-opacity:0.8" />
            </linearGradient>
          </defs>
          <g class="mobius-strip">
            <path d="M 50,100 C 50,50 150,50 150,100 C 150,150 50,150 50,100 Z"
                  fill="none" stroke="url(#gradient1)" stroke-width="20"
                  stroke-linecap="round" transform="rotate(45 100 100)" />
            <path d="M 60,100 C 60,60 140,60 140,100 C 140,140 60,140 60,100 Z"
                  fill="none" stroke="url(#gradient1)" stroke-width="12"
                  opacity="0.6" stroke-linecap="round" transform="rotate(45 100 100)" />
          </g>
          <circle cx="50" cy="100" r="4" fill="#45ccac" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="150" cy="100" r="4" fill="#d72638" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <button class="scroll-arrow" @click="scrollToContent" aria-label="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </header>
  </div>
</template>

<script>
import './Banner.css'

export default {
  name: 'Banner',
  methods: {
    scrollToContent() {
      const main = document.querySelector('.main-content')
      if (main) main.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
