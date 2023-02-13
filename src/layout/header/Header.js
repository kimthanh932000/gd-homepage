import logo from "../../assets/images/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="l-header">
      <div className="container wrapper">
        <div className="p-logo">
          <img className="p-logo__img" src={logo} alt="logo" />
        </div>
        <nav className="p-nav">
          <ul className="p-nav-list">
            <li className="p-nav__item">
              <a href="#" className="p-nav__link">
                About
              </a>
            </li>
            <li className="p-nav__item">
              <a href="#" className="p-nav__link">
                Services
              </a>
            </li>
            <li className="p-nav__item">
              <a href="#" className="p-nav__link">
                Our Work
              </a>
            </li>
            <li className="p-nav__item">
              <a href="#" className="p-nav__link">
                Enroll Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
