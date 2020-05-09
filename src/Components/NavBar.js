import React from 'react';
import { Link } from '@reach/router';


function NavBar() {
    return (
        <div>
            <Link to="/"> <li> <b>  Home </b> </li> </Link>
            
            <Link to="About"> <li> <b>  About </b> </li> </Link>
            <Link to="Recipes"> <li> <b> Recipes </b> </li> </Link>
            <Link to="List"> <li> <b>  Make your list </b> </li> </Link>

        </div>
    )
}
export default NavBar 





        </div>
    )
}

