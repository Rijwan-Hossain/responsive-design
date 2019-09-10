import React from 'react'; 
import BaseLayout from '../components/layout/BaseLayout'
import Home from '../components/Home/Home' 
import '../styles/main.scss';

function Index() { 
    return ( 
        <BaseLayout title="Rijyan Hossain | Portfolio"> 
            <Home /> 
        </BaseLayout> 
    ) 
} 

export default Index;
