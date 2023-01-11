import { FiLogOut } from "react-icons/fi"
import "../styles/NavBar.css"

const UpdateUserNav = () => {

    const logoutUser = () => {
        localStorage.removeItem("jwt")
        window.location.href = "/"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h3 className="text-light">Meri Dukaan</h3>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <h3 className="text-light" onClick={logoutUser}><FiLogOut /></h3>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default UpdateUserNav