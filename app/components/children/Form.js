// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" ,
              start:"",
              end:""   };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
                    
    console.log("Search Term ", this.state.term);
    console.log("Start Year ",this.state.start);
    console.log("End year ",this.state.end);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm((this.state.term), (this.state.start+ "0101"), (this.state.end+ "0101"));
    this.setState({ term: "" ,
                    start:"",
                    end:"" });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search for article</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <h5> Search Term </h5>
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <h5> Start Year </h5>
                <input
                value={this.state.start}
                type="text"
                className="form-control text-center"
                placeholder="Start Year"
                id="start"
                onChange={this.handleChange}
                required
              />
              <h5> End Year </h5>
                <input
                value={this.state.end}
                type="text"
                className="form-control text-center"
                placeholder="End Year"
                id="end"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
