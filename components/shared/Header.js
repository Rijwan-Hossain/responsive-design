import React from 'react'
import Link from 'next/link'

function Header() { 
    return ( 
        <div className="container"> 
            <Link href="/"> 
                <a>Home</a> 
            </Link> 
            <Link href="about"> 
                <a>About</a> 
            </Link> 
            <style jsx> 
                {` 
                    a { margin: 0px 30px 0px 0px } 
                    div { height: 40px } 
                `} 
            </style> 
        </div> 
    ) 
} 

export default Header; 
