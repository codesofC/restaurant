import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import paper from "../../public/assets/paper.png";
import platImg from "../../public/assets/camarao.png";
import dessertImg from "../../public/assets/img9.jpeg";

export default function Menu({ menu }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="menu" id="menu">
      <div className="effect-paper">
        <Image src={paper} alt="image" className="svg" loading="lazy" />
      </div>
      <div className="menu-container">
        <h1>MENU</h1>
        <div className="menu-content">
          <div className="menu-element plats" data-aos="fade-right">
            <h2>Plats</h2>
            <div className="menu-element-box plats-price">
              {menu[0].plats.map((item, index) => (
                <div key={index} className="plat">
                  <div className="name-ingredients">
                    <p className="name">{item.nom}</p>
                    <p className="ingredients">{item.ingredients}</p>
                  </div>
                  <div className="lign"></div>
                  <div className="price">{item.prix} $</div>
                </div>
              ))}
            </div>
            <div className="img">
              <Image src={platImg} alt="image" width="200" loading="lazy" />
            </div>
          </div>
          <div className="menu-element drinks" data-aos="flip-up">
            <h2>Drinks</h2>
            <div className="menu-element-box drinks-price">
              {menu[1].boissons.map((item, index) => (
                <div key={index} className="drink">
                  <div className="name">{item.nom}</div>
                  <div className="price">{item.prix} $</div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-element desserts" data-aos="fade-left">
            <h2>Dessert</h2>
            <div className="menu-element-box desserts-price">
              {menu[2].dessert.map((item, index) => (
                <div key={index} className="dessert">
                  <div className="name">{item.nom}</div>
                  <div className="price">{item.prix} $</div>
                </div>
              ))}
            </div>
            <div className="img">
              <Image src={dessertImg} alt="image" width="200" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="effect-paper">
        <Image src={paper} alt="image" className="svg-to" loading="lazy" />
      </div>
    </section>
  );
}
