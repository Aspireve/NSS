import hamburgerMenu from "../assets/static_images/bars-solid.svg";
import closeButton from "../assets/static_images/xmark-solid.svg";

export const QuickMenu = ({isOpen, setSidebar}) => {
  return (
    <div className="menu-bar" onClick={() => setSidebar(prev => !prev)}>
      {isOpen ? (
        <img src={closeButton} alt="close button" />        
      ) : (
        <img src={hamburgerMenu} alt="menu button" />
      )}
    </div>
  );
};
