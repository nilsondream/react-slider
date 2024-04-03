import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import B01 from '../assets/hamburger-01.png'
import B02 from '../assets/hamburger-02.png'
import B03 from '../assets/hamburger-03.png'
import B04 from '../assets/hamburger-04.png'
import B05 from '../assets/hamburger-05.png'
import B06 from '../assets/hamburger-06.png'
import B07 from '../assets/hamburger-07.png'
import B08 from '../assets/hamburger-08.png'
import B09 from '../assets/hamburger-09.png'
import B010 from '../assets/hamburger-10.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Slide = () => {

    return (
        <div className='slider-container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide>
                    <img src={B01} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B02} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B03} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B04} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B05} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B06} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B07} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B08} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B09} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B010} alt="burger" />
                </SwiperSlide>

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20} />
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slide