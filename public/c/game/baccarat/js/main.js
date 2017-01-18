var SERVER_URL = ""
var	CANVAS_WIDTH = 1700,
	CANVAS_HEIGHT = 768,
	EDGEBOARD_X = 338,
	EDGEBOARD_Y = 0,
	FPS_TIME = 1E3 / 24,
	DISABLE_SOUND_MOBILE = !1,
	FONT_GAME_1 = "arialbold",
	FONT_GAME_2 = "Digital-7",
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	STATE_GAME_WAITING_FOR_BET = 0,
	STATE_GAME_DEALING = 1,
	STATE_GAME_SHOW_WINNER = 2,
	STATE_CARD_DEALING = 0,
	STATE_CARD_REMOVING = 1,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	ASSIGN_FICHES = "ASSIGN_FICHES",
	END_HAND = "END_HAND",
	ON_CARD_SHOWN = "ON_CARD_SHOWN",
	ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
	ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
	NUM_FICHES = 6,
	CARD_WIDTH = 66,
	CARD_HEIGHT = 102,
	MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, BET_OCCURRENCE, TIME_FICHES_MOV = 600,
	TIME_CARD_DEALING =500,
	TIME_SHOW_WIN =500,
	TIME_CARD_REMOVE = 8000,
	TIME_SHOW_FINAL_CARDS = 2000,
	TIME_END_HAND, BET_TIME = 3000,
	AD_SHOW_COUNTER, 
	NUM_DECKS = 1, // 一幅牌
	BET_TIE = 0,
	BET_BANKER = 1,
	BET_PLAYER = 2,
	WIN_TIE = 0,
	WIN_DEALER = 1,
	WIN_PLAYER = 2,
	POS_BET = [],
	MULTIPLIERS = [];
	/*
	TEXT_BET = ["TIE 和", "BANKER 庄", "PLAYER 闲"];
	TEXT_WIN = "WIN";
	TEXT_SHOW_WIN = ["TIE - PAYS 8 TO 1", TEXT_BET[1], TEXT_BET[2]];
	TEXT_NO_WIN = "NO WIN";
	TEXT_PLAY = "PLAY";
	TEXT_CLEAR = "CLEAR";
	TEXT_REBET = "REBET";
	TEXT_DEAL = "DEAL";
	TEXT_MIN_BET = "MIN BET";
	TEXT_MAX_BET = "MAX BET";
	TEXT_NO = "NO";
	TEXT_YES = "YES";
	TEXT_RECHARGE = "RECHARGE";
	TEXT_EXIT = "EXIT";
	TEXT_MONEY = "MONEY";
	TEXT_CURRENCY = "$";
	VERIFY_CODE=""
	TEXT_VERIFY = "Verify Code:"
	TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET";
	TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!";
	TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS";
	TEXT_DISPLAY_TIE = "THIS HAND IS A TIE!";
	TEXT_DISPLAY_MSG_DEALING = "DEALING...";
	TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
	TEXT_HAND_WON = "HAND WON BY";
	TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!";
	TEXT_SHARE_IMAGE = "200x200.jpg";
	TEXT_SHARE_TITLE = "Congratulations!";
	TEXT_SHARE_MSG1 = "You collected <strong>";
	TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
	TEXT_SHARE_SHARE1 = "My score is ";
	TEXT_SHARE_SHARE2 = " points! Can you do better?";

	*/
	//SwitchLang(LANG)
	var LANG =0
	var InitLANG=0

	//USER={};
	FICHE_KIND=0; //0=demo,0=btc，	1=ltc，2=狗币。
	PLAY_COIN ="demo";
	CURRENCY_TOFIXED =4;
	FICHE_CHOOSE=[[0.01, 0.1, 0.5, 1, 2.5, 10],[0.1, 1, 5, 10, 25, 100],[1000, 10000, 50000, 100000, 250000, 1000000]]
	var Seat;
	var coins=[];
	
var s_iOffsetX, s_iOffsetY;
(function(a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});

function trace(a) {
	//console.log(a)
}

function getSize(a) {
	var d = a.toLowerCase(),
		b = window.document,
		c = b.documentElement;
	if (void 0 === window["inner" + a]) a = c["client" + a];
	else if (window["inner" + a] != c["client" + a]) {
		var f = b.createElement("body");
		f.id = "vpw-test-b";
		f.style.cssText = "overflow:scroll";
		var e = b.createElement("div");
		e.id = "vpw-test-d";
		e.style.cssText = "position:absolute;top:-1000px";
		e.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
		f.appendChild(e);
		c.insertBefore(f, b.head);
		a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
		c.removeChild(f)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function isIOS() {
	for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;) if (navigator.platform === a.pop()) return !0;
	return !1
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
	var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < a ? a : 0
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var a;
		a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
		var d = getSize("Width"),
			b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
			c = CANVAS_WIDTH * b,
			b = CANVAS_HEIGHT * b,
			f;
		b < a ? (f = a - b, b += f, c += CANVAS_WIDTH / CANVAS_HEIGHT * f) : c < d && (f = d - c, c += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
		f = a / 2 - b / 2;
		var e = d / 2 - c / 2,
			g = CANVAS_WIDTH / c;
		if (e * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, f = (a - b) / 2, e = (d - c) / 2, g = CANVAS_WIDTH / c;
		s_iOffsetX = -1 * e * g;
		s_iOffsetY = -1 * f * g;
		0 <= f && (s_iOffsetY = 0);
		0 <= e && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bMobile ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_oStage.scaleX = s_oStage.scaleY = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT));
		0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
		$("#canvas").css("left", e + "px")
	}
}
function createBitmap(a, d, b) {
	var c = new createjs.Bitmap(a),
		f = new createjs.Shape;
	d && b ? f.graphics.beginFill("#fff").drawRect(0, 0, d, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	c.hitArea = f;
	return c
}
function createSprite(a, d, b, c, f, e) {
	a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
	d = new createjs.Shape;
	d.graphics.beginFill("#000000").drawRect(-b, -c, f, e);
	a.hitArea = d;
	return a
}

function randomFloatBetween(a, d, b) {
	"undefined" === typeof b && (b = 2);
	return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}
function shuffle(a) {
	for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
	//console.log("shuffle",a)
	return a
}
function formatTime(a) {
	a /= 1E3;
	var d = Math.floor(a / 60);
	a = parseFloat(a - 60 * d).toFixed(1);
	var b = "",
		b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
	return 10 > a ? b + ("0" + a) : b + a
}
Array.prototype.sortOn = function() {
	var a = this.slice();
	if (!arguments.length) return a.sort();
	var d = Array.prototype.slice.call(arguments);
	return a.sort(function(a, c) {
		for (var f = d.slice(), e = f.shift(); a[e] == c[e] && f.length;) e = f.shift();
		return a[e] == c[e] ? 0 : a[e] > c[e] ? 1 : -1
	})
};

function roundDecimal(a, d) {
	var b = Math.pow(10, d);
	return Math.round(b * a) / b
}
function tweenVectors(a, d, b, c) {
	c.set(a.getX() + b * (d.getX() - a.getX()), a.getY() + b * (d.getY() - a.getY()));
	return c
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
	handleEvent: function(a) {
		switch (a.type) {
		case "touchstart":
			this.onTouchStart(a);
			break;
		case "touchmove":
			this.onTouchMove(a);
			break;
		case "touchend":
			this.onTouchEnd(a)
		}
	},
	onTouchStart: function(a) {
		a.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function(a) {
		this.moved = !0
	},
	onTouchEnd: function(a) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend", this, !1);
		if (!this.moved) {
			a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
			3 === a.nodeType && (a = a.parentNode);
			var d = document.createEvent("MouseEvents");
			d.initEvent("click", !0, !0);
			a.dispatchEvent(d)
		}
	}
};

function playSound(a, d, b) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? createjs.Sound.play(a, {
		loop: b,
		volume: d
	}) : null
}
function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.stop()
}

function setVolume(a, d) {
	if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = d
}
function setMute(a, d) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(d)
}
function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
	for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
		var c = d[b].split("=");
		if (c[0] == a) return c[1]
	}
}

function CSpriteLibrary() {
	var a, d, b, c, f, e;
	this.init = function(g, l, m) {
		b = d = 0;
		c = g;
		f = l;
		e = m;
		a = {}
	};
	this.addSprite = function(c, b) {
		a.hasOwnProperty(c) || (a[c] = {
			szPath: b,
			oSprite: new Image
		}, d++)
	};
	this.getSprite = function(c) {
		return a.hasOwnProperty(c) ? a[c].oSprite : null
	};
	this._onSpritesLoaded = function() {
		f.call(e)
	};
	this._onSpriteLoaded = function() {
		c.call(e);
		++b === d && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var c in a) a[c].oSprite.oSpriteLibrary = this, a[c].oSprite.onload = function() {
			this.oSpriteLibrary._onSpriteLoaded()
		}, a[c].oSprite.src = a[c].szPath
	};
	this.getNumSprites = function() {
		return d
	}
}


function CPreloader() {
	var a, d, b, c, f;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		f = new createjs.Container;
		s_oStage.addChild(f)
	};
	this.unload = function() {
		f.removeAllChildren()
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var e = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
		f.addChild(e);
		b = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
		b.x = 599;
		b.y = CANVAS_HEIGHT - 50;
		f.addChild(b);
		a = 476;
		c = new createjs.Shape;
		c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(599, CANVAS_HEIGHT - 50, 1, 30);
		f.addChild(c);
		b.mask = c;
		d = new createjs.Text("0%", "30px " + FONT_GAME_1, "#fff");
		d.x = 638;
		d.y = CANVAS_HEIGHT - 56;
		d.textAlign = "center";
		d.textBaseline = "middle";
		f.addChild(d)
	};
	this.refreshLoader = function(b) {
		d.text = b + "%";
		b = Math.floor(b * a / 100);
		c.graphics.clear();
		c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(599, CANVAS_HEIGHT - 50, b, 30)
	};
	this._init()
}

function CMain(a) {

	var params = a;
	if (a.coins){
			COINS=a.coins	

	} 
	if (a.lang){
		LANG =a.lang
		InitLANG = a.lang
		//console.log("LANG,InitLANG",LANG,InitLANG)
	}
	
	////console.log("cmain a",a)
	var d, b = 0,
		c = 0,
		f = STATE_LOADING,
		e, g, l;
	this.initContainer = function() {
		var a = document.getElementById("canvas");
		s_oStage = new createjs.Stage(a);
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && s_oStage.enableMouseOver(20);
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", this._update);
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		g = new CPreloader;
		s_oGameSettings = new CGameSettings;
		d = !0
	};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds()
	};
	this.soundLoaded = function() {
		b++;
		g.refreshLoader(Math.floor(b / c * 100));
		b === c && (g.unload(), this.gotoMenu())
	};
	this._initSounds = function() {
		createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/card.ogg", "card"), createjs.Sound.registerSound("./sounds/chip.ogg", "chip"), createjs.Sound.registerSound("./sounds/fiche_collect.ogg", "fiche_collect"), createjs.Sound.registerSound("./sounds/press_but.ogg", "press_but"), createjs.Sound.registerSound("./sounds/win.ogg", "win"), createjs.Sound.registerSound("./sounds/lose.ogg", "lose")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/card.mp3", "card", 4), createjs.Sound.registerSound("./sounds/chip.mp3", "chip", 4), createjs.Sound.registerSound("./sounds/fiche_collect.mp3", "fiche_collect"), createjs.Sound.registerSound("./sounds/press_but.mp3", "press_but"), createjs.Sound.registerSound("./sounds/win.mp3", "win"), createjs.Sound.registerSound("./sounds/lose.mp3", "lose")), c += 6)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

		for (var i =0; i < params.coins.length ; i++) {
			s_oSpriteLibrary.addSprite("coin_"+params.coins[i].coin, "./sprites/coin/"+params.coins[i].coin+".png");	
		}


		s_oSpriteLibrary.addSprite("lang0", "./sprites/lang/lang0.png");
		s_oSpriteLibrary.addSprite("lang1", "./sprites/lang/lang1.png");
		//s_oSpriteLibrary.addSprite("lang", "./sprites/lang/lang.png");
		
		s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
		s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		//s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("bg_game0", "./sprites/bg_game0.jpg");
		s_oSpriteLibrary.addSprite("bg_game1", "./sprites/bg_game1.jpg");
		s_oSpriteLibrary.addSprite("card_spritesheet", "./sprites/card_spritesheet.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
		s_oSpriteLibrary.addSprite("fiche_highlight", "./sprites/fiche_highlight.png");
		s_oSpriteLibrary.addSprite("bet_banker", "./sprites/bet_banker.png");
		s_oSpriteLibrary.addSprite("bet_tie", "./sprites/bet_tie.png");
		s_oSpriteLibrary.addSprite("bet_player", "./sprites/bet_player.png");
		s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
		s_oSpriteLibrary.addSprite("history_cell", "./sprites/history_cell.png");
		s_oSpriteLibrary.addSprite("history_highlight", "./sprites/history_highlight.png");
		s_oSpriteLibrary.addSprite("history_bg", "./sprites/history_bg.png");
		s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
		s_oSpriteLibrary.addSprite("but_deal", "./sprites/but_deal.png");
		s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
		s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png");
		for (var i = 0; i < FICHE_CHOOSE.length; i++) {	
			for (var a = 0; a < NUM_FICHES; a++) {
				s_oSpriteLibrary.addSprite("fiche_"+i+"_" + a, "./sprites/fiche/"+i+"/fiche_" + a + ".png");
			}
		}
		c += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		b++;
		g.refreshLoader(Math.floor(b / c * 100));
		b === c && (g.unload(), this.gotoMenu())
	};
	this._onAllImagesLoaded = function() {};
	this.onAllPreloaderImagesLoaded = function() {
		this._loadImages()
	};
	this.gotoMenu = function() {
//		//console.log(a)
		new CMenu(a);
		f = STATE_MENU
	};
	this.gotoGame = function() {

		l = new CGame(e);
		f = STATE_GAME
		this.cgame = l
	//	//console.log("this.cgame",this.cgame)
	};

	this.setBalance = function(balance) {
		//this.cgame.setCredit(balance)
		//console.log("setBalance",this.cgame)
	};	
	this.gotoHelp = function() {
		new CHelp;
		f = STATE_HELP
	};
	this.stopUpdate = function() {
		d = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block")
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		d = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none")
	};
	this._update = function(a) {
		if (d) {
			var c = (new Date).getTime();
			s_iTimeElaps = c - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = c;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			f === STATE_GAME && l.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	e = a;
	this.initContainer()



}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings;

function CTextButton(a, d, b, c, f, e, g, l) {
	var m, n, k, h, r, q, p, x;
	this._init = function(a, c, b, d, f, e, g, l) {
		m = !1;
		n = [];
		k = [];
		x = l;
		r = createBitmap(b);
		l = Math.ceil(g / 20);
		q = new createjs.Text(d, g + "px " + f, "#000000");
		var C = q.getBounds();
		q.textAlign = "center";
		q.textBaseline = "alphabetic";
		q.x = b.width / 2 + l;
		q.y = Math.floor(b.height / 2) + C.height / 3 + l;
		p = new createjs.Text(d, g + "px " + f, e);
		p.textAlign = "center";
		p.textBaseline = "alphabetic";
		p.x = b.width / 2;
		p.y = Math.floor(b.height / 2) + C.height / 3;
		h = new createjs.Container;
		h.x = a;
		h.y = c;
		h.regX = b.width / 2;
		h.regY = b.height / 2;
		h.cursor = "pointer";
		h.addChild(r, q, p);
		x.addChild(h);
		this._initListener()
	};
	this.unload = function() {
		h.off("mousedown");
		h.off("pressup");
		x.removeChild(h)
	};
	this.setVisible = function(a) {
		h.visible = a
	};
	this.enable = function() {
		m = !1;
		p.color = "#fff"
	};
	this.disable = function() {
		m = !0;
		p.color = "#a39b9d"
	};
	this._initListener = function() {
		oParent = this;
		h.on("mousedown", this.buttonDown);
		h.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, c, b) {
		n[a] = c;
		k[a] = b
	};
	this.buttonRelease = function() {
		m || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), h.scaleX = 1, h.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		m || (h.scaleX = .9, h.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, c) {
		h.x = a;
		h.y = c
	};
	this.changeText = function(a) {
		p.text = a;
		q.text = a
	};
	this.setX = function(a) {
		h.x = a
	};
	this.setY = function(a) {
		h.y = a
	};
	this.getButtonImage = function() {
		return h
	};
	this.getX = function() {
		return h.x
	};
	this.getY = function() {
		return h.y
	};
	this._init(a, d, b, c, f, e, g, l);
	return this
}

function CGfxButton(a, d, b, c) {
	var f, e, g, l, m, n = [],
		k, h;
	this._init = function(a, c, b) {
		f = !1;
		l = [];
		m = [];
		e = b.width;
		g = b.height;
		k = createBitmap(b);
		k.x = a;
		k.y = c;
		k.regX = b.width / 2;
		k.regY = b.height / 2;
		k.cursor = "pointer";
		h.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", this.buttonDown);
		k.off("pressup", this.buttonRelease);
		h.removeChild(k)
	};
	this.setVisible = function(a) {
		k.visible = a
	};
	this._initListener = function() {
		k.on("mousedown", this.buttonDown);
		k.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		l[a] = b;
		m[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		l[a] = b;
		m[a] = c;
		n = d
	};
	this.buttonRelease = function() {
		f || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(m[ON_MOUSE_UP], n))
	};
	this.buttonDown = function() {
		f || l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN], n)
	};
	this.setPosition = function(a, b) {
		k.x = a;
		k.y = b
	};
	this.setX = function(a) {
		k.x = a
	};
	this.setY = function(a) {
		k.y = a
	};
	this.enable = function() {
		f = !1;
		k.filters = [];
		k.cache(0, 0, e, g)
	};
	this.disable = function() {
		f = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		k.filters = [new createjs.ColorMatrixFilter(a)];
		k.cache(0, 0, e, g)
	};
	this.getButtonImage = function() {
		return k
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	h = c;
	this._init(a, d, b);
	return this
}

function CGuiButton(a, d, b, c, f, e, g, l) {
	var m, n, k, h, r, q, p;
	this._init = function(a, b, c, d, f, e, g, l) {
		m = !1;
		n = [];
		k = [];
		p = l;
		r = createBitmap(c);
		q = new createjs.Text(d, g + "px " + f, e);
		q.textAlign = "left";
		q.textBaseline = "alphabetic";
		q.x = 10;
		q.y = c.height - 10;
		h = new createjs.Container;
		h.x = a;
		h.y = b;
		h.regX = c.width / 2;
		h.regY = c.height / 2;
		h.addChild(r, q);
		p.addChild(h);
		this._initListener()
	};
	this.unload = function() {
		h.off("mousedown");
		h.off("pressup");
		p.removeChild(h)
	};
	this.setVisible = function(a) {
		h.visible = a
	};
	this.enable = function() {
		m = !1;
		q.color = "#fff"
	};
	this.disable = function() {
		m = !0;
		q.color = "#a39b9d"
	};
	this._initListener = function() {
		h.on("mousedown", this.buttonDown);
		h.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, c, b) {
		n[a] = c;
		k[a] = b
	};
	this.buttonRelease = function() {
		m || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), h.scaleX = 1, h.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		m || (h.scaleX = .9, h.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, c) {
		h.x = a;
		h.y = c
	};
	this.changeText = function(a) {
		q.text = a
	};
	this.setX = function(a) {
		h.x = a
	};
	this.setY = function(a) {
		h.y = a
	};
	this.getButtonImage = function() {
		return h
	};
	this.getX = function() {
		return h.x
	};
	this.getY = function() {
		return h.y
	};
	this._init(a, d, b, c, f, e, g, l);
	return this
}

function CToggle(a, d, b) {
	var c, f, e;
	this._init = function(a, b, d) {
		c = [];
		f = [];
		var n = new createjs.SpriteSheet({
			images: [d],
			frames: {
				width: d.width / 2,
				height: d.height,
				regX: d.width / 2 / 2,
				regY: d.height / 2
			},
			animations: {
				on: [0, 1],
				off: [1, 2]
			}
		});

		e = s_bAudioActive ? createSprite(n, "on", d.width / 2 / 2, d.height / 2, d.width / 2, d.height) : createSprite(n, "off", d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
		e.x = a;
		e.y = b;
		e.stop();
		e.cursor = "pointer";
		s_oStage.addChild(e);
		this._initListener()
	};
	this.unload = function() {
		e.off("mousedown", this.buttonDown);
		e.off("pressup", this.buttonRelease);
		s_oStage.removeChild(e)
	};
	this._initListener = function() {
		e.on("mousedown", this.buttonDown);
		e.on("pressup", this.buttonRelease)
	};
	this.setPosition = function(a, c) {
		e.x = a;
		e.y = c
	};
	this.addEventListener = function(a, b, d) {
		c[a] = b;
		f[a] = d
	};
	this.buttonRelease = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0);
		e.scaleX = 1;
		e.scaleY = 1;
		(s_bAudioActive = !s_bAudioActive) ? e.gotoAndStop("on") : e.gotoAndStop("off");
		c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		e.scaleX = .9;
		e.scaleY = .9;
		c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
	};
	this._init(a, d, b)
}

function CMenu(a) {
	this.param = a;
	this.lang= a.lang

	var a, d, b, c, f,f1, e,c1,c2,c3,g1;
	
	this._init = function() {
//		//console.log("CMenu inint  LANG InitLANG",LANG,InitLANG)
		
		SetLang(this.lang);
		b = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(b);
		

		for (var i = 0; i < COINS.length; i++) {
				var g = s_oSpriteLibrary.getSprite("coin_"+COINS[i].coin);
				var j = i *200
				j = j -300
				var param=[]
				param.push(COINS[i].coin)

				c = new CGfxButton(CANVAS_WIDTH / 2+j, CANVAS_HEIGHT - 164, g, s_oStage);
				c.addEventListenerWithParams(ON_MOUSE_UP, this._onChooseCoinRelease, this,param);
		
		}	



		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g = s_oSpriteLibrary.getSprite("audio_icon"), a = CANVAS_WIDTH/ 2+700, d = g.height / 2 + 10, f = new CToggle(a, d, g), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);


		e = new createjs.Shape;
		e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(e);
		createjs.Tween.get(e).to({
			alpha: 0
		}, 400).call(function() {
			e.visible = !1
		});

		

		
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
			

			//g1 = s_oSpriteLibrary.getSprite("lang"+LANG)
			g1 = s_oSpriteLibrary.getSprite("lang"+InitLANG)
			a = CANVAS_WIDTH/10  
			d = g1.height / 2 + 10
			f = new CToggle(a, d, g1)
			f.addEventListener(ON_MOUSE_UP, this._onSwitchLang, this);
//			//console.log("reset pic LANG, InitLANG"+LANG, InitLANG)
		}

		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};

	this.refreshButtonPos = function(c, b) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || f.setPosition(a - c, b + d)
	};
	this.unload = function() {
		c.unload();
		c = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
		s_oStage.removeAllChildren();
		s_oMenu = null
	};
	this._onChooseCoinRelease = function(a) {
		////console.log("_onButPlayRelease",a)
		
		PLAY_COIN = a[0]
		for (var i = 0; i < COINS.length; i++) {
			if (PLAY_COIN==COINS[i].coin){
				console.log(COINS[i])
				CURRENCY_TOFIXED=COINS[i].currency_tofixed
				TEXT_CURRENCY = COINS[i].text_currency
				FICHE_KIND = COINS[i].fiche_kind
				MIN_BET = COINS[i].min_bet
				MAX_BET = COINS[i].max_bet
				s_oGameSettings.changeFiche(FICHE_KIND);
				TOTAL_MONEY = COINS[i].balance
				////console.log("TEXT_CURRENCY",TEXT_CURRENCY)
				////console.log("FICHE_KIND",FICHE_CHOOSE[FICHE_KIND])
			}


		}





		this.unload();
		s_oMain.gotoGame();
		$(s_oMain).trigger("start_session")
	};
	

	
	
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};

	this._onSwitchLang = function() {
	
		if (LANG==1){
			LANG=0
			SetLang(LANG)
		} else {
			LANG=1
			SetLang(LANG)
		}

	

		
	};	
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {

	console.log(a.io)
    this.socket = a.io.connect();
    var glClientID = -1;       

    var glClientBoard = {};
    var glClientInfo = {};

    this.socket.on('id', function(data) {
        //$(".socket").append("<li>My ClientID: " + data.id + "</li>");
        console.log("id",data)
        glClientID = data.id;
    });  

     this.socket.on('test', function(data) {
       console.log("test",data)
       //this.socket.emit("ping","ping_data")

    })

     this.socket.on('pong', function(data) {
       console.log("pong",data)
       
    })
     

     this.socket.on('shuffleCard', function(result) {
       console.log("shuffleCard",result)
       
		q=[];
		q = result.cards

		////console.log("q",q)


			    a = [];
			    b = [];

			    a = result.player_cards
			    b = result.banker_cards

			   SEAT.setCredit(result.bet.new_balance) //更新馀额
		p = [];
		for (d = 0; d < a.length; d++) p[d] = a[d];
		r = [];
		for (d = 0; d < b.length; d++) r[d] = b[d];
		v.disableButtons();
		v.displayMsg(TEXT_DISPLAY_MSG_DEALING);

		VERIFY_CODE = Number(result.hex)


		s_oGame._dealing()	     



    })

	var d = !1,
		b, c, f, e, g, l, m, n, k, h, r, q, p, x, E, z, w, y, D, A, F, B, C, v, t, u, G;
	this._init = function() {

		f = MAX_BET;
		e = -1;
		k = c = 0;
		E = [];
		for (var a = 0; a < BET_OCCURRENCE.length; a++) for (var b = 0; b < BET_OCCURRENCE[a]; b++) E.push(a);
		s_oTweenController = new CTweenController;
		C = createBitmap(s_oSpriteLibrary.getSprite("bg_game"+LANG));
		s_oStage.addChild(C);
		a = s_oSpriteLibrary.getSprite("gui_bg");
		b = createBitmap(a);
		b.y = CANVAS_HEIGHT - a.height;
		s_oStage.addChild(b);
		B = new createjs.Container;
		s_oStage.addChild(B);
		v = new CInterface(TOTAL_MONEY);
		v.displayMsg(TEXT_DISPLAY_MSG_WAITING_BET, TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET);
		t = new CSeat;
		SEAT = t
		t.setCredit(TOTAL_MONEY); 
		this.reset(!1);
		w = new CVector2;
		w.set(1214, 228);
		y = new CVector2;
		y.set(CANVAS_WIDTH / 2 + 100, 230);
		D = new CVector2;
		D.set(418, 820);
		A = new CVector2;
		A.set(0, -CANVAS_HEIGHT);
		F = new CVector2(454, 230);
		x = [t.getCardOffset(), y];
		G = new CGameOver;
		t.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : d = !0;
		z = new CVector2(w.getX(), w.getY());
		u = new CMsgBox;


		this.changeState(STATE_GAME_WAITING_FOR_BET)
	};
	this.unload = function() {
		d = !1;
		createjs.Sound.stop();
		for (var a = 0; a < h.length; a++) h[a].unload();
		v.unload();
		G.unload();
		u.unload();
		s_oStage.removeAllChildren()
	};
	this.reset = function(a) {
		b = !1;
		l = m = g = c = 0;
		t.reset();
		h = [];
		h.splice(0);
		v.reset();
		v.enableBetFiches(a);

		
		if (this.isDemo()){
			this.shuffleCardForDemo()
		} else {

			q=[];
		}
		
	};
	
	this.shuffleCardForDemo = function() {
		
		q = [];
		q = s_oGameSettings.getShuffledCardDeck()
		/*
		if (PLAY_COIN=="demo"){
			q = s_oGameSettings.getShuffledCardDeck()
		} else {
			//console.log("this.shuffleCard")
			
			for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
			
			




		}
		*/
		
		
	};
	
	this.isDemo = function(){
		if (PLAY_COIN=="demo"){
			 return true
		} else{
			 return false
		}
	}
	this.changeState = function(a) {
	
		e = a;
		if (e === STATE_GAME_DEALING) {
		   if(PLAY_COIN=="demo"){
		   
				var b;
				b = n < 2 * t.getTotBet() ? WIN_OCCURRENCE : 100 * Math.random();
				if(PLAY_COIN!="demo"){b= 30} ;
				
				
				a = t.getBetArray();
				
				for (var c = 0, d = 0; d < a.length; d++) 0 < a[d] && c++;
				if (b < WIN_OCCURRENCE) if (1 === c) {
					for (d = 0; d < a.length; d++) {
						var f = 0;
						if (0 !== a[d]) {
							f = d;
							break
						}
					}
					d = f
				} else {
					do d = E[Math.floor(Math.random() * E.length)];
					while (0 === a[d])
				} else if (3 === c) b = Math.random(), d = .5 < b ? BET_BANKER : BET_PLAYER;
				else {
					d = [];
					for (b = 0; b < a.length; b++) 0 === a[b] && d.push(b);
					b = Math.floor(Math.random() * d.length);
	
					d = d[b]
				}
				do 6 > q.length && this.shuffleCard(), a = [], a.push(q.splice(0, 1)), a.push(q.splice(0, 1)), b = [], b.push(q.splice(0, 1)), b.push(q.splice(0, 1)), f = this._simulateHand(a, b);
				while (d !== f);
				p = [];
				for (d = 0; d < a.length; d++) p[d] = a[d];
				r = [];
				for (d = 0; d < b.length; d++) r[d] = b[d];
				v.disableButtons();
				v.displayMsg(TEXT_DISPLAY_MSG_DEALING);
				this._dealing()
			}else{
				
				var b;

				
				b = n < 2 * t.getTotBet() ? WIN_OCCURRENCE : 100 * Math.random();
				
				//if(PLAY_COIN!="demo"){b= 30} ;
				b = 30;
				////console.log("b",b)
				////console.log("WIN_OCCURRENCE",WIN_OCCURRENCE)
				a = t.getBetArray();
				
				for (var c = 0, d = 0; d < a.length; d++) 0 < a[d] && c++;
				
				if (b < WIN_OCCURRENCE) if (1 === c) {
					for (d = 0; d < a.length; d++) {
						var f = 0;
						if (0 !== a[d]) {
							f = d;
							break
						}
					}
					d = f
				} else {
					do d = E[Math.floor(Math.random() * E.length)];
					while (0 === a[d])
				} else if (3 === c) b = Math.random(), d = .5 < b ? BET_BANKER : BET_PLAYER;
				else {
					d = [];
					for (b = 0; b < a.length; b++) 0 === a[b] && d.push(b);
					b = Math.floor(Math.random() * d.length);
	
					d = d[b]
				}
				
				

			
		
	
				for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
				
				this.socket.emit("shuffleCard")

				var url = SERVER_URL+"/games/baccarat/shuffle"		
				var param = {};
				param.uid= "1"
				param.sid= "sdfzdsaf123"
				/*
				$.ajax({
				  type: 'GET',
				  url: url,
				  data: param,
				  async : false, 
				  success:  function(result){  
						//USER = result
			          
			           ////console.log("getShuffledCardDeck from http",result)
			            q=[];
			            q = result.cards
			            	
			           ////console.log("q",q)


								    a = [];
								    b = [];
		
								    a = result.player_cards
								    b = result.banker_cards

								   SEAT.setCredit(result.bet.new_balance)
						p = [];
						for (d = 0; d < a.length; d++) p[d] = a[d];
						r = [];
						for (d = 0; d < b.length; d++) r[d] = b[d];
						v.disableButtons();
						v.displayMsg(TEXT_DISPLAY_MSG_DEALING);

						VERIFY_CODE = Number(result.hex)
	

						s_oGame._dealing()					           
			          }  
				});		
				*/	


	
			}
		}
	};
	function _simulateHand(a, b) {
		for (var c = 0, d = 0, f = 0; f < a.length; f++){
			c += s_oGameSettings.getCardValue(a[f])
			d += s_oGameSettings.getCardValue(b[f]);
		}  
		c %= 10;
		d %= 10;
		////console.log("c",c)
		////console.log("d",d)
		if (7 < d) return c = d > c ? WIN_DEALER : d === c ? WIN_TIE : WIN_PLAYER;
		f = !1;
		if (7 < c) return WIN_PLAYER;
		if (6 > c) {
			var h = q.splice(0, 1),
				e = s_oGameSettings.getCardValue(h);
			a.push(h);
			c = (c + e) % 10;
			3 > d ? f = !0 : 3 === d && 8 !== e ? f = !0 : 4 === d && 1 < e && 8 > e ? f = !0 : 5 === d && 3 < e && 8 > e ? f = !0 : 6 !== d || 6 !== e && 7 !== e || (f = !1);
			f && (h = q.splice(0, 1), b.push(h), d += s_oGameSettings.getCardValue(h), d %= 10)
		} else 6 > d && (h = q.splice(0, 1), b.push(h), d += s_oGameSettings.getCardValue(h), d %= 10);
		return d === c ? WIN_TIE : d > c ? WIN_DEALER : WIN_PLAYER
	};

	this._simulateHand = function(a, b) {
		for (var c = 0, d = 0, f = 0; f < a.length; f++) c += s_oGameSettings.getCardValue(a[f]), d += s_oGameSettings.getCardValue(b[f]);
		c %= 10;
		d %= 10;
		if (7 < d) return c = d > c ? WIN_DEALER : d === c ? WIN_TIE : WIN_PLAYER;
		f = !1;
		if (7 < c) return WIN_PLAYER;
		if (6 > c) {
			var h = q.splice(0, 1),
				e = s_oGameSettings.getCardValue(h);
			a.push(h);
			c = (c + e) % 10;
			3 > d ? f = !0 : 3 === d && 8 !== e ? f = !0 : 4 === d && 1 < e && 8 > e ? f = !0 : 5 === d && 3 < e && 8 > e ? f = !0 : 6 !== d || 6 !== e && 7 !== e || (f = !1);
			f && (h = q.splice(0, 1), b.push(h), d += s_oGameSettings.getCardValue(h), d %= 10)
		} else 6 > d && (h = q.splice(0, 1), b.push(h), d += s_oGameSettings.getCardValue(h), d %= 10);
		return d === c ? WIN_TIE : d > c ? WIN_DEALER : WIN_PLAYER
	};
	this.cardFromDealerArrived = function(a, b, c) {
		playSound("card", 1, 0)
		
		!1 === b ? l += a.getValue() : m += a.getValue();
		3 > c ? s_oGame._dealing() : (l %= 10, m %= 10, v.refreshCardValue(m, l), 1 === p.length ? (a = p.splice(0, 1), b = new CCard(w.getX(), w.getY(), B,TIME_SHOW_FINAL_CARDS), b.setInfo(z, t.getAttachCardOffset(), a, s_oGameSettings.getCardValue(a), !1, g), b.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived), t.newCardDealed(), g++, h.push(b)) : 1 === r.length ? (g++, c = new CVector2(y.getX() + CARD_WIDTH / 2 * 2, y.getY()), a = r.splice(0, 1), b = new CCard(w.getX(), w.getY(), B,TIME_SHOW_FINAL_CARDS), b.setInfo(z, c, a, s_oGameSettings.getCardValue(a), !0, g), b.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived), h.push(b)) : s_oGame._showWin())
	
//		//console.log("a",a)
	};
	this._showWin = function() {
		var a;
		a = m === l ? BET_TIE : m > l ? BET_BANKER : BET_PLAYER;
		for (var b = t.getBetArray(), c = !1, d = 0; d < b.length; d++) if (0 < b[d]) {
			var f = 0;
			a === d ? (this._playerWin(t.getPotentialWin(d), a), f = t.getPotentialWin(d), c = !0) : this._playerLose(d);
			v.showWin(d, f)
		}
		c ? playSound("win", 1, 0) : playSound("lose", 1, 0);
		setTimeout(function() {
			s_oGame._onEndHand(a)
		}, TIME_END_HAND)
	};
	this._playerWin = function(a, b) {
		t.increaseCredit(a);
		n -= a;
		v.displayMsg(TEXT_DISPLAY_MSG_PLAYER_WIN, TEXT_BET[b] === BET_TIE ? TEXT_DISPLAY_TIE : TEXT_HAND_WON + " " + TEXT_BET[b]);
		t.initMovement(b, D.getX(), D.getY())
	};
	this._playerLose = function(a) {
		v.displayMsg(TEXT_DISPLAY_MSG_PLAYER_LOSE, TEXT_BET[a] === BET_TIE ? TEXT_DISPLAY_TIE : TEXT_HAND_WON + " " + TEXT_BET[a]);
		t.initMovement(a, A.getX(), A.getY())
	};
	this._dealing = function() {
	
		
		if (g < 2 * x.length) {
			var a = new CCard(w.getX(), w.getY(), B),
				b;
			if (1 === g % x.length) {
				b = new CVector2(y.getX() + CARD_WIDTH / 2 * (1 < g ? 1 : 0), y.getY());
				
				var c = r.splice(0, 1);
				
				a.setInfo(z, b, c, s_oGameSettings.getCardValue(c), !0, g)
				////console.log("_dealing_1",c[0],s_oGameSettings.getCardValue(c),g,"庄家")
				//庄家
			} else {
				c = p.splice(0, 1)
				a.setInfo(z, t.getAttachCardOffset(), c, s_oGameSettings.getCardValue(c), !1, g)
			    t.newCardDealed();
			   //////console.log("_dealing_2",c[0],s_oGameSettings.getCardValue(c),g,"闲家")
			    //闲家
				
			}
			
			
			
			h.push(a);
			
			g++;
			a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
			a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
			//playSound("card", 1, 0)
		}
	};
	//一局结束
	this._onEndHand = function(a) {
		v.displayMsg(TEXT_VERIFY, + "\n" + VERIFY_CODE)
		v.addHistoryRow(l, m, a);
		a = new CVector2(F.getX(), F.getY());
		for (var b = 0; b < h.length; b++) h[b].initRemoving(a), h[b].hideCard();
		v.clearCardValueText();
		c = 0;
		s_oGame.changeState(STATE_GAME_SHOW_WINNER);
		playSound("fiche_collect", 1, 0);
		k++;
		k === AD_SHOW_COUNTER && (k = 0, $(s_oMain).trigger("show_interlevel_ad"));
		$(s_oMain).trigger("save_score", [t.getCredit()])
	};
	this.setBet = function(a, c, d) {
		//var float_place = 4||float_place
			////console.log(float_place)
		b && (b = !1, this.clearBets());
		var h = t.getTotBet();
		//h = Math.round(h)
		var ha = numAdd(h,a)
		//console.log(ha)
		ha <= f && a <= t.getCredit() && (ha.toFixed(CURRENCY_TOFIXED), t.decreaseCredit(a), n=numAdd(n,a), t.bet(a, d, c), v.enable(!0, !1, !1, !1, !1), v.refreshCredit(t.getCredit()))
	};
	this._gameOver = function() {
		G.show()
	};
	this.onDeal = function() {
	
		if (this.isDemo()) {this.shuffleCardForDemo()}
		t.getTotBet() < MIN_BET ? (u.show(TEXT_ERROR_MIN_BET), v.enableBetFiches(!1), v.enable(!0)) : (t.calculatePotentialWins(), this.changeState(STATE_GAME_DEALING))
	};
	this.clearBets = function() {
		var a = t.getStartingBet();
		0 < a && (t.clearBet(), t.increaseCredit(a), n -= a, v.refreshCredit(t.getCredit()), a = t.checkIfRebetIsPossible(), v.enableBetFiches(a))
	};
	this.rebet = function() {
		this.clearBets();
		var a = t.rebet();
		n -= a;
		v.enable(!0, !1, !1, !1, !1);
		v.refreshCredit(t.getCredit());
		c = BET_TIME;
		b = !0
	};
	this._onRemoveCard = function(a) {
		a.unload();
		v.displayMsg(TEXT_DISPLAY_MSG_WAITING_BET, TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET)
	};
	this.onExit = function() {
		this.unload();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("share_event", t.getCredit());
		s_oMain.gotoMenu()
	};
	this.getState = function() {
		return e
	};
	this._updateDealing = function() {
		for (var a = 0; a < h.length; a++) h[a].update()
	};
	this._updateShowWinner = function() {
		t.updateFichesController(s_iTimeElaps);
		for (var a = 0; a < h.length; a++) h[a].update();
		c += s_iTimeElaps;
		c > TIME_END_HAND && (c = 0, a = t.checkIfRebetIsPossible(), this.reset(a), v.reset(), t.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET), v.refreshCredit(t.getCredit()))
	};
	this.update = function() {
		if (!1 !== d) switch (e) {
		case STATE_GAME_DEALING:
			this._updateDealing();
			break;
		case STATE_GAME_SHOW_WINNER:
			this._updateShowWinner()
		}
	};
	this._updateMoney =function(money){
		TOTAL_MONEY = money
	}
	s_oGame = this;
	//TOTAL_MONEY = a.money;
	/*
	MIN_BET = a.min_bet;
	MAX_BET = a.max_bet;
	FICHE_KIND = a.fiche_kind
	TEXT_CURRENCY = a.text_currency
	*/
	//会在每次进入游戏时重启以下参数
	//console.log("起始传入资料a",a)
	MULTIPLIERS = a.multiplier;
	BET_TIME = a.bet_time;
	//LANG = a.lang
	BLACKJACK_PAYOUT = a.blackjack_payout;
	WIN_OCCURRENCE = a.win_occurrence;
	BET_OCCURRENCE = a.bet_occurrence;
	n = a.game_cash;
	TIME_END_HAND = a.time_show_hand;
	AD_SHOW_COUNTER = a.ad_show_counter;
	this._init()
}
var s_oGame, s_oTweenController;

function CInterface(a) {
	var d, b, c, f, e, g, l, m, n, k, h, r, q, p, x, E, z, w, y, D, A, F, B, C, v;
	this._init = function(a) {
		var u = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - u.width / 2 - 10;
		f = u.height / 2 + 10;
		h = new CGfxButton(c, f, u, s_oStage);
		h.addEventListener(ON_MOUSE_UP, this._onExit, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e = h.getX() - u.width - 10, g = u.height / 2 + 10, x = new CToggle(e, g, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive), x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		u = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
		u.x = 290;
		u.y = 6;
		s_oStage.addChild(u);
/*
		u = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
		u.x = 1090;
		u.y = 6;
		s_oStage.addChild(u);
*/
		C = new CGfxButton(CANVAS_WIDTH / 2, 590, s_oSpriteLibrary.getSprite("bet_player"), s_oStage);
		C.addEventListener(ON_MOUSE_UP, this._onButPlayerRelease, this);
		B = new CGfxButton(CANVAS_WIDTH / 2, 482, s_oSpriteLibrary.getSprite("bet_banker"), s_oStage);
		B.addEventListener(ON_MOUSE_UP, this._onButBankerRelease, this);
		F = new CGfxButton(CANVAS_WIDTH / 2, 400, s_oSpriteLibrary.getSprite("bet_tie"), s_oStage);
		F.addEventListener(ON_MOUSE_UP, this._onButTieRelease, this);
		u = s_oSpriteLibrary.getSprite("but_clear");
		r = new CGuiButton(939, CANVAS_HEIGHT - 31, u, TEXT_CLEAR, FONT_GAME_1, "#ffffff", 17, s_oStage);
		r.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
		u = s_oSpriteLibrary.getSprite("but_rebet");
		q = new CGuiButton(1112, CANVAS_HEIGHT - u.height / 2, u, TEXT_REBET, FONT_GAME_1, "#ffffff", 17, s_oStage);
		q.disable();
		q.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
		y = new createjs.Text("", "24px " + FONT_GAME_2, "#ffde00");
		y.x = 412;
		y.y = 16;
		y.lineWidth = 150;
		y.textAlign = "left";
		y.lineHeight = 20;
		s_oStage.addChild(y);
		D = new createjs.Text("", "19px " + FONT_GAME_2, "#ffde00");
		D.x = 412;
		D.y = 66;
		y.lineWidth = 180;
		D.textAlign = "left";
		D.lineHeight = 18;
		s_oStage.addChild(D);
		z = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
		z.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		z.x = 910;
		z.y = 180;
		z.textAlign = "right";
		s_oStage.addChild(z);
		w = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
		w.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		w.x = 658;
		w.y = 180;
		w.textAlign = "right";
		s_oStage.addChild(w);
		u = new createjs.Text(TEXT_MONEY + ":", "30px " + FONT_GAME_2, "#ffde00");
		u.x = 350;
		u.y = CANVAS_HEIGHT - 134;
		u.textAlign = "left";
		s_oStage.addChild(u);
		E = new createjs.Text(TEXT_CURRENCY +"  "+ a.toFixed(CURRENCY_TOFIXED), "30px " + FONT_GAME_2, "#ffde00");
		E.x = 420;
		E.y = CANVAS_HEIGHT - 134;
		E.textAlign = "left";
		s_oStage.addChild(E);
		u = s_oSpriteLibrary.getSprite("but_deal");
		p = new CGuiButton(1282, CANVAS_HEIGHT - u.height / 2, u, TEXT_DEAL, FONT_GAME_1, "#ffffff", 26, s_oStage);
		p.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
		k = [];
		k[BET_TIE] = new CWinDisplay(CANVAS_WIDTH + 100, 360, s_oStage);
		k[BET_BANKER] = new CWinDisplay(CANVAS_WIDTH + 100, 460, s_oStage);
		k[BET_PLAYER] = new CWinDisplay(CANVAS_WIDTH + 100, 580, s_oStage);
		POS_BET[BET_TIE] = {
			x: F.getX(),
			y: F.getY()
		};
		POS_BET[BET_BANKER] = {
			x: B.getX(),
			y: B.getY()
		};
		POS_BET[BET_PLAYER] = {
			x: C.getX(),
			y: C.getY()
		};
		var G = [{
			x: 387,
			y: CANVAS_HEIGHT - 24
		}, {
			x: 467,
			y: CANVAS_HEIGHT - 24
		}, {
			x: 547,
			y: CANVAS_HEIGHT - 24
		}, {
			x: 627,
			y: CANVAS_HEIGHT - 24
		}, {
			x: 707,
			y: CANVAS_HEIGHT - 24
		}, {
			x: 787,
			y: CANVAS_HEIGHT - 24
		}];
		n = [];
		a = s_oGameSettings.getFichesValues();
		//绘制fiche
		for (var H = 0; H < NUM_FICHES; H++) {
		 u = s_oSpriteLibrary.getSprite("fiche_"+FICHE_KIND+"_" + H)
		 n[H] = new CGfxButton(G[H].x, G[H].y, u, s_oStage)
		 n[H].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [a[H], H]);
		}
		 var coin;
		 coin = s_oSpriteLibrary.getSprite("coin_" + PLAY_COIN)
		 n[H] = new CGfxButton(G[0].x-300, G[0].y, coin, s_oStage)
		
		
		G = s_oSpriteLibrary.getSprite("fiche_highlight");
		A = createBitmap(G);
		A.regX = G.width / 2;
		A.regY = G.height / 2;
		A.x = n[0].getX();
		A.y = n[0].getY();
		s_oStage.addChild(A);
		l = a[0];
		m = 0;
		FICHE_WIDTH = u.width;
		d = 30;
		b = 165;
		v = new CHistory(d, b, s_oStage);
		this.disableButtons();
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		h.unload();
		h = null;
		!1 === DISABLE_SOUND_MOBILE && (x.unload(), x = null);
		r.unload();
		B.unload();
		C.unload();
		F.unload();
		p.unload();
		q.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(a, k) {
		h.setPosition(c - a, k + f);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || x.setPosition(e - a, k + g);
		v.setPosition(d + a, b)
	};
	this.reset = function() {
		this.disableButtons()
	};
	this.enableBetFiches = function(a) {
		for (var b = 0; b < NUM_FICHES; b++) n[b].enable();
		r.enable();
		a && q.enable();
		F.enable();
		B.enable();
		C.enable()
	};
	this.disableBetFiches = function() {
		for (var a = 0; a < NUM_FICHES; a++) n[a].disable();
		r.disable();
		q.disable();
		F.disable();
		B.disable();
		C.disable()
	};
	this.disableButtons = function() {
		p.disable()
	};
	this.enable = function(a) {
		a ? p.enable() : p.disable()
	};
	this.refreshCredit = function(a) {
		E.text = TEXT_CURRENCY + a.toFixed(CURRENCY_TOFIXED)
	};
	this.refreshCardValue = function(a, b) {
		z.text = "" + a;
		w.text = "" + b
	};
	this.displayMsg = function(a, b) {
		y.text = a;
		D.text = b
	};
	this.clearCardValueText = function() {
		z.text = "";
		w.text = ""
	};
	this._onFicheClicked = function(a) {
		this.hideAllWins();
		A.x = n[a[1]].getX();
		A.y = n[a[1]].getY();
		l = a[0];
		m = a[1]
		////console.log(l)
		////console.log(m)
	};
	this._onChooseCoinClicked = function(a) {
			PLAY_COIN=n[0]
			//console.log("_onChooseCoinClicked",PLAY_COIN)
	};

	this.showWin = function(a, b) {
		
			k[a].show(TEXT_SHOW_WIN[a], b)
		
		
	};
	this.hideAllWins = function() {
		for (var a = 0; a < k.length; a++) k[a].hide()
	};
	this.addHistoryRow = function(a, b, c) {
		v.addHistoryRow(a, b, c)
	};
	this._onButTieRelease = function() {
		this.hideAllWins();
		s_oGame.setBet(l, m, BET_TIE)
	};
	this._onButBankerRelease = function() {
		this.hideAllWins();
		s_oGame.setBet(l, m, BET_BANKER)
	};
	this._onButPlayerRelease = function() {
		this.hideAllWins();
		s_oGame.setBet(l, m, BET_PLAYER)
	};
	this._onButClearRelease = function() {
		s_oGame.clearBets()
	};
	this._onButRebetRelease = function() {
		this.hideAllWins();
		q.disable();
		s_oGame.rebet()
	};
	//发牌
	this._onButDealRelease = function() {
		this.disableBetFiches();
		this.disableButtons();
		s_oGame.onDeal()
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	s_oInterface = this;
	this._init(a);
	return this
}
var s_oInterface = null;

function CTweenController() {
	this.tweenValue = function(a, d, b) {
		return a + b * (d - a)
	};
	this.easeLinear = function(a, d, b, c) {
		return b * a / c + d
	};
	this.easeInCubic = function(a, d, b, c) {
		c = (a /= c) * a * a;
		return d + b * c
	};
	this.easeBackInQuart = function(a, d, b, c) {
		c = (a /= c) * a;
		return d + b * (2 * c * c + 2 * c * a + -3 * c)
	};
	this.easeInBack = function(a, d, b, c) {
		return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
	};
	this.easeOutCubic = function(a, d, b, c) {
		return b * ((a = a / c - 1) * a * a + 1) + d
	}
}

function CSeat() {
	var a, d, b, c, f, e, g, l, m, n, k;
	this._init = function() {
		m = new createjs.Container;
		m.x = CANVAS_WIDTH / 2 - 150;
		
		m.y = 230;
		s_oStage.addChild(m);
		k = [];
		for (var a = 0; 3 > a; a++) k[a] = new CFichesController;
		f = 0;
		this.reset();
		n = new CVector2;
		n.set(0, 0);
		l = new CVector2(n.getX(), n.getY())
	};
	this.unload = function() {
		s_oStage.removeChild(m)
	};
	this.addEventListener = function(a, b, c) {};
	this.reset = function() {
		for (var f = c = b = d = a = 0; f < k.length; f++) k[f].reset();
		e = [];
		for (f = 0; 3 > f; f++) e[f] = []
	};
	this.clearBet = function() {
		b = d = a = 0;
		e = [];
		for (var c = 0; 3 > c; c++) k[c].reset(), e[c] = []
	};
	this.setCredit = function(a) {
		f = a
	};
	this.increaseCredit = function(a) {
		f += a
	};
	this.bet = function(c, f, e) {
		//console.log("bet",c,f,e)
		e = 0;
		switch (f) {
		case BET_TIE:
			e = a += c;
			break;
		case BET_BANKER:
			e = d += c;
			break;
		case BET_PLAYER:
			e = b += c
		}
		k[f].createFichesPile(e, POS_BET[f].x, POS_BET[f].y)
	};
	this.calculatePotentialWins = function() {
		////console.log("calculatePotentialWins")
		g = [];
		g[BET_TIE] = a * MULTIPLIERS[BET_TIE];
		g[BET_BANKER] = d * MULTIPLIERS[BET_BANKER];
		g[BET_PLAYER] = b * MULTIPLIERS[BET_PLAYER];
		k[0].setPrevValue(a);
		k[1].setPrevValue(d);
		k[2].setPrevValue(b)
	};
	this.decreaseCredit = function(a) {
		f -= a
	};
	this.refreshFiches = function(a, b, c, d, f) {
		//console.log("refreshFiches",a,b,c,d,f)
		e[f].push({
			value: a,
			index: b
		});
		k[f].refreshFiches(e[f], c, d)
	};
	this.initMovement = function(a, b, c) {
		k[a].initMovement(b, c)
	};
	this.newCardDealed = function() {
		c++
	};
	this.rebet = function() {
		for (var c = 0, f = 0; f < k.length; f++) {
			var e = parseFloat(k[f].getPrevBet().toFixed(CURRENCY_TOFIXED));
			if (0 < e) {
				c += e;
				this.decreaseCredit(e);
				switch (f) {
				case BET_TIE:
					a += e;
					break;
				case BET_BANKER:
					d += e;
					break;
				case BET_PLAYER:
					b += e
				}
				k[f].createFichesPile(e, POS_BET[f].x, POS_BET[f].y)
			}
		}
		return c
	};
	this.checkIfRebetIsPossible = function() {
		for (var a = 0, b = 0; b < k.length; b++) var c = parseFloat(k[b].getPrevBet().toFixed(CURRENCY_TOFIXED)),
			a = a + c;
		return a > f ? !1 : !0
	};
	this.updateFichesController = function(a) {
		for (var b = 0; b < k.length; b++) k[b].update(a)
	};
	this.getAttachCardOffset = function() {
		l.set(m.x + n.getX() + CARD_WIDTH / 2 * c, m.y + n.getY());
		return l
	};
	this.getTotBet = function() {
		return a + d + b
	};
	this.getBetArray = function() {
		return [a, d, b]
	};
	this.getCredit = function() {
		return f
	};
	this.getCardOffset = function() {
		return n
	};
	this.getPotentialWin = function(a) {
		return g[a]
	};
	this.getStartingBet = function() {
		for (var a = 0, b = 0; b < k.length; b++) a += k[b].getValue();
		return a
	};
	this._init()
}

function CFichesController() {
	var a, d, b, c, f, e, g, l, m, n, k;
	this._init = function() {
		l = new createjs.Container;
		s_oStage.addChild(l);
		f = new CVector2;
		f.set(l.x, l.y);
		m = new createjs.Container;
		s_oStage.addChild(m);
		k = new createjs.Text("", "28px " + FONT_GAME_1, "#000");
		k.textAlign = "left";
		m.addChild(k);
		n = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
		n.textAlign = "left";
		m.addChild(n);
		b = c = d = 0;
		a = !1
	};
	this.addEventListener = function(a, b, c) {};
	this.reset = function() {
		a = !1;
		b = 0;
		l.removeAllChildren();
		l.x = f.getX();
		l.y = f.getY();
		k.text = "";
		n.text = ""
	};
	this.setPrevValue = function(a) {
		c = a
	};
	this.refreshFiches = function(a, c, d) {

		a = a.sortOn("value", "index");
		for (var f = c, e = d, g = b = 0, m = 0; m < a.length; m++) {
			var w = createBitmap(s_oSpriteLibrary.getSprite("fiche_"+FICHE_KIND+"_" + a[m].index));
			if(FICHE_KIND<1){
					w.scaleX = .9;
					w.scaleY = .9;
			} else {
					w.scaleX = 1.1;
					w.scaleY = 1.1;						
			}
			l.addChild(w);
			
			w.x = f-50;
			
			w.y = e;
			e -= 5;
			g++;
			9 < g && (g = 0, f += FICHE_WIDTH,f+=20, e = d);
			//b += a[m].value
			b= numAdd(b,a[m].value)
//			//console.log("refreshFiches a[m]",a[m].value)
		}
		playSound("chip", 1, 0);
		//console.log("refreshFiches",b)
		var tofixed = getFloatLength(b)
		n.x = c-50;
		n.y = d + 40;
		n.text = b.toFixed(tofixed) + TEXT_CURRENCY;
		k.x = c + 2-50;
		k.y = d + 40;
		k.text = b.toFixed(tofixed) + TEXT_CURRENCY
	};
	this.createFichesPile = function(a, b, c) {
		//console.log("createFichesPile",a,b,c)
		this.reset();
		var d = s_oGameSettings.getFichesValues(),
			f = [];
		do {
			for (var e = d[d.length - 1], g = d.length - 1; e > a;) g--, e = d[g];
			for (var g = Math.floor(a / e), k = 0; k < g; k++) f.push({
				value: e,
				index: s_oGameSettings.getIndexForFiches(e)
			});
			a = e = (a % e).toFixed(CURRENCY_TOFIXED)
		} while (0 < e);
		this.refreshFiches(f, b, c)
	};
	this.initMovement = function(d, f) {
		c = b;
		e = new CVector2(l.x, l.y);
		g = new CVector2(d, f);
		n.text = "";
		k.text = "";
		a = !0
	};
	this.getValue = function() {
		return b
	};
	this.getPrevBet = function() {
		return c
	};
	this.update = function(b) {
		if (a) if (d += b, d > TIME_FICHES_MOV) d = 0, a = !1;
		else {
			b = easeInOutCubic(d, 0, 1, TIME_FICHES_MOV);
			var c = new CVector2,
				c = tweenVectors(e, g, b, c);
			l.x = c.getX();
			l.y = c.getY()
		}
	};
	this._init()
}

function CVector2(a, d) {
	var b, c;
	this._init = function(a, d) {
		b = a;
		c = d
	};
	this.add = function(a, d) {
		b += a;
		c += d
	};
	this.addV = function(a) {
		b += a.getX();
		c += a.getY()
	};
	this.scalarDivision = function(a) {
		b /= a;
		c /= a
	};
	this.subV = function(a) {
		b -= a.getX();
		c -= a.getY()
	};
	this.scalarProduct = function(a) {
		b *= a;
		c *= a
	};
	this.invert = function() {
		b *= -1;
		c *= -1
	};
	this.dotProduct = function(a) {
		return b * a.getX() + c * a.getY()
	};
	this.set = function(a, d) {
		b = a;
		c = d
	};
	this.setV = function(a) {
		b = a.getX();
		c = a.getY()
	};
	this.length = function() {
		return Math.sqrt(b * b + c * c)
	};
	this.length2 = function() {
		return b * b + c * c
	};
	this.normalize = function() {
		var a = this.length();
		0 < a && (b /= a, c /= a)
	};
	this.getNormalize = function(a) {
		this.length();
		a.set(b, c);
		a.normalize()
	};
	this.rot90CCW = function() {
		var a = b;
		b = -c;
		c = a
	};
	this.rot90CW = function() {
		var a = b;
		b = c;
		c = -a
	};
	this.getRotCCW = function(a) {
		a.set(b, c);
		a.rot90CCW()
	};
	this.getRotCW = function(a) {
		a.set(b, c);
		a.rot90CW()
	};
	this.ceil = function() {
		b = Math.ceil(b);
		c = Math.ceil(c)
	};
	this.round = function() {
		b = Math.round(b);
		c = Math.round(c)
	};
	this.toString = function() {
		return "Vector2: " + b + ", " + c
	};
	this.print = function() {
		trace("Vector2: " + b + ", " + c + "")
	};
	this.getX = function() {
		return b
	};
	this.getY = function() {
		return c
	};
	this._init(a, d)
}

function CGameSettings() {
	var a, d, b, c;
	this._init = function() {
		b = [];
		a = [];
		for (var d = 0; d < NUM_DECKS; d++) for (var e = 0; 52 > e; e++) {
			a.push(e);
			var g = (e + 1) % 13;
			if (10 < g || 0 === g) g = 10;
			b.push(g)
		}

		c= FICHE_CHOOSE[FICHE_KIND]
		//console.log("FICHE_CHOOSE FICHE_KIND",c)


	};

	this.changeFiche = function(a){
			c = FICHE_CHOOSE[a]
			////console.log("changeFiche",c)
	}

	this.getFichesValues = function() {
		return c
	};
	this.getFichesValueAt = function(a) {
		return c[a]
	};
	this.getIndexForFiches = function(a) {
		for (var b = 0, d = 0; d < c.length; d++) c[d] === a && (b = d);
		return b
	};
	this.generateFichesPile = function(a) {
		//console.log("generateFichesPile",a)
		var b = [],
			d, l = c.length - 1,
			m = c[l];
		do {
			d = a % m;
			d = CMath.roundDecimal(d, 1);
			a = Math.floor(a / m);
			for (var n = 0; n < a; n++) b.push(m);
			l--;
			m = c[l];
			a = d
		} while (0 < d && -1 < l);
		return b
	};
	this.timeToString = function(a) {
		a = Math.round(a / 1E3);
		var b = Math.floor(a / 60);
		a -= 60 * b;
		var c = "",
			c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
		return 10 > a ? c + ("0" + a) : c + a
	};
	this.getShuffledCardDeck = function() {

			
		
			for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
			for (d = []; 0 < b.length;) {
				d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
			}
		

		//console.log("getShuffledCardDeck",d.length,d)
		
		return d
	};
	
	
	this.getCardValue = function(a) {
		return b[a]
	};
	this.getCardDeck = function() {
		return a
	};
	this._init()
}
var TYPE_LINEAR = 0,
	TYPE_OUT_CUBIC = 1,
	TYPE_IN_CUBIC = 2,
	TYPE_OUT_BACK = 3,
	TYPE_IN_BACK = 4;

function ease(a, d, b, c, f, e) {
	var g;
	switch (a) {
	case TYPE_LINEAR:
		g = easeLinear(d, b, c, f, e);
		break;
	case TYPE_IN_CUBIC:
		g = easeInCubic(d, b, c, f, e);
		break;
	case TYPE_OUT_CUBIC:
		g = easeOutCubic(d, b, c, f, e);
		break;
	case TYPE_IN_BACK:
		g = easeInBack(d, b, c, f, e);
		break;
	case TYPE_OUT_BACK:
		g = easeInBack(d, b, c, f, e)
	}
	return g
}

function easeOutBounce(a, d, b, c) {
	return (a /= c) < 1 / 2.75 ? 7.5625 * b * a * a + d : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
}
function easeInBounce(a, d, b, c) {
	return b - easeOutBounce(c - a, 0, b, c) + d
}
function easeInOutBounce(a, d, b, c) {
	return a < c / 2 ? .5 * easeInBounce(2 * a, 0, b, c) + d : .5 * easeOutBounce(2 * a - c, 0, b, c) + .5 * b + d
}
function easeInCirc(a, d, b, c) {
	return -b * (Math.sqrt(1 - (a /= c) * a) - 1) + d
}

function easeOutCirc(a, d, b, c) {
	return b * Math.sqrt(1 - (a = a / c - 1) * a) + d
}
function easeInOutCirc(a, d, b, c) {
	return 1 > (a /= c / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + d : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
}
function easeInCubic(a, d, b, c, f) {
	return b * (a /= c) * a * a + d
}
function easeOutCubic(a, d, b, c, f) {
	return b * ((a = a / c - 1) * a * a + 1) + d
}
function easeInOutCubic(a, d, b, c, f) {
	return 1 > (a /= c / 2) ? b / 2 * a * a * a + d : b / 2 * ((a -= 2) * a * a + 2) + d
}

function easeInElastic(a, d, b, c, f, e, g) {
	if (0 == a) return d;
	if (1 == (a /= c)) return d + b;
	g || (g = .3 * c);
	!e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
	return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g)) + d
}
function easeOutElastic(a, d, b, c, f, e, g) {
	if (0 == a) return d;
	if (1 == (a /= c)) return d + b;
	g || (g = .3 * c);
	!e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
	return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - f) * Math.PI / g) + b + d
}

function easeInOutElastic(a, d, b, c, f, e, g) {
	if (0 == a) return d;
	if (1 == (a /= c)) return d + b;
	g || (g = .3 * c);
	!e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
	return 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) + d : e * Math.pow(2, -10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) * .5 + b + d
}
function easeInExpo(a, d, b, c) {
	return 0 == a ? d : b * Math.pow(2, 10 * (a / c - 1)) + d
}
function easeOutExpo(a, d, b, c) {
	return a == c ? d + b : b * (-Math.pow(2, -10 * a / c) + 1) + d
}

function easeInOutExpo(a, d, b, c) {
	return 0 == a ? d : a == c ? d + b : 1 > (a /= c / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + d : b / 2 * (-Math.pow(2, -10 * --a) + 2) + d
}
function easeLinear(a, d, b, c) {
	return b * a / c + d
}
function easeInQuad(a, d, b, c) {
	return b * (a /= c) * a + d
}
function easeOutQuad(a, d, b, c) {
	return -b * (a /= c) * (a - 2) + d
}
function easeInOutQuad(a, d, b, c) {
	return 1 > (a /= c / 2) ? b / 2 * a * a + d : -b / 2 * (--a * (a - 2) - 1) + d
}
function easeInQuart(a, d, b, c) {
	return b * (a /= c) * a * a * a + d
}
function easeOutQuart(a, d, b, c) {
	return -b * ((a = a / c - 1) * a * a * a - 1) + d
}

function easeInOutQuart(a, d, b, c) {
	return 1 > (a /= c / 2) ? b / 2 * a * a * a * a + d : -b / 2 * ((a -= 2) * a * a * a - 2) + d
}
function easeInQuint(a, d, b, c) {
	return b * (a /= c) * a * a * a * a + d
}
function easeOutQuint(a, d, b, c) {
	return b * ((a = a / c - 1) * a * a * a * a + 1) + d
}
function easeInOutQuint(a, d, b, c) {
	return 1 > (a /= c / 2) ? b / 2 * a * a * a * a * a + d : b / 2 * ((a -= 2) * a * a * a * a + 2) + d
}
function easeInSine(a, d, b, c) {
	return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}
function easeOutSine(a, d, b, c) {
	return b * Math.sin(a / c * (Math.PI / 2)) + d
}

function easeInOutSine(a, d, b, c) {
	return -b / 2 * (Math.cos(Math.PI * a / c) - 1) + d
}
function easeInBack(a, d, b, c) {
	return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
}
function easeOutBack(a, d, b, c) {
	return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d
}

function CCard(a, d, b,delay_time) {
	var c, f, e = -1,
		g, l, m, n, k, h, r, q, p, x;
	if (delay_time){
		this.delay_time = delay_time
	} else {
		this.delay_time = TIME_CARD_DEALING

	}
	
	this._init = function(a, b, c) {
		x = c;
		c = {
			images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
			frames: {
				width: CARD_WIDTH,
				height: CARD_HEIGHT,
				regX: CARD_WIDTH / 2,
				regY: CARD_HEIGHT / 2
			},
			animations: {
				card_1_1: [0],
				card_1_2: [1],
				card_1_3: [2],
				card_1_4: [3],
				card_1_5: [4],
				card_1_6: [5],
				card_1_7: [6],
				card_1_8: [7],
				card_1_9: [8],
				card_1_10: [9],
				card_1_J: [10],
				card_1_Q: [11],
				card_1_K: [12],
				card_2_1: [13],
				card_2_2: [14],
				card_2_3: [15],
				card_2_4: [16],
				card_2_5: [17],
				card_2_6: [18],
				card_2_7: [19],
				card_2_8: [20],
				card_2_9: [21],
				card_2_10: [22],
				card_2_J: [23],
				card_2_Q: [24],
				card_2_K: [25],
				card_3_1: [26],
				card_3_2: [27],
				card_3_3: [28],
				card_3_4: [29],
				card_3_5: [30],
				card_3_6: [31],
				card_3_7: [32],
				card_3_8: [33],
				card_3_9: [34],
				card_3_10: [35],
				card_3_J: [36],
				card_3_Q: [37],
				card_3_K: [38],
				card_4_1: [39],
				card_4_2: [40],
				card_4_3: [41],
				card_4_4: [42],
				card_4_5: [43],
				card_4_6: [44],
				card_4_7: [45],
				card_4_8: [46],
				card_4_9: [47],
				card_4_10: [48],
				card_4_J: [49],
				card_4_Q: [50],
				card_4_K: [51],
				back: [52]
			}
		};
		c = new createjs.SpriteSheet(c);
		p = createSprite(c, "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
		p.x = a;
		p.y = b;
		p.rotation = 120;
		p.stop();
		x.addChild(p);
		r = [];
		q = []
	};
	this.unload = function() {
		h = k = null;
		x.removeChild(p)
	};
	this.addEventListener = function(a, b, c) {
		r[a] = b;
		q[a] = c
	};
	this.setInfo = function(a, b, d, p, q, x) {

		f = !1;
		n = 0;
		g = d;
		l = p;
		k = a;
		h = b;
		m = x;
		c = q;
		e = STATE_CARD_DEALING
	};
	this.setDelay = function(delay) {

		this.delay_time= delay
	};	
	this.removeFromTable = function() {
		r[ON_CARD_TO_REMOVE] && r[ON_CARD_TO_REMOVE].call(q[ON_CARD_TO_REMOVE], this)
	};
	this.initRemoving = function(a) {
		k = new CVector2(p.x, p.y);
		h = a;
		n = 0;
		e = STATE_CARD_REMOVING
	};
	this.setValue = function() {
		p.gotoAndStop(g);
		var a = this;
		createjs.Tween.get(p).to({
			scaleX: 1
		}, 100).call(function() {
			a.cardShown()
		})
	};
	this.showCard = function() {
		var a = this;
//		//console.log("a",a)
		createjs.Tween.get(p).to({
			scaleX: .1
		}, 100).call(function() {
			a.setValue()
		})
	};
	this.hideCard = function() {
		var a = this;
		createjs.Tween.get(p).to({
			scaleX: .1
		}, 100).call(function() {
			a.setBack()
		})
	};
	this.setBack = function() {
		p.gotoAndStop("back");
		var a = this;
		createjs.Tween.get(p).to({
			scaleX: 1
		}, 100).call(function() {
			a.cardHidden()
		})
	};
	this.cardShown = function() {
		r[ON_CARD_SHOWN] && r[ON_CARD_SHOWN].call(q[ON_CARD_SHOWN])
	};
	this.cardHidden = function() {
		f = !0
	};
	this.getValue = function() {
		return l
	};
	this.getFotogram = function() {
		return g
	};
	this._updateDealing = function() {
		//sleep(TIME_CARD_DEALING)
		n += s_iTimeElaps;
	
		if (n > this.delay_time ){
			e = -1;
			n = 0;
			p.x = h.getX();
			p.y = h.getY();
			p.rotation = 360;
			r[ON_CARD_ANIMATION_ENDING] && r[ON_CARD_ANIMATION_ENDING].call(q[ON_CARD_ANIMATION_ENDING], this, c, m);
			this.showCard();
		} 
		else {
			this.visible = !0;
			var a = easeInOutCubic(n, 0, 1, TIME_CARD_DEALING),
				b = new CVector2,
				b = tweenVectors(k, h, a, b);
			p.x = b.getX();
			p.y = b.getY();
			p.rotation = 120 + 24E3 * a / 100

		}
	};
	this._updateRemoving = function() {
		n += s_iTimeElaps;
		if (n > TIME_CARD_REMOVE) n = 0, f = p.visible = !1, e = -1, r[ON_CARD_TO_REMOVE] && r[ON_CARD_TO_REMOVE].call(q[ON_CARD_TO_REMOVE], this);
		else {
			var a = easeInOutCubic(n, 0, 1, TIME_CARD_REMOVE),
				b = new CVector2,
				b = tweenVectors(k, h, a, b);
			p.x = b.getX();
			p.y = b.getY();
			p.rotation = 4500 * a / 100
		}
	};
	this.update = function() {
		switch (e) {
		case STATE_CARD_DEALING:
			this._updateDealing();
			break;
		case STATE_CARD_REMOVING:
			!0 === f && this._updateRemoving()
		}
	};
	s_oCard = this;
	this._init(a, d, b)
}
var s_oCard;

function CGameOver() {
	var a, d, b, c;
	this._init = function() {
		c = new createjs.Container;
		s_oStage.addChild(c);
		c.on("click", function() {});
		var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		c.addChild(f);
		a = new createjs.Text(TEXT_NO_MONEY, "32px " + FONT_GAME_1, "#fff");
		a.textAlign = "center";
		a.x = CANVAS_WIDTH / 2;
		a.y = 290;
		a.lineWidth = 300;
		a.shadow = new createjs.Shadow("#000000", 2, 2, 2);
		c.addChild(a);
		d = new CTextButton(CANVAS_WIDTH / 2 - 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_RECHARGE, FONT_GAME_1, "#fff", 14, c);
		d.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
		b = new CTextButton(CANVAS_WIDTH / 2 + 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_EXIT, FONT_GAME_1, "#fff", 14, c);
		b.addEventListener(ON_MOUSE_UP, this._onExit, this);
		this.hide()
	};
	this.unload = function() {
		d.unload();
		b.unload();
		c.off("click", function() {})
	};
	this.show = function() {
		c.visible = !0
	};
	this.hide = function() {
		c.visible = !1
	};
	this._onRecharge = function() {
		$(s_oMain).trigger("recharge")
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._init()
}

function CWinDisplay(a, d, b) {
	var c, f, e, g, l;
	this._init = function(a, b) {
		c = a;
		g = new createjs.Container;
		g.visible = !1;
		g.x = a;
		g.y = b;
		l.addChild(g);
		var d = s_oSpriteLibrary.getSprite("win_bg"),
			h = createBitmap(d);
		g.addChild(h);
		f = new createjs.Text("", "23px " + FONT_GAME_1, "#fff");
		f.x = d.width / 2;
		f.y = d.height / 2 - 20;
		f.textAlign = "center";
		f.textBaseline = "middle";
		g.addChild(f);
		e = new createjs.Text("", "29px " + FONT_GAME_1, "#fff");
		e.x = d.width / 2;
		e.y = d.height / 2 + 22;
		e.textAlign = "center";
		e.textBaseline = "middle";
		g.addChild(e)
	};
	this.show = function(a, b) {
		//console.log("show",a,b)
		var b1 =  b.toFixed(CURRENCY_TOFIXED+1)
		var TOFIXED =getFloatLength(b1)
		//console.log("show TOFIXED",TOFIXED)
		var result = b.toFixed(TOFIXED)
		f.text = a;
		0 < b ? (e.color = "#07a74f", e.text = TEXT_WIN + " " + result) : (e.color = "#ce0909", e.text = TEXT_NO_WIN);
		g.visible = !0;
		createjs.Tween.get(g).to({
			x: CANVAS_WIDTH / 2 + 100
		}, 400, createjs.Ease.cubicOut)
	};
	this.hide = function() {
		createjs.Tween.get(g).to({
			x: c
		}, 400, createjs.Ease.cubicOut).call(function() {
			g.visible = !1
		})
	};
	l = b;
	this._init(a, d)
}

function CHistory(a, d, b) {
	var c, f, e, g, l, m, n, k, h, r, q, p;
	this._init = function(a, b) {
		k = s_oSpriteLibrary.getSprite("history_cell");
		r = new createjs.Container;
		r.x = a;
		r.y = b;
		p.addChild(r);
		m = createBitmap(s_oSpriteLibrary.getSprite("history_bg"));
		m.alpha = 0;
		r.addChild(m);
		q = new createjs.Container;
		q.x = 5;
		q.y = 5;
		r.addChild(q);
		g = 7 * k.height;
		h = new createjs.Shape;
		h.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(q.x, q.y, k.width, g);
		r.addChild(h);
		q.mask = h;
		n = createBitmap(s_oSpriteLibrary.getSprite("history_highlight"));
		n.alpha = 0;
		n.x = 5;
		n.y = 5;
		r.addChild(n);
		l = []
	};
	this.addHistoryRow = function(a, b, d) {
		c = a;
		f = b;
		e = d;
		if (0 < l.length) for (a = 0; a < l.length; a++) l[a].moveDown(this);
		else createjs.Tween.get(m).to({
			alpha: 1
		}, 400, createjs.Ease.cubicOut), createjs.Tween.get(n).to({
			alpha: 1
		}, 400, createjs.Ease.cubicOut), a = new CHistoryRow(0, 0, c, f, e, k, q), l.push(a)
	};
	this._showNextRow = function(a) {
		a === l[0] && (0 < l.length && l[0].getY() >= g && (l[0].unload(), l.splice(0, 1)), a = new CHistoryRow(0, 0, c, f, e, k, q), l.push(a))
	};
	this.setPosition = function(a, b) {
		r.x = a;
		r.y = b
	};
	p = b;
	this._init(a, d)
}

function CHistoryRow(a, d, b, c, f, e, g) {
	var l, m, n, k;
	this._init = function(a, b, c, d, e) {
		l = e.height;
		m = new createjs.Container;
		m.alpha = 0;
		m.x = a;
		m.y = b;
		n.addChild(m);
		b = new createjs.SpriteSheet({
			images: [e],
			frames: {
				width: e.width / 2,
				height: e.height
			},
			animations: {
				state_lose: [0],
				state_win: [1]
			}
		});
		a = [];
		a[0] = createSprite(b, "state_lose", 0, 0, e.width / 2, e.height);
		m.addChild(a[0]);
		a[1] = createSprite(b, "state_lose", 0, 0, e.width / 2, e.height);
		a[1].x = e.width / 2;
		m.addChild(a[1]);
		0 < f && a[f - 1].gotoAndStop("state_win");
		c = new createjs.Text(c, "24px " + FONT_GAME_1, "#fff");
		c.x = a[0].x + e.width / 4;
		c.y = a[0].y + e.height / 2;
		c.textAlign = "center";
		c.textBaseline = "middle";
		m.addChild(c);
		d = new createjs.Text(d, "24px " + FONT_GAME_1, "#fff");
		d.x = a[1].x + e.width / 4;
		d.y = a[1].y + e.height / 2;
		d.textAlign = "center";
		d.textBaseline = "middle";
		m.addChild(d);
		createjs.Tween.get(m).to({
			alpha: 1
		}, 400, createjs.Ease.cubicOut)
	};
	this.unload = function() {
		n.removeChild(m)
	};
	this.moveDown = function(a) {
		var b = m.y + l;
		createjs.Tween.get(m).to({
			y: b
		}, 400, createjs.Ease.cubicOut).call(function() {
			a._showNextRow(k)
		})
	};
	this.getY = function() {
		return m.y
	};
	k = this;
	n = g;
	this._init(a, d, b, c, e)
}

function CMsgBox() {
	var a, d, b, c;
	this._init = function() {
		a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		b = new createjs.Text("", "34px " + FONT_GAME_1, "#000");
		b.x = CANVAS_WIDTH / 2 + 2;
		b.y = CANVAS_HEIGHT / 2 - 28;
		b.textAlign = "center";
		b.lineWidth = 400;
		b.textBaseline = "middle";
		d = new createjs.Text("", "34px " + FONT_GAME_1, "#ffffff");
		d.x = CANVAS_WIDTH / 2;
		d.y = CANVAS_HEIGHT / 2 - 30;
		d.textAlign = "center";
		d.lineWidth = 400;
		d.textBaseline = "middle";
		c = new createjs.Container;
		c.alpha = 0;
		c.visible = !1;
		c.addChild(a, b, d);
		s_oStage.addChild(c)
	};
	this.unload = function() {
		c.off("mousedown", this._onExit)
	};
	this._initListener = function() {
		c.on("mousedown", this._onExit)
	};
	this.show = function(a) {
		b.text = a;
		d.text = a;
		c.visible = !0;
		var e = this;
		createjs.Tween.get(c).to({
			alpha: 1
		}, 500).call(function() {
			e._initListener()
		});
		setTimeout(function() {
			e._onExit()
		}, 3E3)
	};
	this._onExit = function() {
		c.visible && (c.off("mousedown"), c.visible = !1)
	};
	this._init();
	return this
};



function numAdd(num1, num2) {
   ////console.log("numAdd",num1,num2)
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};


function getFloatLength(num1) {
   
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    
    return baseNum1;
};


function SetLang(l){

//	//console.log("SetLang",l)
	if (l==1){
		
		TEXT_BET = ["TIE ", "BANKER ", "PLAYER"];
		TEXT_WIN = "WIN";
		TEXT_SHOW_WIN = ["TIE - PAYS 8 TO 1", TEXT_BET[1], TEXT_BET[2]];
		TEXT_NO_WIN = "NO WIN";
		TEXT_PLAY = "PLAY";
		TEXT_CLEAR = "CLEAR";
		TEXT_REBET = "REBET";
		TEXT_DEAL = "DEAL";
		TEXT_MIN_BET = "MIN BET";
		TEXT_MAX_BET = "MAX BET";
		TEXT_NO = "NO";
		TEXT_YES = "YES";
		TEXT_RECHARGE = "RECHARGE";
		TEXT_EXIT = "EXIT";
		TEXT_MONEY = "MONEY";
		TEXT_CURRENCY = "$";
		VERIFY_CODE=""
		TEXT_VERIFY = "Verify Code:"
		TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET";
		TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!";
		TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS";
		TEXT_DISPLAY_TIE = "THIS HAND IS A TIE!";
		TEXT_DISPLAY_MSG_DEALING = "DEALING...";
		TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
		TEXT_HAND_WON = "HAND WON BY";
		TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!";
		TEXT_SHARE_IMAGE = "200x200.jpg";
		TEXT_SHARE_TITLE = "Congratulations!";
		TEXT_SHARE_MSG1 = "You collected <strong>";
		TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
		TEXT_SHARE_SHARE1 = "My score is ";
		TEXT_SHARE_SHARE2 = " points! Can you do better?";
	} else {
	 
	 TEXT_BET = ["和", "庄 ", "闲 "];
	 TEXT_WIN = "赢";
	 TEXT_SHOW_WIN = ["和 - 押1赔8",  TEXT_BET[1],  TEXT_BET[2]];
	 TEXT_NO_WIN = "输";
	 TEXT_PLAY = "玩";
	 TEXT_CLEAR = "清除";
	 TEXT_REBET = "重投";
	 TEXT_DEAL = "发牌";
	 TEXT_MIN_BET = "最低注额";
	 TEXT_MAX_BET = "最高注额";
	 TEXT_NO = "否";
	 TEXT_YES = "是";
	 TEXT_RECHARGE = "请充值";
	 TEXT_EXIT = "关闭";
	 TEXT_MONEY = "馀额";
	 TEXT_CURRENCY = "$";
	 VERIFY_CODE=""
	 TEXT_VERIFY = "验证码"
	 TEXT_DISPLAY_MSG_WAITING_BET = "等待投注";
	 TEXT_DISPLAY_MSG_PLAYER_LOSE = "这局玩家输了";
	 TEXT_DISPLAY_MSG_PLAYER_WIN = "这局玩家赢了";
	 TEXT_DISPLAY_TIE = "这局是和!";
	 TEXT_DISPLAY_MSG_DEALING = "发牌中..";
	 TEXT_NO_MONEY = "您的馀额不足!!!";
	 TEXT_HAND_WON = "赢了";
	  TEXT_ERROR_MIN_BET = "您的投注额低於最低注额!!";

	}
	

}


