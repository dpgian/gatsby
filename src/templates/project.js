import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
            title
            body {
                json
            }
        }
    }
`

const Project = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulProject.title} />
           <h2>{props.data.contentfulProject.title}</h2>
           {documentToReactComponents(props.data.contentfulProject.body.json, options)}
        </Layout>
    )
}

export default Project