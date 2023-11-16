export default function NavAdmin() {
    return (
  <div>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div className="container">
      <img src= "./public/logo.png" alt= "logo" width="50px"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active fw-bold" aria-current="page" href="#">DASHBOARD PEMILU</a>
          </li>
          </ul>
      </div>
      <div className="d-flex flex-row text-white text-center">
          <div className="p-2 text-center">Partai</div>
          <div className="p-2 text-center">|</div>
          <div className="p-2">Paslon</div>          
      </div>
          <button className="nav-item fw-bold border rounded-circle" >D</button>
      </div>
  </nav>
  </div>
     
    )
  }
  