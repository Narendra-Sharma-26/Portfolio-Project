import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-scroll"
// import { useSpring, animated } from 'react-spring';



const Intro = () => {

    const transition = { duration: 2, type: "spring" }

    const theme = useContext(themContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                    <span>Narendra Sharma</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producing the Quality work</span>
                </div>

                <Link className='lnk' spy={true} to='Contact' smooth={true}>
                    <button className="button i-button">Hire me</button>
                </Link>

                <div className="i-icons">
                    <a href="https://github.com/Narendra-Sharma-26" target='
            _blank'><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/narendra-sharma-dev/" target='
            _blank2'><img src={LinkedIn} alt="" /></a>

                    <img src={Instagram} alt="" />
                </div>

            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img

                    initial={{ left: "-36%" }}
                    animate={{ left: "-24%" }}
                    transition={transition}

                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    animate={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-4%', left: '68%' }} className="floating-div">
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: '-3remrem', top: '18rem' }}
                    animate={{ left: '-0.5rem' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }} className="floating-div">
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro