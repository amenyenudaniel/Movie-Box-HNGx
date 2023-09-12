import "./Footer.css";
import Facebook from "../../assets/fa-brands_facebook-square.png";
import Instagram from "../../assets/fa-brands_instagram.png";
import Twitter from "../../assets/fa-brands_twitter.png";
import Youtube from "../../assets/fa-brands_youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="app__footer__icons">
        <img src={Facebook} alt="facebook__icon" />
        <img src={Instagram} alt="instagram__icon" />
        <img src={Twitter} alt="twitter__icon" />
        <img src={Youtube} alt="youtube__icon" />
      </div>
      <div className="app__footer__links">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="copyright">&copy; 2021 MovieBox by Danny</p>
    </footer>
  );
};

export default Footer;
