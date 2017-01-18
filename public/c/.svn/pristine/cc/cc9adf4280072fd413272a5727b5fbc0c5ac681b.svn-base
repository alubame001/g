var WebApp = Ember.Application.create();
WebApp.Welcome = Ember.Namespace.create(), WebApp.Stats = Ember.Namespace.create(), Ember.Handlebars.helper("fromInt", function(a) {
	return Number(Math.round(a) / 1e8).toFixed(8)
}), Ember.Handlebars.helper("toDate", function(a) {
	return moment(a).format("YYYY-MM-DD")
}), Ember.Handlebars.helper("setting", function(a) {
	if (!a || "" == a) return "";
	if (!window._gConfig) return null;
	for (var b = a.split("."), c = window._gConfig, d = b.shift(); c && d;) c = c[d], d = b.shift();
	return c
}), WebApp.WelcomeLoginController = Ember.Controller.extend({
	submitting: null,
	actions: {
		submit: function(a) {
			var b = this,
				c = {
					login: this.get("login"),
					password: this.get("password"),
					captcha: this.get("captcha")
				};
			b.set("submitting", "disabled");
			var d = $.post("https://www.btcdice.com/welcome/login", c, function(a, b, c) {
				try {
					1 == a.success ? window.location = a.link : alert(a.message)
				} catch (d) {
					alert(d.toString())
				}
			}, "json");
			return d.always(function() {
				b.set("submitting", null)
			}), !1
		},
		updateLang: function(a) {
			window.location.search = "?lang=" + a
		}
	}
}), WebApp.WelcomeSignupController = Ember.Controller.extend({
	model: {},
	isReferral: !1,
	captchaUrl: "https://www.btcdice.com/welcome/captcha",
	submitting: null,
	actions: {
		reCaptcha: function() {
			this.set("captchaUrl", "https://www.btcdice.com/welcome/captcha?" + Date.now())
		},
		submit: function() {
			var a = this;
			a.set("submitting", "disabled");
			var b = captchaObj.getValidate(),
				c = a.get("model");
			c.vdata = b;
			var d = $.post("https://www.btcdice.com/welcome/signup", c, function(a, b, c) {
				try {
					1 == a.success ? window.location = a.link : alert(a.message)
				} catch (d) {
					alert(d.toString())
				}
			}, "json");
			d.fail(function(b, c, d) {
				alert("注册错误:" + d.message), a.set("captchaUrl", "https://www.btcdice.com/welcome/captcha?" + Date.now())
			}), d.always(function() {
				a.set("submitting", null)
			})
		},
		updateLang: function(a) {
			window.location.search = "?lang=" + a
		}
	}
}), WebApp.WelcomeReferralRoute = Ember.Route.extend({
	controllerName: "WelcomeSignup",
	templateName: "welcome/signup",
	viewName: "WelcomeSignup",
	setupController: function(a, b) {
		console.log("setupController", arguments), this._super(a, b), a.setProperties({
			"model.referId": b.referId,
			isReferral: !0
		})
	},
	beforeModel: function() {}
}), WebApp.WelcomeLoginView = Ember.View.extend({
	didInsertElement: function() {
		this.$("form").validate({
			rules: {
				login: {
					required: !0
				},
				password: {
					required: !0
				}
			}
		})
	},
	submit: function(a) {
		try {
			this.$("form").valid() && this.controller.send("submit")
		} finally {
			a.preventDefault()
		}
	}
}), WebApp.WelcomeSignupView = Ember.View.extend({
	validateRules: {
		login: {
			required: !0,
			minlength: 6,
			remote: "https://www.btcdice.com/welcome/signup/validate"
		},
		password: {
			required: !0,
			minlength: 6
		},
		password2: {
			required: !0,
			minlength: 6,
			equalTo: "#password"
		},
		nick: {
			required: !0
		},
		email: {
			required: !0,
			email: !0,
			remote: "https://www.btcdice.com/welcome/signup/validate"
		},
		captcha: {
			required: !0,
			remote: "https://www.btcdice.com/welcome/signup/captcha"
		}
	},
	didInsertElement: function() {
		this.$("form").validate({
			rules: this.validateRules,
			onkeyup: !1,
			focusCleanup: !0,
			focusInvalid: !1
		})
	},
	submit: function(a) {
		try {
			this.$("form").valid() && this.controller.send("submit")
		} finally {
			a.preventDefault()
		}
	}
});