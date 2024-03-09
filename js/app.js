document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente

  // Obtener los datos del formulario
  var formData = new FormData(this);

  // Realizar la solicitud POST usando Fetch
  fetch("enviar_formulario.php", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Hubo un problema al enviar el formulario.");
    }
    alert("¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.");
    document.getElementById("miFormulario").reset(); // Limpiar el formulario después del envío
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
  });
});