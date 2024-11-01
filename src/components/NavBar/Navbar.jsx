import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar-container sticky">
            <Link to='/'>
                <h3>Merchandising</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/Textiles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Textiles</NavLink>
                <NavLink to={`/category/Electronicos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronicos</NavLink>
                <NavLink to={`/category/Bazar`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bazar</NavLink>
            </div>
            <CartWidget />
        </nav>    
    )
}

export default Navbar
