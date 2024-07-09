import "../styles/NavBar.scss";
import logo from "../assets/images/logo .png";

function NavBar() {
  return (
    <nav>
      <div className="nav_left_section">
        <img className="nav-logo" src={logo} alt="logo" />
        <div className="nav_left_buttons">
          <a className="btn_nav" href="/">
            Accueil
          </a>
          <a className="btn_nav" href="/devis">
            Devis
          </a>
          <a className="btn_nav" href="/contact">
            Contact
          </a>
        </div>
      </div>
      <div className="nav_right_section">
        <a className="btn_nav" id="login_button" href="/login">
          🔑 Login
        </a>
        <a className="btn_nav" href="/login">
          logout
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
