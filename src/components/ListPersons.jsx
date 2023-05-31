import GitHub from "./icons/GitHub";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

const ListPersons = ({ persons }) => {
  return (
    <ul className="w-full gap-4 grid-cols-none sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid flex-row justify-center pt-8 pr-2 pl-2 sm:pr-4 text-victoria-bodyText ">
      {persons?.map((person) => (
        <li
          key={person.id}
          className="flex bg-background-200 h-52 w-full shadow-pers max-w-xl min-w-max rounded-xl bg-victoria-bgCardPrimary"
        >
          <div className="flex items-center justify-between ">
            <div className="h-full p-3 border-r">
              <div className="w-24 h-24 m-auto image-container">
                <input type="checkbox" className="hidden" id={person.id} />
                <label className="label" htmlFor={person.id}>
                  <img
                    key={person.id}
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full  border-background-400 transition-all"
                    loading="lazy"
                  />
                </label>
              </div>
              <p className="pt-3 font-extrabold text-xl font-leto text-center text-victoria-textPrimary">
                {person.name}
              </p>
              <p className="font-medium m-auto h-5 flex items-center text-center mt-1 pr-2 pl-2  max-w-fit text-victoria-textPrimary rounded-full bg-victoria-body">
                {person.role}
              </p>
            </div>
            <div className="flex flex-col">
              <div>
                <p>Sobre mi:</p>
              </div>
              <nav className="w-48 flex gap-4 justify-center items-center">
                <a
                  href={person.social_media?.github}
                  className=" bg-victoria-body hover:bg-victoria-buttonPrimary w-11 h-11 rounded-full grid place-content-center"
                >
                  <GitHub />
                </a>
                <a
                  href={person.social_media?.linkedin}
                  className="bg-victoria-body hover:bg-victoria-buttonPrimary w-11 h-11 rounded-full grid place-content-center"
                >
                  <Linkedin />
                </a>
                <a
                  href={person.social_media?.instagram}
                  className="bg-victoria-body hover:bg-victoria-buttonPrimary  w-11 h-11 rounded-full grid place-content-center"
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
