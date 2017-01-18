var express = require('express');
var router = express.Router();
var floatjs= require('../src/floatjs') 
var Baccarat = require("../src/baccarat");
var Blackjack = require("../src/blackjack");
/* GET users listing. */
router.get('/test', function(req, res, next) {

	var a = floatjs.numAdd(1,0.001)
  res.send(String(a));
});

var startMoney = 10000

router.get('/baccarat/shuffle', function(req, res, next) {
//var seed =Math.random().toString(36).replace(/[^a-z]+/g, '')
//取八位数整数
	var seed = ""
	for (var i = 0; i < 8; i++) {
		var num = Math.random()*10 ;
		num = parseInt(num, 10);
		str = String(num)
		seed = seed+str	
	}
	var bet={}
	bet.coin ="doge"
	bet.tie=100
	bet.banker=100
	bet.player=100
	bet.balance=1000 //玩家投注前余额
	bet.profit=0
	bet.new_balance=0 //玩家投注後余额
	
	var baccarat = new Baccarat(String(seed),bet) 
	//baccarat.balance = floatjs.numAdd(startMoney,baccarat.profit)
	//var a = floatjs.numAdd(1,0.001)
  res.send(baccarat.result);
});




router.get('/blackjack/shuffle', function(req, res, next) {
//var seed =Math.random().toString(36).replace(/[^a-z]+/g, '')
//取八位数整数
	var seed = ""
	for (var i = 0; i < 8; i++) {
		var num = Math.random()*10 ;
		num = parseInt(num, 10);
		str = String(num)
		seed = seed+str	
	}
	var bet={}
	bet.coin ="doge"
	bet.tie=100
	bet.banker=100
	bet.player=100
	bet.balance=1000 //玩家投注前余额
	bet.profit=0
	bet.new_balance=0 //玩家投注後余额
	var FIRST_TWO_CARDS = 0
	var NEXT_CARD = 1
	var blackjack = new Blackjack(String(seed),bet,FIRST_TWO_CARDS) 
	//baccarat.balance = floatjs.numAdd(startMoney,baccarat.profit)
	//var a = floatjs.numAdd(1,0.001)
  res.send(blackjack.result);
});

module.exports = router;
