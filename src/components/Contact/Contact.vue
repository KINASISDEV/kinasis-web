<template>
  <main class="contact-root">
    <section class="Banner banner-contact" aria-labelledby="contact-title">
      <h1 id="contact-title">Contacto</h1>
      <h2>¿Tienes una idea? Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad</h2>
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
              <p class="muted">+52 5627308641</p>
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
            <div>
              <input
                v-model="form.name"
                required
                placeholder="Nombre *"
                aria-label="Nombre"
                maxlength="40"
                title="Máximo 40 caracteres"
                @input="sanitizeNameInput"
                :class="{ 'input-error': errors.name }"
              />
              <p class="field-error" v-if="errors.name">{{ errors.name }}</p>
            </div>

            <div>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Email *"
                aria-label="Email"
                @input="validateEmailField"
                maxlength="30"
                title="Máximo 30 caracteres"
                :class="{ 'input-error': errors.email }"
              />
              <p class="field-error" v-if="errors.email">{{ errors.email }}</p>
            </div>

            <div>
              <input
                v-model="form.phone"
                type="tel"
                inputmode="numeric"
                placeholder="Teléfono"
                aria-label="Teléfono"
                maxlength="15"
                title="Sólo números, máximo 15 dígitos"
                @input="sanitizePhoneInput"
                :class="{ 'input-error': errors.phone }"
              />
              <p class="field-error" v-if="errors.phone">{{ errors.phone }}</p>
            </div>

            <div>
              <input v-model="form.company" placeholder="Empresa" aria-label="Empresa" maxlength="60" title="Máximo 60 caracteres" />
            </div>
          </div>

          <textarea
            v-model="form.message"
            rows="6"
            required
            placeholder="Describe tu idea o proyecto. ¿Qué problema quieres resolver? ¿Cuáles son tus objetivos?"
            aria-label="Mensaje"
            @input="validateMessageField"
            :class="{ 'input-error': errors.message }"
          ></textarea>
          <p class="field-error" v-if="errors.message">{{ errors.message }}</p>

          <div class="form-actions">
            <button type="submit" class="send-btn" :disabled="sending" :class="{ sending }" :aria-busy="sending">
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
import './Contact.css'
import { useContact } from './Contact.js'

const {
  form,
  errors,
  sending,
  tempStatus,
  tempStatusClass,
  showModal,
  modalType,
  modalTitle,
  modalMessage,
  buttonText,
  sanitizeNameInput,
  sanitizePhoneInput,
  validateEmailField,
  validateMessageField,
  handleSubmit,
  closeModal,
  validateAllFields
} = useContact()
</script>

<style src="./Contact.css"></style>