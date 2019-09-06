import React from 'react'; 
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Head from 'next/head'
// import meta from 'next/meta'

const BaseLayout = (props) => {
    return (
        <div> 
          <Head>
            <title>My Portfolio</title> 
            <link rel="stylesheet" href="../../node_modules/css/font-awesome.min.css" />
            <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
          </Head> 
          {/* <div style={{height: '50px', background: 'rgb(230, 230, 230)'}}></div> */}
          <Header /> 
          { props.children }  
          <Footer /> 
        </div> 
    ) 
} 

export default BaseLayout; 