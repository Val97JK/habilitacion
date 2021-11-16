import React from 'react'
import Footer from '../content/Footer'
import Header from '../content/Header'

const Layout = ({children}) => {
    return (
        <div>
        <Header/>
        {children}
        <Footer/>
        </div>
    )
}

export default Layout;