import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const App = () => {
    return (
        <Layout>
            <Head title='Home'/>
            <h1>Hello.</h1>
            <h2>I'm Gian, a full-stack developer. Welcome to my blog.</h2>
            <Link to='/contact'>Need a developer?</Link>
        </Layout>
    )
}

export default App