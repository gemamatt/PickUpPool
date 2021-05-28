import arrow from '../../assets/back.png';
import './Navbar.css';
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase';

const Navbar =()=>{
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    function handleLogout() {
        auth.signOut().then(() => console.log("Salir"));
    }

    return(
        <div className='navbar'>
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <button onClick={handleLogout}>Salir</button>       
        </div>
    )
}

export default Navbar;
