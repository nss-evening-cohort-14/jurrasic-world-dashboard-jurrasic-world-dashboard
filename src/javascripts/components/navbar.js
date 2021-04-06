const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
          <a class="navbar-brand" href="#" id="home">
          <img src="https://www.pngkey.com/png/full/140-1405099_jurassic-park-clipart-logo-jurassic-park-logo-png.png" alt="Jurassic World" width="60" height="48">
          </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="dinosaurs">Dinosaurs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="staff">Staff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="vendors">Vendors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="equipment">Equipment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="rides">Rides</a>
            </li>
          </ul>
          <div id="login-form-container"></div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    `;
};

export default navBar;
