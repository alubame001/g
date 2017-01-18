var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
	console.log("users")
  var result = {uid:12002,limits:[{coin:"btc",max:0.01,min:0.0001},{coin:"ltc",max:1,min:0.01},{coin:"btc",max:100,min:1000000},{coin:"lps",max:1000,min:10000000}],coins:[{coin:"btc",balance:0.02231},{coin:"ltc",balance:123},{coin:"doge",balance:99912233},{coin:"lps",balance:23300}]}
  res.send(result);
});
module.exports = router;
