import { useEffect, useState } from 'react'
import {
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import cppLogo from '../../assets/images/C++_Logo.svg.png'
import springbootLogo from '../../assets/images/springboot.png'
import birdGif from '../../assets/images/happy-birds.gif'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeout;
  
    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, []);

      return(
        <>
          <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                  <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                  />
                </h1>
                <p>
                  I'm a very ambitious Software engineer looking for a role in an
                  established company with the opportunity to work with the latest
                  technologies on challenging and diverse projects.
                </p>
                <p>
                  I'm quiet confident, naturally curious, and perpetually working on
                  improving my skills one problem at a time.
                </p>
                <p>
                  If I had to define myself in one sentence, that would be 
                  hard working, sociable, a video gamer, a cooking enthusiast, and a technology enthusiast.
                </p>
            </div>

            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faJava} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <img src={springbootLogo} />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <img src={cppLogo} />
                </div>
            </div>
            {/* <div className = "gif-container">
              <img  src={birdGif} alt="Energy"/>
            </div> */}
            
        </div>
      </div>
      <Loader type="pacman" />
      </>   
      )
      

}
export default About
