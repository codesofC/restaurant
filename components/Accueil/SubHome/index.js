import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Image from "next/image"
import sav from "../../../public/assets/bchu.png"
import soda from "../../../public/assets/soda.png"

const SubHome = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

  return (
    <div className='subhome'>
        <div className="subhome-left" data-aos="fade-right">
            <div className="glass">
                <Image
                    src={sav}
                    width='200'
                    className="img"
                    alt="image"
                    loading="lazy"
                />
            </div>
        </div>
        <div className="subhome-middle">
            <h1>La gastronomie haitienne</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid voluptate quidem commodi est, laudantium alias dolorum 
                ex ducimus porro nihil.
            </p>
        </div>
        <div className="subhome-right" data-aos="fade-left">
            <div className="glass">
                <Image
                    src={soda}
                    width='200'
                    className="img"
                    alt="image"
                    loading="lazy"
                />
            </div>
        </div>
    </div>
  )
}

export default SubHome