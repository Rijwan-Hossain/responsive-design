import React from 'react'; 
import Header from '../shared/Header'
import Head from 'next/head'
// import meta from 'next/meta'

const BaseLayout = (props) => {
    return (
        <div>
          <Head>
            {/* <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta> */}
            <title>My Portfolio</title> 
          </Head> 
          <Header /> 
          { props.children }  
        </div> 
    ) 
} 

export default BaseLayout; 