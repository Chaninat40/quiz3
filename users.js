var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});//connectdatabase เด้อออ

function findAll(req, res) {
    //Get data from mogodb
        var query = {};
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });

}

function searchByFname(req, res) {
    var fname = req.query.fname;
    //seach
    console.log(fname);
    // if (err) throw err;
    var query = {first_name:fname};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }


  function searchByRole(req, res) {
    var role = req.params.role;
    //seach
    // if (err) throw err; 
    var query = {role:role};
    db.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  }
  module.exports = {
    findAll: findAll,
    searchByRole: searchByRole,
    searchByFname : searchByFname,
    

};