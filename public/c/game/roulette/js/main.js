var s_iOffsetX = 0,
	s_iOffsetY = 0,
	s_fInverseScaling = 0;
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
	for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;) if (navigator.platform === a.pop()) return s_bIsIphone = !0;
	return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
	var e = a.toLowerCase(),
		f = window.document,
		d = f.documentElement;
	if (void 0 === window["inner" + a]) a = d["client" + a];
	else if (window["inner" + a] != d["client" + a]) {
		var b = f.createElement("body");
		b.id = "vpw-test-b";
		b.style.cssText = "overflow:scroll";
		var l = f.createElement("div");
		l.id = "vpw-test-d";
		l.style.cssText = "position:absolute;top:-1000px";
		l.innerHTML = "<style>@media(" + e + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
		b.appendChild(l);
		d.insertBefore(b, f.head);
		a = 7 == l["offset" + a] ? d["client" + a] : window["inner" + a];
		d.removeChild(b)
	} else a = window["inner" + a];
	return a
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
		var e = getSize("Width");
		s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH);
		var f = CANVAS_WIDTH * s_iScaleFactor,
			d = CANVAS_HEIGHT * s_iScaleFactor,
			b;
		d < a ? (b = a - d, d += b, f += CANVAS_WIDTH / CANVAS_HEIGHT * b) : f < e && (b = e - f, f += b, d += CANVAS_HEIGHT / CANVAS_WIDTH * b);
		b = a / 2 - d / 2;
		var l = e / 2 - f / 2,
			k = CANVAS_WIDTH / f;
		if (l * k < -EDGEBOARD_X || b * k < -EDGEBOARD_Y) s_iScaleFactor = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), f = CANVAS_WIDTH * s_iScaleFactor, d = CANVAS_HEIGHT * s_iScaleFactor, b = (a - d) / 2, l = (e - f) / 2, k = CANVAS_WIDTH / f;
		s_fInverseScaling = k;
		s_iOffsetX = -1 * l * k;
		s_iOffsetY = -1 * b * k;
		0 <= b && (s_iOffsetY = 0);
		0 <= l && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bMobile && !s_bIsIphone ? ($("#canvas").css("width", f + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = f, s_oStage.canvas.height = d, s_oStage.scaleX = s_oStage.scaleY = Math.min(f / CANVAS_WIDTH, d / CANVAS_HEIGHT));
		0 > b ? ($("#canvas").css("top", b + "px"), s_iCanvasOffsetHeight = b) : ($("#canvas").css("top", "0px"), s_iCanvasOffsetHeight = 0);
		$("#canvas").css("left", l + "px");
		s_iCanvasResizeWidth = f;
		s_iCanvasResizeHeight = d;
		s_iCanvasOffsetWidth = l
	}
}

function createBitmap(a, e, f) {
	var d = new createjs.Bitmap(a),
		b = new createjs.Shape;
	e && f ? b.graphics.beginFill("#fff").drawRect(-e / 2, -f / 2, e, f) : b.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	d.hitArea = b;
	return d
}
function createSprite(a, e, f, d, b, l) {
	a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
	e = new createjs.Shape;
	e.graphics.beginFill("#000000").drawRect(-f, -d, b, l);
	a.hitArea = e;
	return a
}
function roundDecimal(a, e) {
	var f = Math.pow(10, e);
	return Math.round(f * a) / f
}

function randomFloatBetween(a, e, f) {
	"undefined" === typeof f && (f = 2);
	return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(f))
}
function shuffle(a) {
	for (var e = a.length, f, d; 0 !== e;) d = Math.floor(Math.random() * e), --e, f = a[e], a[e] = a[d], a[d] = f;
	return a
}
function formatTime(a) {
	a /= 1E3;
	var e = Math.floor(a / 60);
	a = parseFloat(a - 60 * e).toFixed(1);
	var f = "",
		f = 10 > e ? f + ("0" + e + ":") : f + (e + ":");
	return 10 > a ? f + ("0" + a) : f + a
}
function degreesToRadians(a) {
	return a * Math.PI / 180
}

function checkRectCollision(a, e) {
	var f, d;
	f = getBounds(a, .9);
	d = getBounds(e, .98);
	return calculateIntersection(f, d)
}
function calculateIntersection(a, e) {
	var f, d, b, l, k, h, g, m;
	f = a.x + (b = a.width / 2);
	d = a.y + (l = a.height / 2);
	k = e.x + (h = e.width / 2);
	g = e.y + (m = e.height / 2);
	f = Math.abs(f - k) - (b + h);
	d = Math.abs(d - g) - (l + m);
	return 0 > f && 0 > d ? (f = Math.min(Math.min(a.width, e.width), -f), d = Math.min(Math.min(a.height, e.height), -d), {
		x: Math.max(a.x, e.x),
		y: Math.max(a.y, e.y),
		width: f,
		height: d,
		rect1: a,
		rect2: e
	}) : null
}

function getBounds(a, e) {
	var f = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Container) {
		f.x2 = -Infinity;
		f.y2 = -Infinity;
		var d = a.children,
			b = d.length,
			l, k;
		for (k = 0; k < b; k++) l = getBounds(d[k], 1), l.x < f.x && (f.x = l.x), l.y < f.y && (f.y = l.y), l.x + l.width > f.x2 && (f.x2 = l.x + l.width), l.y + l.height > f.y2 && (f.y2 = l.y + l.height);
		Infinity == f.x && (f.x = 0);
		Infinity == f.y && (f.y = 0);
		Infinity == f.x2 && (f.x2 = 0);
		Infinity == f.y2 && (f.y2 = 0);
		f.width = f.x2 - f.x;
		f.height = f.y2 - f.y;
		delete f.x2;
		delete f.y2
	} else {
		var h, g;
		a instanceof createjs.Bitmap ? (b = a.sourceRect || a.image, k = b.width * e, h = b.height * e) : a instanceof createjs.Sprite ? a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image ? (b = a.spriteSheet.getFrame(a.currentFrame), k = b.rect.width, h = b.rect.height, d = b.regX, g = b.regY) : (f.x = a.x || 0, f.y = a.y || 0) : (f.x = a.x || 0, f.y = a.y || 0);
		d = d || 0;
		k = k || 0;
		g = g || 0;
		h = h || 0;
		f.regX = d;
		f.regY = g;
		b = a.localToGlobal(0 - d, 0 - g);
		l = a.localToGlobal(k - d, h - g);
		k = a.localToGlobal(k - d, 0 - g);
		d = a.localToGlobal(0 - d, h - g);
		f.x = Math.min(Math.min(Math.min(b.x, l.x), k.x), d.x);
		f.y = Math.min(Math.min(Math.min(b.y, l.y), k.y), d.y);
		f.width = Math.max(Math.max(Math.max(b.x, l.x), k.x), d.x) - f.x;
		f.height = Math.max(Math.max(Math.max(b.y, l.y), k.y), d.y) - f.y
	}
	return f
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
			3 == a.nodeType && (a = a.parentNode);
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", !0, !0);
			a.dispatchEvent(e)
		}
	}
};
(function() {
	function a(a) {
		var d = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in d ? document.body.className = d[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var e = "hidden";
	e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function playSound(a, e, f) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? createjs.Sound.play(a, {
		loop: f,
		volume: e
	}) : null
}
function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.stop()
}

function setVolume(a, e) {
	if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = e
}
function setMute(a, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(e)
}
function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
	for (var e = window.location.search.substring(1).split("&"), f = 0; f < e.length; f++) {
		var d = e[f].split("=");
		if (d[0] == a) return d[1]
	}
}

function CSpriteLibrary() {
	var a, e, f, d, b, l;
	this.init = function(k, h, g) {
		f = e = 0;
		d = k;
		b = h;
		l = g;
		a = {}
	};
	this.addSprite = function(b, h) {
		a.hasOwnProperty(b) || (a[b] = {
			szPath: h,
			oSprite: new Image
		}, e++)
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		b.call(l)
	};
	this._onSpriteLoaded = function() {
		d.call(l);
		++f === e && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
			this.oSpriteLibrary._onSpriteLoaded()
		}, a[b].oSprite.onerror = function() {
			s_oMain.onImageLoadError($(this).attr("src"))
		}, a[b].oSprite.src = a[b].szPath
	};
	this.getNumSprites = function() {
		return e
	}
}
var CANVAS_WIDTH = 1280,
	CANVAS_HEIGHT = 768,
	EDGEBOARD_X = 90,
	EDGEBOARD_Y = 95,
	FPS = 30,
	FPS_TIME = 1E3 / FPS,
	DISABLE_SOUND_MOBILE = !1,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	STATE_GAME_WAITING_FOR_BET = 0,
	STATE_GAME_SPINNING = 1,
	STATE_GAME_SHOW_WINNER = 2,
	STATE_DISTRIBUTE_FICHES = 3,
	ON_SHOW_BET_ON_TABLE = 0,
	ON_SHOW_ENLIGHT = 1,
	ON_HIDE_ENLIGHT = 2,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	ON_CONTROLLER_END = 6,
	ON_CONTROLLER_REMOVE = 7,
	ON_CONTROLLER_ROLL = 8,
	COLOR_RED = "red",
	COLOR_BLACK = "black",
	COLOR_ZERO = "zero",
	TOTAL_MONEY, NUM_FICHE_VALUES = 6,
	NUMBERS_TO_BET = 37,
	NUM_FICHES = 6,
	MIN_BET, MAX_BET, WIN_OCCURRENCE, TIME_WAITING_BET, TIME_SHOW_WINNER, TIME_FICHES_MOV = 1500,
	NUM_MASK_BALL_SPIN_FRAMES = 100,
	NUM_BALL_SPIN_FRAMES = 200,
	NUM_HAND_FOR_ADS, WIDTH_CELL_NUMBER, HEIGHT_CELL_NUMBER, ROW_HISTORY = 19,
	FONT1 = "arialbold",
	FONT2 = "plantagenet_cherokeeregular";

function CRouletteSettings() {
	var a, e, f, d, b;
	this._init = function() {
		var b = s_oSpriteLibrary.getSprite("hit_area_number");
		WIDTH_CELL_NUMBER = b.width;
		HEIGHT_CELL_NUMBER = b.height;
		this._initAttachFiches();
		a = [.1, 1, 5, 10, 25, 100];
		f = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
		e = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
		d = [
			[]
		];
		d[0][0] = 70;
		d[0][1] = 8;
		d[0][2] = 54;
		d[0][3] = 76;
		d[0][4] = 59;
		d[0][5] = 19;
		d[0][6] = 43;
		d[0][7] = 86;
		d[0][8] = 27;
		d[0][9] = 96;
		d[0][10] = 21;
		d[0][11] = 32;
		d[0][12] = 81;
		d[0][13] = 38;
		d[0][14] = 3;
		d[0][15] = 65;
		d[0][16] = 13;
		d[0][17] = 48;
		d[0][18] = 92;
		d[0][19] = 62;
		d[0][20] = 5;
		d[0][21] = 57;
		d[0][22] = 95;
		d[0][23] = 24;
		d[0][24] = 16;
		d[0][25] = 51;
		d[0][26] = 73;
		d[0][27] = 40;
		d[0][28] = 84;
		d[0][29] = 89;
		d[0][30] = 30;
		d[0][31] = 0;
		d[0][32] = 68;
		d[0][33] = 11;
		d[0][34] = 46;
		d[0][35] = 78;
		d[0][36] = 35
	};
	this._initAttachFiches = function() {
		b = [];
		b.bet_0 = {
			x: 53,
			y: 117
		};
		for (var a = 127, k = 196, h = 1; 37 > h; h++) b["bet_" + h] = {
			x: a,
			y: k
		}, 0 === h % 3 ? (a += WIDTH_CELL_NUMBER + 3, k = 196) : k -= HEIGHT_CELL_NUMBER + 3;
		b.bet_0_1 = {
			x: 97,
			y: 195
		};
		b.bet_0_2 = {
			x: 97,
			y: 120
		};
		b.bet_0_3 = {
			x: 97,
			y: 45
		};
		for (var a = 159, k = 194, g = 1; 34 > g; g++) b["bet_" + g + "_" + (g + 3)] = {
			x: a,
			y: k
		}, 0 === g % 3 ? (a += WIDTH_CELL_NUMBER + 3, k = 194) : k -= HEIGHT_CELL_NUMBER + 3;
		a = 128;
		k = 157;
		for (g = h = 1; 25 > g; g++) b["bet_" + h + "_" + (h + 1)] = {
			x: a,
			y: k
		}, 0 === g % 2 ? (a += WIDTH_CELL_NUMBER + 3, k = 157, h += 2) : (k -= HEIGHT_CELL_NUMBER + 3, h++);
		b.bet_0_1_2 = {
			x: 96,
			y: 158
		};
		b.bet_0_2_3 = {
			x: 96,
			y: 84
		};
		a = 128;
		k = 232;
		for (g = h = 1; 13 > g; g++) b["bet_" + h + "_" + (h + 1) + "_" + (h + 2)] = {
			x: a,
			y: k
		}, a += WIDTH_CELL_NUMBER + 3, h += 3;
		b.bet_0_1_2_3 = {
			x: 96,
			y: 232
		};
		k = a = 158;
		for (g = h = 1; 23 > g; g++) b["bet_" + h + "_" + (h + 1) + "_" + (h + 3) + "_" + (h + 4)] = {
			x: a,
			y: k
		}, 0 === g % 2 ? (a += WIDTH_CELL_NUMBER + 3, k = 157, h += 2) : (k -= HEIGHT_CELL_NUMBER + 3, h++);
		a = 158;
		k = 232;
		for (g = h = 1; 12 > g; g++) b["bet_" + h + "_" + (h + 1) + "_" + (h + 2) + "_" + (h + 3) + "_" + (h + 4) + "_" + (h + 5)] = {
			x: a,
			y: k
		}, h += 3, a += WIDTH_CELL_NUMBER + 3;
		b.col1 = {
			x: 872,
			y: 194
		};
		b.col2 = {
			x: 872,
			y: 120
		};
		b.col3 = {
			x: 872,
			y: 46
		};
		b.first12 = {
			x: 220,
			y: 289
		};
		b.second12 = {
			x: 469,
			y: 289
		};
		b.third12 = {
			x: 717,
			y: 289
		};
		b.first18 = {
			x: 159,
			y: 400
		};
		b.even = {
			x: 281,
			y: 400
		};
		b.black = {
			x: 409,
			y: 400
		};
		b.red = {
			x: 533,
			y: 400
		};
		b.odd = {
			x: 656,
			y: 400
		};
		b.second18 = {
			x: 778,
			y: 400
		};
		b.oDealerWin = {
			x: CANVAS_WIDTH / 2,
			y: -232
		};
		b.oReceiveWin = {
			x: CANVAS_WIDTH / 2,
			y: CANVAS_HEIGHT + 100
		}
	};
	this.generateFichesPileByIndex = function(b) {
		var k = [],
			h, g = a.length - 1,
			d = a[g];
		do {
			h = b % d;
			h = roundDecimal(h, 1);
			b = Math.floor(b / d);
			for (var c = 0; c < b; c++) k.push(this.getFicheIndexByValue(d));
			g--;
			d = a[g];
			b = h
		} while (0 < h && -1 < g);
		return k
	};
	this.getNumbersForButton = function(b) {
		var a;
		switch (b) {
		case "col1":
			a = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
			break;
		case "col2":
			a = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
			break;
		case "col3":
			a = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
			break;
		case "first12":
			a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			break;
		case "second12":
			a = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
			break;
		case "third12":
			a = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
			break;
		case "first18":
			a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
			break;
		case "second18":
			a = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
			break;
		case "even":
			a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
			break;
		case "black":
			a = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
			break;
		case "red":
			a = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
			break;
		case "odd":
			a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
			break;
		case "oBetVoisinsZero":
			a = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
			break;
		case "oBetTier":
			a = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
			break;
		case "oBetOrphelins":
			a = [1, 6, 9, 14, 17, 20, 31, 34]
		}
		return a
	};
	this.getBetMultiplierForButton = function(b) {
		var a;
		switch (b) {
		case "oBetFirstRow":
			a = 12;
			break;
		case "oBetSecondRow":
			a = 12;
			break;
		case "oBetThirdRow":
			a = 12;
			break;
		case "oBetFirst12":
			a = 12;
			break;
		case "oBetSecond12":
			a = 12;
			break;
		case "oBetThird12":
			a = 12;
			break;
		case "oBetFirst18":
			a = 18;
			break;
		case "oBetSecond18":
			a = 18;
			break;
		case "oBetEven":
			a = 18;
			break;
		case "oBetBlack":
			a = 18;
			break;
		case "oBetRed":
			a = 18;
			break;
		case "oBetOdd":
			a = 18;
			break;
		case "oBetVoisinsZero":
			a = 17;
			break;
		case "oBetTier":
			a = 12;
			break;
		case "oBetOrphelins":
			a = 8;
			break;
		case "oBetFinalsBet":
			a = 4
		}
		return a
	};
	this.getBetWinForButton = function(b) {
		var a;
		switch (b) {
		case "oBetFirstRow":
			a = 3;
			break;
		case "oBetSecondRow":
			a = 3;
			break;
		case "oBetThirdRow":
			a = 3;
			break;
		case "oBetFirst12":
			a = 3;
			break;
		case "oBetSecond12":
			a = 3;
			break;
		case "oBetThird12":
			a = 3;
			break;
		case "oBetFirst18":
			a = 2;
			break;
		case "oBetSecond18":
			a = 2;
			break;
		case "oBetEven":
			a = 2;
			break;
		case "oBetBlack":
			a = 2;
			break;
		case "oBetRed":
			a = 2;
			break;
		case "oBetOdd":
			a = 2;
			break;
		case "oBetVoisinsZero":
			a = 2;
			break;
		case "oBetTier":
			a = 3;
			break;
		case "oBetOrphelins":
			a = 4;
			break;
		case "oBetFinalsBet":
			a = 4
		}
		return a
	};
	this.getNumFichesPerBet = function(b) {
		var a;
		switch (b) {
		case "oBetVoisinsZero":
			a = 9;
			break;
		case "oBetTier":
			a = 6;
			break;
		case "oBetOrphelins":
			a = 5
		}
		return a
	};
	this.getFicheValues = function(b) {
		return a[b]
	};
	this.getFicheIndexByValue = function(b) {
		for (var d = 0, h = 0; h < a.length; h++) if (b === a[h]) {
			d = h;
			break
		}
		return d
	};
	this.getColorNumber = function(b) {
		var a;
		for (a = 0; a < f.length; a++) if (f[a] === b) return COLOR_BLACK;
		for (a = 0; a < e.length; a++) if (e[a] === b) return COLOR_RED;
		return COLOR_ZERO
	};
	this.getFrameForBallSpin = function(b, a) {
		return d[b][a]
	};
	this.getAttachOffset = function(a) {
		return b[a]
	};
	this._init()
}

function CFichesController(a) {
	var e, f, d, b, l, k;
	this._init = function(b) {
		k = b;
		this.reset()
	};
	this.reset = function() {
		this._removeAllFichesOnTable();
		e = [];
		f = [];
		d = [];
		b = [];
		l = []
	};
	this.setFicheOnTable = function(a, g, d) {
		this.addFicheOnTable(a, g, d);
		b.push({
			tag: "oBetSingle",
			num: 1
		})
	};
	this.addFicheOnTable = function(b, a, k) {
		void 0 === e[a] && (e[a] = 0);
		var c = s_oGameSettings.getFicheValues(b);
		e[a] += c;
		e[a] = roundDecimal(e[a], 1);
		c = s_oGameSettings.generateFichesPileByIndex(e[a]);
		c.sort(function(b, a) {
			return b - a
		});
		this._removeFichesPile(f[a]);
		f[a] = [];
		for (var l = s_oGameSettings.getAttachOffset(a), u = l.x, l = l.y, v = 0; v < c.length; v++) k.push(this._attachFichesPile(c[v], a, u, l)), l -= 5;
		d.push({
			index: a,
			value: b
		})
	};
	this._attachFichesPile = function(b, a, d, c) {
		b = new CFiche(d, c, b, k);
		f[a].push(b);
		l.push(b);
		return b
	};
	this.createPileForVoisinZero = function(a, g) {
		this.addFicheOnTable(a, "bet_0_2_3", g);
		this.addFicheOnTable(a, "bet_0_2_3", g);
		this.addFicheOnTable(a, "bet_4_7", g);
		this.addFicheOnTable(a, "bet_12_15", g);
		this.addFicheOnTable(a, "bet_18_21", g);
		this.addFicheOnTable(a, "bet_19_22", g);
		this.addFicheOnTable(a, "bet_25_26_28_29", g);
		this.addFicheOnTable(a, "bet_25_26_28_29", g);
		this.addFicheOnTable(a, "bet_32_35", g);
		b.push({
			tag: "oBetVoisinsZero",
			num: 9
		})
	};
	this.createPileForTier = function(a, g) {
		this.addFicheOnTable(a, "bet_5_8", g);
		this.addFicheOnTable(a, "bet_10_11", g);
		this.addFicheOnTable(a, "bet_13_16", g);
		this.addFicheOnTable(a, "bet_23_24", g);
		this.addFicheOnTable(a, "bet_27_30", g);
		this.addFicheOnTable(a, "bet_33_36", g);
		b.push({
			tag: "oBetTier",
			num: 6
		})
	};
	this.createPileForOrphelins = function(a, g) {
		this.addFicheOnTable(a, "bet_1", g);
		this.addFicheOnTable(a, "bet_6_9", g);
		this.addFicheOnTable(a, "bet_14_17", g);
		this.addFicheOnTable(a, "bet_17_20", g);
		this.addFicheOnTable(a, "bet_31_34", g);
		b.push({
			tag: "oBetOrphelins",
			num: 5
		})
	};
	this.createPileForMultipleNumbers = function(a, g, d) {
		for (var c = 0; c < g.length; c++) this.addFicheOnTable(a, "bet_" + g[c], d);
		b.push({
			tag: "oBetMultiple",
			num: g.length
		})
	};
	this._removeAllFichesOnTable = function() {
		if (l) for (var a = 0; a < l.length; a++) k.contains(l[a].getSprite()) && k.removeChild(l[a].getSprite())
	};
	this._removeFichesPile = function(a) {
		for (var b in a) k.removeChild(a[b].getSprite())
	};
	this.clearLastBet = function() {
		if (0 === b.length) return 0;
		for (var a = b.pop().num, g, k = 0; k < a; k++) {
			var c = d.pop();
			g = s_oGameSettings.getFicheValues(c.value);
			e[c.index] -= g;
			e[c.index] = roundDecimal(e[c.index], 1);
			var l = s_oGameSettings.generateFichesPileByIndex(e[c.index]);
			l.sort(function(a, b) {
				return a - b
			});
			this._removeFichesPile(f[c.index]);
			f[c.index] = [];
			for (var u = s_oGameSettings.getAttachOffset(c.index), v = u.x, u = u.y, r = 0; r < l.length; r++) this._attachFichesPile(l[r], c.index, v, u), u -= 5
		}
		return g * a
	};
	this.clearAllBets = function() {
		for (var a = d.length, b = 0; b < a; b++) this.clearLastBet()
	};
	this._init(a)
}
TEXT_MONEY = "MONEY";
TEXT_CUR_BET = "CUR BET";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MIN_BET = "MIN BET";
TEXT_MAX_BET = "MAX BET";
TEXT_SPIN = "SPIN";
TEXT_EXIT = "EXIT";
TEXT_RECHARGE = "RECHARGE";
TEXT_VOISINS_ZERO = "VOISINS DU ZERO";
TEXT_TIER = "TIER";
TEXT_ORPHELINS = "ORPHELINS";
TEXT_NEIGHBORS = "NEIGHBORS";
TEXT_FINALSBET = "FINALS BET";
TEXT_REBET = "REBET";
TEXT_WIN = "WIN";
TEXT_HISTORY = "HISTORY";
TEXT_YOU_WIN = "YOU WON";
TEXT_YOU_LOSE = "YOU LOST";
TEXT_CURRENCY = "$";
TEXT_ERROR_NO_MONEY_MSG = "NOT ENOUGH MONEY FOR THIS BET!!";
TEXT_ERROR_MAX_BET_REACHED = "MAX BET REACHED!!";
TEXT_ERROR_MIN_BET = "YOU BET IS LOWER THAN MINIMUM BET!!";
TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
TEXT_RECHARGE_MSG = "PLEASE CLICK RECHARGE BUTTON TO PLAY AGAIN";
var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
	TEXT_LINK = "WWW.CODETHISLAB.COM";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_SHARE_1 = "You collected <strong>";
TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_3 = "My score is ";
TEXT_SHARE_4 = " points! Can you do better?";

function CPreloader() {
	var a, e, f, d, b, l;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		l = new createjs.Container;
		s_oStage.addChild(l)
	};
	this.unload = function() {
		l.removeAllChildren()
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		l.addChild(k);
		d = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
		d.x = 400;
		d.y = CANVAS_HEIGHT - 140;
		l.addChild(d);
		a = 476;
		b = new createjs.Shape;
		b.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, 1, 30);
		l.addChild(b);
		d.mask = b;
		e = new createjs.Text("0%", "30px " + FONT1, "#fff");
		e.x = 450;
		e.y = CANVAS_HEIGHT - 140;
		e.textAlign = "center";
		e.textBaseline = "middle";
		l.addChild(e);
		f = new createjs.Text("0%", "30px " + FONT2, "#fff");
		f.x = CANVAS_WIDTH + 200;
		f.y = CANVAS_HEIGHT + 140;
		f.textAlign = "center";
		f.textBaseline = "middle";
		l.addChild(f)
	};
	this.refreshLoader = function(d) {
		e.text = d + "%";
		f.text = d + "%";
		d = Math.floor(d * a / 100);
		b.graphics.clear();
		b.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, d, 30)
	};
	this._init()
}

function CMain(a) {
	var e, f = 0,
		d = 0,
		b = STATE_LOADING,
		l, k, h;
	this.initContainer = function() {
		var a = document.getElementById("canvas");
		s_oStage = new createjs.Stage(a);
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && s_oStage.enableMouseOver(20);
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.setFPS(FPS);
		createjs.Ticker.addEventListener("tick", this._update);
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		k = new CPreloader
	};
	this.soundLoaded = function() {
		f++;
		f === d && (k.unload(), this.gotoMenu())
	};
	this._initSounds = function() {
		createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/chip.ogg", "chip"), createjs.Sound.registerSound("./sounds/click.ogg", "click"), createjs.Sound.registerSound("./sounds/fiche_collect.ogg", "fiche_collect"), createjs.Sound.registerSound("./sounds/fiche_select.ogg", "fiche_select"), createjs.Sound.registerSound("./sounds/wheel_sound.ogg", "wheel_sound"), createjs.Sound.registerSound("./sounds/win.ogg", "win"), createjs.Sound.registerSound("./sounds/lose.ogg", "lose")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/chip.mp3", "chip"), createjs.Sound.registerSound("./sounds/click.mp3", "click"), createjs.Sound.registerSound("./sounds/fiche_collect.mp3", "fiche_collect"), createjs.Sound.registerSound("./sounds/fiche_select.mp3", "fiche_select"), createjs.Sound.registerSound("./sounds/wheel_sound.mp3", "wheel_sound"), createjs.Sound.registerSound("./sounds/win.mp3", "win"), createjs.Sound.registerSound("./sounds/lose.mp3", "lose")), d += 5)
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("hit_area_0", "./sprites/hit_area_0.png");
		s_oSpriteLibrary.addSprite("hit_area_color", "./sprites/hit_area_color.png");
		s_oSpriteLibrary.addSprite("hit_area_horizontal", "./sprites/hit_area_horizontal.png");
		s_oSpriteLibrary.addSprite("hit_area_number", "./sprites/hit_area_number.png");
		s_oSpriteLibrary.addSprite("hit_area_couple_horizontal", "./sprites/hit_area_couple_horizontal.png");
		s_oSpriteLibrary.addSprite("hit_area_couple_vertical", "./sprites/hit_area_couple_vertical.png");
		s_oSpriteLibrary.addSprite("hit_area_small", "./sprites/hit_area_small.png");
		s_oSpriteLibrary.addSprite("hit_area_horizontal_half", "./sprites/hit_area_horizontal_half.png");
		s_oSpriteLibrary.addSprite("chip_box", "./sprites/chip_box.png");
		s_oSpriteLibrary.addSprite("but_bets", "./sprites/but_bets.png");
		s_oSpriteLibrary.addSprite("but_bg", "./sprites/but_bg.png");
		s_oSpriteLibrary.addSprite("but_clear_all", "./sprites/but_clear_all.png");
		s_oSpriteLibrary.addSprite("but_clear_last", "./sprites/but_clear_last.png");
		s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("history_bg", "./sprites/history_bg.png");
		s_oSpriteLibrary.addSprite("show_number_panel", "./sprites/show_number_panel.png");
		s_oSpriteLibrary.addSprite("show_number_bg", "./sprites/show_number_bg.png");
		s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
		s_oSpriteLibrary.addSprite("enlight_0", "./sprites/enlight_0.png");
		s_oSpriteLibrary.addSprite("enlight_color", "./sprites/enlight_color.png");
		s_oSpriteLibrary.addSprite("enlight_horizontal", "./sprites/enlight_horizontal.png");
		s_oSpriteLibrary.addSprite("enlight_number", "./sprites/enlight_number.png");
		s_oSpriteLibrary.addSprite("enlight_horizontal_half", "./sprites/enlight_horizontal_half.png");
		s_oSpriteLibrary.addSprite("select_fiche", "./sprites/select_fiche.png");
		s_oSpriteLibrary.addSprite("spin_but", "./sprites/spin_but.png");
		s_oSpriteLibrary.addSprite("placeholder", "./sprites/placeholder.png");
		s_oSpriteLibrary.addSprite("circle_red", "./sprites/circle_red.png");
		s_oSpriteLibrary.addSprite("circle_green", "./sprites/circle_green.png");
		s_oSpriteLibrary.addSprite("circle_black", "./sprites/circle_black.png");
		s_oSpriteLibrary.addSprite("final_bet_bg", "./sprites/final_bet_bg.png");
		s_oSpriteLibrary.addSprite("neighbor_bg", "./sprites/neighbor_bg.jpg");
		s_oSpriteLibrary.addSprite("neighbor_enlight", "./sprites/neighbor_enlight.png");
		s_oSpriteLibrary.addSprite("hitarea_neighbor", "./sprites/hitarea_neighbor.png");
		s_oSpriteLibrary.addSprite("bg_wheel", "./sprites/bg_wheel.jpg");
		s_oSpriteLibrary.addSprite("logo_game_0", "./sprites/logo_game_0.png");
		s_oSpriteLibrary.addSprite("board_roulette", "./sprites/board_roulette.jpg");
		for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
		for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++) s_oSpriteLibrary.addSprite("wheel_handle_" + a, "./sprites/mask_ball_spin/wheel_handle_" + a + ".png");
		for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++) s_oSpriteLibrary.addSprite("wheel_numbers_" + a, "./sprites/wheel_anim/wheel_numbers_" + a + ".png");
		d += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		f++;
		k.refreshLoader(Math.floor(f / d * 100));
		f === d && (k.unload(), this.gotoMenu())
	};
	this._onAllImagesLoaded = function() {};
	this.onAllPreloaderImagesLoaded = function() {
		this._loadImages()
	};
	this.onImageLoadError = function(a) {};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		e = !0
	};
	this.gotoMenu = function() {
		new CMenu;
		b = STATE_MENU
	};
	this.gotoGame = function() {
		h = new CGame(l);
		b = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		b = STATE_HELP
	};
	this.stopUpdate = function() {
		e = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block")
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none")
	};
	this._update = function(a) {
		if (!1 !== e) {
			var d = (new Date).getTime();
			s_iTimeElaps = d - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = d;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			b === STATE_GAME && h.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	l = a;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oMain = null,
	s_oSpriteLibrary;

function CTextButton(a, e, f, d, b, l, k, h) {
	var g, m, c, p, u, v, r, x, n, q;
	this._init = function(a, b, d, h, e, k, f, l) {
		g = !1;
		p = [];
		u = [];
		q = createBitmap(d);
		m = d.width;
		c = d.height;
		var F = Math.ceil(f / 20);
		x = new createjs.Text(h, f + "px " + e, "#000000");
		var v = x.getBounds();
		x.textAlign = "center";
		x.textBaseline = "alphabetic";
		x.x = d.width / 2 + F;
		x.y = Math.floor(d.height / 2) + v.height / 3 + F;
		n = new createjs.Text(h, f + "px " + e, k);
		n.textAlign = "center";
		n.textBaseline = "alphabetic";
		n.x = d.width / 2;
		n.y = Math.floor(d.height / 2) + v.height / 3;
		r = new createjs.Container;
		r.x = a;
		r.y = b;
		r.regX = d.width / 2;
		r.regY = d.height / 2;
		s_bMobile || (r.cursor = "pointer");
		r.addChild(q, x, n);
		!1 !== l && s_oStage.addChild(r);
		this._initListener()
	};
	this.unload = function() {
		r.off("mousedown");
		r.off("pressup");
		s_oStage.removeChild(r)
	};
	this.setVisible = function(a) {
		r.visible = a
	};
	this.setAlign = function(a) {
		n.textAlign = a;
		x.textAlign = a
	};
	this.enable = function() {
		g = !1;
		q.filters = [];
		q.cache(0, 0, m, c)
	};
	this.disable = function() {
		g = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		q.filters = [new createjs.ColorMatrixFilter(a)];
		q.cache(0, 0, m, c)
	};
	this._initListener = function() {
		r.on("mousedown", this.buttonDown);
		r.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		p[a] = b;
		u[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		p[a] = b;
		u[a] = c;
		v = d
	};
	this.buttonRelease = function() {
		g || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click"), r.scaleX = 1, r.scaleY = 1, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(u[ON_MOUSE_UP], v))
	};
	this.buttonDown = function() {
		g || (r.scaleX = .9, r.scaleY = .9, p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, b) {
		r.x = a;
		r.y = b
	};
	this.changeText = function(a) {
		n.text = a;
		x.text = a
	};
	this.setX = function(a) {
		r.x = a
	};
	this.setY = function(a) {
		r.y = a
	};
	this.getButtonImage = function() {
		return r
	};
	this.getX = function() {
		return r.x
	};
	this.getY = function() {
		return r.y
	};
	this.getSprite = function() {
		return r
	};
	this._init(a, e, f, d, b, l, k, h);
	return this
}

function CGfxButton(a, e, f, d) {
	var b, l, k, h, g, m, c, p;
	this._init = function(a, d, e) {
		b = !1;
		h = [];
		g = [];
		c = createBitmap(e);
		l = e.width;
		k = e.height;
		c.x = a;
		c.y = d;
		c.regX = e.width / 2;
		c.regY = e.height / 2;
		s_bMobile || (c.cursor = "pointer");
		p.addChild(c);
		this._initListener()
	};
	this.unload = function() {
		c.off("mousedown", this.buttonDown);
		c.off("pressup", this.buttonRelease);
		!1 === s_bMobile && (c.off("rollover", this.mouseOver), c.off("rollout", this.mouseOut));
		p.removeChild(c)
	};
	this.setVisible = function(a) {
		c.visible = a
	};
	this.enable = function() {
		b = !1;
		c.filters = [];
		c.cache(0, 0, l, k)
	};
	this.disable = function() {
		b = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		c.filters = [new createjs.ColorMatrixFilter(a)];
		c.cache(0, 0, l, k)
	};
	this._initListener = function() {
		c.on("mousedown", this.buttonDown);
		c.on("pressup", this.buttonRelease);
		!1 === s_bMobile && (c.on("rollover", this.mouseOver), c.on("rollout", this.mouseOut))
	};
	this.addEventListener = function(a, b, c) {
		h[a] = b;
		g[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		h[a] = b;
		g[a] = c;
		m = d
	};
	this.buttonRelease = function() {
		b || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click"), c.scaleX = 1, c.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP], m))
	};
	this.buttonDown = function() {
		b || (c.scaleX = .9, c.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], m))
	};
	this.mouseOver = function() {
		h[ON_MOUSE_OVER] && h[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], m)
	};
	this.mouseOut = function() {
		h[ON_MOUSE_OUT] && h[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], m)
	};
	this.setPosition = function(a, b) {
		c.x = a;
		c.y = b
	};
	this.rotate = function(a) {
		c.rotation = a
	};
	this.setX = function(a) {
		c.x = a
	};
	this.setY = function(a) {
		c.y = a
	};
	this.getButtonImage = function() {
		return c
	};
	this.getX = function() {
		return c.x
	};
	this.getY = function() {
		return c.y
	};
	p = d;
	this._init(a, e, f);
	return this
}

function CFicheBut(a, e, f) {
	var d, b, l, k, h, g, m = [],
		c, p, u;
	this._init = function(a, e, f) {
		b = !1;
		p = new createjs.Container;
		s_oStage.addChild(p);
		d = !1;
		h = [];
		g = [];
		c = createBitmap(f);
		c.x = a;
		c.y = e;
		c.regX = f.width / 2;
		c.regY = f.height / 2;
		s_bMobile || (c.cursor = "pointer");
		p.addChild(c);
		l = f.width;
		k = f.height;
		f = s_oSpriteLibrary.getSprite("select_fiche");
		u = createBitmap(f);
		u.x = a - 2;
		u.y = e - 2;
		u.regX = f.width / 2;
		u.regY = f.height / 2;
		p.addChild(u);
		u.visible = d;
		this._initListener()
	};
	this.unload = function() {
		c.off("mousedown", this.buttonDown);
		c.off("pressup", this.buttonRelease);
		s_oStage.removeChild(p)
	};
	this.select = function() {
		d = !0;
		u.visible = d
	};
	this.deselect = function() {
		d = !1;
		u.visible = d
	};
	this.enable = function() {
		b = !1;
		c.filters = [];
		c.cache(0, 0, l, k)
	};
	this.disable = function() {
		b = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-90);
		c.filters = [new createjs.ColorMatrixFilter(a)];
		c.cache(0, 0, l, k)
	};
	this.setVisible = function(a) {
		c.visible = a
	};
	this._initListener = function() {
		c.on("mousedown", this.buttonDown);
		c.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		h[a] = b;
		g[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		h[a] = b;
		g[a] = c;
		m = d
	};
	this.buttonRelease = function() {
		b || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click"), c.scaleX = 1, c.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP], m), d = !d, u.visible = d)
	};
	this.buttonDown = function() {
		b || (c.scaleX = .9, c.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], m))
	};
	this.setPosition = function(a, b) {
		c.x = a;
		c.y = b
	};
	this.setX = function(a) {
		c.x = a
	};
	this.setY = function(a) {
		c.y = a
	};
	this.getButtonImage = function() {
		return c
	};
	this.getX = function() {
		return c.x
	};
	this.getY = function() {
		return c.y
	};
	this._init(a, e, f)
}

function CBetTableButton(a, e, f, d, b, l) {
	var k, h, g, m, c, p, u, v, r;
	this._init = function(a, b, c, d, w, e) {
		k = e;
		u = d;
		h = [];
		g = [];
		r = w;
		m = createBitmap(c);
		m.x = a;
		m.y = b;
		m.regX = c.width / 2;
		m.regY = c.height / 2;
		s_bMobile || (m.cursor = "pointer");
		this._initListener();
		r.addChild(m);
		v = [];
		v = u.split("_");
		1 < v.length ? v.splice(0, 1) : this._assignNumber();
		this._assignBetMultiplier()
	};
	this.unload = function() {
		m.off("mousedown", this.buttonDown);
		m.off("pressup", this.buttonRelease);
		m.off("rollover", this.mouseOver);
		m.off("rollout", this.mouseOut);
		r.removeChild(m)
	};
	this.setVisible = function(a) {
		m.visible = a
	};
	this._assignNumber = function() {
		v = s_oGameSettings.getNumbersForButton(u)
	};
	this._assignBetMultiplier = function() {
		switch (v.length) {
		case 0:
			c = s_oGameSettings.getBetMultiplierForButton(u);
			p = s_oGameSettings.getBetWinForButton(u);
			break;
		default:
			c = v.length, p = Math.floor(36 / v.length)
		}
	};
	this._initListener = function() {
		m.on("mousedown", this.buttonDown);
		m.on("pressup", this.buttonRelease);
		m.on("rollover", this.mouseOver);
		m.on("rollout", this.mouseOut)
	};
	this.addEventListener = function(a, b, c) {
		h[a] = b;
		g[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		h[a] = b;
		g[a] = c
	};
	this.buttonRelease = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but");
		h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP], {
			numbers: v,
			bet_mult: c,
			bet_win: p,
			name: u,
			num_fiches: 1
		}, !1)
	};
	this.buttonDown = function() {
		h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], {
			button: u,
			numbers: v,
			bet_mult: c,
			bet_win: p,
			num_fiches: 1
		}, !1)
	};
	this.mouseOver = function() {
		h[ON_MOUSE_OVER] && (k ? h[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], {
			numbers: v,
			enlight: u
		}) : h[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], {
			numbers: v
		}))
	};
	this.mouseOut = function() {
		h[ON_MOUSE_OUT] && (k ? h[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], {
			numbers: v,
			enlight: u
		}) : h[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], {
			numbers: v
		}))
	};
	this.setPosition = function(a, b) {
		m.x = a;
		m.y = b
	};
	this.setX = function(a) {
		m.x = a
	};
	this.setY = function(a) {
		m.y = a
	};
	this.rotate = function(a) {
		m.rotation = a
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
	this._init(a, e, f, d, b, l)
}

function CBetTextButton(a, e, f, d, b, l, k, h) {
	var g, m, c, p, u, v, r, x, n, q, t, w, y, A;
	this._init = function(a, b, d, h, e, f, k, l) {
		g = !1;
		n = [];
		q = [];
		A = createBitmap(d);
		m = d.width;
		c = d.height;
		var G = Math.ceil(k / 20);
		w = new createjs.Text(h, k + "px " + e, "#000000");
		w.textAlign = "center";
		w.lineWidth = .8 * m;
		var E = w.getBounds();
		w.x = d.width / 2 + G;
		w.y = (d.height - E.height) / 2 + G;
		y = new createjs.Text(h, k + "px " + e, f);
		y.textAlign = "center";
		y.lineWidth = .8 * m;
		E = y.getBounds();
		y.x = d.width / 2;
		y.y = (d.height - E.height) / 2;
		t = new createjs.Container;
		t.x = a;
		t.y = b;
		t.regX = d.width / 2;
		t.regY = d.height / 2;
		s_bMobile || (t.cursor = "pointer");
		t.addChild(A, w, y);
		s_oStage.addChild(t);
		this._initListener();
		r = l;
		x = [];
		x = l.split("_");
		1 < x.length ? x.splice(0, 1) : this._assignNumber(l);
		p = s_oGameSettings.getBetMultiplierForButton(l);
		u = s_oGameSettings.getBetWinForButton(l);
		v = s_oGameSettings.getNumFichesPerBet(l)
	};
	this._assignNumber = function(a) {
		x = s_oGameSettings.getNumbersForButton(a)
	};
	this.unload = function() {
		t.off("mousedown");
		t.off("pressup");
		s_oStage.removeChild(t)
	};
	this.setVisible = function(a) {
		t.visible = a
	};
	this.enable = function() {
		g = !1;
		A.filters = [];
		A.cache(0, 0, m, c)
	};
	this.disable = function() {
		g = !0;
		var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
		A.filters = [new createjs.ColorMatrixFilter(a)];
		A.cache(0, 0, m, c)
	};
	this._initListener = function() {
		oParent = this;
		t.on("mousedown", this.buttonDown);
		t.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		n[a] = b;
		q[a] = c
	};
	this.buttonRelease = function() {
		g || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"), t.scaleX = 1, t.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(q[ON_MOUSE_UP], {
			name: r,
			numbers: x,
			bet_mult: p,
			bet_win: u,
			num_fiches: v
		}, !1))
	};
	this.buttonDown = function() {
		g || (t.scaleX = .9, t.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]))
	};
	this.setPosition = function(a, b) {
		t.x = a;
		t.y = b
	};
	this.changeText = function(a) {
		y.text = a;
		w.text = a
	};
	this.setX = function(a) {
		t.x = a
	};
	this.setY = function(a) {
		t.y = a
	};
	this.getButtonImage = function() {
		return t
	};
	this.getX = function() {
		return t.x
	};
	this.getY = function() {
		return t.y
	};
	this._init(a, e, f, d, b, l, k, h);
	return this
}

function CToggle(a, e, f) {
	var d, b, l;
	this._init = function(a, h, g) {
		d = [];
		b = [];
		var e = new createjs.SpriteSheet({
			images: [g],
			frames: {
				width: g.width / 2,
				height: g.height,
				regX: g.width / 2 / 2,
				regY: g.height / 2
			},
			animations: {
				on: [0, 1],
				off: [1, 2]
			}
		});
		l = s_bAudioActive ? createSprite(e, "on", g.width / 2 / 2, g.height / 2, g.width / 2, g.height) : createSprite(e, "off", g.width / 2 / 2, g.height / 2, g.width / 2, g.height);
		l.x = a;
		l.y = h;
		l.stop();
		s_bMobile || (l.cursor = "pointer");
		s_oStage.addChild(l);
		this._initListener()
	};
	this.unload = function() {
		l.off("mousedown", this.buttonDown);
		l.off("pressup", this.buttonRelease);
		s_oStage.removeChild(l)
	};
	this._initListener = function() {
		l.on("mousedown", this.buttonDown);
		l.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, h, g) {
		d[a] = h;
		b[a] = g
	};
	this.buttonRelease = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click");
		l.scaleX = 1;
		l.scaleY = 1;
		(s_bAudioActive = !s_bAudioActive) ? l.gotoAndStop("on") : l.gotoAndStop("off");
		d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(b[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		l.scaleX = .9;
		l.scaleY = .9;
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(b[ON_MOUSE_DOWN])
	};
	this.setPosition = function(a, b) {
		l.x = a;
		l.y = b
	};
	this._init(a, e, f)
}

function CMenu() {
	var a, e, f, d, b, l, k, h, g, m, c;
	this._init = function() {
		k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(k);
		var p = s_oSpriteLibrary.getSprite("but_play");
		f = CANVAS_WIDTH / 2;
		d = CANVAS_HEIGHT - 110;
		h = new CGfxButton(f, d, p, s_oStage);
		h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		p = s_oSpriteLibrary.getSprite("but_credits");
		a = CANVAS_WIDTH - p.height / 2 - 10;
		e = p.height / 2 + 10;
		g = new CGfxButton(a, e, p, s_oStage);
		g.addEventListener(ON_MOUSE_UP, this._onCredits, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), b = a - p.width / 2 - 10, l = p.height / 2 + 10, m = new CToggle(b, l, p), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		c = new createjs.Shape;
		c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(c);
		createjs.Tween.get(c).to({
			alpha: 0
		}, 400).call(function() {
			c.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.refreshButtonPos = function(c, f) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || m.setPosition(b - c, f + l);
		g.setPosition(a - c, f + e);
		h.setPosition(d, d - f)
	};
	this.unload = function() {
		h.unload();
		h = null;
		g.unload();
		g = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
		s_oStage.removeChild(k);
		k = null;
		s_oStage.removeChild(c);
		s_oMenu = c = null
	};
	this._onButPlayRelease = function() {
		this.unload();
		s_oMain.gotoGame();
		$(s_oMain).trigger("start_session")
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	this._onCredits = function() {
		new CCreditsPanel
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	var e = !1,
		f, d, b, l, k, h, g, m, c, p, u, v, r, x, n, q, t, w, y, A, C, z, B, D;
	this._init = function() {
		s_oTweenController = new CTweenController;
		s_oGameSettings = new CRouletteSettings;
		n = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStage.addChild(n);
		y = new CTableController;
		y.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
		y.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
		y.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
		g = 0;
		d = -1;
		b = 37;
		m = [];
		c = [];
		p = [];
		r = [];
		q = new CSeat;
		w = new CInterface;
		z = new CFinalBetPanel(816, 564);
		C = new CWheelAnim(0, 0);
		B = new CNeighborsPanel(q.getCredit());
		D = new CGameOver;
		A = new CMsgBox;
		u = [];
		l = 0;
		this._onSitDown();
		e = !0
	};
	this.unload = function() {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.stop();
		w.unload();
		y.unload();
		A.unload();
		z.unload();
		B.unload();
		D.unload();
		s_oStage.removeAllChildren()
	};
	this._setState = function(a) {
		d = a;
		switch (a) {
		case STATE_GAME_WAITING_FOR_BET:
			w.enableBetFiches(), w.setCurBet(0), w.hideBlock()
		}
	};
	this._resetTable = function() {
		l = 0;
		b = 37;
		m = [];
		c = [];
		p = [];
		null !== t && (y.getContainer().removeChild(t), t = null);
		q.reset();
		B.reset();.1 > q.getCredit() ? (d = -1, w.hideBlock(), D.show()) : (w.enableRebet(), this._setState(STATE_GAME_WAITING_FOR_BET));
		g++;
		g === NUM_HAND_FOR_ADS && (g = 0, $(s_oMain).trigger("show_interlevel_ad"))
	};
	this._startRouletteAnim = function() {
		w.disableBetFiches();
		k = this._generateWinLoss();
		u.push(k);
		l = 0
	};
	this._startBallSpinAnim = function() {
		var a = q.getNumbersBetted()[k],
			a = roundDecimal(a.win, 2);
		C.startSpin(0, s_oGameSettings.getFrameForBallSpin(0, k), k, a)
	};
	this._generateWinLoss = function() {
		var a, c = q.getNumbersBetted(),
			d = q.getNumberSelected(),
			g = c[d[0][0]].win;
		h < g ? (d = 0, a = Math.floor(100 * Math.random())) : -1 === WIN_OCCURRENCE ? (d = 37 - b, a = Math.floor(38 * Math.random())) : (d = WIN_OCCURRENCE, a = Math.floor(100 * Math.random()));
		if (f = a >= d ? !1 : !0) {
			do a = Math.floor(Math.random() * c.length), g = c[a].win;
			while (0 === g)
		} else {
			d = [];
			for (a = 0; 37 > a; a++) d.push(a);
			do {
				if (0 === d.length) {
					a = Math.floor(Math.random() * c.length);
					break
				}
				a = Math.floor(Math.random() * d.length);
				g = c[a].win;
				d.splice(a, 1)
			} while (g > q.getCurBet())
		}
		return k = a
	};
	this._rouletteAnimEnded = function() {
		l = 0;
		this._setState(STATE_GAME_SHOW_WINNER);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || x.stop();
		var a = q.getNumbersBetted(),
			b = a[k],
			c = roundDecimal(b.win, 2);
		v = [];
		for (var d = 0; d < a.length; d++) {
			var g = a[d];
			if (0 < g.win) for (var e = 0; e < g.mc.length; e++) {
				v.push(g.mc[e]);
				var f = s_oGameSettings.getAttachOffset("oDealerWin");
				g.mc[e].setEndPoint(f.x, f.y)
			}
		}
		if (b.mc) for (a = 0; a < b.mc.length; a++) f = s_oGameSettings.getAttachOffset("oReceiveWin"), b.mc[a].setEndPoint(f.x, f.y);
		w.refreshNumExtracted(u);
		t = createBitmap(s_oSpriteLibrary.getSprite("placeholder"));
		0 === k ? (t.x = y.getEnlightX(k) + 22, t.y = y.getEnlightY(k) + 90) : (t.x = y.getEnlightX(k) + 8, t.y = y.getEnlightY(k) + 16);
		t.regX = 6;
		t.regY = 20;
		y.getContainer().addChild(t);
		q.showWin(c);
		h = 0 < c ? h - c : h + q.getCurBet();
		$(s_oMain).trigger("save_score", q.getCredit());
		w.refreshMoney(q.getCredit() - c, c)
	};
	this.showMsgBox = function(a) {
		A.show(a)
	};
	this.onRecharge = function() {
		q.recharge(TOTAL_MONEY);
		w.setMoney(q.getCredit());
		this._setState(STATE_GAME_WAITING_FOR_BET);
		D.hide();
		$(s_oMain).trigger("recharge")
	};
	this.onSpin = function() {
		if (B.isVisible()) B.onExit();
		0 !== q.getCurBet() && (q.getCurBet() < MIN_BET ? (A.show(TEXT_ERROR_MIN_BET), w.enableBetFiches(), w.enableSpin(!0)) : w.isBlockVisible() || (w.showBlock(), B.hide(), z.hide(), w.enableSpin(!1), this._startRouletteAnim(), this._startBallSpinAnim(), this._setState(STATE_GAME_SPINNING), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || (x = createjs.Sound.play("wheel_sound")))
	};
	this._onSitDown = function() {
		this._setState(STATE_GAME_WAITING_FOR_BET);
		q.setInfo(TOTAL_MONEY, y.getContainer());
		w.setMoney(TOTAL_MONEY);
		w.setCurBet(0)
	};
	this._onShowBetOnTable = function(a, d) {
		var g = a.button,
			h = a.numbers;
		b -= a.bet_mult;
		m.push(a.bet_mult);
		var e = a.bet_win,
			t = a.num_fiches,
			f, k;
		d ? f = a.value : (f = w.getCurFicheSelected(), 0 === c.length && (r = [], w.disableRebet()), r.push({
			button: a.button,
			numbers: a.numbers,
			bet_mult: a.bet_mult,
			bet_win: a.bet_win,
			num_fiches: a.num_fiches,
			neighbors: !1,
			value: f
		}));
		k = s_oGameSettings.getFicheValues(f);
		c.push(e);
		p.push(t);
		var l = q.getCurBet();
		if (0 > q.getCredit() - k * t) A.show(TEXT_ERROR_NO_MONEY_MSG), B.reset();
		else if (l + k * t > MAX_BET) A.show(TEXT_ERROR_MAX_BET_REACHED), B.reset();
		else {
			switch (g) {
			case "oBetVoisinsZero":
				q.createPileForVoisinZero(k, f, h, e, t);
				break;
			case "oBetTier":
				q.createPileForTier(k, f, h, e, t);
				break;
			case "oBetOrphelins":
				q.createPileForOrphelins(k, f, h, e, t);
				break;
			case "oBetFinalsBet":
				q.createPileForMultipleNumbers(k, f, h, e, t);
				break;
			default:
				q.addFicheOnTable(k, f, h, e, g)
			}
			w.setMoney(q.getCredit());
			w.setCurBet(q.getCurBet());
			w.enableSpin(!0);
			!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("chip")
		}
	};
	this._onShowBetOnTableFromNeighbors = function(a, d) {
		var g = a.numbers;
		b -= a.bet_mult;
		m.push(a.bet_mult);
		var h = a.bet_win,
			e = a.num_fiches;
		d || (0 === c.length && (r = [], w.disableRebet()), r.push({
			button: a.button,
			numbers: a.numbers,
			bet_mult: a.bet_mult,
			bet_win: a.bet_win,
			num_fiches: a.num_fiches,
			value: w.getCurFicheSelected(),
			num_clicked: a.num_clicked,
			neighbors: !0
		}));
		c.push(h);
		p.push(e);
		var t = s_oGameSettings.getFicheValues(a.value);
		t * e > q.getCredit() ? (A.show(TEXT_ERROR_NO_MONEY_MSG), B.reset()) : (q.createPileForMultipleNumbers(t, a.value, g, h, e), w.setMoney(q.getCredit()), w.setCurBet(q.getCurBet()), w.enableSpin(!0), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("chip"))
	};
	this._onShowEnlight = function(a) {
		for (var b = a.numbers, c = 0; c < b.length; c++) y.enlight("oEnlight_" + b[c]);
		(a = a.enlight) && y.enlight("oEnlight_" + a)
	};
	this._onHideEnlight = function(a) {
		for (var b = a.numbers, c = 0; c < b.length; c++) y.enlightOff("oEnlight_" + b[c]);
		(a = a.enlight) && y.enlightOff("oEnlight_" + a)
	};
	this.onClearLastBet = function() {
		if (0 < m.length) {
			var a = m.pop();
			b += a
		}
		0 === m.length && w.enableSpin(!1);
		q.clearLastBet(c.pop(), p.pop());
		w.setMoney(q.getCredit());
		w.setCurBet(q.getCurBet());
		B.clearLastBet();
		0 < r.length && r.pop()
	};
	this.onClearAllBets = function() {
		q.clearAllBets();
		w.setMoney(q.getCredit());
		w.setCurBet(q.getCurBet());
		w.enableSpin(!1);
		B.reset();
		r = [];
		b = 37
	};
	this.onRebet = function() {
		for (var a = 0; a < r.length; a++)!0 === r[a].neighbors ? B.rebet(r[a].num_clicked) : this._onShowBetOnTable(r[a], !0)
	};
	this.onFinalBetShown = function() {
		z.isVisible() ? z.hide() : z.show()
	};
	this.onOpenNeighbors = function() {
		z.hide();
		B.showPanel(w.getCurFicheSelected(), q.getCredit(), q.getCurBet())
	};
	this.onExit = function() {
		this.unload();
		s_oMain.gotoMenu();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("share_event", q.getCredit())
	};
	this._updateWaitingBet = function() {
		B.isVisible() || 0 === TIME_WAITING_BET || (l += s_iTimeElaps, l > TIME_WAITING_BET && (l = 0, this.onSpin()))
	};
	this._updateSpinning = function() {};
	this._updateShowWinner = function() {
		l += s_iTimeElaps;
		l > TIME_SHOW_WINNER && (l = 0, s_oGame._setState(STATE_DISTRIBUTE_FICHES))
	};
	this._updateDistributeFiches = function() {
		l += s_iTimeElaps;
		if (l > TIME_FICHES_MOV) l = 0, !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("fiche_collect"), this._resetTable();
		else for (var a = s_oTweenController.easeInOutCubic(l, 0, 1, TIME_FICHES_MOV), b = 0; b < v.length; b++) v[b].updatePos(a)
	};
	this.update = function() {
		if (!1 !== e) {
			switch (d) {
			case STATE_GAME_WAITING_FOR_BET:
				this._updateWaitingBet();
				break;
			case STATE_GAME_SPINNING:
				this._updateSpinning();
				break;
			case STATE_GAME_SHOW_WINNER:
				this._updateShowWinner();
				break;
			case STATE_DISTRIBUTE_FICHES:
				this._updateDistributeFiches()
			}
			C.isVisible() && C.update()
		}
	};
	s_oGame = this;
	TOTAL_MONEY = a.money;
	MIN_BET = a.min_bet;
	MAX_BET = a.max_bet;
	TIME_WAITING_BET = a.time_bet;
	TIME_SHOW_WINNER = a.time_winner;
	WIN_OCCURRENCE = a.win_occurrence;
	NUM_HAND_FOR_ADS = a.num_hand_before_ads;
	h = a.casino_cash;
	this._init()
}
var s_oGame, s_oTweenController, s_oGameSettings;

function CInterface() {
	var a, e, f, d, b, l, k, h, g, m, c, p, u, v, r, x, n, q, t, w, y, A, C;
	this._init = function() {
		var z = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
		z.x = 191;
		z.y = 93;
		s_oStage.addChild(z);
		z = new createjs.Text(TEXT_MONEY, "16px " + FONT1, "#fff");
		z.textAlign = "center";
		z.x = 272;
		z.y = 105;
		s_oStage.addChild(z);
		g = new createjs.Text("", "16px " + FONT1, "#fff");
		g.textAlign = "center";
		g.x = 272;
		g.y = 125;
		s_oStage.addChild(g);
		z = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
		z.x = 350;
		z.y = 93;
		s_oStage.addChild(z);
		z = new createjs.Text(TEXT_CUR_BET, "16px " + FONT1, "#fff");
		z.textAlign = "center";
		z.x = 432;
		z.y = 105;
		s_oStage.addChild(z);
		m = new createjs.Text("", "16px " + FONT1, "#fff");
		m.textAlign = "center";
		m.x = 432;
		m.y = 125;
		s_oStage.addChild(m);
		p = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
		p.x = 515;
		p.y = 100;
		s_oStage.addChild(p);
		c = new createjs.Text(TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET, "16px " + FONT1, "#fff");
		c.textAlign = "center";
		c.lineHeight = 20;
		c.x = p.x + 75;
		c.y = p.y + 5;
		s_oStage.addChild(c);
		z = createBitmap(s_oSpriteLibrary.getSprite("logo_game_0"));
		z.x = 740;
		z.y = 98;
		s_oStage.addChild(z);
		u = new CTextButton(1107, 641, s_oSpriteLibrary.getSprite("spin_but"), "  " + TEXT_SPIN, FONT1, "#fff", 19, s_oStage);
		u.setVisible(!1);
		u.setAlign("left");
		u.addEventListener(ON_MOUSE_UP, this._onSpin, this);
		w = new CBetTextButton(266, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_VOISINS_ZERO, FONT1, "#fff", 16, "oBetVoisinsZero");
		w.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
		t = new CBetTextButton(424, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_TIER, FONT1, "#fff", 16, "oBetTier");
		t.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
		q = new CBetTextButton(582, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_ORPHELINS, FONT1, "#fff", 16, "oBetOrphelins");
		q.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
		n = new CTextButton(740, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_NEIGHBORS, FONT1, "#fff", 16);
		n.addEventListener(ON_MOUSE_UP, this._onNeighborsPanel, this);
		x = new CTextButton(898, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_FINALSBET, FONT1, "#fff", 16);
		x.addEventListener(ON_MOUSE_UP, this._onFinalBetShow, this);
		y = new CGfxButton(1064, 586, s_oSpriteLibrary.getSprite("but_rebet"), s_oStage);
		y.disable();
		y.addEventListener(ON_MOUSE_UP, this._onRebet, this);
		v = new CGfxButton(1064, 526, s_oSpriteLibrary.getSprite("but_clear_last"), s_oStage);
		v.addEventListener(ON_MOUSE_UP, this._onClearLastBet, this);
		r = new CGfxButton(1064, 466, s_oSpriteLibrary.getSprite("but_clear_all"), s_oStage);
		r.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
		this._initFichesBut();
		this.disableBetFiches();
		A = new CHistory(1095, 158, s_oStage);
		b = 0;
		l[b].select();
		z = (new createjs.Graphics).beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		C = new createjs.Shape(z);
		C.on("click", function() {});
		C.visible = !1;
		s_oStage.addChild(C);
		z = s_oSpriteLibrary.getSprite("but_exit");
		a = CANVAS_WIDTH - z.width / 2 - 10;
		e = z.height / 2 + 10;
		k = new CGfxButton(a, e, z, s_oStage);
		k.addEventListener(ON_MOUSE_UP, this._onExit, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), f = a - z.width / 2 - 10, d = z.height / 2 + 10, h = new CToggle(f, d, z), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		k.unload();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.unload();
		u.unload();
		v.unload();
		r.unload();
		x.unload();
		n.unload();
		q.unload();
		t.unload();
		w.unload();
		y.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(b, c) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(f - b, d + c);
		k.setPosition(a - b, e + c)
	};
	this.hideBlock = function() {
		C.visible = !1
	};
	this.showBlock = function() {
		C.visible = !0
	};
	this.enableBetFiches = function() {
		for (var a = 0; a < NUM_FICHE_VALUES; a++) l[a].enable();
		v.enable();
		r.enable();
		x.enable();
		n.enable();
		q.enable();
		t.enable();
		w.enable()
	};
	this.disableBetFiches = function() {
		for (var a = 0; a < NUM_FICHE_VALUES; a++) l[a].disable();
		v.disable();
		r.disable();
		x.disable();
		n.disable();
		q.disable();
		t.disable();
		w.disable();
		y.disable()
	};
	this.enableRebet = function() {
		y.enable()
	};
	this.disableRebet = function() {
		y.disable()
	};
	this.deselectAllFiches = function() {
		for (var a = 0; a < NUM_FICHES; a++) l[a].deselect()
	};
	this.enableSpin = function(a) {
		u.setVisible(a)
	};
	this._initFichesBut = function() {
		var a = createBitmap(s_oSpriteLibrary.getSprite("chip_box"));
		a.x = 102;
		a.y = 100;
		s_oStage.addChild(a);
		a = 150;
		l = [];
		for (var b = 0; b < NUM_FICHES; b++) {
			var c = s_oSpriteLibrary.getSprite("fiche_" + b);
			l[b] = new CFicheBut(142, a, c);
			l[b].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheSelected, this, [b]);
			a += c.height + 25
		}
	};
	this.refreshTime = function(a) {
		formatTime(a)
	};
	this.setMoney = function(a) {
		g.text = a.toFixed(2) + TEXT_CURRENCY
	};
	this.setCurBet = function(a) {
		m.text = a.toFixed(2) + TEXT_CURRENCY
	};
	this.refreshMoney = function(a, b) {
		new CRollingTextController(g, null, a, parseFloat(b), 4E3, EASE_LINEAR, TEXT_CURRENCY)
	};
	this.refreshNumExtracted = function(a) {
		var b = a.length - 1,
			c = -1;
		a.length > ROW_HISTORY - 1 && (c = b - ROW_HISTORY);
		for (var d = 0; b > c; b--) {
			switch (s_oGameSettings.getColorNumber(a[b])) {
			case COLOR_BLACK:
				A.showBlack(d, a[b]);
				break;
			case COLOR_RED:
				A.showRed(d, a[b]);
				break;
			case COLOR_ZERO:
				A.showGreen(d, a[b])
			}
			d++
		}
	};
	this.gameOver = function() {};
	this._onBetRelease = function(a) {
		var b = a.numbers,
			c = a.bet_mult,
			d = a.bet_win;
		null !== b && s_oGame._onShowBetOnTable({
			button: a.name,
			numbers: b,
			bet_mult: c,
			bet_win: d,
			num_fiches: a.num_fiches
		}, !1)
	};
	this._onFicheSelected = function(a) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("fiche_select");
		this.deselectAllFiches();
		a = a[0];
		for (var c = 0; c < NUM_FICHE_VALUES; c++) c === a && (b = c)
	};
	this._onSpin = function() {
		this.disableBetFiches();
		this.enableSpin(!1);
		s_oGame.onSpin()
	};
	this._onClearLastBet = function() {
		s_oGame.onClearLastBet()
	};
	this._onClearAllBet = function() {
		s_oGame.onClearAllBets()
	};
	this._onFinalBetShow = function() {
		s_oGame.onFinalBetShown()
	};
	this._onNeighborsPanel = function() {
		s_oGame.onOpenNeighbors()
	};
	this._onRebet = function() {
		y.disable();
		s_oGame.onRebet()
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._onAudioToggle = function() {
		createjs.Sound.setMute(!s_bAudioActive)
	};
	this.getCurFicheSelected = function() {
		return b
	};
	this.isBlockVisible = function() {
		return C.visible
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CMsgBox() {
	var a, e, f, d;
	this._init = function() {
		a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		a.on("click", function() {});
		f = new createjs.Text("", "24px " + FONT1, "#000");
		f.x = CANVAS_WIDTH / 2 + 2;
		f.y = CANVAS_HEIGHT / 2 - 28;
		f.textAlign = "center";
		f.lineWidth = 300;
		e = new createjs.Text("", "24px " + FONT1, "#ffffff");
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2 - 30;
		e.textAlign = "center";
		e.lineWidth = 300;
		d = new createjs.Container;
		d.alpha = 0;
		d.visible = !1;
		d.addChild(a, f, e);
		s_oStage.addChild(d)
	};
	this.unload = function() {
		a.off("click", function() {})
	};
	this.show = function(a) {
		f.text = a;
		e.text = a;
		d.visible = !0;
		var l = this;
		createjs.Tween.get(d).to({
			alpha: 1
		}, 500);
		setTimeout(function() {
			l._onExit()
		}, 2E3)
	};
	this._onExit = function() {
		d.visible && (d.off("mousedown"), d.visible = !1)
	};
	this._init();
	return this
}

function CTweenController() {
	this.tweenValue = function(a, e, f) {
		return a + f * (e - a)
	};
	this.easeLinear = function(a, e, f, d) {
		return f * a / d + e
	};
	this.easeInCubic = function(a, e, f, d) {
		d = (a /= d) * a * a;
		return e + f * d
	};
	this.easeBackInQuart = function(a, e, f, d) {
		d = (a /= d) * a;
		return e + f * (2 * d * d + 2 * d * a + -3 * d)
	};
	this.easeInBack = function(a, e, f, d) {
		return f * (a /= d) * a * (2.70158 * a - 1.70158) + e
	};
	this.easeOutCubic = function(a, e, f, d) {
		return f * ((a = a / d - 1) * a * a + 1) + e
	};
	this.easeInOutCubic = function(a, e, f, d) {
		return 1 > (a /= d / 2) ? f / 2 * a * a * a + e : f / 2 * ((a -= 2) * a * a + 2) + e
	};
	this.tweenVectors = function(a, e, f, d) {
		d.x = a.x + f * (e.x - a.x);
		d.y = a.y + f * (e.y - a.y);
		return d
	}
}

function CSeat() {
	var a, e, f, d, b, l;
	this._init = function() {
		this.reset()
	};
	this.reset = function() {
		f = [];
		d = [];
		b = [];
		this.resetNumberWins();
		l && l.reset();
		a = 0
	};
	this.setInfo = function(b, d) {
		e = b;
		a = 0;
		l = new CFichesController(d)
	};
	this.resetNumberWins = function() {
		for (var a = 0; a < NUMBERS_TO_BET; a++) f[a] = {
			win: 0,
			mc: null
		};
		b = []
	};
	this.setFicheBetted = function(k, h, g, l, c) {
		for (var p = [], u = [], v = 0; v < h.length; v++) {
			var r = (parseFloat(f[h[v]].win) + g * k * c).toFixed(1);
			f[h[v]] = {
				win: r,
				mc: l
			};
			p.push(g * k * c);
			u.push(l)
		}
		b.push({
			win: p,
			mc: l
		});
		d.push(h);
		a += k * c;
		e -= k * c;
		e = roundDecimal(e, 1)
	};
	this.createPileForVoisinZero = function(a, b, d, e, c) {
		var f = [];
		l.createPileForVoisinZero(b, f);
		this.setFicheBetted(a, d, e, f, c)
	};
	this.createPileForTier = function(a, b, d, e, c) {
		var f = [];
		l.createPileForTier(b, f);
		this.setFicheBetted(a, d, e, f, c)
	};
	this.createPileForOrphelins = function(k, h, g, m, c) {
		m = [];
		l.createPileForOrphelins(h, m);
		h = [];
		var p = (parseFloat(f[g[0]].win) + 36 * k).toFixed(1);
		f[g[0]] = {
			win: p,
			mc: m
		};
		h.push(36 * k);
		p = (parseFloat(f[g[1]].win) + 18 * k).toFixed(1);
		f[g[1]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		p = (parseFloat(f[g[2]].win) + 18 * k).toFixed(1);
		f[g[2]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		p = (parseFloat(f[g[3]].win) + 18 * k).toFixed(1);
		f[g[3]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		p = (parseFloat(f[g[4]].win) + 36 * k).toFixed(1);
		f[g[4]] = {
			win: p,
			mc: m
		};
		h.push(36 * k);
		p = (parseFloat(f[g[5]].win) + 18 * k).toFixed(1);
		f[g[5]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		p = (parseFloat(f[g[6]].win) + 18 * k).toFixed(1);
		f[g[6]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		p = (parseFloat(f[g[7]].win) + 18 * k).toFixed(1);
		f[g[7]] = {
			win: p,
			mc: m
		};
		h.push(18 * k);
		d.push(g);
		a += k * c;
		e -= k * c;
		e = roundDecimal(e, 1);
		b.push({
			win: h,
			mc: m
		})
	};
	this.createPileForMultipleNumbers = function(a, b, d, e, c) {
		var f = [];
		l.createPileForMultipleNumbers(b, d, f);
		this.setFicheBetted(a, d, e, f, c)
	};
	this.addFicheOnTable = function(a, b, d, e, c) {
		var f = [];
		l.setFicheOnTable(b, c, f);
		this.setFicheBetted(a, d, e, f, 1)
	};
	this.clearLastBet = function() {
		if (0 !== d.length) {
			var k = l.clearLastBet();
			e += k;
			e = roundDecimal(e, 1);
			a -= k;
			for (var k = d.pop(), h = b.pop().win, g = 0; g < k.length; g++) f[k[g]] = 0 < b.length ? {
				win: f[k[g]].win - h[g],
				mc: b[b.length - 1].mc
			} : {
				win: f[k[g]].win - h[g],
				mc: null
			}
		}
	};
	this.clearAllBets = function() {
		this.resetNumberWins();
		l.clearAllBets();
		e += a;
		e = roundDecimal(e, 1);
		a = 0
	};
	this.showWin = function(a) {
		e += a;
		e = roundDecimal(e, 1)
	};
	this.recharge = function(a) {
		e = a
	};
	this.getCurBet = function() {
		return a
	};
	this.getCredit = function() {
		return e
	};
	this.getNumbersBetted = function() {
		return f
	};
	this.getNumberSelected = function() {
		return d
	};
	this._init()
}

function CTableController() {
	var a, e, f, d;
	this._init = function() {
		e = new createjs.Container;
		e.x = 184;
		e.y = 150;
		s_oStage.addChild(e);
		var a = createBitmap(s_oSpriteLibrary.getSprite("board_roulette"));
		e.addChild(a);
		this._initEnlights();
		a = new CBetTableButton(221, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "first12", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(470, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "second12", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(717, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "third12", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(54, 121, s_oSpriteLibrary.getSprite("hit_area_0"), "bet_0", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		for (var l = s_oSpriteLibrary.getSprite("hit_area_number"), k = 128, h = 194, g = 1; 37 > g; g++) a = new CBetTableButton(k, h, l, "bet_" + g, e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === g % 3 ? (k += WIDTH_CELL_NUMBER + 3, h = 194) : h -= HEIGHT_CELL_NUMBER + 3;
		a = new CBetTableButton(97, 195, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_1", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(97, 120, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_2", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(97, 45, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_3", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		for (var k = 159, h = 194, m = 1; 34 > m; m++) a = new CBetTableButton(k, h, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_" + m + "_" + (m + 3), e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === m % 3 ? (k += WIDTH_CELL_NUMBER + 3, h = 194) : h -= HEIGHT_CELL_NUMBER + 3;
		k = 128;
		h = 157;
		for (m = g = 1; 25 > m; m++) a = new CBetTableButton(k, h, s_oSpriteLibrary.getSprite("hit_area_couple_horizontal"), "bet_" + g + "_" + (g + 1), e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === m % 2 ? (k += WIDTH_CELL_NUMBER + 3, h = 157, g += 2) : (h -= HEIGHT_CELL_NUMBER + 3, g++);
		a = new CBetTableButton(96, 158, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_1_2", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(96, 84, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_2_3", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		k = 128;
		h = 232;
		g = 1;
		l = s_oSpriteLibrary.getSprite("hit_area_couple_horizontal");
		for (m = 1; 13 > m; m++) a = new CBetTableButton(k, h, l, "bet_" + g + "_" + (g + 1) + "_" + (g + 2), e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), k += WIDTH_CELL_NUMBER + 3, g += 3;
		a = new CBetTableButton(96, 232, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_1_2_3", e, !1);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		h = k = 158;
		for (m = g = 1; 23 > m; m++) a = new CBetTableButton(k, h, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_" + g + "_" + (g + 1) + "_" + (g + 3) + "_" + (g + 4), e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === m % 2 ? (k += WIDTH_CELL_NUMBER + 3, h = 157, g += 2) : (h -= HEIGHT_CELL_NUMBER + 3, g++);
		k = 158;
		h = 232;
		g = 1;
		l = s_oSpriteLibrary.getSprite("hit_area_small");
		for (m = 1; 12 > m; m++) a = new CBetTableButton(k, h, l, "bet_" + g + "_" + (g + 1) + "_" + (g + 2) + "_" + (g + 3) + "_" + (g + 4) + "_" + (g + 5), e, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), g += 3, k += WIDTH_CELL_NUMBER + 3;
		a = new CBetTableButton(872, 194, s_oSpriteLibrary.getSprite("hit_area_number"), "col1", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(872, 120, s_oSpriteLibrary.getSprite("hit_area_number"), "col2", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(872, 46, s_oSpriteLibrary.getSprite("hit_area_number"), "col3", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(159, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "first18", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(281, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "even", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(408, 400, s_oSpriteLibrary.getSprite("hit_area_color"), "black", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(533, 400, s_oSpriteLibrary.getSprite("hit_area_color"), "red", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(656, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "odd", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		a = new CBetTableButton(778, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "second18", e, !0);
		a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
		!1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
		f = [];
		d = []
	};
	this._initEnlights = function() {
		var b;
		a = [];
		b = new CEnlight(11, 10, s_oSpriteLibrary.getSprite("enlight_0"), e);
		a.oEnlight_0 = b;
		for (var d = 98, f = 159, h = s_oSpriteLibrary.getSprite("enlight_number"), g = 0; 36 > g; g++) b = new CEnlight(d, f, h, e), a["oEnlight_" + (g + 1)] = b, 0 === (g + 1) % 3 ? (d += h.width + 3, f = 159) : f -= h.height + 3;
		b = new CEnlight(842, 159, s_oSpriteLibrary.getSprite("enlight_number"), e);
		a.oEnlight_col1 = b;
		b = new CEnlight(842, 85, s_oSpriteLibrary.getSprite("enlight_number"), e);
		a.oEnlight_col2 = b;
		b = new CEnlight(842, 11, s_oSpriteLibrary.getSprite("enlight_number"), e);
		a.oEnlight_col3 = b;
		b = new CEnlight(98, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"), e);
		a.oEnlight_first12 = b;
		b = new CEnlight(347, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"), e);
		a.oEnlight_second12 = b;
		b = new CEnlight(595, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"), e);
		a.oEnlight_third12 = b;
		b = new CEnlight(98, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), e);
		a.oEnlight_first18 = b;
		b = new CEnlight(220, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), e);
		a.oEnlight_even = b;
		b = new CEnlight(347, 348, s_oSpriteLibrary.getSprite("enlight_color"), e);
		a.oEnlight_black = b;
		b = new CEnlight(470, 348, s_oSpriteLibrary.getSprite("enlight_color"), e);
		a.oEnlight_red = b;
		b = new CEnlight(595, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), e);
		a.oEnlight_odd = b;
		b = new CEnlight(717, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), e);
		a.oEnlight_second18 = b
	};
	this.unload = function() {
		for (var a = 0; a < e.getNumChildren(); a++) {
			var d = e.getChildAt(a);
			d instanceof CBetTableButton && d.unload()
		}
	};
	this.addEventListener = function(a, e, k) {
		f[a] = e;
		d[a] = k
	};
	this._onBetPress = function(a) {
		null !== a.numbers && f[ON_SHOW_BET_ON_TABLE] && f[ON_SHOW_BET_ON_TABLE].call(d[ON_SHOW_BET_ON_TABLE], a, !1)
	};
	this._onBetNumberOver = function(a) {
		null !== a.numbers && f[ON_SHOW_ENLIGHT] && f[ON_SHOW_ENLIGHT].call(d[ON_SHOW_ENLIGHT], a)
	};
	this._onBetNumberOut = function(a) {
		null !== a.numbers && f[ON_HIDE_ENLIGHT] && f[ON_HIDE_ENLIGHT].call(d[ON_HIDE_ENLIGHT], a)
	};
	this.enlight = function(b) {
		a[b].show()
	};
	this.enlightOff = function(b) {
		a[b].hide()
	};
	this.getEnlightX = function(b) {
		return a["oEnlight_" + b].getX()
	};
	this.getEnlightY = function(b) {
		return a["oEnlight_" + b].getY()
	};
	this.getContainer = function() {
		return e
	};
	this.getX = function() {
		return e.x
	};
	this.getY = function() {
		return e.x
	};
	this._init()
}
function CEnlight(a, e, f, d) {
	var b;
	this._init = function(a, d, e, g) {
		b = createBitmap(e);
		b.x = a;
		b.y = d;
		b.visible = !1;
		g.addChild(b)
	};
	this.show = function() {
		b.visible = !0
	};
	this.hide = function() {
		b.visible = !1
	};
	this.rotate = function(a) {
		b.rotation = a
	};
	this.getX = function() {
		return b.x
	};
	this.getY = function() {
		return b.y
	};
	this._init(a, e, f, d)
}

function CFiche(a, e, f, d, b) {
	var l, k, h, g, m;
	this._init = function(a, b, d, e, f) {
		m = e;
		e = s_oSpriteLibrary.getSprite("fiche_" + d);
		g = createBitmap(e);
		g.x = a;
		g.y = b;
		g.regX = e.width / 2;
		g.regY = e.height / 2;
		f ? (g.scaleX = f, g.scaleY = f) : (g.scaleX = .8, g.scaleY = .8);
		l = d;
		m.addChild(g)
	};
	this.setEndPoint = function(a, b) {
		k = new createjs.Point(g.x, g.y);
		h = new createjs.Point(a, b)
	};
	this.updatePos = function(a) {
		var b = new createjs.Point,
			b = s_oTweenController.tweenVectors(k, h, a, b);
		g.x = b.x;
		g.y = b.y
	};
	this.getSprite = function() {
		return g
	};
	this.getValue = function() {
		return l
	};
	this._init(a, e, f, d, b)
}

function CHistoryRow(a, e, f) {
	var d, b, l, k, h, g, m;
	this._init = function(a, e) {
		m = new createjs.Container;
		m.x = a;
		m.y = e;
		f.addChild(m);
		d = createBitmap(s_oSpriteLibrary.getSprite("circle_red"));
		d.visible = !1;
		m.addChild(d);
		b = createBitmap(s_oSpriteLibrary.getSprite("circle_green"));
		b.visible = !1;
		b.x = 24;
		m.addChild(b);
		l = createBitmap(s_oSpriteLibrary.getSprite("circle_black"));
		l.visible = !1;
		l.x = 48;
		m.addChild(l);
		k = new createjs.Text("a", "12px " + FONT1, "#fff");
		k.x = d.x + 10;
		k.y = d.y + 3;
		k.visible = !1;
		k.textAlign = "center";
		m.addChild(k);
		h = new createjs.Text("a", "12px " + FONT1, "#fff");
		h.x = b.x + 10;
		h.y = b.y + 3;
		h.visible = !1;
		h.textAlign = "center";
		m.addChild(h);
		g = new createjs.Text("a", "12px " + FONT1, "#fff");
		g.x = l.x + 10;
		g.y = l.y + 3;
		g.visible = !1;
		g.textAlign = "center";
		m.addChild(g)
	};
	this.showBlack = function(a) {
		g.text = a;
		d.visible = !1;
		k.visible = !1;
		b.visible = !1;
		h.visible = !1;
		l.visible = !0;
		g.visible = !0
	};
	this.showRed = function(a) {
		k.text = a;
		d.visible = !0;
		k.visible = !0;
		b.visible = !1;
		h.visible = !1;
		l.visible = !1;
		g.visible = !1
	};
	this.showGreen = function(a) {
		h.text = a;
		d.visible = !1;
		k.visible = !1;
		b.visible = !0;
		h.visible = !0;
		l.visible = !1;
		g.visible = !1
	};
	this._init(a, e)
}

function CWheelAnim(a, e) {
	var f, d, b, l, k, h, g, m, c, p, u, v, r, x, n, q, t;
	this._init = function(a, c) {
		k = l = 0;
		d = !1;
		t = new createjs.Container;
		t.visible = !1;
		t.x = a;
		t.y = c;
		s_oStage.addChild(t);
		var b = createBitmap(s_oSpriteLibrary.getSprite("bg_wheel"));
		b.x = 240;
		b.y = 159;
		t.addChild(b);
		g = [];
		for (var e = 0; e < NUM_MASK_BALL_SPIN_FRAMES; e++) b = createBitmap(s_oSpriteLibrary.getSprite("wheel_numbers_" + e)), b.x = 418, b.y = 219, b.visible = !1, t.addChild(b), g.push(b);
		this._initBall();
		m = [];
		for (e = 0; e < NUM_MASK_BALL_SPIN_FRAMES; e++) b = createBitmap(s_oSpriteLibrary.getSprite("wheel_handle_" + e)), b.x = 519, b.y = 186, b.visible = !1, t.addChild(b), m.push(b);
		u = g[0];
		u.visible = !0;
		v = m[0];
		v.visible = !0;
		n = new createjs.Container;
		n.visible = !1;
		n.x = CANVAS_WIDTH / 2;
		n.y = CANVAS_HEIGHT / 2;
		t.addChild(n);
		b = s_oSpriteLibrary.getSprite("show_number_panel");
		e = createBitmap(b);
		n.addChild(e);
		e = {
			images: [s_oSpriteLibrary.getSprite("show_number_bg")],
			frames: {
				width: 117,
				height: 117,
				regX: 58,
				regY: 58
			},
			animations: {
				black: [0],
				red: [1],
				green: [2]
			}
		};
		e = new createjs.SpriteSheet(e);
		q = createSprite(e, "black", 58, 58, 117, 117);
		q.x = b.width / 2;
		q.y = b.height / 2;
		n.addChild(q);
		r = new createjs.Text("36", "80px " + FONT2, "#fff");
		r.textAlign = "center";
		r.textBaseline = "middle";
		r.x = b.width / 2;
		r.y = b.height / 2 + 7;
		n.addChild(r);
		var e = s_oSpriteLibrary.getSprite("but_bg"),
			f = createBitmap(e);
		f.regX = e.width / 2;
		f.x = b.width / 2;
		f.y = b.height - 12;
		n.addChild(f);
		x = new createjs.Text("", "22px " + FONT1, "#fff");
		x.textAlign = "center";
		x.textBaseline = "middle";
		x.x = b.width / 2;
		x.y = b.height + 20;
		n.addChild(x);
		n.regX = b.width / 2;
		n.regY = b.height / 2
	};
	this._initBall = function() {
		c = [];
		c.push({
			x: 892.9,
			y: 358.95
		});
		c.push({
			x: 889.4,
			y: 338.95
		});
		c.push({
			x: 880.9,
			y: 320.45
		});
		c.push({
			x: 870.9,
			y: 303.45
		});
		c.push({
			x: 857.65,
			y: 287.2
		});
		c.push({
			x: 842.4,
			y: 272.2
		});
		c.push({
			x: 825.9,
			y: 257.45
		});
		c.push({
			x: 808.15,
			y: 245.7
		});
		c.push({
			x: 788.15,
			y: 234.45
		});
		c.push({
			x: 767.9,
			y: 224.45
		});
		c.push({
			x: 746.9,
			y: 217.2
		});
		c.push({
			x: 724.4,
			y: 210.7
		});
		c.push({
			x: 702.15,
			y: 205.2
		});
		c.push({
			x: 680.15,
			y: 201.7
		});
		c.push({
			x: 657.15,
			y: 199.45
		});
		c.push({
			x: 634.15,
			y: 198.95
		});
		c.push({
			x: 609.15,
			y: 199.95
		});
		c.push({
			x: 586.4,
			y: 202.2
		});
		c.push({
			x: 564.15,
			y: 206.2
		});
		c.push({
			x: 541.65,
			y: 211.2
		});
		c.push({
			x: 519.15,
			y: 218.2
		});
		c.push({
			x: 498.9,
			y: 227.45
		});
		c.push({
			x: 478.9,
			y: 236.7
		});
		c.push({
			x: 461.15,
			y: 248.95
		});
		c.push({
			x: 444.15,
			y: 261.45
		});
		c.push({
			x: 429.15,
			y: 275.7
		});
		c.push({
			x: 416.65,
			y: 291.45
		});
		c.push({
			x: 406.65,
			y: 308.95
		});
		c.push({
			x: 399.15,
			y: 326.7
		});
		c.push({
			x: 394.4,
			y: 345.7
		});
		c.push({
			x: 394.4,
			y: 365.7
		});
		c.push({
			x: 396.65,
			y: 385.7
		});
		c.push({
			x: 402.4,
			y: 405.2
		});
		c.push({
			x: 411.65,
			y: 424.95
		});
		c.push({
			x: 425.9,
			y: 444.2
		});
		c.push({
			x: 444.15,
			y: 462.2
		});
		c.push({
			x: 465.9,
			y: 477.95
		});
		c.push({
			x: 491.15,
			y: 492.45
		});
		c.push({
			x: 519.15,
			y: 504.7
		});
		c.push({
			x: 549.9,
			y: 512.95
		});
		c.push({
			x: 582.4,
			y: 518.7
		});
		c.push({
			x: 615.4,
			y: 520.45
		});
		c.push({
			x: 648.4,
			y: 518.45
		});
		c.push({
			x: 681.4,
			y: 513.45
		});
		c.push({
			x: 711.9,
			y: 505.2
		});
		c.push({
			x: 739.65,
			y: 493.45
		});
		c.push({
			x: 764.65,
			y: 478.7
		});
		c.push({
			x: 786.15,
			y: 461.95
		});
		c.push({
			x: 802.9,
			y: 444.45
		});
		c.push({
			x: 816.15,
			y: 424.7
		});
		c.push({
			x: 825.15,
			y: 404.7
		});
		c.push({
			x: 829.9,
			y: 384.7
		});
		c.push({
			x: 829.9,
			y: 364.7
		});
		c.push({
			x: 825.9,
			y: 345.95
		});
		c.push({
			x: 818.9,
			y: 327.2
		});
		c.push({
			x: 808.15,
			y: 310.2
		});
		c.push({
			x: 795.15,
			y: 293.95
		});
		c.push({
			x: 779.65,
			y: 279.45
		});
		c.push({
			x: 761.65,
			y: 267.2
		});
		c.push({
			x: 742.4,
			y: 256.45
		});
		c.push({
			x: 721.15,
			y: 247.95
		});
		c.push({
			x: 698.65,
			y: 240.45
		});
		c.push({
			x: 673.65,
			y: 236.95
		});
		c.push({
			x: 650.65,
			y: 234.45
		});
		c.push({
			x: 625.65,
			y: 233.95
		});
		c.push({
			x: 603.15,
			y: 235.45
		});
		c.push({
			x: 579.9,
			y: 238.7
		});
		c.push({
			x: 556.9,
			y: 246.2
		});
		c.push({
			x: 534.4,
			y: 254.2
		});
		c.push({
			x: 514.4,
			y: 265.7
		});
		c.push({
			x: 497.65,
			y: 278.2
		});
		c.push({
			x: 482.15,
			y: 292.45
		});
		c.push({
			x: 468.9,
			y: 307.7
		});
		c.push({
			x: 460.65,
			y: 326.2
		});
		c.push({
			x: 455.65,
			y: 344.7
		});
		c.push({
			x: 454.4,
			y: 364.7
		});
		c.push({
			x: 458.15,
			y: 384.7
		});
		c.push({
			x: 466.9,
			y: 403.7
		});
		c.push({
			x: 480.15,
			y: 421.95
		});
		c.push({
			x: 498.15,
			y: 438.2
		});
		c.push({
			x: 520.65,
			y: 453.2
		});
		c.push({
			x: 546.65,
			y: 463.7
		});
		c.push({
			x: 575.4,
			y: 471.45
		});
		c.push({
			x: 605.4,
			y: 475.2
		});
		c.push({
			x: 635.4,
			y: 474.95
		});
		c.push({
			x: 664.4,
			y: 469.95
		});
		c.push({
			x: 690.9,
			y: 460.7
		});
		c.push({
			x: 714.15,
			y: 447.95
		});
		c.push({
			x: 732.65,
			y: 431.2
		});
		c.push({
			x: 743.4,
			y: 418.7
		});
		c.push({
			x: 749.4,
			y: 411.2
		});
		c.push({
			x: 752.15,
			y: 397.95
		});
		c.push({
			x: 757.65,
			y: 379.45
		});
		c.push({
			x: 757.65,
			y: 379.45
		});
		c.push({
			x: 755.65,
			y: 375.7
		});
		c.push({
			x: 756.15,
			y: 366.2
		});
		c.push({
			x: 756.15,
			y: 356.2
		});
		c.push({
			x: 753.65,
			y: 344.95
		});
		c.push({
			x: 751.4,
			y: 346.45
		});
		c.push({
			x: 749.9,
			y: 346.45
		});
		c.push({
			x: 751.65,
			y: 351.7
		});
		c.push({
			x: 754.15,
			y: 356.7
		});
		c.push({
			x: 754.9,
			y: 362.45
		});
		c.push({
			x: 755.9,
			y: 367.45
		});
		c.push({
			x: 756.4,
			y: 374.2
		});
		c.push({
			x: 756.4,
			y: 380.2
		});
		c.push({
			x: 755.65,
			y: 386.7
		});
		c.push({
			x: 754.4,
			y: 392.45
		});
		c.push({
			x: 752.65,
			y: 399.2
		});
		c.push({
			x: 750.15,
			y: 405.45
		});
		c.push({
			x: 747.65,
			y: 411.7
		});
		c.push({
			x: 744.4,
			y: 416.95
		});
		c.push({
			x: 740.65,
			y: 424.45
		});
		c.push({
			x: 736.15,
			y: 429.7
		});
		c.push({
			x: 731.15,
			y: 434.95
		});
		c.push({
			x: 725.65,
			y: 440.95
		});
		c.push({
			x: 720.15,
			y: 446.2
		});
		c.push({
			x: 713.65,
			y: 451.2
		});
		c.push({
			x: 705.9,
			y: 455.45
		});
		c.push({
			x: 698.65,
			y: 460.2
		});
		c.push({
			x: 691.15,
			y: 462.95
		});
		c.push({
			x: 682.15,
			y: 466.7
		});
		c.push({
			x: 673.65,
			y: 469.2
		});
		c.push({
			x: 664.65,
			y: 471.45
		});
		c.push({
			x: 655.15,
			y: 473.45
		});
		c.push({
			x: 646.15,
			y: 475.2
		});
		c.push({
			x: 634.9,
			y: 476.45
		});
		c.push({
			x: 624.9,
			y: 476.45
		});
		c.push({
			x: 614.9,
			y: 476.45
		});
		c.push({
			x: 604.9,
			y: 475.7
		});
		c.push({
			x: 595.65,
			y: 474.2
		});
		c.push({
			x: 586.4,
			y: 472.45
		});
		c.push({
			x: 577.15,
			y: 470.45
		});
		c.push({
			x: 568.65,
			y: 466.95
		});
		c.push({
			x: 561.15,
			y: 464.95
		});
		c.push({
			x: 553.15,
			y: 460.95
		});
		c.push({
			x: 545.15,
			y: 457.95
		});
		c.push({
			x: 539.9,
			y: 452.95
		});
		c.push({
			x: 531.4,
			y: 447.95
		});
		c.push({
			x: 525.9,
			y: 443.45
		});
		c.push({
			x: 518.4,
			y: 439.45
		});
		c.push({
			x: 513.4,
			y: 433.7
		});
		c.push({
			x: 509.15,
			y: 426.95
		});
		c.push({
			x: 504.15,
			y: 420.45
		});
		c.push({
			x: 500.65,
			y: 415.2
		});
		c.push({
			x: 497.4,
			y: 409.7
		});
		c.push({
			x: 495.15,
			y: 403.45
		});
		c.push({
			x: 494.65,
			y: 398.45
		});
		c.push({
			x: 493.4,
			y: 391.2
		});
		c.push({
			x: 492.4,
			y: 385.7
		});
		c.push({
			x: 491.9,
			y: 378.7
		});
		c.push({
			x: 492.4,
			y: 373.7
		});
		c.push({
			x: 492.9,
			y: 367.2
		});
		c.push({
			x: 493.4,
			y: 361.95
		});
		c.push({
			x: 495.15,
			y: 356.2
		});
		c.push({
			x: 497.65,
			y: 350.95
		});
		c.push({
			x: 500.15,
			y: 344.2
		});
		c.push({
			x: 502.65,
			y: 339.2
		});
		c.push({
			x: 505.9,
			y: 334.7
		});
		c.push({
			x: 510.65,
			y: 328.95
		});
		c.push({
			x: 513.9,
			y: 323.95
		});
		c.push({
			x: 518.9,
			y: 318.95
		});
		c.push({
			x: 523.9,
			y: 314.2
		});
		c.push({
			x: 528.9,
			y: 311.2
		});
		c.push({
			x: 533.9,
			y: 306.7
		});
		c.push({
			x: 539.65,
			y: 301.7
		});
		c.push({
			x: 544.65,
			y: 299.2
		});
		c.push({
			x: 550.65,
			y: 295.95
		});
		c.push({
			x: 558.4,
			y: 294.45
		});
		c.push({
			x: 564.9,
			y: 289.95
		});
		c.push({
			x: 572.4,
			y: 289.45
		});
		c.push({
			x: 579.9,
			y: 286.95
		});
		c.push({
			x: 585.15,
			y: 285.95
		});
		c.push({
			x: 592.65,
			y: 283.45
		});
		c.push({
			x: 600.15,
			y: 283.45
		});
		c.push({
			x: 607.9,
			y: 283.45
		});
		c.push({
			x: 613.9,
			y: 281.2
		});
		c.push({
			x: 621.9,
			y: 280.7
		});
		c.push({
			x: 629.4,
			y: 280.7
		});
		c.push({
			x: 636.9,
			y: 280.7
		});
		c.push({
			x: 644.4,
			y: 280.95
		});
		c.push({
			x: 651.9,
			y: 281.95
		});
		c.push({
			x: 658.9,
			y: 284.2
		});
		c.push({
			x: 665.65,
			y: 287.45
		});
		c.push({
			x: 672.65,
			y: 289.95
		});
		c.push({
			x: 679.65,
			y: 291.2
		});
		c.push({
			x: 686.4,
			y: 293.7
		});
		c.push({
			x: 692.4,
			y: 296.2
		});
		c.push({
			x: 699.15,
			y: 298.7
		});
		c.push({
			x: 704.15,
			y: 301.95
		});
		c.push({
			x: 710.65,
			y: 306.95
		});
		c.push({
			x: 715.65,
			y: 309.45
		});
		c.push({
			x: 721.15,
			y: 312.95
		});
		c.push({
			x: 726.15,
			y: 316.95
		});
		c.push({
			x: 731.15,
			y: 321.95
		});
		c.push({
			x: 736.15,
			y: 324.95
		});
		c.push({
			x: 739.9,
			y: 330.95
		});
		c.push({
			x: 742.4,
			y: 335.7
		});
		c.push({
			x: 746.15,
			y: 340.95
		});
		c.push({
			x: 748.65,
			y: 346.45
		});
		p = createBitmap(s_oSpriteLibrary.getSprite("ball"));
		p.x = c[0].x;
		p.y = c[0].y;
		t.addChild(p);
		h = 0
	};
	this.hide = function() {
		n.visible = !1;
		t.visible = !1;
		h = 0
	};
	this.startSpin = function(a, c, e, g) {
		this.playToFrame(c);
		b = g;
		d = !0;
		t.visible = !0;
		this.setShowNumberInfo(e);
		f = !0
	};
	this.setShowNumberInfo = function(a) {
		r.text = a;
		0 < b ? (x.font = "18px " + FONT1, x.text = TEXT_YOU_WIN + " " + b + TEXT_CURRENCY) : (x.font = "22px " + FONT1, x.text = TEXT_YOU_LOSE);
		switch (s_oGameSettings.getColorNumber(a)) {
		case COLOR_BLACK:
			q.gotoAndStop("black");
			break;
		case COLOR_RED:
			q.gotoAndStop("red");
			break;
		case COLOR_ZERO:
			q.gotoAndStop("green")
		}
	};
	this._showNumberExtracted = function() {
		n.scaleX = n.scaleY = .1;
		n.visible = !0;
		createjs.Tween.get(n).to({
			scaleX: 1,
			scaleY: 1
		}, 800, createjs.Ease.cubicOut);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) 0 < b ? createjs.Sound.play("win") : createjs.Sound.play("lose")
	};
	this.playToFrame = function(a) {
		u.visible = !1;
		l = a;
		g[l].visible = !0;
		u = g[l];
		v.visible = !1;
		m[l].visible = !0;
		v = m[l]
	};
	this.nextFrame = function() {
		u.visible = !1;
		l++;
		g[l].visible = !0;
		u = g[l];
		v.visible = !1;
		m[l].visible = !0;
		v = m[l]
	};
	this._ballSpin = function() {
		p.x = c[h].x;
		p.y = c[h].y;
		h++;
		h === NUM_BALL_SPIN_FRAMES ? (f = !1, h = NUM_BALL_SPIN_FRAMES - 1, s_oGame._rouletteAnimEnded(), this.hide()) : h === NUM_BALL_SPIN_FRAMES / 2 && this._showNumberExtracted()
	};
	this.isVisible = function() {
		return t.visible
	};
	this.update = function() {
		!1 !== f && (k++, 2 === k && (k = 0, d && (this._ballSpin(), l === NUM_MASK_BALL_SPIN_FRAMES - 1 ? this.playToFrame(1) : this.nextFrame())))
	};
	this._init(a, e)
}

function CFinalBetPanel(a, e) {
	var f, d;
	this._init = function(a, e) {
		f = [
			[0, 10, 20, 30],
			[1, 11, 21, 31],
			[2, 12, 22, 32],
			[3, 13, 23, 33],
			[4, 14, 24, 34],
			[5, 15, 25, 35],
			[6, 16, 26, 36],
			[7, 17, 27],
			[8, 18, 28],
			[9, 19, 29]
		];
		d = new createjs.Container;
		d.x = a;
		d.y = e;
		s_oStage.addChild(d);
		for (var k = s_oSpriteLibrary.getSprite("final_bet_bg"), h = k.width / 2, g = k.height / 2, m = 0; 10 > m; m++) {
			var c = new CTextButton(h, g, k, "" + m, FONT1, "#fff", 14, !1);
			c.addEventListenerWithParams(ON_MOUSE_UP, this._onFinalBetPressed, this, {
				index: m
			});
			d.addChild(c.getSprite());
			4 === m ? (h = k.width / 2, g += k.height) : h += k.width + 2
		}
		d.visible = !1
	};
	this.unload = function() {
		for (var a = 0; a < d.getNumChildren(); a++) if (e instanceof CTextButton) {
			var e = d.getChildAt(a);
			e.unload()
		}
	};
	this.show = function() {
		d.visible = !0
	};
	this.hide = function() {
		d.visible = !1
	};
	this._onFinalBetPressed = function(a) {
		a = a.index;
		s_oGame._onShowBetOnTable({
			button: "oBetFinalsBet",
			numbers: f[a],
			bet_mult: 4 === f[a].length ? 4 : 3,
			bet_win: 4 === f[a].length ? 9 : 12,
			num_fiches: f[a].length
		}, !1);
		this.hide()
	};
	this.isVisible = function() {
		return d.visible
	};
	this._init(a, e)
}

function CNeighborsPanel() {
	var a, e, f, d, b, l, k, h, g, m, c, p, u, v, r, x, n, q;
	this._init = function() {
		c = [];
		q = new createjs.Container;
		s_oStage.addChild(q);
		x = new createjs.Shape;
		x.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		x.on("click", function() {});
		q.addChild(x);
		n = new createjs.Container;
		n.x = 265;
		n.y = 85;
		q.addChild(n);
		var a = createBitmap(s_oSpriteLibrary.getSprite("neighbor_bg"));
		n.addChild(a);
		r = new createjs.Text(f + TEXT_CURRENCY, "20px " + FONT1, "#fff");
		r.textAlign = "center";
		r.x = 690;
		r.y = 564;
		n.addChild(r);
		h = [];
		a = new CEnlight(354, 41, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		h.oEnlight_0 = a;
		a = new CEnlight(212, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-136.8);
		h.oEnlight_1 = a;
		a = new CEnlight(586, 145, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(58.1);
		h.oEnlight_2 = a;
		a = new CEnlight(268, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-19.2);
		h.oEnlight_3 = a;
		a = new CEnlight(523, 84, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(39);
		h.oEnlight_4 = a;
		a = new CEnlight(377, 563, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-175);
		h.oEnlight_5 = a;
		a = new CEnlight(637, 311, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(96.2);
		h.oEnlight_6 = a;
		a = new CEnlight(142, 184, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-58.8);
		h.oEnlight_7 = a;
		a = new CEnlight(504, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(156.5);
		h.oEnlight_8 = a;
		a = new CEnlight(121, 357, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-97);
		h.oEnlight_9 = a;
		a = new CEnlight(421, 560, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(175.6);
		h.oEnlight_10 = a;
		a = new CEnlight(574, 473, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(135.8);
		h.oEnlight_11 = a;
		a = new CEnlight(195, 113, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-39.1);
		h.oEnlight_12 = a;
		a = new CEnlight(619, 399, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(117.4);
		h.oEnlight_13 = a;
		a = new CEnlight(155, 440, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-118.2);
		h.oEnlight_14 = a;
		a = new CEnlight(442, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(19.7);
		h.oEnlight_15 = a;
		a = new CEnlight(290, 548, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-156.8);
		h.oEnlight_16 = a;
		a = new CEnlight(628, 226, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(80.2);
		h.oEnlight_17 = a;
		a = new CEnlight(117, 269, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-79.2);
		h.oEnlight_18 = a;
		a = new CEnlight(484, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(29.6);
		h.oEnlight_19 = a;
		a = new CEnlight(181, 475, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-127.5);
		h.oEnlight_20 = a;
		a = new CEnlight(557, 112, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(49.1);
		h.oEnlight_21 = a;
		a = new CEnlight(115, 314, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-88.9);
		h.oEnlight_22 = a;
		a = new CEnlight(463, 549, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(166.4);
		h.oEnlight_23 = a;
		a = new CEnlight(333, 559, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-166.6);
		h.oEnlight_24 = a;
		a = new CEnlight(610, 183, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(69);
		h.oEnlight_25 = a;
		a = new CEnlight(311, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-7.9);
		h.oEnlight_26 = a;
		a = new CEnlight(633, 355, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(106.4);
		h.oEnlight_27 = a;
		a = new CEnlight(166, 146, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-48.1);
		h.oEnlight_28 = a;
		a = new CEnlight(126, 225, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-68.3);
		h.oEnlight_29 = a;
		a = new CEnlight(541, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(146);
		h.oEnlight_30 = a;
		a = new CEnlight(134, 400, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-108.2);
		h.oEnlight_31 = a;
		a = new CEnlight(397, 40, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(8.7);
		h.oEnlight_32 = a;
		a = new CEnlight(249, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-146.3);
		h.oEnlight_33 = a;
		a = new CEnlight(636, 268, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(87.9);
		h.oEnlight_34 = a;
		a = new CEnlight(230, 85, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(-29.1);
		h.oEnlight_35 = a;
		a = new CEnlight(600, 439, s_oSpriteLibrary.getSprite("neighbor_enlight"), n);
		a.rotate(127.1);
		h.oEnlight_36 = a;
		v = new createjs.Container;
		n.addChild(v);
		var a = s_oSpriteLibrary.getSprite("hitarea_neighbor"),
			b = new CGfxButton(376, 72, a, n);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 0
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 0
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 0
		});
		b = new CGfxButton(415, 76, a, n);
		b.rotate(9.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 32
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 32
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 32
		});
		b = new CGfxButton(453, 86, a, n);
		b.rotate(20);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 15
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 15
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 15
		});
		b = new CGfxButton(490, 102, a, n);
		b.rotate(29.4);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 19
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 19
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 19
		});
		b = new CGfxButton(520, 124, a, n);
		b.rotate(39.4);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 4
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 4
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 4
		});
		b = new CGfxButton(549, 150, a, n);
		b.rotate(48.8);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 21
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 21
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 21
		});
		b = new CGfxButton(571, 181, a, n);
		b.rotate(58.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 2
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 2
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 2
		});
		b = new CGfxButton(588, 216, a, n);
		b.rotate(68.7);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 25
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 25
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 25
		});
		b = new CGfxButton(599, 253, a, n);
		b.rotate(78.9);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 17
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 17
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 17
		});
		b = new CGfxButton(604, 291, a, n);
		b.rotate(90.4);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 34
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 34
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 34
		});
		b = new CGfxButton(603, 330, a, n);
		b.rotate(96.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 6
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 6
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 6
		});
		b = new CGfxButton(596, 368, a, n);
		b.rotate(107.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 27
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 27
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 27
		});
		b = new CGfxButton(580, 404, a, n);
		b.rotate(116);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 13
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 13
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 13
		});
		b = new CGfxButton(560, 438, a, n);
		b.rotate(126.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 36
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 36
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 36
		});
		b = new CGfxButton(534, 466, a, n);
		b.rotate(135.7);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 11
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 11
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 11
		});
		b = new CGfxButton(504, 490, a, n);
		b.rotate(145.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 30
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 30
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 30
		});
		b = new CGfxButton(471, 510, a, n);
		b.rotate(154.9);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 8
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 8
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 8
		});
		b = new CGfxButton(434, 522, a, n);
		b.rotate(165.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 23
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 23
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 23
		});
		b = new CGfxButton(395, 529, a, n);
		b.rotate(174.9);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 10
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 10
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 10
		});
		b = new CGfxButton(357, 529, a, n);
		b.rotate(-176.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 5
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 5
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 5
		});
		b = new CGfxButton(319, 522, a, n);
		b.rotate(-166);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 24
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 24
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 24
		});
		b = new CGfxButton(282, 509, a, n);
		b.rotate(-156);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 16
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 16
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 16
		});
		b = new CGfxButton(247, 491, a, n);
		b.rotate(-146);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 33
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 33
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 33
		});
		b = new CGfxButton(217, 466, a, n);
		b.rotate(-137);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 1
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 1
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 1
		});
		b = new CGfxButton(193, 437, a, n);
		b.rotate(-128);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 20
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 20
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 20
		});
		b = new CGfxButton(172, 404, a, n);
		b.rotate(-118.4);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 14
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 14
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 14
		});
		b = new CGfxButton(158, 367, a, n);
		b.rotate(-105.7);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 31
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 31
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 31
		});
		b = new CGfxButton(149, 330, a, n);
		b.rotate(-95.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 9
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 9
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 9
		});
		b = new CGfxButton(148, 291, a, n);
		b.rotate(-88.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 22
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 22
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 22
		});
		b = new CGfxButton(154, 252, a, n);
		b.rotate(-78);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 18
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 18
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 18
		});
		b = new CGfxButton(164, 216, a, n);
		b.rotate(-67.8);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 29
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 29
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 29
		});
		b = new CGfxButton(181, 181, a, n);
		b.rotate(-57.6);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 7
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 7
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 7
		});
		b = new CGfxButton(205, 150, a, n);
		b.rotate(-48.8);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 28
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 28
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 28
		});
		b = new CGfxButton(233, 124, a, n);
		b.rotate(-39.1);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 12
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 12
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 12
		});
		b = new CGfxButton(265, 102, a, n);
		b.rotate(-29.9);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 35
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 35
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 35
		});
		b = new CGfxButton(300, 86, a, n);
		b.rotate(-19.2);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 3
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 3
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 3
		});
		b = new CGfxButton(338, 76, a, n);
		b.rotate(-8.5);
		b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
			index: 26
		});
		b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
			index: 26
		});
		b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
			index: 26
		});
		this._initNeighbors();
		u = new CGfxButton(717, 38, s_oSpriteLibrary.getSprite("but_exit"), n);
		u.addEventListener(ON_MOUSE_UP, this.onExit, this);
		this.reset();
		this.hide()
	};
	this.unload = function() {
		x.off("click", function() {});
		for (var a = 0; a < q.getNumChildren(); a++) if (b instanceof CGfxButton) {
			var b = q.getChildAt(a);
			b.unload()
		}
	};
	this.showPanel = function(a, b, c) {
		e = a;
		f = b;
		d = c;
		m = [];
		r.text = b + TEXT_CURRENCY;
		q.visible = !0
	};
	this.hide = function() {
		q.visible = !1
	};
	this._initNeighbors = function() {
		b = [
			[3, 26, 0, 32, 15],
			[16, 33, 1, 20, 14],
			[4, 21, 2, 25, 17],
			[12, 35, 3, 26, 0],
			[15, 19, 4, 21, 2],
			[23, 10, 5, 24, 16],
			[17, 34, 6, 27, 13],
			[18, 29, 7, 28, 12],
			[11, 30, 8, 23, 10],
			[14, 31, 9, 22, 18],
			[8, 23, 10, 5, 24],
			[13, 36, 11, 30, 8],
			[7, 28, 12, 35, 3],
			[6, 27, 13, 36, 11],
			[1, 20, 14, 31, 9],
			[0, 32, 15, 19, 4],
			[5, 24, 16, 33, 1],
			[2, 25, 17, 34, 6],
			[9, 22, 18, 29, 7],
			[32, 15, 19, 4, 21],
			[33, 1, 20, 14, 31],
			[19, 4, 21, 2, 25],
			[31, 9, 22, 18, 29],
			[30, 8, 23, 10, 5],
			[10, 5, 24, 16, 33],
			[21, 2, 25, 17, 34],
			[35, 3, 26, 0, 32],
			[34, 6, 27, 13, 36],
			[29, 7, 28, 12, 35],
			[22, 18, 29, 7, 28],
			[36, 11, 30, 8, 23],
			[20, 14, 31, 9, 22],
			[26, 0, 32, 15, 19],
			[24, 16, 33, 1, 20],
			[25, 17, 34, 6, 27],
			[28, 12, 35, 3, 26],
			[27, 13, 36, 11, 30]
		];
		p = [];
		p.oAttach_0 = new createjs.Point(377, 70);
		p.oAttach_32 = new createjs.Point(416, 74);
		p.oAttach_15 = new createjs.Point(454, 85);
		p.oAttach_19 = new createjs.Point(492, 101);
		p.oAttach_4 = new createjs.Point(523, 122);
		p.oAttach_21 = new createjs.Point(550, 150);
		p.oAttach_2 = new createjs.Point(572, 180);
		p.oAttach_25 = new createjs.Point(588, 216);
		p.oAttach_17 = new createjs.Point(603, 255);
		p.oAttach_34 = new createjs.Point(607, 294);
		p.oAttach_6 = new createjs.Point(605, 330);
		p.oAttach_27 = new createjs.Point(600, 370);
		p.oAttach_13 = new createjs.Point(585, 408);
		p.oAttach_36 = new createjs.Point(565, 442);
		p.oAttach_11 = new createjs.Point(538, 472);
		p.oAttach_30 = new createjs.Point(506, 494);
		p.oAttach_8 = new createjs.Point(475, 515);
		p.oAttach_23 = new createjs.Point(435, 526);
		p.oAttach_10 = new createjs.Point(398, 536);
		p.oAttach_5 = new createjs.Point(357, 534);
		p.oAttach_24 = new createjs.Point(318, 526);
		p.oAttach_16 = new createjs.Point(282, 513);
		p.oAttach_33 = new createjs.Point(245, 494);
		p.oAttach_1 = new createjs.Point(218, 468);
		p.oAttach_20 = new createjs.Point(190, 440);
		p.oAttach_14 = new createjs.Point(173, 406);
		p.oAttach_31 = new createjs.Point(156, 368);
		p.oAttach_9 = new createjs.Point(150, 330);
		p.oAttach_22 = new createjs.Point(148, 292);
		p.oAttach_18 = new createjs.Point(153, 252);
		p.oAttach_29 = new createjs.Point(165, 215);
		p.oAttach_7 = new createjs.Point(182, 183);
		p.oAttach_28 = new createjs.Point(208, 150);
		p.oAttach_12 = new createjs.Point(233, 123);
		p.oAttach_35 = new createjs.Point(266, 100);
		p.oAttach_3 = new createjs.Point(302, 86);
		p.oAttach_26 = new createjs.Point(339, 76)
	};
	this.reset = function() {
		l = [];
		for (var a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
		if (k) for (a = 0; a < k.length; a++) v.removeChild(k[a].getSprite());
		k = [];
		g = [];
		d = 0
	};
	this.clearLastBet = function() {
		if (0 !== c.length) {
			var a = c.pop(),
				b = s_oGameSettings.getFicheValues(e);
			l[a] -= b;
			l[a] = roundDecimal(l[a], 1);
			b = g[a];
			0 < b.length ? v.removeChild(b[b.length - 1].getSprite()) : (c = [], l[a] = 0);
			k.pop();
			g[a].pop();
			if (0 === c.length) for (k = [], g = [], a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
			d = 0
		}
	};
	this.onExit = function() {
		this.hide()
	};
	this.addFicheOnNeighborTable = function() {
		var h = s_oGameSettings.getFicheValues(e);
		if (d + 5 * h > f) s_oGame.showMsgBox(TEXT_ERROR_NO_MONEY_MSG);
		else if (d + 5 * h > MAX_BET) s_oGame.showMsgBox(TEXT_ERROR_MAX_BET_REACHED);
		else {
			d += 5 * h;
			d = roundDecimal(d, 1);
			var k = f - d,
				k = roundDecimal(k, 1);
			r.text = k + TEXT_CURRENCY;
			!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("chip");
			l[a] += h;
			l[a] = roundDecimal(l[a], 1);
			h = s_oGameSettings.generateFichesPileByIndex(l[a]);
			h.sort();
			this._removeFichesPile(g[a]);
			g[a] = [];
			for (var k = p["oAttach_" + a].x, n = p["oAttach_" + a].y, q = 0; q < h.length; q++) this._attachFichesPile(h[q], a, k, n), n -= 5;
			m.push(a);
			s_oGame._onShowBetOnTableFromNeighbors({
				button: "oBetNeighbors",
				numbers: b[a],
				bet_mult: 5,
				bet_win: 7.2,
				value: e,
				num_fiches: 5,
				num_clicked: a
			}, !1);
			c.push(a)
		}
	};
	this._attachFichesPile = function(a, b, c, d) {
		a = new CFiche(c, d, a, v, .7);
		g[b].push(a);
		k.push(a)
	};
	this._removeFichesPile = function(a) {
		for (var b in a) v.removeChild(a[b].getSprite())
	};
	this.searchForNumClicked = function() {
		for (var b = 0; b < m.length; b++) if (m[b] === a) return !0;
		return !1
	};
	this._onNeighborRelease = function(b) {
		a = b.index;
		this.addFicheOnNeighborTable()
	};
	this.rebet = function(b) {
		a = b;
		this.addFicheOnNeighborTable()
	};
	this._onNeighborOver = function(a) {
		a = b[a.index];
		for (var c = 0; c < a.length; c++) h["oEnlight_" + a[c]].show()
	};
	this._onNeighborOut = function(a) {
		a = b[a.index];
		for (var c = 0; c < a.length; c++) h["oEnlight_" + a[c]].hide()
	};
	this.isVisible = function() {
		return q.visible
	};
	this._init()
}

function CGameOver() {
	var a, e, f, d, b;
	this._init = function() {
		b = new createjs.Container;
		s_oStage.addChild(b);
		var l = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		b.addChild(l);
		a = new createjs.Text(TEXT_NO_MONEY, "36px " + FONT1, "#fff");
		a.textAlign = "center";
		a.lineWidth = 500;
		a.x = CANVAS_WIDTH / 2;
		a.y = 240;
		b.addChild(a);
		e = new createjs.Text(TEXT_RECHARGE_MSG, "20px " + FONT1, "#fff");
		e.textAlign = "center";
		e.lineWidth = 500;
		e.x = CANVAS_WIDTH / 2;
		e.y = 400;
		b.addChild(e);
		f = new CTextButton(CANVAS_WIDTH / 2 + 170, 510, s_oSpriteLibrary.getSprite("but_bg"), TEXT_RECHARGE, FONT1, "#fff", 14, !1);
		f.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
		b.addChild(f.getSprite());
		d = new CTextButton(CANVAS_WIDTH / 2 - 170, 510, s_oSpriteLibrary.getSprite("but_bg"), TEXT_EXIT, FONT1, "#fff", 14, !1);
		d.addEventListener(ON_MOUSE_UP, this._onExit, this);
		b.addChild(d.getSprite());
		this.hide()
	};
	this.unload = function() {
		f.unload();
		d.unload()
	};
	this.show = function() {
		b.visible = !0
	};
	this.hide = function() {
		b.visible = !1
	};
	this._onRecharge = function() {
		s_oGame.onRecharge()
	};
	this._onExit = function() {
		s_oGame.onExit()
	};
	this._init()
}

function CCreditsPanel() {
	var a, e, f, d, b, l, k, h;
	this._init = function() {
		h = new createjs.Container;
		s_oStage.addChild(h);
		var g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		h.addChild(g);
		b = new createjs.Shape;
		b.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.addChild(b);
		g = s_oSpriteLibrary.getSprite("msg_box");
		e = createBitmap(g);
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2;
		e.regX = g.width / 2;
		e.regY = g.height / 2;
		h.addChild(e);
		l = new createjs.Shape;
		l.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		l.alpha = .01;
		l.on("click", this._onLogoButRelease);
		h.addChild(l);
		g = s_oSpriteLibrary.getSprite("but_exit");
		a = CANVAS_WIDTH / 2 + 234;
		f = new CGfxButton(a, 254, g, h);
		f.addEventListener(ON_MOUSE_UP, this.unload, this);
		d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px Arial", "#ffffff");
		d.x = CANVAS_WIDTH / 2;
		d.y = 300;
		d.textAlign = "center";
		h.addChild(d);
		var g = s_oSpriteLibrary.getSprite("logo_credits"),
			m = createBitmap(g);
		m.regX = g.width / 2;
		m.regY = g.height / 2;
		m.x = CANVAS_WIDTH / 2;
		m.y = CANVAS_HEIGHT / 2;
		h.addChild(m);
		k = new createjs.Text(TEXT_LINK, "24px Arial", "#ffffff");
		k.x = CANVAS_WIDTH / 2;
		k.y = 440;
		k.textAlign = "center";
		h.addChild(k)
	};
	this.unload = function() {
		l.off("click", this._onLogoButRelease);
		f.unload();
		f = null;
		s_oStage.removeChild(h)
	};
	this._onLogoButRelease = function() {
		window.open("http://www.codethislab.com/index.php?&l=en")
	};
	this._init()
}

function CHistory(a, e, f) {
	var d, b, l;
	this._init = function(a, d) {
		b = new createjs.Container;
		b.x = a;
		b.y = d;
		l.addChild(b);
		var e = s_oSpriteLibrary.getSprite("history_bg"),
			f = createBitmap(e);
		b.addChild(f);
		f = new createjs.Text(TEXT_HISTORY, "12px " + FONT1, "#fff");
		f.textAlign = "center";
		f.x = e.width / 2;
		f.y = 5;
		b.addChild(f);
		this._initNumExtracted()
	};
	this._initNumExtracted = function() {
		d = [];
		for (var a = 24, e = 0; e < ROW_HISTORY; e++) {
			var f = new CHistoryRow(5, a, b);
			d[e] = f;
			a += 22
		}
	};
	this.setPosition = function(a, d) {
		b.x = a;
		b.y = d
	};
	this.showBlack = function(a, b) {
		d[a].showBlack(b)
	};
	this.showRed = function(a, b) {
		d[a].showRed(b)
	};
	this.showGreen = function(a, b) {
		d[a].showGreen(b)
	};
	l = f;
	this._init(a, e)
}
var EASE_LINEAR = 0,
	EASE_CUBIC_IN = 1,
	EASE_QUART_BACKIN = 2,
	EASE_BACKIN = 3,
	EASE_SIN_IN = 4,
	EASE_QUAD_IN = 5,
	EASE_CUBIC_OUT = 6,
	EASE_ELASTIC_OUT = 7,
	EASE_BACKOUT = 8,
	EASE_QUINT_OUT = 9,
	EASE_CUBIC_INOUT = 10;

function CRollingTextController(a, e, f, d, b, l, k) {
	var h, g, m, c, p, u, v, r, x, n, q, t = [],
		w, y;
	this._init = function(a, b, c, d, e, f, g) {
		n = [];
		q = [];
		p = e;
		this.setUpdateInfo(c, d);
		r = f;
		x = g;
		w = a;
		y = b
	};
	this.unload = function() {
		clearInterval(v)
	};
	this.setUpdateInfo = function(a, b) {
		m = parseFloat(a);
		c = m + b;
		h = 0;
		g = Math.round(p / FPS);
		u = 0;
		var d = this;
		v = setInterval(function() {
			d.update()
		}, FPS_TIME)
	};
	this.addEventListener = function(a, b, c) {
		n[a] = b;
		q[a] = c
	};
	this.addRollingListener = function(a, b, c) {
		n[ON_CONTROLLER_ROLL] = a;
		q[ON_CONTROLLER_ROLL] = b;
		t = [];
		for (a = 0; a < c.length; a++) t[a] = {
			step: c[a],
			flag: !1
		}
	};
	this.increaseValue = function(a) {
		u = a
	};
	this.getTarget = function() {
		return w
	};
	this.update = function() {
		h++;
		if (h > g) h = 0, w.text = c.toFixed(2) + x, null !== y && (y.text = c.toFixed(2) + x), clearInterval(v), null !== n[ON_CONTROLLER_END] && void 0 !== n[ON_CONTROLLER_END] && n[ON_CONTROLLER_END].call(q[ON_CONTROLLER_END], this), 0 < u ? this.setUpdateInfo(u) : null !== n[ON_CONTROLLER_REMOVE] && void 0 !== n[ON_CONTROLLER_REMOVE] && n[ON_CONTROLLER_REMOVE].call(q[ON_CONTROLLER_REMOVE], this);
		else {
			var a;
			switch (r) {
			case EASE_BACKIN:
				a = s_oTweenController.easeInBack(h, 0, 1, g);
				break;
			case EASE_BACKOUT:
				a = s_oTweenController.easeOutBack(h, 0, 1, g);
				break;
			case EASE_CUBIC_IN:
				a = s_oTweenController.easeInCubic(h, 0, 1, g);
				break;
			case EASE_CUBIC_OUT:
				a = s_oTweenController.easeOutCubic(h, 0, 1, g);
				break;
			case EASE_ELASTIC_OUT:
				a = s_oTweenController.easeOutElastic(h, 0, 1, g);
				break;
			case EASE_LINEAR:
				a = s_oTweenController.easeLinear(h, 0, 1, g);
				break;
			case EASE_QUART_BACKIN:
				a = s_oTweenController.easeBackInQuart(h, 0, 1, g);
				break;
			default:
				a = s_oTweenController.easeLinear(h, 0, 1, g)
			}
			a = s_oTweenController.tweenValue(m, c, a);
			for (var b = 0; b < t.length; b++) a > t[b].step && !t[b].flag && (t[b].flag = !0, null !== n[ON_CONTROLLER_ROLL] && n[ON_CONTROLLER_ROLL].call(q[ON_CONTROLLER_ROLL], b));
			w.text = a.toFixed(2) + x;
			null !== y && (y.text = a.toFixed(2) + x)
		}
	};
	this._init(a, e, f, d, b, l, k)
};