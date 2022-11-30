function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" data-toggle="tooltip" data-placement="right" title="Home Page" onMouseOver={testfunction}>BadBank Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Create Your Account" onMouseOver={testfunction}>
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Login" onMouseOver={testfunction}>
                <a className="nav-link" href="#/login/">Login</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Deposit Money" onMouseOver={testfunction}>
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Withdraw Money" onMouseOver={testfunction}>
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Balance" onMouseOver={testfunction}>
                <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View all user data" onMouseOver={testfunction}>
              <a className="nav-link" href="#/alldata/">User Data</a>
            </li>
            {/* About Site Page - currently, React Router is not registering it
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="About this Website" onMouseOver={testfunction}>
              <a className="nav-link" href="#/aboutsite/">AboutSite</a>
            </li> */}       
        </ul>
      </div>
    </nav>
    </>
  );
}

