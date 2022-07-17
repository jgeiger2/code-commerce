import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import '../NavBar/NavBar.scss'

const NavBar = () => {
    return (
        <Fragment>
            <div className="NavBar">
                <Link className="logo-container" to='/'>
                    <h1>codeCOMMERCE</h1>
                </Link>
                <div className="navLinks-container">
                    <Link className="nav-link" to='/signup'>
                        SIGN IN/SIGN UP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar