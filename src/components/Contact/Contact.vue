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
              <p class="muted">kinaisisdev@outlook.com</p>
            </div>
          </div>

          <div class="info-box" tabindex="0">
            <div class="info-icon">📞</div>
            <div>
              <h4>Teléfono</h4>
              <p class="muted">+52 1 55 8795 7504</p>
            </div>
          </div>

          <div class="info-box" tabindex="0">
            <div class="info-icon">📍</div>
            <div>
              <h4>Ubicación</h4>
              <p class="muted">CDMX, MEXICO</p>
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
            <button type="submit" class="send-btn" :disabled="sending" :class="{ 'sending': sending }" aria-busy="sending">
              {{ buttonText }}
            </button>
          </div>

          <p class="form-note" v-if="tempStatus" role="status" :class="tempStatusClass">{{ tempStatus }}</p>
        </form>
      </div>
    </section>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-icon" :class="modalType">
          <span v-if="modalType === 'success'">✅</span>
          <span v-else>❌</span>
        </div>
        <h4>{{ modalTitle }}</h4>
        <p>{{ modalMessage }}</p>
        <button @click="closeModal" class="modal-btn">Cerrar</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { handleContactForm } from './Contact.js' 
import './Contact.css' 

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const sending = ref(false)
const tempStatus = ref('')
const tempStatusClass = ref('')
const showModal = ref(false)
const modalType = ref('')
const modalTitle = ref('')
const modalMessage = ref('')

const buttonText = computed(() => {
  if (sending.value) {
    return 'Enviando mensaje...'
  }
  return 'Enviar Proyecto'
})

function showSuccessModal() {
  modalType.value = 'success'
  modalTitle.value = '¡Éxito!'
  modalMessage.value = 'Mensaje enviado correctamente. Te responderemos pronto 👍'
  showModal.value = true
}

function showErrorModal(message) {
  modalType.value = 'error'
  modalTitle.value = 'Error'
  modalMessage.value = message || 'Error inesperado. Por favor intenta de nuevo.'
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  setTimeout(() => {
    modalType.value = ''
    modalTitle.value = ''
    modalMessage.value = ''
  }, 300)
}

// Función para mostrar estado temporal
function showTempStatus(message, type = 'info') {
  tempStatus.value = message
  tempStatusClass.value = type
  setTimeout(() => {
    tempStatus.value = ''
    tempStatusClass.value = ''
  }, 3000)
}

async function handleSubmit() {
  console.log('🎯 Formulario enviado desde Vue component')
  
  // Mostrar estado de carga
  sending.value = true
  showTempStatus('Enviando mensaje...', 'sending')
  
  try {
    // Llamar a la función que maneja toda la lógica
    const response = await handleContactForm(form.value)
    
    // Quitar estado temporal
    tempStatus.value = ''
    
    if (response.success) {
      // Éxito: mostrar modal y limpiar formulario
      showSuccessModal()
      if (response.clearForm) {
        form.value = { 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          message: '' 
        }
      }
    } else {
      // Error: mostrar modal de error
      showErrorModal(response.message)
    }
    
  } catch (error) {
    // Error inesperado
    console.error('💥 Error inesperado en handleSubmit:', error)
    showErrorModal('Error inesperado. Por favor intenta de nuevo.')
  } finally {
    // Quitar estado de carga
    sending.value = false
  }
}
</script>

<style src="./Contact.css"></style>
