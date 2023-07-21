import { useContext, useEffect, useState } from "react";
import {  useAddToFavorite } from "../hooks/useAddToFavorite";
import GitHub from "./icons/GitHub";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import { UserFavContext } from "../context/userFav";
import Save from "./icons/Save";

export const Person = ({ person}) => {
  const {addFav,deleteFav, newFav} = useAddToFavorite()
  const {favs,setFavs} = useContext(UserFavContext)
  const [isFaved, setIsFaved] = useState()

  // let isFaved = favs.some( fav => fav === person._id)

  useEffect(() => {
    setIsFaved(favs.some( fav => fav === person._id))
  },[person]);

  const handleClickFav = () => {
    isFaved ? deleteFav(person._id) : addFav(person._id)
    setFavs([...favs,newFav])
    setIsFaved(!isFaved)
  }

  return (
    <li
    key={person._id}
      className="flex w-full mb-10 text-victoria-textPrimary p-2 bg-background-200 justify-center  h-96 shadow-pers rounded-xl bg-victoria-bgCardPrimary hover:shadow-2xl  transition-all"
    >
      
      <div className="flex flex-col w-full items-center justify-between text-center">
        <div className="relative left-[44%] h-0">
          {isFaved ? <Save color={'#FF0000'} onClick={handleClickFav}/> : <Save color={'#1f2937'} onClick={handleClickFav}/>}
        </div>

        <div className="border-b pb-2 w-full ">
          <div className="w-24 h-24 m-auto image-container">
            <input type="checkbox" className="hidden" id={person?._id} />
            <label className="label" htmlFor={person?._id}>
              <img
                key={person?._id}
                src={
                  person?.photo
                    ? person?.photo
                    : `https://ui-avatars.com/api/?name=${person?.name}+${person?.lastName}&background=598EF3`
                }
                alt={person?.name}
                className="w-full h-full object-cover rounded-full border-2 border-victoria-buttonPrimary transition-all"
                loading="lazy"
              />
            </label>
          </div>
          <p className="pt-3 break-words w-11/12 m-auto font-extrabold text-xl font-leto text-center text-victoria-textPrimary">
            {person?.name} {person?.lastName}
          </p>
          <p className="font-medium  m-auto h-5 flex items-center text-center mt-1 pr-2 pl-2  max-w-fit text-victoria-textPrimary rounded-full bg-victoria-bgCardSecondary">
            {person?.work}
          </p>
        </div>
        <p>Skills:</p>

        <div
          className="flex w-full h-9 pb-1 justify-start overflow-x-scroll whitespace-nowrap scroll-skill "
          id="scroll-skill"
        >
          {person?.skills?.map((skill) => (
            <span
              key={skill.id}
              className=" rounded-full mr-1 bg-victoria-important text-victoria-body font-bold px-1"
            >
              {skill.value}
            </span>
          ))}
        </div>

        <div>
          <p className="break-words">Exp: {person?.experience}</p>
          <p className="break-words w-52"> </p>
        </div>
        <div className="flex flex-col">
          <nav className="w-48 flex gap-4 justify-center items-center">
            {person?.social_media?.git_hub ? (
              <a
                href={person?.social_media?.git_hub}
                className=" bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary cursor-pointer w-10 h-10 rounded-full grid place-content-center"
              >
                <GitHub />
              </a>
            ) : null}
            {person?.social_media?.twitter ? (
              <a
                href={person?.social_media?.twitter}
                className=" bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary cursor-pointer w-10 h-10 rounded-full grid place-content-center"
              >
                <Twitter />
              </a>
            ) : null}

            {person?.social_media?.linkedin ? (
              <a
                href={person?.social_media?.linkedin}
                className=" bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary cursor-pointer w-10 h-10 rounded-full grid place-content-center"
              >
                <Linkedin />
              </a>
            ) : null}
          </nav>
        </div>
        {person?.portfolio ? (
          <a
            className=" bg-victoria-buttonPrimary rounded-full p-1 cursor-pointer"
            href={person.portfolio}
          >
            Ir al portafolio
          </a>
        ) : null}
        
      </div>
      
    </li>
  );
};

const ListPersons = ({ persons }) => {


  return (
    <ul className="gap-4  w-3/5 m-auto pr-2 pl-2  sm:my-0   sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:ml-20 lg:mr-20 xl:grid-cols-4 2xl:mr-60 2xl:ml-60 pt-8   text-victoria-bodyText ">
      {persons?.map((person) => (
        // eslint-disable-next-line react/jsx-key
        <Person  person={person}  />
      ))}
    </ul>
  );
};

export default ListPersons;
