import React,{ Component }  from 'react';
import {Link} from 'react-router-dom';
const Navbar=({icon,tittle}) =>{
 return(
<nav className='navbar bg-primary'>
   <h1>
       <i className={icon}/>{tittle}
       </h1>
       <ul>
         <li>
             <Link to="/">Home </Link>
        </li>
        <li>
            <Link to="/about" > About  </Link>
            </li>  
       </ul>
</nav>
        );
    }

export default Navbar;