import iconFacebook from "/icons/icon-facebook.png";
import iconInstagram from "/icons/icon-instagram.png";
import iconTwitter from "/icons/icon-twitter.png";
import iconMail from "/icons/icon-mail.png";
import iconTwitch from "/icons/icon-twitch.png";

import "./App.css";

const App = () => (
  <div className="container">
    <div className="item bold">
      <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
      <div>binarcarrental@gmail.com</div>
      <div>081-233-334-808</div>
    </div>
    <div className="item">
      <div>Our services</div>
      <div>Why Us</div>
      <div>Testimonial</div>
      <div>FAQ</div>
    </div>
    <div className="item bold">
      <div>Connect with us</div>
      <div className="icons">
        <img src={iconFacebook} alt="facebook" />
        <img src={iconInstagram} alt="instagram" />
        <img src={iconTwitter} alt="twitter" />
        <img src={iconMail} alt="mail" />
        <img src={iconTwitch} alt="twitch" />
      </div>
    </div>
    <div className="item bold">
      <div>Copyright Binar 2022</div>
      <div className="block" />
    </div>
  </div>
);
export default App;
