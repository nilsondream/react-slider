import React from 'react'
import { ArrowUpLeft } from 'phosphor-react'
import Slide from '../components/Slide'

const Home = () => {
    return (
        <div className='home-styled'>
            <div className='title'>
                <h1>UNLIMITED EDITION<br />BURGERS.</h1>
                <span><ArrowUpLeft size={20} weight='bold' />Collection</span>
            </div>
            <Slide />
        </div>
    )
}

export default Home