var SERVER_URL ="";
var s_iOffsetX, s_iOffsetY;
(function(a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});

function trace(a) {
	console.log(a)
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
		var d = getSize("Width");
		_checkOrientation(d, a);
		var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
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

function _checkOrientation(a, d) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}
function inIframe() {
	try {
		return window.self !== window.top
	} catch (a) {
		return !0
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
		for (var b = d.slice(), e = b.shift(); a[e] == c[e] && b.length;) e = b.shift();
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
	this.init = function(g, q, r) {
		b = d = 0;
		c = g;
		f = q;
		e = r;
		a = {}
	};
	this.addSprite = function(b, c) {
		a.hasOwnProperty(b) || (a[b] = {
			szPath: c,
			oSprite: new Image
		}, d++)
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		f.call(e)
	};
	this._onSpriteLoaded = function() {
		c.call(e);
		++b === d && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
			this.oSpriteLibrary._onSpriteLoaded()
		}, a[b].oSprite.src = a[b].szPath
	};
	this.getNumSprites = function() {
		return d
	}
}
var CANVAS_WIDTH = 1700,
	CANVAS_HEIGHT = 768,
	EDGEBOARD_X = 338,
	EDGEBOARD_Y = 0,
	FPS_TIME = 1E3 / 24,
	DISABLE_SOUND_MOBILE = !1,
	FONT_GAME_1 = "Arial",
	FONT_GAME_2 = "Digital-7",
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	STATE_GAME_WAITING_FOR_BET = 0,
	STATE_GAME_DEALING = 1,
	STATE_GAME_HITTING = 2,
	STATE_GAME_SPLIT = 3,
	STATE_GAME_FINALIZE = 4,
	STATE_GAME_SHOW_WINNER = 5,
	STATE_CARD_DEALING = 0,
	STATE_CARD_SPLIT = 1,
	STATE_CARD_REMOVING = 2,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	SIT_DOWN = "SIT_DOWN",
	PASS_TURN = "PASS_TURN",
	PLAYER_LOSE = "PLAYER_LOSE",
	ASSIGN_FICHES = "ASSIGN_FICHES",
	FICHES_END_MOV = "FICHES_END_MOV",
	RESTORE_ACTION = "RESTORE_ACTION",
	END_HAND = "END_HAND",
	ON_CARD_SHOWN = "ON_CARD_SHOWN",
	ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
	SPLIT_CARD_END_ANIM = "SPLIT_CARD_END_ANIM",
	ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
	NUM_FICHES = 6,
	CARD_WIDTH = 44,
	CARD_HEIGHT = 63,
	MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, TIME_FICHES_MOV = 600,
	TIME_CARD_DEALING = 250,
	TIME_CARD_REMOVE = 1E3,
	TIME_SHOW_FINAL_CARDS = 4E3,
	TIME_END_HAND = 1500,
	BET_TIME = 1E4,
	AD_SHOW_COUNTER, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_PLAY = "PLAY";
TEXT_SIT_DOWN = "SIT DOWN";
TEXT_CLEAR = "CLEAR";
TEXT_REBET = "REBET";
TEXT_DEAL = "DEAL";
TEXT_HIT = "HIT";
TEXT_STAND = "STAND";
TEXT_DOUBLE = "DOUBLE";
TEXT_SPLIT = "SPLIT";
TEXT_MIN_BET = "MIN BET";
TEXT_MAX_BET = "MAX BET";
TEXT_NO = "NO";
TEXT_YES = "YES";
TEXT_RECHARGE = "RECHARGE";
TEXT_EXIT = "EXIT";
TEXT_CURRENCY = "$";
TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET";
TEXT_DISPLAY_MSG_SIT_DOWN = "PLEASE SIT DOWN TO START PLAYING";
TEXT_DISPLAY_MSG_YOUR_ACTION = "WAITING FOR PLAYER ACTION";
TEXT_DISPLAY_MSG_DEALER_TURN = "DEALER TURN";
TEXT_DISPLAY_MSG_PLAYER_LOSE = "HAND WON BY DEALER ";
TEXT_DISPLAY_MSG_PLAYER_WIN = "HAND WON BY PLAYER ";
TEXT_DISPLAY_MSG_PLAYER_STANDOFF = "STANDOFF";
TEXT_DISPLAY_MSG_DEALING = "DEALING...";
TEXT_SHOW_WIN_PLAYER = "YOU WIN ";
TEXT_SHOW_LOSE_PLAYER = "YOU LOSE ";
TEXT_SHOW_STANDOFF = "STANDOFF";
TEXT_INSURANCE = "Do you want Insurance?";
TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";
/* extra param */
	LANG =0
	InitLANG=0
	FICHE_KIND=0; //0=demo,0=btc，	1=ltc，2=狗币。
	PLAY_COIN ="demo";
	CURRENCY_TOFIXED =4;
	FICHE_CHOOSE=[[0.01, 0.1, 0.5, 1, 2.5, 10],[0.1, 1, 5, 10, 25, 100],[1000, 10000, 50000, 100000, 250000, 1000000]]
/**/
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
		d = new createjs.Text("0%", "30px OpenSans-BoldItalic", "#fff");
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
	var params =a
	if (a.coins){
			COINS=a.coins	

	} 
	if (a.lang){
		LANG =a.lang
		InitLANG = a.lang
		console.log("LANG,InitLANG",LANG,InitLANG)
	}
	var d, b = 0,
		c = 0,
		f = STATE_LOADING,
		e, g, q;


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


		s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
		s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
		s_oSpriteLibrary.addSprite("but_game_small_bg", "./sprites/but_game_small_bg.png");
		s_oSpriteLibrary.addSprite("but_game_very_small_bg", "./sprites/but_game_very_small_bg.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("bg_game_1", "./sprites/bg_game_1.jpg");
		s_oSpriteLibrary.addSprite("bg_game_2", "./sprites/bg_game_2.jpg");
		s_oSpriteLibrary.addSprite("bg_game_3", "./sprites/bg_game_3.jpg");
		s_oSpriteLibrary.addSprite("bg_game_4", "./sprites/bg_game_4.jpg");
		s_oSpriteLibrary.addSprite("seat", "./sprites/seat.png");
		s_oSpriteLibrary.addSprite("card_spritesheet", "./sprites/card_spritesheet.png");
		s_oSpriteLibrary.addSprite("arrow_hand", "./sprites/arrow_hand.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
		s_oSpriteLibrary.addSprite("bet_bg", "./sprites/bet_bg.png");
		s_oSpriteLibrary.addSprite("money_bg", "./sprites/money_bg.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		//for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
		for (var i = 0; i < FICHE_CHOOSE.length; i++) {	
			for (var a = 0; a < NUM_FICHES; a++) {
				//console.log("fiche_"+i+"_" + a, "./sprites/fiche/"+i+"/fiche_" + a + ".png")
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
		new CMenu(a);
		f = STATE_MENU
	};
	this.gotoGame = function() {
		q = new CGame(e);
		f = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		f = STATE_HELP
	};
	this.stopUpdate = function() {
		d = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		createjs.Sound.setMute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		d = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		s_bAudioActive && createjs.Sound.setMute(!1)
	};
	this._update = function(a) {
		if (d) {
			var b = (new Date).getTime();
			s_iTimeElaps = b - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = b;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			f === STATE_GAME && q.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	e = a;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	ENABLE_FULLSCREEN = a.fullscreen;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_bFullscreen = !1;

function CTextButton(a, d, b, c, f, e, g, q) {
	var r, h, n, l, p, t, m, y;
	this._init = function(a, b, c, d, f, e, g, q) {
		r = !1;
		h = [];
		n = [];
		y = q;
		p = createBitmap(c);
		q = Math.ceil(g / 20);
		t = new createjs.Text(d, "bold " + g + "px " + f, "#000000");
		var v = t.getBounds();
		t.textAlign = "center";
		t.textBaseline = "alphabetic";
		t.x = c.width / 2 + q;
		t.y = Math.floor(c.height / 2) + v.height / 3 + q;
		m = new createjs.Text(d, "bold " + g + "px " + f, e);
		m.textAlign = "center";
		m.textBaseline = "alphabetic";
		m.x = c.width / 2;
		m.y = Math.floor(c.height / 2) + v.height / 3;
		l = new createjs.Container;
		l.x = a;
		l.y = b;
		l.regX = c.width / 2;
		l.regY = c.height / 2;
		l.addChild(p, t, m);
		l.cursor = "pointer";
		y.addChild(l);
		this._initListener()
	};
	this.unload = function() {
		l.off("mousedown");
		l.off("pressup");
		y.removeChild(l)
	};
	this.setVisible = function(a) {
		l.visible = a
	};
	this.enable = function() {
		r = !1;
		m.color = "#fff"
	};
	this.disable = function() {
		r = !0;
		m.color = "#a39b9d"
	};
	this._initListener = function() {
		oParent = this;
		l.on("mousedown", this.buttonDown);
		l.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		h[a] = b;
		n[a] = c
	};
	this.buttonRelease = function() {
		r || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), l.scaleX = 1, l.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(n[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		r || (l.scaleX = .9, l.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, b) {
		l.x = a;
		l.y = b
	};
	this.changeText = function(a) {
		m.text = a;
		t.text = a
	};
	this.setX = function(a) {
		l.x = a
	};
	this.setY = function(a) {
		l.y = a
	};
	this.getButtonImage = function() {
		return l
	};
	this.getX = function() {
		return l.x
	};
	this.getY = function() {
		return l.y
	};
	this._init(a, d, b, c, f, e, g, q);
	return this
}

function CGfxButton(a, d, b) {
	var c, f, e, g, q, r = [],
		h;
	this._init = function(a, b, d) {
		c = !1;
		g = [];
		q = [];
		f = d.width;
		e = d.height;
		h = createBitmap(d);
		h.x = a;
		h.y = b;
		h.regX = d.width / 2;
		h.regY = d.height / 2;
		h.cursor = "pointer";
		s_oStage.addChild(h);
		this._initListener()
	};
	this.unload = function() {
		h.off("mousedown", this.buttonDown);
		h.off("pressup", this.buttonRelease);
		s_oStage.removeChild(h)
	};
	this.setVisible = function(a) {
		h.visible = a
	};
	this._initListener = function() {
		h.on("mousedown", this.buttonDown);
		h.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		g[a] = b;
		q[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		g[a] = b;
		q[a] = c;
		r = d
	};
	this.buttonRelease = function() {
		c || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), h.scaleX = 1, h.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(q[ON_MOUSE_UP], r))
	};
	this.buttonDown = function() {
		c || (h.scaleX = .9, h.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN], r))
	};
	this.setPosition = function(a, b) {
		h.x = a;
		h.y = b
	};
	this.setX = function(a) {
		h.x = a
	};
	this.setY = function(a) {
		h.y = a
	};
	this.enable = function() {
		c = !1;
		h.filters = [];
		h.cache(0, 0, f, e)
	};
	this.disable = function() {
		c = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		h.filters = [new createjs.ColorMatrixFilter(a)];
		h.cache(0, 0, f, e)
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
	this._init(a, d, b);
	return this
}

function CToggle(a, d, b, c, f) {
	var e, g, q, r, h = [],
		n;
	this._init = function(a, b, c, d, f) {
		q = [];
		r = [];
		var h = new createjs.SpriteSheet({
			images: [c],
			frames: {
				width: c.width / 2,
				height: c.height,
				regX: c.width / 2 / 2,
				regY: c.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		e = d;
		g = f;
		n = createSprite(h, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		n.x = a;
		n.y = b;
		n.cursor = "pointer";
		n.stop();
		s_oStage.addChild(n);
		this._initListener()
	};
	this.unload = function() {
		n.off("mousedown", this.buttonDown);
		n.off("pressup", this.buttonRelease);
		s_oStage.removeChild(n)
	};
	this._initListener = function() {
		n.on("mousedown", this.buttonDown);
		n.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		q[a] = b;
		r[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		q[a] = b;
		r[a] = c;
		h = d
	};
	this.setActive = function(a) {
		e = a;
		n.gotoAndStop("state_" + e)
	};
	this.buttonRelease = function() {
		n.scaleX = 1;
		n.scaleY = 1;
		playSound("press_button", 1, 0);
		g && (e = !e, n.gotoAndStop("state_" + e));
		q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(r[ON_MOUSE_UP], h)
	};
	this.buttonDown = function() {
		n.scaleX = .9;
		n.scaleY = .9;
		q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], h)
	};
	this.setPosition = function(a, b) {
		n.x = a;
		n.y = b
	};
	this.setVisible = function(a) {
		n.visible = a
	};
	this.getY = function() {
		return n.y
	};
	this._init(a, d, b, c, f)
}

function CMenu(params) {
	var a, d, b, c, f, e, g, q, r, h = null,
		n = null;
	this._init = function() {
		console.log(params)
		SetLang(params.lang);

		f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(f);
		var l = s_oSpriteLibrary.getSprite("but_menu_bg");
		e = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, l, TEXT_PLAY, FONT_GAME_1, "#ffffff", 40, s_oStage);
		e.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - l.width / 4 - 10, c = l.height / 2 + 10, g = new CToggle(b, c, l, s_bAudioActive), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		var l = window.document,
			p = l.documentElement;
		h = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
		n = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (h = !1);
		h && !1 === inIframe() && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), a = l.width / 4 + 10, d = l.height / 2 + 10, r = new CToggle(a, d, l, s_bFullscreen, !0), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		q = new createjs.Shape;
		q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(q);
		createjs.Tween.get(q).to({
			alpha: 0
		}, 400).call(function() {
			q.visible = !1
		});

		for (var i = 0; i < params.coins.length; i++) {

				var sprite = s_oSpriteLibrary.getSprite("coin_"+params.coins[i].coin);
				var j = i *200
				j = j -300
				var param=[]
				param.push(params.coins[i].coin)

				c = new CGfxButton(CANVAS_WIDTH / 2+j, CANVAS_HEIGHT - 164, sprite, s_oStage);
				c.addEventListenerWithParams(ON_MOUSE_UP, this._onChooseCoinRelease, this,param);
		
		}	


		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(f, e) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(b - f, e + c);
		h && !1 === inIframe() && r.setPosition(a + f, d + e)
	};
	this.unload = function() {
		e.unload();
		e = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g.unload(), g = null;
		h && !1 === inIframe() && r.unload();
		s_oStage.removeAllChildren();
		s_oMenu = null
	};
	this._onButPlayRelease = function() {
		this.unload();
		s_oMain.gotoGame();
		$(s_oMain).trigger("start_session")
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? (n.call(window.document), s_bFullscreen = !1) : (h.call(window.document.documentElement), s_bFullscreen = !0);
		sizeHandler()
	};
	this._onChooseCoinRelease = function(a) {
		console.log("_onChooseCoinRelease",a)
		console.log("_onChooseCoinRelease  params.coins.length", params.coins.length)
		
		PLAY_COIN = a[0]
			for (var i = 0; i < params.coins.length; i++) {
//			console.log(params.coins[i],PLAY_COIN)
			if (PLAY_COIN==params.coins[i].coin){
				
				CURRENCY_TOFIXED=params.coins[i].currency_tofixed
				TEXT_CURRENCY = params.coins[i].text_currency
				FICHE_KIND = params.coins[i].fiche_kind
				MIN_BET =params.coins[i].min_bet
				MAX_BET = params.coins[i].max_bet
				s_oGameSettings.changeFiche(FICHE_KIND);

			}


		//this.unload();
		s_oMain.gotoGame();
		$(s_oMain).trigger("start_session")	}



	}

	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	var d = !1,
		b, c, f = !1,
		e, g, q, r, h, n, l, p, t, m, y, v, F, x, z, A, E, C, B, G, u, I, D, H, J, L, K, O, w, k, M, N;
	this._init = function() {
		//console.log(a.min_bet)
		//console.log(a.max_bet)
		//console.log(a.max_bet)
		//console.log(a.max_bet)
		q = a.max_bet;//MAX_BET;
		r = a.min_bet;//MIN_BET;
		
		h = -1;
		F = g = 0;
		s_oTweenController = new CTweenController;
		O = createBitmap(s_oSpriteLibrary.getSprite("bg_game_" + (Math.floor(4 * Math.random()) + 1)));
		s_oStage.addChild(O);
		k = new CSeat;
		k.setCredit(TOTAL_MONEY);
		k.addEventListener(SIT_DOWN, this._onSitDown, this);
		k.addEventListener(RESTORE_ACTION, this._onSetPlayerActions);
		k.addEventListener(PASS_TURN, this._passTurnToDealer);
		k.addEventListener(END_HAND, this._onEndHand);
		k.addEventListener(PLAYER_LOSE, this._playerLose);
		K = new createjs.Container;
		s_oStage.addChild(K);
		w = new CInterface(TOTAL_MONEY);
		w.displayMsg(TEXT_DISPLAY_MSG_SIT_DOWN);
		this.reset(!0);
		I = new CVector2;
		I.set(1214, 228);
		D = new CVector2;
		D.set(788, 180);
		H = new CVector2;
		H.set(418, 820);
		J = new CVector2;
		J.set(CANVAS_WIDTH / 2, -100);
		L = new CVector2(408, 208);
		B = [k.getCardOffset(), D];
		w.disableBetFiches();
		M = new CGameOver;
		N = new CMsgBox;
		k.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : d = !0
	};
	this.unload = function() {
		d = !1;
		createjs.Sound.stop();
		for (var a = 0; a < x.length; a++) x[a].unload();
		for (var a = k.getPlayerCards(), b = 0; b < a.length; b++) a[b].unload();
		w.unload();
		M.unload();
		N.unload();
		s_oStage.removeAllChildren()
	};
	this.reset = function(a) {
		b = !0;
		c = !1;
		t = p = l = n = g = e = 0;
		k.reset();
		x = [];
		x.splice(0);
		A = [];
		A.splice(0);
		w.reset();
		w.enableBetFiches();
		a ? this.shuffleCard() : (m > C.length / 2 || y > z.length / 2) && this.shuffleCard()
	};
	this.shuffleCard = function() {
		/*

			*/
			if (PLAY_COIN!="demo") {

				var url = SERVER_URL+"/games/blackjack/shuffle"		
				var param = {};
				param.uid= "1"
				param.sid= "sdfzdsaf123"
					$.ajax({
					  type: 'GET',
					  url: url,
					  data: param,
					  async : false, 
					  success:  function(result){  
							//USER = result
				          
				            	console.log("getShuffledCardDeck from http",result)
							E = [];
							E = result.cards;
							console.log("shuffleCard E",PLAY_COIN,E)
							C = [];
							z = [];
							for (var a = 0; a < E.length; a++) 0 === a % 2 ? C.push(E[a]) : z.push(E[a]);
							y = m = 0;
							G = [];
							for (a = 0; a < E.length; a++) G[a] = 0
				           
				          }  
					});					

			} else {
				E = [];
				E = s_oGameSettings.getShuffledCardDeck();
				console.log("shuffleCard E",E)
				C = [];
				z = [];
				for (var a = 0; a < E.length; a++) 0 === a % 2 ? C.push(E[a]) : z.push(E[a]);
				y = m = 0;
				G = [];
				for (a = 0; a < E.length; a++) G[a] = 0				
			}
			


	};
	this.changeState = function(a) {
		console.log(a)
		h = a;
		switch (h) {
		case STATE_GAME_DEALING:
			/*
				if ((v < 2 * k.getCurBet() ? WIN_OCCURRENCE : 100 * Math.random()) < WIN_OCCURRENCE) {
					f = !0;
					do a = s_oGameSettings.getRandDealerPattern();
					while (!1 === this._checkIfDealerPatternCanBeUsed(a));
					u = [];
					for (var b = 0; b < a.length; b++) u[b] = a[b]
				} else f = !1;
			*/
				w.disableButtons();
				w.displayMsg(TEXT_DISPLAY_MSG_DEALING);
				this._dealing()
		
		}
	};
	this._checkIfDealerPatternCanBeUsed = function(a) {
		for (var b = 0; b < a.length; b++) if (1 < G[a[b]]) return !1;
		return !0
	};
	this.attachCardToDeal = function(a, b, c, d) {
		var e = new CCard(I.getX(), I.getY(), K),
			g;
		if (c) if (f) g = u.shift(), y++;
		else {
			do {
				g = z[y];
				y++;
				y > z.length / 2 && (this.shuffleCard(), y = 0);
				var h = s_oGameSettings.getCardValue(g);
				11 === h && 21 < l + h && (h = 1)
			} while (21 < l + h || l + h < k.getHandValue(0) && 21 > k.getHandValue(0))
		} else if (f) {
			do g = C[m], m++, m > C.length / 2 && (this.shuffleCard(), m = 0), h = s_oGameSettings.getCardValue(g), 11 === h && 21 < k.getHandValue(0) + h && (h = 1);
			while (21 < k.getHandValue(0) + h)
		} else {
			do g = C[m], m++, m > C.length / 2 && (this.shuffleCard(), m = 0), h = s_oGameSettings.getCardValue(g), 11 === h && 21 < k.getHandValue(0) + h && (h = 1);
			while (16 < k.getHandValue(0) + h && 22 > k.getHandValue(0) + h)
		}
		e.setInfo(a, b, g, s_oGameSettings.getCardValue(g), c, d);
		G[g] += 1;
		e.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
		x.push(e);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("card", 1, 0)
	};
	this.cardFromDealerArrived = function(a, b, d) {
		for (var f = 0; f < x.length; f++) if (x[f] === a) {
			x.splice(f, 1);
			break
		}!1 === b ? (k.addCardToHand(a), k.increaseHandValue(a.getValue()), k.refreshCardValue()) : (l += a.getValue(), 2 < p && w.refreshDealerCardValue(l), 11 === a.getValue() && t++, A.push(a));
		3 > d ? s_oGame._dealing() : (s_oGame._checkHand(), !1 === b && c && s_oGame._onStandPlayer())
	};
	this._onStandPlayer = function() {
		k.stand()
	};
	this._checkHand = function() {
		var a;
		if (b) k.checkHand();
		else if (trace("_iDealerValueCard: " + l), w.refreshDealerCardValue(l), 21 === l) for (0 < e && 2 === A.length && (k.increaseCredit(2 * e), v -= 2 * e, w.refreshCredit(k.getCredit())), a = 0; a < k.getNumHands(); a++) this._playerLose(a);
		else 21 < l ? 0 < t ? (t--, l -= 10, w.refreshDealerCardValue(l), 17 > l ? this.hitDealer() : this._checkWinner()) : this._checkWinner() : 17 > l ? this.hitDealer() : this._checkWinner()
	};
	this._playerWin = function(a) {
		var b = 1;
		21 === k.getHandValue(a) && 2 === k.getNumCardsForHand(a) && (b = BLACKJACK_PAYOUT);
		b = k.getBetForHand(a) + parseFloat((k.getBetForHand(a) * b).toFixed(2));
		k.increaseCredit(b);
		v -= b;
		k.showWinner(a, TEXT_SHOW_WIN_PLAYER, b);
		w.displayMsg(TEXT_DISPLAY_MSG_PLAYER_WIN);
		k.initMovement(a, H.getX(), H.getY());
		21 === l ? k.initInsuranceMov(H.getX(), H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
	};
	this._playerLose = function(a) {
		k.showWinner(a, TEXT_SHOW_LOSE_PLAYER, 0);
		w.displayMsg(TEXT_DISPLAY_MSG_PLAYER_LOSE);
		k.initMovement(a, J.getX(), J.getY());
		21 === l ? k.initInsuranceMov(H.getX(), H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
	};
	this.playerStandOff = function(a) {
		k.increaseCredit(k.getBetForHand(a));
		v -= k.getBetForHand(a);
		k.showWinner(a, TEXT_SHOW_STANDOFF, 0);
		w.displayMsg(TEXT_DISPLAY_MSG_PLAYER_STANDOFF);
		k.initMovement(a, H.getX(), H.getY());
		21 === l ? k.initInsuranceMov(H.getX(), H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
	};
	this._dealing = function() {
		console.log("E",E)
		if (n < 2 * B.length) {
			var a = new CCard(I.getX(), I.getY(), K),
				b = new CVector2(I.getX(), I.getY()),
				c;
			if (1 === n % B.length) {
				p++;
				c = new CVector2(D.getX() + (CARD_WIDTH + 2) * (1 < n ? 1 : 0), D.getY());
				var d;
				d = f ? u.shift() : z[y];
				a.setInfo(b, c, d, s_oGameSettings.getCardValue(d), !0, p);
				G[d] += 1;
				y++;
				2 === p && a.addEventListener(ON_CARD_SHOWN, this._onCardShown)
			} else{
			    a.setInfo(b, k.getAttachCardOffset(), C[m], s_oGameSettings.getCardValue(C[m]), !1, k.newCardDealed())
			    G[C[m]] += 1
			     m++;
			}
			x.push(a);
			n++;
			a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
			a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
			!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("card", 1, 0)
		} else this._checkAvailableActionForPlayer()
	};
	this.hitDealer = function() {
		var a = new CVector2(I.getX(), I.getY()),
			b = new CVector2(D.getX() + (CARD_WIDTH + 3) * p, D.getY());
		p++;
		this.attachCardToDeal(a, b, !0, p);
		this.changeState(STATE_GAME_HITTING);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("card", 1, 0)
	};
	this._checkWinner = function() {
		for (var a = 0; a < k.getNumHands(); a++) 21 < k.getHandValue(a) ? this._playerLose(a) : 21 < l ? this._playerWin(a) : 22 > k.getHandValue(a) && k.getHandValue(a) > l ? this._playerWin(a) : k.getHandValue(a) === l ? this.playerStandOff(a) : this._playerLose(a)
	};
	this._onEndHand = function() {
		for (var a = new CVector2(L.getX(), L.getY()), b = 0; b < A.length; b++) A[b].initRemoving(a), A[b].hideCard();
		for (var b = k.getPlayerCards(), c = 0; c < b.length; c++) b[c].initRemoving(a), b[c].hideCard();
		k.clearText();
		w.clearDealerText();
		g = 0;
		s_oGame.changeState(STATE_GAME_SHOW_WINNER);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("fiche_collect", 1, 0);
		F++;
		F === AD_SHOW_COUNTER && (F = 0, $(s_oMain).trigger("show_interlevel_ad"));
		$(s_oMain).trigger("save_score", [k.getCredit()])
	};
	this.ficheSelected = function(a, b) {
	//	console.log("ficheSelected",a,b)
		var c = k.getCurBet();
		c + a <= q && a <= k.getCredit() && (c = Number((c + a).toFixed(1)), k.decreaseCredit(a), v += a, k.changeBet(c), k.refreshFiches(a, b, 0, 0), k.bet(c, !1), w.enable(!0, !1, !1, !1, !1), w.refreshCredit(k.getCredit()))
	};
	this._checkAvailableActionForPlayer = function() {
		this.changeState(-1);
		if (21 === k.getHandValue(0)) this._passTurnToDealer();
		else {
			var a = !1;
			k.isSplitAvailable() && k.getCredit() >= 1.5 * k.getCurBet() && (a = !0);
			w.displayMsg(TEXT_DISPLAY_MSG_YOUR_ACTION);
			var b = !1;
			2 === k.getNumCardsForHand(0) && 8 < k.getHandValue(0) && 16 > k.getHandValue(0) && k.getCredit() >= k.getCurBet() && (b = !0);
			w.enable(!1, !0, !0, b, a);
			11 === A[0].getValue() && (e = Math.floor(k.getCurBet() / 2), w.showInsurancePanel())
		}
	};
	this._passTurnToDealer = function() {
		b = !1;
		w.disableButtons();
		A[1].showCard();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("card", 1, 0);
		w.displayMsg(TEXT_DISPLAY_MSG_DEALER_TURN);
		k.refreshCardValue()
	};
	this._gameOver = function() {
		M.show()
	};
	this.onFicheSelected = function(a, b) {
		this.ficheSelected(b, a)
	};
	this._onSetPlayerActions = function(a, b, c, d, f) {
		w.enable(a, b, c, d, f);
		k.refreshCardValue()
	};
	this._onSitDown = function() {
		var data = {};
       // data["requestedPosition"] = $(".joinButton").index(this) + 1;
        data["requestedPosition"] =0;
        data["clientID"] = glClientID;
        socket.emit('addPlayerRequest', data);


		this.changeState(STATE_GAME_WAITING_FOR_BET);
		w.enableBetFiches()
	};
	this.onDeal = function() {
		r > k.getCurBet() ? (N.show(TEXT_ERROR_MIN_BET), s_oInterface.enableBetFiches(), s_oInterface.enable(!0, !1, !1, !1, !1)) : this.changeState(STATE_GAME_DEALING)
	};
	this.onHit = function() {
		var a = new CVector2(I.getX(), I.getY()),
			b = new CVector2(k.getAttachCardOffset().getX(), k.getAttachCardOffset().getY());
		this.attachCardToDeal(a, b, !1, k.newCardDealed());
		this.changeState(STATE_GAME_HITTING)
	};
	this.onStand = function() {
		k.stand()
	};
	this.onDouble = function() {
		var a = k.getCurBet(),
			b;
		b = a + a;
		k.doubleAction(b);
		k.changeBet(b);
		k.decreaseCredit(a);
		v += a;
		v < 2 * b && (f = !1);
		k.bet(b);
		w.refreshCredit(k.getCredit());
		this.onHit();
		c = !0
	};
	this.onSplit = function() {
		v < 4 * k.getCurBet() && (f = !1);
		k.split();
		this.changeState(STATE_GAME_SPLIT)
	};
	this._onSplitCardEndAnim = function() {
		var a = k.getCurBet(),
			b = a,
			a = a + b;
		k.bet(a, !0);
		w.enable(!1, !0, !0, !1, !1);
		k.setSplitHand();
		k.refreshCardValue();
		k.changeBet(a - b);
		k.decreaseCredit(b);
		v += b;
		w.refreshCredit(k.getCredit())
	};
	this.clearBets = function() {
		var a = k.getStartingBet();
		0 < a && (k.clearBet(), k.increaseCredit(a), v -= a, w.refreshCredit(k.getCredit()))
	};
	this.rebet = function() {
		this.clearBets();
		k.rebet() ? (w.enable(!0, !1, !1, !1, !1), w.refreshCredit(k.getCredit()), g = BET_TIME) : w.disableRebet()
	};
	this.onBuyInsurance = function() {
		var a = k.getCurBet(),
			a = a + e;
		k.insurance(a, -e, e);
		w.refreshCredit(k.getCredit())
	};
	this._onCardShown = function() {
		s_oGame._checkHand()
	};
	this._onRemoveCard = function(a) {
		a.unload()
	};
	this.onExit = function() {
		this.unload();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("share_event", k.getCredit());
		s_oMain.gotoMenu()
	};
	this.getState = function() {
		return h
	};
	this._updateWaitingBet = function() {
		g += s_iTimeElaps;
		g > BET_TIME ? (g = 0, k.getCurBet() < r || (w.disableBetFiches(), w.enable(!0, !1, !1, !1, !1), this.changeState(STATE_GAME_DEALING))) : w.displayMsg(TEXT_MIN_BET + ":" + r + "\n" + TEXT_MAX_BET + ":" + q, TEXT_DISPLAY_MSG_WAITING_BET + " " + Math.floor((BET_TIME - g) / 1E3))
	};
	this._updateDealing = function() {
		for (var a = 0; a < x.length; a++) x[a].update()
	};
	this._updateHitting = function() {
		for (var a = 0; a < x.length; a++) x[a].update()
	};
	this._updateSplit = function() {
		k.updateSplit()
	};
	this._updateShowWinner = function() {
		k.updateFichesController(s_iTimeElaps);
		for (var a = k.getPlayerCards(), b = 0; b < a.length; b++) a[b].update();
		for (a = 0; a < A.length; a++) A[a].update();
		g += s_iTimeElaps;
		g > TIME_END_HAND && (g = 0, this.reset(!1), w.reset(), k.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET), w.refreshCredit(k.getCredit()))
	};
	this.update = function() {
		if (!1 !== d) switch (h) {
		case STATE_GAME_WAITING_FOR_BET:
			this._updateWaitingBet();
			break;
		case STATE_GAME_DEALING:
			this._updateDealing();
			break;
		case STATE_GAME_HITTING:
			this._updateHitting();
			break;
		case STATE_GAME_SPLIT:
			this._updateSplit();
			break;
		case STATE_GAME_SHOW_WINNER:
			this._updateShowWinner()
		}
	};
	s_oGame = this;
	TOTAL_MONEY = a.money;
	MIN_BET = a.min_bet;
	MAX_BET = a.max_bet;
	BET_TIME = a.bet_time;
	BLACKJACK_PAYOUT = a.blackjack_payout;
	WIN_OCCURRENCE = a.win_occurrence;
	v = a.game_cash;
	AD_SHOW_COUNTER = a.ad_show_counter;
	this._init()
}
var s_oGame, s_oTweenController;

function CInterface(a) {
	var d, b, c, f, e, g, q, r, h, n, l, p, t, m, y, v, F, x, z, A, E, C, B = null,
		G = null;
	this._init = function(a) {
		var u = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - u.width / 2 - 2;
		f = u.height / 2 + 2;
		r = new CGfxButton(c, f, u, !0);
		r.addEventListener(ON_MOUSE_UP, this._onExit, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (e = r.getX() - u.width, g = u.height / 2 + 2, v = new CToggle(e, g, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), d = e - u.width - 2, b = g) : (d = r.getX() - u.width, b = u.height / 2 + 2);
		var u = window.document,
			D = u.documentElement;
		B = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
		G = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (B = !1);
		B && !1 === inIframe() && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), C = new CToggle(d, b, u, s_bFullscreen, !0), C.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		u = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
		u.x = 280;
		u.y = 6;
		s_oStage.addChild(u);
		u = s_oSpriteLibrary.getSprite("bet_bg");
		D = createBitmap(u);
		D.x = 340;
		D.y = CANVAS_HEIGHT - u.height + 4;
		s_oStage.addChild(D);
		u = s_oSpriteLibrary.getSprite("but_game_small_bg");
		h = new CTextButton(444, CANVAS_HEIGHT - 30, u, TEXT_CLEAR, FONT_GAME_1, "#ffffff", 14, s_oStage);
		h.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
		n = new CTextButton(632, CANVAS_HEIGHT - 30, u, TEXT_REBET, FONT_GAME_1, "#ffffff", 14, s_oStage);
		n.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
		z = new createjs.Text("", "bold 24px " + FONT_GAME_2, "#ffde00");
		z.x = 412;
		z.y = 20;
		z.lineWidth = 150;
		z.textAlign = "left";
		z.lineHeight = 20;
		s_oStage.addChild(z);
		A = new createjs.Text("", "bold 18px " + FONT_GAME_2, "#ffde00");
		A.x = 412;
		A.y = 70;
		z.lineWidth = 140;
		A.textAlign = "left";
		A.lineHeight = 20;
		s_oStage.addChild(A);
		x = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#fff");
		x.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		x.x = 758;
		x.y = 180;
		x.textAlign = "right";
		s_oStage.addChild(x);
		u = createBitmap(s_oSpriteLibrary.getSprite("money_bg"));
		u.x = 1127;
		u.y = CANVAS_HEIGHT - 100;
		s_oStage.addChild(u);
		F = new createjs.Text(TEXT_CURRENCY + a.toFixed(2), "bold 29px " + FONT_GAME_2, "#ffde00");
		F.x = 1240;
		F.y = CANVAS_HEIGHT - 95;
		F.textAlign = "center";
		s_oStage.addChild(F);
		u = s_oSpriteLibrary.getSprite("but_game_bg");
		l = new CTextButton(908, CANVAS_HEIGHT - 30, u, TEXT_DEAL, FONT_GAME_1, "#ffffff", 20, s_oStage);
		l.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
		p = new CTextButton(1008, CANVAS_HEIGHT - 30, u, TEXT_HIT, FONT_GAME_1, "#ffffff", 20, s_oStage);
		p.addEventListener(ON_MOUSE_UP, this._onButHitRelease, this);
		t = new CTextButton(1108, CANVAS_HEIGHT - 30, u, TEXT_STAND, FONT_GAME_1, "#ffffff", 20, s_oStage);
		t.addEventListener(ON_MOUSE_UP, this._onButStandRelease, this);
		m = new CTextButton(1208, CANVAS_HEIGHT - 30, u, TEXT_DOUBLE, FONT_GAME_1, "#ffffff", 20, s_oStage);
		m.addEventListener(ON_MOUSE_UP, this._onButDoubleRelease, this);
		y = new CTextButton(1308, CANVAS_HEIGHT - 30, u, TEXT_SPLIT, FONT_GAME_1, "#ffffff", 20, s_oStage);
		y.addEventListener(ON_MOUSE_UP, this._onButSplitRelease, this);
		a = [{
			x: 387,
			y: 666
		}, {
			x: 447,
			y: 666
		}, {
			x: 507,
			y: 666
		}, {
			x: 567,
			y: 666
		}, {
			x: 627,
			y: 666
		}, {
			x: 687,
			y: 666
		}];
		q = [];
		
		for (D = 0; D < NUM_FICHES; D++) {
			var H = s_oGameSettings.getFichesValues()
			//console.log("fiche_"+FICHE_KIND+"_" + D)
			var u = s_oSpriteLibrary.getSprite("fiche_"+FICHE_KIND+"_" + D)
			q[D] = new CGfxButton(a[D].x, a[D].y, u, s_oStage);
			q[D].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [H[D], D])
		}
		
		/*
	    for (var D = 0; D < NUM_FICHES; D++) {
	    	var H = s_oGameSettings.getFichesValues()
	    	var u = s_oSpriteLibrary.getSprite("fiche_"+FICHE_KIND+"_" + D)
		 q[D]  = new CGfxButton(a[D].x, a[D].y, u, s_oStage);
		 q[D].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this,  [H[D], D])
		}
		*/
		 //var coin;
		 //coin = s_oSpriteLibrary.getSprite("coin_" + PLAY_COIN)
		//n[H] = new CGfxButton(G[0].x-300, G[0].y, coin, s_oStage)



		E = new CInsurancePanel;
		FICHE_WIDTH = u.width;
		this.disableButtons();
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		r.unload();
		r = null;
		!1 === DISABLE_SOUND_MOBILE && (v.unload(), v = null);
		B && !1 === inIframe() && C.unload();
		s_oStage.removeChild(F);
		s_oInterface = null
	};
	this.refreshButtonPos = function(a, h) {
		r.setPosition(c - a, h + f);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(e - a, h + g);
		B && !1 === inIframe() && C.setPosition(d - a, b + h)
	};
	this.reset = function() {
		this.disableButtons()
	};
	this.enableBetFiches = function() {
		for (var a = 0; a < NUM_FICHES; a++) q[a].enable();
		h.enable();
		n.enable()
	};
	this.disableBetFiches = function() {
		for (var a = 0; a < NUM_FICHES; a++) q[a].disable();
		h.disable();
		n.disable()
	};
	this.disableRebet = function() {
		n.disable()
	};
	this.disableButtons = function() {
		l.disable();
		p.disable();
		t.disable();
		m.disable();
		y.disable()
	};
	this.enable = function(a, b, c, d, f) {
		a ? l.enable() : l.disable();
		b ? p.enable() : p.disable();
		c ? t.enable() : t.disable();
		d ? m.enable() : m.disable();
		f ? y.enable() : y.disable()
	};
	this.refreshCredit = function(a) {
		F.text = TEXT_CURRENCY + a.toFixed(2)
	};
	this.refreshDealerCardValue = function(a) {
		x.text = "" + a
	};
	this.displayMsg = function(a, b) {
		z.text = a;
		A.text = b
	};
	this.showInsurancePanel = function() {
		E.show(TEXT_INSURANCE)
	};
	this.clearDealerText = function() {
		x.text = ""
	};
	this._onFicheClicked = function(a) {
		console.log(a)
		s_oGame.onFicheSelected(a[1], a[0])
	};
	/*
	this._onFicheClicked = function(a) {
		this.hideAllWins();
		A.x = n[a[1]].getX();
		A.y = n[a[1]].getY();
		l = a[0];
		m = a[1]

	};
	*/

	this._onButClearRelease = function() {
		s_oGame.clearBets()
	};
	this._onButRebetRelease = function() {
		s_oGame.rebet()
	};
	this._onButDealRelease = function() {
		this.disableBetFiches();
		this.disableButtons();
		s_oGame.onDeal()
	};
	this._onButHitRelease = function() {
		this.disableButtons();
		s_oGame.onHit()
	};
	this._onButStandRelease = function() {
		this.disableButtons();
		s_oGame.onStand()
	};
	this._onButDoubleRelease = function() {
		this.disableButtons();
		s_oGame.onDouble()
	};
	this._onButSplitRelease = function() {
		this.disableButtons();
		s_oGame.onSplit()
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? (G.call(window.document), s_bFullscreen = !1) : (B.call(window.document.documentElement), s_bFullscreen = !0);
		sizeHandler()
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
	var a, d, b, c, f, e, g, q, r, h, n, l, p, t, m, y, v, F, x, z, A, E, C, B, G;
	this._init = function() {
		h = new createjs.Container;
		h.x = 734;
		h.y = 360;
		var a = createBitmap(s_oSpriteLibrary.getSprite("seat"));
		a.x = 66;
		a.y = 175;
		h.addChild(a);
		a = s_oSpriteLibrary.getSprite("but_game_small_bg");
		m = new CTextButton(115, 221, a, TEXT_SIT_DOWN, FONT_GAME_1, "#ffffff", 20, h);
		m.addEventListener(ON_MOUSE_UP, this._onSitDown, this);
		p = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffde00");
		p.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		p.x = 84;
		p.y = 208;
		p.textAlign = "right";
		h.addChild(p);
		t = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffde00");
		t.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		t.x = 175;
		t.y = 208;
		t.textAlign = "left";
		h.addChild(t);
		n = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffffff");
		n.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		n.x = 56;
		n.y = 105;
		n.textAlign = "right";
		h.addChild(n);
		l = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffffff");
		l.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		l.x = 138;
		l.y = 105;
		l.textAlign = "left";
		h.addChild(l);
		x = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffffff");
		x.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		x.x = 0;
		x.y = 240;
		x.textAlign = "center";
		h.addChild(x);
		z = new createjs.Text("", "bold 20px " + FONT_GAME_1, "#ffffff");
		z.shadow = new createjs.Shadow("#000000", 2, 2, 1);
		z.x = 150;
		z.y = 240;
		z.textAlign = "left";
		h.addChild(z);
		A = createBitmap(s_oSpriteLibrary.getSprite("arrow_hand"));
		A.visible = !1;
		h.addChild(A);
		s_oStage.addChild(h);
		y = new CVector2;
		y.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
		E = new CFichesController(y);
		f = 0;
		e = [];
		g = [];
		this.reset();
		v = new CVector2;
		v.set(64, 163);
		r = new CVector2(v.getX(), v.getY());
		F = new CVector2;
		F.set(172, 163);
		B = [];
		G = []
	};
	this.unload = function() {
		s_oStage.removeChild(h)
	};
	this.addEventListener = function(a, b, c) {
		B[a] = b;
		G[a] = c
	};
	this.reset = function() {
		c = b = 0;
		d = a = !1;
		for (var f = 0; f < e.length; f++) e[f].getFichesController().reset();
		e = [];
		f = new CHandController(v, E);
		e.push(f);
		for (f = 0; f < g.length; f++) g[f].unload();
		g = [];
		q = [];
		E.addEventListener(FICHES_END_MOV, this._onFichesEndMove);
		C = null;
		this.clearText()
	};
	this.clearText = function() {
		p.text = "";
		t.text = "";
		n.text = "";
		l.text = ""
	};
	this.clearBet = function() {
		E.reset();
		q = [];
		p.text = "";
		e[b].changeBet(0)
	};
	this.addCardToHand = function(a) {
		e[b].addCard(a);
		g.push(a);
		a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard)
	};
	this.increaseHandValue = function(a) {
		e[b].increaseHandValue(a);
		this.refreshCardValue()
	};
	this.refreshCardValue = function() {
		n.text = "" + this.getHandValue(0);
		0 < this.getHandValue(1) && (l.text = "" + this.getHandValue(1))
	};
	this.setCredit = function(a) {
		f = a
	};
	this.increaseCredit = function(a) {
		f += a
	};
	this.changeBet = function(a) {
		e[b].changeBet(a)
	};
	this.checkHand = function() {
		var c = e[b].getValue();
		if (21 === c) this.checkPlayerLastHand(PASS_TURN);
		else if (21 < c) 0 < e[b].getAces() ? (e[b].removeAce(), 21 === e[b].getValue() ? this.checkPlayerLastHand(PASS_TURN) : a ? this.checkPlayerLastHand(PASS_TURN) : B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], !1, !0, !0, !1, !1)) : 1 < e.length || d ? this.checkPlayerLastHand(PASS_TURN) : this.checkPlayerLastHand(PLAYER_LOSE);
		else if (a) this.checkPlayerLastHand(PASS_TURN);
		else {
			var f = !1;
			2 === e[b].getNumCards() && 8 < c && 16 > c ? f = !0 : 0 < this.getAces() && (21 < c ? (c -= 10, this.removeAce()) : c -= 10, 8 < c && 16 > c && (f = !0));
			trace("bActivateDouble: " + f);
			B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], !1, !0, !0, f, !1)
		}
	};
	this.checkPlayerLastHand = function(a) {
		b--; - 1 < b ? (B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], !1, !0, !0, !1, !1), A.x = v.getX()) : (B[a] && B[a].call(G[a], 0), this.removeArrow())
	};
	this.bet = function(a, b) {
		b ? (p.text = TEXT_CURRENCY + a / 2, t.text = TEXT_CURRENCY + a / 2) : p.text = TEXT_CURRENCY + a
	};
	this.setSplitHand = function() {
		for (var a = [], c = 0; c < q.length; c++) a.push(q[c]);
		C = new CFichesController(y);
		C.refreshFiches(a, 0, 0, !1);
		C.addEventListener(C.FICHES_END_MOV, this._onFichesEndMove);
		a = new CHandController(F, C);
		e.push(a);
		e[1].addCard(e[0].getCard(1));
		e[0].removeCard(1);
		e[1].setHandValue(e[0].getValue());
		b = e.length - 1
	};
	this.decreaseCredit = function(a) {
		f -= a
	};
	this.stand = function() {
		this.checkPlayerLastHand(PASS_TURN)
	};
	this.refreshFiches = function(a, b, c, d) {
		q.push({
			value: a,
			index: b
		});
		E.refreshFiches(q, c, d)
	};
	this.initMovement = function(a, b, c) {
		this.getFichesController(a).initMovement(b, c, !1)
	};
	this.initInsuranceMov = function(a, b) {
		E.initInsuranceMov(a, b)
	};
	this.showWinner = function(a, b, c) {
		0 < c ? (0 === a ? x.text = b + ": " + c : z.text = b + ": " + c, !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("win", 1, 0)) : (0 === a ? x.text = b : z.text = b, !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("lose", 1, 0));
		var d = this;
		0 === a ? createjs.Tween.get(x).to({
			alpha: 1
		}, TIME_SHOW_FINAL_CARDS).call(function() {
			d.endWinAnim()
		}) : createjs.Tween.get(z).to({
			alpha: 1
		}, TIME_SHOW_FINAL_CARDS).call(function() {
			d.endWinAnim()
		})
	};
	this.endWinAnim = function() {
		x && z && (x.text = "", z.text = "", B[END_HAND] && B[END_HAND].call(G[END_HAND]))
	};
	this.newCardDealed = function() {
		c++;
		return c
	};
	this.removeAce = function() {
		e[b].removeAce()
	};
	this.removeArrow = function() {
		A.visible = !1
	};
	this.doubleAction = function(a) {
		e[b].changeBet(a);
		a = [];
		for (var c = 0; c < q.length; c++) a.push(q[c]);
		1 < e.length ? 1 === b ? C.refreshFiches(a, 0, 40) : E.refreshFiches(a, 0, 40) : E.refreshFiches(a, 0, 40)
	};
	this.split = function() {
		g[0].initSplit(new CVector2(h.x + v.getX(), h.y + v.getY()));
		g[1].initSplit(new CVector2(h.x + F.getX(), h.y + F.getY()));
		g[1].addEventListener(SPLIT_CARD_END_ANIM, this._onSplitCardEndAnim)
	};
	this.insurance = function(a, b, c) {
		this.changeBet(a);
		this.increaseCredit(b);
		E.createFichesPile(c, !0);
		d = !0
	};
	this.rebet = function() {
		var a = E.getPrevBet();
		trace("prev Value: " + a);
		if (a > f || 0 === a) return !1;
		this.decreaseCredit(a);
		this.changeBet(a);
		E.createFichesPile(a, !1);
		this.bet(a, !1);
		return !0
	};
	this._onSitDown = function() {
		m.setVisible(!1);
		B[SIT_DOWN] && B[SIT_DOWN].call(G[SIT_DOWN])
	};
	this._onFichesEndMove = function() {
		B[ASSIGN_FICHES] && B[ASSIGN_FICHES].call(G[ASSIGN_FICHES])
	};
	this._onRemoveCard = function(a) {
		for (var b = 0; b < g.length; b++) if (g[b] === a) {
			g.splice(b, 1);
			break
		}
	};
	this._onSplitCardEndAnim = function() {
		s_oGame._onSplitCardEndAnim();
		A.x = F.getX();
		A.y = F.getY() + 70;
		A.visible = !0
	};
	this.updateFichesController = function(a) {
		C && C.update(a);
		E.update(a)
	};
	this.updateSplit = function() {
		for (var a = 0; a < g.length; a++) g[a].update(s_iTimeElaps)
	};
	this.isSplitAvailable = function() {
		return g[0] && g[1] ? g[0].getValue() === g[1].getValue() ? !0 : !1 : !1
	};
	this.getAttachCardOffset = function() {
		if (0 === b) r.set(h.x + v.getX() + CARD_WIDTH / 2 * e[b].getNumCards(), h.y + v.getY() - CARD_HEIGHT / 2 * e[b].getNumCards());
		else {
			var a = h.x + F.getX() + CARD_WIDTH / 2 * e[b].getNumCards(),
				c = h.y + F.getY() - CARD_HEIGHT / 2 * e[b].getNumCards();
			r.set(a, c)
		}
		return r
	};
	this.getCurBet = function() {
		return e[b].getCurBet()
	};
	this.getCredit = function() {
//		console.log("getCredit",f)
		return f
	};
	this.getHandValue = function(a) {
		return a > e.length - 1 ? 0 : e[a].getValue()
	};
	this.getNumHands = function() {
		return e.length
	};
	this.getNumCardsForHand = function(a) {
		return e[a].getNumCards()
	};
	this.getBetForHand = function(a) {
		return e[a].getCurBet()
	};
	this.getAces = function() {
		return e[b].getAces()
	};
	this.getFichesController = function(a) {
		return e[a].getFichesController()
	};
	this.getCardOffset = function() {
		return v
	};
	this.getPlayerCards = function() {
		return g
	};
	this.getStartingBet = function() {
		return E.getValue()
	};
	this._init()
}

function CFichesController(a) {
	var d, b, c, f, e, g, q, r, h, n, l, p, t, m, y;
	this._init = function(a) {
		p = new createjs.Container;
		p.x = 834;
		p.y = 566;
		s_oStage.addChild(p);
		t = new createjs.Container;
		t.x = 400;
		t.y = 230;
		s_oStage.addChild(t);
		q = new CVector2;
		q.set(p.x, p.y);
		n = new CVector2;
		n.setV(a);
		e = g = f = 0;
		b = d = !1;
		m = [];
		y = []
	};
	this.addEventListener = function(a, b, c) {
		m[a] = b;
		y[a] = c
	};
	this.reset = function() {
		c = d = !1;
		e = 0;
		p.removeAllChildren();
		t.removeAllChildren();
		p.x = q.getX();
		p.y = q.getY();
		t.x = n.getX();
		t.y = n.getY()
	};
	this.refreshFiches = function(a, b, c, f) {
		a = a.sortOn("value", "index");
		var g = c;
		f && (d = !0);
		for (var h = e = 0, l = 0; l < a.length; l++) {
			console.log("fiche_"+FICHE_KIND+"_" + a[l].index)
			var v = createBitmap(s_oSpriteLibrary.getSprite("fiche_"+FICHE_KIND+"_" + a[l].index));
			v.scaleX = .7;
			v.scaleY = .7;
			f ? t.addChild(v) : p.addChild(v);
			v.x = b;
			v.y = g;
			g -= 5;
			h++;
			9 < h && (h = 0, b += FICHE_WIDTH, g = c);
			e += a[l].value
		}!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("chip", 1, 0)
	};
	this.createFichesPile = function(a, b) {
		var c = s_oGameSettings.getFichesValues(),
			d = [];
		do {
			for (var f = c[c.length - 1], e = c.length - 1; f > a;) e--, f = c[e];
			for (var e = Math.floor(a / f), g = 0; g < e; g++) d.push({
				value: f,
				index: s_oGameSettings.getIndexForFiches(f)
			});
			a = f = a % f
		} while (0 < f);
		this.refreshFiches(d, 0, 0, b)
	};
	this.rebet = function() {
		this.createFichesPile(g, !1)
	};
	this.initMovement = function(a, c, d) {
		g = e;
		b = d;
		r = new CVector2(p.x, p.y);
		h = new CVector2(a, c)
	};
	this.initInsuranceMov = function(a, b) {
		l = new CVector2(a, b)
	};
	this.getValue = function() {
		return e
	};
	this.getPrevBet = function() {
		return g
	};
	this._updateInsuranceFiches = function() {
		if (d) {
			var a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV),
				a = tweenVectors(n, l, a, new CVector2);
			t.x = a.getX();
			t.y = a.getY()
		}
	};
	this.update = function(a) {
		if (!c) if (f += a, f > TIME_FICHES_MOV) f = 0, c = !0, m[FICHES_END_MOV] && m[FICHES_END_MOV].call(y[FICHES_END_MOV], b, e);
		else {
			a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
			var d = new CVector2,
				d = tweenVectors(r, h, a, d);
			p.x = d.getX();
			p.y = d.getY();
			this._updateInsuranceFiches()
		}
	};
	this._init(a)
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
		for (var d = 0; 2 > d; d++) for (var e = 0; 52 > e; e++) {
			a.push(e);
			var g = (e + 1) % 13;
			if (10 < g || 0 === g) g = 10;
			1 === g && (g = 11);
			b.push(g)
		}
		c = [.1, 1, 5, 10, 25, 100]
		c= FICHE_CHOOSE[FICHE_KIND]
		console.log("FICHE_CHOOSE FICHE_KIND",c)

	};
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
		var b = [],
			d, f = c.length - 1,
			r = c[f];
		do {
			d = a % r;
			d = CMath.roundDecimal(d, 1);
			a = Math.floor(a / r);
			for (var h = 0; h < a; h++) b.push(r);
			f--;
			r = c[f];
			a = d
		} while (0 < d && -1 < f);
		return b
	};
	this.changeFiche = function(a){
			c = FICHE_CHOOSE[a]
			
	}	
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
		for (d = []; 0 < b.length;) d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
		return d
	};
	this.getCardValue = function(a) {
		return b[a]
	};
	this.getRandDealerPattern = function() {
		var a, b;
		do {
			b = [];
			for (var c = a = 0; 2 > c; c++) {
				do
				var d = Math.floor(52 * Math.random());
				while (11 === this.getCardValue(d));
				a += this.getCardValue(d);
				b.push(d)
			}
		} while (12 > a || 16 < a);
		a = 21 - a;
		do c = Math.floor(52 * Math.random());
		while (this.getCardValue(c) <= a || 11 === this.getCardValue(c));
		b.push(c);
		return b
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

function CHandController(a, d) {
	var b, c, f, e, g, q;
	this._init = function(a, d) {
		f = c = b = 0;
		e = [];
		g = a;
		q = d
	};
	this.addCard = function(a) {
		e.push(a);
		11 === a.getValue() && c++
	};
	this.removeCard = function(a) {
		var d = e[a];
		b -= d.getValue();
		11 === d.getValue() && c--;
		e.splice(a, 1)
	};
	this.changeBet = function(a) {
		f = a
	};
	this.removeAce = function() {
		b -= 10;
		c--
	};
	this.setHandValue = function(a) {
		b = a
	};
	this.increaseHandValue = function(a) {
		b += a
	};
	this.getValue = function() {
		return b
	};
	this.getCurBet = function() {
		return f
	};
	this.getDoubleBet = function() {
		return f
	};
	this.getAces = function() {
		return c
	};
	this.getCard = function(a) {
		return e[a]
	};
	this.getNumCards = function() {
		return e.length
	};
	this.getAttachOffset = function() {
		return g
	};
	this.getFichesController = function() {
		return q
	};
	this._init(a, d)
}

function CCard(a, d, b) {
	var c, f, e = -1,
		g, q, r, h, n, l, p, t, m, y;
	this._init = function(a, b, c) {
		y = c;
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
		m = createSprite(c, "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
		m.x = a;
		m.y = b;
		m.stop();
		y.addChild(m);
		p = [];
		t = []
	};
	this.unload = function() {
		l = n = null;
		y.removeChild(m)
	};
	this.addEventListener = function(a, b, c) {
		p[a] = b;
		t[a] = c
	};
	this.setInfo = function(a, b, d, m, p, t) {
		f = !1;
		h = 0;
		g = d;
		q = m;
		n = a;
		l = b;
		r = t;
		c = p;
		e = STATE_CARD_DEALING
	};
	this.removeFromTable = function() {
		p[ON_CARD_TO_REMOVE] && p[ON_CARD_TO_REMOVE].call(t[ON_CARD_TO_REMOVE], this)
	};
	this.initSplit = function(a) {
		n = new CVector2(m.x, m.y);
		l = a;
		h = 0;
		e = STATE_CARD_SPLIT
	};
	this.initRemoving = function(a) {
		n = new CVector2(m.x, m.y);
		l = a;
		h = 0;
		e = STATE_CARD_REMOVING
	};
	this.setValue = function() {
		m.gotoAndStop(g);
		var a = this;
		createjs.Tween.get(m).to({
			scaleX: 1
		}, 100).call(function() {
			a.cardShown()
		})
	};
	this.showCard = function() {
		var a = this;
		createjs.Tween.get(m).to({
			scaleX: .1
		}, 100).call(function() {
			a.setValue()
		})
	};
	this.hideCard = function() {
		var a = this;
		createjs.Tween.get(m).to({
			scaleX: .1
		}, 100).call(function() {
			a.setBack()
		})
	};
	this.setBack = function() {
		m.gotoAndStop("back");
		var a = this;
		createjs.Tween.get(m).to({
			scaleX: 1
		}, 100).call(function() {
			a.cardHidden()
		})
	};
	this.cardShown = function() {
		p[ON_CARD_SHOWN] && p[ON_CARD_SHOWN].call(t[ON_CARD_SHOWN])
	};
	this.cardHidden = function() {
		f = !0
	};
	this.getValue = function() {
		return q
	};
	this.getFotogram = function() {
		return g
	};
	this._updateDealing = function() {
		h += s_iTimeElaps;
		if (h > TIME_CARD_DEALING) e = -1, h = 0, m.x = l.getX(), m.y = l.getY(), m.rotation = 360, p[ON_CARD_ANIMATION_ENDING] && p[ON_CARD_ANIMATION_ENDING].call(t[ON_CARD_ANIMATION_ENDING], this, c, r), !1 === (c && 2 === r) && this.showCard();
		else {
			this.visible = !0;
			var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING),
				b = new CVector2,
				b = tweenVectors(n, l, a, b);
			m.x = b.getX();
			m.y = b.getY();
			!1 === c && (m.rotation = 36E3 * a / 100)
		}
	};
	this._updateSplit = function() {
		h += s_iTimeElaps;
		if (h > TIME_CARD_DEALING) h = 0, p[SPLIT_CARD_END_ANIM] && p[SPLIT_CARD_END_ANIM].call(t[SPLIT_CARD_END_ANIM]), e = -1;
		else {
			var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING),
				b = new CVector2,
				b = tweenVectors(n, l, a, b);
			m.x = b.getX();
			m.y = b.getY()
		}
	};
	this._updateRemoving = function() {
		h += s_iTimeElaps;
		if (h > TIME_CARD_REMOVE) h = 0, f = m.visible = !1, e = -1, p[ON_CARD_TO_REMOVE] && p[ON_CARD_TO_REMOVE].call(t[ON_CARD_TO_REMOVE], this);
		else {
			var a = easeInOutCubic(h, 0, 1, TIME_CARD_REMOVE),
				b = new CVector2,
				b = tweenVectors(n, l, a, b);
			m.x = b.getX();
			m.y = b.getY();
			m.rotation = 4500 * a / 100
		}
	};
	this.update = function() {
		switch (e) {
		case STATE_CARD_DEALING:
			this._updateDealing();
			break;
		case STATE_CARD_SPLIT:
			this._updateSplit();
			break;
		case STATE_CARD_REMOVING:
			!0 === f && this._updateRemoving()
		}
	};
	s_oCard = this;
	this._init(a, d, b)
}
var s_oCard;

function CInsurancePanel() {
	var a, d, b, c;
	this._init = function() {
		c = new createjs.Container;
		s_oStage.addChild(c);
		c.visible = !1;
		var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		c.addChild(f);
		b = new createjs.Text("", "bold 50px " + FONT_GAME_1, "#fff");
		b.x = CANVAS_WIDTH / 2;
		b.y = 300;
		b.lineWidth = 300;
		b.textAlign = "center";
		c.addChild(b);
		f = s_oSpriteLibrary.getSprite("but_game_small_bg");
		a = new CTextButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT - 300, f, TEXT_NO, FONT_GAME_1, "#ffffff", 20, c);
		a.addEventListener(ON_MOUSE_UP, this._onButNoRelease, this);
		d = new CTextButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT - 300, f, TEXT_YES, FONT_GAME_1, "#ffffff", 20, c);
		d.addEventListener(ON_MOUSE_UP, this._onButYesRelease, this)
	};
	this.unload = function() {
		s_oStage.removeChild(c)
	};
	this.show = function(a) {
		b.text = a;
		c.visible = !0
	};
	this._onButNoRelease = function() {
		c.visible = !1
	};
	this._onButYesRelease = function() {
		c.visible = !1;
		s_oGame.onBuyInsurance()
	};
	this._init()
}

function CGameOver() {
	var a, d, b, c;
	this._init = function() {
		c = new createjs.Container;
		s_oStage.addChild(c);
		c.on("click", function() {});
		var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		c.addChild(f);
		a = new createjs.Text(TEXT_NO_MONEY, "bold 32px " + FONT_GAME_1, "#fff");
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


function SetLang(l){

	console.log("SetLang",l)
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

