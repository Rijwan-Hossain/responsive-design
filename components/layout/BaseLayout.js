import React from 'react'; 
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import DialogBox from '../shared/DialogBox'
import Head from 'next/head'

const BaseLayout = (props) => {
    return (
        <div> 
          <DialogBox /> 
          <Head>
            <title>{ props.title }</title> 
            <meta name="description" content="I’m Md. Rijyan Hossain a Software Engineer, completed under graduation with a bachelor’s degree in Computer Science & Engineering (CSE) from Green University. During my four years of graduation, I have learnt computer programming with various of languages such as Assembly, C, Java, JavaScript, Ruby." /> 

            <meta name="keywords" content="Rijyan Hossain Bangladesh, Rijwan Hossain Bangladesh, Rizwan Hossain Bangladesh, Rijyan Bangladesh, Rijwan Bangladesh, Rizwan Bangladesh, Rijyan, Rijwan, Rizwan, Rijyan Hossain, Rijwan Hossain, Rizwan Hossain, Md. Rijyan Hossain, Md. Rijwan Hossain, Md. Rizwan Hossain, Rijyan Portfolio, Rijwan Portfolio, Rizwan Portfolio, rijyan, rijwan, rizwan, rijyan hossain, rijwan hossain, rizwan hossain, Md. rijyan hossain, Md. rijwan hossain, Md. rizwan hossain, rijyan Portfolio, rijwan Portfolio, rizwan Portfolio, rijyan hossain Portfolio, rijwan hossain Portfolio, rizwan hossain Portfolio, Md. Rijyan Hossain Portfolio, Md. Rijwan Hossain Portfolio, Md. Rizwan Hossain Portfolio, Rijwan GUB, Rijyan GUB, Rijwan Green University, Rijyan Green University, Rizwan Green University, Rijyan Programmer, Rijwan Programmer, Rizwan Programmer, Rijyan Hossain Programmer, Rijwan Hossain Programmer, Rizwan Hossain Programmer, Rijyan Developer, Rijwan Developer, Rizwan Developer, Rijyan Hossain Developer, Rijwan Hossain Developer, Rizwan Hossain Developer, Rijyan Coder, Rijwan Coder, Rizwan Coder, Rijyan github, Rijwan github, Rizwan github, Rijyan site, Rijwan site, Rizwan site, Rijyan Hossain site, Rijwan Hossain site, Rizwan Hossain site, Md. Rijyan Hossain site, Md. Rijwan Hossain site, Md. Rizwan Hossain site, Rijyan Portfolio site, Rijwan Portfolio site, Rizwan Portfolio site, Rijyan Hossain Portfolio site, Rijwan Hossain Portfolio site, Rizwan Hossain Portfolio site, Md. Rijyan Hossain Portfolio site, Md. Rijwan Hossain Portfolio site, Md. Rizwan Hossain Portfolio site, Rijyan personal site, Rijwan personal site, Rizwan personal site, Rijyan Hossain personal site, Rijwan Hossain personal site, Rizwan Hossain personal site, Md. Rijyan Hossain personal site, Md. Rijwan Hossain personal site, Md. Rizwan Hossain personal site, Rijyan Portfolio personal site, Rijwan Portfolio personal site, Rizwan Portfolio  personalsite, Rijyan Hossain Portfolio personal site, Rijwan Hossain Portfolio personal site, Rizwan Hossain Portfolio personal site, Md. Rijyan Hossain Portfolio personal site, Md. Rijwan Hossain Portfolio personal site, Md. Rizwan Hossain Portfolio personal site, Rijyan personal website, Rijwan personal website, Rizwan personal website, Rijyan Hossain personal website, Rijwan Hossain personal website, Rizwan Hossain personal website, Md. Rijyan Hossain personal website, Md. Rijwan Hossain personal website, Md. Rizwan Hossain personal website, Rijyan Portfolio personal website, Rijwan Portfolio personal website, Rizwan Portfolio  personalsite, Rijyan Hossain Portfolio personal website, Rijwan Hossain Portfolio personal website, Rizwan Hossain Portfolio personal website, Md. Rijyan Hossain Portfolio personal website, Md. Rijwan Hossain Portfolio personal website, Md. Rizwan Hossain Portfolio personal website," /> 

            <meta property="og:title" content="Rijyan Hossain - programmer, developer, coder, problem solver" /> 
            <meta property="og:locale" content="bn_BD" /> 
            <meta property="og:url" content="https://rijyan.herokuapp.com/" /> 
            <meta property="og:type" content="website" /> 
            <meta property="og:description" content="I’m Md. Rijyan Hossain a Software Engineer, completed under graduation with a bachelor’s degree in Computer Science & Engineering (CSE) from Green University." /> 

            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            <link rel="stylesheet" href="../../node_modules/css/font-awesome.min.css" />
            <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" /> 
          </Head> 
          <Header /> 
          { props.children }  
          <Footer /> 
        </div> 
    ) 
} 

export default BaseLayout; 