import React from 'react'
import './homepage-page.styles.css';
import { ReactComponent as Kid } from '../../images/kids_illustration.svg';

const HomePage =() =>{

    return(
        <div>
        <h1 className="head">KodersGang</h1>
        <div className="textBig">
        C&#123;&#125;deIt <br></br> & Enjoy.
        </div>
        {/* https://digital-flowers.github.io/react-animated-css.html */}

        <Kid className="kid"/>
        {/* <ImageAvatars /> */}
        {/* <Blob /> */}
        {/* <Front className="front"/> */}
        </div>
    )
}

export default HomePage