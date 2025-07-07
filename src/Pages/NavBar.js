import React from 'react'

function NavBar() {
  return (
    <div><nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light  py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Grow with us spiritually</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item "><a className="nav-link" href="#about">About us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Sermon</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Events</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav></div>
  )
}

export default NavBar