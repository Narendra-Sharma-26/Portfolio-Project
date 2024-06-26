import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-scroll"

const Works = () => {
    const theme = useContext(themContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Workded for big brands and Clients Like Amazon,<br /> Facebook, Upwork, Fiverr & Shopify.

                </span>

                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>


                <div className="blur s-blur1" style={
                    { background: "#ABF1FF94" }
                }></div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: "spring" }}

                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works