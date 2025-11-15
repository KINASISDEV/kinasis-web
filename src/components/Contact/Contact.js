import emailjs from '@emailjs/browser';

const PUBLIC_API_KEY = '7RA0wT7ILYo07f4P8';
const TEMPLATE_ID = 'template_o98tvom';
const SERVICE_ID = 'service_ku31at8';

async function sendEmail(formData) {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'No proporcionado',
      company: formData.company || 'No especificada',
      message: formData.message
    };
    
    const result = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams, 
      PUBLIC_API_KEY
    );

    return { 
      ok: true, 
      message: "Email enviado correctamente",
      result: result 
    };
  } catch (error) {
    return { 
      ok: false, 
      message: "Error al enviar el email: " + (error.text || error.message),
      error: error 
    };
  }
}

export async function handleContactForm(formData) {
  if (!formData.name || !formData.email || !formData.message) {
    return {
      success: false,
      message: 'Por favor completa los campos obligatorios (Nombre, Email y Mensaje)',
      clearForm: false
    }
  }
  try {
    const result = await sendEmail(formData)
    if (result.ok) {
      return {
        success: true,
        message: 'Mensaje enviado correctamente. Te responderemos pronto 👍',
        clearForm: true
      }
    } else {
      return {
        success: false,
        message: result.message || 'Error al enviar el mensaje',
        clearForm: false
      }
    }
    
  } catch (error) {
    return {
      success: false,
      message: 'Error inesperado. Por favor intenta de nuevo.',
      clearForm: false
    }
  }
}
