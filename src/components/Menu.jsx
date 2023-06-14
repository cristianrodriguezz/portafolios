const Menu = ({children}) => {
  return (
    <nav className="bg-black sticky w-52 sm:hidden">
      {children}
    </nav>
  );
};

export default Menu;
