const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Jurassic World</a>
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
      </nav>
    `;
};

export default navBar;
