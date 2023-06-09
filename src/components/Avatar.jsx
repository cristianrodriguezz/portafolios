import { useState } from "react";
import { stuffedCard } from "../hooks/useStuffedCard";

const Avatar = ({ urlAvatar }) => {
  const { user } = JSON.parse(window.localStorage.getItem("user"));
  const [urlImages, setUrlImg] = useState(()=> user?.user?.photo ? '' : user?.photo );

  const handleChange = (e) => {
    e.preventDefault();
    const url = URL.createObjectURL(e.target.files[0]);
    setUrlImg(url);
    urlAvatar(url);
    stuffedCard("", url);
  };

  return (
    <form id="formAvatar" className="w-52 h-auto m-auto  ">
      <div className="w-24 h-24 m-auto image-container">
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
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
    </form>
  );
};

export default Avatar;
