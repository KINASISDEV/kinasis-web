<template>
  <section class="goals-section">
    <h1 class="goals-title">Nuestras Metas</h1>

    <div class="goals-timeline">

      <article class="goal-card short-term">
        <div class="goal-badge">📅 Corto Plazo</div>
        <div class="goal-content">
          <div class="goal-image">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="40" width="360" height="240" rx="20" fill="currentColor" opacity="0.1"/>
              <rect x="40" y="60" width="120" height="80" rx="10" fill="currentColor" opacity="0.3"/>
              <rect x="180" y="60" width="180" height="80" rx="10" fill="currentColor" opacity="0.3"/>
              <rect x="40" y="160" width="180" height="80" rx="10" fill="currentColor" opacity="0.3"/>
              <rect x="240" y="160" width="120" height="80" rx="10" fill="currentColor" opacity="0.3"/>
              <path d="M200 20 L220 30 L200 40 L180 30 Z" fill="currentColor"/>
              <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.6"/>
              <circle cx="270" cy="100" r="15" fill="currentColor" opacity="0.6"/>
              <text x="200" y="280" text-anchor="middle" font-size="16" fill="currentColor" opacity="0.5">&lt;/&gt;</text>
            </svg>
          </div>
          <div class="goal-text">
            <h2>Ser referentes en Desarrollo de Software</h2>
            <p>
              Consolidarnos como un equipo experto en desarrollo de software, entregando soluciones
              personalizadas y de alta calidad para aplicaciones web, móviles y sistemas empresariales.
            </p>
          </div>
        </div>
      </article>


      <article class="goal-card medium-term">
        <div class="goal-badge">⚡ Mediano Plazo</div>
        <div class="goal-content">
          <div class="goal-image">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="100" fill="currentColor" opacity="0.1"/>
              <circle cx="200" cy="150" r="70" fill="currentColor" opacity="0.2"/>
              <circle cx="200" cy="150" r="40" fill="currentColor" opacity="0.3"/>
              <path d="M200 110 Q220 130 200 150 Q180 130 200 110" fill="currentColor" opacity="0.5"/>
              <circle cx="150" cy="100" r="20" fill="currentColor" opacity="0.4"/>
              <circle cx="250" cy="100" r="20" fill="currentColor" opacity="0.4"/>
              <circle cx="120" cy="180" r="25" fill="currentColor" opacity="0.4"/>
              <circle cx="280" cy="180" r="25" fill="currentColor" opacity="0.4"/>
              <path d="M200 150 L200 200 M180 185 L200 200 L220 185" stroke="currentColor" stroke-width="3" fill="none" opacity="0.6"/>
              <text x="200" y="270" text-anchor="middle" font-size="20" fill="currentColor" opacity="0.5">AI</text>
            </svg>
          </div>
          <div class="goal-text">
            <h2>Crear soluciones con IA y Automatización</h2>
            <p>
              Integrar inteligencia artificial y automatización avanzada para desarrollar sistemas inteligentes
              que optimicen procesos, reduzcan costos y mejoren la toma de decisiones mediante análisis predictivo.
            </p>
          </div>
        </div>
      </article>


      <article class="goal-card long-term">
        <div class="goal-badge">🚀 Largo Plazo</div>
        <div class="goal-content">
          <div class="goal-image">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="80" fill="currentColor" opacity="0.1"/>
              <ellipse cx="200" cy="200" rx="150" ry="30" fill="currentColor" opacity="0.15"/>
              <path d="M200 80 L220 140 L280 140 L230 180 L250 240 L200 200 L150 240 L170 180 L120 140 L180 140 Z" fill="currentColor" opacity="0.4"/>
              <circle cx="80" cy="120" r="15" fill="currentColor" opacity="0.3"/>
              <circle cx="320" cy="120" r="15" fill="currentColor" opacity="0.3"/>
              <circle cx="50" cy="200" r="20" fill="currentColor" opacity="0.3"/>
              <circle cx="350" cy="200" r="20" fill="currentColor" opacity="0.3"/>
              <path d="M200 50 Q190 60 200 70 Q210 60 200 50" fill="currentColor" opacity="0.5"/>
              <text x="200" y="35" text-anchor="middle" font-size="24" fill="currentColor" opacity="0.5">★</text>
            </svg>
          </div>
          <div class="goal-text">
            <h2>Reconocimiento Nacional e Internacional</h2>
            <p>
              Posicionarnos como una empresa tecnológica de referencia en México y expandir nuestra presencia
              a mercados internacionales, siendo reconocidos por innovación, calidad y transformación digital.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import './Goals.css';
</script>
