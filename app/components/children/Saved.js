// Include React
var React = require("react");

var helpers = require("../utils/helper");

// var something;

var Saved = React.createClass({



  getInitialState: function() {
    return { searchTerm: "", yearStart: "", yearEnd:"", results: [] };
  },

  componentDidMount: function(){
    helpers.getArticle().then(function(data){
      // console.log(data.data);
      var data = data.data;
      // console.log(data);
      this.setState({results: data});
      console.log("results", data)
      // something = data;
      // console.log(something);

      // this.setState({this.state.searchTerm: data})
    }.bind(this));
  },

  componentDidUpdate: function() {
    // console.log(this.state.yearStart);
    // console.log(this.state.yearEnd);
    console.log("componentDidUpdate");
    // Run the query for the address
  },
  deleteArticle:function(data1, data2, data3){
    helpers.deleteArticle(data1, data2, data3).then((data) =>{
        console.log("updated");
    }).then(helpers.getArticle().then((data)=>{
      var data = data.data;
      this.setState({results: data});
      console.log("results", data);

    }));
  },



  // Here we render the component
  render: function() {
    return (
        <div className="container">

          {/* Here we use a map function to loop through an array in JSX */}
            {this.state.results.map((item, i)=> {
            return (
              <div key={i} className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">{item.date}</h3>
            </div>
            <div className="panel-body text-center">
              <a href= {item.url}> {item.title}</a>
                <button onClick={()=>this.deleteArticle(item.title, item.url, item.date)} className="btn btn-danger btn-lg">Delete</button>
              </div>
              </div>
            );
          })}
       
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
