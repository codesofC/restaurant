import { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from "next/image";
import chefImg from "../../public/assets/chef.png";

const ChefSection = () => {

  const [display, setDisplay] = useState(false)

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="chef-section" id="chef">
      <div className="box-left">
        <div className="container-img" data-aos="zoom-in">
          <Image src={chefImg} alt='image' width="500" className="img"
                loading="lazy" />
          <h1>Chef</h1>
          <h3>Cristooo Jr</h3>
        </div>
        <div className="overImage">
          <button onClick={()=>setDisplay(true)}>Plus infos</button>
        </div>
      </div>
      <div className={`box-right ${display ? 'active' : ''}`} data-aos={`${display ? '' : 'fade-left'}`}>
        <div onClick={() => setDisplay(false)} className="close">
          <span></span>
          <span></span>
        </div>
        <h1>Chef</h1>
        <h3>Cristooo Jr</h3>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            harum dignissimos voluptates? Doloremque facilis officiis eos minus
            nostrum? Est, minus impedit? Sunt maxime nostrum fuga? Tempora eum
            dicta officiis et? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum fugit cumque rem repellendus impedit sint
            magnam aspernatur consequuntur nihil nostrum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium sunt perspiciatis quibusdam, ipsum quidem aliquid nulla
            magnam nesciunt commodi! Omnis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            libero, quidem labore eveniet inventore dicta eos perferendis non
            sint nulla repudiandae, unde ab! Eos, inventore facere obcaecati nam
            cumque aspernatur commodi accusantium porro vel. Soluta?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
