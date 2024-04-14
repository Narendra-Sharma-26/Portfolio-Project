import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.docx'
import { themContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const transition = { duration: 2, type: "spring" }

    const theme = useContext(themContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='services' id='Services'>
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span>
                    Services provided by me includes Responsive Web Design,
                    <br /> User Interface (UI) Development, Frontend Development &<br/>
                    Animation and Interactivity.
                </span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>

                <div className="blur s-blur1" style={
                    { background: "#ABF1FF94" }
                }></div>
            </div>

            <div className="cards">
                <motion.div
                    animate={{left: '14rem'}}                
                    initial={{left: '19rem'}}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Photoshop, Adobe, Bootstrap"}
                    />

                </motion.div>

                <motion.div
                animate={{left: '-1rem'}}                
                initial={{top: '12rem', left: '-5rem'}}
                transition={transition}
                
                style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, CSS, JavaScript, React Js, Git & GitHub, Linux, SQL"}
                    />
                </motion.div>

                <motion.div
                animate={{top: '18rem'}}                
                initial={{top: '22rem', left: '14rem'}}
                transition={transition}
                
                style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Figma, Sketch"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services