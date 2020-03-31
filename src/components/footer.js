import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <a href='https://github.com/dpgian' target='__blank'>Github </a> 
            • 
            <a href='https://www.linkedin.com/in/gian-de-palma-17932b14a/' target='__blank'> LinkedIn </a>  
            <p>Created by {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer