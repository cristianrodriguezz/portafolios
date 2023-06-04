const inputValues = {};

export const stuffedCard = (input, urlAvatar, skills) => {
  inputValues[input.name] = input.value;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  let body;

  body = {
    name: inputValues.name || "",
    lastName: inputValues.lastName || "",
    email: inputValues.email || "",
    work: inputValues.work || "",
    country: inputValues.country || "",
    photo: urlAvatar || "",
    modality: inputValues.modality || "",
    experience: inputValues.experience || "",
    favorite: inputValues.favorite || "",
    hasBadge: inputValues.hasBadge || "",
    linkPortfolio: inputValues.linkPortfolio || "",
    linkedin: inputValues.linkedin || "",
    github: inputValues.github || "" ,
    twitter: inputValues.twitter || "" ,
    skills: skills || [],
  };

  return body;
};
