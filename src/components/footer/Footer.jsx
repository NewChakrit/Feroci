import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="main-footer">
        {/* Contact us */}
        <div className="contact-footer">
          <div className="contact-title">
            <strong>CONTACT US</strong>
            <br />
          </div>
          <div className="contact-tel">
            <p>(213) 875-5656</p>
            <br />
          </div>
          <div className="contact-address">
            <p>
              David Geffen Hall <br />
              10 lincoln Center Plaza <br />
              New York, NY 10023-6970
            </p>
          </div>
        </div>

        {/* Join our community */}
        <div className="community-footer">
          <div className="community-title">
            <strong>JOIN OUR COMMUNITY</strong>
          </div>
          <div className="community-app-logo">
            <div className="fb logo" style={{ heigth: "100px" }}>
              <a
                href="https://www.facebook.com/FerociPhilharmonic/"
                target={"_blank"}
              >
                <FaFacebookSquare />
              </a>
            </div>
            <div className="ig logo">
              <a
                href="https://www.instagram.com/explore/tags/ferociphilharmonicwinds/"
                target={"_blank"}
              >
                <FaInstagramSquare />
              </a>
            </div>
            <div className="tw logo">
              <a href="https://twitter.com/home?lang=th" target={"_blank"}>
                <FaTwitterSquare />
              </a>
            </div>
            <div className="yt logo">
              <a
                href="https://www.youtube.com/channel/UCzs13LQpgK4ilC10CzmI3lw"
                target={"_blank"}
              >
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-div">
        <hr className="hr-footer" />
      </div>
      <div className="sub-main-footer">
        <div className="fro">FROCI PHILHARMONIC ORCHESTRA © 2022</div>
      </div>
      <div className="footer-space"></div>
    </>
  );
}

export default Footer;
