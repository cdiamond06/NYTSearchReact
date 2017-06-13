// Include React
var React = require("react");

var helpers = require("../utils/helper");

var Search = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", yearStart: "", yearEnd:"", results: [] };
  },

  componentDidUpdate: function() {
    // console.log(this.state.yearStart);
    // console.log(this.state.yearEnd);

    // Run the query for the address
  },
  saveArticle:function(data1, data2, data3){
    helpers.savedArticle(data1, data2, data3).then(function(data){
        console.log("updated");
    });
  },
              /* <button 
              onClick= {this.saveArticle(this.item)}
              aria-hidden="true"> </button> */


               

  // setTerm: function(term, Start, End) {
  //   this.setState({ searchTerm: term});
  //   this.setState({yearStart: Start});
  //   this.setState({yearEnd: End});

  // },

  // renderResults: function(data){
  //   data.map((item,i) =>{ 
  //     console.log("line 36 results", item.web_url);
  //     return
  //     <div className="col-md-3 col-sm-6">
  //       <div key= {i} className="panel panel-default">
  //         <div className="panel-body">
          
  //           <p>{item.headline.print_headline}</p>
  //           <p>{item.web_url}</p>
  //         </div>
  //       </div>
  //     </div>
      
  //     });
  // },

  // Here we render the component
  render: function() {
    return (
        <div className="container">
      
        

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.results.map(function(item, i) {
            return (
              <div key={i} className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">{item.headline.print_headline}</h3>
            </div>
            <div className="panel-body text-center">
              <a href= {item.web_url}> {item.web_url}</a>
              <button onClick={this.saveArticle(item.headline.print_headlint, item.web_url, item.pub_date)} className="btn btn-primary btn-lg">Saved</button>
              </div>
              </div>
            );
          }.bind(this))}
       
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Search;
