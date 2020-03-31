import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const App = () => {
    return (
        <Layout>
            <Head title='Home'/>
            <h2>Simple and Clean —</h2>
            <h3>It's me. You know. Gian.</h3>
            <br />
            <h4>Welcome to my website!</h4>
            
            <h5>
                <Link to='/contact'>Need a developer?</Link>
            </h5>
        </Layout>
    )
}

export default App