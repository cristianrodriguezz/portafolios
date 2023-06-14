const  user  = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')).user : null

export const stuffedCard = (input, skills) => {

  user[input.name] = input.value;

  let body;

  body = {
    name: user.name || "",
    lastName: user.lastName || "",
    email: user.email || "",
    work: user.work || "",
    country: user.country || "",
    photo: user.photo || '',
    modality: user.modality || "",
    experience: user.experience || "",
    favorite: user.favorite || "",
    hasBadge: user.hasBadge || "",
    linkPortfolio: user.linkPortfolio || "",
    linkedin: user.linkedin || "",
    github: user.github || "" ,
    twitter: user.twitter || "" ,
    skills: skills || [],
  };

  return body;
};
