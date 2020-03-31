import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contacts' />
            <h2>Contacts</h2>
            <p>What's up? You can get in touch in any of the following ways</p>
            <br />
                <a href='mailto:dplgian@gmail.com?subject=I found you on the web and...'>Email</a>: dplgian@gmail.com
            <br />
            <br />
            <a href='https://www.linkedin.com/in/gian-de-palma-17932b14a/' target='__blank'>LinkedIn</a>
        </Layout>
    )
}

export default ContactPage