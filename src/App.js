import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/Global.scss'

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App