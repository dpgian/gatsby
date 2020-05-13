import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import workStyles from './work.module.scss'
import Head from '../components/head'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            slug
            title
            tech
            github
            web
            description
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
                    data.allContentfulProject.edges.map(edge => {
                        return (
                          <div className={workStyles.work} key={edge.node.title}>

                              {/* <img alt='image' className={workStyles.pic} src='' /> */}
                            
                            <p className={workStyles.title}>{edge.node.title}</p>
                            <p className={workStyles.subtitle}>{edge.node.tech}</p>
                            <p>{edge.node.description}</p>
                            <div className={workStyles.links}>
                              <Link to={`work/${edge.node.slug}`}>Learn more</Link>
                              {edge.node.web === '' ? <></> : <a href={edge.node.web} target='__blank'>Web</a>}
                              <a href={edge.node.github} target='__blank'>Code</a>
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