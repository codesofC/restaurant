import Image from "next/image";
import paper from "../../public/assets/paper.png";
import { FaTiktok, FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import logo from "../../public/assets/logo.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="effect-paper">
        <Image src={paper} alt="image" className="svg" loading="lazy" />
      </div>
      <div className="infos">
        <div className="infos-content">
          <div className="logo">
            <Image src={logo} alt="image" width="100" loading="lazy" />
          </div>
          <p className="adress">
            <a
              href="https://www.google.com/search?q=70+Bd+Auguste+Blanqui%2C+75013+Paris%2C+France&source=hp&ei=5TpNZKakMIia1sQPtLmE8AU&iflsig=AOEireoAAAAAZE1I9Xc4iXKzClCS2y4VA2Q41zdMEi00&ved=0ahUKEwjmqtP_ts_-AhUIjZUCHbQcAV4Q4dUDCAk&uact=5&oq=70+Bd+Auguste+Blanqui%2C+75013+Paris%2C+France&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHhAdOggIABCPARDqAjoOCC4QjwEQmgMQqAMQ6gI6DgguEI8BEKgDEJsDEOoCUPoRWPoRYKMZaAJwAHgAgAGrAYgBqwGSAQMwLjGYAQCgAQKgAQGwAQo&sclient=gws-wiz"
              target="_blank"
            >
              70 Bd Auguste Blanqui, 75013 Paris, France
            </a>
          </p>
          <p className="tel">+33 6 11 22 33 44, +33 6 12 22 53 30</p>
          <p className="site">
            <a href="#">cheztotorestau.com</a>
          </p>
          <div className="day-hours">
            <p className="days">Mercredi à Dimanche</p>
            <p className="hours">6h PM - 11h30 PM</p>
          </div>
          <div className="btn">
            <button>Reserver</button>
          </div>
          <div className="socials-medias">
            <a href="">
              <FaInstagram className="icon" />
            </a>
            <a href="">
              <FaFacebook className="icon" />
            </a>
            <a href="">
              <FaSnapchat className="icon" />
            </a>
            <a href="">
              <FaTiktok className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="effect-paper">
        <Image src={paper} alt="image" className="svg-to" loading="lazy" />
      </div>
    </section>
  );
};

export default Contact;
