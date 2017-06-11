// Include the axios package for performing HTTP requests (promise based alternative to request)
// this package allows us to use get and post HTTP request
var axios = require("axios");

// Geocoder API
var nytsearchAPI = "591824e333954de084afc13a8d4a32f5";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(title, begindate, enddate) {

    console.log(location);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    nytsearchAPI + "&q=" + title + "begin_date=" + begindate + "end_date=" + enddate + "sort=newest";

  //   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  //   url += '?' + $.param({
  //   'api-key': "591824e333954de084afc13a8d4a32f5",
  //   'q': "denver broncos",
  //   'begin_date': "20121229",
  //   'end_date': "20131230",
  //   'sort': "newest"
  // });

    // Figure out the geolocation
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + location + "&pretty=1&key=" + nytsearchAPI;
    // using axioz to get the url of this function and to return with a response after it is done using the api to get the data, we are using a promise  with the data response
    // (2) componentDidUpdate
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      // if there is a resule we will return the first one that is there
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      // if we don't get anything, then we will return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    // go to the server function (2) go to server file
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    // (4) from the main.js to go to the server file to send it the location that we searched for to go to the server file From ComponentDidUpdate. Here we are passing in an object body so to call it in the server.js file it would be req.body.location to get the location that was passed to it
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;