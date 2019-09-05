import React from 'react'
import Link from 'next/link'

function Header() { 
    return ( 
        <div> 
            <Link href="/"> 
                <a>Home</a> 
            </Link> 
            <Link href="about"> 
                <a>About</a> 
            </Link> 
            <style jsx> 
                {` 
                    a { margin: 0px 10px 0px 0px} 
                `} 
            </style> 
        </div> 
    ) 
} 

export default Header; 
