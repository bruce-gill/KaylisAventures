import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark background-custom sticky-top">
        <a class="navbar-brand"><img src="tree.svg"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/sept_12_22">9/12/2022</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/jun_5_2022">6/5/2022</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/jan_16_2022">1/16/2022</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact Me</Link>
                </li>
            </ul>
        </div>
    </nav>

    <Outlet />
    </>
)};

export default Layout;