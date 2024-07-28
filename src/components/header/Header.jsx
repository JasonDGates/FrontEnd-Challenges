import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="back-button">
        <ArrowBackIcon />
      </div>
      <div className="dropdown-container">DropDowns</div>
      <div className="empty-div"></div>
      <div className="hamburger-menu">
        <MenuIcon />
      </div>
    </div>
  );
  // testing change
};

export default Header;
