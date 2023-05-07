import { useEffect, useState } from "react"
import Image from "next/image"
import logo from '../../public/assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [navScroll, setNavScroll] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100){
            setNavScroll(true)
        }else{
            setNavScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

  return (
    <nav className={`${navScroll ? 'active' : ''}`}>
        <div 
            className={`burger-icon ${nav ? 'active' : ''} ${nav ? 'x' : ''}`}
            onClick={() => setNav(!nav)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="logo">
            <Image
                src={logo}
                width='60'
                alt="image"
                loading="lazy"
            />
        </div>
        <ul className={`nav-menu ${nav ? 'active' : ''}`}>
            <li onClick={() => setNav(false)}><a href="#home">Accueil</a></li>
            <li onClick={() => setNav(false)}><a href="#chef">Chef</a></li>
            <li onClick={() => setNav(false)}><a href="#menu">Menu</a></li>
            <li className="logo" onClick={() => setNav(false)}>
                <Image
                    src={logo}
                    width='60'
                    alt="image"
                    loading="lazy"
                />
            </li>
            <li onClick={() => setNav(false)}><a href="#gallery">Gallery</a></li>
            <li onClick={() => setNav(false)}><a href="#about">A propos</a></li>
            <li onClick={() => setNav(false)}><a href="#contact">Contact</a></li>
        </ul>
        
    </nav>
  )
}

export default Navbar