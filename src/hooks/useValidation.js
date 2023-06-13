export const validation = (body) => {
  if (body.skills.length === 0) {
    return "Es necesario seleccionar las skills.";
  }
  if (!body.name) {
    return "Es necesario un nombre.";
  }
  if (!body.lastName) {
    return "Es necesario un apellido.";
  }
  if (!body.work) {
    return "Es necesario un work.";
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
