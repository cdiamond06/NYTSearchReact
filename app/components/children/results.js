// Include React
var React = require("react");

var helpers = require("../utils/helper");

var Search = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", yearStart: "", yearEnd:"", results: [] };
  },
  // saveArticle:function(data){
  //   helpers.savedArticle(data).then(function(data){
  //       console.log("updated");
  //   })
  // },
  componentDidUpdate: function() {
    // console.log(this.state.yearStart);
    // console.log(this.state.yearEnd);

    // Run the query for the address
  },
              /* <button 
              onClick= {this.saveArticle(this.item)}
              aria-hidden="true"> </button> */
               

  // setTerm: function(term, Start, End) {
  //   this.setState({ searchTerm: term});
  //   this.setState({yearStart: Start});
  //   this.setState({yearEnd: End});

  // },

  renderResults: function(data){
    data.map((item,i) =>{ 
      console.log("line 36 results", item.web_url);
      return
      <div className="col-md-3 col-sm-6">
        <div key= {i} className="panel panel-default">
          <div className="panel-body">
          
            <p>{item.headline.print_headline}</p>
            <p>{item.web_url}</p>
          </div>
        </div>
      </div>
      
      });
  },

  // Here we render the component
  render: function() {
    return (
      <div className="container">

        <div className="row">
          {this.renderResults(this.props.results)}
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
