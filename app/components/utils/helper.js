// Include the axios package for performing HTTP requests (promise based alternative to request)
// this package allows us to use get and post HTTP request
var axios = require("axios");

// Geocoder API
var nytsearchAPI = "591824e333954de084afc13a8d4a32f5";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(title, begindate, enddate) {

    // console.log(title, begindate, enddate);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    nytsearchAPI + "&q=" + title + "&begin_date=" + begindate + "&end_date="+ enddate;
    // console.log(queryURL);
    // "begin_date=" + begindate + "end_date=" + enddate + + "&sort=newest"

  //   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  //   url += '?' + $.param({
  //   'api-key': "591824e333954de084afc13a8d4a32f5",
  //   'q': title,
  //   'begin_date': begindate,
  //   'end_date': enddate,
  //   'sort': "newest"
  // });
  //   console.log(url);

    // Figure out the geolocation
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + location + "&pretty=1&key=" + nytsearchAPI;
    // using axioz to get the url of this function and to return with a response after it is done using the api to get the data, we are using a promise  with the data response
    // (2) componentDidUpdate
    return axios.get(queryURL).then(function(Timesdata) {
      // If get get a result, return that result's formatted address property
      // if there is a resule we will return the first one that is there
      // for getting the: title it is reponse.docs[i].headline.print_headline
      // for getting the: URL it is reponse.docs[i].web_url
      // for getting the: Date it is reponse.docs[i].pub_date
      
        console.log(Timesdata.data.response.docs);
        // console.log(Timesdata.data.response.docs[0].headline.print_headline);
        // console.log(Timesdata.data.response.docs[0].pub_date);
        // console.log(Timesdata.data.response.docs[0].web_url);
        return Timesdata.data.response.docs;
   
      // If we don't get any results, return an empty string
      // if we don't get anything, then we will return an empty string
   
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    // go to the server function (2) go to server file
    return axios.get("/savedArticles");
  },

  deleteArticle: function(data1, data2, data3){
    return axios.post("/deleteArticle", {title: data1, url: data2, date: data3});
  },

  savedArticle: function(data1, data2, data3){
    console.log("line 61", data1, data2, data3);

    return axios.post("/savedArticle", {title: data1, url: data2, date: data3});

  }

  // This function posts new searches to our database.
  // postHistory: function(data) {
  //   // (4) from the main.js to go to the server file to send it the location that we searched for to go to the server file From ComponentDidUpdate. Here we are passing in an object body so to call it in the server.js file it would be req.body.location to get the location that was passed to it
  //   return axios.post("/api", { title: location });
  // }
};

// We export the API helper
module.exports = helper;