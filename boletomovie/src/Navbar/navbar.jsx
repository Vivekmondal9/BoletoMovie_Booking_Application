
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/navbar.css"

function Navbar() {
    const nav = useNavigate()
    function navigateTologin() {
        nav("/login")

    }
    function navigateToRegistration() {
        nav("/signup")

    }

    const logged = localStorage.getItem('access_token')

    function logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setTimeout(() => {
            window.location.reload()
        }, 1000);
        nav('/', true);
    }

    function homeLoad() {
        nav("/", true)
        window.location.reload();
    }
    function myBookings() {
        nav("user/bookings",true)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
            <div className="container-fluid">
                <img src="https://t4.ftcdn.net/jpg/05/00/61/19/360_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg" height={"30px"} width={"50px"} className="movie-image"></img>
                <p className="boletonav" onClick={homeLoad}>BOLE <a className="tob">TO</a></p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <p className="nav-link active" aria-current="page" style={{ cursor: "pointer" }} onClick={homeLoad}>Home</p>
                        </li>

                    </ul>

                    <span className="d-flex">
                        {!logged &&
                            (<>
                                <button className="btn  btn-outline-success " type="submit" onClick={navigateTologin}>Login</button>
                                <button className="btn  btn-outline-success " type="submit" onClick={navigateToRegistration}>SignUp</button>
                            </>)
                        }
                        {
                            logged &&
                            (<>
                                <button className="btn  btn-outline-success " type="submit" onClick={myBookings}>My Bookings</button>
                                <button className="btn  btn-outline-success " type="submit" onClick={logout}>Logout</button>
                            </>)
                        }
                    </span>
                </div>
            </div>
        </nav>
    )

}


export default Navbar;