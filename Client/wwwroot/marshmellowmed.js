(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"marshmellowmed_atlas_1", frames: [[1539,0,364,432],[1489,1607,339,155],[0,1746,311,164],[1974,932,70,70],[1974,1004,70,70],[1973,1076,70,70],[1801,1360,219,245],[1268,1478,219,245],[1268,1372,531,104],[2018,0,24,23],[1905,0,111,111],[1268,992,549,176],[1663,932,44,47],[1986,220,44,68],[1709,932,44,47],[1986,290,44,68],[1755,932,44,47],[1905,220,79,68],[1819,1114,44,47],[1905,290,79,68],[1865,1114,44,47],[1905,360,79,68],[1911,1114,44,47],[1649,1478,79,68],[1730,1478,44,41],[1986,360,44,59],[1905,113,105,105],[1819,932,153,97],[2018,25,24,23],[1268,1170,388,200],[1658,1170,384,188],[1539,932,73,39],[1489,1478,158,59],[1819,1031,152,81],[2012,113,29,7],[2018,50,18,8],[1539,434,476,260],[1539,696,486,234],[0,992,1266,752],[0,0,1537,990],[1614,932,47,47]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_43 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(img.CachedBmp_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3073,1979);


(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5330,3363);


(lib.CachedBmp_32 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(img.CachedBmp_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2513,914);


(lib.CachedBmp_28 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CSS = function() {
	this.initialize(ss["marshmellowmed_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titleBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.gameInstruction = new cjs.Text("העבירו את העכבר על המרשמלו כדי לעצור ולהגדיל אותו", "normal 400 15px 'Assistant'", "#342666");
	this.gameInstruction.name = "gameInstruction";
	this.gameInstruction.textAlign = "center";
	this.gameInstruction.lineHeight = 26;
	this.gameInstruction.lineWidth = 412;
	this.gameInstruction.parent = this;
	this.gameInstruction.setTransform(0,61.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameInstruction);
	}

	this.gameInstruction_1 = new cjs.Text("לחצו על השיפוד המתאים על מנת למיין את המרשמלו לקטגוריה הנכונה", "normal 600 18px 'Assistant'", "#342666");
	this.gameInstruction_1.name = "gameInstruction_1";
	this.gameInstruction_1.textAlign = "center";
	this.gameInstruction_1.lineHeight = 30;
	this.gameInstruction_1.lineWidth = 524;
	this.gameInstruction_1.parent = this;
	this.gameInstruction_1.setTransform(0,40.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameInstruction_1);
	}

	this.gameName = new cjs.Text("gggggggggggggggggggggggggggggg", "normal 700 28px 'Assistant'", "#342666");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 44;
	this.gameName.lineWidth = 496;
	this.gameName.parent = this;
	this.gameName.setTransform(-2,8.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameName);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gameName},{t:this.gameInstruction_1},{t:this.gameInstruction}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#DED6EB","#E2DAED","#AC93C5","#FFFFFF","#F9F7FB","#E8E2F0","#CDBEDD","#BCA9D2"],[0,0.22,0.459,0.812,0.839,0.898,0.969,1],-239.7,0,233.8,0).ss(6.6).p("Egh+gG0MBD9AAAQC9AACGCAQCHCAAAC0QAAC0iHCBQiGCAi9AAMhD9AAAQi9AAiGiAQiHiBAAi0QAAi0CHiAQCGiAC9AAg");
	this.shape.setTransform(0,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egh+AG1Qi9AAiGiAQiHiBAAi0QAAi0CHiAQCGiAC9AAMBD8AAAQC+AACGCAQCGCAAAC0QAAC0iGCBQiGCAi+AAg");
	this.shape_1.setTransform(0,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titleBG, new cjs.Rectangle(-275.7,-13,551.4,103.1), null);


(lib.skewForSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68D60").s().p("AgUJYQgGgDAAgDQABkBAHlSIADoJIAAgBIAXhOIASBNIABACIgDIJQgGFPgCEEQAAAIgUAAQgJAAgHgCg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skewForSmore, new cjs.Rectangle(-2.7,-60.1,5.4,120.30000000000001), null);


(lib.singleMarshForSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-17.85,-20.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_40();
	this.instance_1.setTransform(-17.85,-20.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-20.9,35,35);


(lib.singleMarshForEndSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EEE6").s().p("AjCDDIAAmFIGFAAIAAGFg");
	this.shape.setTransform(-1.3333,-0.5872,1.7518,1.4188);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(-17.85,-20.9,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7E5D4").s().p("AgeFsQi3gHhjgVQhjgWgRgXQBRAoCRgBQDHAAB5gsQBPgZA8g4QA8g5AehNQAjhjAIhwQAKhKAEgmQAHhCgFgvQAMANACAKQALAfgDAgIgOEpIgNEmQgGAuh5AGQg8AChNAAQhMAAhbgCg");
	this.shape_1.setTransform(-0.1328,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},2).wait(2));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7E5D4").s().p("AhqgCQgEgBABgEQABgFAEABQBpAXBogOQAFAAAAAEQABAEgEABQglAFgsAAQhCAAhCgOg");
	this.shape_2.setTransform(0.4323,-35.0893,2.5112,2.5112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhqgCQgEgBABgEQABgFAEABQBpAXBogOQAFAAAAAEQABAEgEABQglAFgsAAQhCAAhCgOg");
	this.shape_3.setTransform(0.4323,-35.0893,2.5112,2.5112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D6D7").s().p("AAIBEQgFgBhVgXQg2gPgjAJIgBgwQAbgFAyAMQA1AOAuAFQA5AGAvgdQANgJAUgWQAVgXALgIIgEBPQgUATgXARQgkAYgyAAQgPAAgRgCg");
	this.shape_4.setTransform(-1.043,-6.2142,2.5112,2.5112);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},2).wait(2));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D6D7").s().p("AmWA6QgKg4ArgeQAtggBggEQCxgGA4AgIAdAWQANAJAVgBQANAAANgYQALgVAkAFICHAPQBOAJA7AOQg5ADg8AIQgxAHgRgBQgngEhIAOQhMARgcAEQidAciCAAQhFAAg9gIg");
	this.shape_5.setTransform(-3.536,-36.7086);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},2).wait(2));

	// Layer_7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8EEE5").s().p("AgGGMQixgGi+giQgcgFgSghQgIgUABgSIgKluQgFiJAMhcQAFglBFgXQA9gUBSgBQCUgBAeAfQAJAQAFAFQAJAMAXAAQArAAAOgNQAHgGAHgRQAYgZDFAjQA0AKASAGQAvANAKAUQAKAggEAfIgOEpIgMEmQgEAUgXANQgSAMgXABQijAHhtAAIhNgBg");
	this.shape_6.setTransform(-1.0804,-3.7194);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,54.4).s().p("AgGGMQixgGi+giQgcgFgSghQgIgUABgSIgKluQgFiJAMhcQAFglBFgXQA9gUBSgBQCUgBAeAfQAJAQAFAFQAJAMAXAAQArAAAOgNQAHgGAHgRQAYgZDFAjQA0AKASAGQAvANAKAUQAKAggEAfIgOEpIgMEmQgEAUgXANQgSAMgXABQijAHhtAAIhNgBg");
	this.shape_7.setTransform(-1.0804,-3.7194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-43.4,87.69999999999999,79.5);


(lib.Path_330 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AsBAiQAKgKBPg5IVzAAIA3BDg");
	this.shape.setTransform(77,3.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_330, new cjs.Rectangle(0,0,154,6.8), null);


(lib.marshQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D6D7").s().p("AgwKGQk8gOkbhwQg3gWgVgkQBPAoBtAQQBSAMBxAAQCegBB0gNQCXgSBzgqQCKgzBhhZQBnheAyiDQAehOAShiQANhGALhwQAQh+AHhAQAMhwgIhOQAQASAJAWQAJAWACAeQABASgBAmQgHCngRFOIgJEKQgIDQgFAWQgHAgglAVQgWAMgvANQkCBIkKAAQgrAAgtgCg");
	this.shape.setTransform(3.52,6.9255);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D6D7").s().p("AAkEfQhOgMhzghQiAgmhAgRQjmg+iXAlIgFjOQBHgNBgAMQA7AHBmAXIDTAxQB7AbBZAGQB9AJBrgWQB6gaBbg/QA1gkBVhfQBYhfAxgkIgQFTIhaBPQg0AsgrAdQiYBojOAAQhEAAhJgLg");
	this.shape_1.setTransform(1.9,-5.8624);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D6D7").s().p("AqLBTQAjhBCAgpQBSgaBxgOQD/ghDkANQEWAPC4BRQjAgkhmgKQiigPiJAZQg+ALhuAaQiDAggxAKQiZAgh0AAQgwAAgpgFg");
	this.shape_2.setTransform(-4.5,-66.7062);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8EEE5").s().p("AggLdQk9gNkahxQg9gYgTgoQgMgfABgiIgPprQgFkCAPiAQAKhTCNg0QBXggCDgRQEEghDmANQEZARC5BVQAwAWAcAWQAnAdAPAlQAJAWACAeQABAVgCAiQgGCogRFOIgKEJQgIDQgEAWQgHAhgmAVQgWAMgvANQkBBHkKAAQgsAAgsgCg");
	this.shape_3.setTransform(1.9696,-1.9434);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.marshQ, new cjs.Rectangle(-72,-75.5,147.9,147.2), null);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-54.8,-61.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-61.1,109.5,122.5);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(-54.75,-61.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-61.1,109.5,122.5);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],0,70.7,0,-70.6).s().p("AgfLBQkwgNkPhsIgVgKIgBAAQgkgTgPgaIgBAAIgDgHQgKgUgBgqIgOpUQgDhZAChgQACh3AIhDQACgSAKgRQAuhWDQgpIAggGIACAAIA3gIQBQgLBZgGIAdgCIAVgBIAIAAQDEgJCnAVQDAAYCIA+QArAUAaATQAjAZAQAfIAAABIAFAKQAJAWACAdQABATgBAiQgHChgQFBIgKD/QgHDIgEAVQgHAfgkAUQgVAMgtAMQj4BFj/AAQgrAAgqgCg");
	this.shape.setTransform(0.0181,0.0245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-70.6,142.1,141.3);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjfLAQgcgCgNgpQgLgoAPgUQANgQgEgqQgDghgLgaQgJgYgYgUQgagWgCAVQgCASgIAXIgKAfQgKApgVAAQgTgBAEgWQARhaAFgwQADgiggg6QgYgegTgbQgEgCgCAAQgbABgOAIQgbAOAHAkQAIAlgWgLQgUgKgIgTQgEgIAGhXQAHhZgEgQQgHgcgUgSQgWgUgMAYQgHANgPgFQgOgEgMgQQgggpAfgeQAbgbAHg0QgGgcAGgVIACgFQAHgPAYgXIFOk0QAxguA6gwQBFg7AqgdQAMgIAOgDQBHgRCBBjIATAPIABABIAhAbQAuApAxAwIAfAgQBoBsBIBqQBTB7AhBtQAXBJgRArIAAAAIgEAIQgNAagpAgIgtAlQhpBViKBtIiXB7Qh3BggOAIQgVAMgdgKQgRgHgegTQgRgLgOgKIAAAAQgagKgbgDQg1gGACAiIAEBKQgCAegZAAIgEgBgAnmIqQgBgrATg5QAKgcAKgUQAGAZgGA1QgEAgAIAYIALAiQACAJgIAHQgIAIgKABIgCAAQgaAAgBgtgAqYDYQgLgSAFgaQAEgSAVgUQAKgKAKgHQAJAZAFAZQAKA0gYAIQgIADgHAAQgQAAgIgOg");
	this.shape.setTransform(67.2492,70.4657);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,134.6,140.9), null);


(lib.SingleMarshBarColor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EEE5").s().p("Ah1ByQgKgDgFgJQgCgGAAgHIgDhzQgBgkADgkQADgbBCgIQAxgGAqADQA0ADAjAQQAPAFAJAPQADAJgBALIgEBdIgCAyQgBAngBAEQgCAJgUAGQgyAOgxAAQg/AAg/gYg");
	this.shape.setTransform(13.8375,13.7674);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SingleMarshBarColor, new cjs.Rectangle(0,0,27.7,27.6), null);


(lib.progressBarSpike = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68D60").s().p("EgARAmZQgFgKAAghMAAAhJeIAbiwIARCwUAACAI+gACBAhQAAAigEAJQgDAHgOAAQgNAAgFgIg");
	this.shape.setTransform(0.0125,-246.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBarSpike, new cjs.Rectangle(-2.3,-493,4.6,493), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_35();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,265.5,52), null);


(lib.textCon100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text_box = new cjs.Text("סססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססססס", "normal 700 52px 'Assistant'", "#25224C");
	this.text_box.name = "text_box";
	this.text_box.textAlign = "center";
	this.text_box.lineHeight = 103;
	this.text_box.lineWidth = 574;
	this.text_box.parent = this;
	this.text_box.setTransform(0.25,-292.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_box);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEBEB").s().p("Egx/AtvMAAAhbdMBj+AAAMAAABbdg");
	this.shape.setTransform(-0.05,-3.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_box}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textCon100, new cjs.Rectangle(-320,-296,639.9,585.5), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.startGameBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.text = new cjs.Text("!בואו נתחיל", "normal 400 30px 'Assistant'", "#777777");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(0,-14.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#342666"},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E4E4E4","#D1D1D1","#D4D4D4","#999998"],[0.024,0.29,0.514,1],-103.6,0,103.7,0).s().p("AsFEHQhtAAhMhNQhOhNAAhtQAAhsBOhNQBNhNBsAAIYKAAQBuAABMBNQBOBNAABsQAABthOBNQhMBNhuAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],-104.8,0,104.9,0).s().p("AsFEHQhtAAhMhNQhOhNAAhtQAAhsBOhNQBNhNBsAAIYKAAQBuAABMBNQBOBNAABsQAABthOBNQhMBNhuAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-26.2,207.3,52.5);


(lib.gameChoiceWindowBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25224C","#383E87"],[0,1],-304.2,0,220.9,0).s().p("A+BQrQh3gBhUhTQhUhVAAh3IAA4VQAAh3BUhVQBUhUB3AAMA8DAAAQB3AABUBUQBUBVAAB3IAAYVQAAB3hUBVQhUBTh3ABg");
	this.shape.setTransform(304.2,106.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceWindowBG, new cjs.Rectangle(83.3,0,441.8,213.3), null);


(lib.gameChoiceBGtrees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceBGtrees, new cjs.Rectangle(0,0,1536.5,989.5), null);


(lib.gameChoiceBGground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303A7F").s().p("AyaPPQkchAkji0Qj3iYisi2QihirAPhKQAPhFCEgmQB/gkDcgDQHQgGJ0CCQJ0CDGmC/QDIBaBmBVQBqBXgOBFQgNA+htAHQguADjsgNQjlgNioAOQj7AVjcBSQiiA9i2AAQiDAAiPgggAJTiEQkWgEkyhwQkDhejDiJQi3iAAAhHQAAhDB0g9QBvg7DMgtQGvhgJiAAQJjAAGwBgQDMAtBvA7QB0A9AABDQAAA8hlAcQgqAMjeAhQjYAgiaAuQjnBEi8B4QjpCTk/AAIgTAAg");
	this.shape.setTransform(500.1321,148.9834);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272F69").s().p("AMQOnQkbhBjdh1QjQhvgJhKQgIhGBxhOQBthMDPhJQG1ibJ9hPQJ8hNHPArQDaAVB8AvQCBAxAIBFQAIA/hmArQgqARjkA/QjdA+ibBDQjnBli1CVQjmC9laAlQhUAKhYAAQjXAAjtg3gA87hHQkkgElCh1QkRhjjNiQQjBiGAAhMQAAhGB6hAQB2g9DWgwQHFhlKCAAQKBAAHFBlQDXAwB1A9QB6BAAABGQAAA/hqAeQgsAMjqAjQjjAiiiAwQjyBIjGB+Qj0CalOAAIgVAAg");
	this.shape_1.setTransform(1349.2758,124.4573);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#28316E","#1D1938"],[0,1],-883.8,0,883.9,0).s().p("EBB3Ae9Ql1AAnMg4Qn8hHkKgcQnKgxmfANQjDAGkcgNIpngjQvug4xlAAQ1AAHsCgBQ12gBp/gkQ4ahZslm3QqQlliJpDQhlmlC0oPQA4imBbi/QBVirAQgpQAziBEYhMQDkg+G/gqQBegIMIg5QI3gpFfgwQHchBIFAIQFZAGQKAtQBkADSpBFQPLA4DXgMQE4gQFXglQDGgWF3gtQK7hSJWAAQIAAAFdARQI8AcG6BPQFEA6GdgrQD5gaHeheQHThdDTgUQFigiDwBIQDPA+EEA6QCUAiENA4QDhAyCJArQCzA5B+BJQI1FJD3HKQDfGehIG7QhEGmk1FHQk7FNnNB7QrJDKk0BLQnQByuRCVQopBanxAAIgFAAgEhYdgHkQjcACh/AlQiEAmgPBEQgPBKChCrQCsC1D3CZQEjC0EcBAQFUBLEWhoQDchTD7gVQCpgODlANQDsAOAugDQBtgIANg+QAOhEhqhYQhmhUjIhZQmni/p0iDQpXh9nBAAIgsABgEBhEgK6Qp8BOm2CcQjPBJhtBMQhxBOAJBFQAJBLDQBtQDcB1EcBBQFNBNEjgfQFZgmDmi8QC2iUDnhlQCbhEDdg9QDjg/ArgSQBlgqgHg/QgJhGiAgwQh8gvjbgVQingQi+AAQlQAAmWAygEg/AgV5QjMAthvA7Qh0A9AABCQAABIC3CAQDDCIEEBfQEyBvEWAEQFLAFDwiYQC8h3DnhFQCagtDYghQDeghAqgMQBlgcAAg8QAAhCh0g9Qhvg7jMgtQmwhgpjAAQpiAAmwBggAez5YQjWAvh2A+Qh5BAAABGQAABLDACHQDNCPESBjQFBB1EkAEQFcAFD7ifQDHh9DxhIQCigwDkgiQDpgjAsgMQBqgeAAg/QAAhGh5hAQh2g+jWgvQnGhlqBAAQqBAAnGBlg");
	this.shape_2.setTransform(883.8485,198.1299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceBGground, new cjs.Rectangle(0,0,1767.7,396.3), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.BGmountainsFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#394A95","#33428F"],[0,1],-39.3,-38.6,40.7,33.5).s().p("AmHFAQjBl8iolaQCJgSCrgrQC7guB5gSQBDgICXgfQCdghA+gHQARAuBbB3QBbB2ARAvIgeEWQBrCVCfDdQjIB9jDB2QmCiSlriRg");
	this.shape.setTransform(433.775,137.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#394A95","#344390","#33428F"],[0,0.91,0.988],258.2,206.1,-152.3,-82.6).s().p("AwtX4QjBsFisruQCnh9BUhEQCZh7ADgvQABgZg9hIQhLhUgcgjQEMksDvkTQIai3IGjDIBdFDIhrEgQD/CcCpBkQFCFbFKFTQkJIlj8HtQgpBRg9CIIhvDzg");
	this.shape_1.setTransform(247.45,209.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#33428F","#394A95"],[0.012,1],-143,-75.4,33.6,38.2).s().p("Ana0sQDlhEDPhAQBlDEBpDGQgSAfgyBMQgnBCADARQAFAeB/BHQBHAmCLBIIBFHJQi3CujMC9QDLGoC2FsQnXEGncD4g");
	this.shape_2.setTransform(47.5,145.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#33428F","#3F4E99"],[0,1],0,219.3,0,-127.6).s().p("EhG7AcVMAAAg2lQDlhEDPhAQFWEpFnEpQEkCiFpDAQITi0IPjGQDcCeCiByQDFBJCeA4QCJgSCrgrQC6guB6gTQBDgHCYgfQCcghA+gHQIcD4LEEpQX8TcZ9Qtg");
	this.shape_3.setTransform(454,181.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3F4E99","#354491"],[0,1],-56.3,-3.9,130.9,126.1).s().p("A52TMIDdh1IA+lwIBilHIAXjvQDRg4CnguQAxhjBIiXQEuhaFZhuIgsjaQCAhHDOh4QhrjGiAj1QKiD8K5DcQC9DqCSCxQjfFRj7FrQmDE/mBEqIiCD/g");
	this.shape_4.setTransform(770.15,225);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#354491","#3F4E99"],[0,0.949],177.4,156.8,-33.3,22.9).s().p("A5ATIQE/jOFjjxQEjiED+h5Ih+oEQDHj5CXjEIDHgFIASjGQCNgyDfhSIkFnDQCuBcCLBIQApAcBiBAQBWA7AlAxQAgAqBGApQAoAXBNAoQAmAWBVAuQBQArAkAWQBUA0B6CSIDHDyQhrF0hXEkQiGD9ipE5IB3CGg");
	this.shape_5.setTransform(986.625,225.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3A488E","#354491"],[0,1],0,175.5,0,-135).s().p("EhApAbDQIAntHXnpQDQkyC8kgQE0hcEehcQFoleFNlYQKnD8K3DcQErhOE0hXQDYigC3iMIE5ClQOyosOIpvQIYEjISEDMAAAAtfg");
	this.shape_6.setTransform(912,174.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGmountainsFront, new cjs.Rectangle(0,0,1325.8,362.6), null);


(lib.BGtrees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(0,73.45,0.1129,0.1129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#28316E","#1D1937"],[0,1],-360.6,232.3,-360.7,-153.8).s().p("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");
	this.shape.setTransform(730.025,233.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#28316E","#1D1937"],[0,1],-3192.4,2056.9,-3193.9,-1362).s().p("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");
	this.shape_1.setTransform(6463.55,2063.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#353087","#2C2A66"],[0,1],-46.4,-111.7,-35.7,69.4).s().p("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GgDgAw0uWIABgGIgGgDgAs/ueIAEAIIAHgPgAovubIACgDIgHgDgAh3ueIABACIACgCIgBgBgAuZudIALgZIgJAHIABAGIgMgHgAs/ufIABgGIgGgDgAorunIABAFIAFgHgEAhLgOpIADAFIADgDIABgEgAm/urIAAgDIgEgBgArourIAEgHIgHgCIAAABIAAgBIgCAAgAj6u0IABADIADgEgArku4IAAAEIADgIgAt3u0IACgEIgFgCgAgnu7IADAFIACgEIgEgCgEAi+gO8IABgCIgDgBgEAkCgPAIACADIADgFgAftvBIAAgCIABgCIgGgEgAkBvCIABgHIgGgEgEAkAgPDIABgFIgFgDgAsevIIACADIADgHgAm0vJIABACIAAABIACgFgEAgogPJIABACIADgDgAjHvKIABADIACgFgAlCvIIADgEIgFgCIgBAAgAsfvIIABgHIgHgDgAqyvNIABADIACgEIgBAAgApcvPIABABIAAACIACgEgAlovPIABACIADgEgEAimgPQIACgFIgDgBIgBABIAAgBIgFgCgAA5vSIACACIADgFIgBAAgEAi8gPSIACgEIgHgEgEAjkgPVIABACIACgDgEAhNgPZIADAGIAEgKgAjMvUIACgIIgHgEgAqGvdIAAAFIAFgJgAlsvZIAAgFIABgBIgHgEgAgovaIAKgRIgIAFIABAEIgJgFgAmavgIABAGIAGgJgEAjhgPbIACgKIgKgGgAd0vhIAFAGIACgDIgFgDgEAhLgPdIABgIIgHgDgAf5viIABABIAAADIADgGgAf0vrIACgIIAAgBIgMgIgAq1vsIABgFIgEgBgEAgigPwIAJgTIgNAHIABgGIgIgHgEAiBgPyIACgGIgDgCIgCABIAAgCIgDgCgAYxv5IADAEIAEgHgAh4v7IABAGIAHgIgAA2v6IADADIADgEIgCAAgAhNv4IACgDIgFgCgAUav4IABgCIgEgBgAXWwAIABgCIgDgCgAiPwDIABABIAAACIADgEgAGlwDIAAgCIgDgCgAitwEIAAgCIgCgCgAhHwJIABAEIACgFgAYkwIIAAgDIABgBIgGgCgAD7wIIACgDIgEAAgAiTwJIABgEIgFgBgAEZwMIACABIACgCIgCAAgAd4wRIADAGIADgEIgDgCgAF+wSIACACIACgDgAACwSIAAgEIgCgBgAA9wfIABADIADgGgAkjwcIACgDIgFgCgAYAwgIACADIAFgGgAYxwiIABACIACgDgAE2wgIABgCIgEgBgAcKwnIACAEIAFgFgAA6wkIABgFIgFgCgAGgwrIAGAHIAGgJIgEgCgAYrwrIABgJIABgBIgPgFgAWpwrIAAAAIACgFIgJgEgAfAwxIABAFIADgGgAGfwsIABgGIgGgCgAS8wxIACADIADgFgAZ5w0IABACIACgDgAD8w0IABgCIgCAAgAB5w2IAEgIIgGAEIAAgDIgEgCgABgw5IABADIACgGgAAgw2IACgJIgIgCgAd1w4IADgEIgHgEgAcrw6IABgCIgBgCIgBAAgAcAw8IACgIIgHgFgAOYw+IACABIACgDgABdw/IABgJIgHgCgANixEIAEAEIAFgIgAF+xEIACAEIAEgHgAKRxHIAEAGIAFgHIgDgBgAd6xJIABAHIAEgJgAGmxIIADADIADgFgADWxGIABgEIgEgCIgBAAgAaPxMIACAFIAHgIIgFACIAAABIgBgBgAE7xIIAAgBIAIgKIgEABIAAADIgKgGgAZ5xNIADAEIADgIgAYBxKIAGgLIgCgBIgIAFIABgHIgMgEgAGlxLIACgKIgOgGgACPxOIACgFIgFgBIAAAAIAAAAIgCgBgAMpxSIACACIACgCIgCgBgANZxTIAAgCIgDgCgAD+xUIAAgBIADgFIgJgBgACQxYIABADIADgGgAEZxWIAEgEIgHgDgAFXxfIAEAIIAIgOgAWwxXIABgKIgMgFgAR/xXIABgDIgDgCIAAAAgAeZxkIACALIAIgOgActxZIAGgLIgFACIAAAEIgHgFgALexgIAEAHIAIgMIgGADIAAABIgCgBgAdKxaIACgDIgGgEgAEBxeIAAAEIAEgGgAFWxfIABgGIgEgDgAVXxlIADADIADgCIgEgCgAC2xnIACAEIADgHIgBAAgAdOxvIABALIAHgOgAUYxrIACADIADgGgAF8xvIADAHIAFgMIgFAEIAAACIgDgBgAKTxpIADgDIgGgDgAa0xvIADAGIAGgLIgDACIAAACIgCgBgANixxIADAEIAFgHgAKYx1IABAFIAFgHgAXVx1IABADIADgGgAUUxzIABgHIgHgEgAS8x2IAKgUIgIAFIABAEIgLgGgANfx2IAAgEIgEgCgAI2x7IACADIAFgJgAMFx4IAAgEIgEgBgAVbx7IAKgVIgKAFIABAFIgJgGgAPwyAIACAFIAGgIIgEABIAAABIgBAAgAU7x8IACgGIgJgFgAXQx9IABgIIgHgDgAPayCIACAFIAEgIgAT8x+IADgFIgCgBIgCAAIAAgCIgDgCgAOzx+IAAgCIgDgBgAIVyBIABABIABgCgAC4yBIAAgFIAAAAIgEgBgAU+yJIABADIACgEgAO1yQIACAKIAIgQgAOXyHIAIgSIgKAGIAAgDIgIgFgAV6yIIABgDIgDgCIAAAAgARgyIIAIgQIgGAEIABAEIgJgFgAIRyLIAAgCIACgFIgIgEgAMOyXIABACIAAACIAEgGgAH5yVIACgEIgFgCgAJnydIABABIAAABIADgDgAQVykIADAGIAFgKIgCABIAAACIgCgBgAMpyuIABAGIAHgJgAbfyzIABAEIACgGgAK2yzIABgCIgCgBgAHdzDIABgCIgCgCgAHfzPIABAGIAEgKg");
	this.shape_2.setTransform(645.45,311.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#353087","#2C2A66"],[0,1],-411.5,-988.9,-316.1,614.4).s().p("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");
	this.shape_3.setTransform(5714.775,2756.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGtrees, new cjs.Rectangle(0,0,12279.5,4127.4), null);


(lib.BGsky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B4789","#0F4889","#184C89","#194C89","#1D4D89","#29508A","#3A568B","#4E5D8C","#66688C","#82778D","#9E888D","#A78E8C"],[0,0.118,0.18,0.184,0.286,0.353,0.412,0.467,0.514,0.561,0.604,0.616],-1.7,-378.1,-1.7,378.1).s().p("Ehm+A52MAAAhzrMDN9AAAMAAABzrg");
	this.shape.setTransform(659.1,370.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGsky, new cjs.Rectangle(0,0,1318.2,740.3), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("EhjpAa3QBNgxCIhLQEQiUEnh8QOumJMpAPQD5AFGeBMIFSBBQDEAjCKATQF1AwEAgtQE+g5DbjPQJupNQcgxQFCgQG8AkIEwAbQCXAMBOgDQNpgXfvzNQJ6mAKjnMQFRjmDSiYIAAKxQiZCWmnEoQnGE+oaFHQprF3ouEYQqIFHniCaQmEB9nzACQllABn/hDImJg2QjbgeiBgLQlgggiYBCQiBA4juC5QkmDliGBUQkQCpkLA5QlMBIlwhaQmBhcn8gJQoFgImGBUQlFBHuHFBQnEChmCCTg");
	this.shape.setTransform(638.825,217.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,1277.7,435.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("Eg/iAa5QBJieBvixQDfljDEhdIDth0QCThCCGgcQFthMHqCkQClA4ExAiQFWAnFZgLQGYgNFAhRQF0hfDXi1QB1hhKwpUQKrpPBXhPQDKi1INpJQEGkmDekAIODAAQjQD4kwFBQpgJ+nhFkQijB4lhETIpxHnQsCJViBAwQpmDhvIgWQnVgLqrhXQkigmleB7QiiA6h8BOQiCBTg/BZQhsCakKEEQiFCChwBjg");
	this.shape.setTransform(406.675,211.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,813.4,423.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("Ehk0AOyQJ7maM4hfQLlhVNhCqQF+BMEWgaQDogVELhrQCjhBGFi0QGTivGih8QHbiPI/gPQHWgNJQBIQFKApKuB0QJqBoEkAdQK8BEU0tqQGhkRGulPQDXinCDhxIgcEgIBJPhQh5A9kbCcQo0E2siHbQm/EIn7AaQmiAVnsiNQk8hbn+jaQkjh9hNgfQjEhQiJgoQoOic1xGOQnBCApcDOQpFDLipA2QjlBJlBgfQjegVmFhbQnohziXgaQlqhAkMAVQn/AppEFoQkiCzi8Csg");
	this.shape.setTransform(645.325,159.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,1290.7,320), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,1256.5,457), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,274.5,88), null);


(lib.redX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20F14").s().p("AjpE0QgeAAgXgWQgWgUABghQAAgfAVgWIHTnSQAVgVAgAAQAeABAXAUQAWAUgBAhQAAAggVAVInTHSQgVAWgeAAIgCAAg");
	this.shape.setTransform(40.9867,-34.0019,0.4554,0.4554);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E20F14").s().p("AC1EeInTnSQgWgWABgfQAAgeAVgXQAVgWAgABQAgAAAVAVIHTHSQAWAWgBAfQAAAegVAXQgVAWggAAQggAAgVgWg");
	this.shape_1.setTransform(40.9867,-33.9908,0.4554,0.4554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redX, new cjs.Rectangle(27,-48,28,28.1), null);


(lib.endscreenSpike = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D28148","#E3AB7A","#D4874F"],[0,0.463,1],-7.8,-3.1,11.8,-3.1).s().p("AALdyQgLAAgFgCQgFgFgHgEQgUgKgBgPIAEttQABg3ACALMgAIgldQgCgBAAgEIADkIIAli8IAnC8IgEEBIAABCMAAIAraIgCHmQAAAPgUAKQgHAEAFAFQADACgKAAg");
	this.shape.setTransform(1,-190.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endscreenSpike, new cjs.Rectangle(-3.2,-381,8.4,381.2), null);


(lib.speed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_1
	this.text = new cjs.Text("x", "normal 700 15px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 18;
	this.text.parent = this;
	this.text.setTransform(-5.45,-9.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("1", "normal 700 23px 'Assistant'", "#332666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 18;
	this.text_1.parent = this;
	this.text_1.setTransform(5.5,-14.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{color:"#332666",x:5.5,text:"1",lineWidth:18}},{t:this.text,p:{color:"#332666",x:-5.45}}]}).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5.5,text:"1",lineWidth:18}},{t:this.text,p:{color:"#D4C8D3",x:-5.45}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5,text:"0.5",lineWidth:36}},{t:this.text,p:{color:"#332666",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5,text:"0.5",lineWidth:36}},{t:this.text,p:{color:"#D4C8D3",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5,text:"1.5",lineWidth:36}},{t:this.text,p:{color:"#332666",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5,text:"1.5",lineWidth:36}},{t:this.text,p:{color:"#D4C8D3",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5.5,text:"2",lineWidth:18}},{t:this.text,p:{color:"#332666",x:-5.45}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5.5,text:"2",lineWidth:18}},{t:this.text,p:{color:"#D4C8D3",x:-5.45}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-16.9,50,33.8);


(lib.skiptonext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// _Group_
	this.text = new cjs.Text("דלגי לשלב הבא\n!לא לשכוח למחוק אותי", "normal 700 15px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 135;
	this.text.parent = this;
	this.text.setTransform(1.25,-22);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-86.1,0,86.2,0).s().p("ApgC6Qj9hNAAhtQAAhrD9hOQD+hNFjAAQFkAAD8BNQD9BNAABsQAABtj9BNQj6BNlmAAQllAAj8hNg");
	this.shape.setTransform(0.075,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skiptonext, new cjs.Rectangle(-86.1,-26.2,172.39999999999998,88.7), null);


(lib.skip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("דלגו", "normal 700 23px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(0,-15.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FCEBEB"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-17,53.5,34.1);


(lib.playagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,6.6).s().p("Ag4BEQgFgDAAgGIAAh1QAAgGAFgDQAGgDAFADIBlA7QAGADAAAFQAAAGgGADIhlA7IgFACIgGgCg");
	this.shape.setTransform(1.425,0);

	this.text = new cjs.Text("שחקו שוב", "normal 400 15px 'Assistant'", "#F7C7CB");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(-22.45,57.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,43.4).s().p("Ak4DyQgcAAgVgUQgUgVAAgcIAAidQAAgcAUgUQAVgUAcAAIFXAAIBti9IAbC9ICSAAQAdAAAUAUQAUAUAAAcIAACdQAAAcgUAVQgUAUgdAAg");
	this.shape_1.setTransform(-22.45,54.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,6.6).s().p("Ag4BEQgFgDAAgGIAAh1QAAgGAFgDQAGgDAFADIBlA7QAGADAAAFQAAAGgGADIhlA7IgFACIgGgCg");
	this.shape_2.setTransform(1.425,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,18.5).s().p("Ag/CuQgjgOgbgcQgagagPgjQgOgiAAglQAAglAOgiQAPgjAagaQA3g3BNAAQBNAAA3A2IATgTQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQACABABADIAGA9QAAAEgCACQgCACgEAAIg9gGQgDgBgBgCQgBAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBIATgUQgvgthBAAQhBAAgvAvQgvAvAABBQAABCAvAvQAuAuBAABQAyAAApgbQAngaATgsQADgGAGgCQAGgCAFADQAFADABAFQACAFgCAFQgOAggaAaQgaAaghAPQgiAOgkABIgFAAQgkAAghgOg");
	this.shape_3.setTransform(-0.0056,0.0032);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,18.5).s().p("Ag/CuQgjgOgbgcQgagagPgjQgOgiAAglQAAglAOgiQAPgjAagaQA3g3BNAAQBNAAA3A2IATgTQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQACABABADIAGA9QAAAEgCACQgCACgEAAIg9gGQgDgBgBgCQgBAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBIATgUQgvgthBAAQhBAAgvAvQgvAvAABBQAABCAvAvQAuAuBAABQAyAAApgbQAngaATgsQADgGAGgCQAGgCAFADQAFADABAFQACAFgCAFQgOAggaAaQgaAaghAPQgiAOgkABIgFAAQgkAAghgOg");
	this.shape_4.setTransform(-0.0056,0.0032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-18.8,90.3,98.5);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,7.2).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape.setTransform(-5.7,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,7.2).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_1.setTransform(5.7,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_2.setTransform(-5.7,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_3.setTransform(5.7,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,16.5).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_4.setTransform(2.525,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-10.7,0,10.8,0).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_5.setTransform(2.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-12.4,21.5,24.9);


(lib.muteBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-26.25,-26.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muteBTN, new cjs.Rectangle(-26.2,-26.3,52.5,52.5), null);


(lib.mute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,6.3).s().p("AgVBRQgFgEgBgGQAAgHAEgFQAVgZAAgiQABgggUgbIgBgBQgEgFABgGQACgHAFgDQAFgEAGACQAHABACAFQAbAjgBArQgBAsgbAiQgEAFgIAAQgGAAgDgDg");
	this.shape.setTransform(6.224,0.3025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,9.2).s().p("AgeB6QgFgEAAgHQgBgGAFgFQAkgqABg5QAAg4gjgsQgEgFABgGQAAgGAFgEQAFgFAGABQAGAAAFAFIgBABQArA0gBBDQgBBEgsAzQgEAFgHAAIgBAAQgFAAgEgDg");
	this.shape_1.setTransform(11.1228,0.3753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,10.6).s().p("AA7CBIg4g2QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQATADAKgPIA4g2QAEgEAEABQAEABAAAIIAAD1QAAAHgDACIgCAAQgDAAgEgDg");
	this.shape_2.setTransform(-5.6,0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-5.4,3.1,8.2,3.1).s().p("AgKB6QgEgEgBgHQAAgGAEgFQAkgqABg5QABg4gjgsQgEgFAAgGQAAgGAFgEQAFgFAFABQAHAAAEAFIAAABQArA0AABDQgBBEgtAzQgFAFgGAAIgBAAQgFAAgEgDgAgyBQQgFgDAAgHQgBgGAEgFQAVgaABghQAAghgUgaIgBgBQgDgGABgGQABgGAFgEQAGgDAGABQAGACAEAFQAZAjAAArQgBAsgbAhQgFAGgHAAQgGAAgEgEg");
	this.shape_3.setTransform(9.0975,0.3253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.5,0,11.6,0).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQATAEAKgQIA4g1QAEgGAEACQAEACAAAGIAAD3QAAAGgDACIgCAAQgDAAgEgEg");
	this.shape_4.setTransform(-5.6,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,3.9).s().p("AATA2IhJh/Ig6hlIASgKIA3BfIA6BkIAYAqIAPAZIA3BhIgSALg");
	this.shape_5.setTransform(-0.375,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,9.2).s().p("AgeB6QgFgEAAgHQgBgGAFgFQAJgKAHgMQAUgiABgrQAAgygbgoIgIgKQgEgFABgGQAAgGAFgEQAFgFAGABQAGAAAFAFIgBABQALAOAIAPQAYApgBAxQAAAqgRAjQgLAXgRATQgEAFgHAAIgBAAQgFAAgEgDg");
	this.shape_6.setTransform(11.1228,0.3253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#53529E","#352768"],[0.259,1],-0.1,0.1,0,-0.1,0.1,6.3).s().p("AgXA6QAUgZAAggQABghgUgaIgBgBQgEgGABgGQACgGAFgEQAFgDAGABQAHACACAFQAbAjgBArQgBAsgbAhQgDAEgEABg");
	this.shape_7.setTransform(6.3157,0.2275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,10.6).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQAPADAJgJIBJB/IAABBQAAAGgDACIgCAAQgDAAgEgEgAANhUIAugrQAEgGAEACQAEACAAAGIAACLg");
	this.shape_8.setTransform(-5.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.3,0,11.3,0).s().p("AATA2IhJh/Ig6hlIASgKIA3BfIA6BkIAYAqIAPAZIA3BhIgSALg");
	this.shape_9.setTransform(-0.375,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-5.5,3.1,8.1,3.1).s().p("AgLB6QgEgEgBgHQAAgGAEgFQAkgqABg5QABg4gjgsQgEgFAAgGQAAgGAFgEQAFgFAFABQAHAAAEAFIAAABQArA0AABDQgBBEgtAzQgFAFgGAAIgBAAQgEAAgFgDgAg0A5QAUgZABggQAAghgUgaIgBgBQgDgGABgGQABgGAFgEQAGgDAGABQAGACAEAFQAaAjgBArQgBAsgbAhQgDAEgFABg");
	this.shape_10.setTransform(9.1892,0.3253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.5,0,11.6,0).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQAPADAJgJIBJB/IAABBQAAAGgDACIgCAAQgDAAgEgEgAANhUIAugrQAEgGAEACQAEACAAAGIAACLg");
	this.shape_11.setTransform(-5.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-17.7,27.5,37.099999999999994);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape.setTransform(-3.5,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_1.setTransform(-3.5,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_2.setTransform(3.5,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_3.setTransform(3.5,1.15);

	this.text = new cjs.Text("למסך הבית", "normal 400 15px 'Assistant'", "#F7C7CB");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(-14.55,57);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-52.75,30.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-5.9,-1.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,14.8).s().p("AhlCQIAAiaIgZAAQgSACgGgIQgFgHAKgIIB/hoQAGgIAMAAQAMAAAHAIIB/BoQATAVgmAAIgZAAIAACag");
	this.shape_4.setTransform(0.0166,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,17.6).s().p("AhlCQIAAiaIgZAAQgSACgGgIQgFgHAKgIIB/hoQAGgIAMAAQAMAAAHAIIB/BoQATAVgmAAIgZAAIAACag");
	this.shape_5.setTransform(0.0166,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-14.3,90.30000000000001,93.8);


(lib.BTNbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,26.5).s().p("Ai5C6QhNhNAAhtQAAhrBNhOQBOhNBrAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhsAAhNhNg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-26.3,52.5,52.6);


(lib.littleFire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-14.3,20.5,1.1,5.1).s().p("AhCCBQgbggALgiQAJgeAfgaQAMgKAtggQAngcASgcIAOg6QAEAdgSAdIgLAwQgJBMghBJQgNAcgPAJQgKAHgLAAQgSAAgSgVg");
	this.shape.setTransform(0.0301,-0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.littleFire, new cjs.Rectangle(-8.6,-15,17.299999999999997,30), null);


(lib.fireBit82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.1,116.3,-6.1,-28.7).s().p("ABENrQgUgBgOgCQgVgCgngLQgKgDgFgDQgMgDgMgEQgOgEgZgKIgqgRQgVgLgNgMQgPgOgFgVQgFgPAAgYQAAg4AVglQAIgOAdgmQAZggAIgUQAPgqgYgnQgSgRgdgYIg0gpQg8gzgMgqQgKgmASg2QALggAPgTQAHgJASgRQA2g2A7gyQADgDADgBIALgPIAMgYQAQglAGgSQAKggAAgZQABgNgDgcQgCgZAHgQQAGgPASgZIAIgKQgYgwgQgZQgHgMgPgXQgNgVgHgOQgRgmADgnQADgoAZghQANgSAagYIA3g0QAegeASgYQAQgVAIgVQABgZAHgjIAAgCQgCgJgDgJQgDgKAGgEQAGgEAJAFQAIAFACAHQAPAogUAuQgBAdAHAXQAFARAMAaIAUArQAxB4hKCZQgWAogJAVIgCAEIACAKIAjB8QAIAdABARQADAagJAUQgJAUgbAaQggAcgPAPQgQAQgYAjQgRAYgFANQgKAVAFASQABAHALATQAIAPACAKIAYASQAbAVAQAJQATALAhANIA2AWQA5AZAdAhQAXAaAMAmQATA7gRAtQgMAbgkArIhIBZIANAVQAMAVAEANIAAAgQACAWgDAJQgEAKgPARQgQAVgMAKQgUAQgXAFQgOADgVAAIgGAAg");
	this.shape.setTransform(12.5886,10.3892);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.8,117.1,-4.8,-27.9).s().p("AAONhQgXgDgygRQhBgYgYgNQgegRgOgPQgjgnADhAQACgoASglQASglAegbIAegaQARgQAFgPQAGgQgDgfQgGgygNgkQg6gTgbgPQg0gegRguQgJgZABghQABgjALgVQAIgQAZgaIA2g2QAigjAVgOQAMgIAWgNIAjgUQAqgZANggQAEgMAEgDIAIgQIAXg6QAMgfAEgSQAGgcgCgtIAAgBQgFgdgVgwIgvhwQgNgfgDgQQgGgfAJgtQAIgmAOgVQAHgKAKgLIAVgTQAWgUASgUQAFgGAihIQAGAEABAGQABAFgCAOQADAEAAAFQABALgDAMQACAOAHARQASAlAHASQAYA7gNA2QgDAPgKAYIgRAtQgPAngHAYQgJAjgBAeQAAAMgBAEQgCAFgCADIgEAaQgDAZAEALQACAHAHAKIALAQQAOAWADAbQACAbgLAYQgHAPgJAJQgDADgRAOIgZARQgUAPgIAIQgMAMgOAWQghA2gEAoIgEASIgBACQAFAZASAYQAWAeAtAcQAgAVBBAnQA2AkAdAmQAiAsAMA7QAMA4gLA6QgTBmhPBfQABAKACAGQADAHAMAOQASASAGAPQAJAWgJASQgIANgQAHQgLAFgUADQgnAFgegBIgFAAIgEADQgYANgeAAIgVgCg");
	this.shape_1.setTransform(11.2956,9.5766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.1,126,-4.1,-19).s().p("AA+PRQgKgEgNgGIgVgMQgSgJhSglQg+gcgfgYQgogfgOgpQgOgpAOgnQAJgWAWgdQAZghALgRQA1hNgXg+QgHgTgTgZIgggrQgcgngQgmQgdhGAUgzQALgZAhgnIAVgXIABgFQAJgRAQgSQAKgMAVgWIAygwIAxgwIAdgdQAQgQAQgXIAbgpQAKgRAEgKQADgLABgRIgBgcIAAgDIAEgqQAXAkABAOIABAPIACApQACA4gPAjQgLAZgeAjQgqAygGAIQgRAZgUArIgJARIAAAIQgLA1BPA6IBDArQApAaAVAUQATATARAaQAMASAOAeQAPAfAGAUQAJAcgEAXQgEAcgYAmQgoA/gBAAQgeA5AFBAQAFA+AkA7IATAgQAHATgHAOQgKAXgpAMQgPAFgaAEIAAADQgBAEgJADQgKADgLAAQgPAAgRgFgABaowQgFgXgMgbQgGgMgMgVIgNgXQgFAAgDgEQgEgFgBgOQgCgRAAgNQAAgRACgMQADgUAVgaQAUgbAEgUIAFg1IAIhTIAAgDIAAgBIAQBJIAGAaQADAOAFAKQAEAIAJAMQAKAOADAGQAIAMAFASQAEAMAFAWQAFAWABALIAAAGIABADQABAJAAANQAAAYgFAQIgFAMIgQAfQgMAUgEALIgOAoIAAAIIgBAlQAAALgHACIgWhSg");
	this.shape_2.setTransform(10.634,0.6904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.6,133.8,-2.6,-11.2).s().p("ACsQkQgEAAhHgXIgMgHIgBgBQgMgCgNgFIgvgOIgDgBIgCAAIgKgEIgOgLIgTgNQgMgIgCgJIgBgEQgqgIgqgQQgsgQgVgVQgUgUgMgmQgLgjAFgZQAMgwBOgdQAsgRAOgHQAfgQAPgWQAOgUADgeQADgVgCgiIAAgFQgbgbgkgTQgWgLgugUQgogTgUgYQglgqgBhTQAAgwAMgcQAMgeAggfIA6gzQASgSAXgaIBPhVQAngsARgbIA7hiQADAGAAAIQgBAYgIAYQADAlgQAtQgGARgNAcIgUArQgaBBgGBFQgBAXACAKQAFATASARQAUAUA1AbQA0AaAUAWQAsAxgHBgQgJB1g/BjIgBACIACAEQAGAOAQAfQAXArAJAOIATAbQAKAQAGALQAKAUAJAnQALAugCAaQgEApgbAVQgUAPgcAAIgFAAgACWuJIACgBQACgHAFgLQACgHABgUQABgRAFghQABgJAdgxIAFAKQADAQAFAMIAMAWQAHAOACAKQABAGAAAWQAAAYgDAHQgCAIgIAIQgUAUgbAFQgMADgCABIgCABQgFAAgCgjg");
	this.shape_3.setTransform(9.141,-7.1687);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.5,144.3,-5.5,-0.7).s().p("ABXSCQhJgbhGgyQgvgghKg/QgjgegRgSQgbgdgJgZQgLgfAKggQAKggAegZQAKgIA3glQAqgbANgWQATgigUgrQgNgagpgsIgHgHIgQgIQgcgPgNgJQgughgPhCQgJgiAAgkQAAgaAIgPQAHgLAPgNQAsgkA8gUQAcgbAQgSQAagfAKgcIAJgZQAEgQAGgJQAJgSAXgXIAmgoQADgDAYgRIgSArQAAAFgDAIQgfBJATA1IALAbIAFAWQAFAdgBARQAAAUgFATIAAAWQAEACADADIAUASIApArQAWAWAJAQIAOAeIAKAUIAIAVQADAPgCAVIgEAkIAAASQAAALgCAHQgCAMgMAXQgMAZgKAPQgKAPgLANQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgDASAFAfIANBLQAJAyANAcQAUAqAlAZQAJAHAuAYQAiARAOAQQANAPACARQACARgJAQQgNAVgjAXQgmAZgfAKQghAKgeAAIgBACQgBAEgGAAIgDAAQgFAAgGgCgACJvyQgJAAgEgCQgFgDgBgIQgCgdARgSIAQgOQAMgKAOgPQALgLACgGIABgTQAAgHADgCIABgBIAgAuIAAAKIAEAJQADAHABAOQABAUgGAMQgCAFgEADIgHAGIgFAGQgCAEgEABQgEACgJAAg");
	this.shape_4.setTransform(11.9932,-17.6125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-8.5,154.1,-8.5,9.1).s().p("AgpTqQgOgJgfgbQgsglgzgeQgjgUgLgJQgXgSgiguQgTgdgFgNQgGgTADgqQADghADgQQAFgaAKgUQAIgOAUgZIAcgkQAYgeAKgSQAQgcACgaQADgpgig0IgcgqQgQgZgIgTQgchBAUhnQAMg6AUghQAIgNAQgTQAVgaBZijQADACABADQADAHgBATQgHA+ALAqQAJAeAVAhQAMAUAdAlQAcAlARASIAdAeQAQASAIAPQAQAhgDAyQgCA3gTA1QgNAhgtBNIgHAoQgGAcADAUQAEAdAWAcQAPATAgAcICYCBIAZAUQAOALAJAJQAgAhAKAtQAEAcgHAPQgFANgYAUQgbAUgOAJQgYAPgVAHQgXAIgeABQgZACgYgBQgGAFgOACIgUABQgyAAgqgcgACWySQgEgEgBgGQgBgIAEgNIAxhUQAFAFAAAKQACAdgEARQgGAegVAVQgHAHgGAAQgGAAgEgEg");
	this.shape_5.setTransform(14.963,-27.4222);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7,90.9,-7,-54.1).s().p("ACGKWQgEgBgEgDIAAAAIgPgDQgIgCgCgDQgDgDAEgDIgDgBIgZgFQg8gMhAgdQgngShJgnQghgSgPgKQgagQgRgPQgegagXgmQgig7gBg5QAAg/AqgxQAKgNAZgWQAZgXAKgLQAiglALgrQALgqgOgqQgJgXgmg+Qggg0gEghQgGgzArhEIAmg4QAYgiAMgXIAOgfQAJgTAIgMQAKgPA+hDIA2hHIgNA8QgPAuAAAvQABA3AWA0IAUArQANAcAGAQQAUA4gHBQQgFAugQBcQgJBOAHBMQAEA0ASAdQARAaArAiQA7AuBJArIAkAVQATAMAMALQAnAkAAAzQgBAngbAyQgOAbgQARQgVAWgbANQgbANghADQgPABgOAAQgEACgFAAIgEAAg");
	this.shape_6.setTransform(13.525,35.7955);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.5,94.3,-7.5,-50.7).s().p("ACuKwQgYgBglgIQgbAGghgCQhDgGhNglQgvgXhWg3QgpgbgSgPQgfgagQgcQgbgwAGhAQAFgxAbg8QAUgtAYgeQALgNAQgQIAdgcQAegeAsg8QgIgPgJgLQgJgNgUgWQgVgXgJgMQgRgYgZg1QgUgrgBgYQgCgYAMgkQATg6AggrIAug3QAJgMAcgsIAthLIBBh7QADACABAEQADAGgCAOIgOBEQgJApAEAbQADAYAWAwIBJCgQASAnAIAZQAWBFgPBIQgFAWgKAeIgRAyIgCAFIgFArQgEAmAEAaQAGAeAVAhQANAWAdAiQBQBeBeBeQAeAeAOAVQAUAfgCAeQgBAZgTAZQgMARgaAYQgYAYgSALQgdARgpAAIgJAAgAgXJ4IgJgFQgfgRgSgHIgQgGQAaAOAQAIQARAIAPAFIAAAAg");
	this.shape_7.setTransform(13.9802,32.3595);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-8.2,94.1,-8.2,-50.9).s().p("ACsKqQhPgJhHgQQgpgJgXgIQg6gTg0gmQgpgdguguQgSgRgNgPIgKgIQguglgSgfQgNgWgFgcQgEgUgCgfQgBgmADgXQAFgiAOgaQANgZAfgeIA3gzQAfgeAQgZQAVgeAAgdQgBgigjgxQgvhCgHgOQgVgtAKgzQAIgvAhgwQAbgnAuguQASgSBCg+QAvgsAsg0IAWgYQgrBmgLA2QgNBGAeBCQAOAhAbAkQAYAhAcAbIAbAZQARAPAJAKQBLBVhCCIIgfBAQgQAlACAcQACAlAeApQATAbAsAsIBtBuIAdAfQAOARAIAPQAOAcgEAeQgEAegVAbQgWAagkATQgjAUgrAJQgaAHggACIAeADQAVACAAAIQABADgEACQgDADgFABIgHAAIgKAAg");
	this.shape_8.setTransform(14.7033,32.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,99.6,-6.2,-45.4).s().p("AgLLHQhJgRg+gpQgfgTgLgSQgEgIgFgOQgFgRgDgGQgNgagjgiQgZgZgRgNIgdgUQgRgLgJgKQgngqADhKQACgiALgSQAIgPAVgQQAagUAfgSIAygaQAdgPATgNQAZgSATgVQAQgzgFgkQgDgTgMgaIgWgsQgshYgNhhQgKhMAXgsQAHgOANgRIAYgcQBQhhARh8QABgDAag9IAEAGQADAFgBAPQgEBFAUBCQAUBEAoA3QAMAPAcAhQAcAfANARQAdAoAjBJQAiBJAMAtQASBGgPA3QgKAkghA4QgUAhgUAZIgXAZQgHAuAPAvQAQA4ApAmQAPAPAQAJQAMAHARAGIBEAjQAiATANAOQAXAYABAlQACAjgTAeQghA4hNASQgeAIglACIgFAAQgGANgKAIQgNAKgZABQgVABgVAAQg0AAgzgMg");
	this.shape_9.setTransform(12.7412,27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.7,99.6,-5.7,-45.4).s().p("ABJLlQgZgBgcgGIgygNQgegIgPgIQgPgIgOgPQgMgKgDgIQgCgGABgJIAAgOQABgNgHgfQgFgXgHgKIgLgNQgFgIACgGIhEg3QglgcgTgTQgWgUgQgUQgagfgMgbQgRgoAKgqQAKgqAigjQAQgQAlgdQAngdAPgPQA1gyAEg7QABgFADgEQACgEAEAAQABgZgMgeQgag4gLgcQgbhDAQhHQAOhIA2g8QAJgKAWgWIAfggQAxg4ANhBIAAgFIAWhnQAHAjgCAoIAAAMIADAbIAMCGQAFAyAMAaQAUAtBiBKQBfBKASAvQALAZABAyQAAAwgDAZQgGAngWAcQgKAPgYAWIgkAkQglArgBAzQgBA0AkAsQAMAOATARQALAKAYAUQAgAbAhAiQAeAbAHATQALAZgLAeQgJAWgXAgQgzBGg2AqQggAYgeAKIAEAAQgfAJgtAJIgOgBg");
	this.shape_10.setTransform(12.2337,27.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,99.2,-6.2,-45.8).s().p("ABqLaQgigDg8gbQgpgUgagPQgkgVgagXQgegcgSggQgTgkgCgkQAAgPADgVQgUgLgVgPQhGgugegqQgbgpgDgxQgDgzAZgnQAKgQASgRIAhgdQBXhJBNhUQgNgigSgcQgQgYglgsQgfgpgIghQgFgYADgZQAEgZANgVQAHgMAPgSIAXgdQAOgSAXgyQAfhFANgkQAKgeAqhtIADAGQADAIgFATIgCALIgBAZQAAAYAIAYQAKAjAfAsQA8BXBnBeIAxAuQAbAaARAXQAuA/gIA+QgFAqghArQgRAXgzAwQhEBCglA7IAAAJQABAtAYAcQANARAeARQApAYAHAFQALAIAOAOIAZAXQAOAMAfAXQAbAWAMAUQALAVACAaQABAYgIAZQgQArgqAjIgaAVQgPANgJALQgHAJgOAZQgMAWgKALQgQARgaAIQgRAFgSAAIgPgBg");
	this.shape_11.setTransform(12.6895,27.47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,98,-6.2,-47).s().p("AgaLBQgOgCgRgKQgigRgZgcQgVgagLgfQgOgpAHgsQADgLADgJIAEgHIgHgYQgMgbggggIg8g2Qg1gzgVg1QgXg9Aag0QAMgaAmgnQBBhAAdgiQAyg3AVguIAAgPQABgPgCgLQgHgegwg2Qgvg1gEgfQgGglAigyQAkg1A6gtIAigYQAUgOAMgLQAUgRAQgZIAbgvIABACIASgkQgPBQgFAGIABARQACAhALAaQAXA1BOA0IA0AgQAhATARAPQA8AuAKA3QAFAdgLAbQgLAdgbAVQgMAJgYAPIglAXQgcAUgXAdQgRAVgTAhQgVAkgEAaQgFAiAQAnQANAdAcAoQAhAwAgAXIAZAQIAYAQQAPALAPAQIAbAdQAYAbAEAQQADAMgDASIgEAfQgBAGABAZQABAUgCAMQgGAYgdAfQhHBOh2AyQgLAEgHgBIgCgBQghAGg8AAIgYgBg");
	this.shape_12.setTransform(12.6852,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6,105.6,-6,-39.4).s().p("AAGMaIgXgOQgJgGgagMQgagFgMgEQgWgHgHgMQgDgGAAgGQgJgKgPgVQgZgngKgXQgVgvADg0QADgvAVgoIhGg6QgigdgRgRQgZgcgMgcQgNgiAFgmQAFglAUggQAlg7BMggIAygTQAcgMAQgPQARgOAKgYIgEgLQgLgZgjgzIg4hOQgYgigKgWQgPghADgdQACgVAOgYQAIgPAVgaIAggqQAfgnARgSIAbgcIAbgcQAlgpBHjHQACAGgBANIgCA4QAAAuAHAYQAJAfAjAvQAaAjA2BEQAeAnAUAUIATASQALALAGAJQAPATALAhQANAjgCAYQgCARgJAUQgGANgOAVQgZAngOAOQgJAJgPALIgZASQgPALgiAeIgbAZQgHAQgGAKIgQAYQgKAQgFAKQgNAcABAnQACBKAoAyQAWAdAsAbIBMAtQA7AmAZAsQAVAlgBAtQAAAtgXAlQgHAMgRAUQgTAXgGAKQgHAJgaAwQgUAjgSASQgiAgg1AJQgdAEgUgEQgKgCgNgFQgDAFgGACQgFADgGAAQgHAAgIgEg");
	this.shape_13.setTransform(12.5328,21.001);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.8,108.1,-6.8,-36.9).s().p("ABiMkQgKgBgCgEIgBgDQhQABg7gSQgkgLgbgRQgdgSgQgVQgcgpAQhSQAJgvACgRQACgjgMgbQgNgdg3gyQg3gzgOgdQgKgWgEgvQgEguADgZQAFgnAWgcQALgNAZgVQAdgXAJgKQAWgYANghQAJgVAJgpQAHgeABgOQADgZgGgTQgHgVgdgnQgdgmgHgWQgMglAXgrQAUgkAsgkQAZgUA8gpQA5gmAagXQAygrAcg0QAcg0ADg2IAEAAIABgYIABgIIAXB3QAEAEABAKQACAnAZAsQARAhAkAtIAaAkQAOAUAFASQAEAOgBATQAAAKgEAXQgIAzgKAYQgKAWgTAYQgLAPgbAdIg5BAQggAjgdAaQgaAZgJAJQgRAUgFASQgEALACAPQABAKAEASQAOA5APAkQAWAyAgAlQAYAcA9AyQA+AzAYAbQAiAoAPAuQAOAugHAtQgIAugdArQgdAqgvAiQgOALgdATQgZASgNAOIgIAJQgFAFgFACQgGADgGAAIgDgBg");
	this.shape_14.setTransform(13.3366,18.5625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.3,110.8,-7.3,-34.2).s().p("AhgMiQgcgDgQgGQgdgKgPgTQgXgeAGg8QAFhBAXgnQAFgJAMgRIASgaQATgigHgbQgFgRgRgQIgsgUQgogUgdgfQgkglgPgwQgQgzAOgvQAIgaATgdQALgRAbghIAzg9QAhgmAOgLIA+gsIAEgDQASgeAMggQATg3gNgnQgEgNgLgQQgKgQgMgKIgDgCQgagGgSgMQgWgNgTgaQgYghgCgeQgEgwAuguQAOgOAbgUQAfgYAKgJQAvgrAthTQAQgdAIgVIAVgzIALA1IAIAQIANAYIAQAjQAJAWAJAMQAJAMASAQIAcAbQAVAXALAeQALAegBAgQgBAbgKAVQgKAWgjAgQgdAcgVAGIgFABIguBLIgJAOIgBAFIAAACQgBAKgEAFIgLArIgBAcIABBLQAAAogFAXQgDAPgOAlQgHATgHAOQgEAIgGAKQAAAXAEARQAGAcARAYQANATAOAHQAHAEAQAFQARAHAeATQA8ApAdAcQAYAXAvA7QAcAlAIAUQALAfgHAlQgGAhgUAeIgcAmQgJANgRAfQgRAdgLAPQgPAUgcAbQgfAdgZAPQgUALgTAGQgEADgGACQgIADgUACQgvAAhUgNg");
	this.shape_15.setTransform(13.7808,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-156,77.6,258.1);


(lib.fireBit72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.8,103.6,7.8,-12.3).s().p("AhsNoQgXgFgUgQQgMgKgQgVQgPgRgEgKQgDgJACgWIAAggQAEgNAMgVIANgVIhIhZQgkgrgMgbQgRgtATg7QAMgmAXgaQAdghA5gZIA2gWQAhgNATgLQAQgJAbgVIAYgSQACgKAIgPQALgTABgHQAFgSgKgVQgFgNgRgYQgYgjgQgQQgPgPgggcQgbgagJgUQgJgUADgaQABgRAIgdIAjh8IACgKIgCgEQgJgVgWgoQhKiZAxh4IAUgrQAMgaAFgRQAHgXgBgdQgUguAPgoQACgHAIgFQAJgFAGAEQAGAEgDAKQgDAJgCAJIAAACQAHAjABAZQAIAVAQAVQASAYAeAeIA3A0QAaAYANASQAZAhADAoQADAngRAmQgHAOgNAVQgPAXgHAMQgQAZgYAwIAIAKQASAZAGAPQAHAQgCAZQgDAcABANQAAAZAKAgQAGASAQAlIAMAYIALAPQADABADADQA7AyA2A2QASARAHAJQAPATALAgQASA2gKAmQgMAqg8AzIg0ApQgdAYgSARQgYAnAPAqQAIAUAZAgQAdAmAIAOQAVAlAAA4QAAAYgFAPQgFAVgPAOQgNAMgVALIgqARQgZAKgOAEQgMAEgMADQgFADgKADQgnALgVACQgOACgUABIgGAAQgVAAgOgDg");
	this.shape.setTransform(13.0114,10.3892);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.8,113.3,5.8,-2.6).s().p("AhyPTQgJgDgBgEIAAgDQgagEgPgFQgpgMgKgXQgHgOAHgTIATggQAkg7AFg+QAFhAgeg5QgBAAgog/QgYgmgEgcQgEgXAJgcQAGgUAPgfQAOgeAMgSQARgaATgTQAVgUApgaIBDgrQBPg6gLg1IAAgIIgJgRQgUgrgRgZQgGgIgqgyQgegjgLgZQgPgjACg4IACgpIABgPQABgOAXgkIAEAqIAAADIgBAcQABARADALQAEAKAKARIAbApQAQAXAQAQIAdAdIAxAwIAyAwQAVAWAKAMQAQASAJARIABAFIAVAXQAhAnALAZQAUAzgdBGQgQAmgcAnIggArQgTAZgHATQgXA+A1BNQALARAZAhQAWAdAJAWQAOAngOApQgOApgoAfQgfAYg+AcQhTAlgRAJIgVAMQgNAGgKAEQgRAFgPAAQgLAAgKgDgAh2nrIgBglIAAgIIgOgoQgEgLgMgUIgQgfIgFgMQgFgQAAgYQAAgNABgJIABgDIAAgGQABgLAFgWQAFgWAEgMQAFgSAIgMQADgGAKgOQAJgMAEgIQAFgKADgOIAGgaIAQhJIAAABIAAADIAIBTIAFA1QAEAUAUAbQAVAaADAUQACAMAAARQAAANgCARQgBAOgEAFQgDAEgFAAIgNAXQgMAVgGAMQgMAbgFAXIgWBSQgHgCAAgLg");
	this.shape_1.setTransform(14.966,0.6904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.2,131.6,7.2,15.7).s().p("AhkSEQgGAAgBgEIgBgCQgeAAghgKQgfgKgmgZQgjgXgNgVQgJgQACgRQACgRANgPQAOgQAigRQAugYAJgHQAlgZAUgqQANgcAJgyIANhLQAFgfgDgSQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgLgNgKgPQgKgPgMgZQgMgXgCgMQgCgHAAgLIAAgSIgEgkQgCgVADgPIAIgVIAKgUIAOgeQAJgQAWgWIApgrIAUgSQADgDAEgCIAAgWQgFgTAAgUQgBgRAFgdIAFgWIALgbQATg1gfhJQgDgIAAgFIgSgrQAYARADADIAmAoQAXAXAJASQAGAJAEAQIAJAZQAKAcAaAfQAQASAcAbQA8AUAsAkQAPANAHALQAIAPAAAaQAAAkgJAiQgPBCguAhQgNAJgcAPIgQAIIgHAHQgpAsgNAaQgUArATAiQANAWAqAbQA3AlAKAIQAeAZAKAgQAKAggLAfQgJAZgbAdQgRASgjAeQhKA/gvAgQhGAyhJAbQgGACgFAAIgDAAgAi+vyQgJAAgEgCQgEgBgCgEIgFgGIgHgGQgEgDgCgFQgGgMABgUQABgOADgHIAEgJIAAgKIAgguIABABQADACAAAHIABATQACAGALALQAOAPAMAKIAQAOQARASgCAdQgBAIgFADQgEACgJAAg");
	this.shape_2.setTransform(13.6068,-17.6125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.7,78.6,8.7,-37.3).s().p("AiSKYQgOAAgPgBQghgDgbgNQgbgNgVgWQgQgRgOgbQgbgygBgnQAAgzAngkQAMgLATgMIAkgVQBJgrA7guQArgiARgaQASgdAEg0QAHhMgJhOQgQhcgFguQgHhQAUg4QAGgQANgcIAUgrQAWg0ABg3QAAgvgPguIgKhEIAiA7IARAUQA+BDAKAPQAIAMAJATIAOAfQAMAXAYAiIAmA4QArBEgGAzQgEAhggA0QgmA+gJAXQgOApALArQALArAiAlQAKALAZAXQAZAWAKANQAqAxAAA/QgBA5giA7QgXAmgeAaQgRAPgaAQQgPAKghASQhJAngnASQhAAdg8AMIgZAFIgDABQAEADgDADQgCADgIACIgPADIAAAAQgEADgEABIgEAAQgFAAgEgCg");
	this.shape_3.setTransform(12.075,35.3955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.7,78.2,8.7,-37.7).s().p("AiSKUQgOAAgPgBQghgDgbgNQgbgNgVgWQgQgRgOgbQgbgygBgnQAAgzAngkQAMgLATgMIAkgVQBJgrA7guQArgiARgaQASgdAEg0QAHhMgJhOQgQhcgFguQgHhQAUg4QAGgQANgcIAUgrQAWg0ABg3QAAgvgPguIgNg8IA2BHQA+BDAKAPQAIAMAJATIAOAfQAMAXAYAiIAmA4QArBEgGAzQgEAhggA0QgmA+gJAXQgOAqALAqQALArAiAlQAKALAZAXQAZAWAKANQAqAxAAA/QgBA5giA7QgXAmgeAaQgRAPgaAQQgPAKghASQhJAngnASQhAAdg8AMIgZAFIgDABQAEADgDADQgCADgIACIgPADIAAAAQgEADgEABIgEAAQgFAAgEgCg");
	this.shape_4.setTransform(12.075,35.7955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],9.9,81.4,9.9,-34.5).s().p("Ai8KqQgFgBgDgDQgEgCABgDQAAgIAVgCIAegDQgggCgagHQgrgJgjgUQgkgTgWgaQgVgbgEgeQgEgeAOgcQAIgPAOgRIAdgfIBthuQAsgsATgbQAegpACglQACgcgQglIgfhAQhCiIBLhVQAJgKARgPIAbgZQAcgbAYghQAbgkAOghQAehCgNhGQgLg2grhmIAWAYQAsA0AvAsQBCA+ASASQAuAuAbAnQAhAwAIAvQAKAzgVAtQgHAOgvBCQgjAxgBAiQAAAdAVAeQAQAZAfAeIA3AzQAfAeANAZQAOAaAFAiQADAXgBAmQgCAfgEAUQgFAcgNAWQgSAfguAlIgKAIQgNAPgSARQguAugpAdQg0Amg6ATQgXAIgpAJQhHAQhPAJIgKAAIgHAAg");
	this.shape_5.setTransform(10.8967,32.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.4,86.9,7.4,-29).s().p("AiiLUIAEAAQgegKgggYQg2gqgzhGQgXgggJgWQgLgeALgZQAHgTAegbQAhgiAggbQAYgUALgKQATgRAMgOQAkgsgBg0QgBgzglgrIgkgkQgYgWgKgPQgWgcgGgnQgDgZAAgwQABgyALgZQASgvBfhKQBihKAUgtQAMgaAFgyIAMiGIADgbIAAgMQgCgoAHgjIAWBnIAAAFQANBBAxA4IAfAgQAWAWAJAKQA2A8AOBIQAQBHgbBDQgLAcgaA4QgMAeABAZQAEAAACAEQADAEABAFQAEA7A1AyQAPAPAnAdQAlAdAQAQQAiAjAKAqQAKAqgRAoQgMAbgaAfQgQAUgWAUQgTATglAcIhEA3QACAGgFAIIgLANQgHAKgFAXQgHAfABANIAAAOQABAJgCAGQgDAIgMAKQgOAPgPAIQgPAIgeAIIgyANQgcAGgZABIgOABQgtgJgfgJg");
	this.shape_6.setTransform(13.3663,27.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.9,85.3,7.9,-30.6).s().p("AhaK8IgCABQgHABgLgEQh2gyhHhOQgdgfgGgYQgCgMABgUQABgZgBgGIgEgfQgDgSADgMQAEgQAYgbIAbgdQAPgQAPgLIAYgQIAZgQQAggXAhgwQAcgoANgdQAQgngFgiQgEgagVgkQgTghgRgVQgXgdgcgUIglgXQgYgPgMgJQgbgVgLgdQgLgbAFgdQAKg3A8guQARgPAhgTIA0ggQBOg0AXg1QALgaACghIABgRQgFgGgPhQIASAkIABgCIAbAvQAQAZAUARQAMALAUAOIAiAYQA6AtAkA1QAiAygGAlQgEAfgvA1QgwA2gHAeQgCALABAPIAAAPQAVAuAyA3QAdAiBBBAQAmAnAMAaQAaA0gXA9QgVA1g1AzIg8A2QggAggMAbIgHAYIAEAHQADAJADALQAHAsgOApQgLAfgVAaQgZAcgiARQgRAKgOACIgYABQg8AAghgGg");
	this.shape_7.setTransform(12.9148,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.5,95.4,8.5,-20.5).s().p("AhwMiQgFgCgFgFIgIgJQgNgOgZgSQgdgTgOgLQgvgigdgqQgdgrgIguQgHgtAOguQAPguAigoQAYgbA+gzQA9gyAYgcQAgglAWgyQAPgkAOg5QAEgSABgKQACgPgEgLQgFgSgRgUQgJgJgagZQgdgagggjIg5hAQgbgdgLgPQgTgYgKgWQgKgYgIgzQgEgXAAgKQgBgTAEgOQAFgSAOgUIAagkQAkgtARghQAZgsACgnQABgKAEgEIAXh3IABAIIABAYIAEAAQADA2AcA0QAcA0AyArQAaAXA5AmQA8ApAZAUQAsAkAUAkQAXArgMAlQgHAWgdAmQgdAngHAVQgGATADAZQABAOAHAeQAJApAJAVQANAhAWAYQAJAKAdAXQAZAVALANQAWAcAFAnQADAZgEAuQgEAvgKAWQgOAdg3AzQg3AygNAdQgMAbACAjQACARAJAvQAQBSgcApQgQAVgdASQgbARgkALQg7AShQgBIgBADQgCAEgKABIgDABQgGAAgGgDg");
	this.shape_8.setTransform(12.2634,18.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-133.2,75.7,235.29999999999998);


(lib.fireBit62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.3,112.5,-2.9,-55.4).s().p("AhEMvIiAgCQgrgBgVgDQgjgEgZgOQgpgVgfg1QgegygIg1QgIg7AWgvQANgfAgghIA5g4QAwgvAxhEQAegrA1hSQAog/ARghQAdg3AIgwQADgRAEhfQADhEATgmQASgnA1guQBEg5AQgUQANgQAVggQAWgiALgPIAlgpQAXgYAKgTQAVgkAGg8QADghAEhFIABgFIAzDzQAJBbANArQAEAOAQAuQANAlAFAXQASBVgjBmQgOAogYAvQgRAggeAxQgbAsgLAXQgUAlgJAhQgJAigCAsQgCAbACAzQACA+gBAfQAAA0gGApQgPBog2BCQgZAfg+AvIgkAaQgVANgTAFQgWAIgsAAIgMgBg");
	this.shape.setTransform(30.7372,48.4056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.7,110.6,-7.3,-57.3).s().p("AjmMnQgYgDAAgOIAAgDIgcgJQgYgJgQgMQgSgOgcglQgegsgIgTQgKgYgDghQgDgWABglQAAg7AEhIQADgrAHgUQAJgcAdgfQAjgoBPhAQBShCAigkIAbgfQAQgRAOgLQAMgJAZgNQAFgZABgeIAAhLQgChXADhXQACg0AHgfQAJgtAUgeQARgYAfgXQAMgJAtgdQBFgtAigrQAcgjAMgkQgEgqALgkQADgKAEgDQAkCnAOAdQANAbAcAvQAeAyAMAXQAdA3gCApQgDAdgSAiQgJAPgdAqQhpCWgrC1QgLAtgGAtIAEAJQAgBJANAnQAVA/ACA2QADBAgbAlQgHALgQAOIgaAYQgMAOgOAXIgXAmQg6BehpAwQhPAkhQAAQgcAAgcgEg");
	this.shape_1.setTransform(35.1058,50.3844);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.7,112.9,-7.3,-55).s().p("AiSM9QiLgNg5gJQgmgFgPgPQgWgVAFgmQACgNAGgTIAKgeQARg5gDh4QgDh5ARg5QAYhQBchhIBNhPQAsguAagkQASgaAYgqQAcgwAMgZQAUgqAIgkQAGgbAIiEQAFhiAjgyQAMgTAVgUIAngiQAlgiBKh3QACgFAEgEIAIghIAEgCIACgEIAAgBIABgBIACAMIgIAQIAJgPQAbB/AKAOQAIAMArAuQAgAjAMAcQAaA8gZBcQgHAahDCuQguB4ACBSQAAAqATBWQASBTgBAsQAACFhzCRQggAphGBJQhGBLggAnQgUAbgJAIQgSATgSAHQgRAIgXAAIgGAAIgjgBgAD7sVIACgBQAAAAgBgBIgBACg");
	this.shape_2.setTransform(35.1518,48.0175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.1,118.1,-5.7,-49.8).s().p("AmCMvQgfgWgKgVQgJgUABgoQABghAEgNQAGgWATgYQARgVAkghQAfgcAQgRQgthXgJhIQgIg5AMg1QAOg5AigpQATgXAlgbQApgeATgQQAXgTAagaIAtgwIBjhvQAjgmAXgdIATgbIgJgYQgkhnAOiPQAFguAMgbQAPgjAwgrQA6g0APgUQAjgwADg9IAKgpQBdClAoAsQAfAhAMAbQAQAngIAuQgHArgZAmQgSAagoAoQgrArgRAWQgoA3gSBRIACAHIAtCQQAYBPASAnIAZAwQAQAeAHATQAYA9gNAtQgKAjgmAlIhCA+QgKAKgJAMIANBFQAGAiABARQACAcgGAWQgGAUgOAUQgKAOgTAWQgyA2g2AuQgoAjghARQg4AbhQABQAAAFgEADQgEADgKAAQihgBhlhEg");
	this.shape_3.setTransform(33.5256,42.8375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5,118.7,-4.6,-49.2).s().p("AjYN7QgJgCgIgHIg9gyQg5gwgXgeQgngzACgzQACgsAmg5QAzhOAHgTQAWg0gDhuQgDhxASgyQAJgYARgcIAhgxQA7hQAigkQAUgWApglQAsgoASgTQBFhIAShHQAHgcABglIAAhDQAAhLAJhHQAKhPAfgiQAKgNAUgOIAhgXQAogeAEgjIABgNQABgHACgFQACgHAGgDIACgBQBGBhARAOQAmAgAPAwQAQAygOAtQgGATgOAYIgZApQg3BgABB5QAABzAxBrIAeA/QARAlAGAcQAHAlgEA5QgEBBgOAhQgLAYgXAdIgpAwQg5BFggBVQggBWgCBZIgCA0QgDAdgLATQgPAcgvAaQheA3hWAKQhLAJg9gWQADAHgDAFQgDAGgHAAIgGgBg");
	this.shape_4.setTransform(32.4535,42.2313);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4,125.6,-3.6,-42.3).s().p("AhoPXIgYgBQgSgBgKgEIgEgCQgCgEgJgIIgdgVIgggXQgVgSgNgEQgJgDgNABIgYgZIgggdQgTgRgLgOQgXgdgUg5QgiheATg9QARg3BJg7QAngeASgQQAhgbASgZIAIgMQgQgxgEgaQgFghADhIQACgnADgSQAEggAKgXQAZg5BGgqQAYgPAmgRIA/gdQBQglArguQAbgdAOgjQAPglgDgkQgBgKABgHIgCgMQgGgugQgiIgYgsQgPgbgGgSQgJgeABg5QAAgvAJgXQAHgSAZgfIBQhlQAcgiALgVQASgigCgeQgBgPABgFQABgFAEgDQADgDAEgBQAyB3ALAVQAeA6AVAZIAVAZQAMAOAFANQANAigUAoQgMAYgiAmQgjAlgQAUQglAwgYA5QgDAWAAASQgCAxANAmQANAmAhAsQAUAaApAxQBNBhgTBNQgFAXgQAZQgKAPgXAdQgmAygVAhQgdAvgPArQgXBDgBBkQgBBCAHBBQAFArAAAQQACAhgHAZQgMApgoArQgeAggsAfQggAXgzAeQghAUgTAJQgfAPgbAGQgOADgPABQgEACgHAAIgGgBg");
	this.shape_5.setTransform(31.4826,35.3571);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.6,125.8,-6.2,-42.1).s().p("AjMO/QgxgJgcgNQgogTgMghQgHgSAAgdIABgwQgBgYgKgdIgUgzQghhTgCg8QgEhUAtg3QANgQAYgVIAogiQAqgoAMgrQAHgZgDgmIgFhAQgEhHAbhAQAbhEA1gqQAkgcBRgiQBSgjAigaQAagUAIgTQAFgOAAgfQAAhEgFgiQgDgWgJglIgNg7QgHgpgBhUIABgsQADgZAHgSQAKgYA2g5QAtgvABgmIAAgNQAAgIACgGQABgDADgCQATAYgBASQgCASAiAMQAiALAdAeQA2A7gCA1QgBAigYAjQgSAagjAgQgpAkgOARQgdAhgIAhQgSBLBMBZQAUAYApAtQAiAoAOAjQARAngCAsQgCAsgUAmQgMAVgbAhQggAogJAOQgzBNgEBwQgDBMAZB6QASBcACAoQAEBLgaA1QgZA0hEAyQhNA4hcAdQhbAdhggCIgCAAIgBABQgEAFgJAAIgJgBg");
	this.shape_6.setTransform(34.0481,35.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.7,128.5,-5.3,-39.4).s().p("AjPPOQgagGgpgQQg5gVgWgaQgVgbABgmQACglAVgeQAKgOAagYQAFgqgYg4Iggg+QgSgmgHgbQgPg2ARg5QARg4ApgmQAWgTAxgeQA2gjAngjQABgKgBgOQgGhbABhMQAAg6AIghQAKgmAXgfQAXggAggUQARgLAagLIArgTQA7gbApgoQAuguAOg2QAGgWADglIADgfIgEgfIAAgBQAAgOgphUQgagkgGgZQgDgOAAgWQAAgcACgQQAEgZAMgQQAIgLAbgVQAbgVAagaQANgOADgMQABgFgDgQQgCgOAEgHIAEgGIAfAfQAEAXAfASIAZAOQANAIAIAJQAYAZgGAoQgDAagTAoQgKASgHAKQgNASgnAfQgkAdgOAWQgHALgFAOQAGAOABAwQABArACgWQAGAYAOAYQASAjAmAtQAxA6AMASQAgAsAKApQAHAggHAWQgHASgTAWIg1A2QggAggPAaQgOAXgOAnQglBtADByIAXAgIAKAQIAEADQACADABAEQBEByAQCEQAFAjgGAXQgGAUgYAiIgxBEQgmA2gZAYQgnAmg7AeQgqAVhGAZQguAQgbAHIgcAGQgFADgKACIgSABQgYAAgbgHg");
	this.shape_7.setTransform(33.1859,32.4615);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.5,129.6,-4.1,-38.3).s().p("AiXPdIgDAAQgPACgQgCQgagCgagNQgsgVgmgxQgfglgNgmQgQgtAMgmQAGgQAPgZQARgcAFgLQAUgsgEg/QgCgegRhRQgOhCADgvQAFg+AigmQAQgSBGgoQA3ghAOgkQAIgTgBgcIgEgwQgGg3AHg6QAIhBAXgmQAbgwBahAQBbhAA8hvQAWgqAMggQAbAzAWAZQAgAjAkAZQAfAYAOAYQAlA/gnBiIgjBLQgWAugIAgQgRBDASBZQAJAuAkBtQAfBeAGBAQAKBYgfBCQgNAbghArQgkAwgMAVQgKARgSAnQgQAlgMATQgTAfggAfQgUATgqAiQggAZgPAKQgbASgYAHQgeAJg6AAQgiAAgSgDgAC+rPIgNgqQgPg4AVhGQAFgQAEgHIARgSQATgUAagrIABADQAHAdAgAdIAQAOQAJAJAEAHQAIAKAHAYQAFAQgCAJQgBAPgSAUQgtAzg3AxQgRAOgJAKQgDgWgDgPg");
	this.shape_8.setTransform(31.9496,31.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,136.2,-3.5,-31.7).s().p("Ah+Q1QgigEgggUQgYgPgegdQgggigRgQQglgigRgTQgdgggJgeQgIgaACgxQAAgaACgMQACgVAHgQQAJgUAUgUIBAg1QAnggAOgdQAGgLADgNIgQgPQgUgTgKgNQgdgjgMgvQgLguAKguQAGgbAMgTQAOgVAagUQAYgRAmgSIBAgfQA6gcAgghIgFgQQgOgjgEgQQgJghgBhBQgBhCAGgkQAKg3AdgiQAPgRAigZIBQg5QAigYANgNQAdgbAPgiQARgkgCglIAAgJQgGgTAJgHIACgCQA2BTANAPQAaAgAjAUIAPAJQAJAFAFAGQANAOACAhQAFBCgYA/QgYBAgvAuIgrAoQgpAlgeAuIAOAUIB5CqQAwBEAQAmQAcBBgQA3QgGAYgRAbQgKAQgXAdQg/BShFBfQgBAxAFBGQADAkAAAQQgBAdgHAVQgLAhgcAaQgbAYgjANIgdAKQgTAGgKAFIgZAOQgPAJgJAEQgQAFgeABIgHAGQgXAPgdAAIgNgBgADWt1QgDgFgCgMIgFgOQgDgIABgNIAAg/QAAgLABgEIAEgKIAIgNIAOgNIATgOQAMgGAEgFIAIgBQAGANAEAXQAFAcABATQAAAOgDAJQgFAPgSASIgNANQgIAIgEAHQgFANgEAGIgKANIgEgHg");
	this.shape_9.setTransform(31.3811,24.7614);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.8,142,-4.4,-25.9).s().p("AhlRcQgFABgIgBIhPgHQgZgDgNgDQgVgFgOgJQgbgTgNgsQgLg0gIgZQgGgVgUgrQgSgpgGgYQgKglAEgmQADgmARgiQAJgUAagmQAZglAKgVQAUgtAAhDIgGh1QgDg0ALgcQAJgYAYgYIAugoQBDg5AphDQAuhKAFhOIABgvQAAgdADgSQAKg/Azg5QAngtBFguQAsgdgHgbIgCgIIgCgEQgCgDABgFIAAgBQAAgFAEgDIADgCQATAfgEAOQgEANAlAEQAkADAfAPQAeAUAKAzQALA8gSBdQgZCBgBAZQgFBFATBDQAHAaARArQAUAyAGATQAbBTgRA8QgIAdgcArQgiA1gIAQQgVAqgNBUQgQBfAEA3IAGBAQACAlgIAZQgHAVgRAWQgLAPgXAWQgjAjgaAVQgjAdghAQQg3Abg9ABIgGAAQgXAAgWgDgADQvFQgFgIgBgRQgBgfAMgcQAMgdAXgUIANgMIAHgIQADAFABAKQAFAngHAUQgFALgPATIgaAfIgPAUIgBgCg");
	this.shape_10.setTransform(32.2408,18.9031);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.7,149.1,-4.3,-18.8).s().p("AiXS4QgQgDgegKQgdgJgQgGQgYgKgRgNQgXgQgQgYQgKgQgCgNQgCgKADgUIADgZQADgWAEgKIAIgNIAJgOQAJgOAEgPQgQgLgIgHIgageIgbgYQgQgPgHgMQgLgTgBgaQgCgTAEgeQAFgrAJgUQARglA0gjIArgbQAZgQAPgOIAIgIQgTgrgHgYQgThDANhwQAHgyANgYQAQgeAngaQAXgOAxgaQBhg4AxhYIgJgdQgXhHgEgmQgKhJAWhHQALggAPgPQAIgIAMgIIAWgNQApgYAfgkQAWgYgCgUIgCgQQgBgJAEgEQA9BFAPALIAWAQQANAKAHAJQALAOACATQADASgHARQgEAKgLAOIgZAhIgeAtIgXAoIgCAVQgBArASAmQAPAhAiAmQAUAUAqApQBPBQgCBGQgBAvgoA7QgZAlg5A+Qg7BBgYAhQgiAvgWA1QAIARANAUIBLB4QATAeAIAPQANAZAGAXQAHAagCAZQgDAcgPAUQgJAMgPAMIgcATQgoAagpAjIguAoQgbAWgWAOQgVAOgVAIIgCACQgVAQgwARQgYAJgNACIgQABQgOAAgQgDgADUx3QgEgaABgMIAAgLQAAgGACgEQAEgHAJgBQAGAAAFAGQADAEABAHQAFAegTAVQgFAGgGACIgBAAIgBgJg");
	this.shape_11.setTransform(32.107,11.8181);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.5,115.7,-4.1,-52.2).s().p("AkQNFQgjgHgOgOQgYgXAFgxIAQhVQAKgzgGghQgFgdgeg7Qgcg3gDghQgDgwAhgvQAcgoAxgfIArgbQAXgSAIgTQAIgRAAgYQAAgLgDggQgIhEAGhEQAGhBAVggQAPgXAcgUQAQgLAkgUIBXgwQAdgQAOgKQAWgRAKgUQAQgggMguQgFgSgag+Qgbg/AAg8QAAhEAkgvQAOgSAigiIAphQIAKAJQBLA+AFAGQATAXACA1QAFBRgGBVIgCAtQgBAZAEAUQAIArA4BRQA1BMAFAxQAGBBgwBBQgSAZgdAaIg1AtQghAbgJAUQgMAaAHAiQAFAWAQAnQAyB4AdB9QAHAiACAVQACAfgJAXQgIAUgSAWIgjAjQgyAxgnA8IgeAuQgTAagTAOQgdAWgsAGIgBAFQgDAKgTABIgWABQh4AAhzgZg");
	this.shape_12.setTransform(31.9507,45.2606);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.4,121.8,-4,-46.1).s().p("Ag6OWIgCgBIgOABQgVAAgCgMQgBgFADgFQgKgDgOgBQg7gIh1gYQgYgFgNgEQgUgHgMgMQgdgdAHg9QADgYAIgOQAGgLAPgMIAZgUQAWgSAfgrQANgSAFgKQAJgSACgcQgUgNgUgSQgTgQgognQgRgRgFgKQgGgNABgcQAAgbAGgRQAFgQAUgaQAZggAPgNQASgQAYgMIAugQQA3gRAfgSQAfgRALgWIAEgIQgagrgMgZQgihGgEg9QgDgkAKgXQAHgPAOgQQAJgJATgRIBDg3IAjgbQAVgRANgMQAggeAWgfQAcgoAFgiIAAgFIABhQIgBgCQgGgMgQgUIgVgbQgUgYgGgRQgIgVACgpQABggAEgPQAJgeAXgTIAcgUQARgMAIgLQALgRAAggIgBgHQgBgJACgGIACgGQACgFAEgDIAEgBIAcAzIAPAWQAeAzgMA7QgFAagWAsIgaA4QgLAVgCANQgCAKAAATQAGAFAEAQQASBJBFA9QAfAbA/AmQAcARAJAPQAIAPAAAiQgBAkgEAOQgHAZgaAfQgZAfgeAcIg1AtQggAbgSAUQgPAQgLARQAqBSA3BMIAYAiQANATAIAQQAZAxAAA7QgBA4gXA1QgmBWhUA9IAAAoQABAzgDAZQgHApgVAcQgUAZgxAZIgSAJQg6AcguAIIAAAAQgDAGgIABIgDAAQgFAAgFgDg");
	this.shape_13.setTransform(31.874,39.1111);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.7,120.8,-3.3,-47.1).s().p("AhgOCQg3AAg1gUQhHgagyg2Qgyg1AGgzQAEggAxg9QAtg3gEgmQgDgTgOgZQgSgagIgOQgXgpACgxQACgxAagmQAOgVAXgVQAOgMAegXIBSg9QAdgWAOgPQAWgXAGgYQAFgVgEgbIgLgxQgOg9ALg4QAMg+AogmQAJgIAZgTQAVgQALgMQAmgoAHhKQACgWAihuIAEgLQAEACAFAJQAOAbAdAYQAVASAjAVIA6AkQAgAWAUAWQAYAbAKAgQALAjgLAeQgFAOgKAQIgUAaQgfAogXAmQgoBAgBAvQgBAsAfBAIAkBLQAUArAKAhQAaBegiBDQgKATgbAjQgbAigJAUQgVAsAFBcQAGBjgPApQgPAqgjAiQg0A1hMATQgiAIghAAQgmAAgmgLgABsquIgGgWQgCgOgEgIIgIgRQgHgQAEgeQADgaAHgOQADgGAKgOQAKgMADgIQAEgMAAgUIAAgDIAJADQAPAGALALQALALAEAPQAEALABAaQAAAOgDAJIgIAPIgzBWIgIAUIgCgFg");
	this.shape_14.setTransform(31.1054,40.1457);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.2,127.3,-1.8,-40.6).s().p("AiZPBQgPgKgSgWQgkgrgSgSQgegigcgWIgnggQgVgUgIgUQgIgTADgWQACgVAKgTQASghAqgaIAdgSQAPgMAGgNQAIgTgGgeQgHgbgcg9QgZg3gFghQgIg5Afg2QAfg1A2gWIAdgKIAdgKQARgJATgQIAgggQAZgbAHgRQAGgOACgSIAAgYQgKgSgDgQQgEgQAAgbIgBhiQAAgmAFgPQAIgYAYgYQAOgOAdgbQAsgqAZg5QAZg5AAg9QAAgOADgHQACgDADgDIAhAoQAUATAjARIA8AdQBNAnAJA3QAHAqgkA4IgdAsQgRAZgHAVQgUA2AVBRQAKAkApBsQAiBZAHA5QAFArgHAbQgIAfgZAhIgwA3Qg/BHAHA5QACASAKAWIATAlQAXAxAEAwQAFA2gWAqQgVAngzAmQhgBKhZACQgbABg5gKIgGAEQgXARgPABIgGABQgRAAgSgNgAB8tuQgOgfAFgUIAJgZIADgOIAEgFQAdA4ADALQACAIAKAbQAHASgdAhQgUglgJgVg");
	this.shape_15.setTransform(29.6318,33.6309);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,129.1,-3.5,-38.8).s().p("AhMPiIhBgPQgwgLgYgJQgngPgXgXQgdgbgZhBQgbhCgVhGQgHgXgCgOQgDgVAFgRQAGgTAXgXQAgggAEgGQAZgiAFg6QADgfgCg1QgCg8ABgXQAEhmAvg2QAVgYBCgoQA8gkAWgfQAVggAGgwQADgigEg1QgFg/ABgYQACgxAQgiQAKgVAVgcQAcgkAHgLQAVgjAIgoQAGgdAMhjQAUAWAPAOQA+A4AYAMQAVALANALQAXAWAMAlQAIAYAGAuQAFAgABASQABAdgGAWQgEAOgYAzQgUAoABAbQACAYAPAbQAGALAZAiQAoA3AeA8QAfBAgDAsQgCAjgVAlQgQAbgfAkIgbAhQgOATgHASQgTAxAXBQIATBAQAKAkABAcQABAygYA3QgTAqgnAzQgsA8grAjQg3Atg5AMQgcAGgkgBQAAAEgDAEQgDAGgGACIgIAAQgGAAgKgCgAB0uxQgCgaANgYIABAOIgBAtQgBANgCAGIAAABQgHgNgBgQg");
	this.shape_16.setTransform(31.3318,31.8481);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.6,117.9,-2.2,-50).s().p("AhGNiQgqgNhEgoQgrgYgRgRQgVgVgNgdQgfgWgcglQgTgZgegyQgIgNgGgNQgJgZAAglQgChTAjgpQAQgTAogZQApgaAQgRQARgSAIgYIAFgSQgQgngFgbQgFgZAAg0QABg3AIgcQAIgYAfgsQAUgfAQgOQAPgPAjgSQAogVANgKQALgJAZgaQAdggAMgUQAagoAJgxIABgIIgYgiQgZgrgHg1QgHg0ANgzQAFgTAFgNIAPgYIARgWQANgTAbg0QAMgXAFgNQAHgVABgSQABgIgFgeQgCgLADgGQACgEAEgBQBNBwAiAcIATAPIARAPQAWAUAKAeQALAdgDAeQgCAVgRAuIgVA4IgRAnIAHAXQAQAzAjAtIAqAwQAZAdANAWQAiA6AABOQAAAigJAWQgJAagfAiQhGBNhXA3IAEATQAMAoAjA2QARAaAcAkIAXAgQAMASAGAQQALAhgJAgQgFAVgYAlIiADJQgiA1gXAaQgkAogoAOQgaAKgdAAQgeAAgjgKg");
	this.shape_17.setTransform(30,43.0813);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.2,117.7,-3.8,-50.2).s().p("AhxNsQgSAAgIgDQgJgEgEgGQgXgEgNgHQgqgUgegzQgUgjgVhAIgoh5QgSg1gGgeQgKguAEgmQAGgwAegyQAVgiArg0IAZgfQANgSAGgRQAHgTABgYQABgPgCgdQgChQAIg2QALhIAigzQASgbBEhBQA6g3ASgrQATgwgGhlQgGhpANguQAGgSAfg7QAYgvADghQABgNAFgJQADgGAFgBQAYAfABADQAIATAYAWQAkAgADAEQAkApADBOQABARAAAuQgBAoADAXQAJBPAyBNIA6BYQAeA1gDArQgDAqgrBAQgvBGgIAiQgLA0AfBTQAmBoADAhQAEApgMA0QgIAdgWA9QghBYgWAuQgjBJgsAvQg1A5hIAZQgTAIgSADQgCAEgDAEIgJAIIgKAGIgOAMQgIAHgHACQgHACgMAAg");
	this.shape_18.setTransform(31.669,43.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-0.4,118.3,0,-49.6).s().p("Ah1NiQhzgMhDhMQhDhMgJgaQgJgeABg2QABgsAFgVQAGghAgg+QAihCAQgZQAog9A3gxQAYgVAIgMQAQgUAAgUIgBgVQABgGAEgEIAAAAIgKhCQgVijAoifQAQg/AYgcQALgOAkgcQB3hdAkhjIAIgWIgBhPQAAgiAFgRIAFgRIAJgTIAGgVIAJgPQAFgJABgGQABgGgBgRQgBgOAFgHIAEgEQAcA2AAAFIAAAsQAAAfgBAJIgDATQgCANgGAVIgCAFQgDAcAPAhQAKAVAYAiIBTBxQAmAzAPAfQAZAxgBArQgBApgcA2QgaA2glAuIggAmIgIALIAAAVQgBATAEAMIAEAJIAWAZIAqAqQAZAZAMAVQAgA6gVBQQgHAegRAkQgJAVgXAqQhXCmgoB0QgRAxgHAPQgQAjgVAWQgqArhFAAQgRAAgBAJQAAADgTAAQgbAAhFgIg");
	this.shape_19.setTransform(27.872,42.6839);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],0.8,115.2,1.2,-52.7).s().p("AhJNLQg4gCg3geQgzgbgpgvQhAhKgtiFQgOguAAgZQABgiAUggQARgdAegYQAUgRAmgXQAtgcAOgLQAogdApgrQAdgfAqg0IAIgJIgIhYQgPjBAki9QALgzAMghQAPgtAXggQAJgMATgUIAdggQAjgqAahCQAMgdAchbQAEgKAEgGQAXBLgDAzQgEAzASAdIAxBNQAaAtATAaIAdApQAjBAgkBmQgJAbgYA1QgOAngHAeQAVAaAQAXQAnA5AUA2QAQArAAAhQgBAfgQAkQgFANgbAyQhUCegQC0IgFAwQgDAbgIAUQgeBQh1AsQhCAZhEAIIABAEQgBAIgJAEQgHADgIAAIgDAAg");
	this.shape_20.setTransform(26.5999,45.7161);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.3,108.4,-4.9,-59.5).s().p("Ag/MaIgtgEQgtgEgWgEQglgGgbgLQgXgJgqgZQgxgdgTgRQgigggIglQgEgSADgcQAEgoAPgmQADgIAEgDQAEgDAFACIAiiFQAXhPAghXQAjhgAig0QAagkAogqQAxgyBahLIgBg+QABihAghlQAKgeAMgXQAOgaAbggIB8iQIAmgtIgCAEIgGANQACAGgBAMQgHCFABAbQAABbAWBCQASA0AnA8QARAcA4BMQAaAjAHAUQALAigMAoQgKAjgaAgQgSAXgjAeQgtAogKALQgqArgcA2IgDAGIAIAYQAHAaAEATQAGAjAABAQgBBsgPBNQgVBjgwBFQgjAygpARQABAFgDAGQgGAJgJgBIgIgCIgIgFQgMgEgQAIIgdAMQgFACgJAAIgRgBg");
	this.shape_21.setTransform(32.7793,52.5319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-109.3,90.7,243.10000000000002);


(lib.fireBit52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-129.2,137.8,-129.2,-31.6).s().p("ABqPZQgEgCgBgFIgRgCQglgIg1gWQhbgng/goQhOgzgyg9QgogxgNgwQgLgjAAhGQAIjogBh0QgBjJgmiMIgbheQgPg3gDgoQgEhHAehtQAniPAFgkQALhJgLhLQgLhKgfhEQgDgHAAgFQA3BBACAHQAIARALARQAVAgAvAwIClCoQAdAdAOARQAWAbAMAaQASAoAEA/QAFBcgdC5QgXCJgCBWQAVg5AegpQAlgxBUg/QBhhIAggiQAcgeAKgbQAGgOACgUIANjKIAAACQAGAGADAOQALBBAdBoQAkB/AJApQAvDMg4CJQgLAbg1BeQgqBKgKAzQgIAqAFA6QAEAhAJBDQAQCFgiBbQgUA3gnApQgMAMgNAKIACAEQABAMgTAHQgRAGgTABIgSAGIgKACQgEAAgCgCg");
	this.shape.setTransform(37.9806,80.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,144.4,-130.1,-25).s().p("AgUQYQgcgCgwgSQgkgOgQgJQgRgLgcgcQgdgegJgMQgbgigXg+QgegggfgyQgshEgKguQgHggACgpQACgXAGgyQAUiGANg5IAShDIARhEQAUhQAIhRIgJgTIhLibQhVjEAfiLQALguArheQAphZAJgzQAGgmgBhOIgBh3QAAgLADgHIADgEIAYApQAGAyAeA5QASAjAqA/QAsBBAaAZIAlAiQAWAVAMAQQA1BIgWCEQgLA9gnB1IgtCIQAOA1AOAgQATApApA5IAfArQACggADgdQAIheAkgxQATgZAlgcIA/gtQBIg4AuhTQAig9ANhDIAAgIQAAgEAQglIAMA2QACBKAUBcQALAwAkB+QAQA7ACAaQAHBFgjBPQgZA5g3BOQg4BPgXAlQAIBmAZBbQAgB0ADAMQAOBJgRA2QgNArgkAoQgcAfguAhQg+AtgyAPIgIACIAAADQAAANgXAEQgoAHgYAAIgLAAg");
	this.shape_1.setTransform(38.8257,74.4065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,146.6,-130.1,-22.8).s().p("AgaQ6QhHgBgwgTQhAgYgbgzQgLgTgJgjQgLgrgFgMQgOgogwg+QgzhDgQghQgehAAEhYQAChBAYhbQAQhCAkh6QAYhSAGgmQAHgzgCheIAAglQgWhagkhWIghhOQgTgtgHgjQgOhNAXhJQAPgtA6hfQA1hXALg3IArjBQACAIgCAOQgJBiBQB7IAhAyQATAcALAXQA6B5goDBIgnCcQgWBSgHA6IACANQALBJAcA1QAMAXAxBFQAoA4ANAnQAFARADAVIADgHQARgmAKgwQAHgkAFg3IAIhaQAGgzALgmQAOgvAZgkQAbgoAlgWQAQgKAigQQA7ghAghHQAIgQAFgQIALhXQACgLADgFIAAgFQAAgMAEgIIABgCIAFCPIgCAbQgFA9AKAhQAFAQALAVIAUAjQAcA0AKA0QALA6gNAzQgKAkggA2QgnBCgKAXQgPAmgIAxQgGAjgDA2QgDAvABAcQACApALAfIAUAuQAMAcAEATQAGAdgFAkQgEAXgMArQgTBFgLAiQgTA5gWAqQgrBPg7AqIABAFQACAPgaAHQhQAUhOAAIgLAAg");
	this.shape_2.setTransform(38.8203,72.2299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-129.6,148.3,-129.6,-21.1).s().p("AAbRzQgWgIgOgQQgQgDgSgGQgwgRgKgCIgigFQgVgDgMgEQgYgIgnggQgkgdgNgWQgSgdgCguQAAgPAFhCQACgkAAgtIAAgRIgDgCQgYgWgqg0Qgxg9gVglQghg6gEg1QgEg0AXg/QANghAnhLQBBh8AihhQAbhOAMhKIgkhWQglhVgjhCIgZgwQgNgbgHgWQgPgwACg/QABg/AQglQANgdAegiIA1g4QA6g/AjhQQAihQAHhWQABgOAFgFQAhEHARApQAFANAVArQAQAiAHAWQALAngCA9QgBA9gLA2QgGAfgPAyIgYBQQgRA/gJBSIAEAEQARAXAfAbIA1AuQAcAcAPAZQAUAiAKAwQAWBigSBTQgDARgIAXIAJgLQAQgUAOgdQAKgSAOgjIANggQgMg2gEgdQgGguADg9QABgkAIhIQAFgwALgUQAMgYAcgVQARgNAjgWQAfgUAbgaQArgoAMgmIAfh7QADAmAAAkIAAAPIABAFQALArAbA3IAvBdQAaA3AIArQAHAlAABDQAAAggEAQQgFASgOASQgJAMgSASQgnAogQATQgdAigTAeQgOAXgYAvQgMAUgLAQQgBAuAEAYQAFAjAbBGIArBuQAYA/AHAjQAMA4gMAsQgKAngkAuIg9BPQgUAegcA8QgfBAgQAbQgmA8gtALQgLADgMAAQgQAAgPgFg");
	this.shape_3.setTransform(38.3459,70.5485);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.7,146.1,-130.7,-23.3).s().p("AgaRDQgpADgZgEQgygIgYggQgJgMgMgeQgMgdgKgMQgLgMgXgNIgkgXQhFg0AHiNQAEhaAAgRQgDg8gWgpQgJgQgUgaQgYgegIgMQgWgkgJgxQgHgmgBg3QgBhKAOgsQALggAfg0IBeihQAZgrAHgaQAJgggEgoQgDgbgMguQgPhBgRglQgFgLgcgxQgVglgIgZQgLglAChJQAChAAFgkQAHg3ATgpQAKgWAUgfIAhgzQAnhCgHgyQgBgOABgHQAjCMAHANQAIAOASAPIAfAZQAgAfAMA/QALA5gFBRQgDAugKBcQgEAzgCBNQgBA2AIAbQAIAZAWAiIAkA5QAhA8ABBUQABA6gRBdQgMBFgFAsQARgwAdgqIBFhXQApgzAPgqQAOgmAChDQADhUAEgXQAIg3AcgwQAbgxApgkIA8gtQAkgcASgWIBChQQgDAQgFARIgDAIQgIAyAAAmQgBA4AQAsQAFAPAPAgQAOAeAGARQAZBOgiBwQgHAagYBBQgVA5gIAiQgMAsgHBDQgHBEACArQACAcAOBQQANBDgDAoQgFBMg1BjIgcAzQgPAegHAYQgGAUgHAoQgHAqgFASQgMAugeAmQgdAngoAZQgoAZgvAKQgZAFgZAAQgOAAgQgCg");
	this.shape_4.setTransform(39.4059,72.6892);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132,148.5,-132,-20.9).s().p("AhyRJQg3gchVhBQgZgTgMgMQgTgSgIgUQgJgWgBgsIACiVIAAgUQgwgogogtQggglgLgcQgGgSgCgYIgBgrQABg4AHgbQAHgYAXguIABgCQgHgSgFgRQgUhLAMh0QAEgqAKgUQAIgQAageQBLhWAhhdQAbhJgChHQgOg5gbgvQgPgagggsQgjgvgOgWQg2hZARhHQAJgjAlg3IBfiMIAQgaQAIgPADgNIABgHIgCgLQgCgWgBggIgCgRIAAgJQAkBVgBAGQAHAcAQAaQAHAMATAaQASAYAIAOQAvBUghCHQgFAVgaBXQgUBDgGArQgDAbgBAqQAZAyAmAoIAcAcQARARAKAMQApA0AHBLQAGBEgWBGQgHAVgOAlIgUA5IgGAWIARAVQAHAJAVARIAGAFQAIhMAfgzQASgeAlgkQArgmAUgVQAmgmAQgmQgVgpgIg4QgGgoAAhIQgBgiADgUQAFgdAOgUQAMgQAdgUQBAgwAogXQAagQALgLQAIgHAagoIBTDJQAbBKAEBQQACA2gKAkQgIAggcAyQgjA+glA0IhFBdIgMARQAEAVAGATQAMAnA7B0QAxBfAGBAQAFAygUAbQgPAUgnAPIgfANQAdAtAEA6QAEA+gYA6QgKAWgZAqQgpBBgrA4QglAyghATQgKAGgLAEIgCAEQgGAOgLADIgMABIgKAAQABAEgBAEQgDAJgRABIgVABQhDAAhJgkg");
	this.shape_5.setTransform(40.7667,70.269);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.2,150.3,-133.2,-19.1).s().p("AgFR3QgXAAgsgHIgKgDQgfgCgigPQghgQgvgjQgUgQgJgKQgQgQgFgQQgFgNgBgVIgBgiQgGg2g/hIQhJhTgPgmQgRgrAFg4QAEgpARg8QAXhQAFgTQAMg5gFgsQgDgVgJghIgOg2QgHgogBhAQgBg4AEgjQAGgzAQgmQAMgaAmg4QAjgzALggQASg0gJhNIgWiEQgBgKADgHIAAgBIgHgSIgTghQgWgkgPgTIgggmQgSgYgGgUQgFgTADgpQAFguAHgZQAGgUALgaQAfhLAWgmQASggAFgKQAFgLACgJQgBgMACgMIABgFIgCgJQAAgHABgFQABgEACgEQAgBiAQAPQAJAJAiATQAbAPAKAQQAIAPACAdQAGBWgSBnQgNBHgfBuQAPA+AiA2IAiAvQAXAdAKARQAbArANAyQANAygDAzQgBAYgGAiIgLA5QgjDCAwCUIAUA0IACADQAQgiAGgWQAJgigChIQgChHAIgjQAUhNBRhDIAfgaQARgPAKgOQATgbAHgoQAEgbAAgtIAChPQABgtAHghQAThaA3gvQALgJAWgOIA0gdIgDAkQgJAhAgAkQAJAKATAPQAUARAIAIQAdAeAMArQALApgLAjQgHAXgVAdIglAxQgiA0gSBLQgLAwgJBaQgHBEAGAhQAHAkAcA0QAkBCAIATQATAxgDA0QgEA3gcApQgIAOgSATIgbAfQgdAigNAnQgPAqAGAoQACARARAvQAOAogBAYQgCBBhHA1QgSANgrAZQgoAYgUAQIgYAVQgPALgMAHQgZANgiAAIgDAAg");
	this.shape_6.setTransform(41.9557,68.5384);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.2,148,-132.2,-21.4).s().p("AhvR/QgwgEgqgUQgsgVgdgjQgSgWgOgeQglhOAPhWQAFgaAOgsIARg1IgfgWQhEgxgegpQgjgxgIhAQgJg9ARg9QANgxAdg1QAXgoAmg1IASgaIgVgxQgchHgKg5QgNhHANhAQAOhIArgwQAiggANgUQAOgWAFgeQADgWAAgiQgChagOhvIAAAAIA3BBQAVAaAbAbIA1A1QAdAgANAdQAYA4gPBSQgFAagNAqIgTBEQgOA7gLBlIAHAUIAKAgQAZBHAuA8QAjAtAqAkIABgCQAEgIAHgWQAGgPABgKQAEgOgBgXIgCg/IgBgMIgFgUQggh7AahOQALgjAegvQAVggAMgMQAOgPAYgPIAogaQAyghANgkQAJgYgCgvIgCgnQgHgIgEgFIgGgPIgIgNQgCgGgBgIIABgNIAAggQAAgTAFgMQAFgMAQgQQAXgZAPgIQAJgFAQgEIAagIQAQgFAEgKQACgEAAgRQABgNAHgDQAdBoAGAMIAnBQQAPAkAFAiQAEAXgHAMQgHALgaAJIgkALQgbAHgPAIIgBABQggBlgMA3QgYB1AbBSQAIAbAUAlIAhA+QAcA4AQA8QAYBVgXA0QgIAUgSAUQgLANgXAWQgoAngeAaIgCAMQgBAHAAAOIgCAWIgEAWIAAAEQAOBKAiBCQAXAqAGASQAMAlgMAbQgIATgZAVQhOBAhhAYIABA0QAAAPgDAHQgDAGgJAJQgPAPgPAJQgOAHgYAHQgRAFgLABIgZABIgGAAIgaAOQgcANgNADQgNAEgTAAIgRgBgAkVrXQgLgvgagnIgagkQgQgWgIgPQgagvAOgnQAFgMALgOIATgYQAWgdALgjQALgggCghIAEAGQAqA4AJAWQANAjABA6QABArgEAeQgCARgHAgIgPBDIgPBOIgFgUg");
	this.shape_7.setTransform(40.9532,70.8161);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.1,150.9,-132.1,-18.5).s().p("AhaSLQgJgGgBgLIAAgBIgWgKIgfgQQgSgKgOgEQgIgDgVgEQgSgEgKgEQgggLgmgoQghgkgIgaQgGgRACgYQAAgNAEgcIAViCQAEgaAAgNQAAgWgHgQQgIgPgSgQIgfgbQhEhAgCiUQgBhGAOgpQAKgdAYgiIAqg8QA1hLgEg6QgCgWgLgdIgTgzQgQgtgBgxQgCgxAMguQAJgeAWgzQAZg5AIgXQAVhAgBhEQgBg3gOgzIgCgFQgOgfAEgbQAiAxALASQAMAUAUAUIAtAoQAaAYAOAUQAhAvADBIQABAvgMBTQgNBTACAuQADBIAhAvQALAQAaAeQA5BMgHCHQgBAagHA0QAPgXAQgQIAXgUQANgNAGgLQANgWgCgsQgCgfgKhJQgKhEgBgkQgBg6AQgvQATg3AmgfQAMgJAigVQAdgRAOgPQApgqAEhdIADhJQADgqAMgdQALgaAVgQQAXgTAZAGIAFABQAGgCAHgBQAFgHABgPQAAgRACgGQADgHAEgDQATBKAxAyQANAWgBAaQgBAZgQAfIgfA1Qg1BZgKBrQgKBqAiBhIASAxQALAdAFAUQAKAqgCBDQgBBEgLAiQgGATgNAYIgWAqQgxBeAHBMQADAaALAkIATA9QAWBMgSAwQgNAkgtAnQhCA6gHAIQgnArgMA6IgGAkQgFAUgLALQgKAKgPAFQgLADgTADIhWAOQgIAKgUgBIgRgCIgVAEIgTABQgNAAgHgEgAk+uMIgzg7QgbgggEgYQgCgOAEgTQAIgsAWgiIARgZIAFgHQAKARAcAJIAbAJQAPAGAJAIQAPAPAAAbQABAPgHAdIgTBPQgPA8gHAkQgJgZgUgbg");
	this.shape_8.setTransform(40.8748,67.9219);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-131.2,154.4,-131.2,-15).s().p("AgnS2QgRAAgMgDQgLgDgQgJQgtgZgaghIgtgaQghgWgXgWQgXgWgmgzQgXgfgKgSQgPgcgCgaQgCgUAIghIARhBQANgrAFgXQALg0ACg+Igmg0Qgrg6gPgeQgbg0gGg5QgGgwARgeQAGgMAPgRIBIhSQAVgXAIgNQAPgVAFgTQAEgPABgXIAAgQIgZgpIgcglQgQgVgIgRQgRgkADhEQAEhQAVgtQAHgQAkg3QAdgrAJhRQAFgmAEhQQAFADABAMIADgBQAfCBATAVQARAUAHAMIAOAbIAKAOIAJAOQAGAOAAAbIAABoIAAAWQALATAPAVQAyBGAKAQQAgAyANArQAYBTgdBTIgRAnQgKAZgFAPQgNAoACAqQACApAQAlIAGghQALgyAMgbQANgdAjgsQAngxANgXQAMgWAOglQAXg6ADgfIAAgEIgZgmQgSgbgFgPQgJgWgBgkQAAhOApg2QAPgTAQgKQAJgFARgHIAYgKIgEgHQgGgTADgcQACgbAGgPQAKgZAoghIAmggQAVgSAOgIIAQgHIAPgIQALgGAGgJIAAgCQACgIADgDQgBgNABgGQACgKAGgDIACAIQAMA2gBAEQgNAtgDAdQgFApAKAhIAHAUIAFAUQACALgBAPIAAAaIAAAYQABAOgCAKQgEASgMASQgJAMgRASIgEAFQAEAYAJAeIAUA7QAPAqALAZIAcA4QAQAhACAbQAEA6gtA+QgOATgbAeIgPARQAGArASA7QAeBiAGAfQARBdgWBcQgLAygVAdQgZAmhIAqIgmAXIAAA0QAAAWACALQABAKAGAUQAHAZADAhQADAhgJATQgPAfg7APIgpAJQgDADgGADQgFADgTAFIgoAKQgYAGgfABIgPAAIgoAAgAgfIRIABgDIACgDIAAgBIgCgGIgBANgAlaw4QgHgIgCgFQgDgHABgJIAAggIABgVIAFgTIAJgYIAPAPQALALAEAIQALAQgGAMIgGALQgDAFgCAJIgDAOQgCAGgGALIgJAQg");
	this.shape_9.setTransform(39.9655,64.4208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-131.7,158.5,-131.7,-10.9).s().p("AiZTVQghgLgOgSQgOgRgDgmQgDgsgGgOQgJgXgcgWQghgZgOgNQgigfgag5QgVgrgDgcQgCgUAEgaIAIguQAQhQgChVQgBhTgVg9IgdhDQgSgpgEgcQgHg3AagwQALgUAWgaQAagcAMgOQAsg4gHgvQgCgRgSgjQgzhlgJhIQgFgwAKgtQALgwAcgiQAhghAzhXIAKgSQAEACADAGQAFAOgBAQQAJA7AxBGIAuA8QAcAkAQAZQAiA3APBAQAPBAgGBAQgEAtgTBaQgNBRAOA0QAHAWAOAdIAYAxIABACIAAgqQAAghADgUQADgeAKgWQAKgXAggkIA8g+QATgTAIgNQAMgWgDghQgCgPgKgqQgkiTA6hdQAUghArgmQAtgoAtgZQAagPAJgJIAEgFIAGgdIABgEIAAgBIgDgHQgCgFABgDIABgEQALAegEBeIgEA+QgJBaAaBAQAHARAOAZIAVApQAgA+AAA4QABAugfBXQgeBYAAAtQAAAwAcBOQAhBZAFAkQAKBCgYBBQgYBCgzAsIgYAUQgNAMgGAMQgKAUABAmQAAAlADAuQACAqgBATQgBAhgMAYQgPAggqAeQguAgg2APQgzAOg0gDIgGACQgoALgoAAQgyAAgygRgAltx9QgNgPABgkQABgjAMgSQANAtgKA+IgEgDg");
	this.shape_10.setTransform(40.4893,60.3008);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.6,119,-133.6,-50.4).s().p("AgiNPIgOAAQgSgBgDgKIAAgBIgGgDQgNgEgagGQgwgLgcgJQgpgOgcgVQgRgOgGgLQgFgLgBgUQgBgcAGgrIAFghIgHgEIgagPQgWgOgVgZQgNgPgXggQgVgcgJgSQgWguAEg6QAFgzAYg0QATgnAkg1IASgaQACgQAAgLQAAghgRgmQgHgRgbgwQgnhIgMg0QgRhKAVg6QAKgZAXglIAohBQgQg4ACgvQABgYAEgVIAFgVIAEgWIADgiIA1jQQgHB+APAfIAMATQAGADACAJIAvA+QATAaAHAOQAKATAHAeQAZBkgMBPIAQAaQAWAhAvA/QAnA5AKAwQAJArgKA4QgGAggUBBIgDANIAOAaIARAhIANAeIAOgZQAQgdAEgMQAPgtgVhGIgRg2QgKghgDgXQgFgkAHg/QAFg5APgcQALgWAngjIA/g4IABAAIgBgDQgBgRgFgSQgMgqgCgMQgHgkAEhEQACggAIgOQAIgQAUgNIAmgVQAggRAZgaQALgKAGgKIAAgFQAAgKAFgEQAAgLgDgPQgFgbADgMIACgGQAbBlAAADQAAATALAVQAIAOARAVIA2BFQAjAsAMAcQALAaADAkQACAVgBArQgBAvgGATQgDAOgJARIgPAcQgbAygWA0QAIATALAVIAyBfQAcA2AIAtQADARABAZIABAqIABAoQAAAXgEARQgJAqgpA0QgYAegbAZIgVAUIAPBHQALAxABAgQABAzgUAwQgTAwgkAjQghAhgxAYQgnATg4AQQgkALgjAFQgTADgSAAQgEACgGAAIgLgCg");
	this.shape_11.setTransform(42.3747,99.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.3,116.9,-133.3,-52.5).s().p("AAAM3IgDgBIgiAAQhPABgngNQgsgPgxgtQgmgjgLggQgIgYADgxQADgzgHgXQgGgUgQgYIgfgoQg1hFgUhOQgWhWAYhLQAIgZAkhGQAdg5AGgnQAIgzgYhSQgfhpgDgcQgJhKAehFQAFgNAeg4QAWgpAHgdQAHgdgBgmIgBgNQgHgcACgkQAAgXAGgqIACgGIAVBFQAFAJgCAWIAAALQACARAFASQAOAxAnBRQAoBUAcApQAOAVAfApQAaAmALAdQAIAYAHA5IAHBMQACArgEAhQgCARgKArQgJAmgBAWIgBASIARAbQAPg5AigpIAeghQARgVAGgSQAHgVgDgdQgCgOgJgkQgahxAYhJQAIgXATgiIAeg4QAehAAChGIAAgvQAAgbAHgSQAJgdAZgXQAXgVAggLQAagKAHgEQARgKAEgOIAEgQQACgHAGgCQA3CiASAZQAVAdAJATQAdA7gMBBQgFAcgYA5QgXA2gFAeQgHAyAUA/QAJAbAkBSQAcBAAIAvQAKBAgYAvQgKAUgkArQggAmgJAbQgKAfAFApQACARANA3QALAvADAkQADAtgLAlQgPA5g8BDQglAqgiATQgYANg3ANIgVAFQgBAHgGAEQgHAFgSACIgwACIgMADIgIABQgGAAgEgCg");
	this.shape_12.setTransform(42.0232,101.8521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.9,117.5,-132.9,-51.9).s().p("AgGMsIgCgEQgeACg1AAQgoAAgTgDQgfgFgmgRQgogQgUgPQgugjgSg+QgPg3AKg/IALg3IAIgsIghghQhMhWgShmQgKg1AIg0QAJg3AagtQAJgOAWggQAWgeAJgSQAOgaAKgiIAEgOQgWgtgLgYQghhNAEhWQAEhWAohKIARgfQAJgSAEgOQAEgRABgWIgCgoQgBgqACgeIABgGIArBrQALAfAaArQAtBJA0BDIAXAdQAMASAGAOQANAhAAA3QACBSgLBYIgEAkQgCAVACAPQAEAYAOAcIAbAvQAVAnAMAjQAKgSAEgNQAFgSABghQgDhoACgzQABhaAfg4QAWgiAHgSQAMgbAAgtQAAgSgDg0QgDgrABgaQAGhVAtgpQARgQAegOIAygXQBAghAFgwQABgRACgFQADgFAFgDIABAAQAWBqgBAXQABBzAiCNQAVBWA3CkQAOAsAFASQAKAjADAcQAJBJgdA0QgLAUgbAkQgYAjgJAnQgNA4AaBxQAaBzgMA3QgLAxgnA1QgvBAg4AdQgfAQhPAUIgmALQABAEgCAEQgCADgKAEQgWAGgZAEIgJAFQgOAJgIAAQgGAAgEgGg");
	this.shape_13.setTransform(41.6648,101.2663);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133,117.5,-133,-51.9).s().p("AgMM0QgLgCgFgFIgVAAIhZgEIg2AAQgegDgUgLQgRgLgQgVQgHgIgUggIgog+QgXglgHgeQgIgjAHhHQAIhIgJgjQgFgWgQgfIgagzQgkhRABh9QAAhDAQgoQAGgQARgcQARgeAHgPQAehDgNhsIgMhZQgGg0AAgkQABhQAghKIAdg+QAQgmACgcQABgMAFgIIADgEQABgDgNgnQBqDZAVAeQAWAiALAbQAJAYAJA0QAKA7AJBoQALB0AGAvQASCDAlBhIAFgbQAVhkA0hVIAZgoQANgXAFgTQAIgbgEgmIgKhCQgMhNADhJQACg7AQggQAJgRARgSQAKgLAWgTIBFg+QAYgWAMgOQARgWADgXQACgLADgHQgBgIADgHQABgCgDgNQBJC4AWA1QALAfANA8QANBAAJAcIAWA7QAOAkAGAXQANAygEA0QgDA0gUAvQgLAZgaAxQgUAsgBAiQgBARAEAVIAKAnQAcBlAIBEQALBegTBMQggB9hzBpQgyAtguAXQgrAVgwAGQgTADgTAAQgdAAgbgGg");
	this.shape_14.setTransform(41.7207,101.3325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.2,128.1,-132.2,-41.3).s().p("AgVOsQgQgEgGgHIgCgEQguAEgsAAQgbAAgQgCQgYgDgSgIQgRgJgSgQQgMgKgTgWQg2g8gZgsQgjg/ADg6QABgYAJgfIARg1QA3ifAKikIgkgsQhLhggXh6QgYh8Aih1QAGgXANghIAVg3QAMghAYhOQAXhKANg3IgDgEIABgEIABgEIACgDIADgCIAJgvQAThsgRhWQgEgSADgIQACgEADgDQA1B9AMAaQAkBQAmBHQAYAwAJAXQAKAfAIA2IAXCNQAIAtACAbQAEAogDAgQgBAIgVBZIACACQAEADAAAFQABAHgFAFQgDADgFAAQgJAwAFAhQALAXAPAwQARAyANAYIASAeIAQgbQAXgkAJgaQAPgsgCg9IgIhtQgFhEAHhGQALhhAogwQAPgTAsggQAmgcASgQQAegZATgZQAXgeALghQAIgZAAgYIgCgOIAAgGIAAgBQgCgRABgFIADgGQBACiASAoQA5B8ANAuQATBDgBBFQgBBGgVBCQgNApgiBSQgaBJAFA1QACAeAOApIAYBGQAnCDgoCTQgLApgUAwQgLAdgaA5QgOAegIAPQgNAYgPAQQggAig3ATQgkANhDAKQgtAIgfAAQgUAAgQgDg");
	this.shape_15.setTransform(40.956,90.7305);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,132.3,-130.1,-37.1).s().p("Ag1OtQgqgDgpgQQhFgbhHhFQg6g5gfg9QgkhHAHhFQADgeANgmIAahDQA0iGAWiTQgSgygyhdQg1higNg+QgJgrgBhRQgChmAOg7QAGgcAOgmIAYhAQAZhGBXkwQACAJgEAQQgZBjAuB7QARAuAeA5IA4BjQBCB1AaBRQAmB0gSBjQgGAkgUA5IgUA7IACADQAUAgAtA9IAZAjIABABQAEgSAAgPQABgWgIgyQgRh6ADh1QABg0AIgfQAPg1ArgtQAmgoA4geQA0gcAOgJQAagUAMgWIAAgGQgCgeAKglIACgHIgBgKQAAgHACgGIASBpQACAZALAcQAIAVAQAeIAbAxQAwBeAGBjQAHBrgtBTIgeAwQgTAegJASQgHAPgGAQIAQAlQAmBaALAwQAMAwADA8QACAqgBBEQgBAqgCAYQgEAkgKAcQgbBNhSA0Qg3AlhlAgQgmAMgYAEQgcAFgXgBQgSADgVAAIgNAAg");
	this.shape_16.setTransform(38.8838,86.5445);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-126.5,132.6,-126.5,-36.8).s().p("AgZOqQgGgBgFgFIgCgDQhEgHgkggQgVgSgQgfQgGgKgVgwQgYg3gig0Igpg/QgYglgLgeQgYg9AIhJQAHhDAghCIAUgoQAMgXAFgSQAJgeABhBQAAgcgCgOQgDgYgJgQQgIgMgPgOIgagXQgXgYgfg6IgVgoQgKgXgGgTQgMgpADg8QAFhaAmhwQAOgoA/ibQAQgmAHgYQALgiACgeQABgPgBgmQgBgiACgTQACgMAGgDQBACXANAZQAkBHAcAmQAbAmA9BIQAzBBASA1QALAeAFApQADAWADAyIABA4QgBAggFAYQgJAogmBAQgoBFgLAhQgQA0AIA7IADAQIAAgBQAQg3BEhqQBBhkAOg+QADgKAIg6QAGgpALgYQASgoA4gwQBCg5BAhqIASgdQAMCuAKAgQAUA8AJAiQAPA1AGArQAQBwggBSQgGARgUAnQgRAkgHAVQgQAwADA/QABAoAMBIIAuEhQAIA0ABAcQAAAtgOAgQgVAwg2AeQguAZg9AJQgVADhbAFQhEAEgqALQgMAEgIAAIgFAAg");
	this.shape_17.setTransform(35.209,86.2298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-65,96.60000000000001,251);


(lib.fireBit42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.1,129.9,4.6,-56).s().p("ACaQRQhrgEhHgeQgwgUg0goQghgZg4g0QghgegOgPQgZgagQgZQgPgagMgjQgHgWgLgrQgYhcgJgxIgOhbQgIg1gKgkQgRg+gnhNIhJiEQgshPgWg5QgehNgDhEQgDhKAeh3QAliQAFgwQAEgkAAguIgChSQgFhcgCgZQgEgpgKg5QgCgOgEglIAlBAQANAZAlAhQBnBbCQBZQBeA5CsBcQBKAoAlAcQA6AsAXA1QASAqADBNQACBGgMAvIgQA1QgKAfgDAVQgHA2AYA+QAPApAoBEQAgA2AUAbQAgAqAkAWQANAJAbAMQAbANANAHQAyAeAmA7QAeAtAbBIQAoBsAEBLQACAygMAsQgMAxgcAjQgkAuhEAiQiCBCitAAIgdAAg");
	this.shape.setTransform(37.8785,58.0982);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],10.1,147.6,9.6,-38.3).s().p("AB1SlQgKgCgBgHQhFgMg+gaQhwguhJhTQgogug0hcQgRgggHgSQgNgcgDgZQgFgcAFgmIALhCQAThwgHiOIgDguIgCgCQgNgShOhZQhQhag8hjQgthKgTg+QgYhOANhDQAFgbANghIAZg5QCelaAxl8IAAgDIgCglIAAhCIAAgBQAhBpAAADIAAAGQALBIAxBNQAfAxBGBSIEEEyQAvA3ATAgQAuBOABBqQABBaggBnIgdBdIgDAMQAUAvAeAoQAqA2BLA3QAsAgBaA7QBOA2AvAzQA7BCATBHQAnCTh6C4QgtBGgwArQg6AzhZAjQgdALgoAMQACAFgDAGQgDAHgGADQgIAFgSAAQgYgBgXgCIgOAEIgLABIgJgBg");
	this.shape_1.setTransform(32.8629,40.3194);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],12.2,144.1,11.7,-41.8).s().p("AD2SEIgCgDQgdAHgdABQg/ACgsgeQgWgPgbggQgigogLgKQgRgQgdgTIgwgfQhWg7g6hbQg5hbgShnQgLhBADiAQADiDgKg+QgJg9gWgqQgMgYgVgcIgmgxQhbhzgohhQg0iAAUh2QAShoBciAIBOhoQAvg+CBkcIAag7QgCAMAAAFQAFAfgBA8QAAA/ADAdQAHA4AbA1QAYAtA3BOIgGgDIBUBWIgDgDIB6B+QAbAcALAOQATAYAJAXQAOAigBA1QgBAugIBCIgPBwQgQCGAcBUQAPAvAeApQAdAqAoAdQAfAXBeAuQBSAoAlAmQA7A8AVBnQANBBgBB3QAAA2gCAcQgDAtgHAkQgUBag3A1QgUATgfASQgTAMgmASQguAWgcAJQgqAOgkAAQgQAAgFgIg");
	this.shape_2.setTransform(30.7027,43.8625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],15.5,152.5,15,-33.4).s().p("ABATkQgtgXgkg6Ig8hpQgegyg0hBQg9hJgdglQgzhAgdg1QgmhEgMhAQgNhHAPhpQAWh2AGg7QAHg4AAhYIAAgPIg6hBQg6g+gggrQgvg9gbg5QgfhCgJhEQgJhJAVg/QAYhHBLhTIB+iLQBPhnBtmQQAJAqgGA0IgCAQQAEAnAFAgQAXB7BKB9QA9BpBkBvIAfAjQAQAVAJASQAYAtABBIQAABCgiCuQgeCXANBYIABAJQAvA+BBA1QAhAcAaANQAPAGAaAIIApAMQA9AVAwA1QAsAwAbBBQAWA4ANBJQAIAwAHBVQAEAxAAAcQAAAqgIAhIgQAxQgKAdgCATQgEAbAGA6QAGA4gGAcQgHAlgZAhQgXAegjAUQglAVgvAHQgBAGgJAEQgKAEgOgBQgfgCgtAFQgyAHgaACQgXADgUAAQhBAAgpgXg");
	this.shape_3.setTransform(27.465,35.4782);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],9.6,148.4,9.1,-37.5).s().p("ADQTFQgIAAgGgCIgsACQgvABgmgHQgtgIgkgUQgogXgYghQgQgXgSguQgUgygMgUQgTgfgqgmIhFg+Qgpgpgkg+QgXgngkhMQgghBgOgkQgWg5gGgxQgHg4AMhcQAPhvAAglQABhMgZhdQgKgpgph8QgihkgMhCQgSheAMhNQALhHAphTQAVgrA8hlQAXglALgVQARghAIgcQARg3gDhOQgBgugHhaIgBgEQBRCrBJBUQAQASAVAVICZCcQANAOABAIIAAACQAZASANAkQAPAnAAAzQgBBMgVA3QgGAPgaAxQgVAngHAaQgIAfABAxQACBHAQAvQAYBFBBA8QAxArBUAxQA4AhAUANQApAdAYAeQAtA3AXB8QAZCNAbAxQAMAXAVAcIAlAxQAuBAAeBJQAeBKgFA1QgFBEg7BAQgXAYghAaQgVAQgoAbQg+ArgmARQgyAXgtAAIgOgBg");
	this.shape_4.setTransform(33.3822,39.5512);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],13.5,150.1,13,-35.8).s().p("AClTjIgDAAIgSAAQgRgBgMgDQgYgFgogUIg+gfQhEgjgdgjQglgtgOhVIgKhFQgGgqgIgbQgFgUgOgmQgQgRgUgRQgUgQgxgkQgtgggXgVQhghVgniBQgniCAih8QAGgVAQguQAPgrAGgYQAGgVAHgoQAHgqAFgUIAQg1QAKggADgVQAKgxgGhGIgEgsIg0gwQgxgugdglQgmgxgQgyQgLgigDgtQgDgeABgyQABg0AFggQAHguARghQAHgPAOgUIAWgiQAohBAKhOQAEgbADh6IATAfQBDBnBlBGIBjA9QA6AlAfAiQAwA1AhBaQAiBeACBNQABAmgGAzIgPBYQgPBeABBCQADBXAfBBQANAaAVAcQA2ASAQAHQAqATAjAZQAwAkAjAsQAxA/AWBQQAVBPgLBPQACAFAAAGIgBAXQABALAKASIAPAYQAqAaA9AuQA5AsAWAcQAlAtAPBEQAYBqgnBlQgSAvgqBBQgoA9gkAiQgwAvg1ALQgLADgVACIggAFIgpAOIAAABQACAIgKAFQgIAEgLAAIghABIgRABIgLgBg");
	this.shape_5.setTransform(29.4311,37.872);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],17.9,159.8,17.4,-26.1).s().p("AEvVEQgHgBgGgFQgFgEAAgFQgmADgUAAQgjgBgbgIQgdgJgjgWIg7goQhBglgfgVQg2gkgUgpQgLgXgGglQgGgqgEgUQgIgkgSgrQgLgagZgwQgUgngMgTQgTgggTgVQgYgagsgfIhIgzQhThAgzhfQgyhggGhpQgGhpAnhkQAnhkBLhJIAFgFQAHgNAEgPQAJghACgyQADhEgNgoQgNgtgug2QhHhUgFgHQg0hLgMhoQgLhbAUhnQAQhOAphqIBHi0QAQgqAGgbIAEgQQAHARAwBkIAAgBIACADIgCgDQAIANAKALQAcAfAlAPQAQAGAGAGIACABQAWAJAfAZQBGA6AzAwQA5A0AcAoQAfAvAfBSQAdBUAAA3QgBAwgYBLQgfBcgGAeQgHApABBSQABAwADAYQAFAoAOAdQAOAbAcAdIArAqIAKADQBfAeBCBYQA+BTASBqQAGAiAJBGQALA7AaAjQAOATAnAiIBrBbQAwAoAXAZQAkAoAOApQAPAugIBCQgIBKgiBQQgbBAgwBOQgwBMgoAiQgXATgiASQgTAKgrATQgPAHgLAAIgBAAg");
	this.shape_6.setTransform(25.0691,28.1766);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],18.9,178.7,18.4,-7.2).s().p("ABnYhQgegNgbgkQgFgGglg8QgrhIhAg2Ig2grQghgagTgTQhphrgPjgIgGi0QgBglgDgiIghgYQgZgXgggtQgpg4gNgPIgjgmQgWgYgMgQQgkgygMg/QgMg/AQg8QAQg7A4hSQBHhmAQggQAdg8AOhOQAKg7AEhVIABhHIgIglQgKgwgHgWQgMgmgSgbQgYgnhJg6QhJg6gYgoQgmg8AFhUQAEhHAhhPQAphjBBhVIAmgxQAVgeAKgZQAPgmABg3IAAgMIgBgYQgBgGACgGIgCgpQAgBBAAAEQAEAyARAvQATA3AiAvQASAZAlAmQApAtAPARQBPBgAbB/QAbB+ghB4QgHAbgPApIgZBDQghBjgKBqQAZApAjApQAyA7BTBGQAuAoBgBOQA5AxAWAgQAWAhAOAuQAJAfAKA3QAIAvADAaQAEAogFAgQgDAZgMAkIgUA7IgIAgQAhAkAxAiQAkAZBHAmQBNAqAfAUQArAcAZAaQAyAzAOBKQAPBJgbBDQgJAXgQAaQgJAQgVAfQgYAkgLAWQgRAhgFAeQgEAVABAtQABAsgEAWQgIAqgnA7QgiA0ggAQQgQAIgXADQgNABgdABIgmAAQguAhhJAEIgPABQgiAAgYgKg");
	this.shape_7.setTransform(24.027,9.2841);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,185.6,20.8,-0.3).s().p("AD+ZqQgGgBgEgFIgcgBQgogCgfgHQhQgSgpg0QgWgcgWhDQgXhDgWgcQgaghg8gfQhRgrgPgLQg2gmgkhCQggg6gPhLQgLg4gEhTQgDhdgDgvQgFhRgOg7QgRhKgig3QgJgOgWgfQgVgcgJgRQgig5gIhEQgJhFAUg/QAMgmAYgrQAPgbAfgvQAggxAPgaQAXgsAThUQARhOgDAMIADgMQAKgiAAgWQgBhKgFhxQgDhIgHgjQgPhRg0hWIgOgUIgFgEIgsgaIgsgaQhKgygSg8QgHgbABgkQACg6ATgsQAOgeAog1QAug6AXgbIAhgkQASgWALgRQAUghAGgnQAGgngJgmQgFgTADgKIAAAAIgDgMQgDgOAEgHIBCBiQAPAVAhAjIBrB1QAiAkAQAVQAbAiAPAeQAfBCgBBgQgCBLgiAdQgRAPghAJIg3AOQgVAIgmAYQgWAOgHAKQgMAQAAAfQABAjgCAQIgBAFIABAvIgGgHQABA/AHA1QAKBKAmCOIAaBgQAVArAmAgQAqAlA1APQAXAHAqAFQAuAGATAFQA7ANA0AmQAzAkAiA0QAhAyAPA9QAPA9gFA+QgCAWgHAqQgHAsgCAVQgIBPAbAwQATAkApAdQAfAUAyAVQBDAcARAIQAuAYAaAcQAiAlASA8QAMAqAHBGQAFAnABAVQABAhgEAaQgEAcgOAoIgXBDQgcBZAGBeIAFBEQACAngHAbQgJAggbAqQgeAtgaATQgkAdhFANIhZASIgTAEIgIACQgNAFgIAAIgEgBgAmCidIgBAAIABgBQAGgHACgPIgIAXg");
	this.shape_8.setTransform(21.683,2.3661);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],20,192.7,19.5,6.8).s().p("AC3bKQg+gGgegNQgcgLgugjQgbgVgNgMQgVgUgKgVQgKgVgGgvIgUiYQgIg+gHggIgGgXIhng2QhQgqgnggQhKg+gehhQgfhhAahdQAFgTARgsQAPgnAFgYQAJgkAChLQAChfgEgwIgBgIIhZhWQgmgkgPgVQglg2gKhSQgNhpAohHQAPgcAngpQAsgvAOgUQAyhJAPjeIADgmIAbB3QACAFAYAdQAYAeAwAtQAXAUAOALQAVAPAUAIQANAEATAEIAfAGQAvAKAzAbQBIAoAdAxQAVAjAJBDQAKBGAABEIAAA8QgBAkADAZIABAMIADAGQAUA6ANAbQAVAuAbAeQAgAkA5AeQARAJBVAmQA+AbAlAbQAyAlAWAuQARAiADAvQACAhgFAzQgQCeg5CZQgGARgCAJQgDAPAEALQADAJAKAKIARAQQAdAbASAsQANAiAJAyQARBmgsAsQgPAPgmARIgeAPIABAEQAAAPgFALQgDAGgMAQIgKAMQADABACADQAEAEgCAHQgCAGgFAEQgEADgHACIgMADQgSAFgbAMQgjAPgKADQgnANgyACIgGAAQgiAAg0gFgAmQv5QADgXgqg0Qgrg0gcgSIgqgbQgxgjgNgpQgHgYADgeQAEgoAXgsQARghAhgqIA3hHQAdgqAOgkQAFgNAdhmIAMAsQAEAfATAgQAPAYAjAqIA5BDQAhAmANAYQAOAZAJAhQAGAYAFAmQAIA3gHAcQgFAYgWAkQgeAzglAwIggApQgSAYgLATQgSAfgeDGQgOjkADgYg");
	this.shape_9.setTransform(22.994,-4.7729);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],17.6,196.8,17.1,10.9).s().p("AC7cFIgTgEQgJACgFgBQgEgBgDgFIgBAAQiTgnh5hiQg8gwgbgwQgig7gMiPQgMiMgmg9QgRgZgfggQgkgjgRgSQgggjg6hTQgTgcgJgRQgPgagFgXQgIglANg4QAIgkAVg/QAXhEAHgfQAdh6gnhQQgHgOgQgZIgYgmQgdg2gEhNQgDgxAIhYQADgnADgSQAGgfAJgYQAPgiA9hJQA2hAAKgvQAHgigJguQgDgOADgIIAWAmIAgA7QAKAUAgAJQAgAJAXAIIAmAPQBYAjA8BUQA5BQAPBiQAGAhAGBBQAHA6APAlQAXA4A3AzQAkAhBJAyQA5AnAcANQAXALAwATQApATAWAWQAZAYAZA4QAZA2AMAmQASA0AEAtQAEAygPBjQgPBjAEAyQAFAxAiBnQAgBiACA2QACA9gYA5QgXA5gsAqQgZAYgnAZQhtBJh7AtQADADAAAEQAAAKgMAEQgGABgGAAIgKgBgAl3xdQgKgTgVgaQgLgOgJgDIAAAAQgYgWgogeQg+gugYgfQgRgWgFgTQgFgRACgbQABg0APglQAIgWAUgfIAggyQAmhBAKhNQAEgkgCgiIAUAXQAUAYAoAoQAqAoAUAWQAhAkAUAhQAZAoAJAqQAKAtgKApQgGAVgMAZIgYAtQgaA0ggBiIgXBEIgGgPg");
	this.shape_10.setTransform(25.3293,-8.8807);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],12.4,203.5,11.9,17.6).s().p("AgUc9QgrgMgXgRQgZgTgWgpQgXgvgNgXQgRgdgfgmIg3g+QhChPgFhEQgBgVAEgeIAIgzQAEgjAAgsQgBgbgDg1QgEgxgDgYIgCgPIgzgkQg9grgdgfQgbgcgig0QgdgugNgiQgRgvAIgnQAHggAYgiQAPgUAigjQBBhDAhgvQAwhDAQhCQADgPADgRIgCgIQgMg4gcgwQgMgWhLhfQg3hGgNg1QgLgsAIgyQAHgtAWgtQATgmAfgqQAXgdAmgsQAWgXAJgOQAPgWAEgUQADgMAAgQIgCgNQAAgGABgFIgBgTQABgJADgGQACgEAAgQIAaBUQAJA/BJBIIBAA/QAiAmAOAkQAOAkACA/QACA9gJAiQgEARgJAWIgRAnQgZA/gPBGQAgAoA+AYQAkAOBWATQBxAZBOAfQCMA3A5BcQAwBMgEBmQgCBUgoBgIgUAyIgKAZQAPAeAVAaQARAVAwAuQArAoATAcQAbAmAMAtQAMAugEAuQgEAugUArQgVArghAgIgbAZQgQAPgIANQgUAhADBLQADBPgQAgQgQAggkAVQgfATgqAHQgWAEg2AEQgyAEgbAGQgMADgIgCQgoAXgbAFQgLACgOAAQgdAAgmgKgAny4PQgRghgFgSQgFgTAAgdIABgxQgBgmAEgNQAEgLAJgPIAQgZIAKgWIAKgVQAEgJAIgJQAZAqACA6QACA3gXBBIgYBBIgNAng");
	this.shape_11.setTransform(30.572,-15.5136);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.8,218.1,8.3,32.2).s().p("ACifDQgEgDAAgEQhCADhDgFQg7gEgpgOQg2gRgggiQgSgTgPgfIgag3QgYg0g1hYQg7higVgpQgXgugGgcQgHghAEgxQAGg3ABgcQADhUgkheQgbhJg4hcQgZgpgJgTQgRgigFgeQgMhaBVhmIBIhOQAqgvAVglQA5hhgFiiQgEh/gkhhIgEgBQgLgCgVgHQgtgQgUgNQgjgWgKgfQgGgQAAgeQAAgoAGgZQAJgiAagoQAHgLAsg4QARgWAHgQQAKgYgDgcIgCgWQAnBdAHAMQAFAIARATQAXAXBWBPQAWAVALAMQAQAUAGAUQAEAQAAAYQAAAZgHANQgOAWgnAEIgfACQgRABgMAFIAAABQAIBSAnBhQAjBWArAqQAuAsCBArQB+AqAuAxQATATARAcQAJAQATAkQAqBTASAuQAdBJAGA/IADBHQABAsAGAbQAPA9BKBbQBQBiATA0QAoBtg7CPQgMAegcA8QgVA0gDApQgBATAFA5QAFAvgGAbQgHAggVAbQgUAbgcASQg1AhhJADIgbABQgHAGgRACIgfAEIgFACIgOAIIgIACQgDAAgEgCgAnX6QQgTgXgJgOQgOgWgGgTQgGgVgBgzQAAgjACgTQADgeAJgWIATgpIAEgLIAIAHQAcAcAJAUQAJAUABApQABAtgFAaQgDASgJAdIgPAuQgEAOgCAPg");
	this.shape_12.setTransform(34.1178,-30.1933);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.1,227.5,7.6,41.6).s().p("EABVAgvQh1gMhEgfQgugVghghQglgjgPgrQgJgagGgxQgHg2gGgWQgPg5hNhkQhKhhgOg8QgKgvAJg8QAFgiAThIQAehzANhZIgTgnQg0hmgSg2QgWhHgBhJQAAgoAIgXQAGgQAVgdIBviXIAJgOQADgaAAglQABgmgBgmQAAgngDgZIgGgpQgDgYAAgRQABgLADgFIAAgCQgKgrgOgsQgSg4gUg1QgDgFgDgIIgCgIIgJgXIgMgaQgGAAgFgEQgFgDgGgJIgKgNQgEgEgRgLQgQgLgYgYQgcgcgKgTQgVgpASg/QAKgmAUgaIAVgaIAPgUQAEgEAJgFIAOgKQAIgHAOgSIALgMQAHgHACgGQAFgLgDgTIgGgfQAAgJADgGIBdCLQAbAqAPAdQAYAsgHAdQgEANgMATIgpBDQgZApgHAUIgEALIAAAHQgCAxAEAXIAIAhIALAnIAGAVIAOAqIAVAyQAPAlAHAXIAJAlQAdAhAuAbQAcAQAnAQIBGAaQA2ATAYARQAwAjAYBCQARAxADBLQACA1gGBgIAUAYQAVAaAxA1ICjCzQA6A+AeAjQAvA4AhAwQAlA1AFAnQAJA1gnBMIggA8QgRAjgHAbQgQA9AUBSQALAwAfBeQAPA2gIAeQgPA8hjAmQgzAVg3AOQgCAGgGADQgEADgVAEQgSADgfANQgiAPgOADQgUAGgdAAQgWAAgcgEgAn2+WQgEgKgBgWQgCgqAIgvIAHgjQAIAKABAFQADAHABAWQAEAoABAUQABASgEARQgDALgJAUIgBACQgHgGgDgKg");
	this.shape_13.setTransform(34.8533,-39.5346);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],6.5,239.3,6,53.4).s().p("EABoAiXQhNgNgngKQhBgPgwgXQg5gbgpgpQgsgtgSg3QgIgZgDgkIgEg+QgKiJguhUQgMgXgmg3QgigxgOgfQg6iCBKjNQAdhQAGgUQAPg6gHguQgEgYgNghIgWg5QgZhIADhSQADhNAbhNIAahEQAPgoAGgcQAMg7gGhQQgHhPABgXQAAgYAXhlIACAFQACAFAAASQAAAsAbAvQAUAiAoArQA6A9A2AqIAhAZIAgAaQBFA9AeBiQARA4ADBBQAFAKABATQAGBdAPAyQAYBOA3AnQASANAdANIAyAUQByAxBGBXQAlAuAVA1QAVA4ACA4QABAngMBNIgfDDQgGAnAFATQAEANALAQIAVAaQA1A/AJA8QAIA2gaA3QgYAzgtAlQgoAhg5AYQgsATg/AQQg8APhBALQABADAAAEQgBAJgMADQgFACgGAAIgLgBgAm+l1IgPgOIgPgPIgJgRIgTgfQgLgUABgPQAAgJAFgRQABgLABgCIAIgLIAIgNQAEgIAMgOQALgNAEgJIACgBQACgCACAEQAMARALAKQASAOAIAIIASAUIAQAOIARAMIAbAZQAMANAFAHQAKARgDATQglAIgiASIgXAMQgLADgNABIgKAAIgPAAgEgIpghRQANgmAZgXQACgBAVgIQgJBjgPAWQgDAEghAUQgGg+AFgNg");
	this.shape_14.setTransform(36.4638,-51.3182);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.3,169.1,4.8,-16.8).s().p("ABjX3QgbgCgkgKQiBgjhshLQhFgvgigyQguhDAJhEQADgXAOgmQAQgrAEgTQAHgkgGhGIgIhXIgwgjQg4grgogsQgtgzgag5QgbhAAAg+QABg7AchDQATgwArhFQA1hXAOgbQAjhBALg5QAHgjAAgxQhGhkghh3QgQg/AEgqQADgbAQg2QAJgsgBhIIAAhLIgEgPQgDgMADgHQABgEADgDIAAgCQABgUALgCQAKgBAFAKQADAHAAALIAAAhQASA1ArAnIAhAbQAVAQALALQAgAfARAtQAQAqACAwQACApgIAzQgFAigNA4IgUBZIAAABQAJAVARAQQAjAhBDAMIAhAHQAVADANAEQAaAHAeAPIA3AeIDbB/QA0AeAYAUQAoAfATAjQAXAsgEA6QgDAygXA0QgQAlgjA3IgsBKQAbApAUAYIAlAsIAiAzIBEBrQAbAqALAYQAdBAgIBGQgJBJgxAtQgLAKgSANIggAUQgRAMg2ArQgsAjgeARQgZAOg1AYQgVALgQAKIABABQAGACADAHQACAHgDAHQgFALgQAGQgXAKgdAAIgKAAgAmz1KQgkgogMgSQgHgKgDgHQgDgJAAgOQAAgcACgOQABgSAEgOQATAdAOAfIANAaIALATQAFALAHAYQAEALACALQAEASAAAWIgZgeg");
	this.shape_15.setTransform(37.6696,18.8273);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],6.4,184.6,5.9,-1.3).s().p("ABGZ3QgKgCgIgHIgDgEQhCABg1gfQgagQgnglQgtgsgWgXQgkgmgYgjQg9hZADhXQAAgOAHg2QAPhmgIhjIgcgfQhThUg9hlQgdgwgMgkQgMgjgGgyQgLhcAGinQACg1AEgbQAGgsAOghQAKgWAuhEQAlg2AHgnQAEgZgDgmIAAgJIgIgXQgRg2gFgVQgEgWgEgbQgCgWgFhxQgEhSgNgyQgCgJgChVQAEAMAJATQAgBDAZAfQAPATAiAeQAlAgAOAQQA0A7AVBbQANA5ABBMQAgA3AwAyQASASASARIAmAfIAlAiQAWAWAOALIADADIA1ASIAqAKQAZAHAQAHQAaAKAcAWQAQAMAgAdQAdAbAOAQQAXAZALAZQAKAZAEAhQACAWgBAnQgBBDgDAhQgGA2gPAqIgWAvQAPAaAUAbQARAWBBBHQAzA6AZAoQA4BZAGBqQAFBQgaBTQgZBOgxBHQgqA+gtAfQggAWg9AYQg5AWgpAJQghAHgeAAQgUAAgSgDgAni3rQgrg0gMg7QgEgPgBgQIAlAdQANAJAHAJQALANAIATQALAaACAVIAAAgIABAQQgQgPgOgRg");
	this.shape_16.setTransform(36.5773,3.385);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.5,128.7,7,-57.2).s().p("ACoQcQhsgDhmgqQh8gxhbhcQggghgQgcQgphEAGhnQAFg/ATgnQAVghAGgTQAHgTAAgpIgBgeQgYgqgug4Ih5iXQg2hFgVgwQghhJAIhVQAHhUAvhEQAMgSAgglQAfgjANgVQBBhjgKieQgDg0gOhQIgRhgIABgJQACgQgBgTIgBgUIAAgKIgCgPQgCgRAAghIAAgfIAmB9QANA8AnA5QAnA4A6AuQAwAnBGAmQAeARBeAwQBXArAzAeQBKAsA1AuQAfAbAKAWQALAYAAAuQgBBVgKBAQgOBPgfA9QgIAQgPAaIAJAMQAZAfApAiIBJA6QAoAjAYAfQAcAkATAzQAOAnAOA6QAeCIAGCGQADBAgKAjQgIAagTAdQgLARgaAgQgtA4geAYQg6AwhXAOQglAGgpAAIgngBg");
	this.shape_17.setTransform(35.4803,59.2931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-271.3,146,442.9);


(lib.fireBit32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-55.6,153.6,-55.6,-91.8).s().p("AhiRFQgcgOgpgKIhIgOQiLgbhZhFQgzgnggg1Qgjg4gGg8QgGg6AUhGQANgtAhhNIA3iCQAghIAOgpQAXhAAJg2QANhSgPivQgOipAShXQAIgpAchOQAehSAYgtQAjhFBDhWIB1iRQA4hIAhg+IAUgtQAMAtgCAEQALBHAYBGIAfBYQBJDjhSEtIgSBAQgJAlgDAcQgCAUABAZQAchBAng8QAXgjAYgaQAdgfA2gmIBYg/IAzgpIBFgyIBSg5IAJAUIAPBCQAzDgg6C1QgLAigbBBQgxB5goB9QgkBxgJBIQgEAggCAxIgDBSQgGBTgUBRQgRBIgbApQgaAmg5ArQiZByiPAMQADAHgGAFQgCADgGAAQgHAAgMgGg");
	this.shape.setTransform(53.4046,87.1816);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-56.8,159.4,-56.8,-86).s().p("AhSR9QgJgCgHgFQgHgGACgHIAAgCQgjgIgsgPQhRgZgugXQhAggg/g4Qgzgug5hDQgbgggOgXQgUgfgHgeQgGgYABgeQABgTAEgkQALhUAMg2QARhKAbg5QATgnAvhJQAvhIATghQAjg8AVgyQAHgQAIgCIAEgBQAEgrgGg1QgEgkgMhAQgOhGgEgeQgJhFAChCQAChAAQgrQANgjAshAQBHhlBBhvQAwhSAUg6QASg2ABgxQgNgogCglQBWCuAaAwQAuBVAQAmQAeBGAFA8QAEA5gRBHQgJAngdBWQg4ClAMBYQADAYAJAgIAPA2IAAADQALhAAQg+QALgsALgbQAPglAWgYQAdggBAgdQBTgmASgLQATgMAkgbIAfgTQATgLALgIQAogdAYgsQAOgcAHgeIAAhFQA2CpARA+QAhB4gOBMQgIAqgZAzQgKAUgmBDQgqBKgiBIQgWAwgKAhQgOAtgCAnQgBAbAGAlIAMBAQAVBngDBSQgEBkgnBMQgoBOiCBxQiFBygoBKIgTAiQgMASgNAJQgSANgfAAQgVAAgagGg");
	this.shape_1.setTransform(54.6386,81.3166);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-58.2,163.8,-58.2,-81.6).s().p("AiUSVQgCgHAGgFIABgBQhWgKhSgfQg4gWgfgZQgbgWgYgjQgQgXgYgrQggg4gRgjQgYgzgOgsQgSg/gFhNQgDg8AFhSQAFhDALgnQAJgcASgiIAig6QBDhwBBh/QAlhIAPgtIAEgKIgBgLQgBgSgPiGQgVi/AdhsQAQg8AmhJIBJh/QBcifAIhpQABgUgBgeIAFghIBDBWIAnAqQAXAZANASQAyBEAGBcQAHBXggBVQgLAdgmBNQggBBgMAqQgUBEAIBJQAJBKAiA+IAdAuQASAcAJATQAPAkAEAyQApg/ARg/QAEgOAOhEQALgzANgdQAghGB3hcQB7hfAihAQAMgXAJgfIAQgtIANAeIADAJIAZBRQARAyAHAfQAKAxADBUQACBDgLAkQgIAagWAiIglA5QgpBEgTBcQgOBIgCBkQgBA5ACB0QgBBlgMBGQgZCUhSB8QgnA8g5A9QgWAXgbAaIgGAVQgFASgFALQgFAMgRAdQgOAZgGAQIgHAYQgFAPgGAIQgMASgaAIQgSAGggADIiSALIgEAAQgPAAgDgIg");
	this.shape_2.setTransform(56.0591,76.9173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-55.6,171.9,-55.6,-73.5).s().p("AhiT7QgGgHgIgGIgJgBQgHgEgBgGQgegPgtgEIg7gEQgjgCgXgGQgwgLgqgjQgnghgagvQgthRgBh1QgBgsAHgeQAEgRAKgYQAMgbAFgOQARgsAHg3Qg1iNAOjIQAFhHANgsQALgoAYgsQARgfAfgvIBWiDQAwhMAcg+QAcg/AOg8IgBgFQgfhygIgwQgUiBAaiOQAXiAA8iFIAUgtQAKgaAEgVQACgLALhzIATAsIAAALQASA0AqBIQBEB0gBBEQgBAjgPAsIgdBLQhUDTAwCoQAKAkA7CEQAvBmACBFQADBMg2CAIgQAnQARgMAWgXQAZgYAOgUIATgbQAMgSAIgJQAUgVAJgLIASgfIgChSQgCg+AAgfQACgzAHgoQAThoA+g6IAdgbQAMgNAVglIAagzQAOgeAGgYQAFgRAzicIABgBQAFgKAGgCQADChAJAWIATArQAQAnAKA0QAGAfAIA/QAHA4ACAcQACAvgEAlQgHAxgZBEIgqByQgTA+gIBKIAfA8QAnBOARBWQARBXgHBXQgGBAgTAkQgMAXggAkQhNBXg+AwIhKA5IgNAKIABAWIAABSQgBAugFAkQgCAUgEAPQgNAtgiAgQgZAYgxAWQgXAKgNACQgJACgYAAIhZAAIACAGQABAGgDAFQgDAGgGABIgBAAQgIAAgMgMg");
	this.shape_3.setTransform(53.4388,68.8823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-58.5,179.8,-58.5,-65.6).s().p("AiAU9IgdgIQgngEgWgNQgygOgfgNQhdgjg+gyQgwgogOgoQgOgnALg1QACgMAXhRQAhhugEh+QgDh0ghh5IgPg3QgIgfgDgYQgHg7ARhkQAPhaATg5QAZhKA3heQBDhrAhg2QA4heAchLQAMgiAHghQAAgGACgJQAEgPACgQQgBgYAAgbIABgkQgIhEgfhOIgbhCQgOgmgGgdQgXh+BkigQAbgqAHgSQADgIAng8QABAMgBAMQAEAQAHAOQAHAPATAcQAaAnANAYQATAkAKAgQALAmgBAjQgBAogRAfQgGAMgNASIgTAdQgTAggRBHIgIAhIAAAIQAAALgFAcQgbB6gMBHIgDAWQAGAmANAgQAQAqBDBkQA4BXANA7QAHAggBAsIgEBMQgEBAADBhQAqg2AyggIAygfQAdgTAMgVQASgcgBg3QgGhkABgyQABhWAeg2QAIgQAcgmQAYghAKgWQASgqgChLIABhqIAaAwIAGAIIBMBfQAqA+ANBMQANBMgUBIQgFATgLAgQgOAlgEAOQgoCAAhCCQADANA2CZQAjBkgFBEQgHBWhGBlQgQAWguA7QgnAzgVAfQgwBJgcBVQgcBUgFBYIgCAjQgBAUgEAPQgMAygrAoQgoAlg2ARQgvAOg7ACQgbABgmgCQgCADgFABIgHABIgJgBg");
	this.shape_4.setTransform(56.3353,60.9571);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57.6,190.1,-57.6,-55.3).s().p("AhZWxIgDgBIiAAAQgtAAgVgIQgTgHgSgRQgLgLgSgWQgwg6gvhDQgigugQggQgYgugFgqQgJhIAthmIAnhSQAWgxAKgkIACgJQgBgogJgtQgJgtgYhIQgchXgIgeQgRhDgGg/QgGhHAIgyQAHgoAahFQBPjHB3i2IApg/QAWgkALgfQAXg/gIg/QgCgQAEgHIABgBQgOh0AbhqQgEgGgCgNQgEgigYg2Qgdg/gGgXQgKgpABhBQABgoAEgUQAJgqApg9QAagkAHgNQAQgdAEgZQACgOgBgYQgBgcABgLIABgCIASAzQAcBRARAnIAfBEQAmBVgHA6QgGA1g6BXQgyBNgOAvQAAAHgDAKIgBAHQgDAhgEARQgBAIgDAEQgHA1ADA2QAGBaAhBTQATAxAyBgQApBWAFBAQAEA0gVBkQgVBmADAyQADAxAYBIIAbBXQAShHAbg9QASgmAOgWQAUgeAngnIBChAQAigkAdgvQgCgQgGgOQgGgPgMgVIgUgjQgVgrgIhFQgDgkgBglQgBhfAkgyQALgQAbgbQAtgyAWhEIAjiDQA3CQAeArQAZAjAKAVQANAfAGAsQALBFgMAsQgGAXgOAaQgIAPgTAfQgyBSgcA8QgNAdgKAcQAQBEAjA+QAYAtA5BWQAtBOgCA/QgBA1gjBGQgWAsgwBPQg0BTgYAjIg/BTIgMAQIABAKQADASAHAiIAKAzQAEAgAABCIgDCIQgCAmgFASQgPBAhDAvQgZASgkAQQgWALgrAQIiCAzQgFAHgQABIgLABIgFAAg");
	this.shape_5.setTransform(55.4531,50.6287);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-54.8,197.5,-54.8,-47.9).s().p("AiyXqQhOgEg0ghQghgUgegkQgUgYgeguQhBhlgYhBQgkhkARhWQAKgwAlhFQAwhcAJgVQAthugSh4QgGghgShBQgWhVgLg6QgQhPgDhDQgGijA9h4QAZgxAvg7IBShkQAvg6AagxQAgg/AGg7QABgKACgGIABgNIAgiVQACAEABAIQADAjgIBGQgIBGADAjQAFA1AjBWQAoBhAIAqQAPBOgbCoQgaCjAVBTQAGAVAUA0QARAuAFAbQAGAbAAAhIgBAiQACAEACAJQABAOgBARQgBAVgHAqIgBANIALgVIAphAQAYgmALgdQAOgnAGg/IAJhqQANhbAzhPQASgcAqg3QAigxALgpQAJgkgEgwQgYgVgKgRQgPgZgFgkQgDgXAAgqQABg/AKgdQAEgMAUgkQBNiNALigIACgLQgFgmgCg5IAAgHQBQDvARAVQAHAIAVAWQATATAIANQAVAigCA4QgDBIgkA/IhSB/IAAAEQgTB2AgBeQANAnAvBUQAsBOANAvQANAwgDAzQgCAzgTAvQgKAZgUAkIghA7Qg0BkgSCDQgPBpAFCMIACBMQAAArgIAhQgaByiJBwQg1ArgnALQgQAFgYACIgqADQgeADgfAGIAFADQAIAGgEAHQgDAGgMABQhIAIgvAAIgUAAgAhbx+QgIgJgHgEQgNgIgVgCIgmgCQgFAAgDgBQgDgBgFgIQgIgJgDgFQgDgIAAgNQgBg5AjhJQATgoAbgoQAKgQACgGQADgKgBgUQgBgWACgJQAEAkAVBSQAEAPAFAKQAEAHAGAJIAeArQASAcAHASQASAtgKAxQgCAKgDAEQgIAJgaAAQgZgBgHANIgOgOg");
	this.shape_6.setTransform(52.6937,43.274);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-52.7,199.9,-52.7,-45.5).s().p("AgaYXIhBgDQg4gCgdgJQg5gQgxg0QggghgrhGQg9hlgtheQgNgbgFgSQgRgbgKgaQgQgvgBhWQAAhJALgpQAThGBRhaQAvg1AeglIAAggQABg0gDhUIgCgzQgPg0gHgiQgbiCAIiXQAFheATg6QAUg9A7hWQBKhuARghQAzhhAJhsIAAgMQgBgvAFheQADgXAMABQAMAAAAAWIgBAsQADACABAEQABAHgFAGIgBAcIAAABIABA0IAAASQADBcAVBBQAHAVAdBCQAXA2AHAjQAQBLgXBmQgOA7gmBzIgCAJQAMBMAdBJIAUAwQAKAdAFAUQAJAkAAA3QAAAtgFByIgCBZIAFgHQAOgTAlglQAigjAPgVQAcgoAQg3IgCg7IgEh3IgBg5QABghAEgZQALhAAmgmQAIgJASgQQAZgVAdgtQAbgoAHgcQAEgTgBgiIAAgCQgCgFACgJIgBgkQAAgNACgGIACgDIABgfIABgDIgJgUIgXglQgQgXgGgPQgJgZABg1QACgzADgbQAGgqAPgfQAGgOAVgfQASgcAHgRQAPgkAAhCIgBhVQAAgMADgGIADgEIABAAQACgEAEgDQAGgDAEACQAIADABASQAFBMAqA9IAcAmQAQAWAHASQAWA3geBJQgKAXgUAkQgYAqgHAQQgYAxgSBEIgOA+IABAIQAEAcgBAuQgBAWgCAOIgDAMQAKA9AaAuQANAWAzA/QAqA0ANAmQAdBTgvBuIgNAdQgCASgDAMQgEAUgWAvQgvBogdBwQgYBegLBfQALAgATAnQAsBeAJArQAHAlABA7QABAcgCARQgDAYgKARQgOAZgnAbQgyAihqA+QhcA6guA6QgPAVgMAEQgGACgJgBIgPAAIgOAAIgBABQgHAEgNAAIgGAAgAhc0FIgVgkQgLgVgBgRQgBgMAFgUQAMg6ATgkIAVgkIAVgjIABgCIANAWQALAQAGANQATArAEBOQABASgDAJQgDAMgRAZIgWAhQgTAggIARIgFANQgIghgOgZg");
	this.shape_7.setTransform(50.5129,40.8333);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-51.5,213.1,-51.5,-32.3).s().p("AiAaDQgugEghgRQgqgVgxg/QiPi2gti6QgahpAGhnQAGhsAoheQAPgiAuhTQAqhKAQguQAehSABhxQAAg3gLiRQgKh9AHhMQAJhuArhPQALgVAXgiQAZgmAJgRQAnhFAWhnQANg8ASh6QACgKAFgHIABAAIAAABQAICPAAARQgCA0AIAnQAFAaANAmIAVA+QAbBWgDBQQgBAfgTB0QgPBZAJA4QAFAfAPAqIAaBIQA3CmgZCsQgGAogOBOQgIBFAKAwIADAKIAEgXIAKhEQAOhJAjhBQAkhCA2gyIAVgWQAMgMAFgMQAIgTgCgpQgEhVAGhdQADgqAGgbQAHglAOgbQANgZAggnQAjgoAMgVQAHgLAkhjQALA/gBAEQAAAoAKAcQALAdAfAtQAlA1AKAVQAaA0ABBBQABA7gUA+IgVA9QgOAmgGAXQgKAjgEAtQgDAdgCA0QgEBYALAuQAFAYAOAkIAVA8QAVBGgGBWQgFBFgYBYQgSBHgYAtQgqBQhjBOQiKBsimA3IgBABQgCAKgSAAIgrABQgXAAgQgBgAFPmlQgXgZgKgOQgTgWgFgVQgIgbALgwQAHgiAKgXQAGgOALgUIAUgiQAagxANg0IAEgPIABACIAUAdQA4BPAQBeQAGAjgJATQgGAMgVATQgkAigOAZQgPAagMA7IAAAHQgMgWgRgUgAhK0UIgJgTIgBgBQgKgdgMgYIgNgfQgEgNAAgbQAAgxACgaQACgqAKggQAFgQAYg6QAHAPAHALQAHANAOAQIAXAbQAzA8ACAvQABAegQAkQgGANgcAvQgXAmgSAnIgPgZg");
	this.shape_8.setTransform(49.3194,27.6194);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-52.9,226,-52.9,-19.4).s().p("Agbb1IgGgDIg0gBQg1gCgcgDQgtgEgigLQgpgNgggYQgigagQgjQgOgdgDgsIgEhMQgEhEgWg/QgIgXgWg0QgTgvgJgbQgPgygFg/QgDgtABhHQABhTAOgsQAQgxApgyQAXgcA5g5QAjghAQgYQAlg2AJhUQgNhZgbhYIgYhOQgOgugHggQgVhmARhnQARhpA1hZQALgUAggvQAcgqAOgZQAFgKAfhQIAAACIADgIIAMA0IAXA9QAzCGgHBPQgDAmgXBMQgXBJgDAnQgEA7AYBIQANAnAnBVQAjBNANAxQAUBIgKA7QgHAngcBAQgXAygLAeIABATQACAMAJAnIAbBoIANhPQAOhSAVg/QAPguASgcQARgcA6g7QA0g0ARgmQARgmAEhGIAGhEQgGgFAAgPQgBgwABgaQADgqAJggQAGgXAQgkQAIgVAGgJQAIgMAVgUIAcgZQAngmASgZQACgGADgFIAEgEIAghcIAEADQAGAGgJAjQgIAkAAAKQAAALgDAHIgGALQgCA9AHAqQAEAXAmB3QAcBVgIA5QgGArgjBDQgoBOgJAfQgaBdAoCCQAIAcAdBPQAYBDALApQAhCDgpBbQgMAcgfAsQgiAwgLAXQgJARgNAkQgOAjgIARQgMAXgjAxQggAtgNAcQgJAWgOAtQgOAngUAUQgZAZg7AOQgdAIgeAFIgCABQgJAFgSgBIgBAAIgcADIgGABQgHAAgGgDgAEJriQgBgWAEgiQAEgcAGgQQAGgTAOgSQAHgJAQgQIABgBIACANQAGApAAAVQAAAjgNAYQgEAJgKANIgOAVQgHAKgIATQgIgTgBgYgAiB4QQgLgbgDgOQgEgSAAgmQABgrAEgVQAFgTAKgZIAMgaQAZBPAHA1QAEAlgEAbQgCAUgLAjIgJAgIgYg0g");
	this.shape_9.setTransform(50.7297,14.7725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-54.4,237.5,-54.4,-7.9).s().p("Aj9dUQhOglgmg5QgshBgDhzIAAheQABg6gFglQgGgogUhNQgWhOgFgoQgMhVAUhnQAOhMAnhsQAUg5AVgdIAPgTQAHgLADgJQAEgLADgCQAGgGAJAGIACABQARgaAIgUQAQgkAJg3QAQhgABhqQAChfgRhDIgPg5QgLgjgEgWQgKg2AIg4QAIg4AagyQAGgPAkg5QAagrAKgfIAVhNIATAkIAPAZQApBCAMAhQAiBdglB9IgbBSQgPAxAAAkQAABCAwBgQA/B7AKAjQARA8gHA+QgDAngPA1IgcBaQgfBxAZBIQAIAXAXAlIAUAjIAMgdQATgtAXiIQAUh0Alg6QAQgYBMhQQA8g9APgzQAHgdABg8IAAh/QgBguAHgVQAHgbAjgwQAJgMAqhKQAHAdACAMQACAoAIAdQAEASASAxQAQAqAEAaQALA9gWBcQgkCTgBAHQgHAogBBcQAAA1ACAcQADAtAMAiQAHAWAbA0QAWAvAHAdQAUBRgyB0QgOAfgeA9QgaA3gKAnQgHAZgHAqIgMBCQgIAogSAvQgKAcgYA4QgaBAgWAhQghAxgsATQgUAKgdADQgRADgjABQhoAEhEABQgEAJgOABQgKACgKAAQgqAAg0gYgAEUvKQAIgRASgaIATgcIAAACQABApgGAbQgIAdgVAdQgKAQgRATQAAg5AQgjgAhi9rQACAWgBAXQgFA6gbAyIgNAXQgDhhAvhPg");
	this.shape_10.setTransform(52.2001,3.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57,163.3,-57,-82.1).s().p("AjoSxQhPgLg0gtQgXgUgVgcQgYgggLgdQgIgVgFghQgNhiAmjUQAPhTAFhCIgShCIgghzQgQhBgHgzQgRiHAshgQALgXATgeIAhgzQAUgfAnhJQAohJASgpQAdhAAKg4QAHgrAAhWIgDiJIgCgDQgBgEgCgOQgBgMgEgTIgGggQgDgSAAglIAAhbQABg/AGgaQACgKAXg/QARgsgCgeQgBgTAGgFIA2CwQAFATADAeQAIBOgNA3QgFAXgPApIgKAdQAKB8A7BuIAiA8QAVAkAKAZQAIAUAKAnQALAnAEAVQAGAiAAAcQAAAbgGAaIgSAvQgSAsgMAtIgHA7QgEAqAABQIAegiQAsgyASgiQAMgYAIgeQAFgTAIgnQANhFALhFQAIg0AKgVQAKgWASgWQAMgOAYgXIBIhFQAngoAfgnIAcgjQgDAEAOgsQAOgsADgCQAGgcAAgcQAAgOADgGIAEgFIABCBQgtFrBjEDIApBsQAUA/gFAxQgFAzggA0QgZAoguAwIhOBRQgkAmgVAjIAGAVQAKAjAdBDQAhBTAFBeQACAogHAYQgPAwhEAtQhYA5hnAXIAAAAQgDAHgFAFQgIAIgRAFQghAMg1ANIAAAEQgEAHgOACQgxAGgoAAQgeAAgZgDg");
	this.shape_11.setTransform(54.8391,77.4306);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57.1,154.4,-57.1,-91).s().p("AiPQ7QgKgCgCgIQgsgDgZgFQgTgFgegLQgkgOgMgDQgugMgWgLQg/gfgchQQgMgggFgoQgEgbgDgvQgDgnADgYQAEgYAPgrQAjhcAphdIAAAAQAPhHABgvQACg0gOhHIgbh5QgPhHAAg0QAAhEAWg0QAKgXAUgeIAigzQA5hUAkhcQABgMAEgQQAHgggBgPQgBgLgDgNIgIgYQgdhdAKhjQADgaADgLQAEgOAPgkQAUguARhAIAehxQACgHADgDQATA6AQAgQAQAfgEA+QgFA9AmCBQAlCBALAvQAWBXgBBHQAAAvgJBhQgEBVAYA1IADAGQAaheAqhBQAjg2AsgeQAVgOA0gXQAxgWAXgRQAxglAjhMQAhhKAMhRQABgIACgFIAMBaIAABMQAAAtADAfQAGA4AXBUQAjB9ADAOQANA7ALBZQAHA8gDAmQgFA2gYAkQgQAWgeAYQgRAOgkAaQgfAagbAhQACAcAGAhQAJAtATBbQAHAvAABVQgBA3gGAYQgNAvgyA6QhsB8iUBJQhMAnhUAUQgGABgFAAIgJgBg");
	this.shape_12.setTransform(54.9724,86.3193);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-56.9,159,-56.9,-86.4).s().p("AiuR2IgGACQgIACgOgEQgzgSgzgpQglgegxg1QhEhLgjg8QgvhQgChMQgDhKAthpQBCicAFgSQARg3AFhGIgqipIgQhCQgHglgBgeQgDhEAZhGQAWg/Arg+IAiguQAUgdAMgUQAXgnAchUQAriCAag4IAghCQATgnAJgcQAVg8AChQIAAgBIgBgNQgDg2gBhTQAjCUAAAEQADAxAHAnQAJAyAaBdQAbBgAJAvQAWB6gLDpQgFCDAABcQAcgxAogyQA+hLCBhrIA7g0QA/g+AnhSIA3iBQgGB6AAAeQABA9AQBPQAJAuAWBbQASBSAFA4QAQClhGBoQgLAQgVAZIghAoQgtA7gUBJQgVBJAIBKQAEAnAPBOQAKBFgOAuQgIAcgUAeQgOAUgaAfQhmB3h3BrQglAhgZANQgjASgxAAQg0AAgtgVg");
	this.shape_13.setTransform(54.7163,81.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-186.7,123.6,384.7);


(lib.fireBit22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.4,168.1,21.4,-89.2).s().p("AhITmQghgDgfgSQgbgPgagZQgSgSgbggQgqgygWgiQgfgxgLgtQgKgpABhRQABhTgJgnQgOg/g0hLQhBhTgdgrQhSh6gkiqQgeiLABizQAAiIAXhUQAMguAZg7IAthmQBWjHAljZQAShqAGhqIAKguQAVAeAAAKIASAjQAsBTBeCjQBQCQAjByQAsCTgRCAQgHAvgWBdQgRBUALA4QAIAxAhA8QAUAiApBDQApBJAcBWIAJgWQAWg1AIgnQAQhNgTh8QgYihgBgrQAAhqArh8QAfhVBEiDQBIiJBDhzIAeg6IAAAJIABgCIgEA+IABAhQAECKAvCuQAcBsAiA+QAPAcAbAmIAsBBQA4BTAWBQQAbBegXBPQgIAdgSAnIgfBBQg5CBADCqQACCBAmCzQAMA4ADAVQAHAsgCAiQgEA7gdA1QgdA2gvAkQguAkg7APQg6AQg7gIQg/gNgggEQg3gIgkAPQgSAIgbAVIgdAWQgEAMgQAJQgXAMgbAAIgOgBg");
	this.shape.setTransform(61.6149,129.609);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],19.3,166,19.3,-91.3).s().p("AgJS8QgJgBgDgGIgNAEQgtAIgqgUQgXgLgggdQhUhLhJhZQgeglgLgaQgKgXgFgnQgMhaAMhwQAFgrAMhDQAEhLgThJQgThLgvhWQgZgshFhqQg9hfgcg3QgrhWgNhNQgaiZBLioQA3h8B+iUIAyg6QAbghARgcQAxhNAYhzQACgIAehTQAJAdgBAEQASAvAVAtIAjBIQAUAqAKAgQASBAgDA+QgDA7gpCLQglB9AFBJQAGBEAqBeQBBCRAFAMQAVA8ALBKQAIA3AFBTIAFBDQAYhRArhHIAggyQARgeAIgWQAIgYADgeQACgTAAglQABhlgGg5QgZiMgLhGQgUh8AYhSQAMgqAcgzIA2hYQAXgmBPiXQAPBPADAIQBKDhCcCaIArApIArAqQBEBKAdBbQAfBigaBYQgPAxgzBOQg3BWgQAnQgiBUAGBwQAEBIAbCCIA8EkQAIAlACAWQADAggHAZQgLAugtAqQg1AxhdAiIilA1QgtAPhPAgQhVAjgmANQgHADgGAAIgCAAg");
	this.shape_1.setTransform(63.7803,131.7286);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],23.4,181.8,23.4,-75.5).s().p("AANVOQgFgBgBgFQg0ABg1giQgrgag3g+Qhrh5gvh0QgihTAHhEQACgZAKgiIASg6QAUhGAIhIQAIhLgNgzQgIgfgRgjQgKgUgZgqIhViOQhGh1gthRQg/hzgahXQgih0AVhhQAPhFA4hgQBMiDANgdQAXgzARhCQAMgxAMhJQAcihgBhxIABhfIAdAyIATAdQA8BYBrC7QA4BjAZAzQAfA+AFArQAEAlgKAxIgYBVQglCEAGB8QAHCKA7BsQATAjAsBBQAlA8ALAvQAMAsgEA8QAuhAAhgpIAlgsQATgZAKgXQAVgtgDhMQgDhXgchVQgGgVgRgrQgQgqgHgXQgbhZACheQAChfAfhXQAchPA+hgIBPh+IABAHQADARAIAUIgEAFIAEAPQATBPAxBaQAeA2BEBmQBNB0AuA9IAmAyQAVAdAMAYQBCCBgxDVQgNA4ggBwQgZBlgDBHQgDBVAZB7IAsDPQATBtgTBJQgKAqgmBIQguBZgbAqQgrBDgzAnQg+AwhAgCQgZAAgjgJIg6gRQhLgSgrAaIgJAEIgZAlIABACQAFAKgLAKQgJAIgLACQgHAJgHAAIgEgBg");
	this.shape_2.setTransform(59.6134,115.9324);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.6,180.8,21.6,-76.5).s().p("ABuV/IgWgBIgfABQgOAAgIgEQgFgDgDgFIAAgBIgWgIQgPgGgXgQQABAGAAAEQgBAGgFAFQgEAEgGAAQgJgCgGgPQgKgXgMgYIgMgMIgKgNQgSgZgeg2IgohJIgCgDQiCi3gVgiQgzhSgNg9QgShUAhh+IAfhqQARg/AHgrQAIgwABg9QAAgfgBgyQgggpgjgmIg1g3QgfghgSgXQgjgugehBQgSgmgghQQgihagKgpQgShLABiEQABhjAOg2QAMgsAcg3IA0heQBLiNAgiVQAJgsAwiOQAQASA2A4QAtAuAWAgQA9BUAeCJQAaB0gMBYQgFAlgPA0IgaBZQgaBfgDBkIANAVQBIBxAUAsQAoBXAPBxQALBVgCB7IAAAfIAAgBQAMgZAYgpQAyhWAtg4QATgZAngtQApgwASgXQBChXAShKIAEgLQgEhgghhbIgyh3QgehHgIgyQgLhBAQhOQAQhSAog3QAFgHBQhVQAVgVAyh1IASApQADAdAGAcQASBHBHB4QBKB8ATBBQAdBjgWBkQgGAfgPAqIgaBHQgmBrgVB6QABBaADA1QAQDdBKCvQALAbAiBIQAeA+AOAlQADAJgBAIQASA9AHBCQAFAtgDAnQgEAxgRA4QgUA+gXAeQgOASgZAWIgmAjQgBAJgGAMIghBNQgKAVgHAMQgIANgUAXQgzA6g0AzIgcAZQgUARgdAOIgQAOQgSAPggANQglAOgRAIIgMAGQAAAJgLAFQgGACgIAAIgFAAg");
	this.shape_3.setTransform(61.4036,116.9236);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],22.8,197.4,22.8,-59.9).s().p("ACDYeQgzgDglgTQghAKggABQgmABgigOQgkgPgXgbQgegjgLg+QgIhKgGgkQgQhehaiiQhcingShZQgOhBAGhDQAGhEAZg+IAVgvIALggQgWidhAi2Qgth/hejUQg0h3gShBQgehqAOhWQANhMBAhyQBLiGASg1QARgzALhTQAViigLiiQAAgOACgHQgGgwAEgwIAcBtQAfB9BbB2IBDBUQAmAxASApQAoBcgQCFQgGAugQBCIgaBvQgRBMAAAzQABA3ASBBQAOAuAdBEQA2B+BCB3IAnBHQAVApANAgIAHASQAGg3ALghQASg5Asg8QAYghA/hHQAqgvAUgcQAfgsAMgpQAJgdADgmQACgWAAguIARihQARArAAAGQgDBgAZBsQAVBYArBtIBQC+QAwBzAZBOQAKAiARA/IAaBhIAZBQQANAuAGAjQAVB3glB8QgkB4hRBhIg6BHQgeApgJAmQgIAkANBWQAMBOgQApQgXA5hFAdQgbALgjAHQgYAFgoAEQgrAEgfAAIgZgBgAAmHHQABBKAJA8QAEgkgBgnQAAg6gMhKIgBBJgAFFpUIAAgCIABABQAJADABARIAAABQgBAAgKgUgAFWr2QgJAAgFgGQgDgEgBgGIgCgLQgEgOgSgFQgPgFgRAFIgeALQgSAGgNAAQgdgCgVgdQgNgTgIglQgGgjAFgUQAEgPARgbIA/hiQAcgtAMgWQAVgmAKgiQAMgsADhWQACgmAJhXQAiBNAgA+QAqBSBNBaIAsAzQA8BOAcBaQAJAagCAQQgDAggiAXQgVANgZADQgaAEgXgIIgtgSQgbgKgTAFQgXAagSAgQgKAUgJAHQgGAEgHAAIgCAAg");
	this.shape_4.setTransform(60.2516,100.2743);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,205.3,21.3,-52).s().p("ACoaeIgdgEIgWgEQgRAHgbgCQiIgHiUiDQgdgbgRgUQgXgbgKgcQgPgnAEhIIAGh4QADhGgCgxQgCgmgEgiQgsgmgYgXQg5g3gqhDQg1hTgLhOQgHgtAGg9QATizBkiWIAig1QASgfAFgbQAEgTgCggQgBgmABgOQAAgJAFgIIACgCQgJiZgyiqQgbhdgrhqQgagggkgpQhahogVhOQgUhKAVhaQAPhFAshaQAhhFAIgUQAVg0ADgrQACgYgDgsIgCgcQgQgogDgqQgBgXANgCQAOgBAEAaIADATIADABQAGACACANIAFAoQAHATAKASQAdA1AuAnQAVASAuAgQAnAfAPAeQAOAZAIA4QAIAxAAAfQACBag3CbQg9CngFBNQgBALgEAHIgEAFIAJAVIAKAVQAHANACAJIABAEIAUAdQAaAmBNBlQBCBWAjA2QAeAtAQAiQAWAtAGApQADAYgBAfIgEA3IgTDZIALAqQAQA5AJAZQAVA7AfA7IATAgIADgHQAlhtAEhGQACgrgIhAQgLhIgDgkQgGhDAEhaQAFhjAPhKQAShdAjhJQAQggAuhKQAqhDARgoQAXg1AJg3QgLhOADhIQABgUAGgIQAFgGAIgCQAIgBAFAGQAFAFgCAOQgEAqABAtIABAAQAGAEABAMQADAfgFAhQAGAwALAzQAXBlA5CdQAzCLAnBKQAMAWAxBWQAnBCASArQAvBtgCBxQgDB4g7BcIgKAPIgGANIg8CBIgEASIACABQAFADABAFQAAAFgGAHQgxBDgLBpQgHBAAKB4IAKCCQAEAsgCAXQgCAmgNAaQgJAUgSATQgKAMgZAWIgyArQgdAYgZAOQg7Ajg3AAIgMgBgAFJxmQgFgNgMgRIgUgdQguhHAFhpQABgoAKgzQAEgZAPhBQAUhWALhCQAKAaAMAZIA/B1QAjBGALA1QAIAmAAA4QABAkgIAUQgFANgRAaQgvBGgkBMQgCglgIgVg");
	this.shape_5.setTransform(61.7663,92.369);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],23.1,229.8,23.1,-27.5).s().p("AAvdOIgYgGQgIAGgLACQg6ALg9gPQg8gPgwgmQgvgmgcg4Qgdg3gCg9QgDg5Aih+QAfh2gJhBQgHg0gfg3QgXgqgrg2IhIhbQgog1gUgtQgvhpAQiNQAGg3ARhEQAKgmAYhSIAoiJQACgHADgDIAEgCIAJgpQAJgjAEgZQACgUABg2QABiTgDhSQgDhJgHhAIgMgaQgSguADgoQABgLAFgHIACgDIgBgEIgBgQIAyCNIANAYQAdAyBZB2QBOBoAgBCQA1BtAPCRQALBtgJCdIgDA+QgBAjAEAbQAJBNA6BlIAUAjIAxhaQAthQANg4QAIgjABgtQABgZgBg4IgHkTQgCg7ACggQAEgyANgnQAJgYAUghIAgg4QAagxAdhdQAbhYANhCQAShVAChJQAAgMAGgJIACgEQASBWgBAKQAFACACAGQAEAIAAALQAABwA6CQQAhBTBNCiQAxB0AgCAQAWBbAFBKQAGBZgRBLQgGAagNAlIgVA+QhSD2AfDdQAHAzATBjQAXCLgTBiQgMA9gcAzQgfA3gtAjQhJA7hvAIQgTACgUAAQhFAAhagSgAnvupIgTgaQgNgUgLgMIgbgYQgTgRgLgPQgXghAAglQAAgVAIgaQAFgPAMgeQATgrAMgUQAQgZABgFQAFgLADgdIAEgtIASAsQAOAjAIARQALATAWAfIBABcQAbArABAbQAAAVgKAbQgKAZgSAdQgMASgXAgQgQAXgNAFIgZgigAFc3jQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQgUgXgYgQIgTgMQgLgHgGgIQgPgSACgYQABgJAIgTIAJgYQATgvAHgbQAHgbALg2QAHgfAJgfIAYA2IAxBaQAaAuALARIAXAhQALATAAARQgBAKgDAKQgCALgFAFQgEAGgJADIgRAEQgSAFgbAWIghAZQgDADgCAAIgBAAg");
	this.shape_6.setTransform(59.9616,67.9303);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],20.9,245.4,20.9,-11.9).s().p("EgBLAgFQgZgMgkgdQgrglgPgJIgsgYQgbgPgPgMQgbgWgZgtQgphIgOhKQgPhRAUhIQAGgVAOgfIAVg0QAahHAGhLIABgZQgMgVgPgWQgfgsg9hIQhGhRgZgiQgug9gOgvQgLgmgBhGQAAheANhBQAGggAOguIAYhMQA0i3gDjgQgBiBgWihIgDhEIAgA8IAWAeQAiArA3A2IBgBcQBzBvAjBgQAlBogWCYQgGArgSBUQgRBVgHAqQgOBdAPA+QAHAfASAnIAhBEQAYAzAQA1QASgcAmg1QAog4ASgiQA7hpAEh4QADhHgciZQgaiRAHhPQAJhcBPi6QA6iHAOhbIAThVQAPBQgEAUQAEAnAPAtQALAhAWA0QBDCeBQCRQBYCfAWAyQA0B6gBBmQgBA2gPAnQgLAcgXAjIgpA6QhQByggCHIgIAqQAJBBAFAZQALA9APAtIAgBXQAwCGAHCPQAFBYgYAyQgOAegjAmQgxA1gqAUQgiAPhIAIQhLAJgoABQg+ACgxgKQACADgCAEQgCAGgLAEQgaAJgYAAQgfAAgegNgApCzBQgYgogJgbQgSg2AKg+QAEgWAFgPQAGgUAGgPIAKgXIAEAGQAFAKAEAFQAEAGAKAIIAQANQARAQAIAdQAFATADAhQADAvgEAYQgCAMgGASIgKAeQgIAcgFAiQgJgSgZgqgAEg7QQgKhEgEgzQgDgpACgbQACgmALgdQAKgYAaglIADgGIAHAOQASAnAHAaQAIAhAABAIgBAoQgBAXgFARQgFAUgRAgQgTAlgGAPIgMAmIgLhNg");
	this.shape_7.setTransform(62.1837,52.2996);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,262.7,21.3,5.4).s().p("EgANAiWQgugDgjgLQghgKgTgQQgNgLgIgNIgBgBQgkgbgjgsQgVgagmg4IgvhGQgegsgIgWQgMgagFgjQgDgVgDgrQgEg/AFgfQADgPAGgUIALgiQAJgeAJguIAAgBQgIgygXgrQgNgZgXgfIgog2QhKhogkh+Qgjh+AKiAQAHhfAwiwQAzi2AJhYQAHg9gChhIgBidIABheIgBgyQA3BHAIAHQBaBSBWBzQA/BWAYBFQAPAwACBBQABAdgCBWIgGCuQgFBmAIA7QAKA/AiBVIA7CPIARAuQAQgdAVghQAlg5AqgyIAignQASgXALgTQAvhWghiJQgFgWgahYQgUhEgGgrQgNhZAXhgQAUhYAwhVIAuhUIADAFIAFgHIAPAgQAYAgAlAsICGChQApAwAVAbQAhArAUAmQAvBWAMBjQAMBjgbBeQgOAyhQCqQhACFgCBbQgBAkAIAsQAEAdAMAzQAsC9AMBSQAWCZgRB5QgOBkgoBGQgVAngaAQQgRAKgSABQgUACgPgKIgDgDQgiALgkADIhEAEQgqABgaAGIguAKQgPACgUAAIgoABIgqgBgAo60cQgagugHgZQgIgbgBgnIAAhFQgBgugLg5IAOALQASAPAeAiQAQATAEAKQADAJABAXQABBBgEAfIgMA+QgEAWgCAaIgLgSgAE3+pQgFgrALg+QAGgiALgXQAIgRAZghIASgZIAGAOQAZA/gMBAQgFAegOAlIgcBAQgLAagHASQgWghgGgug");
	this.shape_8.setTransform(61.7365,35.0325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],27.1,295.2,27.1,37.9).s().p("EACCAnsQg0gCgtgFQhagKgvgfQg1gigehGQgYg2gNhSQgShrgIgfQgUhMgngvQgMgOgXgWQgcgZgJgKQgYgagXgnQgPgYgYgwQgXgvgLgZQgRgpgIgiQgIgigCgqIgCgFQgDgHABgJIAEgmIACgqIADAAIAGgeQAFgYAQg3QAOgzAFgcQAOhKgJhiQgEgsgUiBQgRhsgBhAQgChdAYhKQAKgeAVgqQAXgvALgYQA9iIAEiZQAChxgchoQBdCFAaAqQA4BfAgBqQAgBqAEBuQADA0gCBqQABBdASA9QAUBFBKB4QBLB5AUBCIAGAXQASgoAWgrQAfg6A1hWQAjg4ALgfQAUg1gBhXQAAgcgQjHQgLiKAPhYQAOhQAphcQAYg2A1hhIADgGIACgCIABgDQAGgKAHgBQAAClAFAdQAJA7AsBUQA5BvALAdQAhBagDB1QgCBWgYB9IgmDQIgFAnIBFBzQARAjATBHQAcBmAMA/QAcCSgKC3QgEBUgPB+IACASQAIBAACAgQADA0gDArQgEApgMAYQgIAPgVAYQgdAfgoAjQgaAWgwAmQgUAQgMAFQgMAGgRABIgdABIjHgDIgCAAQACAEgBADQgCAMgUAAIgDAAgApv5JIgMgcQgFgQgBgXIAAgpQAAgaABgFIAEgNIALAcQAOAmADAUIAEAsIADA5IgWgjgEAHbglrQgRgfgDgPQgFgSAAglIAAgbIAMAUQASAhAHASQAIASADAOQADAMABAYIAAAkQgMgSgPgdg");
	this.shape_9.setTransform(55.947,2.5162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-251.4,143.70000000000002,513.3);


(lib.fireBit12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.4,138.1,-5.4,-51.5).s().p("ACYR6QgEgCgEgFIgBgBIgRgFQgJgDgCgFQgDgGAEgEIgDgCIgdgKQhEgUhJgzQgtgehThFQglgfgRgQQgdgcgUgZQghgtgahDQgnhmgBhiQgBhuAwhVQAMgWAcgmQAdgoALgTQAng/AMhLQAMhKgQhJQgJgngshrQgkhagFg6QgHhYAxh1IAshhQAbg7ANgnIARg2QAKghAIgVQAMgbBHh0QAEgHA4hzIgOBpQgRBOAABRQABBfAZBbIAXBLQAPAvAHAdQAXBhgJCKQgFBPgTCfQgKCIAICFQAEBYAVAzQATAuAxA6QBDBQBTBKIAoAkQAXAVANATQAtA+gBBYQgBBFgeBWQgRAugRAeQgYAmgeAWQgfAWgmAGQgRACgQgBQgFAFgFAAIgFAAg");
	this.shape.setTransform(48.8251,50.7725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.7,143.7,-6.7,-45.9).s().p("ADDSbQhZgOhRgcQgugQgbgOQhBghg8hBQgugyg0hQIgkg4IgLgOQg0g/gVg2QgPglgGgxQgEgigCg3QgBhBADgpQAGg6AQgsQAPgsAjg0IA+hZQAkg0ASgqQAXg2AAgxQgBg7gnhUQg2h0gIgYQgXhNALhZQAKhRAlhSQAehEA0hQQAUgfBMhsQA1hMAyhZIAZgqQgxCwgLBeQgPB6AhByQAQA5AfA+QAcA5AfAuIAfArQATAaAKASQBVCUhLDrIgjBuQgSBBACAxQADA/AhBIQAWAtAyBOIB8C+QAYAmAIAOQARAeAJAaQAQAwgFA1QgFA0gYAuQgYAtgoAiQgoAigxAQQgeALglAEIAiAGQAYADABAOQAAAEgEAFQgDAEgFABIgJABIgMgBg");
	this.shape_1.setTransform(50.1769,45.1125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,153.3,-3.9,-36.3).s().p("ABSUDQgbgDgggKQgWgIgjgPQgjgNgQgNQgRgOgRgaQgNgSgDgOQgDgLABgOIABgaQABgWgIg1QgGgngIgSIgMgXQgGgNABgKIhNhfQgpgygWggQgYgigTgjQgeg3gNgvQgThEALhJQALhJAmg8QATgcAqgxQAsgzASgaQA7hWAGhoQAAgJADgGQADgGAFgCQABgqgNg0QgfhhgMgwQgfh1ASh7QARh7A9hoQALgSAYglIAjg4QA4hhAOhxIABgIIAZizQAHA9gBBGIgBAUIAEAvIAODnQAFBXANAtQAYBNBuCCQBtB+AVBSQALAsABBWQACBTgEArQgHBEgZAyQgMAZgbAmQgfAtgKARQgqBLgBBZQgBBZApBLQANAZAWAeIAnAzQAkAwAnA6QAiAwAIAgQAMArgNA0QgJAmgbA3Qg6B5g+BJQgjAqgiASIAEgBQgjAQgzAPIgRgBg");
	this.shape_2.setTransform(47.3829,35.5625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.4,150.4,-4.4,-39.2).s().p("AgdTDQgQgDgUgQQgngfgbgwQgZgsgMg1QgQhJAIhMQADgTAEgPIAEgMQgEgZgEgQQgNgugmg4IhDheQg9hZgXhcQgahoAdhZQAPguAqhEQBJhwAig6QA4hgAZhPIAAgZQAAgcgCgRQgHg0g3heQg1hcgFg2QgGhAAmhWQAphcBChNIAmgqQAXgaAOgSQAWgeASgpIAfhSIAAACIAVg9QgRCKgFALIABAeQACA4ANAtQAbBdBYBYIA7A4QAlAiAUAYQBEBQALBfQAGAygNAwQgNAxgeAlQgNARgbAZQggAcgLAMQggAigaAxQgTAmgVA5QgYBAgFAsQgGA6ATBEQAOAyAgBGQAmBSAkAoIAcAbIAcAcQARATARAbQAKAPAUAkQAbAwAFAbQAEAVgDAfIgGA1IABA3QABAigDAUQgHAqggA2QhRCHiGBXQgNAHgHgCIgDgBQglAIhEAAQgVAAgGgCg");
	this.shape_3.setTransform(47.8797,38.4625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.2,167.9,-5.2,-21.7).s().p("ABvVwQgKgCgDgIIgBgFQhbAChEgfQgogTgfgdQghgfgSgmQgghGASiNQALhRABgeQADg9gOguQgPg0g+hWQg+hYgQgyQgLgngFhQQgFhRAEgqQAFhEAZgvQANgXAcglQAggoALgSQAZgpAPg6QAKgkALhHQAHgzACgZQADgrgHghQgIgkghhDQghhDgIglQgNhBAahKQAXg+Axg+QAcgkBFhGQBBhDAdgnQA5hLAghZQAghaAEhdIAEAAIABgqIABgNIAbDNQAEAIABARQADBDAbBMQAUA5AoBOQAYAuAHAQQAQAjAFAeQAEAZgBAgIgEA6QgJBZgMApQgLAlgWArQgMAZgeAzIhBBuQglA8ggAuQgfArgJAQQgUAigGAfQgEAUACAbQABAQAFAgQAQBjARA+QAYBXAlBAQAbAwBGBXQBGBXAbAwQAoBFAQBPQAQBPgIBPQgJBPghBKQghBJg1A7QgQASghAiQgdAfgOAZIgJAPQgGAIgGAEQgGAEgHAAIgEAAg");
	this.shape_4.setTransform(48.6209,20.9673);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.3,182,-4.3,-7.6).s().p("ABNXpQgWgBgRgDQgXgFgsgTQgMgEgGgGQgNgEgPgHQgPgHgdgRQgfgTgQgMQgZgSgOgVQgQgZgHgkQgFgaAAgoQAAhiAXg/QAJgZAihBQAdg4AIgjQARhIgchEQgTgegigpIg6hHQhEhYgOhJQgMhBAVheQANg4AQggQAIgQAUgeQA+hdBChWIAHgIQAIgLAFgPQAGgOAIgcQASg/AHggQALg2ABgsQAAgXgDgwQgBgrAGgcQAHgbAVgqIAIgSQgahSgSgsIgZg8QgPgkgIgaQgThBADhDQADhFAdg6QAPgeAdgrIA/hZQAigzAUgqQASglAKgkQABgsAHg8IABgEQgCgPgEgPQgEgSAHgHQAHgGAKAIQAJAIADAMQARBGgWBPQgCAzAIAnQAFAeAOAtIAXBKQA4DQhUEIIgkBpIgDAHIADATQAFAfAjC3QAJAxACAfQADAsgKAjQgLAjgfAtQgkAwgRAaQgSAcgbA8QgTAqgGAXQgLAlAFAeQACANAMAhQAJAaABAQIAcAgQAgAlASAPQAVATAmAWIA9AmQBAAsAiA5QAaAtANBBQAWBngUBNQgMAvgqBLIhSCZIAOAkQAPAlADAXQACALAAAsQABAngEAPQgEASgQAdQgTAkgOASQgWAbgaAIQgQAFgXAAIgIAAg");
	this.shape_5.setTransform(47.7805,6.8163);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.1,199.1,-2.1,9.5).s().p("ABGadQgLgGgPgMIgYgUQgUgQhdhAQhHgwgjgpQgtg2gQhHQgRhHARhEQAKgmAYgzQAdg5ANgdQA8iFgahrQgIghgVgrIglhKQgghDgShDQghh5AXhYQALgsAnhEIAXgmIACgKQAJgcATghQALgUAYglIA5hVIA4hTIAhgyQASgcASgoIAehHQAMgcAEgRQAFgVAAgcIgBgxIAAgFIAEhJQAbA/ABAYIABAaIACBHQADBggSA9QgMArgiA+QgwBWgHAOQgTAsgXBJIgKAfIgBAOQgLBbBZBjIBNBLQAuAtAYAjQAWAgATAuQANAeARA1QARA2AGAiQAKAxgEAoQgEAvgcBCIguBuQgiBiAFBwQAGBqApBmQARAqAEAOQAIAhgIAZQgMAnguAVQgQAIgeAHIAAAFQgBAIgKAEQgLAGgNAAQgRAAgUgJgABmvIQgGgngOgvQgGgVgNglIgQgnQgFABgEgIQgEgIgBgYQgCgfAAgWQgBgdACgUQAEgjAYguQAXgvAEghQACgMAEhRIAIiPIAAgFIAAgHIAUCDIAGAtQAEAYAFARQAFAPAKAVIAPAjQAIAVAGAfQAEAUAGAmQAGAmABAUIAAAJIABAFQACARAAAVQAAArgGAbIgFAVQgFARgOAlQgNAigFATIgQBFIAAAPIgBA/QAAATgJAEIgYiPg");
	this.shape_6.setTransform(45.566,-10.2386);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.6,230.5,-3.6,40.9).s().p("ABkfNQhTgwhRhVQg2g4hThtQgpg0gTggQgdgxgLgsQgMg1ALg3QAMg3AhgsQALgPBAg/QAuguAPgnQAXg7gYhKQgPgtguhMIgIgNQgJgFgKgIQgggagNgPQg1g6gRhxQgKg8gBg+QAAguAKgZQAIgUARgWQAyg9BEgjQAggvASggQAdg1AMgwIAKgsQAFgbAGgRQALgfAagoIAqhFQAEgFAcgeIgVBLQABAJgEAOQgjB/AVBbIAMAuQADANADAaQAGAygBAeQAAAigFAhIAAAmIAIAIQAIAKAOAWIAvBKQAZAmAKAbIAQA1IALAjQAGAVADAPQAEAZgDAmIgEA+IAAAfQAAATgCAMQgDAVgNAnQgOAsgLAZQgLAbgOAVIgBAIQgEAeAGA2IAOCDQALBWAPAxQAWBIAqAsQALALA0ApQAmAfAQAbQAPAaACAeQADAdgKAcQgPAkgoAoQgrAqgkASQglASgiAAIgBADQgCAGgGACIgCAAQgFAAgIgEgACc7VQgLAAgEgDQgGgFgBgOQgCgyATgfIATgYQANgSAQgaQAMgTACgLQABgFAAgbQAAgMAEgFIACgBIAjBPIABASIAEAQQAEAMABAYQACAjgIAVQgCAJgEAEIgJALIgFAKQgDAGgEADQgEADgLAAg");
	this.shape_7.setTransform(47.075,-41.6417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.4,138.8,-5.4,-50.8).s().p("ACYSBQgEgCgEgFIgBgBIgRgFQgJgDgCgFQgDgGAEgFIgDgBIgdgKQhEgUhJgzQgtgehThFQglgfgRgQQgdgcgUgZQghgtgahDQgnhmgBhiQgBhuAwhVQAMgWAcgmQAdgoALgTQAng/AMhLQAMhLgQhIQgJgngshrQgkhagFg6QgHhYAxh1IAshhQAbg7ANgnIARg2QAKghAIgVQAMgbBHh0IATghIAnhnIgMB3QgRBOAABRQABBfAZBbIAXBLQAPAvAHAdQAXBhgJCKQgFBPgTCfQgKCIAICFQAEBYAVAzQATAuAxA6QBDBQBTBKIAoAkQAXAVANATQAtA+gBBYQgBBFgeBWQgRAugRAeQgYAmgeAWQgfAWgmAGQgRACgQgBQgFAFgFAAIgFAAg");
	this.shape_8.setTransform(48.8251,50.085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,-241.7,86,407.1);


(lib.elipse3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,153,0.098)").s().p("A4TMsQrOhDoph6Qoqh6kvieQk6ikAAizQAAizE6ijQEvieIqh6QIph6LOhDQLnhGMsAAQMuAALmBGQLOBDIpB6QIqB6EvCeQE6CjAACzQAACzk6CkQkvCeoqB6QopB6rOBDQrmBFsuABQssgBrnhFg");
	this.shape.setTransform(0.025,88.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse3, new cjs.Rectangle(-399.8,0,799.7,176.3), null);


(lib.elipse2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,153,0.149)").s().p("A0EKFQpQg1nJhhQnIhhj7h+QkDiCAAiOQAAiOEDiCQD6h9HJhhQHJhhJQg1QJmg3KeAAQKfAAJlA3QJRA1HIBhQHJBhD7B9QEDCCAACOQAACOkDCCQj7B+nJBhQnIBhpRA1QplA3qfAAQqfAAplg3g");
	this.shape.setTransform(0.025,70.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse2, new cjs.Rectangle(-330,0,660.1,140.1), null);


(lib.elipse1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,153,0.2)").s().p("A5XFZQk+hEiuhXQi0hbgBhjQABhiC0hbQCuhXE+hEQKgiOO3AAQO4AAKgCOQE+BECuBXQC0BbABBiQgBBji0BbQiuBXk+BEQqgCOu4AAQu3AAqgiOg");
	this.shape.setTransform(0,48.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse1, new cjs.Rectangle(-229.6,0,459.29999999999995,97.5), null);


(lib.bonfireLogs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-77.9,-49.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F193B").s().p("AgsDSQhAg9ghhpQgghoAShXQAThYA6gSQA7gSBAA9QBAA+AhBpQAgBogSBXQgTBXg7ATQgNAEgOAAQguAAgxgwg");
	this.shape.setTransform(-105.175,38.9149);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53529E").s().p("AyGBDMAgzgKJIAUAJQAYANAZATQBOA/AuBrQAtBrgiBuQgSA3gaAiMggzAKIg");
	this.shape_1.setTransform(5.4939,6.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_7
	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(-116.45,-56.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F193B").s().p("AhdD4Qg5gVgOhYQgNhYAnhmQAnhnBEg6QBDg5A6AWQA5AWAOBYQANBYgnBmQgnBnhEA5QgwApgsAAQgRAAgQgGg");
	this.shape_2.setTransform(100.675,39.535);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53529E").s().p("AxPiHQgSgagLgxQgXhhAdhxQAehwBfhCQAwggApgLMAgHAMJIi/H6g");
	this.shape_3.setTransform(-6.4288,-0.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonfireLogs, new cjs.Rectangle(-121.4,-64.9,242.9,129.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ARkPPQh1ghjPhpQjWhthtghQjFg9jLAZQiFAQjRBIQkBBYhRATQkZBDlognQjggYmihfQilglhagtQiFhBgyhrQguhjAhh2QAfhwBXhQQCRiEEMgcQhUiMAAirQABirBUiMQBViMCXhQQCXhQCjAKIAdgSQJ1CeILAaQJNAeIziEQEmhEBagMQDagcCgA0QBHAYAuAsQA2A1gGA9QgDAZgRAlQgWAxgEAMQgbBZA9BbQAmA4BvBlQB0BpAnA2QBEBegRBZQgPBRhMA2QgzAlhxAsQiGA0gsAYQhdAzgmBFQgeA1gKBlQgMB5gMAoQgzCfi9A+QhcAfheAAQhUAAhWgYg");
	mask.setTransform(362.4558,240.5598);

	// Layer_3
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(35.9,16.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(127.3,140.7,470.3,199.7), null);


(lib.yellowtent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#616160").s().p("AgOAdQgKgDgEgKQgDgMAIgHIAUgUQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFIgUAUQgFAFgHAAIgGAAg");
	this.shape.setTransform(80.7091,-25.5591);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_34
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#616160").s().p("AAmByQgIgDgDgHIhYi/QgEgGADgIQADgIAHgDQAIgEAHAEQAIACADAIIBYC9QAEAHgDAIQgDAIgHADQgEACgEAAIgHgBg");
	this.shape_1.setTransform(-85.925,-121.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_35
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#616160").s().p("ABMBoIixi0QgHgGAAgHQABgJAGgGQAFgFAIAAQAJAAAFAGICxC0QAGAFgBAJQABAIgGAGQgFAFgJAAQgIAAgFgGg");
	this.shape_2.setTransform(-154.65,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_36
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#616160").s().p("AhXATQgJAAgFgGQgGgGAAgHQAAgIAGgGQAGgFAIAAICwABQAIAAAFAGQAGAGAAAHQAAAIgGAGQgFAFgJAAg");
	this.shape_3.setTransform(-191.15,35.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_37
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#616160").s().p("AgTAYQgJgKAGgMIALgUQADgHAIgDQAGgDAIAEQAHAEADAHQACAIgDAHIgLAUQgEAKgKABIgDAAQgIAAgGgGg");
	this.shape_4.setTransform(44.6529,-118.5074);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_38
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#616160").s().p("AgsBdQgIgDgCgIQgDgHAEgIIBIiWQAEgHAHgDQAIgDAHAEQAHAEADAHQADAIgEAHIhICWQgEAIgIACIgGABQgEAAgEgCg");
	this.shape_5.setTransform(100.225,-118.7549);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_39
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#616160").s().p("AhVBVQgGgGAAgIQAAgIAGgGICQiNQAGgGAIAAQAIAAAFAGQAGAGAAAIQAAAIgGAGIiQCNQgFAGgIAAQgJAAgFgGg");
	this.shape_6.setTransform(168.575,-59.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_40
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#616160").s().p("AgPATQgIAAgFgGQgGgFAAgIQAAgHAGgGQAGgGAIAAIAdABQAIAAAGAGQAGAFAAAHQAAAIgGAGQgGAGgIAAg");
	this.shape_7.setTransform(92.075,73.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_41
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#616160").s().p("AhQATQgHAAgGgGQgGgGAAgHQABgIAFgGQAGgFAIAAICfABQAJAAAGAGQAFAGAAAHQAAAIgGAFQgFAGgJAAg");
	this.shape_8.setTransform(203.65,36.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_42
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#616160").s().p("AgOBeQgFgGAAgIIABigQAAgHAGgGQAGgGAHAAQAIAAAFAGQAGAGAAAHIgBCgQAAAIgGAHQgGAFgHAAQgIAAgGgGg");
	this.shape_9.setTransform(-2.5981,-141.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_43
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#616160").s().p("AJVUBQgEgFAAgGQAFpshjoFQhLmJiAkzQh6kjiai1QiZi0iYgeQhlgUhPA3QhQA3gwB6QgCAGgGACQgGADgGgCQgFgCgDgGQgCgGACgGQA1iFBZg8QBZg7BuAVQCgAfCfC6QCgC6B9EpQCBE3BLGKQBkIJgFJvQAAAGgFAFQgEAEgGAAQgHAAgEgEg");
	this.shape_10.setTransform(34.5675,-27.4756);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_44
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#616160").s().p("EAgSAP6QgFgFAAgGQAEnXi1mFQinlok3kHQkkj4mCiGQl1iCmSgDQmAgDldBzQlvB4kUDrQkpD9ihFoQiwGHgEHvQAAAGgEAEQgEAFgHAAQgGAAgEgFQgFgEAAgGQAEnbCkmBQCjmBE4kMQESjtFqh9QFqh8GUADQGWAEF5CEQGHCIEpD9QE8EMCqFuQC4GKgEHbQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_11.setTransform(5.9043,-50.8785);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_45
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#616160").s().p("AgBDlQgUAAgPgPQgOgPAAgUIADllQAAgVAOgOQAPgPAUAAQAUAAAPAPQAOAPAAAUIgDFlQAAAVgOAPQgPAOgTAAIgBAAg");
	this.shape_12.setTransform(213.375,72.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_46
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#616160").s().p("AgBDlQgUAAgPgPQgPgPABgUIAClmQABgUAOgPQAPgOAUAAQAUAAAPAPQAOAPAAAUIgDFlQAAAVgOAPQgPAOgTAAIgBAAg");
	this.shape_13.setTransform(95.1742,122.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_47
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#616160").s().p("AgBDlQgUAAgPgPQgOgPAAgUIADllQAAgVAOgOQAPgPAUAAQAUAAAPAPQAOAPAAAUIgDFmQAAAUgOAPQgPAOgTAAIgBAAg");
	this.shape_14.setTransform(-201.925,69.4758);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer_48
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#543F26").s().p("AtTHdQADnvC/lBQDwmTHkAEQGJADDZH5QBZDRAuEMQAqD2gCD2g");
	this.shape_15.setTransform(-56.3705,3.8235);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer_49
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E2A662","#ECE0B5"],[0,1],-112.7,0,112.7,0).s().p("APqPvI/6k7QgxgHgVgtQgSgmACg8QAKlDBikeQBgkaCpjUQCrjWDdhzQDmh3EBACQEIACDOCxQC5CgB/EkQByEHA4FXQA1E6gEFIQgBA+ghAnQgeAjgrAAIgSgBg");
	this.shape_16.setTransform(-50.7918,2.4699);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer_50
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#CB7F3C","#E9C08F"],[0,1],-192.6,0,192.6,0).s().p("AHbUmMgkvgF4QgZgEgNgXQgMgUABgfQAEoRCpmuQCcmOEdkeQEMkNFgiNQFTiJFwgBQFxAAFSCGQFdCLEIEIQEZEZCWGHQCjGkgEIEQgBAWgKAQQgKASgTAHIwZGQQh6Avh/AAQg4AAg5gKg");
	this.shape_17.setTransform(6.1038,-2.1492);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer_51
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("AzAERQjug1iDhGQiHhIAAhOQAAhOCHhHQCDhGDug1QH5hxLHAAQLIAAH5BxQDuA1CDBGQCHBHAABOQAABOiHBIQiDBGjuA1Qn4BxrJAAQrIAAn4hxg");
	this.shape_18.setTransform(-46.4,117.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowtent, new cjs.Rectangle(-218.5,-156,437,312), null);


(lib.hotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-18.35,-9.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hotdog, new cjs.Rectangle(-18.3,-9.7,36.5,19.5), null);


(lib.guyfrombackwristhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-46.85,-13.55,0.2417,0.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1C097").s().p("AhCAVQgCgCAAgEQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQALgEAKgEIARgJQAHgEASgFQARgFAIgEQAGgCAOgCIAZgDIgjArQgHgDgJACQgMAEgHABQgWAOgTAAQgQgBgIgJg");
	this.shape.setTransform(25.27,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBCEA5").s().p("AAWA/IgPgIIhYhuIAFgIQAFgHAFABIBPANQAaACAUAbQARAYAFAeQACAQgJAMQgKANgQACIgDAAQgJAAgOgHg");
	this.shape_1.setTransform(22.651,4.1804);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD9C7C").s().p("AIxBOIxmiLQgKgCABgIQABgIAMADIRnCDQAMADgDALQgCAJgJAAIgDAAg");
	this.shape_2.setTransform(-0.008,-4.0574);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1C097").s().p("AhkA3IgXgsIgngmIB+gEQAEgFgCgFQgBgDgGgEIAjgrQAMAAAhATIAvAeIBAAnQAhAjg1AdIg7gLIhyApIgVABIgDAAQgLAAgWglg");
	this.shape_3.setTransform(32.3656,1.1266);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackwristhotdog, new cjs.Rectangle(-57.5,-13.5,115.1,24.7), null);


(lib.afrodudewristhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-41.25,-2.35,0.2417,0.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB7968").s().p("AAmA4IiMg9IABgJQABgKAFgCIBTgaQAZgMAhAQQAcAOAUAbQALANgDASQgCARgOAKQgKAHgTAAIgTgCg");
	this.shape.setTransform(25.3657,-3.8956);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A86048").s().p("AgyA6QgDgBAAgEQgBgDACgCQAJgJAHgKIALgRQAGgIAOgMIAUgWQAEgGANgIIAWgPIgLA7QgIAAgJAGIgQAPQgNAYgSAKQgJAFgJAAQgFAAgGgCg");
	this.shape_1.setTransform(22.7583,-13.4288);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD9C7C").s().p("ApLDfQgCgIAMgEIR9m2QANgDADAMQADAMgNADIx/GvIgFABQgHAAgCgGg");
	this.shape_2.setTransform(-0.2677,0.0264);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A86048").s().p("AhLBWIgrgeIg5gSIB2hCQACgHgEgDQgDgCgIgBIAMg8QANgGAoACIA8AEIBnANQA3BYhyARIgFAAIhfBLIgVAMQgCADgFAAQgNAAghgVg");
	this.shape_3.setTransform(34.1097,-9.2322);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudewristhotdog, new cjs.Rectangle(-59.1,-22.8,117.7,45.7), null);


(lib.redtent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_44
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#616160").s().p("AgjDbQgPgPAAgVIAAltQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVIAAFtQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape.setTransform(-237.975,71.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_45
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#616160").s().p("AmhJDQgFgEgBgGQgBgGAEgGIMwxsQAEgFAGgBQAHgBAFAEQAFAEABAGQABAGgEAFIswRsQgFAHgIAAQgFAAgEgDg");
	this.shape_1.setTransform(-197.0511,5.1139);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_46
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#616160").s().p("AgiDbQgPgPgBgVIAAltQABgVAPgPQAOgPAUAAQAVAAAPAPQAOAPAAAVIAAFtQAAAVgOAPQgPAPgVAAQgUAAgOgPg");
	this.shape_2.setTransform(-89.45,112.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_47
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#616160").s().p("AkAKtQgGgCgCgGQgDgGACgGIH208QACgGAGgDQAGgCAGACQAGACACAGQADAFgCAGIn3U9QgDAKgLAAg");
	this.shape_3.setTransform(-64.2626,32.0056);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_48
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#616160").s().p("AgjDbQgPgPAAgVIAAltQAAgVAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAVIAAFtQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_4.setTransform(237.95,52.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_49
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#616160").s().p("AF5HFIsIt1QgEgFAAgGQAAgHAFgEQAFgEAGABQAHAAAEAFIMIN1QAEAEAAAHQAAAGgFAEQgFAEgFAAQgHAAgFgFg");
	this.shape_5.setTransform(199.0972,-3.0278);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_50
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#7F3451","#C86576","#CB6977","#D5737C","#E58583","#EF9087"],[0.404,0.682,0.784,0.875,0.961,1],-160.6,0,160.7,0).s().p("AmYI0QgZgIACgaQAzpdk1gBQkWAApIHoQgVASgVgSQgWgSAPgYQEWm6EnjQQGVkeJRAAQRSAAINOpQAOAZgWARQgXASgUgTQyqxKrXTUQgKARgQAAQgGAAgGgDg");
	this.shape_6.setTransform(0.739,-88.7951);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_51
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B2B3B").s().p("Ar+EPQA6k3AoiKQBDjjBpiEQB8icDJg5QELg4ESFTQEHFEDvKHI7PD/QAtijA8lFg");
	this.shape_7.setTransform(65.775,-8.722);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_52
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EF9087","#E58583","#D5737C","#CB6977","#C86576"],[0,0.078,0.255,0.443,0.655],-74.8,0,74.9,0).s().p("ArrB+QBpk3C2kWIS4DaIiWLFg");
	this.shape_8.setTransform(-107.425,-5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_53
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EF9087","#C86576","#E88784"],[0,0.655,1],-113.4,0,113.4,0).s().p("AvXkqIcshxQCaD+B/FFMgjbAD0QBPm3BHkPg");
	this.shape_9.setTransform(65.8,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_54
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9D4166","#AF506D","#C86576","#CB6977","#D5737C","#E58583","#EF9087"],[0.012,0.263,0.439,0.573,0.694,0.808,0.859],-115.7,0,115.8,0).s().p("AxnPjQgpgsAOg7QAjiQBaniQBFlyBAjFQBckaCPioQCmjCEFhLQFihKFrGtQFcGbE/M7QAUAzgcAvQgbAvg2AIMggoAExIgTABQgvAAgiglg");
	this.shape_10.setTransform(60.2385,-10.1068);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_55
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#8B3A5A","#C86576"],[0.404,1],-196.8,0,196.8,0).s().p("AqmUnQhdgLhZgiIwrmhQgUgIgLgRQgLgTACgUQAjmKCUlsQCPlcDokbQDkkYEei0QEji4E4g6QFFg7E5BVQFNBbEjD4QKPIuFVTdQAHAcgPAYQgQAXgcAFMglkAFtQg1AIg2AAQgoAAgpgEg");
	this.shape_11.setTransform(1.9819,-11.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_56
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AnZHfQrfhUmgkJQiphrhZh5QhRhuAAhgQAAhVCbgtQCJgoEcgPQDbgLGVAAIL7AEQMtAAJAB+QEPA7CVBNQCbBQAABYQAABXjmBzQjjBxlmBcQmBBjmTAnQjiAWjQAAQjRAAi/gWg");
	this.shape_12.setTransform(14.125,95.4614);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redtent, new cjs.Rectangle(-243,-145.4,486.1,290.9), null);


(lib.fireonyoutext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _ךילע_שא (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4IImIAArPQAAg2g2AAIkDAAIAAihIFCAAQBfAAA5A3QA6A4gBB0IAALDgAlJDCICygiIiAogIDbAAIBqHxQAogVATgqQATgqAGg6QAEg7ABhjIAAiwIDYAAQgBDqgRB5QgQB6hPBaQhOBaisAjIkgA3gEgiSAEgQgigjAAg1QAAg1AigkQAjgkAzAAQA0AAAiAkQAiAkAAA1QAAA1giAjQgiAkg0AAQgzAAgjgkgAMBFBIhdrBIDPAAIAfERQAdgUAJgqQAIgqgBhVIgBhUIDPAAIAABOQAACFgzBUQgzBUiEAnIAOBuQCigJA8hQQA9hPgBiEIgCjkIDaAAIABDZQADDwiUB9QiVB9k9AAQgqAAgWgCgAfPE2IjHk7IhgE7IjOAAICGmbIAnhiIhwi5IDaAAIChEDIAkhzIAiiQIDOAAIiVG+ICkD4gAsNE2IDPoVIlOAAIAAlGIDCAAIAAClIFmAAIAACxIjPIFgAy6j0IgNiMIDZAAIAOCMIgBEKIjZAkgEgh/AARIgdlNIgHixIDPAAIgICxIgdFNg");
	mask_1.setTransform(375.4,93.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D28148","#F5D6AD"],[0,1],-0.1,-70.4,-0.1,70.3).s().p("Egr6AKdIAA05MBX1AAAIAAU5g");
	this.shape.setTransform(379.15,94.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireonyoutext, new cjs.Rectangle(152.5,38.5,445.79999999999995,110), null);


(lib.aniMarsh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E5D4").s().p("AgEAyQgYgCgXgJQgEgCgCgDQALAGATAAQAbABAPgFQAKgDAJgIQAIgHAFgKQAEgMACgPIACgPQACgJgBgGIACADQABAEgBAEIgDAnIgCAnQgCAEgIACQgSAEgTAAIgKAAg");
	this.shape.setTransform(-0.105,0.8411);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD9C7C").s().p("AAAAPQgIgCgBgDIABgPIABgEQACgCAFACQAGADAEgIIAAAXQgDAGgGAAIgBAAg");
	this.shape_1.setTransform(0.4,-5.462);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7E5D4").s().p("AAIAFQgVgBgWgFQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAiAJAjgFQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgCACIgUABIgHAAg");
	this.shape_2.setTransform(-0.8312,-3.4437);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D6D7").s().p("AACAWIgdgJQgSgFgMACIAAgPQAJgCARAFQARAEAPADQATACAQgJIALgJIALgLIgCAaIgPAMQgLAHgOAAIgOgBg");
	this.shape_3.setTransform(-0.175,-0.1552);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D6D7").s().p("AgzAGQAFgIAYgCQAUgCARACQAWABAPAGIgXgDQgNgCgLACIgcAEQgLACgJAAIgIAAg");
	this.shape_4.setTransform(-0.575,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8EEE5").s().p("AgEA9QgZgCgXgKQgEgCgDgEQgBgDABgCIAAgzQAAgQACgQQABgLAdgDQAVgDASACQAXACAOAIQAHACAEAHIAAAJIgDApIgDApQgBAEgIACQgUAGgVAAIgIgBg");
	this.shape_5.setTransform(0.0125,0.0609);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aniMarsh, new cjs.Rectangle(-6,-6.9,12,13.2), null);


(lib.purpleGirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#53529E","#322664","#1F193B"],[0.008,0.31,1],-59,0,59,0).s().p("ApHMOQgHgBABgHIAZjIQAEgjAbgXQAbgYAjAAIACAAQASAAAOgMQAOgMADgSIANhUQAEgZAQgUQAPgUAYgKIB3g0QAbgLAOgaIA8hrQATgiAfgYICIhmQAvglAggyIAWgkQAUggAhgRQAhgSAlABIDNgPIguhsQgbg/ALhEQAHgsAWglQAWgmAjgaIARgNQAWgRAMgYQANgYAAgbIAAgQQAAgHAIAAQAHAAAAAHIAAAQQgBAfgOAbQgNAbgZATIgRANQggAYgVAjQgVAjgHApQgKBBAaA7IAxB0QACAEgCADQgBADgFABIjXAPIgBAAQgiAAgdAPQgeAQgSAdIgWAkQghA1gxAlIiIBnQgdAVgRAgIg8BrQgQAdggAPIh4AzQgUAJgNARQgNARgDAVIgNBUQgEAYgSAPQgTAQgXAAIgCAAQgeAAgWATQgWAUgEAeIgZDIQgBAGgHAAg");
	this.shape.setTransform(-17.3809,26.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F193B","#322664","rgba(83,82,158,0)"],[0,0.486,1],-14.3,-4.1,15.4,7.6).s().p("AAOBYIhqgkQg9hXgGhVICuB3QCpB3gcADIgEAAQggAAhqghg");
	this.shape_1.setTransform(29.7551,-5.8668);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#53529E","#322664","#1F193B"],[0.008,0.31,1],-49.1,-65.2,29.9,71.6).s().p("AqpRLQhLgBABgUQAAgLAzg0QAvgxA9gcQA+gcBDgCIAXgCQANgUAdiIQAdiEASgWICggSQAOgSAMgoIAShJQAXhXApAGIGFBQQBmgEBOhBQBPhBAWhkIABgEQAch7gfh6Ig7jrQgQg9AOg+QAOg+AogyIAxg8QgDlOiyh0QgWg1hSgFQhLgEg2AkQAXgiApgKQB+gfBkA6QBkA8AjCCIBQEnQAcAxAEA4QAEA4gUA1IgjBeQgZBBgDBGQgDBGATBDIA/DcQARA+gNA/QgNA/gpAyQgxA7hFAfQhFAfhMgDImvgQImPGgQg4A6hKAeQhGAehMAAIgIAAg");
	this.shape_2.setTransform(6.4014,0.0166);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_14
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#53529E","#514F9A","#4B4790","#41397E","#332666","#1F193B"],[0,0.2,0.38,0.549,0.706,1],100.7,57.9,-44,-18.7).s().p("AppRLQh3gCg5hpQg4hpBAhlQAPgYAwgeQAzghAQgTIBGiYIDKiiIAyiOICxioQAogxAfgSQAqgbAwAGIDHAaIgphPQgXgsgDgxQgDgxASguIBdj8IgOl1QgDhPAthCQAYgjAqgKQB+geBiA7QBkA7AjCCIBQEnQAcAxAEA4QAEA4gUA1IgjBeQgZBBgDBGQgDBGATBDIA/DcQARA+gNA/QgNA/gpAyQgxA7hFAfQhFAfhMgDImvgQImPGgQg4A6hKAeQhGAehMAAIgIAAgAF6v4QhKAHgZBVQgVBGAMCAQAHBQApBfQAIASAcAMQAZALAZACQAmABAegYQAdgZAGgmQALhHgIhTQgLhzgnhPQgkhKgqAAIgEAAg");
	this.shape_3.setTransform(0.0025,0.02);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_15
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA766C").s().p("ABhECQhIgjgShPIgoi2Qg3gXgcgdQgegfgHguQgpgNgOAQQgNAOAIAtQghgRAEghQADgdAegfQAfgfAsgQQAwgSAtAHQA5AKAlAlQAlAmgDAwQAcCFBDCSQAiBKAbAvIAAAAQgkAQgjAAQgmAAglgSg");
	this.shape_4.setTransform(49.608,-76.0015);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_38
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B59B").s().p("AgNALQgHgKgCgMQgCgNAFADQAPAIALgFQAJgDAEAGQAGAKgEAKQgDAJgGAEQgGAEgFAAQgIAAgHgLg");
	this.shape_5.setTransform(38.3226,-67.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_39
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(29.35,-79.7,0.2417,0.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_40
	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(38.6,-80.25,0.2417,0.2417);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_41
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D2A21").s().p("AgkADQAAgEAHAAIA5gGQAEAAADACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAACQAAAGgIAAIg5ABQgIAAAAgFg");
	this.shape_6.setTransform(40.55,-84.005);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_42
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D2A21").s().p("AgZACIAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgCADAAIAlABQAGABABAFQAAAEgHABIglACIgBABQgFAAgBgGg");
	this.shape_7.setTransform(30.52,-83.5429);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_43
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B59B").s().p("AAAA+QgEgEABgHQAJgXADgTQgfABgDgLIgUg/IAsAHIAJALQAMARABALQADAUgPAqQAAADACADQADACADAAIAdABIgjALIgEABQgEAAgDgDg");
	this.shape_8.setTransform(33.35,-77.8667);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_35
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBD8CA").s().p("Ag3C3QgRgHgVg6QgUg2AAgYQgBgRAEgJIADgFIgQgwQgDgPgDgKQgRgsAQgfQAPgfApgEIBpgJQAsgEAgAeQAhAfgBAsIgYBUQAAAfgEAUQgFAWgMAYQgNAZg7AiQgvAbgVAAQgGAAgDgCg");
	this.shape_9.setTransform(41.6261,-78.9583);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_36
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B59B").s().p("AA6CiIgSgpQgSgjgsAhIgJAGQgDgSgHgFQgHgFgYAAIAZg2IhEjMICYARIAdhCIgKBEIAnAEIg3ClQgGAbASAtQAOAkAWAfIAcAQIggAdQgOgTgMgeg");
	this.shape_10.setTransform(45.525,-71.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_37
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBD8CA").s().p("AhSD+QgygCATg2QASgzA1goQAOgMACgiQACgggLgWIhMkFIDRAYIg2ClQgGAbARAsQAOAlAWAeIAcAQIhgBhQhCBFgmAAIgBgBg");
	this.shape_11.setTransform(45.1634,-62.2484);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_18
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D15954").s().p("Ah0CFQgsifgKhHQgHguAOgsQAOgsAggeQBLhHBzDvQA5B2ArCGIj3B3QgUhBgWhQg");
	this.shape_12.setTransform(41.7083,-72.4381);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleGirl, new cjs.Rectangle(-82,-109.8,164,219.7), null);


(lib.pinkGirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_110
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9D4166","#C86576","#CB6977","#D5737C","#E58583","#EF9087"],[0.404,0.682,0.784,0.875,0.961,1],-66,0,66.1,0).s().p("AJbIJQgHgdgZgSQgYgSgeAEQgXACgVgOQgTgOgHgXIgVhSQgFgUgOgQQgPgQgVgGIh8gpQghgKgTgdIhFhkQgVgfgegTIiRhZQg1gggmgyIgZgiQgVgagfgNQgfgNghAEIjjAEIApiCQAUg9gQhAQgKgogZghQgYgggjgWIgRgLQgagQgQgaQgQgZgEgfIgDgQIAPgCIACAQQAEAbAOAXQAPAXAWAOIASAMQAlAWAaAkQAaAjALArQASBEgWBAIgjBwIDOgFQAlgFAiAPQAjAPAWAdIAaAiQAjAvA0AgICRBZQAhAVAWAgIBFBlQAQAYAdAJIB7AoQAZAJARASQARASAHAZIAVBSQAFARAPALQAPALASgCQAkgEAdAVQAdAVAIAiIArDFIgNAEg");
	this.shape.setTransform(17.3,25.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_111
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A84A6A","#C86576","#CB6977","#D5737C","#E58583","#EF9087"],[0.38,0.682,0.784,0.875,0.961,1],-7.6,17.5,11.4,-15.4).s().p("AgOAAICiiGQABBVgzBcQgxAXg2AXQhtAugdAAQgcAACdiHg");
	this.shape_1.setTransform(-32.6918,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_112
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9D4166","#C86576","#CB6977","#D5737C","#E58583","#EF9087"],[0.404,0.682,0.784,0.875,0.961,1],0,104.7,0,-104.6).s().p("AJQQGQhMgYg9g0Im2l5ImqA5QhLAKhIgZQhIgYg2g2QgugugTg9QgTg9AMhAIApjiQANhEgKhFQgJhFgfg/IgshaQgZgygBg5QgBg4AXg0IAzktQAXiFBfhEQBdhECBATQApAGAaAgQg4gfhLALQhRANgRA3QimCFAcFMIA3A3QAsAuAUA8QATA8gJA/IglDvQgTB+AnB2IABAEQAgBhBUA6QBVA6BmgGIF7h1QAogJAfBVIAZBGQAQAnAQAQIChADQAUAUAoCBQAqCFAPATIAXgBQBEgEBAAWQBAAWAzAsQA3AvACALQACAUhLAIQgWADgVAAQg5AAg4gRg");
	this.shape_2.setTransform(-5.4981,0.0159);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_113
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EF9087","#E58583","#D5737C","#CB6977","#C86576"],[0,0.122,0.392,0.678,1],-9.5,12.5,-57.6,51.2).s().p("AIZQGQhMgYg9g0Im1l5ImrA5QhLAKhIgZQhIgYg2g2QgugugTg9QgTg9AMhAIApjiQANhEgKhFQgJhFgfg/IgshaQgZgygBg5QgBg4AXg0IAzktQAXiEBehFQBchDCBASQAqAGAbAgQAzA9AFBPIAVF1IB1DyQAVAsACAxQACAygTAtIghBSIDEgsQAvgLAsAXQAgAQAuAtIC/CWIBACIIDYCPIBUCRQARARA3AcQAyAZARAXQBKBegvBuQguBuh3ANQgWADgWAAQg4AAg4gRgAo7t1QggBRAAB0QAABTASBGQAJAlAgAWQAgAWAmgGQAYgDAYgNQAbgQAGgSQAghkAAhOQAAiBgchEQghhShKAAQgsAAgfBSg");
	this.shape_3.setTransform(0.0239,0.0101);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_114
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#331F1A").s().p("AgGALQgDgEAAgHQAAgFADgFQADgFADAAQAEAAADAFQADAFAAAFQAAAHgDAEQgDAFgEAAQgDAAgDgFg");
	this.shape_4.setTransform(-41.775,-73.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_115
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#331F1A").s().p("AgUAJQgBgEAEgFQAEgIAHAAQALgCAJAGQAJAEgCADQAAAAgBABQAAAAgBAAQAAAAgBgBQgBAAgBAAQgGgDgHAAQgGAAgHAEIgGAFIgDABIgBgBg");
	this.shape_5.setTransform(-41.376,-74.4536);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_116
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#331F1A").s().p("AgZACQAAgDAGgBIAlgFQADgBACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIABADQAAAGgHAAIglABIgCAAQgFAAAAgGg");
	this.shape_6.setTransform(-40.725,-79.5983);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_117
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#331F1A").s().p("AgGALQgCgEgBgHQABgGACgEQADgFADAAQAEAAADAFQACAEAAAGQAAAGgCAFQgDAFgEAAQgDAAgDgFg");
	this.shape_7.setTransform(-50.25,-72.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_118
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#331F1A").s().p("AgbAKQgDgCAJgHQALgGAPgEQAJgBAHADQAHADAAADQABABgGAAIgJAAQgMAAgHABQgJACgHAFQgDACgBAAIgCAAg");
	this.shape_8.setTransform(-51.245,-74.235);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_119
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#331F1A").s().p("AgkADIAAgDQAAgGAIAAIA6AAQAGgBABAFQAAAFgHAAIg6AEQgIAAAAgEg");
	this.shape_9.setTransform(-50.775,-78.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_120
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#86402D").s().p("AgGALQgNgJgGgNQgCgFAFgCQAGgBACAFQAEAKAKAGQAJAGAMAAQAGAAAAAFQAAAGgGAAIgCAAQgOAAgLgIg");
	this.shape_10.setTransform(-49.3036,-64.416);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_121
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#86402D").s().p("AgEBDIgjgIIAcgDQADgBACgCQADgDgBgEQgSgoABgUQAAgLAKgTIAKgLIApgLIgOBAQgBALggADQAEARAMAXQACAHgFAFQgDADgEAAIgDAAg");
	this.shape_11.setTransform(-43.075,-73.7312);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_122
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#331F1A").s().p("AjdEUIgBAAQAXgxAbhNQA0iYAQiGQgIgwAigpQAhgpA4gPQAsgLAyANQAtAMAhAcQAhAcAGAdQAGAggeAUQADgugOgNQgPgOgoARQgCAvgbAiQgaAfg0AcIgYC5QgJBQhFAqQgqAagsAAQgdAAgdgLg");
	this.shape_12.setTransform(-58.5007,-69.6362);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_123
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A86048").s().p("AACCgQg9gcgPgYQgPgWgGgWQgHgTgDgfIgfhSQgFgsAdghQAeghAsgBIBpgBQApAAATAeQASAdgMAuQgDAKgBAPIgLAyIAEAFQAEAIABARQACAYgPA3QgQA8gQAJQgEADgHAAQgWAAgvgVg");
	this.shape_13.setTransform(-52.2842,-73.9297);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_124
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#86402D").s().p("AhdC4IAagSQATghALglQANgugJgbIhGieIAmgIIgQhCIAkA9ICVgfIgwDSIAeAzQgYADgHAFQgGAGgBATIgKgGQgugdgQAlIgNArQgKAegMAUg");
	this.shape_14.setTransform(-54.925,-65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer_125
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A86048").s().p("AgODFIhphYIAagSQATghALglQANgugJgaIhGigIDPgrIg0ELQgIAXAFAgQAFAhAOALQA5AiAXAyQAYA0gxAHIgGAAQglAAhEg6g");
	this.shape_15.setTransform(-52.3055,-57.7816);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer_126
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#86402D").s().p("Ahvg/IiVi9Qg0hpAdhAQAcg+BlgLQBPgKBCATQArAMATAQQAyApAaAwQA0BiAIAMQAWAhAHAbQAIAhgOAcQgEAHgkAoQgjAngIAGQgWASA1BkQA4BtBPA+InfD/g");
	this.shape_16.setTransform(-44.616,2.0888);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer_127
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#331F1A").s().p("AifC2QAfiJAuh8QBcj4BRA/QAjAbASArQASAqgCAvQgEBIgdCiQgOBSgOBDg");
	this.shape_17.setTransform(-50.6598,-68.0712);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinkGirl, new cjs.Rectangle(-87.6,-104.7,175.3,209.4), null);


(lib.guyfrombackTorso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87054").s().p("AmDEwQgJgrAUgUIEZhDIEZnfQA9g7A3gEQA0gDAWAtQAmBLhBCjQg4CLhKBUIjMDTQgYAWgggDIk9AEQgVgdgIgkg");
	this.shape.setTransform(-18.1494,-11.2845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBCEA5").s().p("AgsBSQgTAAgSgJIgLgGIgeAEQgJAMgHgDQgHgDgDgOQgGgjAYgsQAxhbAjAkIAtAyICXgKIgHBfIiMAFIgKAFQgQAIgTAAIgCAAg");
	this.shape_1.setTransform(-55.5931,15.0289);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87054").s().p("Ag9ITQiigniUhpQA7hGADhwIABhtQAChJAKg+QAVg5AHgYQALgnAAhQQAAiahXAAQAxhWChgqQB/ghB1AIQFMADhZFHIgvErQgwFDAABsQhQAjheAAQhFAAhMgSg");
	this.shape_2.setTransform(33.4574,-0.0139);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackTorso, new cjs.Rectangle(-70.6,-54.9,141.3,109.8), null);


(lib.guyfrombackLegs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#253E63").s().p("AhBBnQAGhVA9ivIBBDAIgSAcQgVAggTAXQglAogTAAQgWAAAEg3g");
	this.shape.setTransform(-14.0811,-6.7049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_26
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#304E82").s().p("ADOHwQichHiNkJQgMgUgIgWIgFgJQgEgIgCgIQgphhgUg5QAGA9g6A5IjiESIiOhwIFPp2QAjhEBYgdQBdgeA0A1ICzDrIDxFgIgyAmIDpCoQiODUiYAAQgzAAg0gYg");
	this.shape_1.setTransform(9.7,0.068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_27
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C3C35").s().p("AjZARQgHgBgFgFQgEgGAAgFIAAgWQBIARCLgGQDtgLATAAIAAAUQAAAGgFAFQgFAFgHABQhJAAi7AHIhCABQhBAAgrgGg");
	this.shape_2.setTransform(-62.975,48.8973);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_28
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0A795").s().p("AjpA/QAAgqCBgvQBEgZBmggQB1BdAJhdQASAVAMAmQAMAnAAAwQg6AAjNASQgeADgdAAQhPAAhCgVg");
	this.shape_3.setTransform(-62.975,40.2896);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_29
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBCEA5").s().p("AioCFQAqgSAXgeQAYglAWgXIB2jLICOA9IiHCOQAYA9g+AhQgQAJgtASQgtASgWAMIhoADg");
	this.shape_4.setTransform(-50.625,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#253E63").s().p("AATHzQg/gbgDg5QgCghAahUQAahVgDgtIgNgiQhRiugQgyQAEAUgKAbQgPAngqApIj5EzIh1h9IF9pcIAnhBQAZgoAWgTQBBg2BaBOIBWChQApgKAaAxIEwJmQAAB9g1AnQg0AnilAAQiwAAhLghg");
	this.shape_5.setTransform(32.45,0.0246);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_31
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C3C35").s().p("Ai4ARIAKgoQAKAMA4ACQAdABAagBIDvgCIAAAbIkyAIg");
	this.shape_6.setTransform(-30.35,47.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_32
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C09483").s().p("AArBaQiQgKhJAAQAFgwBTg/QBQg+AlAEQAGA3A2APQAWAGANgIQAPgJgEgXQAZAsAFAMQAJAZgCAnQgPAYhYAAIgcgBg");
	this.shape_7.setTransform(-29.2387,40.091);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_33
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBCEA5").s().p("AipCoIAQgnQAZgSANgeQAYg3AEgGIBzi7ICOBCIibCRQAXAugrAaIgsAWQgdAPgPAPg");
	this.shape_8.setTransform(-17.025,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackLegs, new cjs.Rectangle(-86.4,-53.2,172.8,106.5), null);


(lib.guyfrombackHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5AB8C").s().p("AgIBHQgPgEAFgOQALgfABgVQABgbgPgXQgIgMAOgIQAOgHAHAMQAgAxgcBNQgFAKgIAAIgGgBg");
	this.shape.setTransform(-12.2581,1.0141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E3F32").s().p("AgzB/IAghlQAXhUgLg0QgPhEhMgkQAtgHAjAMIASAKQAXACANgGQAJgGAGgNQAEAUgBAJQgBAHgHAJQALADAUgIQgBATgZAJQAcAiAMAtQALAsgFAtQgGAzgbApIguBQQgQAjhMACQAFgkASg8g");
	this.shape_1.setTransform(12.414,-8.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E4C3D").s().p("AAADnIgWgCQgRgBgNgLQgNgLgFgRIgbhnQgDgKgFAFQgJAKgJACIgCADQgEALgMgBQgMgBgCgMQgEgOAAgfQAAgmgCgKIgBgHIgNgyQgFgUAEgWQgfgTgLgjQgJgeALgRQALAXATAKQAOAHAWAAQgWgNgDgaQgDgWAKgIQAKAYAOAKQANAKAXACQgMgIgFgPQgGgQALgLQAZAsB4gPQAtgGAjAMIATAKQAXACANgHQAJgFAGgNQAEAUgBAJQgBAHgHAIQALAEAUgIQgBATgZAJQAcAiAMAtQALAsgFAtQgGAzgbApIguBQQgQAjhNACIgHAAQgUAAgWgDg");
	this.shape_2.setTransform(0.0115,-9.6464);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_13
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1C097").s().p("AhVAjQgHhNAKgsIBMgSQgEA2AXAjQAUAbA4AjQhPA6hWAAQgFgegEgog");
	this.shape_3.setTransform(13.185,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_14
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBCEA5").s().p("Ag3EdIgngNQAqgggogvIgPgRQgkgDgHgCQgVgGgIgWIgHg5QgFgrgNgUQgCgXAGgUIAIgeQAGgVgHgWIgGgWQgGgUAEgUQADgUANgQIBPhqIEdBiIhFEeQgQA6AfAtQAdArA0AGQgoAbhDATIg7ANQguAAgxgNg");
	this.shape_4.setTransform(1.5382,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackHead, new cjs.Rectangle(-22.2,-33,44.5,66.1), null);


(lib.guitarguyTorso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71384B").s().p("AALAfQACgTgagdIAEg1IAkALQAHADADAGQADAIgDAHIgCAEQgLAdARAoQABAchSAFQAxgPACgZg");
	this.shape.setTransform(17.8263,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_19
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71384B").s().p("AgMBDQg9gfgDghQAAgEACgFIABgBQAEgGgDgIQgCgEABgFQABgFACgCIAKgKQAEgEAAgGIAAgKQAAgKAGgCQAlgQBAAMQgEAYgTAsQgNAbAJAOQAFAIAaAXQATASADANIgOABQgeAAgtgWg");
	this.shape_1.setTransform(-10.1792,-42.7051);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C4E61").s().p("ADVA8QgIgcg+gTQhBgShLAFQhWAIg/AnIiAgHQAAgfArgTQAjgIgUgcQgGgIABgKQAAgJAGgIQAFgFAFgCIBKgZQAwgMB8AkQBHAUCGArQAIADADAIQAEAIgEAHIgFAKQAdA4gHARQgNAfhpADQBDgZgKggg");
	this.shape_2.setTransform(-1.856,-44.1016);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_21
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANCAQAHhQgJg5QgKhEgfgvQgFgKALgCQAFAAACACIAFAIQAcAyALBEQAIA2gDBPQAAAJgLADIgDAAQgHAAACgJg");
	this.shape_3.setTransform(26.1769,-24.5206);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_22
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9A596A").s().p("AkBATIhxmfQCKhUCigUQCTgTB4AoQBHAXAmBAQAnBAgMBJIgnD+IARCsQAXC3AlArQgrAskbAmIkRAcg");
	this.shape_4.setTransform(4.85,5.13);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_23
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A596A").s().p("AjaDFQgGhXCLiAQAtgoBOg+QBahIAVgSIBGEGIklCfg");
	this.shape_5.setTransform(-47.1645,-13.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_24
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C4E61").s().p("AhNCYQgHgJgEgMQgmg2gohzQgdhUgVhZIAZicQBnAjBIBhQA8BUA9CkQAKAVAuB7IA1CQQAQAnhNASIhQAKg");
	this.shape_6.setTransform(47.4306,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyTorso, new cjs.Rectangle(-69.1,-55.8,138.2,111.69999999999999), null);


(lib.guitarguyrighthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBD6BC").s().p("AhhB+QgJgSANgQIgGgkQAGgPAOgJIAWgNQAYgSgFg7QASghA6gjQBAglAAArIgCBsQAAAQgJARQgIARgPAMIg0A5QgiAlgzAAQgUAAgIgSg");
	this.shape.setTransform(8.9159,-5.0182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C4E61").s().p("AhkA8QgngXAAgjQgIgoBSgaQAhgKAnAIQALADAKgFIARgHQA4ADALAFQAfAMgDAsQg7AtgeAOQgSAJgoARQgPACgPAAQgjAAgcgQg");
	this.shape_1.setTransform(-5.0428,11.8471);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyrighthand, new cjs.Rectangle(-19,-19.4,38.1,38.9), null);


(lib.guitarguyonlyhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#522E26").s().p("Ag3AHQgCgEAEgCQALgFAygEIAxgCIgBAGQgCAGgDADQgEAEgQAAQgLABgcgBQgagBgPADIgBAAQgEAAgBgEg");
	this.shape.setTransform(-3.9583,3.7841);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_26
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#522E26").s().p("AABAUQgFgCgDgHQgEgGADgGIACgFIgRADQgGABAAgGQgBgHAGgBQAagFAXACQAGAAgBAGQgBAHgGgBIgEAAIADAEQADAGgCAGQgCAHgHADQgDACgEAAIgGgBg");
	this.shape_1.setTransform(-3.9255,11.2895);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_27
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#522E26").s().p("AgHAWQgHgDgDgGQgDgGADgGIAAgBIgBAAQgFACgBgFQgCgGAFgCQAUgJAWgCQAFAAAAAGQAAAGgFAAIgRADQAFACACAFQADAFgCAHQgCAGgGADQgEACgDAAIgEgBg");
	this.shape_2.setTransform(7.7835,9.2631);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_28
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#522E26").s().p("AgrADQAFgIAEgBQALgBA9ACQAGABAAAEQAAAFgGAAIhAABIgNACIgBAAQgFAAACgFg");
	this.shape_3.setTransform(10.925,3.349);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_29
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8C099").s().p("AAKAfQgPgBgIgKQgDgDgKgUQgGgMADgIQACgIAHACIANAJQAHAGASgDQATgCgJAYQgIAagKAAIAAAAg");
	this.shape_4.setTransform(-1.228,22.9457);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_30
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8C099").s().p("Ag0ggIBpgEIgVA/Ig6AKg");
	this.shape_5.setTransform(-4.25,7.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_31
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8C099").s().p("Ag2BJIgIgBIgIgBQgQgKAFgHIAIgFIAAAEQAAAGAFADQABABAHAAQAHAAACABQAJAFAJABQAMACABgGQADgKgDgfIgEgdQgDgWAPgbIAPgXIAhgCQAjgCAMAAQgMARgaASQgbAPgFAFQgLAKgEATQABAIgCAXQgBAYgDAHQgDALgKADIgIABQgLAAgPgIg");
	this.shape_6.setTransform(7.0405,10.9252);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_32
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8C099").s().p("AAEAnQgIgLgEgHQgHgMAFgHQAEgHAHAEIAAgDQABgIgCgHQgDgHgHgCQgHgBACgHQACgGAGABQAIACAGAIQAGAHABAKQACAGgDAPQgBAGgFADIgCABIAKAPQADAGgFADIgEABQgDAAgCgDg");
	this.shape_7.setTransform(-18.1305,7.4859);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_33
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBD6BC").s().p("AALBAIAAAAQgHgHgNgcQgLgXgEgJQgFgMAAgMQAAgMAEgJQAFgLAHgFQAJgFAGAGQAaATACAsIAAA5QAAAHgHADIgFABQgDAAgEgEg");
	this.shape_8.setTransform(-18.0275,8.6464);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_34
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE798").s().p("AiUBGQg1gUALgoQAZhGBbgDIBOgBQAvgDAggQQgVAfgpAOQA9AUBMgXQgOAUgXANQgcAPgggBQA7AiBJgbQgOAdhDAUQg+AUhKACIgXAAQg+AAgngOg");
	this.shape_9.setTransform(5.1375,-7.8525);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_35
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5BE7C").s().p("AgRAoQgPgQgkgEIAzgMQAQgDACAEQAAgZAEgMQAJgXAbgLQgYAWATAYQALAOAWAUIhPAtQAGgKgNgNg");
	this.shape_10.setTransform(-17.55,-23.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_36
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5BE7C").s().p("AhsC8QgHgBgEgGQg3hSgOhUQgXiCBugvQCNg8BWBSQBKBIgHB5IiTgcQhNgPg6AUIAEBjQABAEgIAIIgIAKIAAAZQAAAMgGAAIgCAAg");
	this.shape_11.setTransform(-3.6067,-8.0603);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_37
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBD6BC").s().p("AgTDEQgPgDgdgYQgnghgQgKQgWgNgLgYQgJgYAFgZIACgMIgGi4IDSgrIBtA2IAABNQgCAIgkAbQABAQAHAaQADAXgHASIhGB8QgLAWgaADIgHABQgMAAgTgEg");
	this.shape_12.setTransform(-0.65,9.7173);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyonlyhead, new cjs.Rectangle(-24.4,-29.7,48.9,59.4), null);


(lib.guitarguyLegs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_28
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444B56").s().p("Ah+C5QgJgCgGgIQgFgIAAgKQAEgpAKggQALgnAXgiICdhyIAghBQAFgKAJgFQAKgGALACIAVADIgMAaQgQAhgVAiQgNAWhDAuQhEAvgRAWQgjAugEA1QgCAaAFARQgPgBgIgCg");
	this.shape.setTransform(-71.6771,12.0089);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7FA0D2").s().p("AitC5QgJgCgGgIQgFgIAAgKQAEgpAKggQALgnAXgiICdhyIAghBQAFgKAJgFQAKgGALACQAwAFAiAXQAkAZgEAdIhZBYIAvARQAsAWgPAeQgRAkh3AJQg6AEgqArIgMAMQgVAUgbAIQgPAFgPAAQgNAAgOgEg");
	this.shape_1.setTransform(-66.9866,12.0223);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_30
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D6C8D").s().p("AmwCDQgIgYg5guIDWhnQDihoA8gDQAngBCAgRIAzgNQA+gNAzgDQCkgJAABgQAAA+gZAoQgkA3hWARIsQCFQAGg1gFgOg");
	this.shape_2.setTransform(1.4,-4.7176);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_31
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD6BC").s().p("AjtB6QgSgQgCgZQAAgJADgGQAEgKAOgVQANgVAWgMQALgFAdgKQArghBTggQBBgZBtgfIB3CYQg6gGiQAzQipA8hRAMIgIAAQgTAAgQgNg");
	this.shape_3.setTransform(-32.9,3.8814);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_32
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B5872").s().p("Am2CnQg8gfg8hKQhXi5D5gxICngbQAogIBcABQBaAAArAGIIiA5Ii1DqIoyBtQgyAHgtAAQhpAAhNgog");
	this.shape_4.setTransform(-19.3168,-10.1938);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_33
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444B56").s().p("AB0CXQgMg1glgwQgSgXhCgzQhAgygPgWQgXgjgTgiIgOgaIARgDQAJAAAJAFQAKAGAFAKIAlBDICZB7QAsA+AUBXQACAKgDAIQgEAHgIACIgTACQACgRgGgbg");
	this.shape_5.setTransform(71.0521,1.1479);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_34
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7FA0D2").s().p("AB+C9QgagJgUgWIgMgNQgrgtgygHQhngPgUglQgSgfAigUIAmgOIhbhdQgHgeAagWQAZgWApgDQAJAAAJAFQAJAGAGAKIAlBDICYB7QAtA+ATBXQADAKgEAIQgDAHgIACQgIACgJAAQgPAAgQgGg");
	this.shape_6.setTransform(67.6039,1.1488);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_35
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBD6BC").s().p("ACTCeQgRgWgMgNQgbgdgwgHQgzgDgRgEIhhgOQAQgZgSgcIgyg+QgSgaAagoQAXgmAcgHQATgFAiAHQAYAGALAXQAEAHAGATQAHAPAKADQA0ASA2ApQA2AqAJAhIANBGQADATgMAPQgHAKgIAAQgFAAgGgFg");
	this.shape_7.setTransform(62.7836,0.4233);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_36
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBD6BC").s().p("ADMBvQhRgBiwgkQiVgfg4ANIBgimQBwAQBEAQQBYAUAuAbQAeAGAMAEQAYAKAQARQARATAFAKQACAGABAJQADAYgQATQgRASgYAAIgBAAg");
	this.shape_8.setTransform(30.0481,-4.0493);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyLegs, new cjs.Rectangle(-86.3,-30.9,172.7,61.8), null);


(lib.guitarguylefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A596A").s().p("AizA8QgjgFgagbQgagcgGgmQgJhFBAgZQA4gVBAAVIFzDCIg8BRg");
	this.shape.setTransform(-8.5614,-3.3875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD6BC").s().p("AhyAGIANhPIB0gBQAqAAAdAdQAdAeAAAoQAAAUgFACIiAAcg");
	this.shape_1.setTransform(24.375,10.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguylefthand, new cjs.Rectangle(-35.9,-17.7,71.8,35.5), null);


(lib.guitarguyHood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCcQgEgEAAgFQAVhYAAhDQAChOgXg8QAAgFAEgEQAEgEAFAAQAFAAADAEQADAEAAAFQAVA9gCBQQgCA+gRBaQAAAGgDADQgDAEgFAAQgFAAgEgEg");
	this.shape.setTransform(3.0839,3.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C4E61").s().p("AgYAqQhngPgGgyIBzgXQAAACAqAQQA3AVA3AtQgoAJgtAAQgkAAglgFg");
	this.shape_1.setTransform(-0.025,-14.7636);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyHood, new cjs.Rectangle(-13.4,-19.5,26.8,39), null);


(lib.guitar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_60
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB8156").s().p("AgFAcQgFgDgBgGIgFghQgBgFADgFQAEgEAFgBIACgBQAFAAAEADQAFADABAGIAFAhQABAFgDAFQgEAEgFABIgCAAIgCABQgEAAgDgDg");
	this.shape.setTransform(85.2089,-13.9925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_61
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD3AD").s().p("AgFAhQgEgEgBgGIgHgpQgBgGAEgFQADgEAGgBQAFgBAFADQAFAEABAGIAHApQABAGgEAFQgEAFgGAAIgCAAQgEAAgEgCg");
	this.shape_1.setTransform(83.8739,-12.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_62
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB8156").s().p("AgFAcQgFgDgBgGIgFghQgBgFADgFQAEgEAFgBIACgBQAFAAAEADQAFADABAGIAFAhQABAFgDAFQgEAEgFABIgCAAIgDABQgDAAgDgDg");
	this.shape_2.setTransform(79.4325,-13.0925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_63
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD3AD").s().p("AgEAhQgFgEgBgGIgHgpQAAgGADgFQAEgEAGgBQAFgBAFADQAFAEAAAGIAHApQABAGgEAFQgDAFgGAAIgDAAQgDAAgEgCg");
	this.shape_3.setTransform(78.083,-11.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_64
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB8156").s().p("AgFAcQgFgDgBgGIgFghQgBgFADgFQAEgEAFgBIACgBQAFAAAEADQAFADABAGIAFAhQABAFgDAFQgEAEgFABIgCAAIgDABQgDAAgDgDg");
	this.shape_4.setTransform(73.6325,-12.1925);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_65
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBD3AD").s().p("AgEAhQgFgEgBgGIgHgpQAAgGADgFQAEgEAGgBQAFgBAFADQAFAEAAAGIAHApQABAGgEAFQgDAFgGAAIgDAAQgDAAgEgCg");
	this.shape_5.setTransform(72.283,-10.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_66
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB8156").s().p("AgFAcQgFgDgBgGIgFghQgBgFADgFQAEgEAFgBIACAAQAFgBAEADQAFADABAGIAFAhQABAFgDAFQgEAFgFAAIgCABIgDAAQgDAAgDgDg");
	this.shape_6.setTransform(82.5325,-31.1514);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_67
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBD3AD").s().p("AgFAgQgEgDgBgGIgHgpQgBgGAEgFQADgFAGgBQAFAAAFADQAFAEABAFIAHApQABAGgEAFQgEAFgGABIgCABQgEAAgEgEg");
	this.shape_7.setTransform(80.9239,-31.0431);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_68
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB8156").s().p("AgFAcQgFgDgBgGIgFghQgBgFADgFQAEgEAFgBIADAAQAEgBAFADQAEADABAGIAFAhQABAFgDAFQgEAFgFAAIgCABIgDAAQgDAAgDgDg");
	this.shape_8.setTransform(76.7486,-30.2514);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_69
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBD3AD").s().p("AgEAgQgFgDgBgGIgHgpQAAgGADgFQADgFAGgBQAFAAAFADQAFAEABAGIAHAoQABAGgEAFQgDAFgGABIgDABQgDAAgEgEg");
	this.shape_9.setTransform(75.1325,-30.1431);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_70
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB8156").s().p("AgGAcQgEgEgBgFIgFghQgBgFADgFQADgEAGgCIACAAQAFAAAFADQAEADABAFIAFAhQABAGgEAEQgDAFgFABIgDABIgCAAQgDAAgEgDg");
	this.shape_10.setTransform(70.95,-29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_71
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBD3AD").s().p("AgEAgQgFgDgBgGIgHgpQAAgGADgFQAEgFAGgBQAFAAAFADQAFAEAAAGIAHAoQABAGgEAFQgDAFgGABIgDABQgDAAgEgEg");
	this.shape_11.setTransform(69.333,-29.2431);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_72
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhcgIIgBgBIABgBIC5ATQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABg");
	this.shape_12.setTransform(73.345,-16.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_73
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhUAqIgBgBIABgBICphRIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIipBRg");
	this.shape_13.setTransform(72.295,-23.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_74
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4AdIgCgBIABgBIByg3IABABIAAABIhyA3g");
	this.shape_14.setTransform(69.25,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer_75
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAQQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgCIA7gcQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAAAQgBAAAAABQAAAAAAAAIg7Acg");
	this.shape_15.setTransform(66.2367,-24.32);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer_76
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ApQBdIAAgBISgi4IABAAIAAABIygC4g");
	this.shape_16.setTransform(5.35,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer_77
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ApQBdIABgBISfi5QAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIygC5g");
	this.shape_17.setTransform(4.8,-8.395);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer_78
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ApQBeIAAgBIAAgBISgi5IABABIAAAAIygC6g");
	this.shape_18.setTransform(4.55,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer_79
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ApQBdQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAISfi6QAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIyfC5g");
	this.shape_19.setTransform(4.2688,-11.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer_80
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ApRBdQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAISgi5IACABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIygC6IgCgCg");
	this.shape_20.setTransform(4,-13.5812);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer_81
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BB8156").s().p("AgDA5QgGgFgBgIIgNhSQgBgIAEgFQAEgHAIAAQAHgBAFADQAGAFABAIIANBSQABAIgEAFQgFAHgHAAIgDABQgFAAgEgDg");
	this.shape_21.setTransform(62.1241,-18.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer_82
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBD3AD").s().p("AhzBXQghgYgFgnQgHgmAYggQAYghAmgGIB3gSQAngGAgAXQAgAXAHAoQAFAmgXAgQgXAggoAHIh2ASIgQABQgeAAgZgSg");
	this.shape_22.setTransform(75.8,-20.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer_83
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#774C30").s().p("AncCFQgEgCgBgFIgPhhQAAgFACgDQADgEAFgBIPFiXIASB3IvFCXIgCABQgDAAgDgDg");
	this.shape_23.setTransform(19.5958,-11.7875);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer_84
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BB8156").s().p("AhzBXQgggYgGgnQgHgnAYggQAXggAogGIB2gSQAngHAgAYQAgAXAGAoQAHAmgYAgQgXAggoAGIh2ATIgQACQgeAAgZgTg");
	this.shape_24.setTransform(72.275,-19.9844);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer_85
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BB8156").s().p("AgDBzQgKgHgBgNIgdi0QgCgNAHgKQAIgKAMgCQANgCAJAIQAKAHACAMIAcC1QACANgHAKQgIAJgMACIgGABQgJAAgHgGg");
	this.shape_25.setTransform(-57.7,0.0602);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer_86
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#774C30").s().p("AgDCCQgLgIgDgOIggjNQgCgOAIgLQAJgMAOgCQAOgCAKAIQAMAJACAOIAgDNQACAOgIALQgJAMgOACIgFAAQgLAAgIgHg");
	this.shape_26.setTransform(-60.1666,-0.276);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer_87
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#493223").s().p("AgkBpQgbglgJg4QgJg4APgrQAPgsAfgFQAdgEAbAkQAcAlAJA5QAIA3gPAsQgPArgeAFIgHAAQgZAAgZggg");
	this.shape_27.setTransform(-35.44,-3.4196);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer_88
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BB8156").s().p("AkGExQhjhlgZihQgZifBAh+QA/h/BzgSQBAgKA+AeQA8AcAxA8QAkgjAvgHQBRgNBHBIQBGBHASByQARBxgtBaQgtBahRAMQguAIgugXQgdBIgxAuQgzAvg+AKQgSACgRAAQhfAAhUhVg");
	this.shape_28.setTransform(-41.0331,-0.8154);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer_89
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#774C30").s().p("AhgkKIBsgRIBVImIhsARg");
	this.shape_29.setTransform(-27,-4.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer_90
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#774C30").s().p("AiZE3QhihlgZigQgZieA/h+QA/h+BxgTIBsgRIAFAdQBTAhA+BZQA/BaASB4QATB2ggBqQggBnhFA4IAEAeIhtARQgQACgPAAQhgAAhUhWg");
	this.shape_30.setTransform(-62.9195,0.1849);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitar, new cjs.Rectangle(-91.3,-39.8,182.7,79.69999999999999), null);


(lib.bluecapTorso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D27A3B").s().p("AgRD0QgqgJg0g5QgTgViGilIhCjsIETAiQAvgIAlAcQAKAIA3A5QAqAtApAQQA7AYBRgQIgiBkIAwCBQhJAPidApQhAAQgjAAQgLAAgIgBg");
	this.shape.setTransform(-1.475,-2.6655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E48544").s().p("AkRDlIgFkIIAAgBIhCjrQgQg4AXg2QAYg1A0gbQBeguA0gcQBEgjBxgBQBugBBLAeIANAbQA5B+ACCMQABCLg4B/IBMDNQASAvgWAtQgVAtgvARIosDEg");
	this.shape_1.setTransform(-0.0064,-0.0266);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapTorso, new cjs.Rectangle(-35.2,-57.2,70.4,114.4), null);


(lib.bluecapLegs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_40
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6CDD7").s().p("ABQFHQgSgcgagXIgGgEQhuhXg1iLQgHgSgMgUIgTggQgzhSghhYQhCiwBZgdQCFgtBIB+IE3I9QhcARg2CMg");
	this.shape.setTransform(-19.5097,-7.9404);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_41
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D563F").s().p("AAzBJIimhlIhHgEQgLgBgJgHQgJgGgDgLIgEgVIAcABQAkADAnAGQAaAEBEArQBGAtAbAHQA3APAzgRQAZgIAOgLIAGAWQACAJgGAJQgFAIgJADQg1ASgxAAQgaAAgagGg");
	this.shape_1.setTransform(20.9411,59.0064);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_42
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACBE80").s().p("AA1CcIimhmIhIgFQgLAAgIgHQgJgHgDgKQgNguAIgoQAJgrAcgIIB0AxQgFgZACgZQAFgxAhACQAnACA2BrQAaA0A3AWIAQAGQAbALASAXQASAXAFAcQABAKgFAIQgFAJgKADQg0ARgxAAQgbAAgZgFg");
	this.shape_2.setTransform(20.773,50.7525);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_43
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC89F").s().p("AAMBrQg6gcgmgoQgHgHgQABIgbACQgYAAgQgTQgUgYgEgUQgGgbAXgkQAYgnAfAEIBMARQAgADAPgYIA0BOQALAOAYAqQAbAnAkALQARAGAbAFQAQAGgKATQgJAQgRAGIhDASIgNABQgeAAgxgYg");
	this.shape_3.setTransform(19.1989,50.3837);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_44
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAC89F").s().p("AB/DkQgKAAgYgGQgXgGgSgRQgKgKgRgWQgqgdg3hEQgrg1g9haIBpiaQAMA2BZB1QBqCKAjBGQALAVgJAXQgJAWgXAIQgGACgGAAIgCAAg");
	this.shape_4.setTransform(1.6275,22.0786);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_45
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6CDD7").s().p("AiTETQg6gJgggxQgfgyAQg5IAXhTIG/kyIAoFRIgHANQg4BvhuA4QhSAqhYAAQgeAAgggFg");
	this.shape_5.setTransform(-64.6445,-19.9248);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_46
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6CDD7").s().p("ABQFHQgTgcgZgXIgGgEQhuhXg1iKQgHgTgMgUIgTggQgzhSghhYQhCiwBYgdQA5gTAtALQA+AQAqBJIE3I9QhcARg2CMg");
	this.shape_6.setTransform(27.6235,-25.6301);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_47
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D563F").s().p("AAzBKIimhmIhHgEQgLAAgJgHQgJgHgDgLIgEgUIAcABQAkACAnAGQAaAEBEAsQBGAtAbAHQA3AOAzgQQAZgJAOgLIAGAWQACAKgGAIQgFAJgJADQg3AQgwAAQgaAAgZgEg");
	this.shape_7.setTransform(68.0911,41.345);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_48
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ACBE80").s().p("AA1CcIimhmIhIgEQgLgBgJgHQgIgHgDgKQgNguAIgoQAJgqAcgJIB0AyQgFgZACgZQAFgyAhACQAnADA2BqQAaA0A3AWIAQAHQAbALASAWQASAXAFAdQABAJgFAJQgFAIgKADQg2ARgxAAQgaAAgYgFg");
	this.shape_8.setTransform(67.923,33.0911);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_49
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAC89F").s().p("AAMBrQg6gdgmgnQgHgHgQAAIgbACQgYAAgQgSQgUgYgEgUQgGgbAXglQAZgnAeAFIBMARQAgADAPgYIA0BOQALANAYArQAbAnAkALQARAFAbAGQAQAGgKATQgJAQgRAGIhDASIgNABQgeAAgxgYg");
	this.shape_9.setTransform(66.3489,32.7087);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_50
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAC89F").s().p("AB/DkQgKAAgYgGQgXgGgSgRQgKgJgRgXQgqgdg3hEQgsg2g8hZIBpiaQAMA2BZB1QBqCKAjBGQALAWgJAWQgJAWgXAIQgHACgFAAIgCAAg");
	this.shape_10.setTransform(48.7775,4.3786);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_51
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9DA7B6").s().p("AmMBgILwnAIApFSImiETQhKAxhZAPIimAcg");
	this.shape_11.setTransform(-31.35,-30.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapLegs, new cjs.Rectangle(-90.5,-66.8,181,133.7), null);


(lib.bluecapArm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D27A3B").s().p("AjhAgIBJkXQBgAxBwBnQA+A4BsBmQhAgpgwBbQgSAhgIAqQgIAoAFAUg");
	this.shape.setTransform(-4.575,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AjpgLIAOj2QB3BLCQB1QAmAeCYCBIhUCkg");
	this.shape_1.setTransform(3.75,4.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0692A").s().p("AhEBeQgRgJAJgqQAIgnAYgsQAUglAogNQAigLAWALQAOAIgLAXQgIAPgdAwQgWApghAdQgaAWgQAAQgFAAgEgCg");
	this.shape_2.setTransform(10.8705,15.2752);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapArm, new cjs.Rectangle(-27.2,-24.9,54.4,55.2), null);


(lib.blucapjusthead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FA4C2").s().p("AhxA1QgSgVAkggQAigeA9gWQBAgXA4ACQgwASgYAiQgVAdAAAkQAAAIgKALQgLALgIAAIgQAAQhMAAgTgVg");
	this.shape.setTransform(0.286,-11.6711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_34
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#378092").s().p("AiDB2QgUhTABgYQAAg/A2gmQBahCBXAgQAsAQAaAdIhZAuQhbAygNAXQgcA0gPATQgTAZgMAAQgKAAgFgSg");
	this.shape_1.setTransform(-5.7256,-10.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_35
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F29C7E").s().p("AAJAlQgBgDgEgEQgGgHgBgHQAAgIAHgEQADgCAAgCQgCgPgDgJQgCgHgCAAQgGABABAPQABAEgFABQgFAAAAgFQgCgYAQgBQAPgBACApQABAHgIAFQgBABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAADAFAFQAHAGAAAHQABAFgFAAQgEAAAAgEg");
	this.shape_2.setTransform(-13.0031,7.3238);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_36
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC89F").s().p("AAFAyQgDgNgFgHQgTgWgCgVQgDgaAGgKQAFgIAKAAQATgBAHAeQAEAPAAAPIACAiQgBAWgLABIAAAAQgHAAgCgJg");
	this.shape_3.setTransform(-12.725,8.1997);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_37
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#22273A").s().p("Ah5CNQgogdgHhWQgGhPAfgoQAXgeAzgQQBAgTBIAYQBfAfAHBfQADAegDAfIgFBOIgNioQgBgUgTAFIgrARIhYgLQg2gGgSAVQgMAOAQAOQAVASABAKQABAOgLAOQgLARAAAqQAAAVgTAKQgIAFgIAAQgKAAgJgHg");
	this.shape_4.setTransform(-1.1105,-6.1474);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_38
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#22273A").s().p("AgrAFQAAgDAEgBQAngLAlACQAGAAAAAEIAAAHQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgDABgDAAQgggEgoAGIgBAAQgGAAAAgFg");
	this.shape_5.setTransform(-0.3,-3.7566);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_39
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AAHAFQgGgFgDAAIgKACIgDABQgDgCAGgCQAHgEAIABQAGAAAEAEQAEACAAACQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgCAAIgEAAg");
	this.shape_6.setTransform(11.516,0.2802);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_40
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22273A").s().p("AgJAaQgFgDgBgJQgBgJAEgKQAEgMAHgFQAFgGAGADQAGACAAALQABAJgEAKQgEALgGAFQgEAEgEAAIgEgBg");
	this.shape_7.setTransform(11.8,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_41
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AAHAEQgEgBgCgCIgDgBQgGAAgEAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgCgBAGgCQAHgDAIABQAFABAEAEQAEACAAACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgGgCg");
	this.shape_8.setTransform(1.075,1.2607);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_42
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#22273A").s().p("AgMAZQgFgDAAgKQABgKAFgKQAFgKAHgFQAHgEAFADQAFAEAAAJQAAAKgGAKQgFAKgHAFQgEADgDAAQgDAAgCgCg");
	this.shape_9.setTransform(1.075,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_43
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#22273A").s().p("AgdALQgDgCABgDIABgIQAAgEADgBQAbgJAdAOQAEACgBACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAgBQgBAAgBAAQgYgIgZAMIgCABIgDgBg");
	this.shape_10.setTransform(10.9058,-4.4099);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_44
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F29C7E").s().p("AgCAVIgTgSQgKgJAAgJQgBgIAIAAIAPAEQAJAEAQgIQARgIAAAaQgBAbgJACQgGACgFAAQgIAAgGgFg");
	this.shape_11.setTransform(3.1985,17.1666);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_45
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F29C7E").s().p("AgDAvIgphZQAZgSA9AQQAJAagSAoQgOAegNAAQgFAAgEgFg");
	this.shape_12.setTransform(-0.1527,1.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_46
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F29C7E").s().p("AgyBSIA2gLQAMgBgJg3QgKg/gCgVQAAgGAEgFQADgFAHAAQAQAAAOAHQALAFABAFQgbARAEBGQADAkgBAKQgCAUgNABg");
	this.shape_13.setTransform(8.325,3.2483);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_47
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAC89F").s().p("AhMCMQg9gyAJgSIgBjzIDsgRIAPAbQAPCggNBRQgRBog/AFIgIAAQgzAAg9gxg");
	this.shape_14.setTransform(2.2073,5.514);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer_48
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#378092").s().p("AiAAmQgPgPAegXQAggYBGgWQA3gPAlAMQAqAOAKArQADAJgGAIQgGAIgJABQhtAWg9AAQg4AAgRgSg");
	this.shape_15.setTransform(7.4168,-13.5565);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blucapjusthead, new cjs.Rectangle(-20.8,-24.5,41.7,49), null);


(lib.afrodudeTorso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCA7B0").s().p("AgaD8Qg9gpg9hdQg7hagVhMIDCjeQA6AiBYCiQBAB0A0CBQAHARgcAXQgaAWgsAQQg4AWgqAAQgnAAgagTg");
	this.shape.setTransform(24.996,-13.6861);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB909A").s().p("Ag4hAQgKheA+g0IA+CdIgFEIQhiitgLhmg");
	this.shape_1.setTransform(9.4556,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCA7B0").s().p("AkcF4QgvgRgWgtQgVgtARgvIBMjNQg3h/ABiLQABiLA6h/IAMgbQBMgeBtABQByABBDAjICxBdQBYAygCAaIhwFzIATI3g");
	this.shape_2.setTransform(-11.329,-0.0266);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudeTorso, new cjs.Rectangle(-47.8,-57.2,95.69999999999999,114.4), null);


(lib.afrodudeRightleg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6281C0").s().p("AkbD/IE3o9QAqhJA+gQQAsgLA5ATQBZAdhDCwQghBYgzBSIgSAgQgMAUgHATQg0CKhwBXIgFAEQgZAWgUAdIg5BVQg3iMhbgRg");
	this.shape.setTransform(-17.9485,-16.8301);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_17
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6CDD7").s().p("AjMA+QgKgDgFgJQgFgIACgKIAFgWIAoAUQAyAQA4gOQAbgHBGgtQBEgsAZgEQA/gKApABIgFAUQgDALgIAHQgJAHgLAAIhIAEIilBmQgZAEgaAAQgxAAg2gQg");
	this.shape_1.setTransform(-58.3923,50.1438);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_18
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9DA7B6").s().p("AjOCQQgJgDgFgIQgFgIABgKQAEgdASgXQASgWAbgLIAQgHQA3gWAbg0QA1hqAngDQAigCAEAyQACAZgEAZIB0gyQAcAJAJAqQAIAogNAuQgDAKgJAHQgIAHgLABIhIAEIimBmQgYAFgbAAQgwAAg3gRg");
	this.shape_2.setTransform(-58.2281,41.8911);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A86048").s().p("AiMDiQgXgIgJgWQgJgWALgWQAjhGBqiKQBZh1ANg2IBoCaQg9BagrA1Qg3BEgqAdQgRAXgJAJQgSARgYAGQgYAGgKAAIgCAAQgFAAgHgCg");
	this.shape_3.setTransform(-39.1275,13.1786);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_20
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A86048").s().p("AhnCCIhDgSQgSgGgIgQQgJgTAQgGQAKgEAhgHQAkgLAbgnQAYgrALgNIA0hOQAPAYAggDQAUgCA4gPQAfgFAYAnQAXAlgGAbQgEAUgUAYQgPASgZAAIgagCQgRAAgHAHQgmAng6AdQgxAYgeAAIgNgBg");
	this.shape_4.setTransform(-56.6729,41.5087);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_21
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#426893").s().p("AC4FFQhXgPhLgxImikTIAplSILwHAIguEBg");
	this.shape_5.setTransform(41.05,-21.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudeRightleg, new cjs.Rectangle(-80.7,-58,161.5,116), null);


(lib.afrodudeLeftleg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6281C0").s().p("AkbD/IE3o8QAqhKA+gQQAtgLA4ATQBZAdhDCwQghBYgzBSIgSAgQgMAVgHASQg0CKhwBXIgFAEQgZAXgUAcIg5BVQg2iMhcgRg");
	this.shape.setTransform(-4.0485,-16.8017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_17
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6CDD7").s().p("AjMA9QgJgDgFgIQgFgIABgKIAGgWIAnATQAzARA3gPQAbgHBGgtQBEgrAagEQA+gKApAAIgEAVQgDALgJAGQgIAHgLABIhIAEIimBlQgZAGgbAAQgxAAg1gSg");
	this.shape_1.setTransform(-44.5173,50.1564);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_18
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9DA7B6").s().p("AjOCQQgJgDgFgJQgFgIABgKQAEgcASgXQASgXAbgLIAQgGQA3gWAbg0QAWgsAVgbQAbglAWgBQAigCAEAxQACAZgEAZIB0gxQAcAIAJArQAIAogNAuQgDAKgJAHQgIAHgLAAIhIAFIimBmQgZAFgbAAQgxAAg1gRg");
	this.shape_2.setTransform(-44.3399,41.9025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A86048").s().p("AiMDiQgXgIgJgWQgJgXALgVQAjhHBqiJQBZh1ANg2IBoCaQg8BZgsA2Qg3BEgqAdQgRAXgKAJQgSARgXAGQgYAGgKAAIgCAAQgFAAgHgCg");
	this.shape_3.setTransform(-25.2275,13.2286);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_20
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A86048").s().p("AhnCCIhDgSQgSgGgIgQQgJgTAQgGQAKgEAhgHQAkgLAbgnQAYgqALgOIA0hOQAPAYAggDQAUgCA4gPQAfgEAYAnQAXAkgGAbQgEAUgUAYQgPATgZAAIgbgCQgQgBgHAHQgmAog6AcQgxAYgeAAIgNgBg");
	this.shape_4.setTransform(-42.7729,41.5337);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_21
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6281C0").s().p("AhUDuQhvg4g4hvIgGgNIAolRIG+EyIAYBTQAQA5gfAyQggAxg7AJQgfAFgfAAQhXAAhSgqg");
	this.shape_5.setTransform(41.0836,-28.7748);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudeLeftleg, new cjs.Rectangle(-66.8,-58,133.7,116), null);


(lib.afrodudejusthead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_29
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86402D").s().p("AgOAmQAAgFAGgJQAFgEAAgEQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgJgEAAgJQAAgqAPAAQAKAAAEAKQABAEABALQAAAFgEAAQgFAAAAgFQAAgQgHAAQgBAAgCAIQgDAJAAAQQAAADADABQAIAEAAAIQAAAHgGAIQgEAFAAACQAAAFgEAAQgFAAAAgFg");
	this.shape.setTransform(12.675,8.1989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_30
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A86048").s().p("AgWAoIgBglQgCgOADgRQAFggATAAQALAAAGAHQAHAKgBAbQAAAWgSAYQgGAIgBAOQgBAKgHgBQgLABgDgWg");
	this.shape_1.setTransform(12.3985,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#331F1A").s().p("AhDBCQgngOgJguIgNg+IAPAsQAdA+BZgcQBUgaAohDQgQA1gLASQgYApguARQgjAOgdAAQgTAAgQgGg");
	this.shape_2.setTransform(-2.475,22.863);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_32
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2ABQBLAHAegcQARAbg1ALQgPADgLAAQgfAAgMgUg");
	this.shape_3.setTransform(-4.22,17.7701);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_33
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB6E6F").s().p("AgWAbQgYgLgKgaQA7ATAugpQAOAXgKASQgIARgXAFQgJACgIAAQgNAAgOgGg");
	this.shape_4.setTransform(-4.0167,18.9875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_34
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#331F1A").s().p("AgpAJQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgHQgBgEAGgBQAmgFAqAIQAEACAAACQABAFgIAAQgngCgjAHIgCAAIgDgBg");
	this.shape_5.setTransform(-1.7266,-3.4747);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_35
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#331F1A").s().p("AAOAHQgKgHgIAAQgIABgFADQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAgBQgDgCAHgEQAJgFAMAAQAHgBAGAEQAFADABADQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgEABIgCAAg");
	this.shape_6.setTransform(-13.2897,5.5172);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_36
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#331F1A").s().p("AAYAJQgGgFgKgDQgMgCgEACQgIAFgIgCQgIgCACgCQABgEAIgEQAKgEAKACQAQADALAIQAJAIgFADIgBAAQgCAAgDgDg");
	this.shape_7.setTransform(-3.3006,5.4303);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_37
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#86402D").s().p("AgsAoQADg4AAgaQA3gTAfASIgcBgQgXgfgmASg");
	this.shape_8.setTransform(-1.975,1.3372);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_38
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#331F1A").s().p("AgdALQgDgCAAgDQgBgDADgDQAdgPAdAGQAEABAAAEIACAIQAAAEgCACQgDACgCgBQgcgLgYALIgCAAIgCAAg");
	this.shape_9.setTransform(-13.4069,-3.4418);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_39
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#86402D").s().p("AgcBFQgDgZASgOQAGgEACgHQACgHgDgHQgUhBgcgVQAAgFATgCQAVgDAXADQAEAJAABiQAAANgMAFQgRAIADAPQADAQAXgDQAWgDANAGQANAGgLACIgvAGIgHAAQgVAAgDgVg");
	this.shape_10.setTransform(-10.9229,5.8769);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_40
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#331F1A").s().p("ABTC3QgJgGgCgLQgBgHADgIQgNgBgKgJQgKgIgCgOQgCgNAGgMQAGgLAMgGQgJgBgHgHQgHgGgCgJQAAgGABgHQgRAHgPgKQgIgGgEgMQgHAHgLADQgUADgNgPQgEAEgHABQgKACgHgGQgLANgRADQgNACgMgFQgIAIgMADIgHAAQAGAPgKANQgHALgMACQgMACgLgHIgHgHQgHgCgGgGQgGgGgBgIQgDgPAMgKIgEgLQgDgRAOgLIgCgGQgCgNAGgLQAGgMALgGIgBgDQgDgOAJgMQAIgMAOgDIAKAAQACgRAMgMQAMgMAQgDIAPAAQAMgQATgDQATgEAQALQAIgUAWgEQAOgDALAHQANAIAFANQAIgDAEgBQAPgCAOAGQANAGAHAMIALgDQASgEAOALQAPAKADARIAAAEQAXABARAOQARAPAEAWQAEAUgJATQAVAHAEAVQACANgHAMQALAKACANQADAQgJAOQgKANgQADIgEAAQAGAJABAHQADAOgJANQgJAMgOACIgJABQgEAMgNADQgIABgHgDQgGgEgEgGIgGgDQAAAJgGAHQgGAHgKACIgFAAQgIAAgHgFg");
	this.shape_11.setTransform(0.0306,-11.3094);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_41
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A86048").s().p("Ah4BYQgVhUABimIANgdID3gDIAUD8QALASg7A5QhAA9g4ABIgBAAQhBgBgahqg");
	this.shape_12.setTransform(-3.2591,8.1501);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_42
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#331F1A").s().p("AAKA6QgIgFgCgKQAAgFABgGQgIgBgHgGQgHgHgCgJIgBgEQgRgHgEgSQgCgOAIgMQAHgMAOgCQAOgDALAIQAMAIADAOQACAHgCAHQAJAGACAMQACAIgEAKQAMAEADANQACAKgGAHQgFAIgKACIgFABQgGAAgGgEg");
	this.shape_13.setTransform(-18.9781,0.3608);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudejusthead, new cjs.Rectangle(-24,-30.1,48.1,60.2), null);


(lib.littleFire_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-14.3,20.5,1.1,5.1).s().p("AhCCBQgbggALgiQAJgeAfgaQAMgKAtggQAngcASgcIAOg6QAEAdgSAdIgLAwQgJBMghBJQgNAcgPAJQgKAHgLAAQgSAAgSgVg");
	this.shape_1.setTransform(0.0301,-0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.littleFire_1, new cjs.Rectangle(-8.6,-15,17.299999999999997,30), null);


(lib.fireBit82_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.1,116.3,-6.1,-28.7).s().p("ABENrQgUgBgOgCQgVgCgngLQgKgDgFgDQgMgDgMgEQgOgEgZgKIgqgRQgVgLgNgMQgPgOgFgVQgFgPAAgYQAAg4AVglQAIgOAdgmQAZggAIgUQAPgqgYgnQgSgRgdgYIg0gpQg8gzgMgqQgKgmASg2QALggAPgTQAHgJASgRQA2g2A7gyQADgDADgBIALgPIAMgYQAQglAGgSQAKggAAgZQABgNgDgcQgCgZAHgQQAGgPASgZIAIgKQgYgwgQgZQgHgMgPgXQgNgVgHgOQgRgmADgnQADgoAZghQANgSAagYIA3g0QAegeASgYQAQgVAIgVQABgZAHgjIAAgCQgCgJgDgJQgDgKAGgEQAGgEAJAFQAIAFACAHQAPAogUAuQgBAdAHAXQAFARAMAaIAUArQAxB4hKCZQgWAogJAVIgCAEIACAKIAjB8QAIAdABARQADAagJAUQgJAUgbAaQggAcgPAPQgQAQgYAjQgRAYgFANQgKAVAFASQABAHALATQAIAPACAKIAYASQAbAVAQAJQATALAhANIA2AWQA5AZAdAhQAXAaAMAmQATA7gRAtQgMAbgkArIhIBZIANAVQAMAVAEANIAAAgQACAWgDAJQgEAKgPARQgQAVgMAKQgUAQgXAFQgOADgVAAIgGAAg");
	this.shape_16.setTransform(12.5886,10.3892);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.8,117.1,-4.8,-27.9).s().p("AAONhQgXgDgygRQhBgYgYgNQgegRgOgPQgjgnADhAQACgoASglQASglAegbIAegaQARgQAFgPQAGgQgDgfQgGgygNgkQg6gTgbgPQg0gegRguQgJgZABghQABgjALgVQAIgQAZgaIA2g2QAigjAVgOQAMgIAWgNIAjgUQAqgZANggQAEgMAEgDIAIgQIAXg6QAMgfAEgSQAGgcgCgtIAAgBQgFgdgVgwIgvhwQgNgfgDgQQgGgfAJgtQAIgmAOgVQAHgKAKgLIAVgTQAWgUASgUQAFgGAihIQAGAEABAGQABAFgCAOQADAEAAAFQABALgDAMQACAOAHARQASAlAHASQAYA7gNA2QgDAPgKAYIgRAtQgPAngHAYQgJAjgBAeQAAAMgBAEQgCAFgCADIgEAaQgDAZAEALQACAHAHAKIALAQQAOAWADAbQACAbgLAYQgHAPgJAJQgDADgRAOIgZARQgUAPgIAIQgMAMgOAWQghA2gEAoIgEASIgBACQAFAZASAYQAWAeAtAcQAgAVBBAnQA2AkAdAmQAiAsAMA7QAMA4gLA6QgTBmhPBfQABAKACAGQADAHAMAOQASASAGAPQAJAWgJASQgIANgQAHQgLAFgUADQgnAFgegBIgFAAIgEADQgYANgeAAIgVgCg");
	this.shape_17.setTransform(11.2956,9.5766);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.1,126,-4.1,-19).s().p("AA+PRQgKgEgNgGIgVgMQgSgJhSglQg+gcgfgYQgogfgOgpQgOgpAOgnQAJgWAWgdQAZghALgRQA1hNgXg+QgHgTgTgZIgggrQgcgngQgmQgdhGAUgzQALgZAhgnIAVgXIABgFQAJgRAQgSQAKgMAVgWIAygwIAxgwIAdgdQAQgQAQgXIAbgpQAKgRAEgKQADgLABgRIgBgcIAAgDIAEgqQAXAkABAOIABAPIACApQACA4gPAjQgLAZgeAjQgqAygGAIQgRAZgUArIgJARIAAAIQgLA1BPA6IBDArQApAaAVAUQATATARAaQAMASAOAeQAPAfAGAUQAJAcgEAXQgEAcgYAmQgoA/gBAAQgeA5AFBAQAFA+AkA7IATAgQAHATgHAOQgKAXgpAMQgPAFgaAEIAAADQgBAEgJADQgKADgLAAQgPAAgRgFgABaowQgFgXgMgbQgGgMgMgVIgNgXQgFAAgDgEQgEgFgBgOQgCgRAAgNQAAgRACgMQADgUAVgaQAUgbAEgUIAFg1IAIhTIAAgDIAAgBIAQBJIAGAaQADAOAFAKQAEAIAJAMQAKAOADAGQAIAMAFASQAEAMAFAWQAFAWABALIAAAGIABADQABAJAAANQAAAYgFAQIgFAMIgQAfQgMAUgEALIgOAoIAAAIIgBAlQAAALgHACIgWhSg");
	this.shape_18.setTransform(10.634,0.6904);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.6,133.8,-2.6,-11.2).s().p("ACsQkQgEAAhHgXIgMgHIgBgBQgMgCgNgFIgvgOIgDgBIgCAAIgKgEIgOgLIgTgNQgMgIgCgJIgBgEQgqgIgqgQQgsgQgVgVQgUgUgMgmQgLgjAFgZQAMgwBOgdQAsgRAOgHQAfgQAPgWQAOgUADgeQADgVgCgiIAAgFQgbgbgkgTQgWgLgugUQgogTgUgYQglgqgBhTQAAgwAMgcQAMgeAggfIA6gzQASgSAXgaIBPhVQAngsARgbIA7hiQADAGAAAIQgBAYgIAYQADAlgQAtQgGARgNAcIgUArQgaBBgGBFQgBAXACAKQAFATASARQAUAUA1AbQA0AaAUAWQAsAxgHBgQgJB1g/BjIgBACIACAEQAGAOAQAfQAXArAJAOIATAbQAKAQAGALQAKAUAJAnQALAugCAaQgEApgbAVQgUAPgcAAIgFAAgACWuJIACgBQACgHAFgLQACgHABgUQABgRAFghQABgJAdgxIAFAKQADAQAFAMIAMAWQAHAOACAKQABAGAAAWQAAAYgDAHQgCAIgIAIQgUAUgbAFQgMADgCABIgCABQgFAAgCgjg");
	this.shape_19.setTransform(9.141,-7.1687);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.5,144.3,-5.5,-0.7).s().p("ABXSCQhJgbhGgyQgvgghKg/QgjgegRgSQgbgdgJgZQgLgfAKggQAKggAegZQAKgIA3glQAqgbANgWQATgigUgrQgNgagpgsIgHgHIgQgIQgcgPgNgJQgughgPhCQgJgiAAgkQAAgaAIgPQAHgLAPgNQAsgkA8gUQAcgbAQgSQAagfAKgcIAJgZQAEgQAGgJQAJgSAXgXIAmgoQADgDAYgRIgSArQAAAFgDAIQgfBJATA1IALAbIAFAWQAFAdgBARQAAAUgFATIAAAWQAEACADADIAUASIApArQAWAWAJAQIAOAeIAKAUIAIAVQADAPgCAVIgEAkIAAASQAAALgCAHQgCAMgMAXQgMAZgKAPQgKAPgLANQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgDASAFAfIANBLQAJAyANAcQAUAqAlAZQAJAHAuAYQAiARAOAQQANAPACARQACARgJAQQgNAVgjAXQgmAZgfAKQghAKgeAAIgBACQgBAEgGAAIgDAAQgFAAgGgCgACJvyQgJAAgEgCQgFgDgBgIQgCgdARgSIAQgOQAMgKAOgPQALgLACgGIABgTQAAgHADgCIABgBIAgAuIAAAKIAEAJQADAHABAOQABAUgGAMQgCAFgEADIgHAGIgFAGQgCAEgEABQgEACgJAAg");
	this.shape_20.setTransform(11.9932,-17.6125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-8.5,154.1,-8.5,9.1).s().p("AgpTqQgOgJgfgbQgsglgzgeQgjgUgLgJQgXgSgiguQgTgdgFgNQgGgTADgqQADghADgQQAFgaAKgUQAIgOAUgZIAcgkQAYgeAKgSQAQgcACgaQADgpgig0IgcgqQgQgZgIgTQgchBAUhnQAMg6AUghQAIgNAQgTQAVgaBZijQADACABADQADAHgBATQgHA+ALAqQAJAeAVAhQAMAUAdAlQAcAlARASIAdAeQAQASAIAPQAQAhgDAyQgCA3gTA1QgNAhgtBNIgHAoQgGAcADAUQAEAdAWAcQAPATAgAcICYCBIAZAUQAOALAJAJQAgAhAKAtQAEAcgHAPQgFANgYAUQgbAUgOAJQgYAPgVAHQgXAIgeABQgZACgYgBQgGAFgOACIgUABQgyAAgqgcgACWySQgEgEgBgGQgBgIAEgNIAxhUQAFAFAAAKQACAdgEARQgGAegVAVQgHAHgGAAQgGAAgEgEg");
	this.shape_21.setTransform(14.963,-27.4222);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7,90.9,-7,-54.1).s().p("ACGKWQgEgBgEgDIAAAAIgPgDQgIgCgCgDQgDgDAEgDIgDgBIgZgFQg8gMhAgdQgngShJgnQghgSgPgKQgagQgRgPQgegagXgmQgig7gBg5QAAg/AqgxQAKgNAZgWQAZgXAKgLQAiglALgrQALgqgOgqQgJgXgmg+Qggg0gEghQgGgzArhEIAmg4QAYgiAMgXIAOgfQAJgTAIgMQAKgPA+hDIA2hHIgNA8QgPAuAAAvQABA3AWA0IAUArQANAcAGAQQAUA4gHBQQgFAugQBcQgJBOAHBMQAEA0ASAdQARAaArAiQA7AuBJArIAkAVQATAMAMALQAnAkAAAzQgBAngbAyQgOAbgQARQgVAWgbANQgbANghADQgPABgOAAQgEACgFAAIgEAAg");
	this.shape_22.setTransform(13.525,35.7955);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.5,94.3,-7.5,-50.7).s().p("ACuKwQgYgBglgIQgbAGghgCQhDgGhNglQgvgXhWg3QgpgbgSgPQgfgagQgcQgbgwAGhAQAFgxAbg8QAUgtAYgeQALgNAQgQIAdgcQAegeAsg8QgIgPgJgLQgJgNgUgWQgVgXgJgMQgRgYgZg1QgUgrgBgYQgCgYAMgkQATg6AggrIAug3QAJgMAcgsIAthLIBBh7QADACABAEQADAGgCAOIgOBEQgJApAEAbQADAYAWAwIBJCgQASAnAIAZQAWBFgPBIQgFAWgKAeIgRAyIgCAFIgFArQgEAmAEAaQAGAeAVAhQANAWAdAiQBQBeBeBeQAeAeAOAVQAUAfgCAeQgBAZgTAZQgMARgaAYQgYAYgSALQgdARgpAAIgJAAgAgXJ4IgJgFQgfgRgSgHIgQgGQAaAOAQAIQARAIAPAFIAAAAg");
	this.shape_23.setTransform(13.9802,32.3595);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-8.2,94.1,-8.2,-50.9).s().p("ACsKqQhPgJhHgQQgpgJgXgIQg6gTg0gmQgpgdguguQgSgRgNgPIgKgIQguglgSgfQgNgWgFgcQgEgUgCgfQgBgmADgXQAFgiAOgaQANgZAfgeIA3gzQAfgeAQgZQAVgeAAgdQgBgigjgxQgvhCgHgOQgVgtAKgzQAIgvAhgwQAbgnAuguQASgSBCg+QAvgsAsg0IAWgYQgrBmgLA2QgNBGAeBCQAOAhAbAkQAYAhAcAbIAbAZQARAPAJAKQBLBVhCCIIgfBAQgQAlACAcQACAlAeApQATAbAsAsIBtBuIAdAfQAOARAIAPQAOAcgEAeQgEAegVAbQgWAagkATQgjAUgrAJQgaAHggACIAeADQAVACAAAIQABADgEACQgDADgFABIgHAAIgKAAg");
	this.shape_24.setTransform(14.7033,32.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,99.6,-6.2,-45.4).s().p("AgLLHQhJgRg+gpQgfgTgLgSQgEgIgFgOQgFgRgDgGQgNgagjgiQgZgZgRgNIgdgUQgRgLgJgKQgngqADhKQACgiALgSQAIgPAVgQQAagUAfgSIAygaQAdgPATgNQAZgSATgVQAQgzgFgkQgDgTgMgaIgWgsQgshYgNhhQgKhMAXgsQAHgOANgRIAYgcQBQhhARh8QABgDAag9IAEAGQADAFgBAPQgEBFAUBCQAUBEAoA3QAMAPAcAhQAcAfANARQAdAoAjBJQAiBJAMAtQASBGgPA3QgKAkghA4QgUAhgUAZIgXAZQgHAuAPAvQAQA4ApAmQAPAPAQAJQAMAHARAGIBEAjQAiATANAOQAXAYABAlQACAjgTAeQghA4hNASQgeAIglACIgFAAQgGANgKAIQgNAKgZABQgVABgVAAQg0AAgzgMg");
	this.shape_25.setTransform(12.7412,27.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.7,99.6,-5.7,-45.4).s().p("ABJLlQgZgBgcgGIgygNQgegIgPgIQgPgIgOgPQgMgKgDgIQgCgGABgJIAAgOQABgNgHgfQgFgXgHgKIgLgNQgFgIACgGIhEg3QglgcgTgTQgWgUgQgUQgagfgMgbQgRgoAKgqQAKgqAigjQAQgQAlgdQAngdAPgPQA1gyAEg7QABgFADgEQACgEAEAAQABgZgMgeQgag4gLgcQgbhDAQhHQAOhIA2g8QAJgKAWgWIAfggQAxg4ANhBIAAgFIAWhnQAHAjgCAoIAAAMIADAbIAMCGQAFAyAMAaQAUAtBiBKQBfBKASAvQALAZABAyQAAAwgDAZQgGAngWAcQgKAPgYAWIgkAkQglArgBAzQgBA0AkAsQAMAOATARQALAKAYAUQAgAbAhAiQAeAbAHATQALAZgLAeQgJAWgXAgQgzBGg2AqQggAYgeAKIAEAAQgfAJgtAJIgOgBg");
	this.shape_26.setTransform(12.2337,27.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,99.2,-6.2,-45.8).s().p("ABqLaQgigDg8gbQgpgUgagPQgkgVgagXQgegcgSggQgTgkgCgkQAAgPADgVQgUgLgVgPQhGgugegqQgbgpgDgxQgDgzAZgnQAKgQASgRIAhgdQBXhJBNhUQgNgigSgcQgQgYglgsQgfgpgIghQgFgYADgZQAEgZANgVQAHgMAPgSIAXgdQAOgSAXgyQAfhFANgkQAKgeAqhtIADAGQADAIgFATIgCALIgBAZQAAAYAIAYQAKAjAfAsQA8BXBnBeIAxAuQAbAaARAXQAuA/gIA+QgFAqghArQgRAXgzAwQhEBCglA7IAAAJQABAtAYAcQANARAeARQApAYAHAFQALAIAOAOIAZAXQAOAMAfAXQAbAWAMAUQALAVACAaQABAYgIAZQgQArgqAjIgaAVQgPANgJALQgHAJgOAZQgMAWgKALQgQARgaAIQgRAFgSAAIgPgBg");
	this.shape_27.setTransform(12.6895,27.47);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.2,98,-6.2,-47).s().p("AgaLBQgOgCgRgKQgigRgZgcQgVgagLgfQgOgpAHgsQADgLADgJIAEgHIgHgYQgMgbggggIg8g2Qg1gzgVg1QgXg9Aag0QAMgaAmgnQBBhAAdgiQAyg3AVguIAAgPQABgPgCgLQgHgegwg2Qgvg1gEgfQgGglAigyQAkg1A6gtIAigYQAUgOAMgLQAUgRAQgZIAbgvIABACIASgkQgPBQgFAGIABARQACAhALAaQAXA1BOA0IA0AgQAhATARAPQA8AuAKA3QAFAdgLAbQgLAdgbAVQgMAJgYAPIglAXQgcAUgXAdQgRAVgTAhQgVAkgEAaQgFAiAQAnQANAdAcAoQAhAwAgAXIAZAQIAYAQQAPALAPAQIAbAdQAYAbAEAQQADAMgDASIgEAfQgBAGABAZQABAUgCAMQgGAYgdAfQhHBOh2AyQgLAEgHgBIgCgBQghAGg8AAIgYgBg");
	this.shape_28.setTransform(12.6852,28.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6,105.6,-6,-39.4).s().p("AAGMaIgXgOQgJgGgagMQgagFgMgEQgWgHgHgMQgDgGAAgGQgJgKgPgVQgZgngKgXQgVgvADg0QADgvAVgoIhGg6QgigdgRgRQgZgcgMgcQgNgiAFgmQAFglAUggQAlg7BMggIAygTQAcgMAQgPQARgOAKgYIgEgLQgLgZgjgzIg4hOQgYgigKgWQgPghADgdQACgVAOgYQAIgPAVgaIAggqQAfgnARgSIAbgcIAbgcQAlgpBHjHQACAGgBANIgCA4QAAAuAHAYQAJAfAjAvQAaAjA2BEQAeAnAUAUIATASQALALAGAJQAPATALAhQANAjgCAYQgCARgJAUQgGANgOAVQgZAngOAOQgJAJgPALIgZASQgPALgiAeIgbAZQgHAQgGAKIgQAYQgKAQgFAKQgNAcABAnQACBKAoAyQAWAdAsAbIBMAtQA7AmAZAsQAVAlgBAtQAAAtgXAlQgHAMgRAUQgTAXgGAKQgHAJgaAwQgUAjgSASQgiAgg1AJQgdAEgUgEQgKgCgNgFQgDAFgGACQgFADgGAAQgHAAgIgEg");
	this.shape_29.setTransform(12.5328,21.001);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.8,108.1,-6.8,-36.9).s().p("ABiMkQgKgBgCgEIgBgDQhQABg7gSQgkgLgbgRQgdgSgQgVQgcgpAQhSQAJgvACgRQACgjgMgbQgNgdg3gyQg3gzgOgdQgKgWgEgvQgEguADgZQAFgnAWgcQALgNAZgVQAdgXAJgKQAWgYANghQAJgVAJgpQAHgeABgOQADgZgGgTQgHgVgdgnQgdgmgHgWQgMglAXgrQAUgkAsgkQAZgUA8gpQA5gmAagXQAygrAcg0QAcg0ADg2IAEAAIABgYIABgIIAXB3QAEAEABAKQACAnAZAsQARAhAkAtIAaAkQAOAUAFASQAEAOgBATQAAAKgEAXQgIAzgKAYQgKAWgTAYQgLAPgbAdIg5BAQggAjgdAaQgaAZgJAJQgRAUgFASQgEALACAPQABAKAEASQAOA5APAkQAWAyAgAlQAYAcA9AyQA+AzAYAbQAiAoAPAuQAOAugHAtQgIAugdArQgdAqgvAiQgOALgdATQgZASgNAOIgIAJQgFAFgFACQgGADgGAAIgDgBg");
	this.shape_30.setTransform(13.3366,18.5625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.3,110.8,-7.3,-34.2).s().p("AhgMiQgcgDgQgGQgdgKgPgTQgXgeAGg8QAFhBAXgnQAFgJAMgRIASgaQATgigHgbQgFgRgRgQIgsgUQgogUgdgfQgkglgPgwQgQgzAOgvQAIgaATgdQALgRAbghIAzg9QAhgmAOgLIA+gsIAEgDQASgeAMggQATg3gNgnQgEgNgLgQQgKgQgMgKIgDgCQgagGgSgMQgWgNgTgaQgYghgCgeQgEgwAuguQAOgOAbgUQAfgYAKgJQAvgrAthTQAQgdAIgVIAVgzIALA1IAIAQIANAYIAQAjQAJAWAJAMQAJAMASAQIAcAbQAVAXALAeQALAegBAgQgBAbgKAVQgKAWgjAgQgdAcgVAGIgFABIguBLIgJAOIgBAFIAAACQgBAKgEAFIgLArIgBAcIABBLQAAAogFAXQgDAPgOAlQgHATgHAOQgEAIgGAKQAAAXAEARQAGAcARAYQANATAOAHQAHAEAQAFQARAHAeATQA8ApAdAcQAYAXAvA7QAcAlAIAUQALAfgHAlQgGAhgUAeIgcAmQgJANgRAfQgRAdgLAPQgPAUgcAbQgfAdgZAPQgUALgTAGQgEADgGACQgIADgUACQgvAAhUgNg");
	this.shape_31.setTransform(13.7808,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-156,77.6,258.1);


(lib.fireBit72_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.8,103.6,7.8,-12.3).s().p("AhsNoQgXgFgUgQQgMgKgQgVQgPgRgEgKQgDgJACgWIAAggQAEgNAMgVIANgVIhIhZQgkgrgMgbQgRgtATg7QAMgmAXgaQAdghA5gZIA2gWQAhgNATgLQAQgJAbgVIAYgSQACgKAIgPQALgTABgHQAFgSgKgVQgFgNgRgYQgYgjgQgQQgPgPgggcQgbgagJgUQgJgUADgaQABgRAIgdIAjh8IACgKIgCgEQgJgVgWgoQhKiZAxh4IAUgrQAMgaAFgRQAHgXgBgdQgUguAPgoQACgHAIgFQAJgFAGAEQAGAEgDAKQgDAJgCAJIAAACQAHAjABAZQAIAVAQAVQASAYAeAeIA3A0QAaAYANASQAZAhADAoQADAngRAmQgHAOgNAVQgPAXgHAMQgQAZgYAwIAIAKQASAZAGAPQAHAQgCAZQgDAcABANQAAAZAKAgQAGASAQAlIAMAYIALAPQADABADADQA7AyA2A2QASARAHAJQAPATALAgQASA2gKAmQgMAqg8AzIg0ApQgdAYgSARQgYAnAPAqQAIAUAZAgQAdAmAIAOQAVAlAAA4QAAAYgFAPQgFAVgPAOQgNAMgVALIgqARQgZAKgOAEQgMAEgMADQgFADgKADQgnALgVACQgOACgUABIgGAAQgVAAgOgDg");
	this.shape_9.setTransform(13.0114,10.3892);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.8,113.3,5.8,-2.6).s().p("AhyPTQgJgDgBgEIAAgDQgagEgPgFQgpgMgKgXQgHgOAHgTIATggQAkg7AFg+QAFhAgeg5QgBAAgog/QgYgmgEgcQgEgXAJgcQAGgUAPgfQAOgeAMgSQARgaATgTQAVgUApgaIBDgrQBPg6gLg1IAAgIIgJgRQgUgrgRgZQgGgIgqgyQgegjgLgZQgPgjACg4IACgpIABgPQABgOAXgkIAEAqIAAADIgBAcQABARADALQAEAKAKARIAbApQAQAXAQAQIAdAdIAxAwIAyAwQAVAWAKAMQAQASAJARIABAFIAVAXQAhAnALAZQAUAzgdBGQgQAmgcAnIggArQgTAZgHATQgXA+A1BNQALARAZAhQAWAdAJAWQAOAngOApQgOApgoAfQgfAYg+AcQhTAlgRAJIgVAMQgNAGgKAEQgRAFgPAAQgLAAgKgDgAh2nrIgBglIAAgIIgOgoQgEgLgMgUIgQgfIgFgMQgFgQAAgYQAAgNABgJIABgDIAAgGQABgLAFgWQAFgWAEgMQAFgSAIgMQADgGAKgOQAJgMAEgIQAFgKADgOIAGgaIAQhJIAAABIAAADIAIBTIAFA1QAEAUAUAbQAVAaADAUQACAMAAARQAAANgCARQgBAOgEAFQgDAEgFAAIgNAXQgMAVgGAMQgMAbgFAXIgWBSQgHgCAAgLg");
	this.shape_10.setTransform(14.966,0.6904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.2,131.6,7.2,15.7).s().p("AhkSEQgGAAgBgEIgBgCQgeAAghgKQgfgKgmgZQgjgXgNgVQgJgQACgRQACgRANgPQAOgQAigRQAugYAJgHQAlgZAUgqQANgcAJgyIANhLQAFgfgDgSQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgLgNgKgPQgKgPgMgZQgMgXgCgMQgCgHAAgLIAAgSIgEgkQgCgVADgPIAIgVIAKgUIAOgeQAJgQAWgWIApgrIAUgSQADgDAEgCIAAgWQgFgTAAgUQgBgRAFgdIAFgWIALgbQATg1gfhJQgDgIAAgFIgSgrQAYARADADIAmAoQAXAXAJASQAGAJAEAQIAJAZQAKAcAaAfQAQASAcAbQA8AUAsAkQAPANAHALQAIAPAAAaQAAAkgJAiQgPBCguAhQgNAJgcAPIgQAIIgHAHQgpAsgNAaQgUArATAiQANAWAqAbQA3AlAKAIQAeAZAKAgQAKAggLAfQgJAZgbAdQgRASgjAeQhKA/gvAgQhGAyhJAbQgGACgFAAIgDAAgAi+vyQgJAAgEgCQgEgBgCgEIgFgGIgHgGQgEgDgCgFQgGgMABgUQABgOADgHIAEgJIAAgKIAgguIABABQADACAAAHIABATQACAGALALQAOAPAMAKIAQAOQARASgCAdQgBAIgFADQgEACgJAAg");
	this.shape_11.setTransform(13.6068,-17.6125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.7,78.6,8.7,-37.3).s().p("AiSKYQgOAAgPgBQghgDgbgNQgbgNgVgWQgQgRgOgbQgbgygBgnQAAgzAngkQAMgLATgMIAkgVQBJgrA7guQArgiARgaQASgdAEg0QAHhMgJhOQgQhcgFguQgHhQAUg4QAGgQANgcIAUgrQAWg0ABg3QAAgvgPguIgKhEIAiA7IARAUQA+BDAKAPQAIAMAJATIAOAfQAMAXAYAiIAmA4QArBEgGAzQgEAhggA0QgmA+gJAXQgOApALArQALArAiAlQAKALAZAXQAZAWAKANQAqAxAAA/QgBA5giA7QgXAmgeAaQgRAPgaAQQgPAKghASQhJAngnASQhAAdg8AMIgZAFIgDABQAEADgDADQgCADgIACIgPADIAAAAQgEADgEABIgEAAQgFAAgEgCg");
	this.shape_12.setTransform(12.075,35.3955);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.7,78.2,8.7,-37.7).s().p("AiSKUQgOAAgPgBQghgDgbgNQgbgNgVgWQgQgRgOgbQgbgygBgnQAAgzAngkQAMgLATgMIAkgVQBJgrA7guQArgiARgaQASgdAEg0QAHhMgJhOQgQhcgFguQgHhQAUg4QAGgQANgcIAUgrQAWg0ABg3QAAgvgPguIgNg8IA2BHQA+BDAKAPQAIAMAJATIAOAfQAMAXAYAiIAmA4QArBEgGAzQgEAhggA0QgmA+gJAXQgOAqALAqQALArAiAlQAKALAZAXQAZAWAKANQAqAxAAA/QgBA5giA7QgXAmgeAaQgRAPgaAQQgPAKghASQhJAngnASQhAAdg8AMIgZAFIgDABQAEADgDADQgCADgIACIgPADIAAAAQgEADgEABIgEAAQgFAAgEgCg");
	this.shape_13.setTransform(12.075,35.7955);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],9.9,81.4,9.9,-34.5).s().p("Ai8KqQgFgBgDgDQgEgCABgDQAAgIAVgCIAegDQgggCgagHQgrgJgjgUQgkgTgWgaQgVgbgEgeQgEgeAOgcQAIgPAOgRIAdgfIBthuQAsgsATgbQAegpACglQACgcgQglIgfhAQhCiIBLhVQAJgKARgPIAbgZQAcgbAYghQAbgkAOghQAehCgNhGQgLg2grhmIAWAYQAsA0AvAsQBCA+ASASQAuAuAbAnQAhAwAIAvQAKAzgVAtQgHAOgvBCQgjAxgBAiQAAAdAVAeQAQAZAfAeIA3AzQAfAeANAZQAOAaAFAiQADAXgBAmQgCAfgEAUQgFAcgNAWQgSAfguAlIgKAIQgNAPgSARQguAugpAdQg0Amg6ATQgXAIgpAJQhHAQhPAJIgKAAIgHAAg");
	this.shape_14.setTransform(10.8967,32.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.4,86.9,7.4,-29).s().p("AiiLUIAEAAQgegKgggYQg2gqgzhGQgXgggJgWQgLgeALgZQAHgTAegbQAhgiAggbQAYgUALgKQATgRAMgOQAkgsgBg0QgBgzglgrIgkgkQgYgWgKgPQgWgcgGgnQgDgZAAgwQABgyALgZQASgvBfhKQBihKAUgtQAMgaAFgyIAMiGIADgbIAAgMQgCgoAHgjIAWBnIAAAFQANBBAxA4IAfAgQAWAWAJAKQA2A8AOBIQAQBHgbBDQgLAcgaA4QgMAeABAZQAEAAACAEQADAEABAFQAEA7A1AyQAPAPAnAdQAlAdAQAQQAiAjAKAqQAKAqgRAoQgMAbgaAfQgQAUgWAUQgTATglAcIhEA3QACAGgFAIIgLANQgHAKgFAXQgHAfABANIAAAOQABAJgCAGQgDAIgMAKQgOAPgPAIQgPAIgeAIIgyANQgcAGgZABIgOABQgtgJgfgJg");
	this.shape_15.setTransform(13.3663,27.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.9,85.3,7.9,-30.6).s().p("AhaK8IgCABQgHABgLgEQh2gyhHhOQgdgfgGgYQgCgMABgUQABgZgBgGIgEgfQgDgSADgMQAEgQAYgbIAbgdQAPgQAPgLIAYgQIAZgQQAggXAhgwQAcgoANgdQAQgngFgiQgEgagVgkQgTghgRgVQgXgdgcgUIglgXQgYgPgMgJQgbgVgLgdQgLgbAFgdQAKg3A8guQARgPAhgTIA0ggQBOg0AXg1QALgaACghIABgRQgFgGgPhQIASAkIABgCIAbAvQAQAZAUARQAMALAUAOIAiAYQA6AtAkA1QAiAygGAlQgEAfgvA1QgwA2gHAeQgCALABAPIAAAPQAVAuAyA3QAdAiBBBAQAmAnAMAaQAaA0gXA9QgVA1g1AzIg8A2QggAggMAbIgHAYIAEAHQADAJADALQAHAsgOApQgLAfgVAaQgZAcgiARQgRAKgOACIgYABQg8AAghgGg");
	this.shape_16.setTransform(12.9148,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.5,95.4,8.5,-20.5).s().p("AhwMiQgFgCgFgFIgIgJQgNgOgZgSQgdgTgOgLQgvgigdgqQgdgrgIguQgHgtAOguQAPguAigoQAYgbA+gzQA9gyAYgcQAgglAWgyQAPgkAOg5QAEgSABgKQACgPgEgLQgFgSgRgUQgJgJgagZQgdgagggjIg5hAQgbgdgLgPQgTgYgKgWQgKgYgIgzQgEgXAAgKQgBgTAEgOQAFgSAOgUIAagkQAkgtARghQAZgsACgnQABgKAEgEIAXh3IABAIIABAYIAEAAQADA2AcA0QAcA0AyArQAaAXA5AmQA8ApAZAUQAsAkAUAkQAXArgMAlQgHAWgdAmQgdAngHAVQgGATADAZQABAOAHAeQAJApAJAVQANAhAWAYQAJAKAdAXQAZAVALANQAWAcAFAnQADAZgEAuQgEAvgKAWQgOAdg3AzQg3AygNAdQgMAbACAjQACARAJAvQAQBSgcApQgQAVgdASQgbARgkALQg7AShQgBIgBADQgCAEgKABIgDABQgGAAgGgDg");
	this.shape_17.setTransform(12.2634,18.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-133.2,75.7,235.29999999999998);


(lib.fireBit62_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.3,112.5,-2.9,-55.4).s().p("AhEMvIiAgCQgrgBgVgDQgjgEgZgOQgpgVgfg1QgegygIg1QgIg7AWgvQANgfAgghIA5g4QAwgvAxhEQAegrA1hSQAog/ARghQAdg3AIgwQADgRAEhfQADhEATgmQASgnA1guQBEg5AQgUQANgQAVggQAWgiALgPIAlgpQAXgYAKgTQAVgkAGg8QADghAEhFIABgFIAzDzQAJBbANArQAEAOAQAuQANAlAFAXQASBVgjBmQgOAogYAvQgRAggeAxQgbAsgLAXQgUAlgJAhQgJAigCAsQgCAbACAzQACA+gBAfQAAA0gGApQgPBog2BCQgZAfg+AvIgkAaQgVANgTAFQgWAIgsAAIgMgBg");
	this.shape_22.setTransform(30.7372,48.4056);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.7,110.6,-7.3,-57.3).s().p("AjmMnQgYgDAAgOIAAgDIgcgJQgYgJgQgMQgSgOgcglQgegsgIgTQgKgYgDghQgDgWABglQAAg7AEhIQADgrAHgUQAJgcAdgfQAjgoBPhAQBShCAigkIAbgfQAQgRAOgLQAMgJAZgNQAFgZABgeIAAhLQgChXADhXQACg0AHgfQAJgtAUgeQARgYAfgXQAMgJAtgdQBFgtAigrQAcgjAMgkQgEgqALgkQADgKAEgDQAkCnAOAdQANAbAcAvQAeAyAMAXQAdA3gCApQgDAdgSAiQgJAPgdAqQhpCWgrC1QgLAtgGAtIAEAJQAgBJANAnQAVA/ACA2QADBAgbAlQgHALgQAOIgaAYQgMAOgOAXIgXAmQg6BehpAwQhPAkhQAAQgcAAgcgEg");
	this.shape_23.setTransform(35.1058,50.3844);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-7.7,112.9,-7.3,-55).s().p("AiSM9QiLgNg5gJQgmgFgPgPQgWgVAFgmQACgNAGgTIAKgeQARg5gDh4QgDh5ARg5QAYhQBchhIBNhPQAsguAagkQASgaAYgqQAcgwAMgZQAUgqAIgkQAGgbAIiEQAFhiAjgyQAMgTAVgUIAngiQAlgiBKh3QACgFAEgEIAIghIAEgCIACgEIAAgBIABgBIACAMIgIAQIAJgPQAbB/AKAOQAIAMArAuQAgAjAMAcQAaA8gZBcQgHAahDCuQguB4ACBSQAAAqATBWQASBTgBAsQAACFhzCRQggAphGBJQhGBLggAnQgUAbgJAIQgSATgSAHQgRAIgXAAIgGAAIgjgBgAD7sVIACgBQAAAAgBgBIgBACg");
	this.shape_24.setTransform(35.1518,48.0175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.1,118.1,-5.7,-49.8).s().p("AmCMvQgfgWgKgVQgJgUABgoQABghAEgNQAGgWATgYQARgVAkghQAfgcAQgRQgthXgJhIQgIg5AMg1QAOg5AigpQATgXAlgbQApgeATgQQAXgTAagaIAtgwIBjhvQAjgmAXgdIATgbIgJgYQgkhnAOiPQAFguAMgbQAPgjAwgrQA6g0APgUQAjgwADg9IAKgpQBdClAoAsQAfAhAMAbQAQAngIAuQgHArgZAmQgSAagoAoQgrArgRAWQgoA3gSBRIACAHIAtCQQAYBPASAnIAZAwQAQAeAHATQAYA9gNAtQgKAjgmAlIhCA+QgKAKgJAMIANBFQAGAiABARQACAcgGAWQgGAUgOAUQgKAOgTAWQgyA2g2AuQgoAjghARQg4AbhQABQAAAFgEADQgEADgKAAQihgBhlhEg");
	this.shape_25.setTransform(33.5256,42.8375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5,118.7,-4.6,-49.2).s().p("AjYN7QgJgCgIgHIg9gyQg5gwgXgeQgngzACgzQACgsAmg5QAzhOAHgTQAWg0gDhuQgDhxASgyQAJgYARgcIAhgxQA7hQAigkQAUgWApglQAsgoASgTQBFhIAShHQAHgcABglIAAhDQAAhLAJhHQAKhPAfgiQAKgNAUgOIAhgXQAogeAEgjIABgNQABgHACgFQACgHAGgDIACgBQBGBhARAOQAmAgAPAwQAQAygOAtQgGATgOAYIgZApQg3BgABB5QAABzAxBrIAeA/QARAlAGAcQAHAlgEA5QgEBBgOAhQgLAYgXAdIgpAwQg5BFggBVQggBWgCBZIgCA0QgDAdgLATQgPAcgvAaQheA3hWAKQhLAJg9gWQADAHgDAFQgDAGgHAAIgGgBg");
	this.shape_26.setTransform(32.4535,42.2313);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4,125.6,-3.6,-42.3).s().p("AhoPXIgYgBQgSgBgKgEIgEgCQgCgEgJgIIgdgVIgggXQgVgSgNgEQgJgDgNABIgYgZIgggdQgTgRgLgOQgXgdgUg5QgiheATg9QARg3BJg7QAngeASgQQAhgbASgZIAIgMQgQgxgEgaQgFghADhIQACgnADgSQAEggAKgXQAZg5BGgqQAYgPAmgRIA/gdQBQglArguQAbgdAOgjQAPglgDgkQgBgKABgHIgCgMQgGgugQgiIgYgsQgPgbgGgSQgJgeABg5QAAgvAJgXQAHgSAZgfIBQhlQAcgiALgVQASgigCgeQgBgPABgFQABgFAEgDQADgDAEgBQAyB3ALAVQAeA6AVAZIAVAZQAMAOAFANQANAigUAoQgMAYgiAmQgjAlgQAUQglAwgYA5QgDAWAAASQgCAxANAmQANAmAhAsQAUAaApAxQBNBhgTBNQgFAXgQAZQgKAPgXAdQgmAygVAhQgdAvgPArQgXBDgBBkQgBBCAHBBQAFArAAAQQACAhgHAZQgMApgoArQgeAggsAfQggAXgzAeQghAUgTAJQgfAPgbAGQgOADgPABQgEACgHAAIgGgBg");
	this.shape_27.setTransform(31.4826,35.3571);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.6,125.8,-6.2,-42.1).s().p("AjMO/QgxgJgcgNQgogTgMghQgHgSAAgdIABgwQgBgYgKgdIgUgzQghhTgCg8QgEhUAtg3QANgQAYgVIAogiQAqgoAMgrQAHgZgDgmIgFhAQgEhHAbhAQAbhEA1gqQAkgcBRgiQBSgjAigaQAagUAIgTQAFgOAAgfQAAhEgFgiQgDgWgJglIgNg7QgHgpgBhUIABgsQADgZAHgSQAKgYA2g5QAtgvABgmIAAgNQAAgIACgGQABgDADgCQATAYgBASQgCASAiAMQAiALAdAeQA2A7gCA1QgBAigYAjQgSAagjAgQgpAkgOARQgdAhgIAhQgSBLBMBZQAUAYApAtQAiAoAOAjQARAngCAsQgCAsgUAmQgMAVgbAhQggAogJAOQgzBNgEBwQgDBMAZB6QASBcACAoQAEBLgaA1QgZA0hEAyQhNA4hcAdQhbAdhggCIgCAAIgBABQgEAFgJAAIgJgBg");
	this.shape_28.setTransform(34.0481,35.17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.7,128.5,-5.3,-39.4).s().p("AjPPOQgagGgpgQQg5gVgWgaQgVgbABgmQACglAVgeQAKgOAagYQAFgqgYg4Iggg+QgSgmgHgbQgPg2ARg5QARg4ApgmQAWgTAxgeQA2gjAngjQABgKgBgOQgGhbABhMQAAg6AIghQAKgmAXgfQAXggAggUQARgLAagLIArgTQA7gbApgoQAuguAOg2QAGgWADglIADgfIgEgfIAAgBQAAgOgphUQgagkgGgZQgDgOAAgWQAAgcACgQQAEgZAMgQQAIgLAbgVQAbgVAagaQANgOADgMQABgFgDgQQgCgOAEgHIAEgGIAfAfQAEAXAfASIAZAOQANAIAIAJQAYAZgGAoQgDAagTAoQgKASgHAKQgNASgnAfQgkAdgOAWQgHALgFAOQAGAOABAwQABArACgWQAGAYAOAYQASAjAmAtQAxA6AMASQAgAsAKApQAHAggHAWQgHASgTAWIg1A2QggAggPAaQgOAXgOAnQglBtADByIAXAgIAKAQIAEADQACADABAEQBEByAQCEQAFAjgGAXQgGAUgYAiIgxBEQgmA2gZAYQgnAmg7AeQgqAVhGAZQguAQgbAHIgcAGQgFADgKACIgSABQgYAAgbgHg");
	this.shape_29.setTransform(33.1859,32.4615);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.5,129.6,-4.1,-38.3).s().p("AiXPdIgDAAQgPACgQgCQgagCgagNQgsgVgmgxQgfglgNgmQgQgtAMgmQAGgQAPgZQARgcAFgLQAUgsgEg/QgCgegRhRQgOhCADgvQAFg+AigmQAQgSBGgoQA3ghAOgkQAIgTgBgcIgEgwQgGg3AHg6QAIhBAXgmQAbgwBahAQBbhAA8hvQAWgqAMggQAbAzAWAZQAgAjAkAZQAfAYAOAYQAlA/gnBiIgjBLQgWAugIAgQgRBDASBZQAJAuAkBtQAfBeAGBAQAKBYgfBCQgNAbghArQgkAwgMAVQgKARgSAnQgQAlgMATQgTAfggAfQgUATgqAiQggAZgPAKQgbASgYAHQgeAJg6AAQgiAAgSgDgAC+rPIgNgqQgPg4AVhGQAFgQAEgHIARgSQATgUAagrIABADQAHAdAgAdIAQAOQAJAJAEAHQAIAKAHAYQAFAQgCAJQgBAPgSAUQgtAzg3AxQgRAOgJAKQgDgWgDgPg");
	this.shape_30.setTransform(31.9496,31.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,136.2,-3.5,-31.7).s().p("Ah+Q1QgigEgggUQgYgPgegdQgggigRgQQglgigRgTQgdgggJgeQgIgaACgxQAAgaACgMQACgVAHgQQAJgUAUgUIBAg1QAnggAOgdQAGgLADgNIgQgPQgUgTgKgNQgdgjgMgvQgLguAKguQAGgbAMgTQAOgVAagUQAYgRAmgSIBAgfQA6gcAgghIgFgQQgOgjgEgQQgJghgBhBQgBhCAGgkQAKg3AdgiQAPgRAigZIBQg5QAigYANgNQAdgbAPgiQARgkgCglIAAgJQgGgTAJgHIACgCQA2BTANAPQAaAgAjAUIAPAJQAJAFAFAGQANAOACAhQAFBCgYA/QgYBAgvAuIgrAoQgpAlgeAuIAOAUIB5CqQAwBEAQAmQAcBBgQA3QgGAYgRAbQgKAQgXAdQg/BShFBfQgBAxAFBGQADAkAAAQQgBAdgHAVQgLAhgcAaQgbAYgjANIgdAKQgTAGgKAFIgZAOQgPAJgJAEQgQAFgeABIgHAGQgXAPgdAAIgNgBgADWt1QgDgFgCgMIgFgOQgDgIABgNIAAg/QAAgLABgEIAEgKIAIgNIAOgNIATgOQAMgGAEgFIAIgBQAGANAEAXQAFAcABATQAAAOgDAJQgFAPgSASIgNANQgIAIgEAHQgFANgEAGIgKANIgEgHg");
	this.shape_31.setTransform(31.3811,24.7614);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.8,142,-4.4,-25.9).s().p("AhlRcQgFABgIgBIhPgHQgZgDgNgDQgVgFgOgJQgbgTgNgsQgLg0gIgZQgGgVgUgrQgSgpgGgYQgKglAEgmQADgmARgiQAJgUAagmQAZglAKgVQAUgtAAhDIgGh1QgDg0ALgcQAJgYAYgYIAugoQBDg5AphDQAuhKAFhOIABgvQAAgdADgSQAKg/Azg5QAngtBFguQAsgdgHgbIgCgIIgCgEQgCgDABgFIAAgBQAAgFAEgDIADgCQATAfgEAOQgEANAlAEQAkADAfAPQAeAUAKAzQALA8gSBdQgZCBgBAZQgFBFATBDQAHAaARArQAUAyAGATQAbBTgRA8QgIAdgcArQgiA1gIAQQgVAqgNBUQgQBfAEA3IAGBAQACAlgIAZQgHAVgRAWQgLAPgXAWQgjAjgaAVQgjAdghAQQg3Abg9ABIgGAAQgXAAgWgDgADQvFQgFgIgBgRQgBgfAMgcQAMgdAXgUIANgMIAHgIQADAFABAKQAFAngHAUQgFALgPATIgaAfIgPAUIgBgCg");
	this.shape_32.setTransform(32.2408,18.9031);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.7,149.1,-4.3,-18.8).s().p("AiXS4QgQgDgegKQgdgJgQgGQgYgKgRgNQgXgQgQgYQgKgQgCgNQgCgKADgUIADgZQADgWAEgKIAIgNIAJgOQAJgOAEgPQgQgLgIgHIgageIgbgYQgQgPgHgMQgLgTgBgaQgCgTAEgeQAFgrAJgUQARglA0gjIArgbQAZgQAPgOIAIgIQgTgrgHgYQgThDANhwQAHgyANgYQAQgeAngaQAXgOAxgaQBhg4AxhYIgJgdQgXhHgEgmQgKhJAWhHQALggAPgPQAIgIAMgIIAWgNQApgYAfgkQAWgYgCgUIgCgQQgBgJAEgEQA9BFAPALIAWAQQANAKAHAJQALAOACATQADASgHARQgEAKgLAOIgZAhIgeAtIgXAoIgCAVQgBArASAmQAPAhAiAmQAUAUAqApQBPBQgCBGQgBAvgoA7QgZAlg5A+Qg7BBgYAhQgiAvgWA1QAIARANAUIBLB4QATAeAIAPQANAZAGAXQAHAagCAZQgDAcgPAUQgJAMgPAMIgcATQgoAagpAjIguAoQgbAWgWAOQgVAOgVAIIgCACQgVAQgwARQgYAJgNACIgQABQgOAAgQgDgADUx3QgEgaABgMIAAgLQAAgGACgEQAEgHAJgBQAGAAAFAGQADAEABAHQAFAegTAVQgFAGgGACIgBAAIgBgJg");
	this.shape_33.setTransform(32.107,11.8181);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.5,115.7,-4.1,-52.2).s().p("AkQNFQgjgHgOgOQgYgXAFgxIAQhVQAKgzgGghQgFgdgeg7Qgcg3gDghQgDgwAhgvQAcgoAxgfIArgbQAXgSAIgTQAIgRAAgYQAAgLgDggQgIhEAGhEQAGhBAVggQAPgXAcgUQAQgLAkgUIBXgwQAdgQAOgKQAWgRAKgUQAQgggMguQgFgSgag+Qgbg/AAg8QAAhEAkgvQAOgSAigiIAphQIAKAJQBLA+AFAGQATAXACA1QAFBRgGBVIgCAtQgBAZAEAUQAIArA4BRQA1BMAFAxQAGBBgwBBQgSAZgdAaIg1AtQghAbgJAUQgMAaAHAiQAFAWAQAnQAyB4AdB9QAHAiACAVQACAfgJAXQgIAUgSAWIgjAjQgyAxgnA8IgeAuQgTAagTAOQgdAWgsAGIgBAFQgDAKgTABIgWABQh4AAhzgZg");
	this.shape_34.setTransform(31.9507,45.2606);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.4,121.8,-4,-46.1).s().p("Ag6OWIgCgBIgOABQgVAAgCgMQgBgFADgFQgKgDgOgBQg7gIh1gYQgYgFgNgEQgUgHgMgMQgdgdAHg9QADgYAIgOQAGgLAPgMIAZgUQAWgSAfgrQANgSAFgKQAJgSACgcQgUgNgUgSQgTgQgognQgRgRgFgKQgGgNABgcQAAgbAGgRQAFgQAUgaQAZggAPgNQASgQAYgMIAugQQA3gRAfgSQAfgRALgWIAEgIQgagrgMgZQgihGgEg9QgDgkAKgXQAHgPAOgQQAJgJATgRIBDg3IAjgbQAVgRANgMQAggeAWgfQAcgoAFgiIAAgFIABhQIgBgCQgGgMgQgUIgVgbQgUgYgGgRQgIgVACgpQABggAEgPQAJgeAXgTIAcgUQARgMAIgLQALgRAAggIgBgHQgBgJACgGIACgGQACgFAEgDIAEgBIAcAzIAPAWQAeAzgMA7QgFAagWAsIgaA4QgLAVgCANQgCAKAAATQAGAFAEAQQASBJBFA9QAfAbA/AmQAcARAJAPQAIAPAAAiQgBAkgEAOQgHAZgaAfQgZAfgeAcIg1AtQggAbgSAUQgPAQgLARQAqBSA3BMIAYAiQANATAIAQQAZAxAAA7QgBA4gXA1QgmBWhUA9IAAAoQABAzgDAZQgHApgVAcQgUAZgxAZIgSAJQg6AcguAIIAAAAQgDAGgIABIgDAAQgFAAgFgDg");
	this.shape_35.setTransform(31.874,39.1111);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.7,120.8,-3.3,-47.1).s().p("AhgOCQg3AAg1gUQhHgagyg2Qgyg1AGgzQAEggAxg9QAtg3gEgmQgDgTgOgZQgSgagIgOQgXgpACgxQACgxAagmQAOgVAXgVQAOgMAegXIBSg9QAdgWAOgPQAWgXAGgYQAFgVgEgbIgLgxQgOg9ALg4QAMg+AogmQAJgIAZgTQAVgQALgMQAmgoAHhKQACgWAihuIAEgLQAEACAFAJQAOAbAdAYQAVASAjAVIA6AkQAgAWAUAWQAYAbAKAgQALAjgLAeQgFAOgKAQIgUAaQgfAogXAmQgoBAgBAvQgBAsAfBAIAkBLQAUArAKAhQAaBegiBDQgKATgbAjQgbAigJAUQgVAsAFBcQAGBjgPApQgPAqgjAiQg0A1hMATQgiAIghAAQgmAAgmgLgABsquIgGgWQgCgOgEgIIgIgRQgHgQAEgeQADgaAHgOQADgGAKgOQAKgMADgIQAEgMAAgUIAAgDIAJADQAPAGALALQALALAEAPQAEALABAaQAAAOgDAJIgIAPIgzBWIgIAUIgCgFg");
	this.shape_36.setTransform(31.1054,40.1457);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.2,127.3,-1.8,-40.6).s().p("AiZPBQgPgKgSgWQgkgrgSgSQgegigcgWIgnggQgVgUgIgUQgIgTADgWQACgVAKgTQASghAqgaIAdgSQAPgMAGgNQAIgTgGgeQgHgbgcg9QgZg3gFghQgIg5Afg2QAfg1A2gWIAdgKIAdgKQARgJATgQIAgggQAZgbAHgRQAGgOACgSIAAgYQgKgSgDgQQgEgQAAgbIgBhiQAAgmAFgPQAIgYAYgYQAOgOAdgbQAsgqAZg5QAZg5AAg9QAAgOADgHQACgDADgDIAhAoQAUATAjARIA8AdQBNAnAJA3QAHAqgkA4IgdAsQgRAZgHAVQgUA2AVBRQAKAkApBsQAiBZAHA5QAFArgHAbQgIAfgZAhIgwA3Qg/BHAHA5QACASAKAWIATAlQAXAxAEAwQAFA2gWAqQgVAngzAmQhgBKhZACQgbABg5gKIgGAEQgXARgPABIgGABQgRAAgSgNgAB8tuQgOgfAFgUIAJgZIADgOIAEgFQAdA4ADALQACAIAKAbQAHASgdAhQgUglgJgVg");
	this.shape_37.setTransform(29.6318,33.6309);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,129.1,-3.5,-38.8).s().p("AhMPiIhBgPQgwgLgYgJQgngPgXgXQgdgbgZhBQgbhCgVhGQgHgXgCgOQgDgVAFgRQAGgTAXgXQAgggAEgGQAZgiAFg6QADgfgCg1QgCg8ABgXQAEhmAvg2QAVgYBCgoQA8gkAWgfQAVggAGgwQADgigEg1QgFg/ABgYQACgxAQgiQAKgVAVgcQAcgkAHgLQAVgjAIgoQAGgdAMhjQAUAWAPAOQA+A4AYAMQAVALANALQAXAWAMAlQAIAYAGAuQAFAgABASQABAdgGAWQgEAOgYAzQgUAoABAbQACAYAPAbQAGALAZAiQAoA3AeA8QAfBAgDAsQgCAjgVAlQgQAbgfAkIgbAhQgOATgHASQgTAxAXBQIATBAQAKAkABAcQABAygYA3QgTAqgnAzQgsA8grAjQg3Atg5AMQgcAGgkgBQAAAEgDAEQgDAGgGACIgIAAQgGAAgKgCgAB0uxQgCgaANgYIABAOIgBAtQgBANgCAGIAAABQgHgNgBgQg");
	this.shape_38.setTransform(31.3318,31.8481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.6,117.9,-2.2,-50).s().p("AhGNiQgqgNhEgoQgrgYgRgRQgVgVgNgdQgfgWgcglQgTgZgegyQgIgNgGgNQgJgZAAglQgChTAjgpQAQgTAogZQApgaAQgRQARgSAIgYIAFgSQgQgngFgbQgFgZAAg0QABg3AIgcQAIgYAfgsQAUgfAQgOQAPgPAjgSQAogVANgKQALgJAZgaQAdggAMgUQAagoAJgxIABgIIgYgiQgZgrgHg1QgHg0ANgzQAFgTAFgNIAPgYIARgWQANgTAbg0QAMgXAFgNQAHgVABgSQABgIgFgeQgCgLADgGQACgEAEgBQBNBwAiAcIATAPIARAPQAWAUAKAeQALAdgDAeQgCAVgRAuIgVA4IgRAnIAHAXQAQAzAjAtIAqAwQAZAdANAWQAiA6AABOQAAAigJAWQgJAagfAiQhGBNhXA3IAEATQAMAoAjA2QARAaAcAkIAXAgQAMASAGAQQALAhgJAgQgFAVgYAlIiADJQgiA1gXAaQgkAogoAOQgaAKgdAAQgeAAgjgKg");
	this.shape_39.setTransform(30,43.0813);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.2,117.7,-3.8,-50.2).s().p("AhxNsQgSAAgIgDQgJgEgEgGQgXgEgNgHQgqgUgegzQgUgjgVhAIgoh5QgSg1gGgeQgKguAEgmQAGgwAegyQAVgiArg0IAZgfQANgSAGgRQAHgTABgYQABgPgCgdQgChQAIg2QALhIAigzQASgbBEhBQA6g3ASgrQATgwgGhlQgGhpANguQAGgSAfg7QAYgvADghQABgNAFgJQADgGAFgBQAYAfABADQAIATAYAWQAkAgADAEQAkApADBOQABARAAAuQgBAoADAXQAJBPAyBNIA6BYQAeA1gDArQgDAqgrBAQgvBGgIAiQgLA0AfBTQAmBoADAhQAEApgMA0QgIAdgWA9QghBYgWAuQgjBJgsAvQg1A5hIAZQgTAIgSADQgCAEgDAEIgJAIIgKAGIgOAMQgIAHgHACQgHACgMAAg");
	this.shape_40.setTransform(31.669,43.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-0.4,118.3,0,-49.6).s().p("Ah1NiQhzgMhDhMQhDhMgJgaQgJgeABg2QABgsAFgVQAGghAgg+QAihCAQgZQAog9A3gxQAYgVAIgMQAQgUAAgUIgBgVQABgGAEgEIAAAAIgKhCQgVijAoifQAQg/AYgcQALgOAkgcQB3hdAkhjIAIgWIgBhPQAAgiAFgRIAFgRIAJgTIAGgVIAJgPQAFgJABgGQABgGgBgRQgBgOAFgHIAEgEQAcA2AAAFIAAAsQAAAfgBAJIgDATQgCANgGAVIgCAFQgDAcAPAhQAKAVAYAiIBTBxQAmAzAPAfQAZAxgBArQgBApgcA2QgaA2glAuIggAmIgIALIAAAVQgBATAEAMIAEAJIAWAZIAqAqQAZAZAMAVQAgA6gVBQQgHAegRAkQgJAVgXAqQhXCmgoB0QgRAxgHAPQgQAjgVAWQgqArhFAAQgRAAgBAJQAAADgTAAQgbAAhFgIg");
	this.shape_41.setTransform(27.872,42.6839);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],0.8,115.2,1.2,-52.7).s().p("AhJNLQg4gCg3geQgzgbgpgvQhAhKgtiFQgOguAAgZQABgiAUggQARgdAegYQAUgRAmgXQAtgcAOgLQAogdApgrQAdgfAqg0IAIgJIgIhYQgPjBAki9QALgzAMghQAPgtAXggQAJgMATgUIAdggQAjgqAahCQAMgdAchbQAEgKAEgGQAXBLgDAzQgEAzASAdIAxBNQAaAtATAaIAdApQAjBAgkBmQgJAbgYA1QgOAngHAeQAVAaAQAXQAnA5AUA2QAQArAAAhQgBAfgQAkQgFANgbAyQhUCegQC0IgFAwQgDAbgIAUQgeBQh1AsQhCAZhEAIIABAEQgBAIgJAEQgHADgIAAIgDAAg");
	this.shape_42.setTransform(26.5999,45.7161);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.3,108.4,-4.9,-59.5).s().p("Ag/MaIgtgEQgtgEgWgEQglgGgbgLQgXgJgqgZQgxgdgTgRQgigggIglQgEgSADgcQAEgoAPgmQADgIAEgDQAEgDAFACIAiiFQAXhPAghXQAjhgAig0QAagkAogqQAxgyBahLIgBg+QABihAghlQAKgeAMgXQAOgaAbggIB8iQIAmgtIgCAEIgGANQACAGgBAMQgHCFABAbQAABbAWBCQASA0AnA8QARAcA4BMQAaAjAHAUQALAigMAoQgKAjgaAgQgSAXgjAeQgtAogKALQgqArgcA2IgDAGIAIAYQAHAaAEATQAGAjAABAQgBBsgPBNQgVBjgwBFQgjAygpARQABAFgDAGQgGAJgJgBIgIgCIgIgFQgMgEgQAIIgdAMQgFACgJAAIgRgBg");
	this.shape_43.setTransform(32.7793,52.5319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_22}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-109.3,90.7,243.10000000000002);


(lib.fireBit52_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-129.2,137.8,-129.2,-31.6).s().p("ABqPZQgEgCgBgFIgRgCQglgIg1gWQhbgng/goQhOgzgyg9QgogxgNgwQgLgjAAhGQAIjogBh0QgBjJgmiMIgbheQgPg3gDgoQgEhHAehtQAniPAFgkQALhJgLhLQgLhKgfhEQgDgHAAgFQA3BBACAHQAIARALARQAVAgAvAwIClCoQAdAdAOARQAWAbAMAaQASAoAEA/QAFBcgdC5QgXCJgCBWQAVg5AegpQAlgxBUg/QBhhIAggiQAcgeAKgbQAGgOACgUIANjKIAAACQAGAGADAOQALBBAdBoQAkB/AJApQAvDMg4CJQgLAbg1BeQgqBKgKAzQgIAqAFA6QAEAhAJBDQAQCFgiBbQgUA3gnApQgMAMgNAKIACAEQABAMgTAHQgRAGgTABIgSAGIgKACQgEAAgCgCg");
	this.shape_18.setTransform(37.9806,80.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,144.4,-130.1,-25).s().p("AgUQYQgcgCgwgSQgkgOgQgJQgRgLgcgcQgdgegJgMQgbgigXg+QgegggfgyQgshEgKguQgHggACgpQACgXAGgyQAUiGANg5IAShDIARhEQAUhQAIhRIgJgTIhLibQhVjEAfiLQALguArheQAphZAJgzQAGgmgBhOIgBh3QAAgLADgHIADgEIAYApQAGAyAeA5QASAjAqA/QAsBBAaAZIAlAiQAWAVAMAQQA1BIgWCEQgLA9gnB1IgtCIQAOA1AOAgQATApApA5IAfArQACggADgdQAIheAkgxQATgZAlgcIA/gtQBIg4AuhTQAig9ANhDIAAgIQAAgEAQglIAMA2QACBKAUBcQALAwAkB+QAQA7ACAaQAHBFgjBPQgZA5g3BOQg4BPgXAlQAIBmAZBbQAgB0ADAMQAOBJgRA2QgNArgkAoQgcAfguAhQg+AtgyAPIgIACIAAADQAAANgXAEQgoAHgYAAIgLAAg");
	this.shape_19.setTransform(38.8257,74.4065);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,146.6,-130.1,-22.8).s().p("AgaQ6QhHgBgwgTQhAgYgbgzQgLgTgJgjQgLgrgFgMQgOgogwg+QgzhDgQghQgehAAEhYQAChBAYhbQAQhCAkh6QAYhSAGgmQAHgzgCheIAAglQgWhagkhWIghhOQgTgtgHgjQgOhNAXhJQAPgtA6hfQA1hXALg3IArjBQACAIgCAOQgJBiBQB7IAhAyQATAcALAXQA6B5goDBIgnCcQgWBSgHA6IACANQALBJAcA1QAMAXAxBFQAoA4ANAnQAFARADAVIADgHQARgmAKgwQAHgkAFg3IAIhaQAGgzALgmQAOgvAZgkQAbgoAlgWQAQgKAigQQA7ghAghHQAIgQAFgQIALhXQACgLADgFIAAgFQAAgMAEgIIABgCIAFCPIgCAbQgFA9AKAhQAFAQALAVIAUAjQAcA0AKA0QALA6gNAzQgKAkggA2QgnBCgKAXQgPAmgIAxQgGAjgDA2QgDAvABAcQACApALAfIAUAuQAMAcAEATQAGAdgFAkQgEAXgMArQgTBFgLAiQgTA5gWAqQgrBPg7AqIABAFQACAPgaAHQhQAUhOAAIgLAAg");
	this.shape_20.setTransform(38.8203,72.2299);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-129.6,148.3,-129.6,-21.1).s().p("AAbRzQgWgIgOgQQgQgDgSgGQgwgRgKgCIgigFQgVgDgMgEQgYgIgnggQgkgdgNgWQgSgdgCguQAAgPAFhCQACgkAAgtIAAgRIgDgCQgYgWgqg0Qgxg9gVglQghg6gEg1QgEg0AXg/QANghAnhLQBBh8AihhQAbhOAMhKIgkhWQglhVgjhCIgZgwQgNgbgHgWQgPgwACg/QABg/AQglQANgdAegiIA1g4QA6g/AjhQQAihQAHhWQABgOAFgFQAhEHARApQAFANAVArQAQAiAHAWQALAngCA9QgBA9gLA2QgGAfgPAyIgYBQQgRA/gJBSIAEAEQARAXAfAbIA1AuQAcAcAPAZQAUAiAKAwQAWBigSBTQgDARgIAXIAJgLQAQgUAOgdQAKgSAOgjIANggQgMg2gEgdQgGguADg9QABgkAIhIQAFgwALgUQAMgYAcgVQARgNAjgWQAfgUAbgaQArgoAMgmIAfh7QADAmAAAkIAAAPIABAFQALArAbA3IAvBdQAaA3AIArQAHAlAABDQAAAggEAQQgFASgOASQgJAMgSASQgnAogQATQgdAigTAeQgOAXgYAvQgMAUgLAQQgBAuAEAYQAFAjAbBGIArBuQAYA/AHAjQAMA4gMAsQgKAngkAuIg9BPQgUAegcA8QgfBAgQAbQgmA8gtALQgLADgMAAQgQAAgPgFg");
	this.shape_21.setTransform(38.3459,70.5485);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.7,146.1,-130.7,-23.3).s().p("AgaRDQgpADgZgEQgygIgYggQgJgMgMgeQgMgdgKgMQgLgMgXgNIgkgXQhFg0AHiNQAEhaAAgRQgDg8gWgpQgJgQgUgaQgYgegIgMQgWgkgJgxQgHgmgBg3QgBhKAOgsQALggAfg0IBeihQAZgrAHgaQAJgggEgoQgDgbgMguQgPhBgRglQgFgLgcgxQgVglgIgZQgLglAChJQAChAAFgkQAHg3ATgpQAKgWAUgfIAhgzQAnhCgHgyQgBgOABgHQAjCMAHANQAIAOASAPIAfAZQAgAfAMA/QALA5gFBRQgDAugKBcQgEAzgCBNQgBA2AIAbQAIAZAWAiIAkA5QAhA8ABBUQABA6gRBdQgMBFgFAsQARgwAdgqIBFhXQApgzAPgqQAOgmAChDQADhUAEgXQAIg3AcgwQAbgxApgkIA8gtQAkgcASgWIBChQQgDAQgFARIgDAIQgIAyAAAmQgBA4AQAsQAFAPAPAgQAOAeAGARQAZBOgiBwQgHAagYBBQgVA5gIAiQgMAsgHBDQgHBEACArQACAcAOBQQANBDgDAoQgFBMg1BjIgcAzQgPAegHAYQgGAUgHAoQgHAqgFASQgMAugeAmQgdAngoAZQgoAZgvAKQgZAFgZAAQgOAAgQgCg");
	this.shape_22.setTransform(39.4059,72.6892);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132,148.5,-132,-20.9).s().p("AhyRJQg3gchVhBQgZgTgMgMQgTgSgIgUQgJgWgBgsIACiVIAAgUQgwgogogtQggglgLgcQgGgSgCgYIgBgrQABg4AHgbQAHgYAXguIABgCQgHgSgFgRQgUhLAMh0QAEgqAKgUQAIgQAageQBLhWAhhdQAbhJgChHQgOg5gbgvQgPgagggsQgjgvgOgWQg2hZARhHQAJgjAlg3IBfiMIAQgaQAIgPADgNIABgHIgCgLQgCgWgBggIgCgRIAAgJQAkBVgBAGQAHAcAQAaQAHAMATAaQASAYAIAOQAvBUghCHQgFAVgaBXQgUBDgGArQgDAbgBAqQAZAyAmAoIAcAcQARARAKAMQApA0AHBLQAGBEgWBGQgHAVgOAlIgUA5IgGAWIARAVQAHAJAVARIAGAFQAIhMAfgzQASgeAlgkQArgmAUgVQAmgmAQgmQgVgpgIg4QgGgoAAhIQgBgiADgUQAFgdAOgUQAMgQAdgUQBAgwAogXQAagQALgLQAIgHAagoIBTDJQAbBKAEBQQACA2gKAkQgIAggcAyQgjA+glA0IhFBdIgMARQAEAVAGATQAMAnA7B0QAxBfAGBAQAFAygUAbQgPAUgnAPIgfANQAdAtAEA6QAEA+gYA6QgKAWgZAqQgpBBgrA4QglAyghATQgKAGgLAEIgCAEQgGAOgLADIgMABIgKAAQABAEgBAEQgDAJgRABIgVABQhDAAhJgkg");
	this.shape_23.setTransform(40.7667,70.269);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.2,150.3,-133.2,-19.1).s().p("AgFR3QgXAAgsgHIgKgDQgfgCgigPQghgQgvgjQgUgQgJgKQgQgQgFgQQgFgNgBgVIgBgiQgGg2g/hIQhJhTgPgmQgRgrAFg4QAEgpARg8QAXhQAFgTQAMg5gFgsQgDgVgJghIgOg2QgHgogBhAQgBg4AEgjQAGgzAQgmQAMgaAmg4QAjgzALggQASg0gJhNIgWiEQgBgKADgHIAAgBIgHgSIgTghQgWgkgPgTIgggmQgSgYgGgUQgFgTADgpQAFguAHgZQAGgUALgaQAfhLAWgmQASggAFgKQAFgLACgJQgBgMACgMIABgFIgCgJQAAgHABgFQABgEACgEQAgBiAQAPQAJAJAiATQAbAPAKAQQAIAPACAdQAGBWgSBnQgNBHgfBuQAPA+AiA2IAiAvQAXAdAKARQAbArANAyQANAygDAzQgBAYgGAiIgLA5QgjDCAwCUIAUA0IACADQAQgiAGgWQAJgigChIQgChHAIgjQAUhNBRhDIAfgaQARgPAKgOQATgbAHgoQAEgbAAgtIAChPQABgtAHghQAThaA3gvQALgJAWgOIA0gdIgDAkQgJAhAgAkQAJAKATAPQAUARAIAIQAdAeAMArQALApgLAjQgHAXgVAdIglAxQgiA0gSBLQgLAwgJBaQgHBEAGAhQAHAkAcA0QAkBCAIATQATAxgDA0QgEA3gcApQgIAOgSATIgbAfQgdAigNAnQgPAqAGAoQACARARAvQAOAogBAYQgCBBhHA1QgSANgrAZQgoAYgUAQIgYAVQgPALgMAHQgZANgiAAIgDAAg");
	this.shape_24.setTransform(41.9557,68.5384);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.2,148,-132.2,-21.4).s().p("AhvR/QgwgEgqgUQgsgVgdgjQgSgWgOgeQglhOAPhWQAFgaAOgsIARg1IgfgWQhEgxgegpQgjgxgIhAQgJg9ARg9QANgxAdg1QAXgoAmg1IASgaIgVgxQgchHgKg5QgNhHANhAQAOhIArgwQAiggANgUQAOgWAFgeQADgWAAgiQgChagOhvIAAAAIA3BBQAVAaAbAbIA1A1QAdAgANAdQAYA4gPBSQgFAagNAqIgTBEQgOA7gLBlIAHAUIAKAgQAZBHAuA8QAjAtAqAkIABgCQAEgIAHgWQAGgPABgKQAEgOgBgXIgCg/IgBgMIgFgUQggh7AahOQALgjAegvQAVggAMgMQAOgPAYgPIAogaQAyghANgkQAJgYgCgvIgCgnQgHgIgEgFIgGgPIgIgNQgCgGgBgIIABgNIAAggQAAgTAFgMQAFgMAQgQQAXgZAPgIQAJgFAQgEIAagIQAQgFAEgKQACgEAAgRQABgNAHgDQAdBoAGAMIAnBQQAPAkAFAiQAEAXgHAMQgHALgaAJIgkALQgbAHgPAIIgBABQggBlgMA3QgYB1AbBSQAIAbAUAlIAhA+QAcA4AQA8QAYBVgXA0QgIAUgSAUQgLANgXAWQgoAngeAaIgCAMQgBAHAAAOIgCAWIgEAWIAAAEQAOBKAiBCQAXAqAGASQAMAlgMAbQgIATgZAVQhOBAhhAYIABA0QAAAPgDAHQgDAGgJAJQgPAPgPAJQgOAHgYAHQgRAFgLABIgZABIgGAAIgaAOQgcANgNADQgNAEgTAAIgRgBgAkVrXQgLgvgagnIgagkQgQgWgIgPQgagvAOgnQAFgMALgOIATgYQAWgdALgjQALgggCghIAEAGQAqA4AJAWQANAjABA6QABArgEAeQgCARgHAgIgPBDIgPBOIgFgUg");
	this.shape_25.setTransform(40.9532,70.8161);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.1,150.9,-132.1,-18.5).s().p("AhaSLQgJgGgBgLIAAgBIgWgKIgfgQQgSgKgOgEQgIgDgVgEQgSgEgKgEQgggLgmgoQghgkgIgaQgGgRACgYQAAgNAEgcIAViCQAEgaAAgNQAAgWgHgQQgIgPgSgQIgfgbQhEhAgCiUQgBhGAOgpQAKgdAYgiIAqg8QA1hLgEg6QgCgWgLgdIgTgzQgQgtgBgxQgCgxAMguQAJgeAWgzQAZg5AIgXQAVhAgBhEQgBg3gOgzIgCgFQgOgfAEgbQAiAxALASQAMAUAUAUIAtAoQAaAYAOAUQAhAvADBIQABAvgMBTQgNBTACAuQADBIAhAvQALAQAaAeQA5BMgHCHQgBAagHA0QAPgXAQgQIAXgUQANgNAGgLQANgWgCgsQgCgfgKhJQgKhEgBgkQgBg6AQgvQATg3AmgfQAMgJAigVQAdgRAOgPQApgqAEhdIADhJQADgqAMgdQALgaAVgQQAXgTAZAGIAFABQAGgCAHgBQAFgHABgPQAAgRACgGQADgHAEgDQATBKAxAyQANAWgBAaQgBAZgQAfIgfA1Qg1BZgKBrQgKBqAiBhIASAxQALAdAFAUQAKAqgCBDQgBBEgLAiQgGATgNAYIgWAqQgxBeAHBMQADAaALAkIATA9QAWBMgSAwQgNAkgtAnQhCA6gHAIQgnArgMA6IgGAkQgFAUgLALQgKAKgPAFQgLADgTADIhWAOQgIAKgUgBIgRgCIgVAEIgTABQgNAAgHgEgAk+uMIgzg7QgbgggEgYQgCgOAEgTQAIgsAWgiIARgZIAFgHQAKARAcAJIAbAJQAPAGAJAIQAPAPAAAbQABAPgHAdIgTBPQgPA8gHAkQgJgZgUgbg");
	this.shape_26.setTransform(40.8748,67.9219);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-131.2,154.4,-131.2,-15).s().p("AgnS2QgRAAgMgDQgLgDgQgJQgtgZgaghIgtgaQghgWgXgWQgXgWgmgzQgXgfgKgSQgPgcgCgaQgCgUAIghIARhBQANgrAFgXQALg0ACg+Igmg0Qgrg6gPgeQgbg0gGg5QgGgwARgeQAGgMAPgRIBIhSQAVgXAIgNQAPgVAFgTQAEgPABgXIAAgQIgZgpIgcglQgQgVgIgRQgRgkADhEQAEhQAVgtQAHgQAkg3QAdgrAJhRQAFgmAEhQQAFADABAMIADgBQAfCBATAVQARAUAHAMIAOAbIAKAOIAJAOQAGAOAAAbIAABoIAAAWQALATAPAVQAyBGAKAQQAgAyANArQAYBTgdBTIgRAnQgKAZgFAPQgNAoACAqQACApAQAlIAGghQALgyAMgbQANgdAjgsQAngxANgXQAMgWAOglQAXg6ADgfIAAgEIgZgmQgSgbgFgPQgJgWgBgkQAAhOApg2QAPgTAQgKQAJgFARgHIAYgKIgEgHQgGgTADgcQACgbAGgPQAKgZAoghIAmggQAVgSAOgIIAQgHIAPgIQALgGAGgJIAAgCQACgIADgDQgBgNABgGQACgKAGgDIACAIQAMA2gBAEQgNAtgDAdQgFApAKAhIAHAUIAFAUQACALgBAPIAAAaIAAAYQABAOgCAKQgEASgMASQgJAMgRASIgEAFQAEAYAJAeIAUA7QAPAqALAZIAcA4QAQAhACAbQAEA6gtA+QgOATgbAeIgPARQAGArASA7QAeBiAGAfQARBdgWBcQgLAygVAdQgZAmhIAqIgmAXIAAA0QAAAWACALQABAKAGAUQAHAZADAhQADAhgJATQgPAfg7APIgpAJQgDADgGADQgFADgTAFIgoAKQgYAGgfABIgPAAIgoAAgAgfIRIABgDIACgDIAAgBIgCgGIgBANgAlaw4QgHgIgCgFQgDgHABgJIAAggIABgVIAFgTIAJgYIAPAPQALALAEAIQALAQgGAMIgGALQgDAFgCAJIgDAOQgCAGgGALIgJAQg");
	this.shape_27.setTransform(39.9655,64.4208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-131.7,158.5,-131.7,-10.9).s().p("AiZTVQghgLgOgSQgOgRgDgmQgDgsgGgOQgJgXgcgWQghgZgOgNQgigfgag5QgVgrgDgcQgCgUAEgaIAIguQAQhQgChVQgBhTgVg9IgdhDQgSgpgEgcQgHg3AagwQALgUAWgaQAagcAMgOQAsg4gHgvQgCgRgSgjQgzhlgJhIQgFgwAKgtQALgwAcgiQAhghAzhXIAKgSQAEACADAGQAFAOgBAQQAJA7AxBGIAuA8QAcAkAQAZQAiA3APBAQAPBAgGBAQgEAtgTBaQgNBRAOA0QAHAWAOAdIAYAxIABACIAAgqQAAghADgUQADgeAKgWQAKgXAggkIA8g+QATgTAIgNQAMgWgDghQgCgPgKgqQgkiTA6hdQAUghArgmQAtgoAtgZQAagPAJgJIAEgFIAGgdIABgEIAAgBIgDgHQgCgFABgDIABgEQALAegEBeIgEA+QgJBaAaBAQAHARAOAZIAVApQAgA+AAA4QABAugfBXQgeBYAAAtQAAAwAcBOQAhBZAFAkQAKBCgYBBQgYBCgzAsIgYAUQgNAMgGAMQgKAUABAmQAAAlADAuQACAqgBATQgBAhgMAYQgPAggqAeQguAgg2APQgzAOg0gDIgGACQgoALgoAAQgyAAgygRgAltx9QgNgPABgkQABgjAMgSQANAtgKA+IgEgDg");
	this.shape_28.setTransform(40.4893,60.3008);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.6,119,-133.6,-50.4).s().p("AgiNPIgOAAQgSgBgDgKIAAgBIgGgDQgNgEgagGQgwgLgcgJQgpgOgcgVQgRgOgGgLQgFgLgBgUQgBgcAGgrIAFghIgHgEIgagPQgWgOgVgZQgNgPgXggQgVgcgJgSQgWguAEg6QAFgzAYg0QATgnAkg1IASgaQACgQAAgLQAAghgRgmQgHgRgbgwQgnhIgMg0QgRhKAVg6QAKgZAXglIAohBQgQg4ACgvQABgYAEgVIAFgVIAEgWIADgiIA1jQQgHB+APAfIAMATQAGADACAJIAvA+QATAaAHAOQAKATAHAeQAZBkgMBPIAQAaQAWAhAvA/QAnA5AKAwQAJArgKA4QgGAggUBBIgDANIAOAaIARAhIANAeIAOgZQAQgdAEgMQAPgtgVhGIgRg2QgKghgDgXQgFgkAHg/QAFg5APgcQALgWAngjIA/g4IABAAIgBgDQgBgRgFgSQgMgqgCgMQgHgkAEhEQACggAIgOQAIgQAUgNIAmgVQAggRAZgaQALgKAGgKIAAgFQAAgKAFgEQAAgLgDgPQgFgbADgMIACgGQAbBlAAADQAAATALAVQAIAOARAVIA2BFQAjAsAMAcQALAaADAkQACAVgBArQgBAvgGATQgDAOgJARIgPAcQgbAygWA0QAIATALAVIAyBfQAcA2AIAtQADARABAZIABAqIABAoQAAAXgEARQgJAqgpA0QgYAegbAZIgVAUIAPBHQALAxABAgQABAzgUAwQgTAwgkAjQghAhgxAYQgnATg4AQQgkALgjAFQgTADgSAAQgEACgGAAIgLgCg");
	this.shape_29.setTransform(42.3747,99.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133.3,116.9,-133.3,-52.5).s().p("AAAM3IgDgBIgiAAQhPABgngNQgsgPgxgtQgmgjgLggQgIgYADgxQADgzgHgXQgGgUgQgYIgfgoQg1hFgUhOQgWhWAYhLQAIgZAkhGQAdg5AGgnQAIgzgYhSQgfhpgDgcQgJhKAehFQAFgNAeg4QAWgpAHgdQAHgdgBgmIgBgNQgHgcACgkQAAgXAGgqIACgGIAVBFQAFAJgCAWIAAALQACARAFASQAOAxAnBRQAoBUAcApQAOAVAfApQAaAmALAdQAIAYAHA5IAHBMQACArgEAhQgCARgKArQgJAmgBAWIgBASIARAbQAPg5AigpIAeghQARgVAGgSQAHgVgDgdQgCgOgJgkQgahxAYhJQAIgXATgiIAeg4QAehAAChGIAAgvQAAgbAHgSQAJgdAZgXQAXgVAggLQAagKAHgEQARgKAEgOIAEgQQACgHAGgCQA3CiASAZQAVAdAJATQAdA7gMBBQgFAcgYA5QgXA2gFAeQgHAyAUA/QAJAbAkBSQAcBAAIAvQAKBAgYAvQgKAUgkArQggAmgJAbQgKAfAFApQACARANA3QALAvADAkQADAtgLAlQgPA5g8BDQglAqgiATQgYANg3ANIgVAFQgBAHgGAEQgHAFgSACIgwACIgMADIgIABQgGAAgEgCg");
	this.shape_30.setTransform(42.0232,101.8521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.9,117.5,-132.9,-51.9).s().p("AgGMsIgCgEQgeACg1AAQgoAAgTgDQgfgFgmgRQgogQgUgPQgugjgSg+QgPg3AKg/IALg3IAIgsIghghQhMhWgShmQgKg1AIg0QAJg3AagtQAJgOAWggQAWgeAJgSQAOgaAKgiIAEgOQgWgtgLgYQghhNAEhWQAEhWAohKIARgfQAJgSAEgOQAEgRABgWIgCgoQgBgqACgeIABgGIArBrQALAfAaArQAtBJA0BDIAXAdQAMASAGAOQANAhAAA3QACBSgLBYIgEAkQgCAVACAPQAEAYAOAcIAbAvQAVAnAMAjQAKgSAEgNQAFgSABghQgDhoACgzQABhaAfg4QAWgiAHgSQAMgbAAgtQAAgSgDg0QgDgrABgaQAGhVAtgpQARgQAegOIAygXQBAghAFgwQABgRACgFQADgFAFgDIABAAQAWBqgBAXQABBzAiCNQAVBWA3CkQAOAsAFASQAKAjADAcQAJBJgdA0QgLAUgbAkQgYAjgJAnQgNA4AaBxQAaBzgMA3QgLAxgnA1QgvBAg4AdQgfAQhPAUIgmALQABAEgCAEQgCADgKAEQgWAGgZAEIgJAFQgOAJgIAAQgGAAgEgGg");
	this.shape_31.setTransform(41.6648,101.2663);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-133,117.5,-133,-51.9).s().p("AgMM0QgLgCgFgFIgVAAIhZgEIg2AAQgegDgUgLQgRgLgQgVQgHgIgUggIgog+QgXglgHgeQgIgjAHhHQAIhIgJgjQgFgWgQgfIgagzQgkhRABh9QAAhDAQgoQAGgQARgcQARgeAHgPQAehDgNhsIgMhZQgGg0AAgkQABhQAghKIAdg+QAQgmACgcQABgMAFgIIADgEQABgDgNgnQBqDZAVAeQAWAiALAbQAJAYAJA0QAKA7AJBoQALB0AGAvQASCDAlBhIAFgbQAVhkA0hVIAZgoQANgXAFgTQAIgbgEgmIgKhCQgMhNADhJQACg7AQggQAJgRARgSQAKgLAWgTIBFg+QAYgWAMgOQARgWADgXQACgLADgHQgBgIADgHQABgCgDgNQBJC4AWA1QALAfANA8QANBAAJAcIAWA7QAOAkAGAXQANAygEA0QgDA0gUAvQgLAZgaAxQgUAsgBAiQgBARAEAVIAKAnQAcBlAIBEQALBegTBMQggB9hzBpQgyAtguAXQgrAVgwAGQgTADgTAAQgdAAgbgGg");
	this.shape_32.setTransform(41.7207,101.3325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-132.2,128.1,-132.2,-41.3).s().p("AgVOsQgQgEgGgHIgCgEQguAEgsAAQgbAAgQgCQgYgDgSgIQgRgJgSgQQgMgKgTgWQg2g8gZgsQgjg/ADg6QABgYAJgfIARg1QA3ifAKikIgkgsQhLhggXh6QgYh8Aih1QAGgXANghIAVg3QAMghAYhOQAXhKANg3IgDgEIABgEIABgEIACgDIADgCIAJgvQAThsgRhWQgEgSADgIQACgEADgDQA1B9AMAaQAkBQAmBHQAYAwAJAXQAKAfAIA2IAXCNQAIAtACAbQAEAogDAgQgBAIgVBZIACACQAEADAAAFQABAHgFAFQgDADgFAAQgJAwAFAhQALAXAPAwQARAyANAYIASAeIAQgbQAXgkAJgaQAPgsgCg9IgIhtQgFhEAHhGQALhhAogwQAPgTAsggQAmgcASgQQAegZATgZQAXgeALghQAIgZAAgYIgCgOIAAgGIAAgBQgCgRABgFIADgGQBACiASAoQA5B8ANAuQATBDgBBFQgBBGgVBCQgNApgiBSQgaBJAFA1QACAeAOApIAYBGQAnCDgoCTQgLApgUAwQgLAdgaA5QgOAegIAPQgNAYgPAQQggAig3ATQgkANhDAKQgtAIgfAAQgUAAgQgDg");
	this.shape_33.setTransform(40.956,90.7305);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-130.1,132.3,-130.1,-37.1).s().p("Ag1OtQgqgDgpgQQhFgbhHhFQg6g5gfg9QgkhHAHhFQADgeANgmIAahDQA0iGAWiTQgSgygyhdQg1higNg+QgJgrgBhRQgChmAOg7QAGgcAOgmIAYhAQAZhGBXkwQACAJgEAQQgZBjAuB7QARAuAeA5IA4BjQBCB1AaBRQAmB0gSBjQgGAkgUA5IgUA7IACADQAUAgAtA9IAZAjIABABQAEgSAAgPQABgWgIgyQgRh6ADh1QABg0AIgfQAPg1ArgtQAmgoA4geQA0gcAOgJQAagUAMgWIAAgGQgCgeAKglIACgHIgBgKQAAgHACgGIASBpQACAZALAcQAIAVAQAeIAbAxQAwBeAGBjQAHBrgtBTIgeAwQgTAegJASQgHAPgGAQIAQAlQAmBaALAwQAMAwADA8QACAqgBBEQgBAqgCAYQgEAkgKAcQgbBNhSA0Qg3AlhlAgQgmAMgYAEQgcAFgXgBQgSADgVAAIgNAAg");
	this.shape_34.setTransform(38.8838,86.5445);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F","#EBC99F"],[0,0.259,0.337,0.443,0.565,0.596,0.945,1],-126.5,132.6,-126.5,-36.8).s().p("AgZOqQgGgBgFgFIgCgDQhEgHgkggQgVgSgQgfQgGgKgVgwQgYg3gig0Igpg/QgYglgLgeQgYg9AIhJQAHhDAghCIAUgoQAMgXAFgSQAJgeABhBQAAgcgCgOQgDgYgJgQQgIgMgPgOIgagXQgXgYgfg6IgVgoQgKgXgGgTQgMgpADg8QAFhaAmhwQAOgoA/ibQAQgmAHgYQALgiACgeQABgPgBgmQgBgiACgTQACgMAGgDQBACXANAZQAkBHAcAmQAbAmA9BIQAzBBASA1QALAeAFApQADAWADAyIABA4QgBAggFAYQgJAogmBAQgoBFgLAhQgQA0AIA7IADAQIAAgBQAQg3BEhqQBBhkAOg+QADgKAIg6QAGgpALgYQASgoA4gwQBCg5BAhqIASgdQAMCuAKAgQAUA8AJAiQAPA1AGArQAQBwggBSQgGARgUAnQgRAkgHAVQgQAwADA/QABAoAMBIIAuEhQAIA0ABAcQAAAtgOAgQgVAwg2AeQguAZg9AJQgVADhbAFQhEAEgqALQgMAEgIAAIgFAAg");
	this.shape_35.setTransform(35.209,86.2298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_18}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-65,96.60000000000001,251);


(lib.fireBit42_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.1,129.9,4.6,-56).s().p("ACaQRQhrgEhHgeQgwgUg0goQghgZg4g0QghgegOgPQgZgagQgZQgPgagMgjQgHgWgLgrQgYhcgJgxIgOhbQgIg1gKgkQgRg+gnhNIhJiEQgshPgWg5QgehNgDhEQgDhKAeh3QAliQAFgwQAEgkAAguIgChSQgFhcgCgZQgEgpgKg5QgCgOgEglIAlBAQANAZAlAhQBnBbCQBZQBeA5CsBcQBKAoAlAcQA6AsAXA1QASAqADBNQACBGgMAvIgQA1QgKAfgDAVQgHA2AYA+QAPApAoBEQAgA2AUAbQAgAqAkAWQANAJAbAMQAbANANAHQAyAeAmA7QAeAtAbBIQAoBsAEBLQACAygMAsQgMAxgcAjQgkAuhEAiQiCBCitAAIgdAAg");
	this.shape_18.setTransform(37.8785,58.0982);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],10.1,147.6,9.6,-38.3).s().p("AB1SlQgKgCgBgHQhFgMg+gaQhwguhJhTQgogug0hcQgRgggHgSQgNgcgDgZQgFgcAFgmIALhCQAThwgHiOIgDguIgCgCQgNgShOhZQhQhag8hjQgthKgTg+QgYhOANhDQAFgbANghIAZg5QCelaAxl8IAAgDIgCglIAAhCIAAgBQAhBpAAADIAAAGQALBIAxBNQAfAxBGBSIEEEyQAvA3ATAgQAuBOABBqQABBaggBnIgdBdIgDAMQAUAvAeAoQAqA2BLA3QAsAgBaA7QBOA2AvAzQA7BCATBHQAnCTh6C4QgtBGgwArQg6AzhZAjQgdALgoAMQACAFgDAGQgDAHgGADQgIAFgSAAQgYgBgXgCIgOAEIgLABIgJgBg");
	this.shape_19.setTransform(32.8629,40.3194);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],12.2,144.1,11.7,-41.8).s().p("AD2SEIgCgDQgdAHgdABQg/ACgsgeQgWgPgbggQgigogLgKQgRgQgdgTIgwgfQhWg7g6hbQg5hbgShnQgLhBADiAQADiDgKg+QgJg9gWgqQgMgYgVgcIgmgxQhbhzgohhQg0iAAUh2QAShoBciAIBOhoQAvg+CBkcIAag7QgCAMAAAFQAFAfgBA8QAAA/ADAdQAHA4AbA1QAYAtA3BOIgGgDIBUBWIgDgDIB6B+QAbAcALAOQATAYAJAXQAOAigBA1QgBAugIBCIgPBwQgQCGAcBUQAPAvAeApQAdAqAoAdQAfAXBeAuQBSAoAlAmQA7A8AVBnQANBBgBB3QAAA2gCAcQgDAtgHAkQgUBag3A1QgUATgfASQgTAMgmASQguAWgcAJQgqAOgkAAQgQAAgFgIg");
	this.shape_20.setTransform(30.7027,43.8625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],15.5,152.5,15,-33.4).s().p("ABATkQgtgXgkg6Ig8hpQgegyg0hBQg9hJgdglQgzhAgdg1QgmhEgMhAQgNhHAPhpQAWh2AGg7QAHg4AAhYIAAgPIg6hBQg6g+gggrQgvg9gbg5QgfhCgJhEQgJhJAVg/QAYhHBLhTIB+iLQBPhnBtmQQAJAqgGA0IgCAQQAEAnAFAgQAXB7BKB9QA9BpBkBvIAfAjQAQAVAJASQAYAtABBIQAABCgiCuQgeCXANBYIABAJQAvA+BBA1QAhAcAaANQAPAGAaAIIApAMQA9AVAwA1QAsAwAbBBQAWA4ANBJQAIAwAHBVQAEAxAAAcQAAAqgIAhIgQAxQgKAdgCATQgEAbAGA6QAGA4gGAcQgHAlgZAhQgXAegjAUQglAVgvAHQgBAGgJAEQgKAEgOgBQgfgCgtAFQgyAHgaACQgXADgUAAQhBAAgpgXg");
	this.shape_21.setTransform(27.465,35.4782);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],9.6,148.4,9.1,-37.5).s().p("ADQTFQgIAAgGgCIgsACQgvABgmgHQgtgIgkgUQgogXgYghQgQgXgSguQgUgygMgUQgTgfgqgmIhFg+Qgpgpgkg+QgXgngkhMQgghBgOgkQgWg5gGgxQgHg4AMhcQAPhvAAglQABhMgZhdQgKgpgph8QgihkgMhCQgSheAMhNQALhHAphTQAVgrA8hlQAXglALgVQARghAIgcQARg3gDhOQgBgugHhaIgBgEQBRCrBJBUQAQASAVAVICZCcQANAOABAIIAAACQAZASANAkQAPAnAAAzQgBBMgVA3QgGAPgaAxQgVAngHAaQgIAfABAxQACBHAQAvQAYBFBBA8QAxArBUAxQA4AhAUANQApAdAYAeQAtA3AXB8QAZCNAbAxQAMAXAVAcIAlAxQAuBAAeBJQAeBKgFA1QgFBEg7BAQgXAYghAaQgVAQgoAbQg+ArgmARQgyAXgtAAIgOgBg");
	this.shape_22.setTransform(33.3822,39.5512);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],13.5,150.1,13,-35.8).s().p("AClTjIgDAAIgSAAQgRgBgMgDQgYgFgogUIg+gfQhEgjgdgjQglgtgOhVIgKhFQgGgqgIgbQgFgUgOgmQgQgRgUgRQgUgQgxgkQgtgggXgVQhghVgniBQgniCAih8QAGgVAQguQAPgrAGgYQAGgVAHgoQAHgqAFgUIAQg1QAKggADgVQAKgxgGhGIgEgsIg0gwQgxgugdglQgmgxgQgyQgLgigDgtQgDgeABgyQABg0AFggQAHguARghQAHgPAOgUIAWgiQAohBAKhOQAEgbADh6IATAfQBDBnBlBGIBjA9QA6AlAfAiQAwA1AhBaQAiBeACBNQABAmgGAzIgPBYQgPBeABBCQADBXAfBBQANAaAVAcQA2ASAQAHQAqATAjAZQAwAkAjAsQAxA/AWBQQAVBPgLBPQACAFAAAGIgBAXQABALAKASIAPAYQAqAaA9AuQA5AsAWAcQAlAtAPBEQAYBqgnBlQgSAvgqBBQgoA9gkAiQgwAvg1ALQgLADgVACIggAFIgpAOIAAABQACAIgKAFQgIAEgLAAIghABIgRABIgLgBg");
	this.shape_23.setTransform(29.4311,37.872);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],17.9,159.8,17.4,-26.1).s().p("AEvVEQgHgBgGgFQgFgEAAgFQgmADgUAAQgjgBgbgIQgdgJgjgWIg7goQhBglgfgVQg2gkgUgpQgLgXgGglQgGgqgEgUQgIgkgSgrQgLgagZgwQgUgngMgTQgTgggTgVQgYgagsgfIhIgzQhThAgzhfQgyhggGhpQgGhpAnhkQAnhkBLhJIAFgFQAHgNAEgPQAJghACgyQADhEgNgoQgNgtgug2QhHhUgFgHQg0hLgMhoQgLhbAUhnQAQhOAphqIBHi0QAQgqAGgbIAEgQQAHARAwBkIAAgBIACADIgCgDQAIANAKALQAcAfAlAPQAQAGAGAGIACABQAWAJAfAZQBGA6AzAwQA5A0AcAoQAfAvAfBSQAdBUAAA3QgBAwgYBLQgfBcgGAeQgHApABBSQABAwADAYQAFAoAOAdQAOAbAcAdIArAqIAKADQBfAeBCBYQA+BTASBqQAGAiAJBGQALA7AaAjQAOATAnAiIBrBbQAwAoAXAZQAkAoAOApQAPAugIBCQgIBKgiBQQgbBAgwBOQgwBMgoAiQgXATgiASQgTAKgrATQgPAHgLAAIgBAAg");
	this.shape_24.setTransform(25.0691,28.1766);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],18.9,178.7,18.4,-7.2).s().p("ABnYhQgegNgbgkQgFgGglg8QgrhIhAg2Ig2grQghgagTgTQhphrgPjgIgGi0QgBglgDgiIghgYQgZgXgggtQgpg4gNgPIgjgmQgWgYgMgQQgkgygMg/QgMg/AQg8QAQg7A4hSQBHhmAQggQAdg8AOhOQAKg7AEhVIABhHIgIglQgKgwgHgWQgMgmgSgbQgYgnhJg6QhJg6gYgoQgmg8AFhUQAEhHAhhPQAphjBBhVIAmgxQAVgeAKgZQAPgmABg3IAAgMIgBgYQgBgGACgGIgCgpQAgBBAAAEQAEAyARAvQATA3AiAvQASAZAlAmQApAtAPARQBPBgAbB/QAbB+ghB4QgHAbgPApIgZBDQghBjgKBqQAZApAjApQAyA7BTBGQAuAoBgBOQA5AxAWAgQAWAhAOAuQAJAfAKA3QAIAvADAaQAEAogFAgQgDAZgMAkIgUA7IgIAgQAhAkAxAiQAkAZBHAmQBNAqAfAUQArAcAZAaQAyAzAOBKQAPBJgbBDQgJAXgQAaQgJAQgVAfQgYAkgLAWQgRAhgFAeQgEAVABAtQABAsgEAWQgIAqgnA7QgiA0ggAQQgQAIgXADQgNABgdABIgmAAQguAhhJAEIgPABQgiAAgYgKg");
	this.shape_25.setTransform(24.027,9.2841);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,185.6,20.8,-0.3).s().p("AD+ZqQgGgBgEgFIgcgBQgogCgfgHQhQgSgpg0QgWgcgWhDQgXhDgWgcQgaghg8gfQhRgrgPgLQg2gmgkhCQggg6gPhLQgLg4gEhTQgDhdgDgvQgFhRgOg7QgRhKgig3QgJgOgWgfQgVgcgJgRQgig5gIhEQgJhFAUg/QAMgmAYgrQAPgbAfgvQAggxAPgaQAXgsAThUQARhOgDAMIADgMQAKgiAAgWQgBhKgFhxQgDhIgHgjQgPhRg0hWIgOgUIgFgEIgsgaIgsgaQhKgygSg8QgHgbABgkQACg6ATgsQAOgeAog1QAug6AXgbIAhgkQASgWALgRQAUghAGgnQAGgngJgmQgFgTADgKIAAAAIgDgMQgDgOAEgHIBCBiQAPAVAhAjIBrB1QAiAkAQAVQAbAiAPAeQAfBCgBBgQgCBLgiAdQgRAPghAJIg3AOQgVAIgmAYQgWAOgHAKQgMAQAAAfQABAjgCAQIgBAFIABAvIgGgHQABA/AHA1QAKBKAmCOIAaBgQAVArAmAgQAqAlA1APQAXAHAqAFQAuAGATAFQA7ANA0AmQAzAkAiA0QAhAyAPA9QAPA9gFA+QgCAWgHAqQgHAsgCAVQgIBPAbAwQATAkApAdQAfAUAyAVQBDAcARAIQAuAYAaAcQAiAlASA8QAMAqAHBGQAFAnABAVQABAhgEAaQgEAcgOAoIgXBDQgcBZAGBeIAFBEQACAngHAbQgJAggbAqQgeAtgaATQgkAdhFANIhZASIgTAEIgIACQgNAFgIAAIgEgBgAmCidIgBAAIABgBQAGgHACgPIgIAXg");
	this.shape_26.setTransform(21.683,2.3661);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],20,192.7,19.5,6.8).s().p("AC3bKQg+gGgegNQgcgLgugjQgbgVgNgMQgVgUgKgVQgKgVgGgvIgUiYQgIg+gHggIgGgXIhng2QhQgqgnggQhKg+gehhQgfhhAahdQAFgTARgsQAPgnAFgYQAJgkAChLQAChfgEgwIgBgIIhZhWQgmgkgPgVQglg2gKhSQgNhpAohHQAPgcAngpQAsgvAOgUQAyhJAPjeIADgmIAbB3QACAFAYAdQAYAeAwAtQAXAUAOALQAVAPAUAIQANAEATAEIAfAGQAvAKAzAbQBIAoAdAxQAVAjAJBDQAKBGAABEIAAA8QgBAkADAZIABAMIADAGQAUA6ANAbQAVAuAbAeQAgAkA5AeQARAJBVAmQA+AbAlAbQAyAlAWAuQARAiADAvQACAhgFAzQgQCeg5CZQgGARgCAJQgDAPAEALQADAJAKAKIARAQQAdAbASAsQANAiAJAyQARBmgsAsQgPAPgmARIgeAPIABAEQAAAPgFALQgDAGgMAQIgKAMQADABACADQAEAEgCAHQgCAGgFAEQgEADgHACIgMADQgSAFgbAMQgjAPgKADQgnANgyACIgGAAQgiAAg0gFgAmQv5QADgXgqg0Qgrg0gcgSIgqgbQgxgjgNgpQgHgYADgeQAEgoAXgsQARghAhgqIA3hHQAdgqAOgkQAFgNAdhmIAMAsQAEAfATAgQAPAYAjAqIA5BDQAhAmANAYQAOAZAJAhQAGAYAFAmQAIA3gHAcQgFAYgWAkQgeAzglAwIggApQgSAYgLATQgSAfgeDGQgOjkADgYg");
	this.shape_27.setTransform(22.994,-4.7729);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],17.6,196.8,17.1,10.9).s().p("AC7cFIgTgEQgJACgFgBQgEgBgDgFIgBAAQiTgnh5hiQg8gwgbgwQgig7gMiPQgMiMgmg9QgRgZgfggQgkgjgRgSQgggjg6hTQgTgcgJgRQgPgagFgXQgIglANg4QAIgkAVg/QAXhEAHgfQAdh6gnhQQgHgOgQgZIgYgmQgdg2gEhNQgDgxAIhYQADgnADgSQAGgfAJgYQAPgiA9hJQA2hAAKgvQAHgigJguQgDgOADgIIAWAmIAgA7QAKAUAgAJQAgAJAXAIIAmAPQBYAjA8BUQA5BQAPBiQAGAhAGBBQAHA6APAlQAXA4A3AzQAkAhBJAyQA5AnAcANQAXALAwATQApATAWAWQAZAYAZA4QAZA2AMAmQASA0AEAtQAEAygPBjQgPBjAEAyQAFAxAiBnQAgBiACA2QACA9gYA5QgXA5gsAqQgZAYgnAZQhtBJh7AtQADADAAAEQAAAKgMAEQgGABgGAAIgKgBgAl3xdQgKgTgVgaQgLgOgJgDIAAAAQgYgWgogeQg+gugYgfQgRgWgFgTQgFgRACgbQABg0APglQAIgWAUgfIAggyQAmhBAKhNQAEgkgCgiIAUAXQAUAYAoAoQAqAoAUAWQAhAkAUAhQAZAoAJAqQAKAtgKApQgGAVgMAZIgYAtQgaA0ggBiIgXBEIgGgPg");
	this.shape_28.setTransform(25.3293,-8.8807);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],12.4,203.5,11.9,17.6).s().p("AgUc9QgrgMgXgRQgZgTgWgpQgXgvgNgXQgRgdgfgmIg3g+QhChPgFhEQgBgVAEgeIAIgzQAEgjAAgsQgBgbgDg1QgEgxgDgYIgCgPIgzgkQg9grgdgfQgbgcgig0QgdgugNgiQgRgvAIgnQAHggAYgiQAPgUAigjQBBhDAhgvQAwhDAQhCQADgPADgRIgCgIQgMg4gcgwQgMgWhLhfQg3hGgNg1QgLgsAIgyQAHgtAWgtQATgmAfgqQAXgdAmgsQAWgXAJgOQAPgWAEgUQADgMAAgQIgCgNQAAgGABgFIgBgTQABgJADgGQACgEAAgQIAaBUQAJA/BJBIIBAA/QAiAmAOAkQAOAkACA/QACA9gJAiQgEARgJAWIgRAnQgZA/gPBGQAgAoA+AYQAkAOBWATQBxAZBOAfQCMA3A5BcQAwBMgEBmQgCBUgoBgIgUAyIgKAZQAPAeAVAaQARAVAwAuQArAoATAcQAbAmAMAtQAMAugEAuQgEAugUArQgVArghAgIgbAZQgQAPgIANQgUAhADBLQADBPgQAgQgQAggkAVQgfATgqAHQgWAEg2AEQgyAEgbAGQgMADgIgCQgoAXgbAFQgLACgOAAQgdAAgmgKgAny4PQgRghgFgSQgFgTAAgdIABgxQgBgmAEgNQAEgLAJgPIAQgZIAKgWIAKgVQAEgJAIgJQAZAqACA6QACA3gXBBIgYBBIgNAng");
	this.shape_29.setTransform(30.572,-15.5136);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.8,218.1,8.3,32.2).s().p("ACifDQgEgDAAgEQhCADhDgFQg7gEgpgOQg2gRgggiQgSgTgPgfIgag3QgYg0g1hYQg7higVgpQgXgugGgcQgHghAEgxQAGg3ABgcQADhUgkheQgbhJg4hcQgZgpgJgTQgRgigFgeQgMhaBVhmIBIhOQAqgvAVglQA5hhgFiiQgEh/gkhhIgEgBQgLgCgVgHQgtgQgUgNQgjgWgKgfQgGgQAAgeQAAgoAGgZQAJgiAagoQAHgLAsg4QARgWAHgQQAKgYgDgcIgCgWQAnBdAHAMQAFAIARATQAXAXBWBPQAWAVALAMQAQAUAGAUQAEAQAAAYQAAAZgHANQgOAWgnAEIgfACQgRABgMAFIAAABQAIBSAnBhQAjBWArAqQAuAsCBArQB+AqAuAxQATATARAcQAJAQATAkQAqBTASAuQAdBJAGA/IADBHQABAsAGAbQAPA9BKBbQBQBiATA0QAoBtg7CPQgMAegcA8QgVA0gDApQgBATAFA5QAFAvgGAbQgHAggVAbQgUAbgcASQg1AhhJADIgbABQgHAGgRACIgfAEIgFACIgOAIIgIACQgDAAgEgCgAnX6QQgTgXgJgOQgOgWgGgTQgGgVgBgzQAAgjACgTQADgeAJgWIATgpIAEgLIAIAHQAcAcAJAUQAJAUABApQABAtgFAaQgDASgJAdIgPAuQgEAOgCAPg");
	this.shape_30.setTransform(34.1178,-30.1933);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],8.1,227.5,7.6,41.6).s().p("EABVAgvQh1gMhEgfQgugVghghQglgjgPgrQgJgagGgxQgHg2gGgWQgPg5hNhkQhKhhgOg8QgKgvAJg8QAFgiAThIQAehzANhZIgTgnQg0hmgSg2QgWhHgBhJQAAgoAIgXQAGgQAVgdIBviXIAJgOQADgaAAglQABgmgBgmQAAgngDgZIgGgpQgDgYAAgRQABgLADgFIAAgCQgKgrgOgsQgSg4gUg1QgDgFgDgIIgCgIIgJgXIgMgaQgGAAgFgEQgFgDgGgJIgKgNQgEgEgRgLQgQgLgYgYQgcgcgKgTQgVgpASg/QAKgmAUgaIAVgaIAPgUQAEgEAJgFIAOgKQAIgHAOgSIALgMQAHgHACgGQAFgLgDgTIgGgfQAAgJADgGIBdCLQAbAqAPAdQAYAsgHAdQgEANgMATIgpBDQgZApgHAUIgEALIAAAHQgCAxAEAXIAIAhIALAnIAGAVIAOAqIAVAyQAPAlAHAXIAJAlQAdAhAuAbQAcAQAnAQIBGAaQA2ATAYARQAwAjAYBCQARAxADBLQACA1gGBgIAUAYQAVAaAxA1ICjCzQA6A+AeAjQAvA4AhAwQAlA1AFAnQAJA1gnBMIggA8QgRAjgHAbQgQA9AUBSQALAwAfBeQAPA2gIAeQgPA8hjAmQgzAVg3AOQgCAGgGADQgEADgVAEQgSADgfANQgiAPgOADQgUAGgdAAQgWAAgcgEgAn2+WQgEgKgBgWQgCgqAIgvIAHgjQAIAKABAFQADAHABAWQAEAoABAUQABASgEARQgDALgJAUIgBACQgHgGgDgKg");
	this.shape_31.setTransform(34.8533,-39.5346);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],6.5,239.3,6,53.4).s().p("EABoAiXQhNgNgngKQhBgPgwgXQg5gbgpgpQgsgtgSg3QgIgZgDgkIgEg+QgKiJguhUQgMgXgmg3QgigxgOgfQg6iCBKjNQAdhQAGgUQAPg6gHguQgEgYgNghIgWg5QgZhIADhSQADhNAbhNIAahEQAPgoAGgcQAMg7gGhQQgHhPABgXQAAgYAXhlIACAFQACAFAAASQAAAsAbAvQAUAiAoArQA6A9A2AqIAhAZIAgAaQBFA9AeBiQARA4ADBBQAFAKABATQAGBdAPAyQAYBOA3AnQASANAdANIAyAUQByAxBGBXQAlAuAVA1QAVA4ACA4QABAngMBNIgfDDQgGAnAFATQAEANALAQIAVAaQA1A/AJA8QAIA2gaA3QgYAzgtAlQgoAhg5AYQgsATg/AQQg8APhBALQABADAAAEQgBAJgMADQgFACgGAAIgLgBgAm+l1IgPgOIgPgPIgJgRIgTgfQgLgUABgPQAAgJAFgRQABgLABgCIAIgLIAIgNQAEgIAMgOQALgNAEgJIACgBQACgCACAEQAMARALAKQASAOAIAIIASAUIAQAOIARAMIAbAZQAMANAFAHQAKARgDATQglAIgiASIgXAMQgLADgNABIgKAAIgPAAgEgIpghRQANgmAZgXQACgBAVgIQgJBjgPAWQgDAEghAUQgGg+AFgNg");
	this.shape_32.setTransform(36.4638,-51.3182);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],5.3,169.1,4.8,-16.8).s().p("ABjX3QgbgCgkgKQiBgjhshLQhFgvgigyQguhDAJhEQADgXAOgmQAQgrAEgTQAHgkgGhGIgIhXIgwgjQg4grgogsQgtgzgag5QgbhAAAg+QABg7AchDQATgwArhFQA1hXAOgbQAjhBALg5QAHgjAAgxQhGhkghh3QgQg/AEgqQADgbAQg2QAJgsgBhIIAAhLIgEgPQgDgMADgHQABgEADgDIAAgCQABgUALgCQAKgBAFAKQADAHAAALIAAAhQASA1ArAnIAhAbQAVAQALALQAgAfARAtQAQAqACAwQACApgIAzQgFAigNA4IgUBZIAAABQAJAVARAQQAjAhBDAMIAhAHQAVADANAEQAaAHAeAPIA3AeIDbB/QA0AeAYAUQAoAfATAjQAXAsgEA6QgDAygXA0QgQAlgjA3IgsBKQAbApAUAYIAlAsIAiAzIBEBrQAbAqALAYQAdBAgIBGQgJBJgxAtQgLAKgSANIggAUQgRAMg2ArQgsAjgeARQgZAOg1AYQgVALgQAKIABABQAGACADAHQACAHgDAHQgFALgQAGQgXAKgdAAIgKAAgAmz1KQgkgogMgSQgHgKgDgHQgDgJAAgOQAAgcACgOQABgSAEgOQATAdAOAfIANAaIALATQAFALAHAYQAEALACALQAEASAAAWIgZgeg");
	this.shape_33.setTransform(37.6696,18.8273);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],6.4,184.6,5.9,-1.3).s().p("ABGZ3QgKgCgIgHIgDgEQhCABg1gfQgagQgnglQgtgsgWgXQgkgmgYgjQg9hZADhXQAAgOAHg2QAPhmgIhjIgcgfQhThUg9hlQgdgwgMgkQgMgjgGgyQgLhcAGinQACg1AEgbQAGgsAOghQAKgWAuhEQAlg2AHgnQAEgZgDgmIAAgJIgIgXQgRg2gFgVQgEgWgEgbQgCgWgFhxQgEhSgNgyQgCgJgChVQAEAMAJATQAgBDAZAfQAPATAiAeQAlAgAOAQQA0A7AVBbQANA5ABBMQAgA3AwAyQASASASARIAmAfIAlAiQAWAWAOALIADADIA1ASIAqAKQAZAHAQAHQAaAKAcAWQAQAMAgAdQAdAbAOAQQAXAZALAZQAKAZAEAhQACAWgBAnQgBBDgDAhQgGA2gPAqIgWAvQAPAaAUAbQARAWBBBHQAzA6AZAoQA4BZAGBqQAFBQgaBTQgZBOgxBHQgqA+gtAfQggAWg9AYQg5AWgpAJQghAHgeAAQgUAAgSgDgAni3rQgrg0gMg7QgEgPgBgQIAlAdQANAJAHAJQALANAIATQALAaACAVIAAAgIABAQQgQgPgOgRg");
	this.shape_34.setTransform(36.5773,3.385);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],7.5,128.7,7,-57.2).s().p("ACoQcQhsgDhmgqQh8gxhbhcQggghgQgcQgphEAGhnQAFg/ATgnQAVghAGgTQAHgTAAgpIgBgeQgYgqgug4Ih5iXQg2hFgVgwQghhJAIhVQAHhUAvhEQAMgSAgglQAfgjANgVQBBhjgKieQgDg0gOhQIgRhgIABgJQACgQgBgTIgBgUIAAgKIgCgPQgCgRAAghIAAgfIAmB9QANA8AnA5QAnA4A6AuQAwAnBGAmQAeARBeAwQBXArAzAeQBKAsA1AuQAfAbAKAWQALAYAAAuQgBBVgKBAQgOBPgfA9QgIAQgPAaIAJAMQAZAfApAiIBJA6QAoAjAYAfQAcAkATAzQAOAnAOA6QAeCIAGCGQADBAgKAjQgIAagTAdQgLARgaAgQgtA4geAYQg6AwhXAOQglAGgpAAIgngBg");
	this.shape_35.setTransform(35.4803,59.2931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_18}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-271.3,146,442.9);


(lib.fireBit32_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-55.6,153.6,-55.6,-91.8).s().p("AhiRFQgcgOgpgKIhIgOQiLgbhZhFQgzgnggg1Qgjg4gGg8QgGg6AUhGQANgtAhhNIA3iCQAghIAOgpQAXhAAJg2QANhSgPivQgOipAShXQAIgpAchOQAehSAYgtQAjhFBDhWIB1iRQA4hIAhg+IAUgtQAMAtgCAEQALBHAYBGIAfBYQBJDjhSEtIgSBAQgJAlgDAcQgCAUABAZQAchBAng8QAXgjAYgaQAdgfA2gmIBYg/IAzgpIBFgyIBSg5IAJAUIAPBCQAzDgg6C1QgLAigbBBQgxB5goB9QgkBxgJBIQgEAggCAxIgDBSQgGBTgUBRQgRBIgbApQgaAmg5ArQiZByiPAMQADAHgGAFQgCADgGAAQgHAAgMgGg");
	this.shape_14.setTransform(53.4046,87.1816);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-56.8,159.4,-56.8,-86).s().p("AhSR9QgJgCgHgFQgHgGACgHIAAgCQgjgIgsgPQhRgZgugXQhAggg/g4Qgzgug5hDQgbgggOgXQgUgfgHgeQgGgYABgeQABgTAEgkQALhUAMg2QARhKAbg5QATgnAvhJQAvhIATghQAjg8AVgyQAHgQAIgCIAEgBQAEgrgGg1QgEgkgMhAQgOhGgEgeQgJhFAChCQAChAAQgrQANgjAshAQBHhlBBhvQAwhSAUg6QASg2ABgxQgNgogCglQBWCuAaAwQAuBVAQAmQAeBGAFA8QAEA5gRBHQgJAngdBWQg4ClAMBYQADAYAJAgIAPA2IAAADQALhAAQg+QALgsALgbQAPglAWgYQAdggBAgdQBTgmASgLQATgMAkgbIAfgTQATgLALgIQAogdAYgsQAOgcAHgeIAAhFQA2CpARA+QAhB4gOBMQgIAqgZAzQgKAUgmBDQgqBKgiBIQgWAwgKAhQgOAtgCAnQgBAbAGAlIAMBAQAVBngDBSQgEBkgnBMQgoBOiCBxQiFBygoBKIgTAiQgMASgNAJQgSANgfAAQgVAAgagGg");
	this.shape_15.setTransform(54.6386,81.3166);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-58.2,163.8,-58.2,-81.6).s().p("AiUSVQgCgHAGgFIABgBQhWgKhSgfQg4gWgfgZQgbgWgYgjQgQgXgYgrQggg4gRgjQgYgzgOgsQgSg/gFhNQgDg8AFhSQAFhDALgnQAJgcASgiIAig6QBDhwBBh/QAlhIAPgtIAEgKIgBgLQgBgSgPiGQgVi/AdhsQAQg8AmhJIBJh/QBcifAIhpQABgUgBgeIAFghIBDBWIAnAqQAXAZANASQAyBEAGBcQAHBXggBVQgLAdgmBNQggBBgMAqQgUBEAIBJQAJBKAiA+IAdAuQASAcAJATQAPAkAEAyQApg/ARg/QAEgOAOhEQALgzANgdQAghGB3hcQB7hfAihAQAMgXAJgfIAQgtIANAeIADAJIAZBRQARAyAHAfQAKAxADBUQACBDgLAkQgIAagWAiIglA5QgpBEgTBcQgOBIgCBkQgBA5ACB0QgBBlgMBGQgZCUhSB8QgnA8g5A9QgWAXgbAaIgGAVQgFASgFALQgFAMgRAdQgOAZgGAQIgHAYQgFAPgGAIQgMASgaAIQgSAGggADIiSALIgEAAQgPAAgDgIg");
	this.shape_16.setTransform(56.0591,76.9173);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-55.6,171.9,-55.6,-73.5).s().p("AhiT7QgGgHgIgGIgJgBQgHgEgBgGQgegPgtgEIg7gEQgjgCgXgGQgwgLgqgjQgnghgagvQgthRgBh1QgBgsAHgeQAEgRAKgYQAMgbAFgOQARgsAHg3Qg1iNAOjIQAFhHANgsQALgoAYgsQARgfAfgvIBWiDQAwhMAcg+QAcg/AOg8IgBgFQgfhygIgwQgUiBAaiOQAXiAA8iFIAUgtQAKgaAEgVQACgLALhzIATAsIAAALQASA0AqBIQBEB0gBBEQgBAjgPAsIgdBLQhUDTAwCoQAKAkA7CEQAvBmACBFQADBMg2CAIgQAnQARgMAWgXQAZgYAOgUIATgbQAMgSAIgJQAUgVAJgLIASgfIgChSQgCg+AAgfQACgzAHgoQAThoA+g6IAdgbQAMgNAVglIAagzQAOgeAGgYQAFgRAzicIABgBQAFgKAGgCQADChAJAWIATArQAQAnAKA0QAGAfAIA/QAHA4ACAcQACAvgEAlQgHAxgZBEIgqByQgTA+gIBKIAfA8QAnBOARBWQARBXgHBXQgGBAgTAkQgMAXggAkQhNBXg+AwIhKA5IgNAKIABAWIAABSQgBAugFAkQgCAUgEAPQgNAtgiAgQgZAYgxAWQgXAKgNACQgJACgYAAIhZAAIACAGQABAGgDAFQgDAGgGABIgBAAQgIAAgMgMg");
	this.shape_17.setTransform(53.4388,68.8823);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-58.5,179.8,-58.5,-65.6).s().p("AiAU9IgdgIQgngEgWgNQgygOgfgNQhdgjg+gyQgwgogOgoQgOgnALg1QACgMAXhRQAhhugEh+QgDh0ghh5IgPg3QgIgfgDgYQgHg7ARhkQAPhaATg5QAZhKA3heQBDhrAhg2QA4heAchLQAMgiAHghQAAgGACgJQAEgPACgQQgBgYAAgbIABgkQgIhEgfhOIgbhCQgOgmgGgdQgXh+BkigQAbgqAHgSQADgIAng8QABAMgBAMQAEAQAHAOQAHAPATAcQAaAnANAYQATAkAKAgQALAmgBAjQgBAogRAfQgGAMgNASIgTAdQgTAggRBHIgIAhIAAAIQAAALgFAcQgbB6gMBHIgDAWQAGAmANAgQAQAqBDBkQA4BXANA7QAHAggBAsIgEBMQgEBAADBhQAqg2AyggIAygfQAdgTAMgVQASgcgBg3QgGhkABgyQABhWAeg2QAIgQAcgmQAYghAKgWQASgqgChLIABhqIAaAwIAGAIIBMBfQAqA+ANBMQANBMgUBIQgFATgLAgQgOAlgEAOQgoCAAhCCQADANA2CZQAjBkgFBEQgHBWhGBlQgQAWguA7QgnAzgVAfQgwBJgcBVQgcBUgFBYIgCAjQgBAUgEAPQgMAygrAoQgoAlg2ARQgvAOg7ACQgbABgmgCQgCADgFABIgHABIgJgBg");
	this.shape_18.setTransform(56.3353,60.9571);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57.6,190.1,-57.6,-55.3).s().p("AhZWxIgDgBIiAAAQgtAAgVgIQgTgHgSgRQgLgLgSgWQgwg6gvhDQgigugQggQgYgugFgqQgJhIAthmIAnhSQAWgxAKgkIACgJQgBgogJgtQgJgtgYhIQgchXgIgeQgRhDgGg/QgGhHAIgyQAHgoAahFQBPjHB3i2IApg/QAWgkALgfQAXg/gIg/QgCgQAEgHIABgBQgOh0AbhqQgEgGgCgNQgEgigYg2Qgdg/gGgXQgKgpABhBQABgoAEgUQAJgqApg9QAagkAHgNQAQgdAEgZQACgOgBgYQgBgcABgLIABgCIASAzQAcBRARAnIAfBEQAmBVgHA6QgGA1g6BXQgyBNgOAvQAAAHgDAKIgBAHQgDAhgEARQgBAIgDAEQgHA1ADA2QAGBaAhBTQATAxAyBgQApBWAFBAQAEA0gVBkQgVBmADAyQADAxAYBIIAbBXQAShHAbg9QASgmAOgWQAUgeAngnIBChAQAigkAdgvQgCgQgGgOQgGgPgMgVIgUgjQgVgrgIhFQgDgkgBglQgBhfAkgyQALgQAbgbQAtgyAWhEIAjiDQA3CQAeArQAZAjAKAVQANAfAGAsQALBFgMAsQgGAXgOAaQgIAPgTAfQgyBSgcA8QgNAdgKAcQAQBEAjA+QAYAtA5BWQAtBOgCA/QgBA1gjBGQgWAsgwBPQg0BTgYAjIg/BTIgMAQIABAKQADASAHAiIAKAzQAEAgAABCIgDCIQgCAmgFASQgPBAhDAvQgZASgkAQQgWALgrAQIiCAzQgFAHgQABIgLABIgFAAg");
	this.shape_19.setTransform(55.4531,50.6287);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-54.8,197.5,-54.8,-47.9).s().p("AiyXqQhOgEg0ghQghgUgegkQgUgYgeguQhBhlgYhBQgkhkARhWQAKgwAlhFQAwhcAJgVQAthugSh4QgGghgShBQgWhVgLg6QgQhPgDhDQgGijA9h4QAZgxAvg7IBShkQAvg6AagxQAgg/AGg7QABgKACgGIABgNIAgiVQACAEABAIQADAjgIBGQgIBGADAjQAFA1AjBWQAoBhAIAqQAPBOgbCoQgaCjAVBTQAGAVAUA0QARAuAFAbQAGAbAAAhIgBAiQACAEACAJQABAOgBARQgBAVgHAqIgBANIALgVIAphAQAYgmALgdQAOgnAGg/IAJhqQANhbAzhPQASgcAqg3QAigxALgpQAJgkgEgwQgYgVgKgRQgPgZgFgkQgDgXAAgqQABg/AKgdQAEgMAUgkQBNiNALigIACgLQgFgmgCg5IAAgHQBQDvARAVQAHAIAVAWQATATAIANQAVAigCA4QgDBIgkA/IhSB/IAAAEQgTB2AgBeQANAnAvBUQAsBOANAvQANAwgDAzQgCAzgTAvQgKAZgUAkIghA7Qg0BkgSCDQgPBpAFCMIACBMQAAArgIAhQgaByiJBwQg1ArgnALQgQAFgYACIgqADQgeADgfAGIAFADQAIAGgEAHQgDAGgMABQhIAIgvAAIgUAAgAhbx+QgIgJgHgEQgNgIgVgCIgmgCQgFAAgDgBQgDgBgFgIQgIgJgDgFQgDgIAAgNQgBg5AjhJQATgoAbgoQAKgQACgGQADgKgBgUQgBgWACgJQAEAkAVBSQAEAPAFAKQAEAHAGAJIAeArQASAcAHASQASAtgKAxQgCAKgDAEQgIAJgaAAQgZgBgHANIgOgOg");
	this.shape_20.setTransform(52.6937,43.274);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-52.7,199.9,-52.7,-45.5).s().p("AgaYXIhBgDQg4gCgdgJQg5gQgxg0QggghgrhGQg9hlgtheQgNgbgFgSQgRgbgKgaQgQgvgBhWQAAhJALgpQAThGBRhaQAvg1AeglIAAggQABg0gDhUIgCgzQgPg0gHgiQgbiCAIiXQAFheATg6QAUg9A7hWQBKhuARghQAzhhAJhsIAAgMQgBgvAFheQADgXAMABQAMAAAAAWIgBAsQADACABAEQABAHgFAGIgBAcIAAABIABA0IAAASQADBcAVBBQAHAVAdBCQAXA2AHAjQAQBLgXBmQgOA7gmBzIgCAJQAMBMAdBJIAUAwQAKAdAFAUQAJAkAAA3QAAAtgFByIgCBZIAFgHQAOgTAlglQAigjAPgVQAcgoAQg3IgCg7IgEh3IgBg5QABghAEgZQALhAAmgmQAIgJASgQQAZgVAdgtQAbgoAHgcQAEgTgBgiIAAgCQgCgFACgJIgBgkQAAgNACgGIACgDIABgfIABgDIgJgUIgXglQgQgXgGgPQgJgZABg1QACgzADgbQAGgqAPgfQAGgOAVgfQASgcAHgRQAPgkAAhCIgBhVQAAgMADgGIADgEIABAAQACgEAEgDQAGgDAEACQAIADABASQAFBMAqA9IAcAmQAQAWAHASQAWA3geBJQgKAXgUAkQgYAqgHAQQgYAxgSBEIgOA+IABAIQAEAcgBAuQgBAWgCAOIgDAMQAKA9AaAuQANAWAzA/QAqA0ANAmQAdBTgvBuIgNAdQgCASgDAMQgEAUgWAvQgvBogdBwQgYBegLBfQALAgATAnQAsBeAJArQAHAlABA7QABAcgCARQgDAYgKARQgOAZgnAbQgyAihqA+QhcA6guA6QgPAVgMAEQgGACgJgBIgPAAIgOAAIgBABQgHAEgNAAIgGAAgAhc0FIgVgkQgLgVgBgRQgBgMAFgUQAMg6ATgkIAVgkIAVgjIABgCIANAWQALAQAGANQATArAEBOQABASgDAJQgDAMgRAZIgWAhQgTAggIARIgFANQgIghgOgZg");
	this.shape_21.setTransform(50.5129,40.8333);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-51.5,213.1,-51.5,-32.3).s().p("AiAaDQgugEghgRQgqgVgxg/QiPi2gti6QgahpAGhnQAGhsAoheQAPgiAuhTQAqhKAQguQAehSABhxQAAg3gLiRQgKh9AHhMQAJhuArhPQALgVAXgiQAZgmAJgRQAnhFAWhnQANg8ASh6QACgKAFgHIABAAIAAABQAICPAAARQgCA0AIAnQAFAaANAmIAVA+QAbBWgDBQQgBAfgTB0QgPBZAJA4QAFAfAPAqIAaBIQA3CmgZCsQgGAogOBOQgIBFAKAwIADAKIAEgXIAKhEQAOhJAjhBQAkhCA2gyIAVgWQAMgMAFgMQAIgTgCgpQgEhVAGhdQADgqAGgbQAHglAOgbQANgZAggnQAjgoAMgVQAHgLAkhjQALA/gBAEQAAAoAKAcQALAdAfAtQAlA1AKAVQAaA0ABBBQABA7gUA+IgVA9QgOAmgGAXQgKAjgEAtQgDAdgCA0QgEBYALAuQAFAYAOAkIAVA8QAVBGgGBWQgFBFgYBYQgSBHgYAtQgqBQhjBOQiKBsimA3IgBABQgCAKgSAAIgrABQgXAAgQgBgAFPmlQgXgZgKgOQgTgWgFgVQgIgbALgwQAHgiAKgXQAGgOALgUIAUgiQAagxANg0IAEgPIABACIAUAdQA4BPAQBeQAGAjgJATQgGAMgVATQgkAigOAZQgPAagMA7IAAAHQgMgWgRgUgAhK0UIgJgTIgBgBQgKgdgMgYIgNgfQgEgNAAgbQAAgxACgaQACgqAKggQAFgQAYg6QAHAPAHALQAHANAOAQIAXAbQAzA8ACAvQABAegQAkQgGANgcAvQgXAmgSAnIgPgZg");
	this.shape_22.setTransform(49.3194,27.6194);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-52.9,226,-52.9,-19.4).s().p("Agbb1IgGgDIg0gBQg1gCgcgDQgtgEgigLQgpgNgggYQgigagQgjQgOgdgDgsIgEhMQgEhEgWg/QgIgXgWg0QgTgvgJgbQgPgygFg/QgDgtABhHQABhTAOgsQAQgxApgyQAXgcA5g5QAjghAQgYQAlg2AJhUQgNhZgbhYIgYhOQgOgugHggQgVhmARhnQARhpA1hZQALgUAggvQAcgqAOgZQAFgKAfhQIAAACIADgIIAMA0IAXA9QAzCGgHBPQgDAmgXBMQgXBJgDAnQgEA7AYBIQANAnAnBVQAjBNANAxQAUBIgKA7QgHAngcBAQgXAygLAeIABATQACAMAJAnIAbBoIANhPQAOhSAVg/QAPguASgcQARgcA6g7QA0g0ARgmQARgmAEhGIAGhEQgGgFAAgPQgBgwABgaQADgqAJggQAGgXAQgkQAIgVAGgJQAIgMAVgUIAcgZQAngmASgZQACgGADgFIAEgEIAghcIAEADQAGAGgJAjQgIAkAAAKQAAALgDAHIgGALQgCA9AHAqQAEAXAmB3QAcBVgIA5QgGArgjBDQgoBOgJAfQgaBdAoCCQAIAcAdBPQAYBDALApQAhCDgpBbQgMAcgfAsQgiAwgLAXQgJARgNAkQgOAjgIARQgMAXgjAxQggAtgNAcQgJAWgOAtQgOAngUAUQgZAZg7AOQgdAIgeAFIgCABQgJAFgSgBIgBAAIgcADIgGABQgHAAgGgDgAEJriQgBgWAEgiQAEgcAGgQQAGgTAOgSQAHgJAQgQIABgBIACANQAGApAAAVQAAAjgNAYQgEAJgKANIgOAVQgHAKgIATQgIgTgBgYgAiB4QQgLgbgDgOQgEgSAAgmQABgrAEgVQAFgTAKgZIAMgaQAZBPAHA1QAEAlgEAbQgCAUgLAjIgJAgIgYg0g");
	this.shape_23.setTransform(50.7297,14.7725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-54.4,237.5,-54.4,-7.9).s().p("Aj9dUQhOglgmg5QgshBgDhzIAAheQABg6gFglQgGgogUhNQgWhOgFgoQgMhVAUhnQAOhMAnhsQAUg5AVgdIAPgTQAHgLADgJQAEgLADgCQAGgGAJAGIACABQARgaAIgUQAQgkAJg3QAQhgABhqQAChfgRhDIgPg5QgLgjgEgWQgKg2AIg4QAIg4AagyQAGgPAkg5QAagrAKgfIAVhNIATAkIAPAZQApBCAMAhQAiBdglB9IgbBSQgPAxAAAkQAABCAwBgQA/B7AKAjQARA8gHA+QgDAngPA1IgcBaQgfBxAZBIQAIAXAXAlIAUAjIAMgdQATgtAXiIQAUh0Alg6QAQgYBMhQQA8g9APgzQAHgdABg8IAAh/QgBguAHgVQAHgbAjgwQAJgMAqhKQAHAdACAMQACAoAIAdQAEASASAxQAQAqAEAaQALA9gWBcQgkCTgBAHQgHAogBBcQAAA1ACAcQADAtAMAiQAHAWAbA0QAWAvAHAdQAUBRgyB0QgOAfgeA9QgaA3gKAnQgHAZgHAqIgMBCQgIAogSAvQgKAcgYA4QgaBAgWAhQghAxgsATQgUAKgdADQgRADgjABQhoAEhEABQgEAJgOABQgKACgKAAQgqAAg0gYgAEUvKQAIgRASgaIATgcIAAACQABApgGAbQgIAdgVAdQgKAQgRATQAAg5AQgjgAhi9rQACAWgBAXQgFA6gbAyIgNAXQgDhhAvhPg");
	this.shape_24.setTransform(52.2001,3.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57,163.3,-57,-82.1).s().p("AjoSxQhPgLg0gtQgXgUgVgcQgYgggLgdQgIgVgFghQgNhiAmjUQAPhTAFhCIgShCIgghzQgQhBgHgzQgRiHAshgQALgXATgeIAhgzQAUgfAnhJQAohJASgpQAdhAAKg4QAHgrAAhWIgDiJIgCgDQgBgEgCgOQgBgMgEgTIgGggQgDgSAAglIAAhbQABg/AGgaQACgKAXg/QARgsgCgeQgBgTAGgFIA2CwQAFATADAeQAIBOgNA3QgFAXgPApIgKAdQAKB8A7BuIAiA8QAVAkAKAZQAIAUAKAnQALAnAEAVQAGAiAAAcQAAAbgGAaIgSAvQgSAsgMAtIgHA7QgEAqAABQIAegiQAsgyASgiQAMgYAIgeQAFgTAIgnQANhFALhFQAIg0AKgVQAKgWASgWQAMgOAYgXIBIhFQAngoAfgnIAcgjQgDAEAOgsQAOgsADgCQAGgcAAgcQAAgOADgGIAEgFIABCBQgtFrBjEDIApBsQAUA/gFAxQgFAzggA0QgZAoguAwIhOBRQgkAmgVAjIAGAVQAKAjAdBDQAhBTAFBeQACAogHAYQgPAwhEAtQhYA5hnAXIAAAAQgDAHgFAFQgIAIgRAFQghAMg1ANIAAAEQgEAHgOACQgxAGgoAAQgeAAgZgDg");
	this.shape_25.setTransform(54.8391,77.4306);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-57.1,154.4,-57.1,-91).s().p("AiPQ7QgKgCgCgIQgsgDgZgFQgTgFgegLQgkgOgMgDQgugMgWgLQg/gfgchQQgMgggFgoQgEgbgDgvQgDgnADgYQAEgYAPgrQAjhcAphdIAAAAQAPhHABgvQACg0gOhHIgbh5QgPhHAAg0QAAhEAWg0QAKgXAUgeIAigzQA5hUAkhcQABgMAEgQQAHgggBgPQgBgLgDgNIgIgYQgdhdAKhjQADgaADgLQAEgOAPgkQAUguARhAIAehxQACgHADgDQATA6AQAgQAQAfgEA+QgFA9AmCBQAlCBALAvQAWBXgBBHQAAAvgJBhQgEBVAYA1IADAGQAaheAqhBQAjg2AsgeQAVgOA0gXQAxgWAXgRQAxglAjhMQAhhKAMhRQABgIACgFIAMBaIAABMQAAAtADAfQAGA4AXBUQAjB9ADAOQANA7ALBZQAHA8gDAmQgFA2gYAkQgQAWgeAYQgRAOgkAaQgfAagbAhQACAcAGAhQAJAtATBbQAHAvAABVQgBA3gGAYQgNAvgyA6QhsB8iUBJQhMAnhUAUQgGABgFAAIgJgBg");
	this.shape_26.setTransform(54.9724,86.3193);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-56.9,159,-56.9,-86.4).s().p("AiuR2IgGACQgIACgOgEQgzgSgzgpQglgegxg1QhEhLgjg8QgvhQgChMQgDhKAthpQBCicAFgSQARg3AFhGIgqipIgQhCQgHglgBgeQgDhEAZhGQAWg/Arg+IAiguQAUgdAMgUQAXgnAchUQAriCAag4IAghCQATgnAJgcQAVg8AChQIAAgBIgBgNQgDg2gBhTQAjCUAAAEQADAxAHAnQAJAyAaBdQAbBgAJAvQAWB6gLDpQgFCDAABcQAcgxAogyQA+hLCBhrIA7g0QA/g+AnhSIA3iBQgGB6AAAeQABA9AQBPQAJAuAWBbQASBSAFA4QAQClhGBoQgLAQgVAZIghAoQgtA7gUBJQgVBJAIBKQAEAnAPBOQAKBFgOAuQgIAcgUAeQgOAUgaAfQhmB3h3BrQglAhgZANQgjASgxAAQg0AAgtgVg");
	this.shape_27.setTransform(54.7163,81.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_14}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-186.7,123.6,384.7);


(lib.fireBit22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.4,168.1,21.4,-89.2).s().p("AhITmQghgDgfgSQgbgPgagZQgSgSgbggQgqgygWgiQgfgxgLgtQgKgpABhRQABhTgJgnQgOg/g0hLQhBhTgdgrQhSh6gkiqQgeiLABizQAAiIAXhUQAMguAZg7IAthmQBWjHAljZQAShqAGhqIAKguQAVAeAAAKIASAjQAsBTBeCjQBQCQAjByQAsCTgRCAQgHAvgWBdQgRBUALA4QAIAxAhA8QAUAiApBDQApBJAcBWIAJgWQAWg1AIgnQAQhNgTh8QgYihgBgrQAAhqArh8QAfhVBEiDQBIiJBDhzIAeg6IAAAJIABgCIgEA+IABAhQAECKAvCuQAcBsAiA+QAPAcAbAmIAsBBQA4BTAWBQQAbBegXBPQgIAdgSAnIgfBBQg5CBADCqQACCBAmCzQAMA4ADAVQAHAsgCAiQgEA7gdA1QgdA2gvAkQguAkg7APQg6AQg7gIQg/gNgggEQg3gIgkAPQgSAIgbAVIgdAWQgEAMgQAJQgXAMgbAAIgOgBg");
	this.shape_10.setTransform(61.6149,129.609);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],19.3,166,19.3,-91.3).s().p("AgJS8QgJgBgDgGIgNAEQgtAIgqgUQgXgLgggdQhUhLhJhZQgeglgLgaQgKgXgFgnQgMhaAMhwQAFgrAMhDQAEhLgThJQgThLgvhWQgZgshFhqQg9hfgcg3QgrhWgNhNQgaiZBLioQA3h8B+iUIAyg6QAbghARgcQAxhNAYhzQACgIAehTQAJAdgBAEQASAvAVAtIAjBIQAUAqAKAgQASBAgDA+QgDA7gpCLQglB9AFBJQAGBEAqBeQBBCRAFAMQAVA8ALBKQAIA3AFBTIAFBDQAYhRArhHIAggyQARgeAIgWQAIgYADgeQACgTAAglQABhlgGg5QgZiMgLhGQgUh8AYhSQAMgqAcgzIA2hYQAXgmBPiXQAPBPADAIQBKDhCcCaIArApIArAqQBEBKAdBbQAfBigaBYQgPAxgzBOQg3BWgQAnQgiBUAGBwQAEBIAbCCIA8EkQAIAlACAWQADAggHAZQgLAugtAqQg1AxhdAiIilA1QgtAPhPAgQhVAjgmANQgHADgGAAIgCAAg");
	this.shape_11.setTransform(63.7803,131.7286);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],23.4,181.8,23.4,-75.5).s().p("AANVOQgFgBgBgFQg0ABg1giQgrgag3g+Qhrh5gvh0QgihTAHhEQACgZAKgiIASg6QAUhGAIhIQAIhLgNgzQgIgfgRgjQgKgUgZgqIhViOQhGh1gthRQg/hzgahXQgih0AVhhQAPhFA4hgQBMiDANgdQAXgzARhCQAMgxAMhJQAcihgBhxIABhfIAdAyIATAdQA8BYBrC7QA4BjAZAzQAfA+AFArQAEAlgKAxIgYBVQglCEAGB8QAHCKA7BsQATAjAsBBQAlA8ALAvQAMAsgEA8QAuhAAhgpIAlgsQATgZAKgXQAVgtgDhMQgDhXgchVQgGgVgRgrQgQgqgHgXQgbhZACheQAChfAfhXQAchPA+hgIBPh+IABAHQADARAIAUIgEAFIAEAPQATBPAxBaQAeA2BEBmQBNB0AuA9IAmAyQAVAdAMAYQBCCBgxDVQgNA4ggBwQgZBlgDBHQgDBVAZB7IAsDPQATBtgTBJQgKAqgmBIQguBZgbAqQgrBDgzAnQg+AwhAgCQgZAAgjgJIg6gRQhLgSgrAaIgJAEIgZAlIABACQAFAKgLAKQgJAIgLACQgHAJgHAAIgEgBg");
	this.shape_12.setTransform(59.6134,115.9324);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.6,180.8,21.6,-76.5).s().p("ABuV/IgWgBIgfABQgOAAgIgEQgFgDgDgFIAAgBIgWgIQgPgGgXgQQABAGAAAEQgBAGgFAFQgEAEgGAAQgJgCgGgPQgKgXgMgYIgMgMIgKgNQgSgZgeg2IgohJIgCgDQiCi3gVgiQgzhSgNg9QgShUAhh+IAfhqQARg/AHgrQAIgwABg9QAAgfgBgyQgggpgjgmIg1g3QgfghgSgXQgjgugehBQgSgmgghQQgihagKgpQgShLABiEQABhjAOg2QAMgsAcg3IA0heQBLiNAgiVQAJgsAwiOQAQASA2A4QAtAuAWAgQA9BUAeCJQAaB0gMBYQgFAlgPA0IgaBZQgaBfgDBkIANAVQBIBxAUAsQAoBXAPBxQALBVgCB7IAAAfIAAgBQAMgZAYgpQAyhWAtg4QATgZAngtQApgwASgXQBChXAShKIAEgLQgEhgghhbIgyh3QgehHgIgyQgLhBAQhOQAQhSAog3QAFgHBQhVQAVgVAyh1IASApQADAdAGAcQASBHBHB4QBKB8ATBBQAdBjgWBkQgGAfgPAqIgaBHQgmBrgVB6QABBaADA1QAQDdBKCvQALAbAiBIQAeA+AOAlQADAJgBAIQASA9AHBCQAFAtgDAnQgEAxgRA4QgUA+gXAeQgOASgZAWIgmAjQgBAJgGAMIghBNQgKAVgHAMQgIANgUAXQgzA6g0AzIgcAZQgUARgdAOIgQAOQgSAPggANQglAOgRAIIgMAGQAAAJgLAFQgGACgIAAIgFAAg");
	this.shape_13.setTransform(61.4036,116.9236);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],22.8,197.4,22.8,-59.9).s().p("ACDYeQgzgDglgTQghAKggABQgmABgigOQgkgPgXgbQgegjgLg+QgIhKgGgkQgQhehaiiQhcingShZQgOhBAGhDQAGhEAZg+IAVgvIALggQgWidhAi2Qgth/hejUQg0h3gShBQgehqAOhWQANhMBAhyQBLiGASg1QARgzALhTQAViigLiiQAAgOACgHQgGgwAEgwIAcBtQAfB9BbB2IBDBUQAmAxASApQAoBcgQCFQgGAugQBCIgaBvQgRBMAAAzQABA3ASBBQAOAuAdBEQA2B+BCB3IAnBHQAVApANAgIAHASQAGg3ALghQASg5Asg8QAYghA/hHQAqgvAUgcQAfgsAMgpQAJgdADgmQACgWAAguIARihQARArAAAGQgDBgAZBsQAVBYArBtIBQC+QAwBzAZBOQAKAiARA/IAaBhIAZBQQANAuAGAjQAVB3glB8QgkB4hRBhIg6BHQgeApgJAmQgIAkANBWQAMBOgQApQgXA5hFAdQgbALgjAHQgYAFgoAEQgrAEgfAAIgZgBgAAmHHQABBKAJA8QAEgkgBgnQAAg6gMhKIgBBJgAFFpUIAAgCIABABQAJADABARIAAABQgBAAgKgUgAFWr2QgJAAgFgGQgDgEgBgGIgCgLQgEgOgSgFQgPgFgRAFIgeALQgSAGgNAAQgdgCgVgdQgNgTgIglQgGgjAFgUQAEgPARgbIA/hiQAcgtAMgWQAVgmAKgiQAMgsADhWQACgmAJhXQAiBNAgA+QAqBSBNBaIAsAzQA8BOAcBaQAJAagCAQQgDAggiAXQgVANgZADQgaAEgXgIIgtgSQgbgKgTAFQgXAagSAgQgKAUgJAHQgGAEgHAAIgCAAg");
	this.shape_14.setTransform(60.2516,100.2743);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,205.3,21.3,-52).s().p("ACoaeIgdgEIgWgEQgRAHgbgCQiIgHiUiDQgdgbgRgUQgXgbgKgcQgPgnAEhIIAGh4QADhGgCgxQgCgmgEgiQgsgmgYgXQg5g3gqhDQg1hTgLhOQgHgtAGg9QATizBkiWIAig1QASgfAFgbQAEgTgCggQgBgmABgOQAAgJAFgIIACgCQgJiZgyiqQgbhdgrhqQgagggkgpQhahogVhOQgUhKAVhaQAPhFAshaQAhhFAIgUQAVg0ADgrQACgYgDgsIgCgcQgQgogDgqQgBgXANgCQAOgBAEAaIADATIADABQAGACACANIAFAoQAHATAKASQAdA1AuAnQAVASAuAgQAnAfAPAeQAOAZAIA4QAIAxAAAfQACBag3CbQg9CngFBNQgBALgEAHIgEAFIAJAVIAKAVQAHANACAJIABAEIAUAdQAaAmBNBlQBCBWAjA2QAeAtAQAiQAWAtAGApQADAYgBAfIgEA3IgTDZIALAqQAQA5AJAZQAVA7AfA7IATAgIADgHQAlhtAEhGQACgrgIhAQgLhIgDgkQgGhDAEhaQAFhjAPhKQAShdAjhJQAQggAuhKQAqhDARgoQAXg1AJg3QgLhOADhIQABgUAGgIQAFgGAIgCQAIgBAFAGQAFAFgCAOQgEAqABAtIABAAQAGAEABAMQADAfgFAhQAGAwALAzQAXBlA5CdQAzCLAnBKQAMAWAxBWQAnBCASArQAvBtgCBxQgDB4g7BcIgKAPIgGANIg8CBIgEASIACABQAFADABAFQAAAFgGAHQgxBDgLBpQgHBAAKB4IAKCCQAEAsgCAXQgCAmgNAaQgJAUgSATQgKAMgZAWIgyArQgdAYgZAOQg7Ajg3AAIgMgBgAFJxmQgFgNgMgRIgUgdQguhHAFhpQABgoAKgzQAEgZAPhBQAUhWALhCQAKAaAMAZIA/B1QAjBGALA1QAIAmAAA4QABAkgIAUQgFANgRAaQgvBGgkBMQgCglgIgVg");
	this.shape_15.setTransform(61.7663,92.369);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],23.1,229.8,23.1,-27.5).s().p("AAvdOIgYgGQgIAGgLACQg6ALg9gPQg8gPgwgmQgvgmgcg4Qgdg3gCg9QgDg5Aih+QAfh2gJhBQgHg0gfg3QgXgqgrg2IhIhbQgog1gUgtQgvhpAQiNQAGg3ARhEQAKgmAYhSIAoiJQACgHADgDIAEgCIAJgpQAJgjAEgZQACgUABg2QABiTgDhSQgDhJgHhAIgMgaQgSguADgoQABgLAFgHIACgDIgBgEIgBgQIAyCNIANAYQAdAyBZB2QBOBoAgBCQA1BtAPCRQALBtgJCdIgDA+QgBAjAEAbQAJBNA6BlIAUAjIAxhaQAthQANg4QAIgjABgtQABgZgBg4IgHkTQgCg7ACggQAEgyANgnQAJgYAUghIAgg4QAagxAdhdQAbhYANhCQAShVAChJQAAgMAGgJIACgEQASBWgBAKQAFACACAGQAEAIAAALQAABwA6CQQAhBTBNCiQAxB0AgCAQAWBbAFBKQAGBZgRBLQgGAagNAlIgVA+QhSD2AfDdQAHAzATBjQAXCLgTBiQgMA9gcAzQgfA3gtAjQhJA7hvAIQgTACgUAAQhFAAhagSgAnvupIgTgaQgNgUgLgMIgbgYQgTgRgLgPQgXghAAglQAAgVAIgaQAFgPAMgeQATgrAMgUQAQgZABgFQAFgLADgdIAEgtIASAsQAOAjAIARQALATAWAfIBABcQAbArABAbQAAAVgKAbQgKAZgSAdQgMASgXAgQgQAXgNAFIgZgigAFc3jQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQgUgXgYgQIgTgMQgLgHgGgIQgPgSACgYQABgJAIgTIAJgYQATgvAHgbQAHgbALg2QAHgfAJgfIAYA2IAxBaQAaAuALARIAXAhQALATAAARQgBAKgDAKQgCALgFAFQgEAGgJADIgRAEQgSAFgbAWIghAZQgDADgCAAIgBAAg");
	this.shape_16.setTransform(59.9616,67.9303);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],20.9,245.4,20.9,-11.9).s().p("EgBLAgFQgZgMgkgdQgrglgPgJIgsgYQgbgPgPgMQgbgWgZgtQgphIgOhKQgPhRAUhIQAGgVAOgfIAVg0QAahHAGhLIABgZQgMgVgPgWQgfgsg9hIQhGhRgZgiQgug9gOgvQgLgmgBhGQAAheANhBQAGggAOguIAYhMQA0i3gDjgQgBiBgWihIgDhEIAgA8IAWAeQAiArA3A2IBgBcQBzBvAjBgQAlBogWCYQgGArgSBUQgRBVgHAqQgOBdAPA+QAHAfASAnIAhBEQAYAzAQA1QASgcAmg1QAog4ASgiQA7hpAEh4QADhHgciZQgaiRAHhPQAJhcBPi6QA6iHAOhbIAThVQAPBQgEAUQAEAnAPAtQALAhAWA0QBDCeBQCRQBYCfAWAyQA0B6gBBmQgBA2gPAnQgLAcgXAjIgpA6QhQByggCHIgIAqQAJBBAFAZQALA9APAtIAgBXQAwCGAHCPQAFBYgYAyQgOAegjAmQgxA1gqAUQgiAPhIAIQhLAJgoABQg+ACgxgKQACADgCAEQgCAGgLAEQgaAJgYAAQgfAAgegNgApCzBQgYgogJgbQgSg2AKg+QAEgWAFgPQAGgUAGgPIAKgXIAEAGQAFAKAEAFQAEAGAKAIIAQANQARAQAIAdQAFATADAhQADAvgEAYQgCAMgGASIgKAeQgIAcgFAiQgJgSgZgqgAEg7QQgKhEgEgzQgDgpACgbQACgmALgdQAKgYAaglIADgGIAHAOQASAnAHAaQAIAhAABAIgBAoQgBAXgFARQgFAUgRAgQgTAlgGAPIgMAmIgLhNg");
	this.shape_17.setTransform(62.1837,52.2996);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],21.3,262.7,21.3,5.4).s().p("EgANAiWQgugDgjgLQghgKgTgQQgNgLgIgNIgBgBQgkgbgjgsQgVgagmg4IgvhGQgegsgIgWQgMgagFgjQgDgVgDgrQgEg/AFgfQADgPAGgUIALgiQAJgeAJguIAAgBQgIgygXgrQgNgZgXgfIgog2QhKhogkh+Qgjh+AKiAQAHhfAwiwQAzi2AJhYQAHg9gChhIgBidIABheIgBgyQA3BHAIAHQBaBSBWBzQA/BWAYBFQAPAwACBBQABAdgCBWIgGCuQgFBmAIA7QAKA/AiBVIA7CPIARAuQAQgdAVghQAlg5AqgyIAignQASgXALgTQAvhWghiJQgFgWgahYQgUhEgGgrQgNhZAXhgQAUhYAwhVIAuhUIADAFIAFgHIAPAgQAYAgAlAsICGChQApAwAVAbQAhArAUAmQAvBWAMBjQAMBjgbBeQgOAyhQCqQhACFgCBbQgBAkAIAsQAEAdAMAzQAsC9AMBSQAWCZgRB5QgOBkgoBGQgVAngaAQQgRAKgSABQgUACgPgKIgDgDQgiALgkADIhEAEQgqABgaAGIguAKQgPACgUAAIgoABIgqgBgAo60cQgagugHgZQgIgbgBgnIAAhFQgBgugLg5IAOALQASAPAeAiQAQATAEAKQADAJABAXQABBBgEAfIgMA+QgEAWgCAaIgLgSgAE3+pQgFgrALg+QAGgiALgXQAIgRAZghIASgZIAGAOQAZA/gMBAQgFAegOAlIgcBAQgLAagHASQgWghgGgug");
	this.shape_18.setTransform(61.7365,35.0325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],27.1,295.2,27.1,37.9).s().p("EACCAnsQg0gCgtgFQhagKgvgfQg1gigehGQgYg2gNhSQgShrgIgfQgUhMgngvQgMgOgXgWQgcgZgJgKQgYgagXgnQgPgYgYgwQgXgvgLgZQgRgpgIgiQgIgigCgqIgCgFQgDgHABgJIAEgmIACgqIADAAIAGgeQAFgYAQg3QAOgzAFgcQAOhKgJhiQgEgsgUiBQgRhsgBhAQgChdAYhKQAKgeAVgqQAXgvALgYQA9iIAEiZQAChxgchoQBdCFAaAqQA4BfAgBqQAgBqAEBuQADA0gCBqQABBdASA9QAUBFBKB4QBLB5AUBCIAGAXQASgoAWgrQAfg6A1hWQAjg4ALgfQAUg1gBhXQAAgcgQjHQgLiKAPhYQAOhQAphcQAYg2A1hhIADgGIACgCIABgDQAGgKAHgBQAAClAFAdQAJA7AsBUQA5BvALAdQAhBagDB1QgCBWgYB9IgmDQIgFAnIBFBzQARAjATBHQAcBmAMA/QAcCSgKC3QgEBUgPB+IACASQAIBAACAgQADA0gDArQgEApgMAYQgIAPgVAYQgdAfgoAjQgaAWgwAmQgUAQgMAFQgMAGgRABIgdABIjHgDIgCAAQACAEgBADQgCAMgUAAIgDAAgApv5JIgMgcQgFgQgBgXIAAgpQAAgaABgFIAEgNIALAcQAOAmADAUIAEAsIADA5IgWgjgEAHbglrQgRgfgDgPQgFgSAAglIAAgbIAMAUQASAhAHASQAIASADAOQADAMABAYIAAAkQgMgSgPgdg");
	this.shape_19.setTransform(55.947,2.5162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_10}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-251.4,143.70000000000002,513.3);


(lib.fireBit12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.4,138.1,-5.4,-51.5).s().p("ACYR6QgEgCgEgFIgBgBIgRgFQgJgDgCgFQgDgGAEgEIgDgCIgdgKQhEgUhJgzQgtgehThFQglgfgRgQQgdgcgUgZQghgtgahDQgnhmgBhiQgBhuAwhVQAMgWAcgmQAdgoALgTQAng/AMhLQAMhKgQhJQgJgngshrQgkhagFg6QgHhYAxh1IAshhQAbg7ANgnIARg2QAKghAIgVQAMgbBHh0QAEgHA4hzIgOBpQgRBOAABRQABBfAZBbIAXBLQAPAvAHAdQAXBhgJCKQgFBPgTCfQgKCIAICFQAEBYAVAzQATAuAxA6QBDBQBTBKIAoAkQAXAVANATQAtA+gBBYQgBBFgeBWQgRAugRAeQgYAmgeAWQgfAWgmAGQgRACgQgBQgFAFgFAAIgFAAg");
	this.shape_9.setTransform(48.8251,50.7725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-6.7,143.7,-6.7,-45.9).s().p("ADDSbQhZgOhRgcQgugQgbgOQhBghg8hBQgugyg0hQIgkg4IgLgOQg0g/gVg2QgPglgGgxQgEgigCg3QgBhBADgpQAGg6AQgsQAPgsAjg0IA+hZQAkg0ASgqQAXg2AAgxQgBg7gnhUQg2h0gIgYQgXhNALhZQAKhRAlhSQAehEA0hQQAUgfBMhsQA1hMAyhZIAZgqQgxCwgLBeQgPB6AhByQAQA5AfA+QAcA5AfAuIAfArQATAaAKASQBVCUhLDrIgjBuQgSBBACAxQADA/AhBIQAWAtAyBOIB8C+QAYAmAIAOQARAeAJAaQAQAwgFA1QgFA0gYAuQgYAtgoAiQgoAigxAQQgeALglAEIAiAGQAYADABAOQAAAEgEAFQgDAEgFABIgJABIgMgBg");
	this.shape_10.setTransform(50.1769,45.1125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.9,153.3,-3.9,-36.3).s().p("ABSUDQgbgDgggKQgWgIgjgPQgjgNgQgNQgRgOgRgaQgNgSgDgOQgDgLABgOIABgaQABgWgIg1QgGgngIgSIgMgXQgGgNABgKIhNhfQgpgygWggQgYgigTgjQgeg3gNgvQgThEALhJQALhJAmg8QATgcAqgxQAsgzASgaQA7hWAGhoQAAgJADgGQADgGAFgCQABgqgNg0QgfhhgMgwQgfh1ASh7QARh7A9hoQALgSAYglIAjg4QA4hhAOhxIABgIIAZizQAHA9gBBGIgBAUIAEAvIAODnQAFBXANAtQAYBNBuCCQBtB+AVBSQALAsABBWQACBTgEArQgHBEgZAyQgMAZgbAmQgfAtgKARQgqBLgBBZQgBBZApBLQANAZAWAeIAnAzQAkAwAnA6QAiAwAIAgQAMArgNA0QgJAmgbA3Qg6B5g+BJQgjAqgiASIAEgBQgjAQgzAPIgRgBg");
	this.shape_11.setTransform(47.3829,35.5625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.4,150.4,-4.4,-39.2).s().p("AgdTDQgQgDgUgQQgngfgbgwQgZgsgMg1QgQhJAIhMQADgTAEgPIAEgMQgEgZgEgQQgNgugmg4IhDheQg9hZgXhcQgahoAdhZQAPguAqhEQBJhwAig6QA4hgAZhPIAAgZQAAgcgCgRQgHg0g3heQg1hcgFg2QgGhAAmhWQAphcBChNIAmgqQAXgaAOgSQAWgeASgpIAfhSIAAACIAVg9QgRCKgFALIABAeQACA4ANAtQAbBdBYBYIA7A4QAlAiAUAYQBEBQALBfQAGAygNAwQgNAxgeAlQgNARgbAZQggAcgLAMQggAigaAxQgTAmgVA5QgYBAgFAsQgGA6ATBEQAOAyAgBGQAmBSAkAoIAcAbIAcAcQARATARAbQAKAPAUAkQAbAwAFAbQAEAVgDAfIgGA1IABA3QABAigDAUQgHAqggA2QhRCHiGBXQgNAHgHgCIgDgBQglAIhEAAQgVAAgGgCg");
	this.shape_12.setTransform(47.8797,38.4625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.2,167.9,-5.2,-21.7).s().p("ABvVwQgKgCgDgIIgBgFQhbAChEgfQgogTgfgdQghgfgSgmQgghGASiNQALhRABgeQADg9gOguQgPg0g+hWQg+hYgQgyQgLgngFhQQgFhRAEgqQAFhEAZgvQANgXAcglQAggoALgSQAZgpAPg6QAKgkALhHQAHgzACgZQADgrgHghQgIgkghhDQghhDgIglQgNhBAahKQAXg+Axg+QAcgkBFhGQBBhDAdgnQA5hLAghZQAghaAEhdIAEAAIABgqIABgNIAbDNQAEAIABARQADBDAbBMQAUA5AoBOQAYAuAHAQQAQAjAFAeQAEAZgBAgIgEA6QgJBZgMApQgLAlgWArQgMAZgeAzIhBBuQglA8ggAuQgfArgJAQQgUAigGAfQgEAUACAbQABAQAFAgQAQBjARA+QAYBXAlBAQAbAwBGBXQBGBXAbAwQAoBFAQBPQAQBPgIBPQgJBPghBKQghBJg1A7QgQASghAiQgdAfgOAZIgJAPQgGAIgGAEQgGAEgHAAIgEAAg");
	this.shape_13.setTransform(48.6209,20.9673);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-4.3,182,-4.3,-7.6).s().p("ABNXpQgWgBgRgDQgXgFgsgTQgMgEgGgGQgNgEgPgHQgPgHgdgRQgfgTgQgMQgZgSgOgVQgQgZgHgkQgFgaAAgoQAAhiAXg/QAJgZAihBQAdg4AIgjQARhIgchEQgTgegigpIg6hHQhEhYgOhJQgMhBAVheQANg4AQggQAIgQAUgeQA+hdBChWIAHgIQAIgLAFgPQAGgOAIgcQASg/AHggQALg2ABgsQAAgXgDgwQgBgrAGgcQAHgbAVgqIAIgSQgahSgSgsIgZg8QgPgkgIgaQgThBADhDQADhFAdg6QAPgeAdgrIA/hZQAigzAUgqQASglAKgkQABgsAHg8IABgEQgCgPgEgPQgEgSAHgHQAHgGAKAIQAJAIADAMQARBGgWBPQgCAzAIAnQAFAeAOAtIAXBKQA4DQhUEIIgkBpIgDAHIADATQAFAfAjC3QAJAxACAfQADAsgKAjQgLAjgfAtQgkAwgRAaQgSAcgbA8QgTAqgGAXQgLAlAFAeQACANAMAhQAJAaABAQIAcAgQAgAlASAPQAVATAmAWIA9AmQBAAsAiA5QAaAtANBBQAWBngUBNQgMAvgqBLIhSCZIAOAkQAPAlADAXQACALAAAsQABAngEAPQgEASgQAdQgTAkgOASQgWAbgaAIQgQAFgXAAIgIAAg");
	this.shape_14.setTransform(47.7805,6.8163);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-2.1,199.1,-2.1,9.5).s().p("ABGadQgLgGgPgMIgYgUQgUgQhdhAQhHgwgjgpQgtg2gQhHQgRhHARhEQAKgmAYgzQAdg5ANgdQA8iFgahrQgIghgVgrIglhKQgghDgShDQghh5AXhYQALgsAnhEIAXgmIACgKQAJgcATghQALgUAYglIA5hVIA4hTIAhgyQASgcASgoIAehHQAMgcAEgRQAFgVAAgcIgBgxIAAgFIAEhJQAbA/ABAYIABAaIACBHQADBggSA9QgMArgiA+QgwBWgHAOQgTAsgXBJIgKAfIgBAOQgLBbBZBjIBNBLQAuAtAYAjQAWAgATAuQANAeARA1QARA2AGAiQAKAxgEAoQgEAvgcBCIguBuQgiBiAFBwQAGBqApBmQARAqAEAOQAIAhgIAZQgMAnguAVQgQAIgeAHIAAAFQgBAIgKAEQgLAGgNAAQgRAAgUgJgABmvIQgGgngOgvQgGgVgNglIgQgnQgFABgEgIQgEgIgBgYQgCgfAAgWQgBgdACgUQAEgjAYguQAXgvAEghQACgMAEhRIAIiPIAAgFIAAgHIAUCDIAGAtQAEAYAFARQAFAPAKAVIAPAjQAIAVAGAfQAEAUAGAmQAGAmABAUIAAAJIABAFQACARAAAVQAAArgGAbIgFAVQgFARgOAlQgNAigFATIgQBFIAAAPIgBA/QAAATgJAEIgYiPg");
	this.shape_15.setTransform(45.566,-10.2386);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-3.6,230.5,-3.6,40.9).s().p("ABkfNQhTgwhRhVQg2g4hThtQgpg0gTggQgdgxgLgsQgMg1ALg3QAMg3AhgsQALgPBAg/QAuguAPgnQAXg7gYhKQgPgtguhMIgIgNQgJgFgKgIQgggagNgPQg1g6gRhxQgKg8gBg+QAAguAKgZQAIgUARgWQAyg9BEgjQAggvASggQAdg1AMgwIAKgsQAFgbAGgRQALgfAagoIAqhFQAEgFAcgeIgVBLQABAJgEAOQgjB/AVBbIAMAuQADANADAaQAGAygBAeQAAAigFAhIAAAmIAIAIQAIAKAOAWIAvBKQAZAmAKAbIAQA1IALAjQAGAVADAPQAEAZgDAmIgEA+IAAAfQAAATgCAMQgDAVgNAnQgOAsgLAZQgLAbgOAVIgBAIQgEAeAGA2IAOCDQALBWAPAxQAWBIAqAsQALALA0ApQAmAfAQAbQAPAaACAeQADAdgKAcQgPAkgoAoQgrAqgkASQglASgiAAIgBADQgCAGgGACIgCAAQgFAAgIgEgACc7VQgLAAgEgDQgGgFgBgOQgCgyATgfIATgYQANgSAQgaQAMgTACgLQABgFAAgbQAAgMAEgFIACgBIAjBPIABASIAEAQQAEAMABAYQACAjgIAVQgCAJgEAEIgJALIgFAKQgDAGgEADQgEADgLAAg");
	this.shape_16.setTransform(47.075,-41.6417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#332666","#9D4166","#A24762","#AF5956","#C47642","#CB7F3C","#E9C08F"],[0,0.259,0.337,0.443,0.565,0.596,1],-5.4,138.8,-5.4,-50.8).s().p("ACYSBQgEgCgEgFIgBgBIgRgFQgJgDgCgFQgDgGAEgFIgDgBIgdgKQhEgUhJgzQgtgehThFQglgfgRgQQgdgcgUgZQghgtgahDQgnhmgBhiQgBhuAwhVQAMgWAcgmQAdgoALgTQAng/AMhLQAMhLgQhIQgJgngshrQgkhagFg6QgHhYAxh1IAshhQAbg7ANgnIARg2QAKghAIgVQAMgbBHh0IATghIAnhnIgMB3QgRBOAABRQABBfAZBbIAXBLQAPAvAHAdQAXBhgJCKQgFBPgTCfQgKCIAICFQAEBYAVAzQATAuAxA6QBDBQBTBKIAoAkQAXAVANATQAtA+gBBYQgBBFgeBWQgRAugRAeQgYAmgeAWQgfAWgmAGQgRACgQgBQgFAFgFAAIgFAAg");
	this.shape_17.setTransform(48.8251,50.085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,-241.7,86,407.1);


(lib.elipse3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,153,0.098)").s().p("A4TMsQrOhDoph6Qoqh6kvieQk6ikAAizQAAizE6ijQEvieIqh6QIph6LOhDQLnhGMsAAQMuAALmBGQLOBDIpB6QIqB6EvCeQE6CjAACzQAACzk6CkQkvCeoqB6QopB6rOBDQrmBFsuABQssgBrnhFg");
	this.shape_1.setTransform(0.025,88.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse3_1, new cjs.Rectangle(-399.8,0,799.7,176.3), null);


(lib.elipse2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,153,0.149)").s().p("A0EKFQpQg1nJhhQnIhhj7h+QkDiCAAiOQAAiOEDiCQD6h9HJhhQHJhhJQg1QJmg3KeAAQKfAAJlA3QJRA1HIBhQHJBhD7B9QEDCCAACOQAACOkDCCQj7B+nJBhQnIBhpRA1QplA3qfAAQqfAAplg3g");
	this.shape_1.setTransform(0.025,70.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse2_1, new cjs.Rectangle(-330,0,660.1,140.1), null);


(lib.elipse1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,153,0.2)").s().p("A5XFZQk+hEiuhXQi0hbgBhjQABhiC0hbQCuhXE+hEQKgiOO3AAQO4AAKgCOQE+BECuBXQC0BbABBiQgBBji0BbQiuBXk+BEQqgCOu4AAQu3AAqgiOg");
	this.shape_1.setTransform(0,48.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse1_1, new cjs.Rectangle(-229.6,0,459.29999999999995,97.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ARkPPQh1ghjPhpQjWhthtghQjFg9jLAZQiFAQjRBIQkBBYhRATQkZBDlognQjggYmihfQilglhagtQiFhBgyhrQguhjAhh2QAfhwBXhQQCRiEEMgcQhUiMAAirQABirBUiMQBViMCXhQQCXhQCjAKIAdgSQJ1CeILAaQJNAeIziEQEmhEBagMQDagcCgA0QBHAYAuAsQA2A1gGA9QgDAZgRAlQgWAxgEAMQgbBZA9BbQAmA4BvBlQB0BpAnA2QBEBegRBZQgPBRhMA2QgzAlhxAsQiGA0gsAYQhdAzgmBFQgeA1gKBlQgMB5gMAoQgzCfi9A+QhcAfheAAQhUAAhWgYg");
	mask_1.setTransform(362.4558,240.5598);

	// Layer_3
	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(35.9,16.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(127.3,140.7,470.3,199.7), null);


(lib.singleSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(0,0.55,0.5,0.5);

	this.instance_1 = new lib.Path_330();
	this.instance_1.setTransform(84.65,3.4,1,1,0,0,0,77,3.4);
	this.instance_1.alpha = 0.3203;

	this.instance_2 = new lib.CachedBmp_41();
	this.instance_2.setTransform(7.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.singleSmore, new cjs.Rectangle(0,0,169.5,82), null);


(lib.winStar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(0,0,0.498,0.498);

	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.alpha = 0.7109;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.alpha = 0.7109;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(0,0,0.4779,0.4779);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,alpha:0.7109},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,rotation:360},7).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false,rotation:720},7).to({_off:true,scaleX:0.4779,scaleY:0.4779,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.8,27.5,27.5);


(lib.TweenLoser = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(1.25,5.1,1.3274,1.3274,-48.4503,0,0,67.1,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	// Isolation_Mode_copy
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(-34.6,-23.9,0.6729,0.6729,9.2265,0,0,-0.1,-0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-78.6,y:-86.9,alpha:1},8).wait(20).to({startPosition:0},0).to({x:-34.6,y:-23.9,alpha:0},7).wait(7));

	// Isolation_Mode
	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(35.05,28.55,0.606,0.606,171.2578,0,0,-0.1,-0.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:80.05,y:76.55,alpha:1},8).wait(20).to({startPosition:0},0).to({x:35.05,y:28.55,alpha:0},7).wait(7));

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D78E60").s().p("AgYAoQgFgDgGgGQgFgHgDgFQgCgGACgCIA8gyQAGgFANAPQAFAGACAGQADAGgDACIg7AyIgCAAIgGgBg");
	this.shape.setTransform(-2.2157,32.4639,0.9995,0.9995,-48.4814);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D78E60").s().p("AmSFuQgGgCgGgHQgFgGgCgGQgBgHADgCQDqjNGeljIAhgcIAZgWIBrhbQADgDAGADQAHACAFAGQAFAHACAGQACAGgEADIhrBcIgZAVIghAcQlsE5kcD3QAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_1.setTransform(-3.5211,87.192,0.9995,0.9995,-48.4814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-133.3,258.4,275.3);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],0,70.7,0,-70.6).s().p("AgfLBQkwgNkPhsIgVgKIgBAAQgkgTgPgaIgBAAIgDgHQgKgUgBgqIgOpUQgDhZAChgQACh3AIhDQACgSAKgRQAuhWDQgpIAggGIACAAIA3gIQBQgLBZgGIAdgCIAVgBIAIAAQDEgJCnAVQDAAYCIA+QArAUAaATQAjAZAQAfIAAABIAFAKQAJAWACAdQABATgBAiQgHChgQFBIgKD/QgHDIgEAVQgHAfgkAUQgVAMgtAMQj4BFj/AAQgrAAgqgCg");
	this.shape.setTransform(0.0181,0.0245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({_off:true},1).wait(16));

	// Isolation_Mode_copy
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(-17.65,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.2266,x:-73.65,y:-94.8},8).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({startPosition:0},0).to({_off:true},1).wait(16));

	// Isolation_Mode
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(14.4,9.6,1,1,175.4928,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:184.9556,x:80.05,y:92.4},8).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({startPosition:0},0).to({_off:true},1).wait(16));

	// Isolation_Mode
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D78E60").s().p("AgYAoQgFgDgGgGQgFgHgDgFQgCgGACgCIA8gyQAGgFANAPQAFAGACAGQADAGgDACIg7AyIgCAAIgGgBg");
	this.shape_1.setTransform(-2.2144,32.4627,0.9995,0.9995,-48.4813);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D78E60").s().p("AmSFuQgGgCgGgHQgFgGgCgGQgBgHADgCQDqjNGeljIAhgcIAZgWIBrhbQADgDAGADQAHACAFAGQAFAHACAGQACAGgEADIhrBcIgZAVIghAcQlsE5kcD3QAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_2.setTransform(-3.5199,87.1919,0.9995,0.9995,-48.4813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[]},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-163.8,277.4,321.8);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenLoser("synched",0);
	this.instance.setTransform(-1.55,-10.1,1,1,0,0,0,-0.3,-1.1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(-2,-13.05);
	this.instance_1.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-83.7,150.9,216.7);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenLoser("synched",0);
	this.instance.setTransform(-1.55,-10.1,1,1,0,0,0,-0.3,-1.1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(-2,-13.05);
	this.instance_1.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:13}}]},13).to({state:[]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-142.3,239.9,275.3);


(lib.singleMarshForBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D6D7").s().p("Ah4BhQgJgDgFgIQAjAPAkgCQAyACAygQQAZgIATgSQAUgSAJgYQALggACgiIAFgkQACgVgBgOIAEAHQADAJgBALIgEBdIgCAxQgBAogBADQgCAJgUAGQgyAOgxAAQg/AAg/gYg");
	this.shape.setTransform(0.6375,-12.0708);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D68D60").s().p("AgRAjQgHgBAAgDIACg9QAAgGAXABQAYgBAAAGIgCA9QAAADgHABQgHACgJAAQgKAAgHgCg");
	this.shape_1.setTransform(0,-27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7E5D4").s().p("AhUgBQgEgBACgEQABgDADABQBSASBTgLQAEgBAAADQABADgDABIgBABQghAEgfAAQgzAAg1gLg");
	this.shape_2.setTransform(-1.4,-21.8611);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D6D7").s().p("AAHA1IhHgSQgrgMgdAHIgBgmQAhgDAdAJQAqAKAlAEQAsAGAmgYQAKgHAQgSQARgSAJgGQgBAggDAeQgPAQgTANQgfAUgjAAQgNAAgOgDg");
	this.shape_3.setTransform(0.3,-14.4318);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D6D7").s().p("Ah5APQALgSA4gIQAwgGApACQA0ADAjAOQgmgGgRgBQgfgDgZAEIhBAOQgcAGgWAAIgRgBg");
	this.shape_4.setTransform(-0.875,-25.8357);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// SingleMarshBarColor
	this.SingleMarshBarColor = new lib.SingleMarshBarColor();
	this.SingleMarshBarColor.name = "SingleMarshBarColor";
	this.SingleMarshBarColor.setTransform(0.3,-13.7,1,1,0,0,0,13.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.SingleMarshBarColor).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.singleMarshForBar, new cjs.Rectangle(-13.5,-30.7,27.7,30.8), null);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// progressBarSpike
	this.progressBarSpike = new lib.progressBarSpike();
	this.progressBarSpike.name = "progressBarSpike";
	this.progressBarSpike.setTransform(-0.75,246.7);

	this.timeline.addTween(cjs.Tween.get(this.progressBarSpike).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EAEngsFMAAABYLQAAByhQBQQhRBRhyAAIgnAAQhyAAhRhRQhQhQAAhyMAAAhYLQAAhxBQhRQBRhRByAAIAnAAQByAABRBRQBQBRAABxg");
	this.shape.setTransform(0.0446,0.0756,0.7862,0.8757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#25224C","#383E87"],[0,1],0,309.7,0,-309.6).s().p("EgATAwYQhyAAhRhQQhQhRAAhxMAAAhYLQAAhxBQhRQBRhQBygBIAnAAQByABBRBQQBQBRAABxMAAABYLQAABxhQBRQhRBQhyAAg");
	this.shape_1.setTransform(0.0446,0.0756,0.7862,0.8757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(-27.8,-272.6,55.8,545.4000000000001), null);


(lib.gameChoiceWindow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gameChoiceWindowBG();
	this.instance.setTransform(304.2,106.7,1,1,0,0,0,304.2,106.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceWindow, new cjs.Rectangle(44.3,-39,524,295), null);


(lib.gameBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BGtrees
	this.instance = new lib.BGtrees();
	this.instance.setTransform(693.5,524.6,1,1,0,0,0,693.5,233.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BGmountains
	this.instance_1 = new lib.BGmountainsFront();
	this.instance_1.setTransform(689.1,573.65,1,1,0,0,0,662.9,216.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BGsky
	this.instance_2 = new lib.BGsky();
	this.instance_2.setTransform(685.3,370.2,1,1,0,0,0,659.1,370.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameBG, new cjs.Rectangle(0,0,12279.5,4418.9), null);


(lib.playagainBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playagain();
	this.instance.setTransform(27.75,27.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-27.7,0,27.7,0).s().p("AjDDEQhRhRAAhzQAAhyBRhRQBRhRByAAQBzAABRBRQBRBRAAByQAABzhRBRQhRBRhzAAQhyAAhRhRg");
	this.shape.setTransform(27.725,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playagainBTN, new cjs.Rectangle(0,0,55.5,55.4), null);


(lib.homeBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(21.8,25.75,0.5,0.5);

	this.instance_1 = new lib.home();
	this.instance_1.setTransform(27.7,25.7);

	this.instance_2 = new lib.CachedBmp_31();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.homeBTN, new cjs.Rectangle(0,0,55.5,55.5), null);


(lib.endScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.totalTime = new cjs.Text("זמן כולל: 20:20", "normal 400 21px 'Assistant'", "#2A2A5D");
	this.totalTime.name = "totalTime";
	this.totalTime.textAlign = "center";
	this.totalTime.lineHeight = 34;
	this.totalTime.lineWidth = 373;
	this.totalTime.parent = this;
	this.totalTime.setTransform(-474.15,-319.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.totalTime);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-61.5,2,117.3,2).s().p("AwbD+QhtAAhOhOQhNhNAAhrQAAhtBNhOQBOhNBtAAMAg3AATQBtAABNBOQBOBOAABrQAABthOBNQhNBNhtAAg");
	this.shape.setTransform(-474.15,-308.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.totalTime}]}).wait(1));

	// הציון_שלכם__91_מספר_שגיאות__3_copy
	this.yourScore = new cjs.Text("הציון שלכם: 91", "normal 700 34px 'Assistant'", "#332666");
	this.yourScore.name = "yourScore";
	this.yourScore.textAlign = "center";
	this.yourScore.lineHeight = 50;
	this.yourScore.lineWidth = 373;
	this.yourScore.parent = this;
	this.yourScore.setTransform(0,-320.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.yourScore);
	}

	this.timeline.addTween(cjs.Tween.get(this.yourScore).wait(1));

	// הציון_שלכם__91_מספר_שגיאות__3
	this.errorNum = new cjs.Text("מרשמלואים ששרפתם  | מספר שגיאות: 3", "normal 400 24px 'Assistant'", "#332666");
	this.errorNum.name = "errorNum";
	this.errorNum.textAlign = "center";
	this.errorNum.lineHeight = 37;
	this.errorNum.lineWidth = 373;
	this.errorNum.parent = this;
	this.errorNum.setTransform(0,-280.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.errorNum);
	}

	this.timeline.addTween(cjs.Tween.get(this.errorNum).wait(1));

	// Layer_46
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E9D9C0","#E9C08F","#E9C191","#E9C497","#DBA36A"],[0.024,0.29,0.322,0.514,1],-83.7,58.7,-83.7,-57.6).s().p("EgshAGhQiqirAAjxQAAjwCqiqQCrirDxAAMBMMgAKQDxAACqCrQCqCqAADxQAADwiqCrQiqCqjxAAMhMMAAKQjxAAiriqg");
	this.shape_1.setTransform(-0.0144,-288.035,0.8125,0.8125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_36
	this.instance = new lib.Group_2();
	this.instance.setTransform(-489,-29.4,1,1,0,0,0,137.3,43.9);
	this.instance.alpha = 0.3398;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(77.45,-59.05,1,1,0,0,0,628.2,228.4);
	this.instance_1.alpha = 0.3398;

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(1.15,-103.55,1,1,0,0,0,638.8,217.7);
	this.instance_2.alpha = 0.25;

	this.instance_3 = new lib.Path_1_2();
	this.instance_3.setTransform(5.3,63.85,1,1,0,0,0,645.3,160);
	this.instance_3.alpha = 0.25;

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.setTransform(-231.15,-152.55,1,1,0,0,0,406.7,211.6);
	this.instance_4.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_47
	this.homeBTN = new lib.homeBTN();
	this.homeBTN.name = "homeBTN";
	this.homeBTN.setTransform(448.7,-307.1,1,1,0,0,0,27.7,27.7);

	this.timeline.addTween(cjs.Tween.get(this.homeBTN).wait(1));

	// Layer_49
	this.playAgainBTN = new lib.playagainBTN();
	this.playAgainBTN.name = "playAgainBTN";
	this.playAgainBTN.setTransform(516.4,-307.1,1,1,0,0,0,27.7,27.7);

	this.timeline.addTween(cjs.Tween.get(this.playAgainBTN).wait(1));

	// Layer_43
	this.muteBTN = new lib.muteBTN();
	this.muteBTN.name = "muteBTN";
	this.muteBTN.setTransform(584.05,-307.1);

	this.timeline.addTween(cjs.Tween.get(this.muteBTN).wait(1));

	// _Path__5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#25224C","#383E87"],[0,1],-654.4,0,654.5,0).s().p("EhmPA5aMABPhz1MDLQAAAMgA4B03g");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endScreen, new cjs.Rectangle(-662.6,-374,1368.4,748.1), null);


(lib.speedBTN2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";
	this.BTNbg.setTransform(26.2,26.2,1,1,0,0,0,26.2,26.2);

	this.timeline.addTween(cjs.Tween.get(this.BTNbg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedBTN2, new cjs.Rectangle(-26.2,-26.2,52.5,52.5), null);


(lib.speedBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6));

	// _Group_
	this.instance = new lib.speed();
	this.instance.setTransform(-0.05,0.05);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-7.25,-19.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_17();
	this.instance_4.setTransform(-16,-19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_20();
	this.instance_5.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_19();
	this.instance_6.setTransform(-16,-19.25,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_22();
	this.instance_7.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_21();
	this.instance_8.setTransform(-16,-19.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_24();
	this.instance_9.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_23();
	this.instance_10.setTransform(-16,-19.25,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_26();
	this.instance_11.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_25();
	this.instance_12.setTransform(-7.25,-19.25,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_28();
	this.instance_13.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_27();
	this.instance_14.setTransform(-7.25,-19.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).wait(1));

	// Layer_3
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";
	this.BTNbg.setTransform(26.2,26.2,1,1,0,0,0,26.2,26.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-26.2,0,26.3,0).s().p("Ai5C6QhNhNAAhtQAAhrBNhOQBOhNBrAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhsAAhNhNg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BTNbg}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.3,52.8,52.6);


(lib.pauseBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.pause();

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape.setTransform(-5.7,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_1.setTransform(5.7,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,16.6).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_2.setTransform(2.525,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-10.7,0,10.8,0).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_3.setTransform(2.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_2
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-26.2,0,26.3,0).s().p("Ai4C6QhOhNAAhtQAAhsBOhNQBNhNBrAAQBsAABNBNQBOBNAABsQAABthOBNQhMBNhtAAQhrAAhNhNg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BTNbg}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);


(lib.littleFireMove3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy
	this.instance = new lib.littleFire();
	this.instance.setTransform(-14,-45.05,1.6155,1.4585,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.5,regY:-11,scaleX:0.1296,scaleY:0.1296,rotation:-48.6808,guide:{path:[-13.9,-45,-5.9,-64.7,0,-85,0.1,-85.5,0.3,-86,23.5,-166.3,5.6,-226,-7.9,-270.7,-12.8,-289.5,-20.5,-319.2,-23,-340.5,-25.7,-364.6,-22.8,-386.4,-19.9,-409,-10.2,-434.1,-3,-452.6,17.2,-487.3,41.3,-529,49.9,-546.8,67.4,-582.8,73.7,-614.9,81.5,-654.5,73.7,-694.1,66.2,-732.6,53.4,-766.9,44.2,-791.5,30.2,-818.6,28,-822.9,19.7,-838.7,13.9,-849.8,10.9,-856.1,2.5,-873.9,1.6,-886.1], orient:'fixed'}},31).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-886.3,110.2,863.4);


(lib.littleFireMove2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy_copy
	this.instance = new lib.littleFire();
	this.instance.setTransform(-68.6,100.45,1.7556,1.7487,-59.9991,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,regY:2.6,scaleX:0.069,scaleY:0.069,rotation:-48.6781,guide:{path:[-68.6,100.4,-77.4,86.3,-84.9,71.7,-85.1,71.2,-85.4,70.7,-123.4,-3.7,-117.2,-65.8,-112.5,-112.1,-111.2,-131.6,-109.2,-162.2,-110.9,-183.6,-112.7,-207.8,-119.7,-228.6,-126.9,-250.2,-141.1,-273,-151.7,-290,-178,-320.1,-209.8,-356.4,-221.6,-372.2,-245.6,-404.3,-257.9,-434.6,-273.1,-472.1,-273,-512.3,-272.9,-551.6,-266.8,-587.7,-262.5,-613.6,-253.9,-642.9,-252.5,-647.4,-247.3,-664.6,-243.7,-676.6,-241.9,-683.4,-240.1,-690.4,-239.2,-696.5], orient:'fixed'}},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.6,-697.8,237.40000000000003,824.3);


(lib.littleFireMove1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.littleFire();
	this.instance.setTransform(94.6,19.8,1.2025,1.1406,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:0.0693,scaleY:0.0693,rotation:-44.474,guide:{path:[94.8,19.8,110.6,-4.2,121.5,-29,121.8,-29.5,122,-30,157.4,-110.3,130,-170,109.7,-214.7,102.2,-233.5,90.3,-263.2,86.6,-284.5,82.4,-308.6,86.8,-330.4,91.4,-353,106.1,-378.1,117.1,-396.6,147.7,-431.3,184.6,-473,197.8,-490.8,224.4,-526.8,234,-558.9,245.8,-598.5,234,-638.1,222.5,-676.6,203.1,-710.9,189,-735.5,167.8,-762.6,164.4,-766.9,151.6,-782.7,145.4,-790.4,141.3,-795.9], orient:'fixed'}},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.5,-797.1,161.3,834);


(lib.fireMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_18
	this.instance = new lib.fireBit62();
	this.instance.setTransform(37.25,66.65,1,1,0,0,0,30.7,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// Layer_16
	this.instance_1 = new lib.fireBit42();
	this.instance_1.setTransform(-53.95,44.1,1,1,0,0,0,37.9,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// Layer_19_copy
	this.instance_2 = new lib.fireBit82();
	this.instance_2.setTransform(-2.2,30.6,1.6365,1.0342,0,0,0,13,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

	// Layer_17
	this.instance_3 = new lib.fireBit52();
	this.instance_3.setTransform(-2.1,-26,1.641,1.641,0,0,0,37.9,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	// Layer_14
	this.instance_4 = new lib.fireBit12();
	this.instance_4.setTransform(-99.4,6.35,1,1,0,0,0,48.8,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// Layer_19
	this.instance_5 = new lib.fireBit72();
	this.instance_5.setTransform(75,27.7,1,1,0,0,0,13,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36));

	// Layer_15
	this.instance_6 = new lib.fireBit32();
	this.instance_6.setTransform(59.3,-18.45,1,1,0,0,0,53.4,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// Layer_13
	this.instance_7 = new lib.fireBit22();
	this.instance_7.setTransform(-11,-28.8,1,1,0,0,0,85.1,127.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// Layer_11
	this.instance_8 = new lib.littleFireMove2();
	this.instance_8.setTransform(-76,97.1,1,1,0,0,0,-68.5,100.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(25));

	// Layer_12
	this.instance_9 = new lib.littleFireMove3();
	this.instance_9.setTransform(-15.35,-47.95,1,1,0,0,0,-13.7,-44.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).wait(15));

	// Layer_10
	this.instance_10 = new lib.littleFireMove1();
	this.instance_10.setTransform(94.5,17.9,1,1,0,0,0,94.5,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.1,-187.6,256.7,335.79999999999995);


(lib.fireLightUpNew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.elipse1();
	this.instance.setTransform(0,-147.85,0.6167,3.0166,0,0,0,0,48.6);
	this.instance.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance.cache(-232,-2,463,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:48.4,scaleX:0.6862,scaleY:3.94,y:-193.6},59).to({regY:48.6,scaleX:0.6167,scaleY:3.0166,y:-147.85},60).wait(1));

	// Layer_5
	this.instance_1 = new lib.elipse2();
	this.instance_1.setTransform(-0.2,-201.1,0.5335,2.8486,0,0,0,-0.2,69.8);
	this.instance_1.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_1.cache(-332,-2,664,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.4,regY:69.5,scaleX:0.6061,scaleY:3.5056,x:-0.3,y:-248.1},59).to({regX:-0.2,regY:69.8,scaleX:0.5335,scaleY:2.8486,x:-0.2,y:-201.1},60).wait(1));

	// Layer_6
	this.instance_2 = new lib.elipse3();
	this.instance_2.setTransform(-0.1,-235.3,0.5796,2.65,0,0,0,-0.1,87.8);
	this.instance_2.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_2.cache(-402,-2,804,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:87.7,scaleX:0.8748,scaleY:4.329,y:-384.15},59).to({regY:87.8,scaleX:0.5796,scaleY:2.65,y:-235.3},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419.7,-833.8,845,909.5);


(lib.fireLightDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.elipse1();
	this.instance.setTransform(399.45,48.7,1,1,0,0,0,0,48.7);
	this.instance.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance.cache(-232,-2,463,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,scaleX:1.3041,scaleY:1.2237,x:399.6,y:59.6},59).to({regX:0,scaleX:1,scaleY:1,x:399.45,y:48.7},60).wait(1));

	// Layer_3
	this.instance_1 = new lib.elipse2();
	this.instance_1.setTransform(399.55,70,1.0529,1,0,0,0,0.1,70);
	this.instance_1.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_1.cache(-332,-2,664,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.4496,scaleY:1.3899,x:399.5,y:97.3},59).to({scaleX:1.0529,scaleY:1,x:399.55,y:70},60).wait(1));

	// Layer_4
	this.instance_2 = new lib.elipse3();
	this.instance_2.setTransform(399.8,108.8,1.1421,1.2351,0,0,0,0,88.1);
	this.instance_2.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_2.cache(-402,-2,804,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.5352,scaleY:1.7055,y:150.25},59).to({scaleX:1.1421,scaleY:1.2351,y:108.8},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-70,1375,448);


(lib.bonfireMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fireMC
	this.instance = new lib.fireMC();
	this.instance.setTransform(402.25,490.4,1,1,0,0,0,-12.2,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.bonfireLogs();
	this.instance_1.setTransform(400.45,616.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// _Clip_Group_
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(368.15,726.55,1,1,0,0,0,340.2,335.2);
	this.instance_2.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F193B").s().p("ARkPPQh1ghjPhpQjWhthtghQjFg9jLAZQiFAQjRBIQkBBYhRATQkZBDlognQjggYmihfQilglhagtQiFhBgyhrQguhjAhh2QAfhwBXhQQCRiEEMgcQhUiMAAirQABirBUiMQBViMCXhQQCXhQCjAKIAdgSQJ1CeILAaQJNAeIziEQEmhEBagMQDagcCgA0QBHAYAuAsQA2A1gGA9QgDAZgRAlQgWAxgEAMQgbBZA9BbQAmA4BvBlQB0BpAnA2QBEBegRBZQgPBRhMA2QgzAlhxAsQiGA0gsAYQhdAzgmBFQgeA1gKBlQgMB5gMAoQgzCfi9A+QhcAfheAAQhUAAhWgYg");
	this.shape.setTransform(390.4058,631.9098);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fireLightDown
	this.instance_3 = new lib.fireLightDown();
	this.instance_3.setTransform(399.9,682.75,0.9166,0.9166,0,0,0,399.9,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_11
	this.instance_4 = new lib.fireLightUpNew();
	this.instance_4.setTransform(398.25,94.6,1,1,0,0,0,0,-533.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonfireMC, new cjs.Rectangle(-53.7,125.1,910,715.8), null);


(lib.marshFlyWide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16_copy
	this.instance = new lib.marshQ();
	this.instance.setTransform(-10.6,-19.9,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-10.6,-19.9,-15.1,-27,-19.9,-34.3,-32.3,-53.5,-44.6,-68,-82.7,-113.3,-121.9,-119], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy
	this.instance_1 = new lib.marshQ();
	this.instance_1.setTransform(-17.6,-12.9,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.5,regY:-4.2,rotation:30.0004,guide:{path:[-17.6,-12.9,-21.8,-51.9,-28.8,-78.7,-43.7,-135.5,-73.9,-172.4], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy_copy
	this.instance_2 = new lib.marshQ();
	this.instance_2.setTransform(-24.5,-8.35,0.059,0.059,-30.0004,0,0,1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.6,regY:-4.5,rotation:14.9925,guide:{path:[-24.5,-8.4,-28.1,-13.7,-32.9,-24.6,-40.4,-41.6,-44.8,-61.1,-57.1,-115,-41.7,-167.9], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy_copy_copy
	this.instance_3 = new lib.marshQ();
	this.instance_3.setTransform(-35.65,-9.2,0.059,0.059,-30.0004,0,0,1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:1.2,regY:-3.6,rotation:135,guide:{path:[-35.5,-9.2,-37.3,-14.5,-38.7,-23.7,-41.8,-42.9,-40.4,-64.6,-36.5,-123.9,-2,-167.6], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy_copy_copy_copy
	this.instance_4 = new lib.marshQ();
	this.instance_4.setTransform(-33.4,-4.45,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:1.6,regY:-4,rotation:104.9925,guide:{path:[-33.5,-4.5,-35.3,-11.9,-40.3,-25.2,-47.1,-43.4,-56,-62.4,-79.1,-110.8,-104.9,-140.5], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy_copy_copy
	this.instance_5 = new lib.marshQ();
	this.instance_5.setTransform(-39.45,-3.45,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-3.4,guide:{path:[-39.4,-3.5,-42.4,-9.6,-50,-26.6,-63.4,-56.5,-76.5,-79.8,-118.9,-155.4,-168.7,-185.1], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy_copy
	this.instance_6 = new lib.marshQ();
	this.instance_6.setTransform(-35.2,-8.45,0.059,0.059,14.9887,0,0,-0.1,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-35.2,-8.4,-38.1,-16.1,-44.1,-35.1,-58.8,-81.5,-65.1,-100.2,-95.7,-190.4,-120.9,-227.7], orient:'fixed'}},171).wait(1));

	// Layer_16_copy_copy
	this.instance_7 = new lib.marshQ();
	this.instance_7.setTransform(-24.25,-8.25,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,guide:{path:[-24.2,-8.3,-27.3,-14.9,-32.3,-30.1,-40.8,-56,-46.3,-84.7,-61.7,-164.7,-45.7,-219.5], orient:'fixed'}},171).wait(1));

	// Layer_16_copy
	this.instance_8 = new lib.marshQ();
	this.instance_8.setTransform(-19.25,-14.1,0.059,0.059,0,0,0,0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:1.1,regY:-4.1,rotation:75.0075,guide:{path:[-19.1,-14.2,-23.6,-22.1,-27.4,-42.1,-32.6,-69.1,-32.6,-100,-32.6,-137.2,-24.7,-169.8,-15.8,-206,2,-232.8], orient:'fixed'}},171).wait(1));

	// Layer_16
	this.instance_9 = new lib.marshQ();
	this.instance_9.setTransform(-10.15,-20,0.059,0.059,-30.0004,0,0,1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-10,-20,-13.5,-24.4,-15.6,-40.3,-18.2,-59.7,-15.4,-80.3,-11.9,-106.5,-0.1,-128.9,12.8,-153.7,35.2,-172], orient:'fixed'}},171).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-238.1,214.3,239.1);


(lib.guyfrombackarmhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.guyfrombackwristhotdog();
	this.instance.setTransform(24,-7.6,1,1,-16.4216,0,0,43.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.0189,x:24.05,y:-7.5},60).to({rotation:-16.4216,x:24,y:-7.6},64).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87054").s().p("AgNBEQhlhAg0gtQAdgJAjglIAegjIDvBfIhaCWQgogXgyggg");
	this.shape.setTransform(42.275,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C097").s().p("AC+C5QgmgFgagXIkyjmQj3iVDfAxIGzCyQA5AkASAxQAUA6g+AbQgbALgbAAIgUgBg");
	this.shape_1.setTransform(46.033,6.3285);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-31.1,155.1,56.1);


(lib.guyfrombackhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.guyfrombackHead();
	this.instance.setTransform(58.75,-62.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

	// Layer_3
	this.instance_1 = new lib.guyfrombackTorso();
	this.instance_1.setTransform(33.8,19.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	// Layer_4
	this.instance_2 = new lib.guyfrombackLegs();
	this.instance_2.setTransform(6.65,37.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#28316E","#1D1938"],[0,1],-89.7,0,89.8,0).s().p("AGDAoQilgYj4AEQh8ACklAQQjsANhYgFQiCgHAAgpQAAgaEPgSQEPgSF9AAIFfgDQC7gCBZADQD1AIAAA+QAAAthmAOQgpAGg3AAQh6AAi/gdg");
	this.shape.setTransform(1.375,88.9626);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_7
	this.instance_3 = new lib.guyfrombackarmhotdog();
	this.instance_3.setTransform(35.95,-5.5,1,1,8.2059,0,0,63.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:10.4,rotation:-19.9828,x:36.05,y:-5.7},58).to({regY:10.5,rotation:8.2059,x:35.95,y:-5.5},64).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-95.8,208.9,191.7);


(lib.bluecapwristhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("AAWA3QgSgKgNgYIgRgPQgIgGgIAAIgLg7IAWAPQANAIAEAGQAGAHAOAPQAOAMAGAIIALARQAHALAJAIQACADgBADQAAADgDABQgGACgFAAQgJAAgJgFg");
	this.shape.setTransform(-20.9607,-13.2788);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC89F").s().p("ABQBoIgUgLIhYhhQiQANg9g8ICegmIBNgMIA9gEQApgCANAGIALA8QgHABgDACQgEADABAHIB3BCIg5ASIgrAeQghAVgNAAQgFAAgDgDg");
	this.shape_1.setTransform(-38.1,-9.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_8
	this.instance = new lib.hotdog();
	this.instance.setTransform(24.6,11.45,1,1,44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AE876D").s().p("AI8EmIx8o0QgMgFAEgLQAEgMAMAFIR5I7QAMAFgDAIQgDAFgFAAIgGgCg");
	this.shape_2.setTransform(-0.0117,0.021);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapwristhotdog, new cjs.Rectangle(-61.5,-29.5,120.2,60.7), null);


(lib.bluecaplefthandhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecapwristhotdog();
	this.instance.setTransform(-5.2,2.7,1,1,5.743,0,0,-47,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.9832,x:-5.25,y:2.75},45).to({rotation:5.743,x:-5.2,y:2.7},43).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E48544").s().p("AirAJQhFg8AmhlQAlhhBcgkIA4BcQBXAtAxBZIAnBGQAZApAhAcQhAgpg4BmQgVAmgLAsQgLArAFAUg");
	this.shape.setTransform(-78.8779,-17.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AibAMIBtibQBXA2AzAZQASAKAuAmQhJAGgYAqQgWAnAQBJg");
	this.shape_1.setTransform(-68.05,-4.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAC89F").s().p("AjrBcQgngOgaghQgvg4AxgtQAqgnBJgFIH7AvIhJBTImaBEQgNADgPAAQgXAAgZgJg");
	this.shape_2.setTransform(-34.088,4.1356);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0692A").s().p("AhCBjQgRiTAogpQAjgkBQArQgwC8hAAAQgNAAgNgHg");
	this.shape_3.setTransform(-66.3909,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-46.3,202.3,103);


(lib.afrodudehandfronthotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudewristhotdog();
	this.instance.setTransform(23.2,-13.55,1,1,34.7105,0,0,47.6,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.5053},71).to({rotation:34.7105},62).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AC2BiInAgpQiKgLBohjIH7gvQBJAFApAnQAxAtgvA4QgaAggnAPQgZAJgYAAQgNAAgOgDg");
	this.shape.setTransform(49.9867,-12.7179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-80.3,174.6,106.1);


(lib.skipBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// _
	this.instance = new lib.skip();
	this.instance.setTransform(0.5,0);

	this.text = new cjs.Text("דלגו", "bold 23px 'Assistant'", "#FCEBEB");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(0.5,-15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text}]},1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-35.7,0,35.8,0).s().p("Aj8C6QhphNAAhtQAAhrBphOQBqhNCSAAQCUAABpBNQBpBNAABsQAABthpBNQhoBNiVAAQiTAAhphNg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,35.7).s().p("Aj7C6QhAgvgZg7IgQhPIAAgBIAQhPIAFgKIABgDIAKgRQATgfAggbIAWgSQBphNCSAAQCUAABpBNIAbAWQAlAiAUAoQAUAqAAAvIAAAAQAAAtgRAoIgDAGQgaA0g6ArQhoBNiVAAQiTAAhohNg");
	this.shape_1.setTransform(0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-35.9,21.3,35.5,21.3).s().p("AD6AcQhphMiSAAQiUAAhpBMIgWARIAWgSQBphMCUAAQCSAABpBMQAPALAMAMIgbgWg");
	this.shape_2.setTransform(95.1,-25.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-30,158.5,56.3);


(lib.guyfrombackwrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1C097").s().p("AhCAUQgCgBAAgEQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQALgEAKgFIARgIQAHgEASgFQARgFAIgEQAGgDAOgBIAZgDIgjArQgHgEgJADQgMAEgHABQgWANgTAAQgQABgIgLg");
	this.shape.setTransform(25.27,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.instance = new lib.aniMarsh();
	this.instance.setTransform(-37.5,-9.4,1,1,98.0549,0,0,0,-0.3);

	this.instance_1 = new lib.aniMarsh();
	this.instance_1.setTransform(-49.6,-10.95,1,1,98.0549,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBCEA5").s().p("AAWA/IgPgIIhYhuIAFgIQAFgHAFABIBPANQAaACAUAbQARAYAFAeQACAQgJAMQgKANgQACIgDAAQgJAAgOgHg");
	this.shape_1.setTransform(22.651,4.1804);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD9C7C").s().p("AIxBOIxmiLQgKgCABgIQABgIAMADIRnCDQAMADgDALQgCAJgJAAIgDAAg");
	this.shape_2.setTransform(-0.008,-4.0574);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1C097").s().p("AhkA3IgXgsIgngmIB+gEQAEgFgCgFQgBgDgGgEIAjgrQAMAAAhATIAvAeIBAAnQAhAjg1AdIg7gLIhyApIgVABIgDAAQgLAAgWglg");
	this.shape_3.setTransform(32.3656,1.1266);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackwrist, new cjs.Rectangle(-57.5,-17.8,115.1,29), null);


(lib.guyfrombackarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87054").s().p("AgNBEQhlg/g0guQAdgJAjgkIAegjIDvBeIhaCVQgogWgyggg");
	this.shape.setTransform(42.275,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_4
	this.instance = new lib.guyfrombackwrist();
	this.instance.setTransform(24,-7.6,1,1,-16.4216,0,0,43.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.0189,x:24.05,y:-7.5},60).to({rotation:-16.4216,x:24,y:-7.6},64).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C097").s().p("AC+C5QgmgFgagXIkyjmQj3iVDfAxIGzCyQA5AkASAxQAUA6g+AbQgbALgbAAIgUgBg");
	this.shape_1.setTransform(46.033,6.3285);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-35.9,155.1,60.9);


(lib.guyfromback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.guyfrombackHead();
	this.instance.setTransform(58.75,-62.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

	// Layer_3
	this.instance_1 = new lib.guyfrombackTorso();
	this.instance_1.setTransform(33.8,19.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	// Layer_4
	this.instance_2 = new lib.guyfrombackLegs();
	this.instance_2.setTransform(6.65,37.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#28316E","#1D1938"],[0,1],-89.7,0,89.8,0).s().p("AGDAoQilgYj4AEQh8ACklAQQjsANhYgFQiCgHAAgpQAAgaEPgSQEPgSF9AAIFfgDQC7gCBZADQD1AIAAA+QAAAthmAOQgpAGg3AAQh6AAi/gdg");
	this.shape.setTransform(1.375,88.9626);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_7
	this.instance_3 = new lib.guyfrombackarm();
	this.instance_3.setTransform(35.95,-5.5,1,1,8.2059,0,0,63.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:10.4,rotation:-19.9828,x:36.05,y:-5.7},58).to({regY:10.5,rotation:8.2059,x:35.95,y:-5.5},64).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-95.8,208.9,191.7);


(lib.bluecapwrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("ABQBoIgUgLIhYhhQiQANg9g8ICegmIBNgMIA9gEQApgCANAGIAWAPQANAIAFAGQAGAHAPAPQANANAGAIIALARQAHALAJAHQACADgBADQAAADgDABQgOAFgPgIQgSgKgOgXIgRgPQgHgHgJABQgHABgDACQgEADABAHIB3BCIg5ASIgrAeQghAVgNAAQgFAAgDgDg");
	this.shape.setTransform(-38.1,-9.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_6
	this.instance = new lib.aniMarsh();
	this.instance.setTransform(20.7,10.85,1,1,-65.2271,0,0,-0.1,-0.3);

	this.instance_1 = new lib.aniMarsh();
	this.instance_1.setTransform(35.1,18.05,1,1,-65.2271,0,0,-0.1,-0.3);

	this.instance_2 = new lib.aniMarsh();
	this.instance_2.setTransform(52.05,26.4,1,1,-65.2271,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD9C7C").s().p("AI8EmIx8o0QgMgFAEgLQAEgMAMAFIR5I7QAMAFgDAIQgDAFgFAAIgGgCg");
	this.shape_1.setTransform(-0.0117,0.021);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapwrist, new cjs.Rectangle(-61.5,-29.5,122,64), null);


(lib.bluecaplefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecapwrist();
	this.instance.setTransform(-5.2,2.7,1,1,5.743,0,0,-47,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.9832,x:-5.25,y:2.75},45).to({rotation:5.743,x:-5.2,y:2.7},43).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E48544").s().p("AirAJQhFg8AmhlQAlhhBcgkIA4BcQBXAtAxBZIAnBGQAZApAhAcQhAgpg4BmQgVAmgLAsQgLArAFAUg");
	this.shape.setTransform(-78.8779,-17.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AibAMIBtibQBXA2AzAZQASAKAuAmQhJAGgYAqQgWAnAQBJg");
	this.shape_1.setTransform(-68.05,-4.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAC89F").s().p("AjrBcQgngOgaghQgvg4AxgtQAqgnBJgFIH7AvIhJBTImaBEQgNADgPAAQgXAAgZgJg");
	this.shape_2.setTransform(-34.088,4.1356);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0692A").s().p("AhCBjQgRiTAogpQAjgkBQArQgwC8hAAAQgNAAgNgHg");
	this.shape_3.setTransform(-66.3909,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-46.3,204,107.5);


(lib.afrodudewrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// singleMarshForSmore
	this.instance = new lib.aniMarsh();
	this.instance.setTransform(-38.4,14.35,1,1,66.7254,0,0,0,-0.2);

	this.instance_1 = new lib.aniMarsh();
	this.instance_1.setTransform(-51.45,19.6,1,1,64.9463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB7968").s().p("AAmA4IiMg9IABgJQABgKAFgCIBTgaQAZgMAhAQQAcAOAUAbQALANgDASQgCARgOAKQgKAHgTAAIgTgCg");
	this.shape.setTransform(25.3657,-3.8956);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A86048").s().p("AgyA6QgDgBAAgEQgBgDACgCQAJgJAHgKIALgRQAGgIAOgMIAUgWQAEgGANgIIAWgPIgLA7QgIAAgJAGIgQAPQgNAYgSAKQgJAFgJAAQgFAAgGgCg");
	this.shape_1.setTransform(22.7583,-13.4288);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD9C7C").s().p("ApLDfQgCgIAMgEIR9m2QANgDADAMQADAMgNADIx/GvIgFABQgHAAgCgGg");
	this.shape_2.setTransform(-0.2677,0.0264);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A86048").s().p("AhLBWIgrgeIg5gSIB2hCQACgHgEgDQgDgCgIgBIAMg8QANgGAoACIA8AEIBnANQA3BYhyARIgFAAIhfBLIgVAMQgCADgFAAQgNAAghgVg");
	this.shape_3.setTransform(34.1097,-9.2322);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudewrist, new cjs.Rectangle(-59.6,-22.8,118.2,50.5), null);


(lib.afrodudehandfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudewrist();
	this.instance.setTransform(23.2,-13.55,1,1,34.7105,0,0,47.6,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.5053},71).to({rotation:34.7105},62).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AC2BiInAgpQiKgLBohjIH7gvQBJAFApAnQAxAtgvA4QgaAggnAPQgZAJgYAAQgNAAgOgDg");
	this.shape.setTransform(49.9867,-12.7179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-80.3,174.6,110.8);


(lib.guitarguyhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.guitarguyonlyhead();
	this.instance.setTransform(-18.5,23.2,1,1,-13.2241,0,0,-18.5,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,y:23.1},14).to({rotation:-13.2241,y:23.2},15).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C099").s().p("AADCMQg6gIgxgSQgygRgDgPQAdggAOgdQARglAAgsQASgZAZgXQAyguAhANQAqAQAWA0QAVA2gSAxQAcANARAUQARATAAAPQAAAwhYAAQgdAAgmgFg");
	this.shape.setTransform(-7.925,17.3427);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-35.4,61.3,67.2);


(lib.bluecaphead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.blucapjusthead();
	this.instance.setTransform(-3.75,5.15,1,1,-14.9992,0,0,-3.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.6,rotation:9.9752,x:-3.85,y:5.05},14).to({regY:12.7,rotation:-14.9992,x:-3.75,y:5.15},15).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("AgJAtQgzgZgbgWQAgggAsgLQBTgXAJgEQgCAiAIBFQAFAqgOAAQgfAAg4gcg");
	this.shape.setTransform(-2.3074,24.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AgvBqQhFguAIgWIA2i6ICjAXIgQCzIAHA4QADAmgJABIgSAAQg7AAhAgrg");
	this.shape_1.setTransform(-3.8918,15.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-34.4,55.9,66.5);


(lib.afrodudehead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudejusthead();
	this.instance.setTransform(11.45,10.7,1,1,14.9992,0,0,11.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.1,rotation:-12.198,x:11.5,y:10.6},29).to({regY:16.2,rotation:14.9992,x:11.45,y:10.7},30).wait(1));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AgiCOQgbgCgVgXQgUgXgIggIgejLIC9AVIBcCHQgKAsggAiQguAxhLAAIgMAAg");
	this.shape.setTransform(5.65,21.414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-43.2,68.7,78.9);


(lib.littleFireMove3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy
	this.instance_1 = new lib.littleFire_1();
	this.instance_1.setTransform(-14,-45.05,1.6155,1.4585,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12.5,regY:-11,scaleX:0.1296,scaleY:0.1296,rotation:-48.6808,guide:{path:[-13.9,-45,-5.9,-64.7,0,-85,0.1,-85.5,0.3,-86,23.5,-166.3,5.6,-226,-7.9,-270.7,-12.8,-289.5,-20.5,-319.2,-23,-340.5,-25.7,-364.6,-22.8,-386.4,-19.9,-409,-10.2,-434.1,-3,-452.6,17.2,-487.3,41.3,-529,49.9,-546.8,67.4,-582.8,73.7,-614.9,81.5,-654.5,73.7,-694.1,66.2,-732.6,53.4,-766.9,44.2,-791.5,30.2,-818.6,28,-822.9,19.7,-838.7,13.9,-849.8,10.9,-856.1,2.5,-873.9,1.6,-886.1], orient:'fixed'}},31).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-886.3,110.2,863.4);


(lib.littleFireMove2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy_copy
	this.instance_1 = new lib.littleFire_1();
	this.instance_1.setTransform(-68.6,100.45,1.7556,1.7487,-59.9989,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,regY:2.6,scaleX:0.069,scaleY:0.069,rotation:-48.6781,guide:{path:[-68.6,100.4,-77.4,86.3,-84.9,71.7,-85.1,71.2,-85.4,70.7,-123.4,-3.7,-117.2,-65.8,-112.5,-112.1,-111.2,-131.6,-109.2,-162.2,-110.9,-183.6,-112.7,-207.8,-119.7,-228.6,-126.9,-250.2,-141.1,-273,-151.7,-290,-178,-320.1,-209.8,-356.4,-221.6,-372.2,-245.6,-404.3,-257.9,-434.6,-273.1,-472.1,-273,-512.3,-272.9,-551.6,-266.8,-587.7,-262.5,-613.6,-253.9,-642.9,-252.5,-647.4,-247.3,-664.6,-243.7,-676.6,-241.9,-683.4,-240.1,-690.4,-239.2,-696.5], orient:'fixed'}},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.6,-697.8,237.40000000000003,824.3);


(lib.littleFireMove1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance_1 = new lib.littleFire_1();
	this.instance_1.setTransform(94.6,19.8,1.2025,1.1406,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:0.0693,scaleY:0.0693,rotation:-44.474,guide:{path:[94.8,19.8,110.6,-4.2,121.5,-29,121.8,-29.5,122,-30,157.4,-110.3,130,-170,109.7,-214.7,102.2,-233.5,90.3,-263.2,86.6,-284.5,82.4,-308.6,86.8,-330.4,91.4,-353,106.1,-378.1,117.1,-396.6,147.7,-431.3,184.6,-473,197.8,-490.8,224.4,-526.8,234,-558.9,245.8,-598.5,234,-638.1,222.5,-676.6,203.1,-710.9,189,-735.5,167.8,-762.6,164.4,-766.9,151.6,-782.7,145.4,-790.4,141.3,-795.9], orient:'fixed'}},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.5,-797.1,161.3,834);


(lib.fireMC_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_18
	this.instance_11 = new lib.fireBit62_1();
	this.instance_11.setTransform(37.25,66.65,1,1,0,0,0,30.7,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36));

	// Layer_16
	this.instance_12 = new lib.fireBit42_1();
	this.instance_12.setTransform(-53.95,44.1,1,1,0,0,0,37.9,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36));

	// Layer_19_copy
	this.instance_13 = new lib.fireBit82_1();
	this.instance_13.setTransform(-2.2,30.6,1.6365,1.0342,0,0,0,13,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36));

	// Layer_17
	this.instance_14 = new lib.fireBit52_1();
	this.instance_14.setTransform(-2.1,-26,1.641,1.641,0,0,0,37.9,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(36));

	// Layer_14
	this.instance_15 = new lib.fireBit12_1();
	this.instance_15.setTransform(-99.4,6.35,1,1,0,0,0,48.8,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(36));

	// Layer_19
	this.instance_16 = new lib.fireBit72_1();
	this.instance_16.setTransform(75,27.7,1,1,0,0,0,13,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(36));

	// Layer_15
	this.instance_17 = new lib.fireBit32_1();
	this.instance_17.setTransform(59.3,-18.45,1,1,0,0,0,53.4,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(36));

	// Layer_13
	this.instance_18 = new lib.fireBit22_1();
	this.instance_18.setTransform(-11,-28.8,1,1,0,0,0,85.1,127.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(36));

	// Layer_11
	this.instance_19 = new lib.littleFireMove2_1();
	this.instance_19.setTransform(-76,97.1,1,1,0,0,0,-68.5,100.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(11).to({_off:false},0).wait(25));

	// Layer_12
	this.instance_20 = new lib.littleFireMove3_1();
	this.instance_20.setTransform(-15.35,-47.95,1,1,0,0,0,-13.7,-44.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(21).to({_off:false},0).wait(15));

	// Layer_10
	this.instance_21 = new lib.littleFireMove1_1();
	this.instance_21.setTransform(94.5,17.9,1,1,0,0,0,94.5,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.1,-187.6,256.7,335.79999999999995);


(lib.fireLightUpNew_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance_3 = new lib.elipse1_1();
	this.instance_3.setTransform(0,-147.85,0.6167,3.0166,0,0,0,0,48.6);
	this.instance_3.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_3.cache(-232,-2,463,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:48.4,scaleX:0.6862,scaleY:3.94,y:-193.6},59).to({regY:48.6,scaleX:0.6167,scaleY:3.0166,y:-147.85},60).wait(1));

	// Layer_5
	this.instance_4 = new lib.elipse2_1();
	this.instance_4.setTransform(-0.2,-201.1,0.5335,2.8486,0,0,0,-0.2,69.8);
	this.instance_4.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_4.cache(-332,-2,664,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.4,regY:69.5,scaleX:0.6061,scaleY:3.5056,x:-0.3,y:-248.1},59).to({regX:-0.2,regY:69.8,scaleX:0.5335,scaleY:2.8486,x:-0.2,y:-201.1},60).wait(1));

	// Layer_6
	this.instance_5 = new lib.elipse3_1();
	this.instance_5.setTransform(-0.1,-235.3,0.5796,2.65,0,0,0,-0.1,87.8);
	this.instance_5.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_5.cache(-402,-2,804,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:87.7,scaleX:0.8748,scaleY:4.329,y:-384.15},59).to({regY:87.8,scaleX:0.5796,scaleY:2.65,y:-235.3},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419.7,-833.8,845,909.5);


(lib.fireLightDown_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance_3 = new lib.elipse1_1();
	this.instance_3.setTransform(399.45,48.7,1,1,0,0,0,0,48.7);
	this.instance_3.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_3.cache(-232,-2,463,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,scaleX:1.3041,scaleY:1.2237,x:399.6,y:59.6},59).to({regX:0,scaleX:1,scaleY:1,x:399.45,y:48.7},60).wait(1));

	// Layer_3
	this.instance_4 = new lib.elipse2_1();
	this.instance_4.setTransform(399.55,70,1.0529,1,0,0,0,0.1,70);
	this.instance_4.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_4.cache(-332,-2,664,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.4496,scaleY:1.3899,x:399.5,y:97.3},59).to({scaleX:1.0529,scaleY:1,x:399.55,y:70},60).wait(1));

	// Layer_4
	this.instance_5 = new lib.elipse3_1();
	this.instance_5.setTransform(399.8,108.8,1.1421,1.2351,0,0,0,0,88.1);
	this.instance_5.filters = [new cjs.BlurFilter(70, 70, 1)];
	this.instance_5.cache(-402,-2,804,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.5352,scaleY:1.7055,y:150.25},59).to({scaleX:1.1421,scaleY:1.2351,y:108.8},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-70,1375,448);


(lib.bonfireMCani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fireMC
	this.instance = new lib.fireMC_1();
	this.instance.setTransform(402.25,490.4,1,1,0,0,0,-12.2,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(279,564,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(279.7,551.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// _Clip_Group_
	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.setTransform(368.15,726.55,1,1,0,0,0,340.2,335.2);
	this.instance_3.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F193B").s().p("ARkPPQh1ghjPhpQjWhthtghQjFg9jLAZQiFAQjRBIQkBBYhRATQkZBDlognQjggYmihfQilglhagtQiFhBgyhrQguhjAhh2QAfhwBXhQQCRiEEMgcQhUiMAAirQABirBUiMQBViMCXhQQCXhQCjAKIAdgSQJ1CeILAaQJNAeIziEQEmhEBagMQDagcCgA0QBHAYAuAsQA2A1gGA9QgDAZgRAlQgWAxgEAMQgbBZA9BbQAmA4BvBlQB0BpAnA2QBEBegRBZQgPBRhMA2QgzAlhxAsQiGA0gsAYQhdAzgmBFQgeA1gKBlQgMB5gMAoQgzCfi9A+QhcAfheAAQhUAAhWgYg");
	this.shape.setTransform(390.4058,631.9098);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fireLightDown
	this.instance_4 = new lib.fireLightDown_1();
	this.instance_4.setTransform(399.9,682.75,0.9166,0.9166,0,0,0,399.9,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_11
	this.instance_5 = new lib.fireLightUpNew_1();
	this.instance_5.setTransform(398.25,94.6,1,1,0,0,0,0,-533.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonfireMCani, new cjs.Rectangle(-53.7,125.1,910,715.8), null);


(lib.smoreWithSkew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// catagoryText
	this.catagoryText = new cjs.Text("הההההההההה", "normal 400 25px 'Assistant'", "#7F4011");
	this.catagoryText.name = "catagoryText";
	this.catagoryText.textAlign = "center";
	this.catagoryText.lineHeight = 39;
	this.catagoryText.lineWidth = 147;
	this.catagoryText.parent = this;
	this.catagoryText.setTransform(-1.4921,-50.15,0.9849,0.9849);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.catagoryText);
	}

	this.timeline.addTween(cjs.Tween.get(this.catagoryText).wait(1));

	// skewForSmore_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68D60").s().p("AgOAYQgGgDAAgDIAAgjIAAgIIApAAIAAAIIAAAjQAAAHgVAAQgIAAgGgBg");
	this.shape.setTransform(-0.5117,-79.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// singleSmore
	this.instance = new lib.singleSmore();
	this.instance.setTransform(-0.15,-40.65,0.9849,0.9849,0,0,0,84.6,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// skewForSmore
	this.skewForSmore = new lib.skewForSmore();
	this.skewForSmore.name = "skewForSmore";
	this.skewForSmore.setTransform(2.65,-81.75,0.9849,0.9849,0,0,0,2.7,60.1);

	this.timeline.addTween(cjs.Tween.get(this.skewForSmore).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_43();
	this.instance_1.setTransform(-92.5,-215.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smoreWithSkew, new cjs.Rectangle(-92.5,-215.9,182,216), null);


(lib.winMarsh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.dispatchEvent("marshAnimationDone");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Isolation_Mode_copy_copy
	this.instance = new lib.winStar();
	this.instance.setTransform(50.7,26.25,0.6327,0.6327,0,0,0,-0.8,-0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},11).wait(13));

	// Isolation_Mode_copy
	this.instance_1 = new lib.winStar();
	this.instance_1.setTransform(8.5,45.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},10).wait(13));

	// Isolation_Mode_copy_copy_copy
	this.instance_2 = new lib.winStar();
	this.instance_2.setTransform(-28.65,50.8,0.9772,0.9772,-74.7147);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},11).wait(10));

	// Isolation_Mode_copy_copy
	this.instance_3 = new lib.winStar();
	this.instance_3.setTransform(-66.2,40.35,0.7344,0.7344,-74.7152);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// Isolation_Mode_copy_copy_copy_copy_copy
	this.instance_4 = new lib.winStar();
	this.instance_4.setTransform(-90.1,19.4,0.9772,0.9772,-74.7147);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({_off:true},11).wait(8));

	// Isolation_Mode_copy_copy_copy_copy
	this.instance_5 = new lib.winStar();
	this.instance_5.setTransform(-104.55,-15.5,1.1905,1.1905,-74.7156,0,0,0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},10).wait(8));

	// Isolation_Mode_copy_copy_copy_copy
	this.instance_6 = new lib.winStar();
	this.instance_6.setTransform(-99.1,-52.6,0.9772,0.9772,-74.7147);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({_off:true},11).wait(6));

	// Isolation_Mode_copy_copy_copy
	this.instance_7 = new lib.winStar();
	this.instance_7.setTransform(-83.55,-79.4,0.7344,0.7344,-74.7152);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({_off:true},10).wait(6));

	// Layer_1
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.alpha = 0.1289;

	this.instance_9 = new lib.Tween14("synched",0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,alpha:1},3).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},3).wait(1).to({x:-0.3,y:1.45},0).to({regX:0.1,scaleX:0.5306,scaleY:0.5306,rotation:-134.2881,guide:{path:[-0.3,1.6,-14.4,-0.8,-24.8,-9.5,-46.1,-27.2,-27.9,-59.8,-19.4,-75.1,-4.1,-78.7,9.7,-81.8,25.3,-75,40.4,-68.5,50.8,-55.6,61.9,-42,63,-26.9,65.6,6.4,50.9,24.3,34.3,44.6,-7.4,49.9,-28.6,52.5,-47.6,47.2,-65.4,42.3,-78.8,31,-91.8,20,-98.4,5,-105.1,-10.3,-103.9,-26.9,-102.6,-45,-95.5,-61.4,-87.6,-80,-73.7,-92.9,-58.1,-107.5,-36.9,-113.5], orient:'fixed'},startPosition:21},10).to({regX:0,scaleX:0.4188,scaleY:0.4188,rotation:-49.1927,guide:{path:[-36.9,-113.6,-12.1,-120.6,20.1,-115.9,51.5,-111.3,75.7,-84.9,86.8,-72.8,94.5,-58.4], orient:'fixed'}},5).to({regX:-0.2,regY:0.2,scaleX:0.2528,scaleY:0.2528,rotation:0,guide:{path:[94.5,-58.3,102.1,-44,106.4,-27.5,115.1,5.8,106,31.6,96,60,68,68,19.1,82,-0.9,87.2,-10,89.6,-11,89.6], orient:'fixed'},startPosition:0},4).to({x:-0.35,y:385.8,alpha:0,startPosition:2},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.6,-221.1,414.29999999999995,642.7);


(lib.loserMarsh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_22 = function() {
		this.dispatchEvent("marshAnimationDone");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(2,13.05);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(-2.5,-1.9,0.3929,0.3929,-1.0014,0,0,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.05,y:-6,alpha:1},3).to({_off:true,regX:0.5,regY:0.5,scaleX:0.3929,scaleY:0.3929,rotation:-1.0014,x:-2.5,y:-1.9},14).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},14).to({regX:0.8,regY:0,scaleX:0.1305,scaleY:0.1305,rotation:25.96,x:11.2,y:40.5,alpha:0},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-97.4,173.2,243.4);


(lib.pauseBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bonfireMC();
	this.instance.setTransform(926.7,593.95,1,1,0,0,0,399.9,480.8);

	this.instance_1 = new lib.gameChoiceBGground();
	this.instance_1.setTransform(883.9,887,1,1,0,0,0,883.9,198.1);

	this.instance_2 = new lib.gameChoiceBGtrees();
	this.instance_2.setTransform(928.4,494.9,1,1,0,0,0,768.2,494.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseBG, new cjs.Rectangle(0,0,1767.7,1085.2), null);


(lib.gameChoiceScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.responseText = new cjs.Text("משחקים לדוגמא: 101, 102", "normal 700 16px 'Assistant'", "#F7C7CB");
	this.responseText.name = "responseText";
	this.responseText.textAlign = "center";
	this.responseText.lineHeight = 28;
	this.responseText.lineWidth = 385;
	this.responseText.parent = this;
	this.responseText.setTransform(661.3426,193.7,0.8562,0.8562);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.responseText);
	}

	this.EnterTxt = new lib.an_TextInput({'id': 'EnterTxt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.EnterTxt.name = "EnterTxt";
	this.EnterTxt.setTransform(661.6,164.75,2.4805,2.4805,0,0,0,50.1,11.1);

	this.text = new cjs.Text("משחקים לדוגמא: 101, 102", "normal 400 16px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(661.3426,261.9,0.8562,0.8562);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text(":הזינו את קוד המשחק", "normal 700 31px 'Assistant'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 385;
	this.text_1.parent = this;
	this.text_1.setTransform(661.3686,97.05,0.8046,0.8046);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.EnterTxt},{t:this.responseText}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#DFD6EC","#E3DBEE","#AD94C6","#FFFFFF","#FAF8FC","#E9E4F2","#D1C4E2","#BDA9D2"],[0,0.224,0.463,0.808,0.843,0.894,0.957,1],-135.4,0,135.5,0).ss(6).p("Aw3D1MAhvAAAQBmAABHhIQBIhHAAhmQAAhkhIhIQhHhIhmAAMghvAAAQhmAAhHBIQhIBIAABkQAABmBIBHQBHBIBmAAg");
	this.shape.setTransform(661.381,162.6937,0.854,0.854);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aw4D1QhkAAhIhIQhIhHAAhmQAAhlBIhHQBIhIBkAAMAhwAAAQBmAABHBIQBIBIAABkQAABmhIBHQhHBIhmAAg");
	this.shape_1.setTransform(661.381,162.6937,0.854,0.854);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(98.05,-182.95,1,1,0,0,0,50,11);

	this.startGameBTN = new lib.startGameBTN();
	this.startGameBTN.name = "startGameBTN";
	this.startGameBTN.setTransform(661.5,235.25,0.7467,0.7467,0,0,0,0.2,0.1);

	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/myCss.css'});

	this.myCss.name = "myCss";
	this.myCss.setTransform(869.25,42.95,1,1,0,0,0,50,11);

	this.instance_1 = new lib.gameChoiceWindow();
	this.instance_1.setTransform(619.75,187.45,1,1,0,0,0,262.6,106.7);

	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(1108.15,49.75,1,1,0,0,0,132.8,25.9);

	this.instance_3 = new lib.bonfireMC();
	this.instance_3.setTransform(650.65,497.8,0.672,0.672,0,0,0,399.9,480.9);

	this.instance_4 = new lib.gameChoiceBGground();
	this.instance_4.setTransform(607.85,703.95,1,1,0,0,0,883.9,198.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.myCss},{t:this.startGameBTN},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(-116,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceScreen, new cjs.Rectangle(-276,-194.4,1767.7,1096.5), null);


(lib.bluecapguyopenbagopen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16_copy
	this.instance = new lib.marshQ();
	this.instance.setTransform(-10.6,-19.9,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-10.6,-19.9,-15.1,-27,-19.9,-34.3,-32.3,-53.5,-44.6,-68,-82.7,-113.3,-121.9,-119], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy
	this.instance_1 = new lib.marshQ();
	this.instance_1.setTransform(-17.6,-12.9,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:0.5,regY:-4.2,rotation:30.0004,guide:{path:[-17.6,-12.9,-21.8,-51.9,-28.8,-78.7,-43.7,-135.5,-73.9,-172.4], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy_copy
	this.instance_2 = new lib.marshQ();
	this.instance_2.setTransform(-24.5,-8.35,0.059,0.059,-30.0004,0,0,1,-3.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({regX:0.6,regY:-4.5,rotation:14.9925,guide:{path:[-24.5,-8.4,-28.1,-13.7,-32.9,-24.6,-40.4,-41.6,-44.8,-61.1,-57.1,-115,-41.7,-167.9], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy_copy_copy
	this.instance_3 = new lib.marshQ();
	this.instance_3.setTransform(-35.65,-9.2,0.059,0.059,-30.0004,0,0,1,-3.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:1.2,regY:-3.6,rotation:135,guide:{path:[-35.5,-9.2,-37.3,-14.5,-38.7,-23.7,-41.8,-42.9,-40.4,-64.6,-36.5,-123.9,-2,-167.6], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy_copy_copy_copy
	this.instance_4 = new lib.marshQ();
	this.instance_4.setTransform(-33.4,-4.45,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({regX:1.6,regY:-4,rotation:104.9925,guide:{path:[-33.5,-4.5,-35.3,-11.9,-40.3,-25.2,-47.1,-43.4,-56,-62.4,-79.1,-110.8,-104.9,-140.5], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy_copy_copy
	this.instance_5 = new lib.marshQ();
	this.instance_5.setTransform(-39.45,-3.45,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regY:-3.4,guide:{path:[-39.4,-3.5,-42.4,-9.6,-50,-26.6,-63.4,-56.5,-76.5,-79.8,-118.9,-155.4,-168.7,-185.1], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy_copy
	this.instance_6 = new lib.marshQ();
	this.instance_6.setTransform(-35.2,-8.45,0.059,0.059,14.9887,0,0,-0.1,-3.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-35.2,-8.4,-38.1,-16.1,-44.1,-35.1,-58.8,-81.5,-65.1,-100.2,-95.7,-190.4,-120.9,-227.7], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy_copy
	this.instance_7 = new lib.marshQ();
	this.instance_7.setTransform(-24.25,-8.25,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({regX:0,regY:0,guide:{path:[-24.2,-8.3,-27.3,-14.9,-32.3,-30.1,-40.8,-56,-46.3,-84.7,-61.7,-164.7,-45.7,-219.5], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16_copy
	this.instance_8 = new lib.marshQ();
	this.instance_8.setTransform(-19.25,-14.1,0.059,0.059,0,0,0,0.8,-2.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:1.1,regY:-4.1,rotation:75.0075,guide:{path:[-19.1,-14.2,-23.6,-22.1,-27.4,-42.1,-32.6,-69.1,-32.6,-100,-32.6,-137.2,-24.7,-169.8,-15.8,-206,2,-232.8], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_16
	this.instance_9 = new lib.marshQ();
	this.instance_9.setTransform(-10.15,-20,0.059,0.059,-30.0004,0,0,1,-3.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({regX:1.2,regY:-3.6,rotation:45,guide:{path:[-10,-20,-13.5,-24.4,-15.6,-40.3,-18.2,-59.7,-15.4,-80.3,-11.9,-106.5,-0.1,-128.9,12.8,-153.7,35.2,-172], orient:'fixed'}},107,cjs.Ease.quadOut).wait(1));

	// Layer_2
	this.instance_10 = new lib.bluecaphead();
	this.instance_10.setTransform(-57.4,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("Ah2CVIgLgPIgageICKjsQApgmA0AEQA6AEARBCQAKAmgLAgQgKAfgaAPIjYCUIgQgTg");
	this.shape.setTransform(10.1756,-30.8648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC89F").s().p("AheCmIgPgRIAAAAIglgrIB8jpIAIgHQAjggAtABIAGABQA0AFARA9IABAFQAJAhgIAdIgDAKQgKAYgUAMIgIAFIjDCSIgBAAg");
	this.shape_1.setTransform(10.9189,-31.0015);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAC89F").s().p("AhVCkIgPgQIAAAAIglgpIBvjmIAGgIQAhggArAAIAGAAQAyADATA6IABAGQAJAfgGAdIgDAJQgIAZgSAMIgHAFIi3CWIgBgBg");
	this.shape_2.setTransform(11.7113,-31.1125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC89F").s().p("AhMCjIgPgPIglgnIBhjkIAGgHQAegiApgCIAGAAQAwABAVA5IABAFQAKAegFAcIgCAJQgGAZgRAMIgHAGIiqCYIgBAAg");
	this.shape_3.setTransform(12.4833,-31.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAC89F").s().p("AhDCiIgPgOIglgmIBTjgIAFgIQAdgjAmgDIAGgBQAuAAAWA2IACAFQAKAcgDAbIgBAJQgFAZgQAOIgGAFIidCcIgBAAg");
	this.shape_4.setTransform(13.2583,-31.4002);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAC89F").s().p("AhKCTIAAgBIglgiIBGjeIAEgIQAagkAlgFIAFgBQAtgCAYA0IABAEQAMAcgCAaIgBAJQgDAZgOAPIgGAEIiQCfIgBABIgQgOg");
	this.shape_5.setTransform(14.0587,-31.5307);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAC89F").s().p("AhBCTIgBgBIgkghIA5jaIACgJQAXglAkgGIAFgBQArgFAZAyIACAEQAMAbAAAZIgBAJQgBAYgMAQIgGAGIiDChIgCABIgPgNg");
	this.shape_6.setTransform(14.9,-31.6727);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAC89F").s().p("Ag5CTIglggIAtjhQAWgoAlgHQArgHAbA0QAQAegBAdQAAAdgQARIh4CmIgQgMg");
	this.shape_7.setTransform(15.728,-31.8219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(107));

	// Layer_12_copy
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAC89F").s().p("AgbBdIgugZIg7gLIBuhPQABgHgFgDQgCgBgIAAIACgXIgCAXQgIAAgIAIIgOARQgMAYgQAMQgPAKgOgEQgDgBgBgCQgBgDACgDQAIgKAGgLIAJgSIARgXQANgQAFgIQAEgGAMgKQAQgMAEgFQANgIAmgDIA+gDQAFAAAQAdIAfA3IhXBzIgTAOQgCAEgHAAQgOAAgfgQg");
	this.shape_8.setTransform(-12.975,-10.7721);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({x:-10.125,y:-12.8221},0).wait(1).to({x:-7.225,y:-14.8221},0).wait(1).to({x:-4.375,y:-16.8721},0).wait(1).to({x:-1.475,y:-18.8721},0).wait(1).to({x:1.375,y:-20.9221},0).wait(1).to({x:4.275,y:-22.9221},0).wait(1).to({x:7.125,y:-24.9721},0).wait(107));

	// Layer_15
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAC89F").s().p("Aj1BXQgmgSgXgjQgpg8A1goQAtgjBJABIH1BdIhRBMImdAfIgRABQgdAAgegOg");
	this.shape_9.setTransform(-68.7862,-2.2225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAC89F").s().p("Aj3BUQglgUgVgkQgmg+A3glQAuggBJAFIHrB1IhUBJImbAIIgLAAQggAAgfgQg");
	this.shape_10.setTransform(-69.3513,-2.1133);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAC89F").s().p("AixBdQgmABgjgVQgkgWgSglQgig/A4giQAwgdBHAJIHhCOIhXBEg");
	this.shape_11.setTransform(-69.9172,-1.3052);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAC89F").s().p("Ai1BSQglgBgigXQgjgYgQgkQgfhCA6gfQAxgaBHAMIHXCpIhbA+g");
	this.shape_12.setTransform(-70.5006,-0.1003);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAC89F").s().p("Ai5BHQglgDghgZQghgZgOgmQgbhDA7gbQAzgZBGARIHNDCIheA6g");
	this.shape_13.setTransform(-71.1214,1.0768);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAC89F").s().p("Ai9A9QglgFgfgbQgggbgMgnQgYhEA+gZQAzgVBGAUIHDDcIhhA1g");
	this.shape_14.setTransform(-71.7249,2.2247);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAC89F").s().p("AjAAzQgmgHgdgdQgfgcgKgoQgUhGA/gVQA1gTBEAYIG6D1IhlAwg");
	this.shape_15.setTransform(-72.3319,3.3351);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FAC89F").s().p("AjEApQglgJgcgeQgegfgIgpQgQhHBBgSQA2gQBEAcIGvEPIhoAqg");
	this.shape_16.setTransform(-72.959,4.4341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(107));

	// Layer_12
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAC89F").s().p("AiSBDIAlg7IAlgwQAYgfAOgGIABAAIAZgHQANgEAHAAQAKAAAVgBQATgDAJABIAVADQAMACANgBQADAAACACQACADgBADQgGANgQAHQgTAHgbgFIgWACQgLACgFAHIgKgGIAKAGQgEAGAAADQAAAFAGADICAgsIgYA2IgFAzQgJA1gNgBIgWAIg");
	this.shape_17.setTransform(-37.4375,-1.7143);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1).to({x:-39.725,y:-0.1643},0).wait(1).to({x:-41.975,y:1.4357},0).wait(1).to({x:-44.275,y:2.9857},0).wait(1).to({x:-46.575,y:4.5357},0).wait(1).to({x:-48.875,y:6.0857},0).wait(1).to({x:-51.125,y:7.6857},0).wait(1).to({x:-53.425,y:9.2357},0).wait(107));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#66CCFF","#3399FF"],[0,1],-3,-1.4,0,-3,-1.4,36.5).s().p("AkMi9QCggIAyiGQFfCOAQEYQi/DOjhAjQkiixCBlYg");
	this.shape_18.setTransform(-7.483,14.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#57BDFF","#3399FF"],[0,1],-4.4,-5.1,0,-4.4,-5.1,34.4).s().p("AilEcQi1icAyj2QAFgcAKgeIACgIQBUgJA5g3QAfgeATguQAtAPApASQAoAGAgAOQAjALAZAPQCeCAAUC8QggAsghAnQicCLixAgQgogTgjgWg");
	this.shape_19.setTransform(-7.8543,14.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#49AFFF","#3399FF"],[0,1],-5.8,-8.9,0,-5.8,-8.9,32.4).s().p("AiWEfQjAimAskAQADgSAEgTIABgHQBEgMA3g4QAdgdATgoQA7AOAzASQArgBAhAHQAjACAUAJQCcCAAdC9QgXAugZArQicCOiwAkQgpgNgkgRg");
	this.shape_20.setTransform(-8.2899,15.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#3AA0FF","#3399FF"],[0,1],-7.1,-12.6,0,-7.1,-12.6,30.5).s().p("AiHEiQjIivAikGIACgUIAAgHQAzgQA2g4QAagbAUgkQBQAJBEATIAFACQAigFAaAAQAjgHARABQCYCBAmC+QgOAwgRAuQibCTiwAoQgpgHgngNg");
	this.shape_21.setTransform(-8.8344,15.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#2C92FF","#3399FF"],[0,1],-8.3,-15.8,0,-8.3,-15.8,28.8).s().p("Ah1ErQjRi2AUkJIAAgJIAAgGQAhgTA1g5QAYgZAUggQBHgCBCAGQAmAFAfALIAigKIAwgVQCWCBAvC/QgFAzgKAxQiZCXivAsQgrgCgogHg");
	this.shape_22.setTransform(-9.5113,15.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#1D83FF","#3399FF"],[0,1],-9.3,-18.2,0,-9.3,-18.2,27.2).s().p("AhjE8QjXi8ADkHIgBgEIgBgFQAQgXA0g5QAWgXAVgcQA8gNBAgIQBVgFA6AXQAkgZAIgNQCTCCA4DAQADA0gBA2QiZCbiuAwQgaACgZAAIgjgBg");
	this.shape_23.setTransform(-10.3025,14.6521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#0F75FF","#3399FF"],[0,1],-11,-20.9,0,-11,-20.9,25.9).s().p("AlEh8IAAAAIgCgFQgBgaAzg5IAogtQA0gZA8gUQBggdBEAKQASABAOAEQALACAIAEQAHgKABgIQCRCDBADCQAMA1AHA4QiYCfivA1QgrAIgsADQjcjBgRkEg");
	this.shape_24.setTransform(-10.4752,14.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#0066FF","#3399FF"],[0,1],0,0,0,0,0,24.8).s().p("AjRB/IgDgEQgRgfAxg5QAyg5BYgzQBXgyBLgPQBLgOARAeQAFAIAAAKQAAAcglAqQgyA5hYAyQhXAzhLAPQgXAEgSAAQgjAAgNgQg");
	this.shape_25.setTransform(-23.391,-10.2257);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#66CCFF","#3399FF"],[0,1],0,-0.4,0,0,-0.4,36.5).s().p("AlShuIAAAAQAUAaBFgNQBMgPBXgzQBYgzAyg5QAkgqAAgcQC2CqBFEQQi/DNjhAkQjfjFgmj/g");
	this.shape_26.setTransform(-10.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).wait(107));

	// Layer_9
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E48544").s().p("AhwhpQADhcBmgjQBigiBXAwIgkBmQAXBfgmBeQgKAagTAyQgRAtAAAsQgIhMhyAWQgrAIgpAUQgnATgNARg");
	this.shape_27.setTransform(-90.5,-36.0549);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(114));

	// Layer_14
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F1B58B").s().p("AhuhxIC+gRQAOBnANA2QAEAUAAA7Qgzg0gxAKQgrAHguA7g");
	this.shape_28.setTransform(-93.2,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(114));

	// Layer_11
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C0692A").s().p("AhxAeQBnhqA4AEQAyAEASBYQhuA2g5AAQg0AAgIgsg");
	this.shape_29.setTransform(-96.85,-14.3132);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(114));

	// Layer_5
	this.instance_11 = new lib.bluecapLegs();
	this.instance_11.setTransform(-2.35,46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114));

	// Layer_6
	this.instance_12 = new lib.bluecapTorso();
	this.instance_12.setTransform(-61.45,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(114));

	// Layer_8
	this.instance_13 = new lib.bluecapArm();
	this.instance_13.setTransform(-45.05,-55.65,1,1,-18.7391,0,0,-28.6,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-238.1,261.1,351.8);


(lib.bluecapguyopenbag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecaphead();
	this.instance.setTransform(-57.4,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("Ah2CVIgLgPIgageICKjsQApgmA0AEQA6AEARBCQAKAmgLAgQgKAfgaAPIjYCUIgQgTg");
	this.shape.setTransform(10.1756,-30.8648);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_12_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC89F").s().p("AgbBdIgugZIg7gLIBuhPQABgHgFgDQgCgBgIAAIACgXIgCAXQgIAAgIAIIgOARQgMAYgQAMQgPAKgOgEQgDgBgBgCQgBgDACgDQAIgKAGgLIAJgSIARgXQANgQAFgIQAEgGAMgKQAQgMAEgFQANgIAmgDIA+gDQAFAAAQAdIAfA3IhXBzIgTAOQgCAEgHAAQgOAAgfgQg");
	this.shape_1.setTransform(-12.975,-10.7721);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAC89F").s().p("Aj1BXQgmgSgXgjQgpg8A1goQAtgjBJABIH1BdIhRBMImdAfIgRABQgdAAgegOg");
	this.shape_2.setTransform(-68.7862,-2.2225);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC89F").s().p("AiSBDIAlg7IAlgwQAYgfAOgGIABAAIAZgHQANgEAHAAQAKAAAVgBQATgDAJABIAVADQAMACANgBQADAAACACQACADgBADQgGANgQAHQgTAHgbgFIgWACQgLACgFAHIgKgGIAKAGQgEAGAAADQAAAFAGADICAgsIgYA2IgFAzQgJA1gNgBIgWAIg");
	this.shape_3.setTransform(-37.4375,-1.7143);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#66CCFF","#3399FF"],[0,1],-3,-1.4,0,-3,-1.4,36.5).s().p("AkMi9QCggIAyiGQFfCOAQEYQi/DOjhAjQkiixCBlYg");
	this.shape_4.setTransform(-7.483,14.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_9
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E48544").s().p("AhwhpQADhcBmgjQBigiBXAwIgkBmQAXBfgmBeQgKAagTAyQgRAtAAAsQgIhMhyAWQgrAIgpAUQgnATgNARg");
	this.shape_5.setTransform(-90.5,-36.0549);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1B58B").s().p("AhuhxIC+gRQAOBnANA2QAEAUAAA7Qgzg0gxAKQgrAHguA7g");
	this.shape_6.setTransform(-93.2,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_11
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0692A").s().p("AhxAeQBnhqA4AEQAyAEASBYQhuA2g5AAQg0AAgIgsg");
	this.shape_7.setTransform(-96.85,-14.3132);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_5
	this.instance_1 = new lib.bluecapLegs();
	this.instance_1.setTransform(-2.35,46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_6
	this.instance_2 = new lib.bluecapTorso();
	this.instance_2.setTransform(-61.45,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_8
	this.instance_3 = new lib.bluecapArm();
	this.instance_3.setTransform(-45.05,-55.65,1,1,-18.7391,0,0,-28.6,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapguyopenbag, new cjs.Rectangle(-108.3,-115.7,196.39999999999998,229.4), null);


(lib.bluecapguyhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecaphead();
	this.instance.setTransform(-57.4,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_3
	this.instance_1 = new lib.bluecaplefthandhotdog();
	this.instance_1.setTransform(-86.55,-38.9,1,1,5.1924,0,0,-86.5,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-0.8367,x:-86.65},72).to({rotation:5.1924,x:-86.55},75).wait(3));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B58B").s().p("AiPEWIhFiLQgJgSACgVQADgUANgQID6k9QAqgmA0AEQA6AEARBCQAKAmgLAgQgKAggaAPIjzCkIgBAnIgkBiIACAvQABALgHAKIgGAKQgGAKgLAAQgMgBgDgKg");
	this.shape.setTransform(-7.8004,-1.7148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

	// Layer_5
	this.instance_2 = new lib.bluecapLegs();
	this.instance_2.setTransform(-2.35,46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// Layer_6
	this.instance_3 = new lib.bluecapTorso();
	this.instance_3.setTransform(-61.45,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// Layer_8
	this.instance_4 = new lib.bluecapArm();
	this.instance_4.setTransform(-16.45,-42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-115.7,205.4,229.4);


(lib.afrodudelefthandhotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudehandfronthotdog();
	this.instance.setTransform(56.7,4.1,1,1,-17.9699,0,0,75.5,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-12.7,rotation:12.0291,x:56.75,y:4.3},62).to({regY:-12.8,rotation:-17.9699,x:56.7,y:4.1},71).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB909A").s().p("AhQDAQgLgsgVgmQg5hmhAApQBQhDCGhYQCLhbByg5IgCEoIkyDVQAFgUgLgrg");
	this.shape.setTransform(79.9,-14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86402D").s().p("Ai/CLQgIgvhEAEQBMhCCQhdQBVg6C8h2IAqD/ImdDfQgng2gHgug");
	this.shape_1.setTransform(76.675,-13.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(134));

	// Layer_12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95727C").s().p("AhHhSQBQgrAjAkQAoApgRCTQgNAIgNAAQhBAAgvi9g");
	this.shape_2.setTransform(65.6909,1.1626);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-90.2,211.1,149.7);


(lib.afrodudehotdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.afrodudehead();
	this.instance.setTransform(52.25,-82.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_4
	this.instance_1 = new lib.afrodudeLeftleg();
	this.instance_1.setTransform(30.1,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer_5
	this.instance_2 = new lib.afrodudeTorso();
	this.instance_2.setTransform(78.3,-8.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Layer_2
	this.instance_3 = new lib.afrodudelefthandhotdog();
	this.instance_3.setTransform(40.85,-50.55,1,1,5.9909,0,0,103.6,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:103.5,regY:-27.7,rotation:0.7178,x:40.8,y:-50.65},33).to({regY:-27.6,rotation:-0.7195,x:40.75,y:-50.55},9).to({regX:103.6,rotation:5.9909,x:40.85},47).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("ADHGPQghgwgjgEIgcgCQgSgBgOgHIgQglIkvoGQhAhTgYgWQgYgXAYgYQAWgVAwgKQAygLApAKQAwALAPAiIBDCUICMFcIABgBIAyB0IBCACQATABAQAHQARAIALAMIBDBPQAaAfhFAKQgaAEgWAAQggAAgUgJg");
	this.shape.setTransform(131.3851,24.5124);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Layer_8
	this.instance_4 = new lib.afrodudeRightleg();
	this.instance_4.setTransform(-3.15,42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.7,-125.8,340,244.1);


(lib.bluecapguy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecaphead();
	this.instance.setTransform(-57.4,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_3
	this.instance_1 = new lib.bluecaplefthand();
	this.instance_1.setTransform(-86.55,-38.9,1,1,5.1924,0,0,-86.5,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-0.8367,x:-86.65},72).to({rotation:5.1924,x:-86.55},75).wait(3));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B58B").s().p("AiPEWIhFiLQgJgSACgVQADgUANgQID6k9QAqgmA0AEQA6AEARBCQAKAmgLAgQgKAggaAPIjzCkIgBAnIgkBiIACAvQABALgHAKIgGAKQgGAKgLAAQgMgBgDgKg");
	this.shape.setTransform(-7.8004,-1.7148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

	// Layer_5
	this.instance_2 = new lib.bluecapLegs();
	this.instance_2.setTransform(-2.35,46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// Layer_6
	this.instance_3 = new lib.bluecapTorso();
	this.instance_3.setTransform(-61.45,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// Layer_8
	this.instance_4 = new lib.bluecapArm();
	this.instance_4.setTransform(-16.45,-42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-115.7,205.4,229.4);


(lib.afrodudelefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudehandfront();
	this.instance.setTransform(56.7,4.1,1,1,-17.9699,0,0,75.5,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-12.7,rotation:12.0291,x:56.75,y:4.3},62).to({regY:-12.8,rotation:-17.9699,x:56.7,y:4.1},71).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB909A").s().p("AhQDAQgLgsgVgmQg5hmhAApQBQhDCGhYQCLhbByg5IgCEoIkyDVQAFgUgLgrg");
	this.shape.setTransform(79.9,-14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86402D").s().p("Ai/CLQgIgvhEAEQBMhCCQhdQBVg6C8h2IAqD/ImdDfQgng2gHgug");
	this.shape_1.setTransform(76.675,-13.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(134));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95727C").s().p("AhHhSQBQgrAjAkQAoApgRCTQgNAIgNAAQhBAAgvi9g");
	this.shape_2.setTransform(65.6909,1.1626);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-90.2,211.1,149.7);


(lib.afrodude = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.afrodudehead();
	this.instance.setTransform(52.25,-82.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_4
	this.instance_1 = new lib.afrodudeLeftleg();
	this.instance_1.setTransform(30.1,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer_5
	this.instance_2 = new lib.afrodudeTorso();
	this.instance_2.setTransform(78.3,-8.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Layer_2
	this.instance_3 = new lib.afrodudelefthand();
	this.instance_3.setTransform(40.85,-50.55,1,1,5.9909,0,0,103.6,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:103.5,regY:-27.7,rotation:0.7178,x:40.8,y:-50.65},33).to({regY:-27.6,rotation:-0.7195,x:40.75,y:-50.55},9).to({regX:103.6,rotation:5.9909,x:40.85},47).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("ADHGPQghgwgjgEIgcgCQgSgBgOgHIgQglIkvoGQhAhTgYgWQgYgXAYgYQAWgVAwgKQAygLApAKQAwALAPAiIBDCUICMFcIABgBIAyB0IBCACQATABAQAHQARAIALAMIBDBPQAaAfhFAKQgaAEgWAAQggAAgUgJg");
	this.shape.setTransform(131.3851,24.5124);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Layer_8
	this.instance_4 = new lib.afrodudeRightleg();
	this.instance_4.setTransform(-3.15,42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.7,-125.8,340,244.1);


(lib.guitarguyupperbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guitarguyrighthand
	this.instance = new lib.guitarguyrighthand();
	this.instance.setTransform(29,44.95,1,1,-11.4922,0,0,-14.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5063},58).to({rotation:-11.4922},61).wait(1));

	// guitarguylefthand
	this.instance_1 = new lib.guitarguylefthand();
	this.instance_1.setTransform(-91.2,20.05,1,1,-17.4642,0,0,-28.1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},14).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},15).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},15).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},15).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},14).to({regY:-9.3,rotation:-14.2307,y:20.2},13).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},2).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},15).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},16).wait(1));

	// Layer_10
	this.instance_2 = new lib.guitar();
	this.instance_2.setTransform(7.75,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Layer_4
	this.instance_3 = new lib.guitarguyHood();
	this.instance_3.setTransform(-45.8,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_6
	this.instance_4 = new lib.guitarguyhead();
	this.instance_4.setTransform(-18.6,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_7
	this.instance_5 = new lib.guitarguyTorso();
	this.instance_5.setTransform(-29.9,16.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-83.4,200.39999999999998,163.2);


(lib.guitarguy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.guitarguyupperbody();
	this.instance.setTransform(-15.95,46.95,1,1,-3.4379,0,0,-16,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5287,x:-16.05,y:47},58).to({rotation:-3.4379,x:-15.95,y:46.95},61).wait(1));

	// Layer_12
	this.instance_1 = new lib.guitarguyLegs();
	this.instance_1.setTransform(-1.35,67.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-101.8,208.1,200.5);


(lib.pauseScreenCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgryAgOQiPAAhlhpQhlhqAAiVMAAAg1LQAAiVBlhpQBkhqCQAAMBXmAAAQCOAABmBqQBkBpAACVMAAAA1LQAACVhkBqQhmBpiOAAg");
	mask.setTransform(-2,-13.675);

	// Layer_1
	this.pauseBTN = new lib.pauseBTN();
	this.pauseBTN.name = "pauseBTN";
	this.pauseBTN.setTransform(-1.8,-67.15);

	this.text = new cjs.Text("...מחכים שתחזרו אלינו", "normal 700 38px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 416;
	this.text.parent = this;
	this.text.setTransform(-1.8,-164.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pauseBG();
	this.instance.setTransform(-19.75,4.5,0.4801,0.4801,0,0,0,884,542.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25224C","#383E87"],[0,1],-314.5,0,314.6,0).s().p("EgrwAgTQiPAAhlijQhlijAAjoMAAAgvKQAAjmBlikQBlijCPAAMBXhAAAQCPAABlCjQBlCkAADmMAAAAvKQAADohlCjQhlCjiPAAg");
	this.shape.setTransform(-1.775,-14.325);

	var maskedShapeInstanceList = [this.pauseBTN,this.text,this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text},{t:this.pauseBTN}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreenCard, new cjs.Rectangle(-316.8,-219.8,629.6,412.3), null);


(lib.pauseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pauseScreenCard
	this.pauseScreenCard = new lib.pauseScreenCard();
	this.pauseScreenCard.name = "pauseScreenCard";
	this.pauseScreenCard.setTransform(1072.65,642.9,1,1,0,0,0,424.3,260.4);

	this.timeline.addTween(cjs.Tween.get(this.pauseScreenCard).wait(1));

	// Layer_4
	this.instance = new lib.gameChoiceWindowBG();
	this.instance.setTransform(961.3,368.3,1.4211,1.9379,0,0,0,525.2,106.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25224C","#383E87"],[0,1],-314.7,72.4,314.8,72.4).s().p("EgryAgOQiPAAhlhpQhlhqAAiVMAAAg1LQAAiVBlhpQBkhqCQAAMBXmAAAQCOAABmBqQBkBpAACVMAAAA1LQAACVhkBqQhmBpiOAAg");
	this.shape.setTransform(648.15,371.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(37,35,79,0.749)").s().p("EhlRA51MAAAhzpMDKjAAAMAAABzpg");
	this.shape_1.setTransform(648.175,370.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreen, new cjs.Rectangle(0,0,1296.4,740.2), null);


(lib.startanimationfrontscenebagopen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guyfromback
	this.instance = new lib.guyfrombackhotdog();
	this.instance.setTransform(1251.3,562.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.instance_1 = new lib.bonfireMC();
	this.instance_1.setTransform(1150.45,480.15,0.4561,0.4561,0,0,0,400.2,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// guitarguy
	this.instance_2 = new lib.guitarguy();
	this.instance_2.setTransform(863.8,548.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pinkgirl
	this.instance_3 = new lib.pinkGirl();
	this.instance_3.setTransform(894.05,489.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// purplegirl
	this.instance_4 = new lib.purpleGirl();
	this.instance_4.setTransform(1464.45,493.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bluecapguy
	this.instance_5 = new lib.bluecapguyopenbagopen();
	this.instance_5.setTransform(997.45,480.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// afrodude
	this.instance_6 = new lib.afrodudehotdog();
	this.instance_6.setTransform(1342.85,479.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// logs
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],147.9,33.2,-122.8,-33.8).s().p("ADuEkQ2gjvi3gZQjFgUhhhhQhUhVAShwQARhrBhg/QBphECNAeQDOAyH3BIQD4AkLcBhQKBBUEqAuQFbA1CfApIgVgBQhiAAhFBMQhFBNAABsQAABsBFBNQA5A/BNALQlDgZxui7g");
	this.shape.setTransform(1386.5616,558.3427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332666").s().p("EBDqAEHQhNgMg5g/QhFhNAAhsQAAhrBFhNQBFhNBiAAIAUABQBVAIA9BEQBFBNAABrQAABshFBNQhFBNhhAAIghgCgEhGwAC2QhFhNAAhrQAAhtBFhMQA+hFBVgHIAUgBQBhAABFBNQBFBMAABtQAABrhFBNQg5A/hMALIghACQhiAAhFhMg");
	this.shape_1.setTransform(1123.125,582.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],-198.1,0.2,190.4,0.2).s().p("A60HBQBFhMAAhtQAAhshFhNQhFhMhiAAIgTAAQCngoGBg6QFKgyLMheQMthrESgnQIohODNgyQCOgeBpBEQBhA+AQBsQASBwhUBVQhgBijGATQiRAU5hEHQz/DNlNAaQBNgLA5g/g");
	this.shape_2.setTransform(875.2759,555.7903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground_shadows
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Egw1AHvQmZgflAhMQo3iIiKiCQg2gzASgtQAQglA+gdQBEgfFXgLQETgJKDAAQAuAAAvACQh2haAAg1QAAh0FwhSQFwhSIJAAQIKAAFwBSQFxBSAAB0QAAAzhWAYQgkAKi+AdQi5AbiEAnQjEA6ihBmQhkA/h3AgQBDAgA3AhQCEBOAAAqQAAAojZAjQjcAklEALQhuADhsAAQj7AAj3gSgEAlyADMQg+gKg0gKQhWALhwAAQluAAkcg9QkUg8AAhJQAAgiBLgqQBKgqCBgkQEphVFhAAQFAAAFaB6QD6gSEqAAQIRAAF3A6QF2A6ABBRQgBBTl2A6Ql3A6oRAAQoRAAl3g6g");
	this.shape_3.setTransform(1123.85,592.149);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// right_tent
	this.instance_7 = new lib.yellowtent();
	this.instance_7.setTransform(1663.1,460.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// left_tent
	this.instance_8 = new lib.redtent();
	this.instance_8.setTransform(570.85,474.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ground
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#28316E","#1D1938"],[0,1],-1445.3,-103.6,1445.2,-103.6).s().p("EgH0Al/QtHgcjPksQjPksm1G6QkUoKkHC/QkHC/i9g/Qi9hAjXhaQi0hNi7BZQi6BaoWDmQoVDn3CkMUgXCgELgj1AByUgj1ABygJqgOaQprublAjQQkBimCnkQQBnimFVkcQCliKAtgrQBZhUAAgnQAAh7KOh7QHPhXPYhzQUTiYCigWQKjhdAbhHQAdhNgIhbQgPhigEgqQgGhIAfgqQAng2BygmQCfg0C4AhQBoATDxBVQDxBVCbAcQD2AtD6gkQEsgrFGAFQDZAEKLAeQBAACLvAtQJjAlCHgHQDFgLDYgZQB+gODsgeQG4g2F5AAQFDAADbALQFoATEXA0QDMAnEEgdQCdgREtg/QEmg9CFgOQDfgWCXAwQEDBSJ9A6QFQAfHCAcQIWArCUAZQBKAMAUANQARAKgNAQQgVAVgKAOQgSAXAIAYQAXBDDzBZQCzBCJ3A4QHWAqQ/BBQbfBpGUAaQWJBcS6BnUA1VAEjAOhAEwQGOCChMCBQhEBym5BsQr3C6tLDMQtKDMLvKEQLwKF4eCcQ4eCc5EiYUgZEgCXgxUAFQUgtcAE3gOsAAAQhQAAhCgDg");
	this.shape_4.setTransform(1445.2705,692.8607);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startanimationfrontscenebagopen, new cjs.Rectangle(0,304.2,2890.5,632.0999999999999), null);


(lib.startanimationfrontscenebag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guyfromback
	this.instance = new lib.guyfrombackhotdog();
	this.instance.setTransform(1251.3,562.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.instance_1 = new lib.bonfireMC();
	this.instance_1.setTransform(1150.45,480.15,0.4561,0.4561,0,0,0,400.2,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// guitarguy
	this.instance_2 = new lib.guitarguy();
	this.instance_2.setTransform(863.8,548.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pinkgirl
	this.instance_3 = new lib.pinkGirl();
	this.instance_3.setTransform(894.05,489.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// purplegirl
	this.instance_4 = new lib.purpleGirl();
	this.instance_4.setTransform(1464.45,493.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bluecapguy
	this.instance_5 = new lib.bluecapguyopenbag();
	this.instance_5.setTransform(997.45,480.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// afrodude
	this.instance_6 = new lib.afrodudehotdog();
	this.instance_6.setTransform(1342.85,479.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// logs
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],147.9,33.2,-122.8,-33.8).s().p("ADuEkQ2gjvi3gZQjFgUhhhhQhUhVAShwQARhrBhg/QBphECNAeQDOAyH3BIQD4AkLcBhQKBBUEqAuQFbA1CfApIgVgBQhiAAhFBMQhFBNAABsQAABsBFBNQA5A/BNALQlDgZxui7g");
	this.shape.setTransform(1386.5616,558.3427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332666").s().p("EBDqAEHQhNgMg5g/QhFhNAAhsQAAhrBFhNQBFhNBiAAIAUABQBVAIA9BEQBFBNAABrQAABshFBNQhFBNhhAAIghgCgEhGwAC2QhFhNAAhrQAAhtBFhMQA+hFBVgHIAUgBQBhAABFBNQBFBMAABtQAABrhFBNQg5A/hMALIghACQhiAAhFhMg");
	this.shape_1.setTransform(1123.125,582.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],-198.1,0.2,190.4,0.2).s().p("A60HBQBFhMAAhtQAAhshFhNQhFhMhiAAIgTAAQCngoGBg6QFKgyLMheQMthrESgnQIohODNgyQCOgeBpBEQBhA+AQBsQASBwhUBVQhgBijGATQiRAU5hEHQz/DNlNAaQBNgLA5g/g");
	this.shape_2.setTransform(875.2759,555.7903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground_shadows
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Egw1AHvQmZgflAhMQo3iIiKiCQg2gzASgtQAQglA+gdQBEgfFXgLQETgJKDAAQAuAAAvACQh2haAAg1QAAh0FwhSQFwhSIJAAQIKAAFwBSQFxBSAAB0QAAAzhWAYQgkAKi+AdQi5AbiEAnQjEA6ihBmQhkA/h3AgQBDAgA3AhQCEBOAAAqQAAAojZAjQjcAklEALQhuADhsAAQj7AAj3gSgEAlyADMQg+gKg0gKQhWALhwAAQluAAkcg9QkUg8AAhJQAAgiBLgqQBKgqCBgkQEphVFhAAQFAAAFaB6QD6gSEqAAQIRAAF3A6QF2A6ABBRQgBBTl2A6Ql3A6oRAAQoRAAl3g6g");
	this.shape_3.setTransform(1123.85,592.149);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// right_tent
	this.instance_7 = new lib.yellowtent();
	this.instance_7.setTransform(1663.1,460.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// left_tent
	this.instance_8 = new lib.redtent();
	this.instance_8.setTransform(570.85,474.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ground
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#28316E","#1D1938"],[0,1],-1445.3,-103.6,1445.2,-103.6).s().p("EgH0Al/QtHgcjPksQjPksm1G6QkUoKkHC/QkHC/i9g/Qi9hAjXhaQi0hNi7BZQi6BaoWDmQoVDn3CkMUgXCgELgj1AByUgj1ABygJqgOaQprublAjQQkBimCnkQQBnimFVkcQCliKAtgrQBZhUAAgnQAAh7KOh7QHPhXPYhzQUTiYCigWQKjhdAbhHQAdhNgIhbQgPhigEgqQgGhIAfgqQAng2BygmQCfg0C4AhQBoATDxBVQDxBVCbAcQD2AtD6gkQEsgrFGAFQDZAEKLAeQBAACLvAtQJjAlCHgHQDFgLDYgZQB+gODsgeQG4g2F5AAQFDAADbALQFoATEXA0QDMAnEEgdQCdgREtg/QEmg9CFgOQDfgWCXAwQEDBSJ9A6QFQAfHCAcQIWArCUAZQBKAMAUANQARAKgNAQQgVAVgKAOQgSAXAIAYQAXBDDzBZQCzBCJ3A4QHWAqQ/BBQbfBpGUAaQWJBcS6BnUA1VAEjAOhAEwQGOCChMCBQhEBym5BsQr3C6tLDMQtKDMLvKEQLwKF4eCcQ4eCc5EiYUgZEgCXgxUAFQUgtcAE3gOsAAAQhQAAhCgDg");
	this.shape_4.setTransform(1445.2705,692.8607);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startanimationfrontscenebag, new cjs.Rectangle(0,304.2,2890.5,632.0999999999999), null);


(lib.startanimationfrontscene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guyfromback
	this.instance = new lib.guyfrombackhotdog();
	this.instance.setTransform(1251.3,562.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.instance_1 = new lib.bonfireMC();
	this.instance_1.setTransform(1150.45,480.15,0.4561,0.4561,0,0,0,400.2,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// guitarguy
	this.instance_2 = new lib.guitarguy();
	this.instance_2.setTransform(863.8,548.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pinkgirl
	this.instance_3 = new lib.pinkGirl();
	this.instance_3.setTransform(894.05,489.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// purplegirl
	this.instance_4 = new lib.purpleGirl();
	this.instance_4.setTransform(1464.45,493.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bluecapguy
	this.instance_5 = new lib.bluecapguyhotdog();
	this.instance_5.setTransform(997.45,480.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// afrodude
	this.instance_6 = new lib.afrodudehotdog();
	this.instance_6.setTransform(1342.85,479.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// logs
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],147.9,33.2,-122.8,-33.8).s().p("ADuEkQ2gjvi3gZQjFgUhhhhQhUhVAShwQARhrBhg/QBphECNAeQDOAyH3BIQD4AkLcBhQKBBUEqAuQFbA1CfApIgVgBQhiAAhFBMQhFBNAABsQAABsBFBNQA5A/BNALQlDgZxui7g");
	this.shape.setTransform(1386.5616,558.3427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332666").s().p("EBDqAEHQhNgMg5g/QhFhNAAhsQAAhrBFhNQBFhNBiAAIAUABQBVAIA9BEQBFBNAABrQAABshFBNQhFBNhhAAIghgCgEhGwAC2QhFhNAAhrQAAhtBFhMQA+hFBVgHIAUgBQBhAABFBNQBFBMAABtQAABrhFBNQg5A/hMALIghACQhiAAhFhMg");
	this.shape_1.setTransform(1123.125,582.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],-198.1,0.2,190.4,0.2).s().p("A60HBQBFhMAAhtQAAhshFhNQhFhMhiAAIgTAAQCngoGBg6QFKgyLMheQMthrESgnQIohODNgyQCOgeBpBEQBhA+AQBsQASBwhUBVQhgBijGATQiRAU5hEHQz/DNlNAaQBNgLA5g/g");
	this.shape_2.setTransform(875.2759,555.7903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground_shadows
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Egw1AHvQmZgflAhMQo3iIiKiCQg2gzASgtQAQglA+gdQBEgfFXgLQETgJKDAAQAuAAAvACQh2haAAg1QAAh0FwhSQFwhSIJAAQIKAAFwBSQFxBSAAB0QAAAzhWAYQgkAKi+AdQi5AbiEAnQjEA6ihBmQhkA/h3AgQBDAgA3AhQCEBOAAAqQAAAojZAjQjcAklEALQhuADhsAAQj7AAj3gSgEAlyADMQg+gKg0gKQhWALhwAAQluAAkcg9QkUg8AAhJQAAgiBLgqQBKgqCBgkQEphVFhAAQFAAAFaB6QD6gSEqAAQIRAAF3A6QF2A6ABBRQgBBTl2A6Ql3A6oRAAQoRAAl3g6g");
	this.shape_3.setTransform(1123.85,592.149);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// right_tent
	this.instance_7 = new lib.yellowtent();
	this.instance_7.setTransform(1663.1,460.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// left_tent
	this.instance_8 = new lib.redtent();
	this.instance_8.setTransform(570.85,474.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ground
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#28316E","#1D1938"],[0,1],-1445.3,-103.6,1445.2,-103.6).s().p("EgH0Al/QtHgcjPksQjPksm1G6QkUoKkHC/QkHC/i9g/Qi9hAjXhaQi0hNi7BZQi6BaoWDmQoVDn3CkMUgXCgELgj1AByUgj1ABygJqgOaQprublAjQQkBimCnkQQBnimFVkcQCliKAtgrQBZhUAAgnQAAh7KOh7QHPhXPYhzQUTiYCigWQKjhdAbhHQAdhNgIhbQgPhigEgqQgGhIAfgqQAng2BygmQCfg0C4AhQBoATDxBVQDxBVCbAcQD2AtD6gkQEsgrFGAFQDZAEKLAeQBAACLvAtQJjAlCHgHQDFgLDYgZQB+gODsgeQG4g2F5AAQFDAADbALQFoATEXA0QDMAnEEgdQCdgREtg/QEmg9CFgOQDfgWCXAwQEDBSJ9A6QFQAfHCAcQIWArCUAZQBKAMAUANQARAKgNAQQgVAVgKAOQgSAXAIAYQAXBDDzBZQCzBCJ3A4QHWAqQ/BBQbfBpGUAaQWJBcS6BnUA1VAEjAOhAEwQGOCChMCBQhEBym5BsQr3C6tLDMQtKDMLvKEQLwKF4eCcQ4eCc5EiYUgZEgCXgxUAFQUgtcAE3gOsAAAQhQAAhCgDg");
	this.shape_4.setTransform(1445.2705,692.8607);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startanimationfrontscene, new cjs.Rectangle(0,304.2,2890.5,632.0999999999999), null);


(lib.endanimationfrontscene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guyfromback
	this.instance = new lib.guyfromback();
	this.instance.setTransform(1251.3,562.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.instance_1 = new lib.bonfireMCani();
	this.instance_1.setTransform(1150.45,480.15,0.4561,0.4561,0,0,0,400.2,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// guitarguy
	this.instance_2 = new lib.guitarguy();
	this.instance_2.setTransform(863.8,548.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pinkgirl
	this.instance_3 = new lib.pinkGirl();
	this.instance_3.setTransform(894.05,489.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// purplegirl
	this.instance_4 = new lib.purpleGirl();
	this.instance_4.setTransform(1464.45,493.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bluecapguy
	this.instance_5 = new lib.bluecapguy();
	this.instance_5.setTransform(997.45,480.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// afrodude
	this.instance_6 = new lib.afrodude();
	this.instance_6.setTransform(1342.85,479.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// logs
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],147.9,33.2,-122.8,-33.8).s().p("ADuEkQ2gjvi3gZQjFgUhhhhQhUhVAShwQARhrBhg/QBphECNAeQDOAyH3BIQD4AkLcBhQKBBUEqAuQFbA1CfApIgVgBQhiAAhFBMQhFBNAABsQAABsBFBNQA5A/BNALQlDgZxui7g");
	this.shape.setTransform(1386.5616,558.3427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332666").s().p("EBDqAEHQhNgMg5g/QhFhNAAhsQAAhrBFhNQBFhNBiAAIAUABQBVAIA9BEQBFBNAABrQAABshFBNQhFBNhhAAIghgCgEhGwAC2QhFhNAAhrQAAhtBFhMQA+hFBVgHIAUgBQBhAABFBNQBFBMAABtQAABrhFBNQg5A/hMALIghACQhiAAhFhMg");
	this.shape_1.setTransform(1123.125,582.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CB7F3C","#C47642","#AF5956","#A24762","#9D4166","#332666"],[0,0.051,0.247,0.412,0.537,1],-198.1,0.2,190.4,0.2).s().p("A60HBQBFhMAAhtQAAhshFhNQhFhMhiAAIgTAAQCngoGBg6QFKgyLMheQMthrESgnQIohODNgyQCOgeBpBEQBhA+AQBsQASBwhUBVQhgBijGATQiRAU5hEHQz/DNlNAaQBNgLA5g/g");
	this.shape_2.setTransform(875.2759,555.7903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground_shadows
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Egw1AHvQmZgflAhMQo3iIiKiCQg2gzASgtQAQglA+gdQBEgfFXgLQETgJKDAAQAuAAAvACQh2haAAg1QAAh0FwhSQFwhSIJAAQIKAAFwBSQFxBSAAB0QAAAzhWAYQgkAKi+AdQi5AbiEAnQjEA6ihBmQhkA/h3AgQBDAgA3AhQCEBOAAAqQAAAojZAjQjcAklEALQhuADhsAAQj7AAj3gSgEAlyADMQg+gKg0gKQhWALhwAAQluAAkcg9QkUg8AAhJQAAgiBLgqQBKgqCBgkQEphVFhAAQFAAAFaB6QD6gSEqAAQIRAAF3A6QF2A6ABBRQgBBTl2A6Ql3A6oRAAQoRAAl3g6g");
	this.shape_3.setTransform(1123.85,592.149);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// right_tent
	this.instance_7 = new lib.yellowtent();
	this.instance_7.setTransform(1663.1,460.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// left_tent
	this.instance_8 = new lib.redtent();
	this.instance_8.setTransform(570.85,474.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ground
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#28316E","#1D1938"],[0,1],-1445.3,0,1445.2,0).s().p("EjLBAVyQvXg7lAjQQkBinCnkQQBnimFVkcQCliKAtgrQBZhTAAgnQAAh7KOh7QHPhXPYhzQUTiYCigWQKjhdAbhHQAdhNgIhbQgPhigEgqQgGhIAfgqQAng2BygmQCfg0C4AhQBoATDxBVQDxBVCbAcQD2AtD6gkQEsgrFGAFQDZAEKLAeQBAACLvAtQJjAlCHgHQDFgLDYgZQB+gODsgeQG4g2F5AAQFDAADbALQFoATEXA0QDMAnEEgdQCdgREtg/QEmg9CFgOQDfgWCXAwQEDBSJ9A6QFQAfHCAcQIWArCUAZQBKAMAUANQARAKgNAQQgVAVgKAOQgSAXAIAYQAXBDDzBZQCzBCJ3A4QHWAqQ/BBQbfBpGUAaQWJBcS6BnUA1VAEiAOhAEwQGOCChMCBQhEBym5BsQr3C74LB5Qp5AyovAVQomAUkLgPQj+gO3WgcQ5lgd6QgRUhJagAugI+ABiQleA8k6AAQjrAAkiglQlAgviogTQkhggkFAIQh7AEizgIImDgXQp7glrEAAQjhAAzTAsMgoKABeUgwZABxgLKAAAQh3AAg1gEg");
	this.shape_4.setTransform(1445.2705,589.2552);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endanimationfrontscene, new cjs.Rectangle(0,304.2,2890.5,424.8), null);


(lib.startAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_479 = function() {
		this.dispatchEvent("startAnimationDone");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// Layer_6
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(-1396.3,-424.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(480));

	// Layer_2
	this.gameInstruction = new cjs.Text("!עזרו לנו לתפוס ולמיין אותם בעזרת השיפודים", "normal 400 18px 'Assistant'", "#342666");
	this.gameInstruction.name = "gameInstruction";
	this.gameInstruction.textAlign = "center";
	this.gameInstruction.lineHeight = 30;
	this.gameInstruction.lineWidth = 412;
	this.gameInstruction.parent = this;
	this.gameInstruction.setTransform(4,-0.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameInstruction);
	}

	this.gameName = new cjs.Text("!אוי לא, כל המרשמלו התפזר", "normal 700 28px 'Assistant'", "#342666");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 44;
	this.gameName.lineWidth = 410;
	this.gameName.parent = this;
	this.gameName.setTransform(4,-32.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameName);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#DED6EB","#E2DAED","#AC93C5","#FFFFFF","#F9F7FB","#E8E2F0","#CDBEDD","#BCA9D2"],[0,0.22,0.459,0.812,0.839,0.898,0.969,1],-306.7,0,306.8,0).ss(6.6).p("EgmJgJRMBMTAAAQD1AACuCuQCuCuAAD1QAAD2iuCtQiuCvj1AAMhMTAAAQj1AAiuivQiuitAAj2QAAj1CuiuQCuiuD1AAg");
	this.shape.setTransform(4,-5.5435,0.7718,0.7364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgmJAJSQj1gBiuitQiuiuAAj2QAAj1CuiuQCuiuD1AAMBMTAAAQD1AACuCuQCuCuAAD1QAAD2iuCuQiuCtj1ABg");
	this.shape_1.setTransform(4,-5.5435,0.7718,0.7364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.gameName},{t:this.gameInstruction}]},317).wait(163));

	// front_scene
	this.instance_1 = new lib.startanimationfrontscene();
	this.instance_1.setTransform(-42.5,537.5,0.8423,0.8423,0,0,0,1445.1,394.3);

	this.instance_2 = new lib.startanimationfrontscenebag();
	this.instance_2.setTransform(991.05,-111.4,2.0688,2.0688,0,0,0,1445.2,394.2);

	this.instance_3 = new lib.startanimationfrontscenebagopen();
	this.instance_3.setTransform(991.05,-111.4,2.0688,2.0688,0,0,0,1445.2,394.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.marshFlyWide();
	this.instance_4.setTransform(-97.75,541.7,4.6671,4.6671,14.9999,0,0,-24,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},88).to({state:[{t:this.instance_2}]},83).to({state:[{t:this.instance_3}]},42).to({state:[{t:this.instance_3}]},103).to({state:[{t:this.instance_4}]},1).wait(163));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1445.2,regY:394.4,scaleX:1,scaleY:1,x:324.15,y:11.95},88,cjs.Ease.quadOut).to({_off:true},83).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({regY:394.4,x:984.8,y:55.25},103,cjs.Ease.quadIn).to({_off:true},1).wait(163));

	// bg
	this.instance_5 = new lib.gameBG();
	this.instance_5.setTransform(-9.8,135.7,1.8022,1.7445,0,0,0,693.5,382.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:2.1398,scaleY:2.0712,x:362.85,y:-465.2},88,cjs.Ease.quadOut).wait(83).to({scaleX:4.4267,scaleY:4.2849,x:1071.15,y:-1098.05},0).wait(42).to({x:1064.9,y:-931.8},103,cjs.Ease.quadIn).wait(1).to({regY:378.9,scaleX:1.3231,scaleY:1.3231,x:0,y:-127.95},0).to({y:88.25},162).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2004.9,-2738.3,54363.1,19100.8);


(lib.endAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_119 = function() {
		this.dispatchEvent("endAnimationDone");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_6
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(-1396.3,-424.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer_5
	this.fireonyou = new lib.fireonyoutext();
	this.fireonyou.name = "fireonyou";
	this.fireonyou.setTransform(-19.4,-101.7,1,1,0,0,0,372.1,86.2);

	this.timeline.addTween(cjs.Tween.get(this.fireonyou).wait(120));

	// Layer_2
	this.instance_1 = new lib.endanimationfrontscene();
	this.instance_1.setTransform(288,84.25,1,1,0,0,0,1445.2,394.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Layer_4
	this.instance_2 = new lib.gameBG();
	this.instance_2.setTransform(326.7,-392.9,2.1398,2.0712,0,0,0,693.5,382.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1446.8,-1185.7,26564.7,9152.6);


// stage content:
(lib.marshmellowmed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		var stageW = 1280;
		var stageH = 720;
		
		//משתנים של מסכים
		var gameChoiceScreen; //מסך בחירת המשחק
		var animationScene; //מסך האנימציות
		var gameBG; //הרקע למשחק עצמו
		var endScreen; //מסך הסיום והמשוב
		
		//מבנה המשחק
		var gameArray = [
			[null],
			[],
			[]
		]; //מערך תוכן המשחק
		var gameArrayBackUp = [
			[],
			[],
			[]
		]; //מערך תוכן המשחק
		var categoryCountArray = [0]; //מערך ספירת כמה תשובות שייכות לכל קטגוריה - כמספר הקטגוריות
		var categoryCountArrayWin = [0]; //מערך ספירת כמה תשובות הצליח הלומד בכל קטגוריה - כמספר הקטגוריות
		var answersCountArray = [0]; //מערך כמה ניסיונות היו עד שהלומד הצליח את השאלה - כמספר השאלות
		var currentQ; //מספר השאלה הנוכחית שטעונה
		var questionNum; //המספר המקורי של השאלה במערך ההתחלתי
		var rightAnswersCount; //מספר התשובות הנכונות הכללי
		var gameChoice = 0; //בחירת המשחק - 0 חלל או 1 חיות
		var progressBar; //מד ההתקדמות
		var singleMarshBar; //מרשמלו בודד במד ההתקדמות
		
		//תנועת מרשמלו
		var marshInterval; //אינטרוול התנועה של המרשמלו מצד לצד
		var moveTo = ""; //כיוון התנועה של המרשמלו
		var currentSpeed = 1; //מקדם מהירות התנועה של המרשמלו
		
		//תנועת שיפוד
		var spike; //אינסטנס של שיפוד
		var spikeInterval; //אינטרוול התנועה של השיפוד למעלה
		var currentSpike; //מספר הקטגוריה שהשיפוד שייך אליה - הסמור ששלח אותו
		
		//נתונים למסך הסיום
		var timeInterval; //טיימר שסופר את זמן המשחק - מוסתר מהלומד עד המשוב בסוף
		var timeVar; //המשתנה שסופר את זמן המשחק
		var score; //משתנה הציון
		var errorCount; //ספירת השגיאות
		
		//סאונדים
		var fireSound; //קולות מדורה
		var guitarStart; //מוזיקת אנימציית פתיחה
		var guitarSound; //נעימת גיטרה אקוסטית
		var shootSound; //סאונד יריית שיפוד
		var hitSound; //פגיעה
		var winSound; //סאונד משוב להצלחה
		var goodBurnSound; //שריפה טובה
		var loseSound; //סאונד משוב לאי הצלחה
		var badBurnSound; //שריפה רעה
		var finalSound; //סאונד להגעה אל אנימציית הסיום
		
		init_Sound(); //הפעלה של כל הסאונדים
		startHere(); //התנעת המשחק
		
		function init_Sound() //הגדרת הסאונדים של המשחק
		{
			createjs.Sound.registerSound("sounds/shootSound.mp3", "shoot");
			createjs.Sound.registerSound("sounds/fireSound.mp3", "fire");
			createjs.Sound.registerSound("sounds/guitarSound.mp3", "guitar");
			createjs.Sound.registerSound("sounds/loseSound.mp3", "lose");
			createjs.Sound.registerSound("sounds/winSound.mp3", "win");
			createjs.Sound.registerSound("sounds/finalSound.mp3", "final");
			createjs.Sound.registerSound("sounds/guitarStartSound.mp3", "guitarStart");
			createjs.Sound.registerSound("sounds/badBurnSound.mp3", "badBurn");
			createjs.Sound.registerSound("sounds/goodBurnSound.mp3", "goodBurn");
			createjs.Sound.registerSound("sounds/hitSound.mp3", "hit");
		}
		
		function startHere() //התנעת המשחק וחלון בחירת המשחק
		{
			state = "gameChoice";
			stage.removeAllChildren(); //הסרת כל מה שיש על הבמה
		
			//הוספת מסך בחירת המשחק לבמה
			gameChoiceScreen = new lib.gameChoiceScreen();
			gameChoiceScreen.x = 0;
			gameChoiceScreen.y = 0;
			gameChoiceScreen.name = "gameChoiceScreen";
			stage.addChild(gameChoiceScreen);
			gameChoiceScreen.responseText.text = "";
			//מאזין לשינוי ערכים בקומבו
			$("#dom_overlay_container").on("keyup", "#EnterTxt", gameChoiceByCombo);
		}
		
		function gameChoiceByCombo(evt) //בעת שינוי ערך בקומבו
		{
			gameChoiceScreen.responseText.text = "";
			gameChoice = evt.currentTarget.value; //שמירת הערך שנבחר בקומבו
		
			if (gameChoice == "") //אם לא נבחר שום ערך של משחק
			{
				//ניטרול כפתור בחירה
				gameChoiceScreen.startGameBTN.cursor = "auto";
				gameChoiceScreen.startGameBTN.gotoAndStop(0);
				gameChoiceScreen.startGameBTN.removeEventListener("click", getJson);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה והפנייה לפונקציית תחילת המשחק
				gameChoiceScreen.startGameBTN.cursor = "pointer";
				gameChoiceScreen.startGameBTN.gotoAndStop(1);
				gameChoiceScreen.startGameBTN.addEventListener("click", getJson);
			}
		}
		
		
		var myJson;
		//הנתיב המוביל לפרויקט המחולל שלכם לשיטה השולפת משחק לפי קוד
		//var url = "https://localhost:5001/api/Games/toPlay/";
		var url = "api/Games/toPlay/";
		
		//פונקציה א-סינכרונית לשליפת המידע מבסיס הנתונים דרך קריאת רשת
		async function getJson() {
		
			//fetch = שיטה הקיימת בג'אווה סקריפט המאפשר לבצע קריאות רשת ולקרוא את התשובות החוזרות מהן
			//משתנה המכיל את כל תשובת הרשת שחוזרת מהקריאה לנתיב שהוגדר
			var response = await fetch(url + gameChoice);
			//אם הקריאה הסתיימה והחזירה משחק תקין
			if (response.ok) {
				//חילוץ המידע של המשחק מקריאת הרשת בפורמט של ג'ייסון
				myJson = await response.json();
				//console.log(myJson);
				insertJasonToArray();
				loadStartAnimation();
		
				//המירו את הג'ייסון למערך שמתאים למשחק שלכם והפעילו את המשחק
			}
		
			//אם הקריאה הסתיימה בתשובה שאינה תקינה (כלומר שגיאה)
			else {
				//חילוץ תוכן התשובה עצמה שחזרה מהקריאה = התוכן שכתבנו בתוך הסוגריים במחולל
				var error = await response.text();
		
				if (error == "game not published") {
					gameChoiceScreen.responseText.text = "משחק קיים אך לא פורסם";
					//console.log("משחק קיים אך לא פורסם");
				} else if (error == "no such game") {
					//console.log("המשחק שחיפשת אינו קיים");
					gameChoiceScreen.responseText.text = "המשחק שחיפשת אינו קיים";
				} else {
					//console.log("אירעה תקלת שרת, נסו שוב");
					gameChoiceScreen.responseText.text = "אירעה תקלת שרת, נסו שוב";
				}
			}
		}
		
		function insertJasonToArray() {
		
		
		
			//myJson = event.target.getResult('JSON');
			gameArray[[0]] = myJson.gameName; //כותרת המשחק
			gameArrayBackUp[[0]] = myJson.gameName; //כותרת המשחק
			var countIteamId = 0;
			//שמות הקטגוריות
			for (var i = 0; i < myJson.gameCategories.length; i++) {
				gameArray[1][i] = myJson.gameCategories[i].categoryName;
				gameArrayBackUp[1][i] = myJson.gameCategories[i].categoryName;
		
				for (var j = 0; j < myJson.gameCategories[i].categoryItems.length; j++) {
					gameArray[2][countIteamId] = [];
					gameArray[2][countIteamId][0] = myJson.gameCategories[i].categoryItems[j].itemContent; //שם התמונה
					gameArray[2][countIteamId][1] = i; // מספר קטגוריה
					gameArray[2][countIteamId][2] = countIteamId; //מספר האובייקט
					gameArray[2][countIteamId][3] = myJson.gameCategories[i].categoryItems[j].isPicture; //האם תמונה 
		
		
					gameArrayBackUp[2][countIteamId] = [];
					gameArrayBackUp[2][countIteamId][0] = myJson.gameCategories[i].categoryItems[j].itemContent; //שם התמונה
					gameArrayBackUp[2][countIteamId][1] = i; // מספר קטגוריה
					gameArrayBackUp[2][countIteamId][2] = countIteamId; //מספר האובייקט
					gameArrayBackUp[2][countIteamId][3] = myJson.gameCategories[i].categoryItems[j].isPicture; //האם תמונה 
		
					countIteamId++;
				}
			}
			//console.log(gameArrayBackUp);
		}
		
		function loadStartAnimation() //טעינת אנימציית הפתיחה של המשחק
		{
			state = "startAnimationScene";
			stage.removeAllChildren(); //ניקוי הבמה
		
			//הוספת מסך האנימציה לבמה
			animationScene = new lib.startAnimation();
			animationScene.x = stageW / 2;
			animationScene.y = stageH / 2;
			animationScene.name = "gameChoiceScreen";
			stage.addChild(animationScene);
			animationScene.addEventListener("startAnimationDone", loadNewGame);
		
			fireSound = createjs.Sound.play("fire");
			guitarStartSound = createjs.Sound.play("guitarStart");
			createMuteBTN();
		
			//הוספת כפתור הדילוג על האנימציה
			var BTNskip = new lib.BTNbg();
			BTNskip.x = stageW - 110;
			BTNskip.y = 40;
			BTNskip.name = "BTNskip";
			stage.addChild(BTNskip);
			var skip = new lib.skip();
			skip.x = BTNskip.x;
			skip.y = BTNskip.y + 5;
			skip.name = "skip";
			stage.addChild(skip);
			BTNskip.addEventListener("click", loadNewGame);
			BTNskip.addEventListener("mouseover", hoverOnBTNIn);
			BTNskip.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function loadNewGame() //טעינת משחק חדש
		{
			state = "game";
		
			fireSound = createjs.Sound.stop("fire"); //עצירת סאונד של אנימציית הפתיחה
			guitarStartSound = createjs.Sound.stop("guitarStart");
			var props = new createjs.PlayPropsConfig().set({
				loop: -1,
				volume: 0.5
			}) //הגדרת לופ
			guitarSound = createjs.Sound.play("guitar", props); //הפעלת מוזיקת הרקע של המשחק
		
			stage.removeAllChildren(); //ניקוי הבמה
		
			//הטענת הרקע של המשחק
			gameBG = new lib.gameBG();
			gameBG.x = -42.05;
			gameBG.y = -24;
			gameBG.name = "gameBG";
			stage.addChild(gameBG);
		
			timeInterval = setInterval(timerOn, 1000);
		
			//הפעלת כל הפונקציות של עליית המשחק
			loadGameArrays(); //הטענת מערכי המשחק בתוכן
			makeMarshBar(); //יצירת מד ההתקדמות
			makeSmores(); //יצירת הסמורס של הקטגוריות
			loadGameTitle(); //הטענת כותרת המשחק
			loadButtons(); //יצירת כפתורי השליטה בפינה
			newMarsh(); //יצירת מרשמלו שאלה חדש
		}
		
		function timerOn() //פונקציית אינטרוול לספירת הטיימר - סופרת כל שנייה
		{
			timeVar++;
		}
		
		function loadGameArrays() //יצירת מערכי המשחק והטענתם בתוכן
		{
			if (gameArray[0][0] != null) {
				for (n = 0; n < gameArrayBackUp[2].length; n++) {
					gameArray[2][n] = [];
					gameArray[2][n][0] = gameArrayBackUp[2][n][0];
					gameArray[2][n][1] = gameArrayBackUp[2][n][1];
					gameArray[2][n][2] = gameArrayBackUp[2][n][2];
					gameArray[2][n][3] = gameArrayBackUp[2][n][3];
				}
			}
		
			//איפוס המשתנים של נתוני המשחק
			rightAnswersCount = 0; //כמה תשובות נכונות סהכ
			errorCount = 0; //כמה טעויות סהכ
			score = 0; //ציון
			timeVar = 0; //זמן מצטבר
		
			//יצירת מערך ספירת הניסיונות של המשחק - תוכן ריק
			answersCountArray = [0]; //איפוס המערך
			for (var i = 1; i <= gameArray[2].length - 1; i++) //לולאה שרצה כמספר השאלות הכולל של המשחק
			{
				answersCountArray[answersCountArray.length] = 0; //ישמור בהמשך כמה ניסיונות סהכ עד שהצליח
			}
		
			//יצירת מערכי נתוני הקטגוריות של המשחק - תוכן ריק
			categoryCountArray = [0]; //איפוס המערך
			categoryCountArrayWin = [0]; //איפוס המערך
			for (var i = 1; i <= gameArray[1].length - 1; i++) //לולאה שרצה כמספר הקטגוריות של המשחק
			{
				categoryCountArray[categoryCountArray.length] = 0; //ישמור בהמשך כמה תשובות שייכות לכל קטגוריה
				categoryCountArrayWin[categoryCountArrayWin.length] = 0; //ישמור בהמשך כמה תשובות נכונות נענו לכל קטגוריה עד כה
			}
		
			//הטענת תוכן במערך של כמה תשובות שייכות לכל קטגוריה
			for (var i = 0; i <= gameArray[2].length - 1; i++) //לולאה שרצה כמספר השאלות הכולל
			{
				for (var n = 0; n <= gameArray[1].length - 1; n++) // לולאה שרצה כמספר הקטגוריות
				{
					if (gameArray[2][i][1] == n) //האם הקטגוריה שמשויכת לשאלה הנוכחית היא הקטגוריה הנוכחית
					{
						categoryCountArray[n] += 1; //כמה תשובות שייכות לכל קטגוריה - מילוי
					}
				}
			}
			//console.log(gameArray);
		}
		
		
		function makeMarshBar() //הוספת בר ההתקדמות
		{
			//הוספת הרקע והשיפוד הריק לבמה
			progressBar = new lib.progressBar();
			progressBar.x = stageW - 40;
			progressBar.y = stageH / 2;
			stage.addChild(progressBar);
		
			//הוספת המרשמלואים על המד	
			for (var i = 0; i <= gameArray[2].length - 1; i++) {
		
				singleMarshBar = new lib.singleMarshForBar();
				singleMarshBar.x = 0;
				singleMarshBar.y = -singleMarshBar.nominalBounds.height / 2 - ((progressBar.progressBarSpike.nominalBounds.height - singleMarshBar.nominalBounds.height) / (gameArray[2].length) * i);
				singleMarshBar.name = "singleMarshBar" + (i + 1);
				progressBar.progressBarSpike.addChild(singleMarshBar);
				singleMarshBar.alpha = 0.2;
				if (i % 2 == 0) //צביעה של כל מרשמלו זוגי בצבע ורוד
				{
					singleMarshBar.SingleMarshBarColor.shape.graphics._fill.style = "rgb(250,215,216)";
				}
			}
		}
		
		function makeSmores() //יצירת הקטגוריות על המסך בתור סמורס - בשימוש גם ביצירת משחק חדש וגם בטעינת המשוב המסכם
		{
			//לולאה ליצירת כל הקטגוריות
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				//הוספת כל אינסטנס של קטגוריה לבמה
				var smore = new lib.smoreWithSkew();
				smore.catagoryText.text = gameArray[1][i];
				smore.name = "smore" + i;
				stage.addChild(smore);
		
				var totalWidth; //לצורך חישוב הריווח האוטומטי
				var mcNum = gameArray[1].length; //לצורך חישוב הריווח האוטומטי
		
				//קטע לבדיקה האם מדובר בטעינת משחק חדש או בטעינת מסך המשוב המסכם
		
				if (state == "game") //מקרה של טעינת משחק חדש
				{
					smore.addEventListener("click", clickOnSmore);
					smore.addEventListener("mouseover", shade);
					smore.addEventListener("mouseout", Outshade);
					smore.cursor = "pointer";
					totalWidth = progressBar.x - progressBar.nominalBounds.width / 2;
				} else //מקרה של טעינת משוב מסכם - אין צורך באינטראקציות אז הליסנרים מכובים
				{
					smore.removeEventListener("click", clickOnSmore);
					smore.removeEventListener("mouseover", shade);
					smore.removeEventListener("mouseout", Outshade);
					smore.cursor = "auto";
					totalWidth = stageW;
				}
				smore.x = (totalWidth / mcNum * i) + totalWidth / (mcNum * 2);
				smore.y = stageH;
			}
		}
		
		function loadGameTitle() //הוספת שם המשחק וההנחיות
		{
			var gameTitle = new lib.titleBG();
			gameTitle.x = stageW / 2;
			gameTitle.y = 15;
			stage.addChild(gameTitle);
			gameTitle.gameName.text = gameArray[0];
		}
		
		function loadButtons() //הוספת כפתורי השליטה
		{
			createPauseBTN();
			createMuteBTN();
			createSpeedBTN();
		}
		
		function createMuteBTN() //כפתור ההשתקה
		{
			var BTNmute = new lib.BTNbg();
			BTNmute.x = stageW - 40;
			BTNmute.y = 40;
			BTNmute.name = "BTNmute";
			stage.addChild(BTNmute);
			var mute = new lib.mute();
			mute.x = BTNmute.x;
			mute.y = BTNmute.y;
			mute.name = "mute";
			stage.addChild(mute);
		
			if (createjs.Sound.muted == true) {
				mute.gotoAndStop(2);
			}
		
			BTNmute.addEventListener("click", muteGame);
			BTNmute.addEventListener("mouseover", hoverOnBTNIn);
			BTNmute.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function createPauseBTN() //כפתור ההשהייה
		{
			var BTNpause = new lib.BTNbg();
			BTNpause.x = stageW - 110;
			BTNpause.y = 40;
			BTNpause.name = "BTNpause";
			stage.addChild(BTNpause);
			var pause = new lib.pause();
			pause.x = BTNpause.x;
			pause.y = BTNpause.y;
			pause.name = "pause";
			stage.addChild(pause);
			BTNpause.addEventListener("click", pauseGame);
			BTNpause.addEventListener("mouseover", hoverOnBTNIn);
			BTNpause.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function createSpeedBTN() //כפתור המהירות
		{
			var BTNspeed = new lib.BTNbg();
			BTNspeed.x = stageW - 180;
			BTNspeed.y = 40;
			BTNspeed.name = "BTNspeed";
			stage.addChild(BTNspeed);
			var speed = new lib.speed();
			speed.x = BTNspeed.x;
			speed.y = BTNspeed.y + 5;
			speed.name = "speed";
			stage.addChild(speed);
		
			if (currentSpeed == 1) {
				speed.gotoAndStop(0);
			} else if (currentSpeed == 0.5) {
				speed.gotoAndStop(2);
			} else if (currentSpeed == 2) {
				speed.gotoAndStop(6);
			} else if (currentSpeed == 1.5) {
				speed.gotoAndStop(4);
			}
		
			BTNspeed.addEventListener("click", changeGameSpeed);
			BTNspeed.addEventListener("mouseover", hoverOnBTNIn);
			BTNspeed.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function pauseGame() //השהיית משחק
		{
			guitarSound = createjs.Sound.stop("guitar"); //עצירת המוזיקה
		
			//עצירת האינטרוולים והסרת מרשמלו השאלה הנוכחית
			clearInterval(timeInterval);
			clearInterval(marshInterval);
			stage.removeChild(stage.getChildByName("marsh"));
		
			//ביטול כל הליסנרים	
			stage.getChildByName("BTNspeed").removeEventListener("click", changeGameSpeed);
			stage.getChildByName("BTNspeed").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNspeed").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNspeed").cursor = "auto";
			stage.getChildByName("BTNpause").removeEventListener("click", pauseGame);
			stage.getChildByName("BTNpause").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNpause").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNpause").cursor = "auto";
			stage.getChildByName("BTNmute").removeEventListener("click", muteGame);
			stage.getChildByName("BTNmute").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNmute").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNmute").cursor = "auto";
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				stage.getChildByName("smore" + i).removeEventListener("click", clickOnSmore);
				stage.getChildByName("smore" + i).removeEventListener("mouseover", shade);
				stage.getChildByName("smore" + i).removeEventListener("mouseout", Outshade);
				stage.getChildByName("smore" + i).cursor = "auto";
			}
			stage.getChildByName("BTNpause").gotoAndStop(0);
			stage.getChildByName("pause").gotoAndStop(2);
		
			//הצגת מסך ההשהייה
			var pauseScreen = new lib.pauseScreen();
			pauseScreen.x = 0;
			pauseScreen.y = 0;
			pauseScreen.name = "pauseScreen";
			stage.addChild(pauseScreen);
			pauseScreen.pauseScreenCard.pauseBTN.visible = false;
		
			//הפעלת כפתור ההפעלה מחדש
			var BTNresume = new lib.BTNbg();
			BTNresume.x = pauseScreen.pauseScreenCard.pauseBTN.x;
			BTNresume.y = pauseScreen.pauseScreenCard.pauseBTN.y;
			BTNresume.name = "BTNresume";
			pauseScreen.pauseScreenCard.addChild(BTNresume);
			var resume = new lib.pause();
			resume.x = BTNresume.x;
			resume.y = BTNresume.y;
			resume.name = "resume";
			pauseScreen.pauseScreenCard.addChild(resume);
			resume.gotoAndStop(2);
			BTNresume.addEventListener("click", resumeGame);
			BTNresume.addEventListener("mouseover", hoverOnBTNIn);
			BTNresume.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function resumeGame() //הפעלת המשחק מחדש
		{
			var props = new createjs.PlayPropsConfig().set({
				loop: -1,
				volume: 0.5
			}) //הגדרת לופ	
			guitarSound = createjs.Sound.play("guitar", props); //הפעלת המוזיקה מחדש
		
			//הסרת מסך ההשהייה
			stage.removeChild(stage.getChildByName("pauseScreen"));
			stage.removeChild(stage.getChildByName("BTNresume"));
			stage.removeChild(stage.getChildByName("resume"));
		
			timeInterval = setInterval(timerOn, 1000); //הפעלה מחדש של הטיימר
			newMarsh(); //טעינת שאלה חדשה
		
			//הפעלת הליסנרים מחדש
			stage.getChildByName("BTNspeed").addEventListener("click", changeGameSpeed);
			stage.getChildByName("BTNspeed").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNspeed").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNspeed").cursor = "pointer";
			stage.getChildByName("BTNpause").addEventListener("click", pauseGame);
			stage.getChildByName("BTNpause").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNpause").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNpause").cursor = "pointer";
			stage.getChildByName("BTNmute").addEventListener("click", muteGame);
			stage.getChildByName("BTNmute").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNmute").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNmute").cursor = "pointer";
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				stage.getChildByName("smore" + i).addEventListener("click", clickOnSmore);
				stage.getChildByName("smore" + i).addEventListener("mouseover", shade);
				stage.getChildByName("smore" + i).addEventListener("mouseout", Outshade);
				stage.getChildByName("smore" + i).cursor = "pointer";
			}
			stage.getChildByName("pause").gotoAndStop(0);
		}
		
		function muteGame(evt) //השתקת המשחק
		{
			if (evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame == 1) {
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(3);
				createjs.Sound.muted = true;
			} else {
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(1);
				createjs.Sound.muted = false;
			}
		}
		
		function changeGameSpeed() //שינוי מהירות המשחק
		{
			if (currentSpeed == 1) {
				currentSpeed = 0.5;
				stage.getChildByName("speed").gotoAndStop(3);
			} else if (currentSpeed == 0.5) {
				currentSpeed = 2;
				stage.getChildByName("speed").gotoAndStop(7);
			} else if (currentSpeed == 2) {
				currentSpeed = 1.5;
				stage.getChildByName("speed").gotoAndStop(5);
			} else if (currentSpeed == 1.5) {
				currentSpeed = 1;
				stage.getChildByName("speed").gotoAndStop(1);
			}
		}
		
		function newMarsh() //טעינת שאלה לבמה
		{
			if (gameArray[2].length > 0) //בדיקה האם נותרו עוד שאלות במאגר
			{
				//יצירת מרשמלו ריק חדש
				var marsh = new lib.marshQ();
				marsh.x = 650;
				marsh.y = 200;
				marsh.name = "marsh";
				stage.addChild(marsh);
				marsh.addEventListener("mouseover", hoverOnMarshIn);
				marsh.addEventListener("mouseout", hoverOnMarshOut);
		
				//הגרלת שאלה
				rndQ = pickRandom(0, gameArray[2].length);
				currentQ = rndQ; //מספר השאלה שתעלה מתוך מה שנשאר
				questionNum = gameArray[2][currentQ][2]; //מספר השאלה האובייקטיבי במאגר המקורי
		
				//טעינת תוכן השאלה שהוגרלה על גבי המרשמלו
				var qContent;
		
				//אם תמונה
				//console.log(gameArray[2][currentQ][3])
				//console.log(gameArray[2][currentQ][0])
				if (gameArray[2][currentQ][3] == true) {
							//console.log("image")
					img = new Image();
					//console.log(gameArray[2][currentQ][0]);
					img.src = gameArray[2][currentQ][0];
					//img.src = "https://localhost:5001/"+gameArray[2][currentQ][0];
		
					qContent = new createjs.Bitmap(img).set({});
		
					img.onload = function () {
						// gets called when the img is loaded
		
		
		
						//הקטנה דינמית של התמונה
						if (qContent.getBounds().width > qContent.getBounds().height) //רוחב התמונה גדול יותר מאורך התמונה
						{
							var picWidth = 100 / qContent.getBounds().width;
							qContent.scaleX = picWidth;
							qContent.scaleY = picWidth;
							qContent.x = qContent.getBounds().width * picWidth / -2;
							qContent.y = qContent.getBounds().height * picWidth / -2;
						} else {
							var picHeight = 100 / qContent.getBounds().height;
							qContent.scaleX = picHeight;
							qContent.scaleY = picHeight;
							qContent.x = qContent.getBounds().width * picHeight / -2;
							qContent.y = qContent.getBounds().height * picHeight / -2;
						}
					};
		
					qContent.name = "g0_q" + questionNum;
					marsh.addChild(qContent);
				} else {
					//טיפול בטקסט
					var qTextContent;
					qTextContent = new lib.textCon100();
					//console.log(gameArray[2][currentQ][0].length)
					if (gameArray[2][currentQ][0].length > 70) {
						qTextContent.text_box.font = "45px Assistant";
					} else if (gameArray[2][currentQ][0].length > 60) {
						qTextContent.text_box.font = "60px Assistant";
					} else if (gameArray[2][currentQ][0].length > 50) {
						qTextContent.text_box.font = "75px Assistant";
					} else if (gameArray[2][currentQ][0].length > 40) {
						qTextContent.text_box.font = "80px Assistant";
					} else if (gameArray[2][currentQ][0].length > 30) {
						qTextContent.text_box.font = "95px Assistant";
					} else if (gameArray[2][currentQ][0].length > 20) {
						qTextContent.text_box.font = "100px Assistant";
					} else if (gameArray[2][currentQ][0].length > 10) {
						qTextContent.text_box.font = "120px Assistant";
					} else if (gameArray[2][currentQ][0].length > 5) {
						qTextContent.text_box.font = "140px Assistant";
					} else {
						qTextContent.text_box.font = "160px Assistant";
					}
		
		
					qTextContent.text_box.text = gameArray[2][currentQ][0];
					var picHeight = 0.2;
					qTextContent.scaleX = picHeight;
					qTextContent.scaleY = picHeight;
		
					var theight = qTextContent.text_box.getMeasuredHeight();
					//משתנה לבדיקת הגובה בפועל של הטקסט בתיבה
					qTextContent.text_box.y = qTextContent.y - theight / 2;
					//קביעת גובה תיבת הטקסט לפי מרכז המוביקליפ
		
		
					qTextContent.name = "g0_q" + questionNum;
					marsh.addChild(qTextContent);
					//טיפול בטקסט
				}
		
		
		
		
		
		
				//הפעלת תנועת המרשמלו
				marshInterval = setInterval(movingMarsh, 0.5);
				moveTo = "right";
				movingMarsh();
		
			} else //אם נגמרו השאלות במאגר
			{
				finishGame();
			}
		}
		
		function movingMarsh() //פונקציית אינטרוול תנועת המרשמלו
		{
			if (moveTo == "right") {
				if (stage.getChildByName("marsh").x < stageW - 150) {
					stage.getChildByName("marsh").x += 1.8 * currentSpeed;
				} else {
					moveTo = "left";
				}
			} else {
				if (stage.getChildByName("marsh").x > 100) {
					stage.getChildByName("marsh").x -= 1.8 * currentSpeed;
				} else {
					moveTo = "right";
				}
			}
		}
		
		function hoverOnMarshIn() //מעבר עכבר על מרשמלו השאלה כדי לעצור ולהגדיל אותו
		{
			stage.getChildByName("marsh").scaleX = 2;
			stage.getChildByName("marsh").scaleY = 2;
			clearInterval(marshInterval);
		}
		
		function hoverOnMarshOut() //מעבר עכבר החוצה ממרשמלו השאלה
		{
			stage.getChildByName("marsh").scaleX = 1;
			stage.getChildByName("marsh").scaleY = 1;
			marshInterval = setInterval(movingMarsh, 1);
		}
		
		function shade(evt) //מעבר עכבר על הסמורס - הדגשה שלו
		{
			evt.currentTarget.shadow = new createjs.Shadow("rgba(236,174,166,1)", 0, 0, 15);
			evt.currentTarget.skewForSmore.scaleY = 0.9;
		}
		function Outshade(evt) //מעבר עכבר החוצה מהסמורס
		{
			evt.currentTarget.shadow = null;
			evt.currentTarget.skewForSmore.scaleY = 1;
		}
		
		function clickOnSmore(evt) //מה קורה כשלוחצים על סמורס של קטגוריה
		{
			//במקרה שיש שיפוד שכבר בתהליך ירייה - לבטל אותו
			if (spikeInterval != null) {
				clearInterval(spikeInterval);
				stage.removeChild(stage.getChildByName("spike" + currentSpike));
			}
		
			currentSpike = evt.currentTarget.name.charAt(5); //כדי שהשיפוד ידע מאיזו תשובה הוא הגיע
		
			//יצירת שיפוד חדש לירייה
			spike = new lib.skewForSmore();
			stage.removeChild(spike);
			spike.x = evt.currentTarget.x;
			spike.y = stageH - (evt.currentTarget.nominalBounds.height) + spike.nominalBounds.height / 2;
			spike.name = "spike" + currentSpike;
			spike.alpha = 1;
			spike.visible = true;
			stage.addChildAt(spike, 1);
		
			shootSound = createjs.Sound.play("shoot"); //סאונד של יריית שיפוד
		
			spikeInterval = setInterval(spikeShoot, 0.1); //הפעלת תנועת השיפוד שנורה
		}
		
		function spikeShoot() //אינטרוול של יריית שיפוד
		{
			//אם השיפוד עדיין על הבמה - להזיז אותו
			if (stage.getChildByName("spike" + currentSpike).y > -70) {
				stage.getChildByName("spike" + currentSpike).y -= 5;
			} else //אם השיפוד יצא מהבמה - להסיר אותו ולבטל את האינטרוול
			{
				clearInterval(spikeInterval);
				stage.removeChild(stage.getChildByName("spike" + currentSpike));
			}
		
			//בדיקת פגיעה
			if (intersect(stage.getChildByName("marsh"), stage.getChildByName("spike" + currentSpike))) {
				//פגיעה
				marshHit();
			}
			//אם אין פגיעה, לא קורה כלום
		}
		
		//בדיקה האם אובייקטים נגעו זה בזה - מחזירה נכון רק אם כן
		function intersect(obj1, obj2) {
			if (obj1 != null && obj2 != null) {
				var obj1W = obj1.nominalBounds;
				var obj2W = obj2.nominalBounds;
		
				if (obj1.x + ((obj1W.width - 10) / 2) <= obj2.x - (obj2W.width / 2)) {
					return false;
				} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
					return false;
				} else if (obj1.x - ((obj1W.width - 10) / 2) > obj2.x + (obj2W.width / 2)) {
					return false;
				} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
					return false;
				} else if (obj2.y > 310) {
					return false;
				} else if (obj2.y < 100) {
					return false;
				} else {
					return true;
				}
			}
		}
		
		function marshHit() //פגיעה של שיפוד במרשמלו
		{
			hitSound = createjs.Sound.play("hit");
		
			//הסרת השיפוד והאינטרוול שלו
			stage.removeChild(stage.getChildByName("spike" + currentSpike));
			clearInterval(spikeInterval);
		
			//בדיקה האם תשובה נכונה
			if (gameArray[2][currentQ][1] == currentSpike) //אם כן
			{
				winMarsh();
			} else //אם לא
			{
				errorCount++; //נספרת טעות
				loseMarsh();
			}
		}
		
		function winMarsh() //שיוך נכון של מרשמלו לקטגוריה
		{
			winSound = createjs.Sound.play("win"); //סאונד של הצלחה
			goodBurnSound = createjs.Sound.play("goodBurn");
		
			//הוספת אנימציית הצלחה לבמה
			Winmarsh = new lib.winMarsh();
			Winmarsh.x = stage.getChildByName("marsh").x;
			Winmarsh.y = stage.getChildByName("marsh").y;
			Winmarsh.name = "Winmarsh";
			stage.addChild(Winmarsh);
			Winmarsh.addEventListener("marshAnimationDone", afterWin);
		
			//הסרת המרשמלו מהבמה
			stage.removeChild(stage.getChildByName("marsh"));
			clearInterval(marshInterval);
		}
		
		function afterWin() //בסיום האנימציה של המשוב להצלחה
		{
			//ספירת הניסיון והתשובה הנכונה
			answersCountArray[questionNum]++; //ספירת הניסיון
			rightAnswersCount += 1; //הוספה למספר התשובות הנכונות הכולל
			progressBar.progressBarSpike.getChildByName("singleMarshBar" + rightAnswersCount).alpha = 1; //סימון במד ההתקדמות
		
			//הוספה למספר התשובות הנכונות עבור השיפוד של הקטגוריה
			categoryCountArrayWin[currentSpike]++;
			var rightMarsh = new lib.singleMarshForSmore();
			rightMarsh.name = "rightMarsh" + currentSpike + "_" + categoryCountArrayWin[currentSpike];
			if (categoryCountArrayWin[currentSpike] % 2 == 0) {
				rightMarsh.gotoAndStop(1);
			}
			var maxMarsh = 0;
			for (var i = 0; i <= categoryCountArray.length - 1; i++) {
				if (categoryCountArray[i] >= maxMarsh) {
					maxMarsh = categoryCountArray[i];
				}
			}
			if (maxMarsh >= 3) {
				rightMarsh.scaleY = (110 / maxMarsh) / rightMarsh.nominalBounds.height;
			}
			stage.getChildByName("smore" + currentSpike).skewForSmore.addChildAt(rightMarsh, 1);
			var totalHeight = rightMarsh.parent.nominalBounds.height - 20;
			var i = (categoryCountArrayWin[currentSpike] - 1);
			rightMarsh.y = -(totalHeight / maxMarsh * i) + (totalHeight / (maxMarsh * 2)) + totalHeight / 2 - 20;
		
			//הסרת השאלה מהמאגר
			gameArray[2].splice(currentQ, 1); 
		
			newMarsh();
		}
		
		function loseMarsh() //שיוך לא נכון של מרשמלו לקטגוריה
		{
			loseSound = createjs.Sound.play("lose"); //סאונד של אי הצלחה
			badBurnSound = createjs.Sound.play("badBurn");
		
			//הוספת אנימציית אי הצלחה לבמה
			Losemarsh = new lib.loserMarsh();
			Losemarsh.x = stage.getChildByName("marsh").x;
			Losemarsh.y = stage.getChildByName("marsh").y;
			Losemarsh.name = "Losemarsh";
			stage.addChild(Losemarsh);
			Losemarsh.addEventListener("marshAnimationDone", newMarsh);
		
			//הסרת המרשמלו מהבמה
			stage.removeChild(stage.getChildByName("marsh"));
			clearInterval(marshInterval);
		
			//ספירת הניסיון
			answersCountArray[questionNum]++;
		}
		
		function finishGame() //סיום משחק והטענת אנימציית הסיום
		{
			state = "endAnimationScene";
		
			//ניקוי הבמה והאינטרוולים
			stage.removeAllChildren();
			clearInterval(timeInterval);
			clearInterval(marshInterval);
			guitarSound = createjs.Sound.stop("guitar"); //עצירת המוזיקה
		
			//הטענת אנימציית הסיום
			animationScene = new lib.endAnimation();
			animationScene.x = stageW / 2;
			animationScene.y = stageH / 2;
			animationScene.name = "endAnimation";
			stage.addChild(animationScene);
			animationScene.addEventListener("endAnimationDone", loadEndScreen);
		
			finalSound = createjs.Sound.play("final"); //סאונד חגיגי להגעה לסיום המשחק
		}
		var countArray;
		var endscreenSpike;
		function loadEndScreen() //טעינת מסך הסיום והתוכן שלו
		{
			state = "endScreen";
			stage.removeChild(animationScene); //הסרת אנימציית הסיום מהבמה
		
			//הטענת מסך הסיום לבמה
			endScreen = new lib.endScreen();
			endScreen.x = stageW / 2;
			endScreen.y = stageH / 2;
			endScreen.name = "endScreen";
			stage.addChild(endScreen);
		
			//הטענת כפתור הבית
			var BTNhome = new lib.BTNbg();
			BTNhome.x = stageW - 180;
			BTNhome.y = 40;
			BTNhome.name = "BTNhome";
			endScreen.homeBTN.visible = false;
			stage.addChild(BTNhome);
			var home = new lib.home();
			home.x = BTNhome.x;
			home.y = BTNhome.y;
			home.name = "home";
			stage.addChild(home);
			BTNhome.addEventListener("click", startHere);
			BTNhome.addEventListener("mouseover", hoverOnBTNIn);
			BTNhome.addEventListener("mouseout", hoverOnBTNOut);
		
			//הטענת כפתור שחק שנית
			var BTNplayagain = new lib.BTNbg();
			BTNplayagain.x = stageW - 110;
			BTNplayagain.y = 40;
			BTNplayagain.name = "BTNplayagain";
			endScreen.playAgainBTN.visible = false;
			stage.addChild(BTNplayagain);
			var playagain = new lib.playagain();
			playagain.x = BTNplayagain.x;
			playagain.y = BTNplayagain.y;
			playagain.name = "playagain";
			stage.addChild(playagain);
			BTNplayagain.addEventListener("click", loadNewGame);
			BTNplayagain.addEventListener("mouseover", hoverOnBTNIn);
			BTNplayagain.addEventListener("mouseout", hoverOnBTNOut);
		
			//הטענת כפתור ההשתקה
			var BTNmute = new lib.BTNbg();
			BTNmute.x = stageW - 40;
			BTNmute.y = 40;
			BTNmute.name = "BTNmute";
			endScreen.muteBTN.visible = false;
			stage.addChild(BTNmute);
			var mute = new lib.mute();
			mute.x = BTNmute.x;
			mute.y = BTNmute.y;
			mute.name = "mute";
			stage.addChild(mute);
			if (createjs.Sound.muted == true) {
				mute.gotoAndStop(2);
			}
			BTNmute.addEventListener("click", muteGame);
			BTNmute.addEventListener("mouseover", hoverOnBTNIn);
			BTNmute.addEventListener("mouseout", hoverOnBTNOut);
		
			//חישוב הציון
			for (var i = 0; i <= answersCountArray.length - 1; i++) {
				score += 100 / (answersCountArray[i] * answersCountArray.length);
			}
		
			//חישוב נתוני המשחק
			var timeMin = Math.floor(timeVar / 60);
			var timeSec = timeVar % 60;
		
			//הצגת נתוני המשחק
			endScreen.yourScore.text = "הציון שלכם: " + Math.round(score);
			if (errorCount == 0) {
				endScreen.errorNum.text = "אתם אלופים! הצלתם את כל המרשמלו";
			} else {
				endScreen.errorNum.text = "מרשמלו ששרפתם (מספר שגיאות): " + errorCount;
			}
		
			endScreen.totalTime.text = "זמן כולל: " + timeMin + " דקות ו-" + timeSec + " שניות";
		
			//איפוס מערכי המשחק לצורך המשוב המסכם
			makeSmores();
			countArray = []; //מערך לשמירת מספר המרשמלואים שעלו עד כה
		
			//טעינת שיפודים כמספר הקטגוריות
			for (var i = 0; i < gameArrayBackUp[1].length; i++) {
				endscreenSpike = new lib.endscreenSpike();
				endscreenSpike.x = stage.getChildByName("smore" + i).x;
				endscreenSpike.y = stageH - 80;
				endscreenSpike.name = "endscreenSpike" + i;
				stage.addChild(endscreenSpike);
		
				countArray[countArray.length] = 0;
			}
			var finish = true;
			//טעינת השאלות והתוכן שלהן פר שיפוד
			for (var n = 0; n < gameArrayBackUp[2].length; n++) {
				if (finish) {
					loadNewImage(n);
				} else {
		
				}
			}
		}
		
		function loadNewImage(n) {
			finish = false;
			var marshFeedback = new lib.singleMarshForEndSmore();
			marshFeedback.name = "marshFeedback" + n;
			stage.getChildByName("endscreenSpike" + gameArrayBackUp[2][n][1]).addChild(marshFeedback);
			marshFeedback.addEventListener("mouseover", hoverEnlargeIn);
			marshFeedback.addEventListener("mouseout", hoverEnlargeOut);
		
			countArray[gameArrayBackUp[2][n][1]] += 1;
		
			marshFeedback.x = 0;
			var totalHeight = endscreenSpike.nominalBounds.height - 50; //לצורך חישוב הריווח האוטומטי
			var mcNum = categoryCountArray[gameArrayBackUp[2][n][1]]; //לצורך חישוב הריווח האוטומטי
			var i = countArray[gameArrayBackUp[2][n][1]]; //לצורך חישוב הריווח האוטומטי
			marshFeedback.y = -(totalHeight / mcNum * i) + totalHeight / (mcNum * 2);
		
		
			if (gameArrayBackUp[2][n][3] == false) {
				var qTextContent;
		
				qTextContent = new lib.textCon100();
				if (gameArrayBackUp[2][n][0].length > 70) {
					qTextContent.text_box.font = "45px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 60) {
					qTextContent.text_box.font = "60px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 50) {
					qTextContent.text_box.font = "75px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 40) {
					qTextContent.text_box.font = "80px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 30) {
					qTextContent.text_box.font = "95px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 20) {
					qTextContent.text_box.font = "100px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 10) {
					qTextContent.text_box.font = "120px Assistant";
				} else if (gameArrayBackUp[2][n][0].length > 5) {
					qTextContent.text_box.font = "140px Assistant";
				} else {
					qTextContent.text_box.font = "160px Assistant";
				}
		
		
				qTextContent.text_box.text = gameArrayBackUp[2][n][0];
				var picHeight = 0.10;
				qTextContent.scaleX = picHeight;
				qTextContent.scaleY = picHeight;
		
				var theight = qTextContent.text_box.getMeasuredHeight();
				//משתנה לבדיקת הגובה בפועל של הטקסט בתיבה
				qTextContent.text_box.y = qTextContent.y - theight / 2;
				//קביעת גובה תיבת הטקסט לפי מרכז המוביקליפ
		
				qTextContent.name = "g0_q" + n;
				marshFeedback.addChild(qTextContent);
			} else {
				img = new Image();
				
					//var onlyName = gameArrayBackUp[2][n][0].substr(14, gameArray[2][currentQ][0].length-1);
					//console.log(gameArrayBackUp[2][n][0]);
					img.src = gameArrayBackUp[2][n][0];		
				//img.src = "https://localhost:5001/"+gameArray[2][currentQ][0];
				var qContentFeedback = new createjs.Bitmap(img).set({});
				qContentFeedback.name = "g0_q" + n;
		
				img.onload = function () {
					//הקטנה דינמית של התמונה
					if (qContentFeedback.getBounds().width > qContentFeedback.getBounds().height) //רוחב התמונה גדול יותר מאורך התמונה
					{
						var picWidth = 60 / qContentFeedback.getBounds().width;
						qContentFeedback.scaleX = picWidth;
						qContentFeedback.scaleY = picWidth;
						qContentFeedback.x = qContentFeedback.getBounds().width * picWidth / -2;
						qContentFeedback.y = qContentFeedback.getBounds().height * picWidth / -2;
					} else {
						var picHeight = 60 / qContentFeedback.getBounds().height;
						qContentFeedback.scaleX = picHeight;
						qContentFeedback.scaleY = picHeight;
						qContentFeedback.x = qContentFeedback.getBounds().width * picHeight / -2;
						qContentFeedback.y = qContentFeedback.getBounds().height * picHeight / -2;
					}
					finish = true;
				}
		
				marshFeedback.addChild(qContentFeedback);
			}
			if (answersCountArray[n] != 1) {
				var redX = new lib.redX();
				marshFeedback.addChild(redX);
				//אם מדובר בטקסט או בתמונה שקופה תשים רקע לבן
				if (gameArrayBackUp[2][n][0].charAt(gameArrayBackUp[2][n][0].length - 2) == "n") {
					marshFeedback.gotoAndStop(2);
				} else {
					marshFeedback.gotoAndStop(3);
				}
			}
		}
		
		
		function hoverEnlargeIn(evt) {
			evt.currentTarget.scaleX = 2;
			evt.currentTarget.scaleY = 2;
		}
		
		function hoverEnlargeOut(evt) {
			evt.currentTarget.scaleX = 1;
			evt.currentTarget.scaleY = 1;
		}
		
		function hoverOnBTNIn(evt) {
			evt.currentTarget.cursor = "pointer";
			if (evt.currentTarget.currentFrame == 0) {
				evt.currentTarget.gotoAndStop(evt.currentTarget.currentFrame + 1);
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame + 1);
			}
		}
		
		function hoverOnBTNOut(evt) {
			evt.currentTarget.cursor = "auto";
			if (evt.currentTarget.currentFrame == 1) {
				evt.currentTarget.gotoAndStop(evt.currentTarget.currentFrame - 1);
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame - 1);
			}
		}
		
		function pickRandom(fromNum, toNum) //פונקציית הגרלת מספר בטווח מסויים
		{
			return Math.floor((Math.random() * ((toNum) - fromNum))) + fromNum;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(65.05,-59.95,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gameBG
	this.gameBGstart = new lib.gameBG();
	this.gameBGstart.name = "gameBGstart";
	this.gameBGstart.setTransform(639.45,358.8,1,1,0,0,0,693.5,382.8);

	this.timeline.addTween(cjs.Tween.get(this.gameBGstart).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(586,288.6,11639.5,4106.299999999999);
// library properties:
lib.properties = {
	id: 'AC8763E7A7E0CE47A2AA18C30876EC0B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_34.png", id:"CachedBmp_34"},
		{src:"images/CachedBmp_33.png", id:"CachedBmp_33"},
		{src:"images/CachedBmp_29.png", id:"CachedBmp_29"},
		{src:"images/marshmellowmed_atlas_1.png", id:"marshmellowmed_atlas_1"},
		{src:"sounds/badBurnSound.mp3", id:"badBurnSound"},
		{src:"sounds/goodBurnSound.mp3", id:"goodBurnSound"},
		{src:"sounds/loseSound.mp3", id:"loseSound"},
		{src:"sounds/finalSound.mp3", id:"finalSound"},
		{src:"sounds/fireSound.mp3", id:"fireSound"},
		{src:"sounds/guitarStartSound.mp3", id:"guitarStartSound"},
		{src:"sounds/hitSound.mp3", id:"hitSound"},
		{src:"sounds/guitarSound.mp3", id:"guitarSound"},
		{src:"sounds/winSound.mp3", id:"winSound"},
		{src:"sounds/shootSound.mp3", id:"shootSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AC8763E7A7E0CE47A2AA18C30876EC0B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;