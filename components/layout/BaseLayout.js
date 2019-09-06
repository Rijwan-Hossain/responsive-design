import React from 'react'; 
import Header from '../shared/Header'
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
          <Header /> 
          { props.children }  
        </div> 
    ) 
} 

export default BaseLayout; 