var express = require('express');
var router = express.Router();
NCMB = require('/root/kGarken/dataVisual/ncmb-latest.min.js').NCMB;
var APP_KEY ="e49df7b0dad5df5a3665445beca1dd71467d72ef0e33fbe3bf5f17a4439c1e75";
var CLIENT_KEY ="ec8e98281432001b6fb56867a9c558c0c555a19da5b43c8fdd1c7f514f71db02";

/* GET home page. */
router.get('/', function(req, res, next) {

//
var GameScore = NCMB.Object.extend("dataTest");
var query = new NCMB.Query(GameScore);
query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " scores.");
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + " - " + object.get("localname"));
    }
  },
  error: function(error) {
    // エラー
  }
});
//
  res.render('index', { title: 'Express' });
});

module.exports = router;
