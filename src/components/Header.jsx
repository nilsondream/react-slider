import React from 'react'
import { Fire } from 'phosphor-react'

const Header = () => {
    return (
        <nav className='header-styled'>
            <div className='logo'>Grilled</div>
            <div className='book'>
                <Fire size={20} />
                <p>THE HOTTEST BURGER OF TODAY IS<br/>BBQ BACON CHEESEBURGER</p>
                <button>order now</button>
            </div>
        </nav>
    )
}

export default Header