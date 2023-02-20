import React from 'react';

function About() {
    return (
        <>
            <img className='aboutImage' src='openBook.png' alt='open book'/>
            <h1>About Us</h1>
            <p className='aboutText'>This website is brought to you by five Revature associates who are on their way to becoming software developers.
            Our names are Kristen Alvarez, Christian Terel Mckinnon, Garrett Snedeker, Victor Cizek, and former teammate Pongsak Sutunya.
            We hope you find this site to be a successful demonstration of the product of full stack Javascript with React, Node.js, DynamoDB and Express.</p>

            <div className='attribution'>Image by rawpixel.com</div>
        </>
    )
}

export default About;