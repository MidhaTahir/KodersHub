import React from 'react'
import {Link} from 'react-router-dom'


const Header =() =>{
 
    return(

        <div> 

        <Link to='/code/' >

            CHALLENGES

        </Link>

        <Link to='/signUp'>

            SIGN UP
        
        </Link>


        </div>

    )

    

}


export default Header
