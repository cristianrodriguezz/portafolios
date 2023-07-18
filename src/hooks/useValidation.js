export const validation = (body) => {
  if (body.skills.length === 0) {
    return "Es necesario seleccionar las skills.";
  }
  if (!body.name) {
    return "Es necesario seleccionar un nombre.";
  }
  if (!body.lastName) {
    return "Es necesario seleccionar un apellido.";
  }
  if (!body.work) {
    return "Es necesario seleccionar un rol.";
  }
  if (!body.country) {
    return "Es necesario seleccionar un país.";
  }
  if (!body.modality) {
    return "Es necesario seleccionar una modalidad.";
  }
  if (!body.experience) {
    return "Es necesario seleccionar la experiencia.";
  }
};
