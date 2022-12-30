
function NavBar () {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <a href="/">FootLocker</a>
                    </li>
                </h2>
                <li className="nav-item">
                    <a className="nav-link">
                        Basketball
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        Running
                    </a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        Comfort
                    </a>
                </li>

                <span>
                    🛒
                </span>
            </ul>
        </nav>
    )
}

export default NavBar