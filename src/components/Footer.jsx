import React from 'react'
import { ArrowUpRight, InstagramLogo } from 'phosphor-react'

const Footer = () => {
    return (
        <footer className='footer-styled'>
            <div className='footer-left'>
                <span>Collection</span>
                <span>Vicio cities</span>
                <span>About us</span>
                <span>Work here</span>
                <span>Faqs</span>
            </div>

            <div className='footer-right'>
                <span>Presskit</span>
                <span>Legal Matters</span>
                <button>ENG</button>
                <div>
                    <InstagramLogo size={20} />
                    <ArrowUpRight weight='bold' size={20} />
                </div>
            </div>
        </footer>
    )
}

export default Footer