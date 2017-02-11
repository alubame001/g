/**
 * 用户自定义脚本.
 */
(function(window, Object, undefined) {

// define a user behaviour
var Bdbg = qc.defineBehaviour('qc.engine.Bdbg', qc.Behaviour, function() {
    this.total = 0;
    this.light_obj = null;
    this.light_sound = null;
}, {
    bg: qc.Serializer.TEXTURE,
    light: qc.Serializer.TEXTURE,
    sounds: qc.Serializer.AUDIOS

});

// Called when the script instance is being loaded.
Bdbg.prototype.awake = function() {
      var bg_obj = this.game.add.sprite(this.gameObject);
            bg_obj.texture = this.bg;
            bg_obj.resetNativeSize();
      this.light_obj = this.game.add.sprite(this.gameObject);
            this.light_obj.texture = this.light;
            this.light_obj.resetNativeSize();            
  
    var self = this;
	this.light_sound = self.game.add.sound();
    this.light_sound.destroyWhenStop = false;
    this.light_sound.audio = self.sounds[0];
    this.light_sound.loop = false;
    this.light_sound.volume = 0.2;
   
    // 创建定时器
    var timer = self.timer = self.game.timer.loop(1000, self.updateCounter, self);   
//
};

// Called every frame, if the behaviour is enabled.
//Bdbg.prototype.update = function() {
//
//};
Bdbg.prototype.updateCounter = function() {
    this.total++;
    if (this.total%2>0) {
      	this.light_obj.visible = true;
        // this.light_sound.play();
    } else {
        this.light_obj.visible = false; 
    }
};
// define a user behaviour
var Bdlogo = qc.defineBehaviour('qc.engine.Bdlogo', qc.Behaviour, function() {
    this.total = 0;
    this.light_obj = null;
    
}, {
    bg: qc.Serializer.TEXTURE,
    light: qc.Serializer.TEXTURE
    

});

// Called when the script instance is being loaded.
Bdlogo.prototype.awake = function() {
      var bg_obj = this.game.add.sprite(this.gameObject);
            bg_obj.texture = this.bg;
            bg_obj.resetNativeSize();
      this.light_obj = this.game.add.sprite(this.gameObject);
            this.light_obj.texture = this.light;
            this.light_obj.resetNativeSize();            
  
    var self = this;

   
    // 创建定时器
    var timer = self.timer = self.game.timer.loop(1000, self.updateCounter, self);   
//
};

// Called every frame, if the behaviour is enabled.
//Bdbg.prototype.update = function() {
//
//};
Bdlogo.prototype.updateCounter = function() {
    this.total++;
    if (this.total%2>0) {
      	this.light_obj.visible = true;
        // this.light_sound.play();
        console.log("0");
    } else {
        this.light_obj.visible = false; 
    }
};
// define a user behaviour
var Building = qc.defineBehaviour('qc.engine.Building', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
}, {
    // fields need to be serialized
});

// Called when the script instance is being loaded.
Building.prototype.awake = function() {
   
};

// Called every frame, if the behaviour is enabled.
//Building.prototype.update = function() {
//
//};

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 主地图界面
 */
var MapUI = qc.defineBehaviour('qc.demo.MapUI', qc.Behaviour, function() {
    var self = this;

    // 天赋按钮和商店按钮
    self.talentBtn = null;
    self.storeBtn = null;

    // 登记本界面
    window.mapUI = self;
}, {
    // 需要序列化的字段
    talentBtn: qc.Serializer.NODE,
    storeBtn: qc.Serializer.NODE
});

// 界面初始化处理
MapUI.prototype.awake = function() {
    var self = this;

    // 天赋按钮被点击，显示天赋界面
    this.addListener(self.talentBtn.onClick, function() {
        window.talentUI.show();
        self.hide();
    });

    // 商店按钮被点击，显示商店界面
    this.addListener(self.storeBtn.onClick, function() {
        window.storeUI.show();
        //self.hide();
    });
}

// 显示本界面
MapUI.prototype.show = function() {
    this.gameObject.visible = true;
}

// 隐藏本界面
MapUI.prototype.hide = function() {
    this.gameObject.visible = false;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 远景跟着滚动
 */
var ScrollDistanceView = qc.defineBehaviour('qc.demo.ScrollDistanceView', qc.Behaviour, function() {
    // 参考的树对象
    this.tree = null;

    // 对象滚动1像素时，远景滚动的距离
    this.distance = 0.1;
}, {
    // 需要序列化的字段
    tree: qc.Serializer.NODE,
    distance: qc.Serializer.NUMBER
});

// 帧调度
ScrollDistanceView.prototype.update = function() {
    var targetDistance = Math.abs(this.tree.anchoredY);
    this.gameObject.anchoredY = -targetDistance * this.distance;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 天空跟着滚动
 */
var ScrollSky = qc.defineBehaviour('qc.demo.ScrollSky', qc.Behaviour, function() {
    // 参考的树对象
    this.tree = null;

    // 对象滚动1像素时，远景滚动的距离
    this.distance = 0.05;
}, {
    // 需要序列化的字段
    tree: qc.Serializer.NODE,
    distance: qc.Serializer.NUMBER
});

// 帧调度
ScrollSky.prototype.update = function() {
    var targetDistance = Math.abs(this.tree.anchoredY);
    this.gameObject.anchoredY = -targetDistance * this.distance - 960;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 商店界面
 */
var StoreUI = qc.defineBehaviour('qc.demo.StoreUI', qc.Behaviour, function() {
    var self = this;

    // 返回界面
    self.backBtn = null;

    // 登记本界面
    window.storeUI = self;
}, {
    // 需要序列化的字段
    backBtn: qc.Serializer.NODE
});

// 界面初始化处理
StoreUI.prototype.awake = function() {
    var self = this;

    // 返回按钮的处理：返回地图界面
    this.addListener(self.backBtn.onClick, function() {
        self.hide();
        window.mapUI.show();
    });
}

// 显示本界面
StoreUI.prototype.show = function() {
    this.gameObject.visible = true;
}

// 隐藏本界面
StoreUI.prototype.hide = function() {
    this.gameObject.visible = false;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 天赋树界面
 */
var TalentUI = qc.defineBehaviour('qc.demo.TalentUI', qc.Behaviour, function() {
    var self = this;

    // 返回界面
    self.backBtn = null;

    // 登记本界面
    window.talentUI = self;
}, {
    // 需要序列化的字段
    backBtn: qc.Serializer.NODE
});

// 界面初始化处理
TalentUI.prototype.awake = function() {
    var self = this;

    // 返回按钮的处理：返回地图界面
    this.addListener(self.backBtn.onClick, function() {
        self.hide();
        window.mapUI.show();
    });
}

// 显示本界面
TalentUI.prototype.show = function() {
    this.gameObject.visible = true;
}

// 隐藏本界面
TalentUI.prototype.hide = function() {
    this.gameObject.visible = false;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 天赋树的逻辑处理
 */
var Tree = qc.defineBehaviour('qc.demo.Tree', qc.Behaviour, function() {
}, {
});

// 初始化处理
Tree.prototype.awake = function() {
    // 初始时滚动到最下方
    this.gameObject.setNormalizedPosition(1, 1);
}


}).call(this, this, Object);
