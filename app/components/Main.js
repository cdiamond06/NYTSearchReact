// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;




var Main = React.createClass({

    // Here we render the function
  render: function() {

    return (
    <div className="container">  
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
            <Link to="/saved"><button className="btn btn-primary btn-lg">Saved</button></Link>
      </li>
      <li className="nav-item active">
            <Link to="/search"><button className="btn btn-danger btn-lg">Search</button></Link>
      </li>      
    </ul>
  </div>
</nav>

        <div className="row">

          {/* This code will dump the correct Child Component {this.props.children} */}
          {this.props.children} 
          
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
