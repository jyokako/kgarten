var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
NCMB = require('/root/kGarken/dataVisual/test/ncmb-latest.min.js').NCMB;
var APP_KEY ="e49df7b0dad5df5a3665445beca1dd71467d72ef0e33fbe3bf5f17a4439c1e75";
var CLIENT_KEY ="ec8e98281432001b6fb56867a9c558c0c555a19da5b43c8fdd1c7f514f71db02";
NCMB.initialize(APP_KEY, CLIENT_KEY);
var TestClass = NCMB.Object.extend("TestClass");
var testClass = new TestClass();
var oid=""

testClass.set("message", "yesyes");
testClass.save(null, {
  success: function(object) {
    // 保存完了後に実行される
    oid = object.id;
    console.log("New object created with objectId: " + object.id);
  },
  error: function(object, error) {
    // エラー時に実行される
    console.log("Failed to create new object, with error code: " + error.message);
  }
});
  res.render('index', { title: oid });
});

module.exports = router;
