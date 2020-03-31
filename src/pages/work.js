import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import workStyles from './work.module.scss'
import Head from '../components/head'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter:{
          fields: {
            collection: {eq: "project"}
          }
        }
      ) {
          edges {
            node {
              frontmatter {
                title
                tech
                description
                github
                web
              }
              html
              excerpt
              fields {
                slug
              }
            }                
          }
      }
    }
  `)
    
    return (
        <Layout> 
          <Head title='Blog' />

            <p>I'm looking for a new challenge that can help me broaden my experience and allow me to use my skill set for larger projects with higher impact. 
              If you have any available roles or just fancy saying hey, then <Link to='/contact'>get in touch</Link></p>
            <p>Here a selection of my works. You can check out more code at my <a href='https://github.com/dpgian' target='__blank'>GitHub</a></p>
            <div className={workStyles.works}>
                {
                    data.allMarkdownRemark.edges.map(edge => {
                        return (
                          <div className={workStyles.work} key={edge.node.frontmatter.title}>

                              {/* <img alt='image' className={workStyles.pic} src='' /> */}
                            
                            <p className={workStyles.title}>{edge.node.frontmatter.title}</p>
                            <p className={workStyles.subtitle}>{edge.node.frontmatter.tech}</p>
                            <p>{edge.node.frontmatter.description}</p>
                            <div className={workStyles.links}>
                              <Link to={edge.node.fields.slug}>Learn more</Link>
                              {edge.node.frontmatter.web === '' ? <></> : <a href={edge.node.frontmatter.web} target='__blank'>Web</a>}
                              <a href={edge.node.frontmatter.github} target='__blank'>Code</a>
                            </div>
                          </div>
                        )
                    })
                }
            </div>

        </Layout>
    )
}

export default Work