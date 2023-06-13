import { Link } from "react-router-dom";
import Linkedin from "./icons/Linkedin";

const Footer = () => {
  return (
    <footer
      className="w-full bg-victoria-footer"
      aria-labelledby="footer-heading"
    >
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-col items-baseline space-y-6">
          <div className="mx-auto">
            <span className="mx-auto mt-2 text-sm text-gray-500 flex items-center gap-1 flex-col sm:flex-row">
              Copyright © 2023 - Created by
              <a
                href="https://www.linkedin.com/in/cristian-rodriguezz/"
                className="mx-2 text-blue-500 hover:text-gray-500 flex items-center gap-3"
                rel="noopener noreferrer"
              >
                Cristian Rodriguez <Linkedin />
              </a>
              .Since 2023
              <Link to={'/terminos'} className="text-blue-500 hover:text-gray-500 cursor-pointer" >
                Términos y condiciones
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
