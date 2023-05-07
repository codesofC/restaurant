import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Image from "next/image";
import restau from "../../public/assets/restau.webp";

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="about" id="about">
      <div className="box-left" data-aos="fade-up-left">
        <Image src={restau} alt='image' width="500" className="img" 
                loading="lazy" />
      </div>
      <div className="box-right">
        <h1>A propos</h1>
        <div className="text" data-aos="zoom-in-up">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            sunt, autem odit provident minus alias velit, rem enim repellendus
            tempore incidunt voluptates accusantium voluptatem! Nisi harum porro
            dignissimos voluptas temporibus, nam aliquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            laudantium natus unde quisquam vitae cum voluptatibus id sit,
            laborum voluptas, nulla alias dolor aut totam! Unde ad tenetur,
            praesentium dolor dolorem culpa reiciendis magni eveniet officiis
            sit, nemo sapiente ab a repellat debitis accusamus! Animi, voluptate
            odio sed, culpa error ducimus veniam cumque perspiciatis in
            assumenda voluptatum dolor saepe officia tenetur. Nostrum
            voluptatibus odio animi in porro fugiat qui esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            possimus dicta in labore itaque sapiente odit suscipit sint
            consequuntur magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
