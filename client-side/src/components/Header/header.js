import React from 'react'
import {Link} from 'react-router-dom'

const Header =() =>{

    return(

        <div> 

        <Link className="option" to='/code/' >

            CHALLENGES

        </Link>

        <Link className="option" to='/signIn'>

            SIGN IN
        
        </Link>
        
        </div>

    )

    

}


export default Header