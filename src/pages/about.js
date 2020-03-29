import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <h1>About</h1>
            <p>This is some bio.</p>
            <Link to='/contact'>Get in touch.</Link>
        </Layout>
    )
}

export default AboutPage