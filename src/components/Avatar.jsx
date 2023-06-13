import { useState } from "react";

import { validarImagen } from "../hooks/validarImage";

const Avatar = ({ urlAvatar }) => {
  const { user } = JSON.parse(window.localStorage.getItem("user"));
  const [urlImages, setUrlImg] = useState(user?.photo );
  console.log(user?.photo );

  const handleChange = (e) => {
    e.preventDefault();
    const url = URL.createObjectURL(e.target.files[0]);
    setUrlImg(url);
    urlAvatar(url);
    validarImagen(e)
  };

  return (
    <form id="formAvatar" className="w-52 h-auto m-auto flex flex-col justify-center items-center  ">
      <div className="w-24 h-24 m-auto mb-2 image-container">
        {!urlImages ? (
          <img
            src="https://res.cloudinary.com/dwy6oevco/image/upload/v1685696529/Images/adalczr51wmgdl1sshkz.png"
            alt="adsfasd"
            className="w-full h-full object-cover rounded-full border-2 border-victoria-buttonPrimary transition-all"
            loading="lazy"
          />
        ) : <img
            src={urlImages}
            alt="avatar"
            className="w-full h-full object-cover rounded-full border-2 border-victoria-buttonPrimary transition-all"
            loading="lazy"
          /> 
          }
      </div>
      <label htmlFor="image" className="p-1 m-auto rounded-xl bg-victoria-buttonPrimary ">Seleccioná una imágen</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        style={{display: 'none'}}
        onChange={handleChange}
      />
    </form>
  );
};

export default Avatar;
