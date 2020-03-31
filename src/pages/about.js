import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <h2>Hi!</h2>
            <p>
                I'm Gian a web developer based in London, UK.
                <br />
                I do code because I love it. I like building web apps that facilitate peoples lives. 
                I like the industry. I like to make the web a better place.
                <br />
                I specialise in frontend development using tools such as React.
                <br />
                I'm always looking forward for new opportunities, hopefully one day we cross paths and make this world a better place together.
                <br />
                <br />
                If you wish to work with me, <Link to='/contact'>get in touch.</Link>
            </p>
        </Layout>
    )
}

export default AboutPage