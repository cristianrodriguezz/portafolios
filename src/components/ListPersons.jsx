import GitHub from "./icons/GitHub";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

const ListPersons = ({ persons }) => {
  return (
    <ul className="w-full flex-wrap gap-4 grid-cols-none sm:grid-cols-2 lg:grid-cols-3 lg:ml-20 lg:mr-20  xl:grid-cols-4 2xl:mr-60 2xl:ml-60 grid flex-row justify-center pt-8 pr-2 pl-2 sm:pr-4 text-victoria-bodyText ">
      {persons?.map((person) => (
        <li
          key={person.id}
          className="flex p-2 bg-background-200 justify-center w-full h-96 shadow-pers max-w-xl min-w-max rounded-xl bg-victoria-bgCardPrimary"
        >
          <div className="flex flex-col w-full items-center justify-between">
            <div className="border-b pb-2 w-full ">
              <div className="w-24 h-24 m-auto image-container">
                <input type="checkbox" className="hidden" id={person.id} />
                <label className="label" htmlFor={person.id}>
                  <img
                    key={person.id}
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full border-2 border-victoria-buttonPrimary transition-all"
                    loading="lazy"
                  />
                </label>
              </div>
              <p className="pt-3 break-words w-11/12 m-auto font-extrabold text-xl font-leto text-center text-victoria-textPrimary">
                {person.name}
              </p>
              <p className="font-medium  m-auto h-5 flex items-center text-center mt-1 pr-2 pl-2  max-w-fit text-victoria-textPrimary rounded-full bg-victoria-bgCardSecondary">
                {person.role}
              </p>
            </div>
            <div>
              <p>Skills</p>
              <p className="break-words w-52">Soy [Tu nombre], un desarrollador web apasionado por la creación de sitios modernos y funcionales</p>
            </div>
            <div className="flex flex-col">
              <nav className="w-48 flex gap-4 justify-center items-center">
                <a
                  href={person.social_media?.github}
                  className=" bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary w-10 h-10 rounded-full grid place-content-center"
                >
                  <GitHub />
                </a>
                <a
                  href={person.social_media?.linkedin}
                  className="bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary w-10 h-10 rounded-full grid place-content-center"
                >
                  <Linkedin />
                </a>
                <a
                  href={person.social_media?.instagram}
                  className="bg-victoria-bgCardSecondary hover:bg-victoria-buttonPrimary  w-10 h-10 rounded-full grid place-content-center"
                >
                  <Twitter />
                </a>
              </nav>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListPersons;
