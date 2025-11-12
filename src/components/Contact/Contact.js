export async function sendEmail(formData) {

  console.log("Datos enviados:", formData)

  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 1500)
  })
}
