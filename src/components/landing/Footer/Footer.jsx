import FadeContent from "../../../content/Animations/FadeContent/FadeContent";
import ReactBitsLogo from "../../../assets/logos/react-bits-logo.svg";
import { AiFillHeart } from "react-icons/ai";
import { Logo } from '../../common/Misc/SVGComponents';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FadeContent blur duration={600}>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo-container">
              <Logo />
            </div>
            <p className="footer-description">Website created with <AiFillHeart className="footer-heart" /> by <a href="https://github.com/Harsh-BH" target="_blank" className="footer-creator-link">this guy</a></p>
            <p className="footer-copyright">© {new Date().getFullYear()} DevSoc</p>
          </div>

          <div className="footer-links">
            <a href="https://github.com/devsoc-iitkgp" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
};

export default Footer;
