import React from 'react'

const HeaderTop = () => {
  return (
    <>
    {/* Topbar Start */}
      <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-muted small me-4">
                <i className="fas fa-map-marker-alt text-primary me-2" />
                Find A Location
              </a>
              <a href="tel:+01234567890" className="text-muted small me-4">
                <i className="fas fa-phone-alt text-primary me-2" />
                +01234567890
              </a>
              <a href="mailto:example@gmail.com" className="text-muted small me-0">
                <i className="fas fa-envelope text-primary me-2" />
                Example@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a href="#">
                <small className="me-3 text-dark">
                  <i className="fa fa-user text-primary me-2" />
                  Register
                </small>
              </a>
              <a href="#">
                <small className="me-3 text-dark">
                  <i className="fa fa-sign-in-alt text-primary me-2" />
                  Login
                </small>
              </a>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-dark"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fa fa-home text-primary me-2" /> My Dashboard
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-user-alt me-2" /> My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2" /> Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-bell me-2" /> Notifications
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2" /> Account Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-power-off me-2" /> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    
    </>
  )
}

export default HeaderTop