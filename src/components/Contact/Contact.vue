<template>
  <main class="contact-root">
    <section class="Banner banner-contact" aria-labelledby="contact-title">
      <h1 id="contact-title">Contacto</h1>
      <h2>¿Tienes una idea? Cuentanos tu proyecto y te ayudaremos a hacerlo realidad </h2>
    </section>

    <section class="contact-container" role="region" aria-label="Formulario de contacto">
      <div class="contact-content">
        <aside class="contact-info" aria-label="Información de contacto">
          <div class="info-box" tabindex="0">
            <div class="info-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p class="muted">contacto@kinasis.com</p>
            </div>
          </div>

          <div class="info-box" tabindex="0">
            <div class="info-icon">📞</div>
            <div>
              <h4>Teléfono</h4>
              <p class="muted">+52 1 55 1234 5678</p>
            </div>
          </div>

          <div class="info-box" tabindex="0">
            <div class="info-icon">📍</div>
            <div>
              <h4>Ubicación</h4>
              <p class="muted">Ciudad, País</p>
            </div>
          </div>
        </aside>
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <h3>Cuéntanos tu idea</h3>
          <div class="form-grid">
            <input v-model="form.name" required placeholder="Nombre *" aria-label="Nombre" />
            <input v-model="form.email" type="email" required placeholder="Email *" aria-label="Email" />
            <input v-model="form.phone" placeholder="Teléfono" aria-label="Teléfono" />
            <input v-model="form.company" placeholder="Empresa" aria-label="Empresa" />
          </div>
          <textarea v-model="form.message" rows="6" required placeholder="Describe tu idea o proyecto. ¿Que problema quieres resolver? ¿Cuales son tus objetivos? " aria-label="Mensaje"></textarea>

          <div class="form-actions">
            <button type="submit" class="send-btn" :disabled="sending" aria-busy="sending">
              <span v-if="!sending">Enviar Proyecto</span>
              <span v-else>Enviando…</span>
            </button>
          </div>

          <p class="form-note" v-if="status" role="status">{{ status }}</p>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref} from 'vue'
import { sendEmail } from './Contact' 
import './Contact.css' 

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

async function handleSubmit() {

  if (!form.value.name || !form.value.email || !form.value.message) {
    status.value = 'Completa los campos obligatorios.';
    return;
  }
  sending.value = true
  status.value = ''
  try {
    await sendEmail({ ...form.value })
    status.value = 'Mensaje enviado correctamente. Te responderemos pronto 👍'
    form.value = { name: '', email: '', phone: '', company: '', message: '' }
  } catch (err) {
    console.error('sendEmail error', err)
    status.value = 'Error al enviar. Intenta de nuevo más tarde.'
  } finally {
    sending.value = false
  }
}

</script>

<style src="./Contact.css"></style>
