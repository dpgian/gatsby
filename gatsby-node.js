const path  = require('path')

module.exports.onCreateNode = ( {node, getNode, actions} ) => {
    const { createNodeField } = actions

    if ( node.internal.type === 'MarkdownRemark' ) {
        const collection = getNode(node.parent).sourceInstanceName;
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'collection',
            value: collection
        })
        createNodeField({
            node,
            name: 'slug',
            value: `/${collection}/${slug}`
        })
    }
}

const COLLECTIONS = [
    {
        name: 'blog'
    },
    {
        name: 'project'
    }
]

const filterEdges = name => edges => edges.filter(edge => edge.node.fields.collection === name)

const buildPagesCollectionGenerator = ({ edges, createPage }) => ({ name }) => { 
    const filteredEdges = filterEdges(name)(edges)
    
    filteredEdges.forEach(edge => {
        
        createPage({
            path: edge.node.fields.slug,
            component: path.resolve(`./src/templates/${name}.js`),
            context: {
                slug: edge.node.fields.slug
            }
        })
    
    })
}

module.exports.createPages = async ( {graphql, actions} ) => {
    const { createPage } = actions

    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            collection
                            slug
                        }
                    }
                }
            }
        }
    `)

    const pagesCollectionGenerator = buildPagesCollectionGenerator({
        edges: response.data.allMarkdownRemark.edges,
        createPage
    })

    COLLECTIONS.forEach(pagesCollectionGenerator)
}