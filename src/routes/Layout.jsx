import { Outlet, Link } from "react-router-dom"


const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <Link to="/"> Home </Link>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;