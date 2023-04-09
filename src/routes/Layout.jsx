import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <div>
                        <Link to="/"> Home </Link>
                    </div>
                    <div>
                        <Link to="/create"> Create Player </Link>
                    </div>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;