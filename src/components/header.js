import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.head}>
                    <h1>
                        <Link className={headerStyles.title} to='/'>
                            {data.site.siteMetadata.title}
                        </Link>
                    </h1>
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                            <div className={headerStyles.themeSwitchWrapper}>
                            <label className={headerStyles.tog}>
                                <input 
                                    type='checkbox'
                                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                    checked={theme === 'dark'}
                                    /> 
                                    <div className={headerStyles.slider} />
                            </label>
                            </div>
                        )}
                    </ThemeToggler>
                </div>


                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link to='/' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                        </li>
                        <li>
                            <Link to='/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                        </li>    
                        <li>
                            <Link to='/about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                        </li>
                    </ul>    
                </nav>
            </header>
        </>
    )
}

export default Header