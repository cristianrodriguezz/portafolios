export const validarImagen = (event) => {
  const file = event.target.files[0];

  if (file) {
    const fileSize = file.size / 1024 / 1024;

    if (fileSize > 0.5) {
      event.target.value = "";
      alert("La imagen seleccionada es demasiado grande. Por favor, seleccione una imagen de menos de 500Kb.")
      return true
    }
  }
};
