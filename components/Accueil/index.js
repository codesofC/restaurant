import { useEffect } from "react"
import Image from "next/image"
import logo from "../../public/assets/logo.png"
import image from "../../public/assets/home_img.png"
import Aos from "aos"
import 'aos/dist/aos.css'

const Accueil = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-left" data-aos="zoom-in-up">
        <div className="logo-container">
            <Image
              src={logo}
              width='150'
              alt="image"
              loading="lazy"
            />
            <h1><span className="title">Chez</span>Toto</h1>
            <h4>Le gout de ça!</h4>
        </div>
        <div className="btns">
          <button>Commander</button>
          <button>Reserver</button>
        </div>
      </div>
      <div className="home-right">
        <svg className="svg-img" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
            <path id="blob" d="M465.5,312Q443,374,379.5,384.5Q316,395,269,421Q222,447,200.5,389.5Q179,332,143.5,312Q108,292,92.5,245.5Q77,199,126.5,181.5Q176,164,197,95.5Q218,27,274,51Q330,75,346.5,126.5Q363,178,425.5,214Q488,250,465.5,312Z" fill="#E86A33"></path>
        </svg>
        <div className="img-container">
          <Image
            src={image}
            width='900'
            className="img"
            alt='image'
            property="true"
          />
        </div>
      </div>
    </section>
  )
}

export default Accueil