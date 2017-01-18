(function(a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});

function trace(a) {
	console.log(a)
}
function isIOS() {
	for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;) if (navigator.platform === a.pop()) return !0;
	return !1
}

function getSize(a) {
	var d = a.toLowerCase(),
		k = window.document,
		h = k.documentElement;
	if (void 0 === window["inner" + a]) a = h["client" + a];
	else if (window["inner" + a] != h["client" + a]) {
		var l = k.createElement("body");
		l.id = "vpw-test-b";
		l.style.cssText = "overflow:scroll";
		var g = k.createElement("div");
		g.id = "vpw-test-d";
		g.style.cssText = "position:absolute;top:-1000px";
		g.innerHTML = "<style>@media(" + d + ":" + h["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
		l.appendChild(g);
		h.insertBefore(l, k.head);
		a = 7 == g["offset" + a] ? h["client" + a] : window["inner" + a];
		h.removeChild(l)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
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
			k = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
			h = CANVAS_WIDTH * k,
			k = CANVAS_HEIGHT * k,
			l;
		k < a ? (l = a - k, k += l, h += CANVAS_WIDTH / CANVAS_HEIGHT * l) : h < d && (l = d - h, h += l, k += CANVAS_HEIGHT / CANVAS_WIDTH * l);
		l = a / 2 - k / 2;
		var g = d / 2 - h / 2,
			b = CANVAS_WIDTH / h;
		if (g * b < -EDGEBOARD_X || l * b < -EDGEBOARD_Y) k = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), h = CANVAS_WIDTH * k, k *= CANVAS_HEIGHT, l = (a - k) / 2, g = (d - h) / 2, b = CANVAS_WIDTH / h;
		s_iOffsetX = -1 * g * b;
		s_iOffsetY = -1 * l * b;
		0 <= l && (s_iOffsetY = 0);
		0 <= g && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		$("#canvas").css("width", h + "px");
		$("#canvas").css("height", k + "px");
		0 > l ? $("#canvas").css("top", l + "px") : $("#canvas").css("top", "0px");
		$("#canvas").css("left", g + "px")
	}
}

function createBitmap(a, d, k) {
	var h = new createjs.Bitmap(a),
		l = new createjs.Shape;
	d && k ? l.graphics.beginFill("#fff").drawRect(0, 0, d, k) : l.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	h.hitArea = l;
	return h
}
function createSprite(a, d, k, h, l, g) {
	a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
	d = new createjs.Shape;
	d.graphics.beginFill("#000000").drawRect(-k, -h, l, g);
	a.hitArea = d;
	return a
}

function randomFloatBetween(a, d, k) {
	"undefined" === typeof k && (k = 2);
	return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(k))
}
function shuffle(a) {
	for (var d = a.length, k, h; 0 !== d;) h = Math.floor(Math.random() * d), --d, k = a[d], a[d] = a[h], a[h] = k;
	return a
}
function formatTime(a) {
	a /= 1E3;
	var d = Math.floor(a / 60);
	a = parseFloat(a - 60 * d).toFixed(1);
	var k = "",
		k = 10 > d ? k + ("0" + d + ":") : k + (d + ":");
	return 10 > a ? k + ("0" + a) : k + a
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

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var d = window.location.search.substring(1).split("&"), k = 0; k < d.length; k++) {
		var h = d[k].split("=");
		if (h[0] == a) return h[1]
	}
}

function CSpriteLibrary() {
	var a, d, k, h, l, g;
	this.init = function(b, e, f) {
		k = d = 0;
		h = b;
		l = e;
		g = f;
		a = {}
	};
	this.addSprite = function(b, e) {
		a.hasOwnProperty(b) || (a[b] = {
			szPath: e,
			oSprite: new Image
		}, d++)
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		l.call(g)
	};
	this._onSpriteLoaded = function() {
		h.call(g);
		++k === d && this._onSpritesLoaded()
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
var CANVAS_WIDTH = 1500,
	CANVAS_HEIGHT = 640,
	EDGEBOARD_X = 300,
	EDGEBOARD_Y = 0,
	FONT_GAME = "walibi0615bold",
	FPS_TIME = 1E3 / 24,
	DISABLE_SOUND_MOBILE = !0,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	GAME_STATE_IDLE = 0,
	GAME_STATE_SPINNING = 1,
	GAME_STATE_SHOW_ALL_WIN = 2,
	GAME_STATE_SHOW_WIN = 3,
	REEL_STATE_START = 0,
	REEL_STATE_MOVING = 1,
	REEL_STATE_STOP = 2,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	REEL_OFFSET_X = 380,
	REEL_OFFSET_Y = 123,
	NUM_REELS = 5,
	NUM_ROWS = 3,
	NUM_SYMBOLS = 10,
	WILD_SYMBOL = 10,
	BONUS_SYMBOL = 9,
	NUM_PAYLINES = 5,
	SYMBOL_SIZE = 140,
	SPACE_BETWEEN_SYMBOLS = 10,
	MAX_FRAMES_REEL_EASE = 16,
	MIN_REEL_LOOPS, REEL_DELAY, REEL_START_Y = REEL_OFFSET_Y - 3 * SYMBOL_SIZE,
	REEL_ARRIVAL_Y = REEL_OFFSET_Y + 3 * SYMBOL_SIZE,
	TIME_SHOW_WIN, TIME_SHOW_ALL_WINS, MIN_BET, MAX_BET, TOTAL_MONEY, MAX_NUM_HOLD, CHICKEN_WIDTH = 166,
	CHICKEN_HEIGHT = 187,
	NUM_PRIZES = 3,
	NUM_SYMBOLS_FOR_BONUS, PERC_WIN_EGG_1, PERC_WIN_EGG_2, PERC_WIN_EGG_3, SOUNDTRACK_VOLUME = .5,
	WIN_OCCURRENCE, SLOT_CASH, MIN_WIN, BONUS_OCCURRENCE, BONUS_PRIZE = [
		[5, 50, 200],
		[50, 200, 500],
		[100, 500, 1E3]
	];

function CSlotSettings() {
	this._init = function() {
		this._initSymbolSpriteSheets();
		this._initPaylines();
		this._initSymbolWin();
		this._initSymbolAnims();
		this._initSymbolsOccurence();
		this._initBonus()
	};
	this._initSymbolSpriteSheets = function() {
		s_aSymbolData = [];
		for (var a = 1; a < NUM_SYMBOLS + 1; a++) {
			var d = {
				images: [s_oSpriteLibrary.getSprite("symbol_" + a)],
				frames: {
					width: SYMBOL_SIZE,
					height: SYMBOL_SIZE,
					regX: 0,
					regY: 0
				},
				animations: {
					"static": [0, 1],
					moving: [1, 2]
				}
			};
			s_aSymbolData[a] = new createjs.SpriteSheet(d)
		}
	};
	this._initPaylines = function() {
		s_aPaylineCombo = [
			[{
				row: 1,
				col: 0
			}, {
				row: 1,
				col: 1
			}, {
				row: 1,
				col: 2
			}, {
				row: 1,
				col: 3
			}, {
				row: 1,
				col: 4
			}],
			[{
				row: 0,
				col: 0
			}, {
				row: 0,
				col: 1
			}, {
				row: 0,
				col: 2
			}, {
				row: 0,
				col: 3
			}, {
				row: 0,
				col: 4
			}],
			[{
				row: 2,
				col: 0
			}, {
				row: 2,
				col: 1
			}, {
				row: 2,
				col: 2
			}, {
				row: 2,
				col: 3
			}, {
				row: 2,
				col: 4
			}],
			[{
				row: 0,
				col: 0
			}, {
				row: 1,
				col: 1
			}, {
				row: 2,
				col: 2
			}, {
				row: 1,
				col: 3
			}, {
				row: 0,
				col: 4
			}],
			[{
				row: 2,
				col: 0
			}, {
				row: 1,
				col: 1
			}, {
				row: 0,
				col: 2
			}, {
				row: 1,
				col: 3
			}, {
				row: 2,
				col: 4
			}]
		]
	};
	this._initSymbolAnims = function() {
		s_aSymbolAnims = [];
		var a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_1_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[0] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_2_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[1] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_3_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[2] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_4_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[3] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_5_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[4] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_6_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[5] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_7_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[6] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_8_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[7] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_9_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[8] = new createjs.SpriteSheet(a);
		a = {
			framerate: 20,
			images: [s_oSpriteLibrary.getSprite("symbol_10_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 14]
			}
		};
		s_aSymbolAnims[9] = new createjs.SpriteSheet(a)
	};
	this._initSymbolWin = function() {
		s_aSymbolWin = [
			[0, 0, 1500, 2500, 5E3],
			[0, 0, 1E3, 1500, 2E3],
			[0, 0, 500, 1E3, 1500],
			[0, 100, 250, 500, 1E3],
			[0, 100, 250, 500, 1E3],
			[0, 50, 150, 250, 500],
			[0, 20, 100, 200, 350],
			[0, 10, 50, 100, 150],
			[0, 10, 50, 100, 150]
		]
	};
	this._initSymbolsOccurence = function() {
		s_aRandSymbols = [];
		var a;
		for (a = 0; 1 > a; a++) s_aRandSymbols.push(1);
		for (a = 0; 2 > a; a++) s_aRandSymbols.push(2);
		for (a = 0; 3 > a; a++) s_aRandSymbols.push(3);
		for (a = 0; 4 > a; a++) s_aRandSymbols.push(4);
		for (a = 0; 4 > a; a++) s_aRandSymbols.push(5);
		for (a = 0; 6 > a; a++) s_aRandSymbols.push(6);
		for (a = 0; 7 > a; a++) s_aRandSymbols.push(7);
		for (a = 0; 8 > a; a++) s_aRandSymbols.push(8);
		for (a = 0; 2 > a; a++) s_aRandSymbols.push(9);
		for (a = 0; 1 > a; a++) s_aRandSymbols.push(10)
	};
	this._initBonus = function() {
		s_aEggOccurence = [];
		var a;
		for (a = 0; a < PERC_WIN_EGG_1; a++) s_aEggOccurence.push(0);
		for (a = 0; a < PERC_WIN_EGG_2; a++) s_aEggOccurence.push(1);
		for (a = 0; a < PERC_WIN_EGG_3; a++) s_aEggOccurence.push(2)
	};
	this._init()
}
var s_aSymbolData, s_aPaylineCombo, s_aSymbolWin, s_aSymbolAnims, s_aRandSymbols, s_aEggOccurence;
TEXT_MONEY = "MONEY";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MAX_BET = "MAX BET";
TEXT_INFO = "INFO";
TEXT_LINES = "LINES";
TEXT_SPIN = "SPIN";
TEXT_WIN = "WIN";
TEXT_HOLD = "HOLD";
TEXT_HELP_WILD = "JOLLY SYMBOL\nCAN REPLACE\nANY OTHER\nSYMBOL TO\nMAKE UP A\nCOMBO";
TEXT_HELP_BONUS = "3 OR MORE\nMR CHICKEN\nLET YOU PLAY\nTHE BONUS\nGAME!";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_MSG_SHARE1 = "You collected <strong>";
TEXT_MSG_SHARE2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_MSG_SHARING1 = "My score is ";
TEXT_MSG_SHARING2 = " points! Can you do better?";

function CPreloader() {
	var a, d, k, h, l, g, b;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
		s_oSpriteLibrary.addSprite("preloader_bar", "./sprites/preloader_bar.png");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		b = new createjs.Container;
		s_oStage.addChild(b)
	};
	this.unload = function() {
		b.removeAllChildren()
	};
	this.hide = function() {
		var a = this;
		setTimeout(function() {
			createjs.Tween.get(g).to({
				alpha: 1
			}, 500).call(function() {
				a.unload();
				s_oMain.gotoMenu()
			})
		}, 1E3)
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var e = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
		b.addChild(e);
		e = s_oSpriteLibrary.getSprite("preloader_bar");
		k = createBitmap(e);
		k.x = 510;
		k.y = CANVAS_HEIGHT - 171;
		b.addChild(k);
		h = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
		h.x = 511;
		h.y = CANVAS_HEIGHT - 170;
		b.addChild(h);
		a = e.width;
		l = new createjs.Shape;
		l.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(511, CANVAS_HEIGHT - 170, 1, 30);
		b.addChild(l);
		h.mask = l;
		d = new createjs.Text("", "24px " + FONT_GAME, "#fff");
		d.x = CANVAS_WIDTH / 2;
		d.y = CANVAS_HEIGHT - 148;
		d.shadow = new createjs.Shadow("#000", 2, 2, 2);
		d.textBaseline = "alphabetic";
		d.textAlign = "center";
		b.addChild(d);
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		g.alpha = 0;
		b.addChild(g)
	};
	this.refreshLoader = function(b) {
		d.text = b + "%";
		l.graphics.clear();
		b = Math.floor(b * a / 100);
		l.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(511, CANVAS_HEIGHT - 170, b, 30)
	};
	this._init()
}

function CMain(a) {
	var d, k = 0,
		h = 0,
		l = STATE_LOADING,
		g, b, e;
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
		b = new CPreloader
	};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		d = !0
	};
	this.soundLoaded = function() {
		k++;
		k === h && (b.unload(), this.gotoMenu())
	};
	this._initSounds = function() {
		createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/press_but.ogg", "press_but"), createjs.Sound.registerSound("./sounds/win.ogg", "win"), createjs.Sound.registerSound("./sounds/reels.ogg", "reels"), createjs.Sound.registerSound("./sounds/reel_stop.ogg", "reel_stop", 6), createjs.Sound.registerSound("./sounds/start_reel.ogg", "start_reel", 6), createjs.Sound.registerSound("./sounds/choose_chicken.ogg", "choose_chicken"), createjs.Sound.registerSound("./sounds/press_hold.ogg", "press_hold"), createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack"), createjs.Sound.registerSound("./sounds/soundtrack_bonus.ogg", "soundtrack_bonus"), createjs.Sound.registerSound("./sounds/reveal_egg.ogg", "reveal_egg")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/press_but.mp3", "press_but"), createjs.Sound.registerSound("./sounds/win.mp3", "win"), createjs.Sound.registerSound("./sounds/reels.mp3", "reels"), createjs.Sound.registerSound("./sounds/reel_stop.mp3", "reel_stop", 6), createjs.Sound.registerSound("./sounds/start_reel.mp3", "start_reel", 6), createjs.Sound.registerSound("./sounds/choose_chicken.mp3", "choose_chicken"), createjs.Sound.registerSound("./sounds/press_hold.mp3", "press_hold"), createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack"), createjs.Sound.registerSound("./sounds/soundtrack_bonus.mp3", "soundtrack_bonus"), createjs.Sound.registerSound("./sounds/reveal_egg.mp3", "reveal_egg")), h += 10)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("paytable", "./sprites/paytable.jpg");
		s_oSpriteLibrary.addSprite("but_play_bg", "./sprites/but_play_bg.png");
		s_oSpriteLibrary.addSprite("mask_slot", "./sprites/mask_slot.png");
		s_oSpriteLibrary.addSprite("spin_but", "./sprites/but_spin_bg.png");
		s_oSpriteLibrary.addSprite("coin_but", "./sprites/but_coin_bg.png");
		s_oSpriteLibrary.addSprite("info_but", "./sprites/but_info_bg.png");
		s_oSpriteLibrary.addSprite("bet_but", "./sprites/bet_but.png");
		s_oSpriteLibrary.addSprite("win_frame_anim", "./sprites/win_frame_anim.png");
		s_oSpriteLibrary.addSprite("but_lines_bg", "./sprites/but_lines_bg.png");
		s_oSpriteLibrary.addSprite("but_maxbet_bg", "./sprites/but_maxbet_bg.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("hit_area_col", "./sprites/hit_area_col.png");
		s_oSpriteLibrary.addSprite("hold_col", "./sprites/hold_col.png");
		s_oSpriteLibrary.addSprite("bonus_bg", "./sprites/bonus_bg.jpg");
		s_oSpriteLibrary.addSprite("chicken", "./sprites/chicken.png");
		s_oSpriteLibrary.addSprite("hit_area_chicken", "./sprites/hit_area_chicken.png");
		s_oSpriteLibrary.addSprite("egg", "./sprites/egg.png");
		for (var a = 1; a < NUM_SYMBOLS + 1; a++) s_oSpriteLibrary.addSprite("symbol_" + a, "./sprites/symbol_" + a + ".png"), s_oSpriteLibrary.addSprite("symbol_" + a + "_anim", "./sprites/symbol_" + a + "_anim.png");
		for (a = 1; a < NUM_PAYLINES + 1; a++) s_oSpriteLibrary.addSprite("payline_" + a, "./sprites/payline_" + a + ".png");
		h += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		k++;
		b.refreshLoader(Math.floor(k / h * 100));
		k === h && (b.unload(), this.gotoMenu())
	};
	this._onAllImagesLoaded = function() {};
	this.onAllPreloaderImagesLoaded = function() {
		this._loadImages()
	};
	this.gotoMenu = function() {
		new CMenu;
		l = STATE_MENU
	};
	this.gotoGame = function() {
		e = new CGame(g);
		l = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		l = STATE_HELP
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
		if (!1 !== d) {
			var b = (new Date).getTime();
			s_iTimeElaps = b - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = b;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			l === STATE_GAME && e.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	g = a;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null;

function CTextButton(a, d, k, h, l, g, b) {
	var e, f, c, p, w, m, q, r;
	this._init = function(a, b, g, d, h, k, l) {
		e = !1;
		p = [];
		w = [];
		r = createBitmap(g);
		f = g.width;
		c = g.height;
		q = new createjs.Text(d, "bold " + l + "px " + h, k);
		q.textAlign = "center";
		q.shadow = new createjs.Shadow("#000", 2, 2, 2);
		q.textBaseline = "middle";
		q.lineHeight = 24;
		q.x = g.width / 2;
		q.y = g.height / 2;
		m = new createjs.Container;
		m.x = a;
		m.y = b;
		m.regX = g.width / 2;
		m.regY = g.height / 2;
		m.cursor = "pointer";
		m.addChild(r, q);
		s_oStage.addChild(m);
		this._initListener()
	};
	this.unload = function() {
		m.off("mousedown");
		m.off("pressup");
		s_oStage.removeChild(m)
	};
	this.setVisible = function(a) {
		m.visible = a
	};
	this.enable = function() {
		e = !1;
		r.filters = [];
		r.cache(0, 0, f, c)
	};
	this.disable = function() {
		e = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		r.filters = [new createjs.ColorMatrixFilter(a)];
		r.cache(0, 0, f, c)
	};
	this._initListener = function() {
		oParent = this;
		m.on("mousedown", this.buttonDown);
		m.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		p[a] = b;
		w[a] = c
	};
	this.buttonRelease = function() {
		e || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"), m.scaleX = 1, m.scaleY = 1, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(w[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		e || (m.scaleX = .9, m.scaleY = .9, p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(w[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, b) {
		m.x = a;
		m.y = b
	};
	this.changeText = function(a) {
		q.text = a
	};
	this.setX = function(a) {
		m.x = a
	};
	this.setY = function(a) {
		m.y = a
	};
	this.getButtonImage = function() {
		return m
	};
	this.getX = function() {
		return m.x
	};
	this.getY = function() {
		return m.y
	};
	this._init(a, d, k, h, l, g, b);
	return this
}

function CGfxButton(a, d, k, h) {
	var l, g, b, e, f, c, p;
	this._init = function(a, c, d, h) {
		l = !1;
		e = [];
		f = [];
		p = createBitmap(d);
		p.x = a;
		p.y = c;
		g = d.width;
		b = d.height;
		p.regX = d.width / 2;
		p.regY = d.height / 2;
		p.cursor = "pointer";
		!1 !== h && s_oStage.addChild(p);
		this._initListener()
	};
	this.unload = function() {
		p.off("mousedown", this.buttonDown);
		p.off("pressup", this.buttonRelease);
		s_oStage.removeChild(p)
	};
	this.setVisible = function(a) {
		p.visible = a
	};
	this.enable = function() {
		l = !1;
		p.filters = [];
		p.cache(0, 0, g, b)
	};
	this.disable = function() {
		l = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		p.filters = [new createjs.ColorMatrixFilter(a)];
		p.cache(0, 0, g, b)
	};
	this._initListener = function() {
		p.on("mousedown", this.buttonDown);
		p.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		e[a] = b;
		f[a] = c
	};
	this.addEventListenerWithParams = function(a, b, g, d) {
		e[a] = b;
		f[a] = g;
		c = d
	};
	this.buttonRelease = function() {
		l || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"), p.scaleX = 1, p.scaleY = 1, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP], c))
	};
	this.buttonDown = function() {
		l || (p.scaleX = .9, p.scaleY = .9, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], c))
	};
	this.setPosition = function(a, b) {
		p.x = a;
		p.y = b
	};
	this.setX = function(a) {
		p.x = a
	};
	this.setY = function(a) {
		p.y = a
	};
	this.getButtonImage = function() {
		return p
	};
	this.getX = function() {
		return p.x
	};
	this.getY = function() {
		return p.y
	};
	this.getSprite = function() {
		return p
	};
	this._init(a, d, k, h);
	return this
}

function CToggle(a, d, k) {
	var h, l, g;
	this._init = function(a, e, f) {
		h = [];
		l = [];
		var c = new createjs.SpriteSheet({
			images: [f],
			frames: {
				width: f.width / 2,
				height: f.height,
				regX: f.width / 2 / 2,
				regY: f.height / 2
			},
			animations: {
				on: [0, 1],
				off: [1, 2]
			}
		});
		g = s_bAudioActive ? createSprite(c, "on", f.width / 2 / 2, f.height / 2, f.width / 2, f.height) : createSprite(c, "off", f.width / 2 / 2, f.height / 2, f.width / 2, f.height);
		g.x = a;
		g.y = e;
		g.stop();
		g.cursor = "pointer";
		s_oStage.addChild(g);
		this._initListener()
	};
	this.unload = function() {
		g.off("mousedown", this.buttonDown);
		g.off("pressup", this.buttonRelease);
		s_oStage.removeChild(g)
	};
	this._initListener = function() {
		g.on("mousedown", this.buttonDown);
		g.on("pressup", this.buttonRelease)
	};
	this.setPosition = function(a, e) {
		g.x = a;
		g.y = e
	};
	this.addEventListener = function(a, e, f) {
		h[a] = e;
		l[a] = f
	};
	this.buttonRelease = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but");
		g.scaleX = 1;
		g.scaleY = 1;
		(s_bAudioActive = !s_bAudioActive) ? g.gotoAndStop("on") : g.gotoAndStop("off");
		h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(l[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		g.scaleX = .9;
		g.scaleY = .9;
		h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
	};
	this._init(a, d, k)
}

function CBetBut(a, d, k) {
	var h, l, g, b = [],
		e;
	this._init = function(a, b, d) {
		h = !1;
		l = [];
		g = [];
		d = s_oSpriteLibrary.getSprite("bet_but");
		var k = new createjs.SpriteSheet({
			images: [d],
			frames: {
				width: d.width / 2,
				height: d.height,
				regX: 0,
				regY: 0
			},
			animations: {
				on: [0, 1],
				off: [1, 2]
			}
		});
		e = createSprite(k, "on", 0, 0, d.width / 2, d.height);
		e.stop();
		e.x = a;
		e.y = b;
		e.regX = d.width / 2;
		e.regY = d.height / 2;
		s_oStage.addChild(e);
		this._initListener()
	};
	this.unload = function() {
		e.off("mousedown", this.buttonDown);
		e.off("pressup", this.buttonRelease);
		s_oStage.removeChild(e)
	};
	this.disable = function(a) {
		h = a
	};
	this.setVisible = function(a) {
		e.visible = a
	};
	this.setOn = function() {
		e.gotoAndStop("on")
	};
	this.setOff = function() {
		e.gotoAndStop("off")
	};
	this._initListener = function() {
		e.on("mousedown", this.buttonDown);
		e.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, e) {
		l[a] = b;
		g[a] = e
	};
	this.addEventListenerWithParams = function(a, c, e, d) {
		l[a] = c;
		g[a] = e;
		b = d
	};
	this.buttonRelease = function() {
		l[ON_MOUSE_UP] && !1 === h && (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"), l[ON_MOUSE_UP].call(g[ON_MOUSE_UP], b))
	};
	this.buttonDown = function() {
		l[ON_MOUSE_DOWN] && !1 === h && l[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], b)
	};
	this.setPosition = function(a, b) {
		e.x = a;
		e.y = b
	};
	this.setX = function(a) {
		e.x = a
	};
	this.setY = function(a) {
		e.y = a
	};
	this.getButtonImage = function() {
		return e
	};
	this.getX = function() {
		return e.x
	};
	this.getY = function() {
		return e.y
	};
	this._init(a, d, k)
}

function CMenu() {
	var a, d, k, h, l, g;
	this._init = function() {
		k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(k);
		var b = s_oSpriteLibrary.getSprite("but_play_bg");
		h = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 60, b, TEXT_PLAY, FONT_GAME, "#ffffff", 32);
		h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = s_oSpriteLibrary.getSprite("audio_icon"), a = CANVAS_WIDTH - b.width / 2 + 20, d = b.height / 2 + 20, l = new CToggle(a, d, b), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), null === s_oSoundTrack && (s_oSoundTrack = createjs.Sound.play("soundtrack", {
			volume: SOUNDTRACK_VOLUME,
			loop: -1
		}));
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(g);
		createjs.Tween.get(g).to({
			alpha: 0
		}, 600).call(function() {
			g.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(b, e) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(a - b, e + d)
	};
	this.unload = function() {
		h.unload();
		h = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
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
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	var d = !1,
		k, h, l = !0,
		g, b, e, f, c, p, w, m, q, r, x, y = 0,
		z, v, u, B, A, G, n, D, H, F, E, M, I, J, K, t, C = null,
		L;
	this._init = function() {
		g = GAME_STATE_IDLE;
		k = !0;
		_iNumSpinCont = x = f = b = 0;
		G = [0, 1, 2, 3, 4];
		e = G[0];
		c = NUM_PAYLINES;
		r = TOTAL_MONEY;
		m = MIN_BET;
		q = m * c;
		n = [];
		for (var a = 0; a < NUM_ROWS; a++) {
			n[a] = [];
			for (var h = 0; h < NUM_REELS; h++) n[a][h] = 0
		}
		s_oTweenController = new CTweenController;
		J = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStage.addChild(J);
		this._initReels();
		K = createBitmap(s_oSpriteLibrary.getSprite("mask_slot"));
		s_oStage.addChild(K);
		this._initStaticSymbols();
		this._initHitAreaColumn();
		t = new CInterface(m, q, r);
		L = new CBonusPanel;
		C = new CPayTablePanel;
		r < q && t.disableSpin();
		d = !0
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) createjs.Sound.stop(), s_oSoundTrack = null;
		s_oStage.removeChild(J);
		s_oStage.removeChild(K);
		t.unload();
		C.unload();
		for (var a = 0; a < u.length; a++) u[a].unload();
		for (a = 0; a < NUM_ROWS; a++) for (var b = 0; b < NUM_REELS; b++) B[a][b].unload();
		L.unload()
	};
	this._initReels = function() {
		var a = REEL_OFFSET_X,
			b = REEL_OFFSET_Y,
			c = 0;
		u = [];
		for (var e = 0; e < NUM_REELS; e++) u[e] = new CReelColumn(e, a, b, c), u[e + NUM_REELS] = new CReelColumn(e + NUM_REELS, a, b + SYMBOL_SIZE * NUM_ROWS, c), a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS, c += REEL_DELAY
	};
	this._initStaticSymbols = function() {
		var a = REEL_OFFSET_X,
			b = REEL_OFFSET_Y;
		B = [];
		for (var c = 0; c < NUM_ROWS; c++) {
			B[c] = [];
			for (var e = 0; e < NUM_REELS; e++) {
				var d = new CStaticSymbolCell(c, e, a, b);
				B[c][e] = d;
				a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS
			}
			a = REEL_OFFSET_X;
			b += SYMBOL_SIZE
		}
	};
	this._initHitAreaColumn = function() {
		E = [];
		F = [];
		for (var a = 376, b = 120, c = 0; c < NUM_REELS; c++) {
			var e = createBitmap(s_oSpriteLibrary.getSprite("hold_col"));
			e.x = a;
			e.y = b;
			e.visible = !1;
			s_oStage.addChild(e);
			a += 150;
			F.push(e);
			E[c] = !1
		}
		D = [];
		H = [];
		for (var a = 381, b = 108, c = s_oSpriteLibrary.getSprite("hit_area_col"), e = 0; e < NUM_REELS; e++) {
			var d = new createjs.Text(TEXT_HOLD, "22px " + FONT_GAME, "#ffffff");
			d.visible = !1;
			d.x = a + c.width / 2;
			d.y = b + c.height - 20;
			d.shadow = new createjs.Shadow("#000", 1, 1, 2);
			d.textAlign = "center";
			s_oStage.addChild(d);
			D[e] = d;
			d = new CGfxButton(a + c.width / 2, b + c.height / 2, c);
			d.setVisible(!1);
			d.addEventListenerWithParams(ON_MOUSE_UP, this._onHitAreaCol, this, {
				index: e
			});
			a += 150;
			H.push(d)
		}
	};
	this.generateFinalSymbols = function() {
		for (var a = 0; a < NUM_ROWS; a++) for (var b = 0; b < NUM_REELS; b++)!1 === u[b].isHold() && (n[a][b] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]);
		a = this._checkForCombos();
		this._checkForBonus();
		return a
	};
	this._checkForCombos = function() {
		A = [];
		for (var a = z = 0; a < c; a++) {
			var b = s_aPaylineCombo[a],
				e = [],
				d = n[b[0].row][b[0].col];
			if (d !== BONUS_SYMBOL) {
				var g = 1,
					f = 1;
				for (e.push({
					row: b[0].row,
					col: b[0].col,
					value: n[b[0].row][b[0].col]
				}); d === WILD_SYMBOL && f < NUM_REELS;) g++, d = n[b[f].row][b[f].col], e.push({
					row: b[f].row,
					col: b[f].col,
					value: n[b[f].row][b[f].col]
				}), f++;
				for (; f < b.length; f++) if (n[b[f].row][b[f].col] === d || n[b[f].row][b[f].col] === WILD_SYMBOL) {
					if (n[b[f].row][b[f].col] === BONUS_SYMBOL) break;
					g++;
					e.push({
						row: b[f].row,
						col: b[f].col,
						value: n[b[f].row][b[f].col]
					})
				} else break;
				0 < s_aSymbolWin[d - 1][g - 1] && (z += s_aSymbolWin[d - 1][g - 1], A.push({
					line: a + 1,
					amount: s_aSymbolWin[d - 1][g - 1],
					num_win: g,
					value: d,
					list: e
				}))
			}
		}
		return 0 < A.length ? !0 : !1
	};
	this._checkForBonus = function() {
		h = !1;
		y = 0;
		for (var a = [], b = 0; b < NUM_ROWS; b++) for (var c = 0; c < NUM_REELS; c++) n[b][c] === BONUS_SYMBOL && (a.push({
			row: b,
			col: c,
			value: n[b][c]
		}), y++);
		y >= NUM_SYMBOLS_FOR_BONUS && (A.push({
			line: -1,
			amount: 0,
			num_win: y,
			value: BONUS_SYMBOL,
			list: a
		}), 5 < y && (y = 5), h = !0)
	};
	this._generateRandSymbols = function() {
		for (var a = [], b = 0; b < NUM_ROWS; b++) a[b] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)];
		return a
	};
	this.reelArrived = function(a, c) {
		if (b > MIN_REEL_LOOPS) if (e === c) {
			if (!1 === u[a].isReadyToStop()) {
				var d = a;
				a < NUM_REELS ? (d += NUM_REELS, u[d].setReadyToStop(), u[a].restart([n[0][a], n[1][a], n[2][a]], !0)) : (d -= NUM_REELS, u[d].setReadyToStop(), u[a].restart([n[0][d], n[1][d], n[2][d]], !0))
			}
		} else u[a].restart(this._generateRandSymbols(), !1);
		else u[a].restart(this._generateRandSymbols(), !1), 0 === a && b++
	};
	this.increaseReelLoops = function() {
		b += 2
	};
	this.stopNextReel = function() {
		f++;
		0 === f % 2 && (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("reel_stop", {
			volume: .3
		}), e = G[f / 2], f === 2 * NUM_REELS && this._endReelAnimation())
	};
	this._endReelAnimation = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || M.stop();
		f = b = 0;
		e = G[0];
		for (var a = 0; a < NUM_REELS; a++) E[a] = !1, F[a].visible = !1, u[a].setHold(!1), u[a + NUM_REELS].setHold(!1);
		x = 0;
		if (0 < A.length) {
			for (var c = 0; c < A.length; c++) {
				C.highlightCombo(A[c].value, A[c].num_win); - 1 !== A[c].line && t.showLine(A[c].line);
				for (var d = A[c].list, a = 0; a < d.length; a++) B[d[a].row][d[a].col].show(d[a].value)
			}
			z *= m;
			r += z;
			SLOT_CASH -= z;
			0 < z && (t.refreshMoney(r), t.refreshWinText(z));
			p = 0;
			g = GAME_STATE_SHOW_ALL_WIN;
			if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) I = createjs.Sound.play("win")
		} else k && this.enableColumnHitArea(), g = GAME_STATE_IDLE;
		!1 === k && (k = !0);
		!1 === h && (t.disableBetBut(!1), t.enableGuiButtons());
		r < q && t.disableSpin();
		_iNumSpinCont++;
		_iNumSpinCont === v && (_iNumSpinCont = 0, $(s_oMain).trigger("show_interlevel_ad"));
		$(s_oMain).trigger("save_score", r)
	};
	this.hidePayTable = function() {
		C.hide()
	};
	this._showWin = function() {
		var a;
		if (0 < w) {
			!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || I.stop(); - 1 !== A[w - 1].line && (a = A[w - 1].line, t.hideLine(a));
			a = A[w - 1].list;
			for (var b = 0; b < a.length; b++) B[a[b].row][a[b].col].stopAnim()
		}
		w === A.length && (w = 0); - 1 !== A[w].line && (a = A[w].line, t.showLine(a));
		a = A[w].list;
		for (b = 0; b < a.length; b++) B[a[b].row][a[b].col].show(a[b].value);
		w++
	};
	this._hideAllWins = function() {
		for (var a = 0; a < A.length; a++) for (var b = A[a].list, c = 0; c < b.length; c++) B[b[c].row][b[c].col].stopAnim();
		t.hideAllLines();
		w = p = 0;
		p = TIME_SHOW_WIN;
		g = GAME_STATE_SHOW_WIN;
		h && L.show(y)
	};
	this.enableColumnHitArea = function() {
		for (var a = 0; a < NUM_REELS; a++) D[a].visible = !0, H[a].setVisible(!0)
	};
	this.disableColumnHitArea = function() {
		for (var a = 0; a < NUM_REELS; a++) D[a].visible = !1, H[a].setVisible(!1)
	};
	this.activateLines = function(a) {
		c = a;
		this.removeWinShowing();
		q = a = m * c;
		t.refreshTotalBet(q);
		t.refreshNumLines(c);
		a > r ? t.disableSpin() : t.enableSpin()
	};
	this.addLine = function() {
		c === NUM_PAYLINES ? c = 1 : c++;
		var a = m * c;
		q = a;
		t.refreshTotalBet(q);
		t.refreshNumLines(c);
		a > r ? t.disableSpin() : t.enableSpin()
	};
	this.changeCoinBet = function() {
		var a = Math.floor(100 * (m + .05)) / 100;
		a > MAX_BET ? (m = MIN_BET, q = m * c, t.refreshBet(m), t.refreshTotalBet(q), a = q) : (a *= c, m += .05, m = Math.floor(100 * m) / 100, q = a, t.refreshBet(m), t.refreshTotalBet(q));
		a > r ? t.disableSpin() : t.enableSpin()
	};
	this.onMaxBet = function() {
		var a = MAX_BET;
		c = NUM_PAYLINES;
		a *= c;
		m = MAX_BET;
		q = a;
		t.refreshBet(m);
		t.refreshTotalBet(q);
		t.refreshNumLines(c);
		a > r ? t.disableSpin() : (t.enableSpin(), this.onSpin())
	};
	this._onHitAreaCol = function(a) {
		a = a.index;
		!0 === E[a] ? (E[a] = !1, F[a].visible = !1, D[a].visible = !0, x--, u[a].setHold(!1), u[a + NUM_REELS].setHold(!1)) : x < MAX_NUM_HOLD && (E[a] = !0, x++, F[a].visible = !0, D[a].visible = !1, u[a].setHold(!0), u[a + NUM_REELS].setHold(!0), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_hold"));
		k = !1
	};
	this.removeWinShowing = function() {
		C.resetHighlightCombo();
		t.resetWin();
		for (var a = 0; a < NUM_ROWS; a++) for (var b = 0; b < NUM_REELS; b++) B[a][b].hide();
		for (a = 0; a < u.length; a++) u[a].activate();
		g = GAME_STATE_IDLE
	};
	this.endBonus = function(a) {
		r += a;
		t.refreshMoney(r);
		SLOT_CASH -= a;
		t.disableBetBut(!1);
		t.enableGuiButtons()
	};
	this.onSpin = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) I && I.stop(), M = createjs.Sound.play("reels", {
			volume: .3
		});
		this.disableColumnHitArea();
		t.disableBetBut(!0);
		this.removeWinShowing();
		MIN_WIN = s_aSymbolWin[0][s_aSymbolWin[0].length - 1];
		for (var a = 0; a < s_aSymbolWin.length; a++) for (var b = s_aSymbolWin[a], c = 0; c < b.length; c++) 0 !== b[c] && b[c] < MIN_WIN && (MIN_WIN = b[c]);
		MIN_WIN *= m;
		r -= q;
		t.refreshMoney(r);
		SLOT_CASH += q;
		if (!l && u[0].visible && u[1].visible && this._checkForCombos()) this._assignWin();
		else if (SLOT_CASH < MIN_WIN) {
			do a = this.generateFinalSymbols();
			while (!0 === a)
		} else if (Math.floor(100 * Math.random()) > WIN_OCCURRENCE) {
			do a = this.generateFinalSymbols();
			while (!0 === a)
		} else this._assignWin();
		t.hideAllLines();
		t.disableGuiButtons();
		l = !1;
		g = GAME_STATE_SPINNING
	};
	this._assignWin = function() {
		if (SLOT_CASH < BONUS_PRIZE[0][0]) {
			var a = 0;
			do {
				var b = this.generateFinalSymbols();
				a++
			} while ((!1 === b || z * m > SLOT_CASH || h) && 1E4 >= a)
		} else if (Math.floor(100 * Math.random()) > BONUS_OCCURRENCE) {
			a = 0;
			do b = this.generateFinalSymbols(), a++;
			while ((!1 === b || z * m > SLOT_CASH || h) && 1E4 >= a)
		} else {
			a = 0;
			do {
				var b = this.generateFinalSymbols(),
					c = 0;
				h && (c = y - 3);
				a++
			} while ((!1 === b || z * m > SLOT_CASH || !1 === h || BONUS_PRIZE[c][0] > SLOT_CASH) && 1E4 >= a)
		}
		if (1E4 < a) {
			do b = this.generateFinalSymbols();
			while (!0 === b)
		}
	};
	this.onInfoClicked = function() {
		g !== GAME_STATE_SPINNING && (C.isVisible() ? C.hide() : C.show())
	};
	this.onExit = function() {
		this.unload();
		s_oMain.gotoMenu();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("share_event", {
			img: "200x200.jpg",
			title: TEXT_CONGRATULATIONS,
			msg: TEXT_MSG_SHARE1 + r + TEXT_MSG_SHARE2,
			msg_share: TEXT_MSG_SHARING1 + r + TEXT_MSG_SHARING2
		})
	};
	this.getState = function() {
		return g
	};
	this.update = function() {
		if (!1 !== d) switch (g) {
		case GAME_STATE_SPINNING:
			for (var a = 0; a < u.length; a++) u[a].update(e);
			break;
		case GAME_STATE_SHOW_ALL_WIN:
			p += s_iTimeElaps;
			p > TIME_SHOW_ALL_WINS && this._hideAllWins();
			break;
		case GAME_STATE_SHOW_WIN:
			p += s_iTimeElaps, p > TIME_SHOW_WIN && (p = 0, this._showWin())
		}
	};
	s_oGame = this;
	WIN_OCCURRENCE = a.win_occurrence;
	SLOT_CASH = a.slot_cash;
	BONUS_OCCURRENCE = a.bonus_occurrence;
	MIN_REEL_LOOPS = a.min_reel_loop;
	REEL_DELAY = a.reel_delay;
	TIME_SHOW_WIN = a.time_show_win;
	TIME_SHOW_ALL_WINS = a.time_show_all_wins;
	TOTAL_MONEY = a.money;
	MIN_BET = a.min_bet;
	MAX_BET = a.max_bet;
	MAX_NUM_HOLD = a.max_hold;
	PERC_WIN_EGG_1 = a.perc_win_egg_1;
	PERC_WIN_EGG_2 = a.perc_win_egg_2;
	PERC_WIN_EGG_3 = a.perc_win_egg_3;
	NUM_SYMBOLS_FOR_BONUS = a.num_symbol_bonus;
	v = a.num_spin_ads_showing;
	new CSlotSettings;
	this._init()
}
var s_oGame, s_oTweenController;

function CReelColumn(a, d, k, h) {
	var l, g, b, e, f, c, p, w, m, q, r, x, y, z, v;
	this._init = function(a, d, h, k) {
		e = b = g = l = !1;
		w = 0;
		f = a;
		p = k;
		c = f < NUM_REELS ? f : f - NUM_REELS;
		q = 0;
		r = MAX_FRAMES_REEL_EASE;
		m = REEL_STATE_START;
		x = h;
		y = x + SYMBOL_SIZE * NUM_ROWS;
		this.initContainer(d, h)
	};
	this.initContainer = function(a, b) {
		v = new createjs.Container;
		v.x = a;
		v.y = b;
		var c = 0;
		z = [];
		for (var e = 0; e < NUM_ROWS; e++) {
			var d = createSprite(s_aSymbolData[s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
			d.stop();
			d.x = 0;
			d.y = c;
			v.addChild(d);
			z[e] = d;
			c += SYMBOL_SIZE
		}
		s_oStage.addChild(v)
	};
	this.unload = function() {
		s_oStage.removeChild(v)
	};
	this.activate = function() {
		x = v.y;
		y = x + SYMBOL_SIZE * NUM_ROWS;
		l = !0
	};
	this._setSymbol = function(a) {
		v.removeAllChildren();
		for (var b = 0, c = 0; c < a.length; c++) {
			var e = new createSprite(s_aSymbolData[a[c]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
			e.stop();
			e.x = 0;
			e.y = b;
			v.addChild(e);
			z[c] = e;
			b += SYMBOL_SIZE
		}
	};
	this.setHold = function(a) {
		e = a
	};
	this.restart = function(a, c) {
		v.y = x = REEL_START_Y;
		y = x + SYMBOL_SIZE * NUM_ROWS;
		this._setSymbol(a);
		if (g = c) {
			q = 0;
			r = MAX_FRAMES_REEL_EASE;
			m = REEL_STATE_STOP;
			for (var e = 0; e < NUM_ROWS; e++) z[e].gotoAndStop("static");
			b = !0
		} else for (e = 0; e < NUM_ROWS; e++) z[e].gotoAndStop("moving")
	};
	this.setReadyToStop = function() {
		q = 0;
		r = MAX_FRAMES_REEL_EASE;
		m = REEL_STATE_STOP
	};
	this.isReadyToStop = function() {
		return g
	};
	this.isHold = function() {
		return e
	};
	this._updateStart = function() {
		0 === q && f < NUM_REELS && (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("start_reel", {
			volume: .3
		}));
		q++;
		q > r && (q = 0, r /= 2, m++, x = v.y, y = x + SYMBOL_SIZE * NUM_ROWS);
		var a = s_oTweenController.easeInBack(q, 0, 1, r),
			a = s_oTweenController.tweenValue(x, y, a);
		v.y = a
	};
	this._updateMoving = function() {
		q++;
		q > r && (q = 0, x = v.y, y = x + SYMBOL_SIZE * NUM_ROWS);
		var a = s_oTweenController.easeLinear(q, 0, 1, r),
			a = s_oTweenController.tweenValue(x, y, a);
		v.y = a
	};
	this._updateStopping = function() {
		q++;
		if (q >= r) l = !1, q = 0, r = MAX_FRAMES_REEL_EASE, m = REEL_STATE_START, w = 0, g = !1, b && (b = !1, v.y = REEL_OFFSET_Y), s_oGame.stopNextReel();
		else {
			var a = s_oTweenController.easeOutCubic(q, 0, 1, r),
				a = s_oTweenController.tweenValue(x, y, a);
			v.y = a
		}
	};
	this.update = function(a) {
		if (!1 !== l && (w++, w > p)) if (e) a === f && (l = !1, s_oGame.stopNextReel(), s_oGame.stopNextReel(), 0 === f && s_oGame.increaseReelLoops());
		else switch (!1 === g && v.y > REEL_ARRIVAL_Y && s_oGame.reelArrived(f, c), m) {
		case REEL_STATE_START:
			this._updateStart();
			break;
		case REEL_STATE_MOVING:
			this._updateMoving();
			break;
		case REEL_STATE_STOP:
			this._updateStopping()
		}
	};
	this._init(a, d, k, h)
}

function CInterface(a, d, k) {
	var h, l, g, b, e, f, c, p, w, m, q, r, x, y, z, v, u;
	this._init = function(a, d, k) {
		var n = s_oSpriteLibrary.getSprite("but_exit");
		h = CANVAS_WIDTH - n.width / 2 - 20;
		l = n.height / 2 + 20;
		c = new CGfxButton(h, l, n, !0);
		c.addEventListener(ON_MOUSE_UP, this._onExit, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g = c.getX() - n.width, b = n.height / 2 + 20, q = new CToggle(g, b, s_oSpriteLibrary.getSprite("audio_icon")), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		n = s_oSpriteLibrary.getSprite("spin_but");
		p = new CTextButton(1090 + n.width / 2, CANVAS_HEIGHT - n.height / 2, n, "", FONT_GAME, "#ffde00", 22);
		p.addEventListener(ON_MOUSE_UP, this._onSpin, this);
		n = s_oSpriteLibrary.getSprite("info_but");
		w = new CTextButton(328 + n.width / 2, CANVAS_HEIGHT - n.height / 2, n, TEXT_INFO, FONT_GAME, "#ffffff", 30);
		w.addEventListener(ON_MOUSE_UP, this._onInfo, this);
		n = s_oSpriteLibrary.getSprite("but_lines_bg");
		m = new CTextButton(494 + n.width / 2, CANVAS_HEIGHT - n.height / 2, n, TEXT_LINES, FONT_GAME, "#ffffff", 30);
		m.addEventListener(ON_MOUSE_UP, this._onAddLine, this);
		n = s_oSpriteLibrary.getSprite("coin_but");
		r = new CTextButton(680 + n.width / 2, CANVAS_HEIGHT - n.height / 2, n, TEXT_COIN, FONT_GAME, "#ffffff", 30);
		r.addEventListener(ON_MOUSE_UP, this._onBet, this);
		n = s_oSpriteLibrary.getSprite("but_maxbet_bg");
		x = new CTextButton(866 + n.width / 2, CANVAS_HEIGHT - n.height / 2, n, TEXT_MAX_BET, FONT_GAME, "#ffffff", 30);
		x.addEventListener(ON_MOUSE_UP, this._onMaxBet, this);
		z = new createjs.Text(TEXT_MONEY + "\n" + k.toFixed(2), "30px " + FONT_GAME, "#ffde00");
		z.x = 450;
		z.y = 46;
		z.textBaseline = "alphabetic";
		z.lineHeight = 28;
		z.textAlign = "center";
		s_oStage.addChild(z);
		u = new createjs.Text(NUM_PAYLINES, "26px " + FONT_GAME, "#ffffff");
		u.x = 584;
		u.y = CANVAS_HEIGHT - 65;
		u.shadow = new createjs.Shadow("#000", 2, 2, 2);
		u.textAlign = "center";
		u.textBaseline = "alphabetic";
		s_oStage.addChild(u);
		y = new createjs.Text(a.toFixed(2), "26px " + FONT_GAME, "#ffffff");
		y.x = 776;
		y.y = CANVAS_HEIGHT - 65;
		y.shadow = new createjs.Shadow("#000", 2, 2, 2);
		y.textAlign = "center";
		y.textBaseline = "alphabetic";
		s_oStage.addChild(y);
		v = new createjs.Text(TEXT_BET + ": " + d.toFixed(2), "26px " + FONT_GAME, "#ffffff");
		v.x = 980;
		v.y = CANVAS_HEIGHT - 65;
		v.shadow = new createjs.Shadow("#000", 2, 2, 2);
		v.textAlign = "center";
		v.textBaseline = "alphabetic";
		s_oStage.addChild(v);
		n = s_oSpriteLibrary.getSprite("bet_but");
		e = [];
		a = new CBetBut(334 + n.width / 2, 282 + n.height / 2);
		a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 1);
		e[0] = a;
		a = new CBetBut(334 + n.width / 2, 180 + n.height / 2);
		a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 2);
		e[1] = a;
		a = new CBetBut(334 + n.width / 2, 432 + n.height / 2);
		a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 3);
		e[2] = a;
		a = new CBetBut(334 + n.width / 2, 114 + n.height / 2);
		a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 4);
		e[3] = a;
		a = new CBetBut(334 + n.width / 2, 502 + n.height / 2);
		a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 5);
		e[4] = a;
		f = [];
		for (n = 0; n < NUM_PAYLINES; n++) a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("payline_" + (n + 1))), a.visible = !1, s_oStage.addChild(a), f[n] = a;
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		c.unload();
		c = null;
		p.unload();
		p = null;
		w.unload();
		w = null;
		m.unload();
		m = null;
		r.unload();
		r = null;
		x.unload();
		x = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
		for (var a = 0; a < NUM_PAYLINES; a++) e[a].unload();
		s_oStage.removeAllChildren();
		s_oInterface = null
	};
	this.refreshButtonPos = function(a, e) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(g - a, e + b);
		c.setPosition(h - a, e + l)
	};
	this.refreshMoney = function(a) {
		z.text = TEXT_MONEY + "\n" + a.toFixed(2)
	};
	this.refreshBet = function(a) {
		y.text = a.toFixed(2)
	};
	this.refreshTotalBet = function(a) {
		v.text = TEXT_BET + ": " + a.toFixed(2)
	};
	this.refreshNumLines = function(a) {
		u.text = a;
		for (var b = 0; b < NUM_PAYLINES; b++) b < a ? (e[b].setOn(), f[b].visible = !0) : e[b].setOff();
		setTimeout(function() {
			for (var a = 0; a < NUM_PAYLINES; a++) f[a].visible = !1
		}, 1E3)
	};
	this.resetWin = function() {
		p.changeText("")
	};
	this.refreshWinText = function(a) {
		p.changeText(TEXT_WIN + "\n" + a.toFixed(2))
	};
	this.showLine = function(a) {
		f[a - 1].visible = !0
	};
	this.hideLine = function(a) {
		f[a - 1].visible = !1
	};
	this.hideAllLines = function() {
		for (var a = 0; a < NUM_PAYLINES; a++) f[a].visible = !1
	};
	this.disableBetBut = function(a) {
		for (var b = 0; b < NUM_PAYLINES; b++) e[b].disable(a)
	};
	this.enableGuiButtons = function() {
		p.enable();
		x.enable();
		r.enable();
		m.enable();
		w.enable()
	};
	this.enableSpin = function() {
		p.enable();
		x.enable()
	};
	this.disableSpin = function() {
		p.disable();
		x.disable()
	};
	this.disableGuiButtons = function() {
		p.disable();
		x.disable();
		r.disable();
		m.disable();
		w.disable()
	};
	this._onBetLineClicked = function(a) {
		this.refreshNumLines(a);
		s_oGame.activateLines(a)
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._onSpin = function() {
		s_oGame.onSpin()
	};
	this._onAddLine = function() {
		s_oGame.addLine()
	};
	this._onInfo = function() {
		s_oGame.onInfoClicked()
	};
	this._onBet = function() {
		s_oGame.changeCoinBet()
	};
	this._onMaxBet = function() {
		s_oGame.onMaxBet()
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	s_oInterface = this;
	this._init(a, d, k);
	return this
}
var s_oInterface = null;

function CPayTablePanel() {
	var a, d, k, h, l, g;
	this._init = function() {
		g = new createjs.Container;
		l = createBitmap(s_oSpriteLibrary.getSprite("paytable"));
		g.addChild(l);
		a = [];
		var b, e = 424,
			f = 90;
		a[0] = [];
		for (b = 0; 3 > b; b++) {
			var c = new createjs.Text("X" + (5 - b), "bold 22px " + FONT_GAME, "#ffffff");
			c.textAlign = "center";
			c.shadow = new createjs.Shadow("#000", 1, 1, 2);
			c.x = e;
			c.y = f;
			c.textBaseline = "alphabetic";
			g.addChild(c);
			a[0][b] = c;
			f += 30
		}
		e = 634;
		f = 90;
		a[1] = [];
		for (b = 0; 3 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 22px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[1][b] = c, f += 30;
		e = 864;
		f = 90;
		a[2] = [];
		for (b = 0; 3 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 22px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[2][b] = c, f += 30;
		e = 1098;
		f = 84;
		a[3] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 21px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[3][b] = c, f += 22;
		e = 430;
		f = 190;
		a[4] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 21px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[4][b] = c, f += 22;
		e = 654;
		f = 190;
		a[5] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 21px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[5][b] = c, f += 22;
		e = 874;
		f = 190;
		a[6] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 21px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[6][b] = c, f += 22;
		e = 1096;
		f = 190;
		a[7] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text("X" + (5 - b), "bold 21px " + FONT_GAME, "#ffffff"), c.textAlign = "center", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), a[7][b] = c, f += 22;
		d = [];
		e = 460;
		f = 90;
		d[0] = [];
		for (b = 0; 3 > b; b++) c = new createjs.Text(s_aSymbolWin[0][4 - b], "22px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[0][b] = c, f += 30;
		e = 670;
		f = 90;
		d[1] = [];
		for (b = 0; 3 > b; b++) c = new createjs.Text(s_aSymbolWin[1][4 - b], "22px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[1][b] = c, f += 30;
		e = 900;
		f = 90;
		d[2] = [];
		for (b = 0; 3 > b; b++) c = new createjs.Text(s_aSymbolWin[2][4 - b], "22px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[2][b] = c, f += 30;
		e = 1130;
		f = 84;
		d[3] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text(s_aSymbolWin[3][4 - b], "21px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[3][b] = c, f += 22;
		e = 460;
		f = 190;
		d[4] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text(s_aSymbolWin[4][4 - b], "21px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[4][b] = c, f += 22;
		e = 685;
		f = 190;
		d[5] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text(s_aSymbolWin[5][4 - b], "21px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[5][b] = c, f += 22;
		e = 905;
		f = 190;
		d[6] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text(s_aSymbolWin[6][4 - b], "21px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[6][b] = c, f += 22;
		e = 1130;
		f = 190;
		d[7] = [];
		for (b = 0; 4 > b; b++) c = new createjs.Text(s_aSymbolWin[7][4 - b], "21px " + FONT_GAME, "#ffff00"), c.textAlign = "left", c.shadow = new createjs.Shadow("#000", 1, 1, 2), c.x = e, c.y = f, c.textBaseline = "alphabetic", g.addChild(c), d[7][b] = c, f += 22;
		k = new createjs.Text(TEXT_HELP_WILD, "21px " + FONT_GAME, "#ffff00");
		k.shadow = new createjs.Shadow("#000", 2, 2, 2);
		k.textAlign = "center";
		k.lineHeight = 22;
		k.x = 636;
		k.y = 286;
		g.addChild(k);
		h = new createjs.Text(TEXT_HELP_BONUS, "21px " + FONT_GAME, "#ffff00");
		h.shadow = new createjs.Shadow("#000", 2, 2, 2);
		h.textAlign = "center";
		h.lineHeight = 22;
		h.x = 1012;
		h.y = 294;
		g.addChild(h);
		g.visible = !1;
		s_oStage.addChild(g);
		var p = this;
		g.on("pressup", function() {
			p._onExit()
		})
	};
	this.unload = function() {
		var b = this;
		g.off("pressup", function() {
			b._onExit()
		});
		s_oStage.removeChild(g);
		for (var e = 0; e < a.length; e++) g.removeChild(a[e]);
		for (e = 0; e < d.length; e++) g.removeChild(d[e])
	};
	this.show = function() {
		g.visible = !0
	};
	this.hide = function() {
		g.visible = !1
	};
	this.resetHighlightCombo = function() {
		for (var b = 0; b < a.length; b++) for (var e = 0; e < a[b].length; e++) a[b][e].color = "#ffffff", d[b][e].color = "#ffff00", createjs.Tween.removeTweens(d[b][e]), d[b][e].alpha = 1
	};
	this.highlightCombo = function(a, e) {
		8 < a || (d[a - 1][NUM_REELS - e].color = "#ff0000", this.tweenAlpha(d[a - 1][NUM_REELS - e], 0))
	};
	this.tweenAlpha = function(a, e) {
		var d = this;
		createjs.Tween.get(a).to({
			alpha: e
		}, 200).call(function() {
			1 === e ? d.tweenAlpha(a, 0) : d.tweenAlpha(a, 1)
		})
	};
	this._onExit = function() {
		s_oGame.hidePayTable()
	};
	this.isVisible = function() {
		return g.visible
	};
	this._init()
}

function CStaticSymbolCell(a, d, k, h) {
	var l = -1,
		g, b, e, f;
	this._init = function(a, d, g, h) {
		f = new createjs.Container;
		f.visible = !1;
		b = [];
		for (a = 0; a < NUM_SYMBOLS; a++) d = createSprite(s_aSymbolAnims[a], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE), d.stop(), d.x = g, d.y = h, d.on("animationend", this._onAnimEnded, null, !1, {
			index: a
		}), f.addChild(d), b[a] = d, b[a].visible = !1;
		a = {
			framerate: 60,
			images: [s_oSpriteLibrary.getSprite("win_frame_anim")],
			frames: {
				width: SYMBOL_SIZE,
				height: SYMBOL_SIZE,
				regX: 0,
				regY: 0
			},
			animations: {
				"static": [0, 1],
				anim: [1, 19]
			}
		};
		a = new createjs.SpriteSheet(a);
		e = new createSprite(a, "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
		e.stop();
		e.x = g;
		e.y = h;
		f.addChild(e);
		s_oStage.addChild(f)
	};
	this.unload = function() {
		s_oStage.removeChild(f)
	};
	this.hide = function() {
		-1 < l && (e.gotoAndStop("static"), e.visible = !1, b[l].gotoAndPlay("static"), f.visible = !1)
	};
	this.show = function(a) {
		e.gotoAndPlay("anim");
		e.visible = !0;
		for (var d = 0; d < NUM_SYMBOLS; d++) b[d].visible = d + 1 === a ? !0 : !1;
		b[a - 1].gotoAndPlay("anim");
		l = a - 1;
		g = b[a - 1].spriteSheet.getNumFrames();
		f.visible = !0
	};
	this._onAnimEnded = function(a, e) {
		b[e.index].currentFrame !== g && (b[e.index].stop(), setTimeout(function() {
			b[e.index].gotoAndPlay(1)
		}, 100))
	};
	this.stopAnim = function() {
		b[l].gotoAndStop("static");
		b[l].visible = !1;
		e.gotoAndStop("static");
		e.visible = !1
	};
	this._init(a, d, k, h)
}

function CTweenController() {
	this.tweenValue = function(a, d, k) {
		return a + k * (d - a)
	};
	this.easeLinear = function(a, d, k, h) {
		return k * a / h + d
	};
	this.easeInCubic = function(a, d, k, h) {
		h = (a /= h) * a * a;
		return d + k * h
	};
	this.easeBackInQuart = function(a, d, k, h) {
		h = (a /= h) * a;
		return d + k * (2 * h * h + 2 * h * a + -3 * h)
	};
	this.easeInBack = function(a, d, k, h) {
		return k * (a /= h) * a * (2.70158 * a - 1.70158) + d
	};
	this.easeOutCubic = function(a, d, k, h) {
		return k * ((a = a / h - 1) * a * a + 1) + d
	}
}

function CBonusPanel() {
	var a, d, k, h, l, g, b, e, f, c;
	this._init = function() {
		f = new createjs.Container;
		s_oStage.addChild(f);
		var a = createBitmap(s_oSpriteLibrary.getSprite("bonus_bg"));
		f.alpha = 0;
		f.visible = !1;
		f.addChild(a);
		a = {
			framerate: 3,
			images: [s_oSpriteLibrary.getSprite("chicken")],
			frames: {
				width: CHICKEN_WIDTH,
				height: CHICKEN_HEIGHT,
				regX: CHICKEN_WIDTH / 2,
				regY: CHICKEN_HEIGHT / 2
			},
			animations: {
				idle: [0, 5, "idle"],
				lay_egg: [6, 9, "lay_egg"],
				idle_rand_0: [1, 5, "idle"],
				idle_rand_1: [2, 5, "idle"],
				idle_rand_2: [3, 5, "idle"],
				idle_rand_3: [4, 5, "idle"],
				right: [3],
				left: [4]
			}
		};
		a = new createjs.SpriteSheet(a);
		k = [];
		for (var c = 420, d = 0; 5 > d; d++) {
			var h = createSprite(a, "idle", CHICKEN_WIDTH / 2, CHICKEN_HEIGHT / 2, CHICKEN_WIDTH, CHICKEN_HEIGHT);
			h.on("click", this._onChickenReleased, this, !1, d);
			h.x = c;
			h.y = 286;
			h.stop();
			h.visible = !1;
			f.addChild(h);
			c += 164;
			k[d] = h
		}
		c = s_oSpriteLibrary.getSprite("egg");
		a = {
			framerate: 10,
			images: [c],
			frames: {
				width: Math.floor(c.width / NUM_PRIZES),
				height: c.height,
				regX: Math.floor(c.width / NUM_PRIZES) / 2,
				regY: c.height / 2
			},
			animations: {
				egg_0: [0],
				egg_1: [1],
				egg_2: [2]
			}
		};
		a = new createjs.SpriteSheet(a);
		b = createSprite(a, "egg_0", Math.floor(c.width / NUM_PRIZES) / 2, c.height / 2, Math.floor(c.width / NUM_PRIZES), c.height);
		f.addChild(b);
		d = new createjs.Shape;
		d.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(110, 390, 800, 160);
		f.addChild(d);
		b.mask = d;
		l = [];
		g = [];
		l[0] = createSprite(a, "egg_0", Math.floor(c.width / NUM_PRIZES) / 2, c.height / 2, Math.floor(c.width / NUM_PRIZES), c.height);
		l[0].x = 350;
		l[0].y = CANVAS_HEIGHT - 70;
		f.addChild(l[0]);
		d = new createjs.Text("100", "34px " + FONT_GAME, "#ffff00");
		d.textAlign = "left";
		d.x = l[0].x + c.width / NUM_PRIZES / 2 + 6;
		d.y = l[0].y + 12;
		d.textBaseline = "alphabetic";
		f.addChild(d);
		g.push(d);
		l[1] = createSprite(a, "egg_1", Math.floor(c.width / NUM_PRIZES) / 2, c.height / 2, Math.floor(c.width / NUM_PRIZES), c.height);
		l[1].x = 650;
		l[1].y = CANVAS_HEIGHT - 70;
		f.addChild(l[1]);
		d = new createjs.Text("200", "34px " + FONT_GAME, "#ffff00");
		d.textAlign = "left";
		d.x = l[1].x + +(c.width / NUM_PRIZES) / 2 + 6;
		d.y = l[1].y + 12;
		d.textBaseline = "alphabetic";
		f.addChild(d);
		g.push(d);
		l[2] = createSprite(a, "egg_2", Math.floor(c.width / NUM_PRIZES) / 2, c.height / 2, Math.floor(c.width / NUM_PRIZES), c.height);
		l[2].x = 950;
		l[2].y = CANVAS_HEIGHT - 70;
		f.addChild(l[2]);
		d = new createjs.Text("300", "34px " + FONT_GAME, "#ffff00");
		d.textAlign = "left";
		d.x = l[2].x + +(c.width / NUM_PRIZES) / 2 + 6;
		d.y = l[2].y + 12;
		d.textBaseline = "alphabetic";
		f.addChild(d);
		g.push(d);
		e = new createjs.Text("+ 300$", "bold 80px Arial", "#ffff00");
		e.alpha = 0;
		e.textAlign = "center";
		e.shadow = new createjs.Shadow("#000", 2, 2, 2);
		e.x = CANVAS_WIDTH / 2;
		e.y = 150;
		e.textBaseline = "alphabetic";
		f.addChild(e)
	};
	this.unload = function() {
		for (var a = 0; 5 > a; a++) k[a].off("click", this._onChickenReleased)
	};
	this.show = function(d) {
		a = !1;
		e.alpha = 0;
		switch (d) {
		case 3:
			h = BONUS_PRIZE[0];
			break;
		case 4:
			h = BONUS_PRIZE[1];
			break;
		case 5:
			h = BONUS_PRIZE[2];
			break;
		default:
			h = BONUS_PRIZE[0]
		}
		g[0].text = h[0] + "$";
		g[1].text = h[1] + "$";
		g[2].text = h[2] + "$";
		b.x = 118;
		b.y = 308;
		b.rotation = 0;
		b.gotoAndStop("egg_0");
		for (var l = 0; l < d; l++) {
			var m = Math.floor(4 * Math.random());
			k[l].framerate = 3;
			k[l].visible = !0;
			k[l].gotoAndPlay("idle_rand_" + m)
		}
		f.visible = !0;
		createjs.Tween.get(f).to({
			alpha: 1
		}, 1E3);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrack.setVolume(0), c = createjs.Sound.play("soundtrack_bonus", {
			loop: -1
		})
	};
	this._onChickenReleased = function(b, c) {
		a || (a = !0, this.playChickenLayAnim(c, s_aEggOccurence[Math.floor(Math.random() * s_aEggOccurence.length)]), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("choose_chicken"))
	};
	this.playChickenLayAnim = function(a, c) {
		d = h[c];
		b.gotoAndStop("egg_" + c);
		for (var e = 0; 5 > e; e++) e < a ? k[e].gotoAndStop("right") : e === a ? (k[a].framerate = 10, k[a].gotoAndPlay("lay_egg")) : k[e].gotoAndStop("left");
		var f = this;
		setTimeout(function() {
			f.layEgg(a)
		}, 2500)
	};
	this.layEgg = function(a) {
		k[a].gotoAndStop(5);
		b.x = k[a].x;
		var c = this;
		createjs.Tween.get(b).to({
			y: 460
		}, 300).call(function() {
			c.endBonus()
		});
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("reveal_egg")
	};
	this.endBonus = function() {
		e.text = "+ " + d + "$";
		createjs.Tween.get(e).to({
			alpha: 1
		}, 500);
		createjs.Tween.get(b).to({
			rotation: 110
		}, 500);
		setTimeout(function() {
			f.alpha = 0;
			f.visible = !1;
			if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrack.setVolume(SOUNDTRACK_VOLUME), c.stop();
			s_oGame.endBonus(d)
		}, 4E3)
	};
	this._init()
};