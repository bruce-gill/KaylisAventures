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
                    <a class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sept_12_22.html">9/12/2022</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="jun_5_2022.html">6/5/2022</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="jan_16_2022.html">1/16/2022</a>
                </li>
            </ul>
        </div>
    </nav>

    <Outlet />
    </>
)};

export default Layout;