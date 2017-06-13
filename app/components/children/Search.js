// Include React
var React = require("react");

var helpers = require("../utils/helper");
var Form = require("./Form");
var Results = require("./results");

var Search = React.createClass({

    getInitialState: function() {
    return { searchTerm: "", yearStart: "", yearEnd:"", results: [] };
  },
  componentDidUpdate: function(prevProps, prevState) {
    // console.log(this.state.yearStart);
    // console.log(this.state.yearEnd);
    if(prevState.searchTerm !== this.state.searchTerm){
    // Run the query for the address
    helpers.runQuery(this.state.searchTerm, this.state.yearStart, this.state.yearEnd).then(function(data) {
      if (data !== this.state.results) {
        console.log("results", data);
        this.setState({ results: data });
        console.log(this.state.results)

        // After we've received the result... then post the search term to our history.
        // helpers.postHistory(this.state.results).then(function() {
        //   console.log("Updated!");

          // After we've done the post... then get the updated history
          // helpers.getHistory().then(function(response) {
          //   console.log("Current History", response.data);

          //   console.log("History", response.data);

          //   this.setState({ history: response.data });

          // }.bind(this));
        // }.bind(this));
      }

    }.bind(this));
      }
  },

  setTerm: function(term, Start, End) {
    this.setState({ searchTerm: term});
    this.setState({yearStart: Start});
    this.setState({yearEnd: End});

  },

  // Here we render the component
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-lg-12">
            <Form setTerm={this.setTerm} />
            </div>

            <div className="row">
            <Results results={this.state.results}/>
            </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
