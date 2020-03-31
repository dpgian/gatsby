import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    let title = props.title==='Home' ? '' : props.title + ' | '

    return (
        <Helmet title={`${title} ${data.site.siteMetadata.title}`}/>
    )
}

export default Head