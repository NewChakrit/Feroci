import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

function NavBar() {
  const { logout, userData } = useContext(AuthContext);

  // const boxtothetop = () => {
  //   let windowTop = $(window).scollTop();
  //   let top = $(".boxHere").offset().top;
  //   if (windowTop > top) {
  //     $(".boxHere").height($(".navbar").outHeight());
  //   } else {
  //     $(".navbar").removeClass("box");
  //     $(".boxHere".height(0));
  //   }
  // };

  // const Header = () => {
  //   // Sticky Menu Area
  //   useEffect(() => {
  //     window.addEventListener("scroll", isSticky);
  //     return () => {
  //       window.removeEventListener("scoll", isSticky);
  //     };
  //   });
  // };

  // Method that will fix header after a specific scrollable
  // const isSticky = (e) => {
  //   const header = document.querySelector(".navbar");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 250
  //     ? header.classList.add("is-sticky")
  //     : header.classList.remove("is-sticky");
  // };

  return (
    <>
      <Logo />
      {/* <div className="boxHere"></div> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="" className="nav-link active">
                  <strong>HOME</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="aboutus" className="nav-link">
                  <strong>ABOUT US</strong>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>ACHIEVE</strong>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="performance" className="dropdown-item">
                      <strong>HISTORIC PERFORMANCES</strong>
                    </Link>
                  </li>
                  <li>
                    <Link to="member" className="dropdown-item">
                      <strong>MUSICIANS</strong>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>JOIN US</strong>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="audition" className="dropdown-item">
                      <strong>AUDITION</strong>
                    </Link>
                  </li>
                  <li>
                    <Link to="supportus" className="dropdown-item">
                      <strong>SUPPORT US</strong>
                    </Link>
                  </li>
                </ul>
              </li>
              {userData.isAdmin ? (
                <li className="nav-item">
                  <Link to="admin" className="nav-link active">
                    <strong>ADMIN</strong>
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
            <form className="d-flex" onSubmit={() => logout()}>
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-box-arrow-right"> Sign out</i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default NavBar;
