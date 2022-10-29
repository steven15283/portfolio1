import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Loader from 'react-loaders'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['t', 'e', 'v', 'e', 'n']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    let timeout;
  
    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          
          <img className = "logo" src={LogoTitle} alt="developer"/>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}/>
          <span className={`${letterClass} _16`}> </span>
          <span className={`${letterClass} _17`}>a</span>
          <span className={`${letterClass} _18`}>n</span>
          <span className={`${letterClass} _19`}>d</span>
          <span className={`${letterClass} _20`}> </span>
          <span className={`${letterClass} _21`}>I</span>
          <span className={`${letterClass} _22`}>'m</span>
          <span className={`${letterClass} _23`}> </span>
          <span className={`${letterClass} _24`}>a</span>
          <br/>
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={100}/>
          </h1>
          <h2>Full Stack Developer - React/Springboot </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Logo />
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home
