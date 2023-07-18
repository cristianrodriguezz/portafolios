const  user  =  JSON.parse(localStorage.getItem('user'))?.user 

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
    portfolio: user.portfolio || "",
    social_media: {
      linkedin: user.social_media.linkedin || '' ,
      git_hub: user.social_media.git_hub || '',
      twitter: user.social_media.twitter || '',
    },
  };

  return body;
};
