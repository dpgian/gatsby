import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutSyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
          }}>

        <div className={layoutSyles.container}>
            <div className={layoutSyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
          </div>
    )
}

export default Layout