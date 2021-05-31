import './Navbar.css';
import { auth } from '../../firebase';

const Navbar =()=>{

    function handleLogout() {
        auth.signOut().then(() => console.log("Salir"));
    }

    return(
        <div className='navbar'>
            <p className='slogan'>PickUp PooL</p>
            <ul className='logOut' onClick={handleLogout}>Salir</ul>       
        </div>
    )
}

export default Navbar;
