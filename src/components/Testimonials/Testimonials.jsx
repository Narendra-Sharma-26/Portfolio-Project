import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "“Your code speaks volumes—clean, efficient, and user-friendly.” Thank you for enhancing our projects with your skills and creativity."
        },
        {
            img: profilePic2,
            review: "“Your attention to detail and commitment to creating visually appealing interfaces truly sets you apart.” Your dedication to crafting seamless user experiences is commendable."
        },
        {
            img: profilePic3,
            review: "“Thank you for turning complex designs into functional, intuitive websites.” Your expertise in HTML, CSS, and JavaScript shines through in every project."
        },
        {
            img: profilePic4,
            review: "“Your ability to translate user needs into elegant code is remarkable.” Your work directly impacts how users interact with digital platforms."
        },
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {
                clients.map((client,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                            </div>
                            
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Testimonials