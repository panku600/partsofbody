(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ui_atlas_P_1", frames: [[0,820,552,530],[0,0,735,818]]},
		{name:"ui_atlas_NP_1", frames: [[0,0,1920,1080]]}
];


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



(lib.bg = function() {
	this.initialize(ss["ui_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["ui_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["ui_atlas_P_1"]);
	this.gotoAndStop(1);
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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFEC00").s().p("AAdFJIgagBIgZABIgZACQgMAAAAgMQAAg1AFhrQAEhsAAg1QAAhTgFiSQh5AIg5AAQgFAAAAgFQAAgIAEgQIAGgZQABgQAGgdQACgGAGAAIAFAAQCmAKA0AAQAvAABrgHQBDgEgGgBQALABACAIQgBgFAAAyIABATIABAUQAAAMgIAAIimgGQgECPAABWQAAA1AEBsQAEBsAAA2QAAAKgOAAIgagCg");
	this.shape.setTransform(910.475,54.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AiiFJQgTgCgKAAIgYABIgZACQgLgBAAgKQAAg0AFhpQAEhoAAg0QAAiTgKioIgBgIQAAgJAUAAIB5gBQBQgDAnAAQBoAAA/AxQBFA4AABkQAABFgTAoQgTAqg2AlQgJAHAAAGQAAAGA4B2QA4B2AAAIQAAADgHABIgbgCIgcgBIgdABIgdACQgLAAgGgMQgPgghGilQgHgSgagDIgrgBQhBAAgMACQgKABAAAXQAAAhAEBBQADBCAAAgQAAAKgKAAIgcgCgAiBjcQgDAZAABuIAABZIAGABIAbACQAtADAzAAQCBAAAAhtQAAhUgxgdQgkgVhdAAQhMAAgBANg");
	this.shape_1.setTransform(859.0494,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEC00").s().p("AETFNIgagBIgbABIgaACQgNAAgVhHQgUhHgVgBQgSgBhJAAIhJAAQhNAAgLABQgRABgTBHQgTBHgKAAIhqAAQgJAAAAgHQAAgEAHgRIByk5QAPgmBKi1QANgeAWg8QAGgSAGAAQAJAAASACQARADAJAAQAHAAASgDQAQgDAIAAQAFAAAHASIBvEaQCNFoAAADQAAAGgLAAIgagCgAhmBGQAAAQAkADIAuAAIAvAAQBDAAAAgTQAAgNgqhrQgphpgQghQhhD2AAAMg");
	this.shape_2.setTransform(797.225,54.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEC00").s().p("AAdFJIgagBIgZABIgZACQgMAAAAgMQAAg1AFhrQAEhsAAg1QAAhTgFiSQh5AIg5AAQgFAAAAgFQAAgIAEgQIAGgZQABgQAGgdQACgGAGAAIAFAAQCmAKA0AAQAvAABrgHQBDgEgGgBQALABACAIQgBgFAAAyIABATIABAUQAAAMgIAAIimgGQgECPAABWQAAA1AEBsQAEBsAAA2QAAAKgOAAIgagCg");
	this.shape_3.setTransform(740.925,54.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEC00").s().p("AieFEQgCgSgGgiIgNgqIgBgIQAAgGAHgBIAjACQAXADAMAAQCQAAAAheQAAgtg6gjIhtg+Qg7gvAAhRQAAhYA5g0QA4gzBYABQAlAAAxAMQA1ANAaAUQADABACAFIgZAvQgFAOgOAbQgDAEgFAAIgtgQQgugRgdAAQhVAAAABMQAAAqA9AgQBkA0ALAIQA8AwAABRQAABphSA9QhLA2hsAAQgzABgDgMg");
	this.shape_4.setTransform(695.4,55.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjmDwQhZhkAAiMQAAiKBahkQBdhpCIAAQCJAABdBpQBaBkAACKQAACLhZBlQhdBoiKAAQiJAAhdhogAiVifQg4BEAABbQAABcA4BEQA8BJBZAAQBaAAA8hJQA5hEAAhcQAAhcg5hEQg8hIhaAAQhZAAg8BJg");
	this.shape_5.setTransform(612.825,54.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdFJIgagBIgZABIgZACQgMAAAAgMQAAg1AFhrQAEhsAAg1QAAhTgFiSQh5AIg5AAQgFAAAAgFQAAgIAEgQIAGgZQABgQAGgdQACgGAGAAIAFAAQCmAKA0AAQAvAABrgHQBDgEgGgBQALABACAIQgBgFAAAyIABATIABAUQAAAMgIAAIimgGQgECPAABWQAAA1AEBsQAEBsAAA2QAAAKgOAAIgagCg");
	this.shape_6.setTransform(553.325,54.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFEC00").s().p("ACKFKQgOAAg5hkQgwhUgQgmIgRgoQgOgYgTgBIgfgBQg8AAAAAPQAAArAEBWQADBWAAAqQAAAQgMAAIgbgCIgbgBIgYABIgaACQgLAAAAgLQAAg0AFhnQAEhnAAg0QAAg1gEhtQgFhtAAg3QAAgKALAAIAaACIAaABIAagBIAZgCQALAAAAAJQAAAngDBRQgCBQAAAoQAAASACAFQAEAIAPAAQBbAAApghQAkgeAhhQIAvh+QADgIALgDQAIgCAqAAQAzAAAAAPQAAAIgVBEQgaBOgoA8QgbApgsApQgLAKAAAIQAAAIAmBLQAhBBAbAoQAdAkA1BLQACAEAAAFQAAAWgNAAg");
	this.shape_7.setTransform(478.375,54.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEC00").s().p("Ai+DwQhPhfAAiQQAAiOBRhhQBVhoCLAAQCOAABOBgQAHAKAAAHQAAAIgYAnQgZAngFAAQgGAAgXgXQgcgcgYgOQgogXgxAAQhcAAgzBGQguBAAABgQAABfAtBBQA0BIBbAAQAuAAArgXQAcgPAdgbQAYgXACAAQADAAAcAlQAdAlAAAEQAAAGgJAKQhcBqiHAAQiLAAhVhng");
	this.shape_8.setTransform(420.275,54.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEC00").s().p("AAZFHIgZgBIgaABIgaACQgLAAAAgLQAAg1AFhsQAEhsAAg1QAAg0gEhoQgFhoAAg0QAAgMAKAAIAbACIAbABIAZgBIAagCQAMAAAAAJQAAA1gEBpQgEBpAAA0QAAA1AFBsQADBsAAA2QAAAKgNAAIgagCg");
	this.shape_9.setTransform(379.225,54.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEC00").s().p("ABeFHQhGgEgiAAIhiABIhiACQgMAAABgMQAAgzADhnQAEhnAAg0QAAg1gFhtQgFhsAAg3QAAgKAMAAIAaABIAaACIAagCIAagBQAMAAAAAJQAAAygFBjQgDBkAAAyIAABKIAABKQgBBoAJAAQCsAABYgJIAVgDQAPgDAHAAQAKAAAAAJQAABCgHAbQgEAOgNAAQgiAAhFgEg");
	this.shape_10.setTransform(345.3,55.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEC00").s().p("Ai+DwQhPhfAAiQQAAiOBRhhQBVhoCLAAQCOAABOBgQAHAKAAAHQAAAIgYAnQgZAngFAAQgGAAgXgXQgcgcgYgOQgogXgxAAQhcAAgzBGQguBAAABgQAABfAtBBQA0BIBbAAQAuAAArgXQAcgPAdgbQAYgXACAAQADAAAcAlQAdAlAAAEQAAAGgJAKQhcBqiHAAQiLAAhVhng");
	this.shape_11.setTransform(291.025,54.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1196.6,109.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhqC2QgjgsAAhNQAAhJAigrQAhgsA5AAQAsAAAeAiIAAigIBVAAIAAG9IhNAAIgDgiQggAogwAAQg4AAgggsgAg5BDQAAAsAQAXQAPAYAcAAQAoAAAPghIAAh8QgPgggnAAQg8AAAABig");
	this.shape.setTransform(560.1,554.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0CgIAAjIQAAgbgMgMQgMgMgbAAQgiAAgSAeIAADdIhTAAIAAk5IBPAAIACAkQAigqA3AAQAyAAAYAdQAZAeAAA6IAADKg");
	this.shape_1.setTransform(527.35,560.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCIQgfgbABgoQAAgyAlgaQAlgbBFAAIAmAAIAAgSQAAgWgLgNQgLgNgXAAQgWAAgMAKQgMALABARIhUAAQAAgbAQgXQASgXAegOQAfgNAlAAQA6AAAjAdQAhAdAAA1IAACHQAAAtANAXIAAAFIhVAAQgGgMgDgQQgeAigvAAQgvAAgegbgAg2A6IgBAEQABAQAKAKQALAKAUAAQARAAAQgIQAPgIAIgOIAAg2IgfAAQg+AAgEAsg");
	this.shape_2.setTransform(494.8,560.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABVDTIAAi1IipAAIAAC1IhXAAIAAmlIBXAAIAACrICpAAIAAirIBXAAIAAGlg");
	this.shape_3.setTransform(457.9,555.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBuIAAipIgtAAIAAg9IAtAAIAAhOIBTAAIAABOIA2AAIAAA9Ig2AAIAACcQAAARAHAIQAHAHASABQAOgBALgCIAABAQgZAIgagBQhXAAgChYg");
	this.shape_4.setTransform(568.475,387.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDCVQgfgPgRgYQgSgZAAgcIBQAAQABAWAPAMQAQAMAZAAQAYAAAMgJQAMgJAAgPQAAgPgPgJQgPgJghgHQhwgXAAhHQAAgqAjgcQAjgcA3AAQA7AAAkAcQAkAcAAAtIhUAAQAAgSgLgLQgMgMgZAAQgUAAgLAJQgMAKAAAPQAAAOANAIQANAJAfAGQAfAGAVAIQBDAYAAA8QAAAqglAbQglAbg6AAQgnAAgegOg");
	this.shape_5.setTransform(543.325,390.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_6.setTransform(512.525,390.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA0DfIAAjHQAAgagMgNQgLgNgbAAQgkAAgRAcIAADfIhUAAIAAm9IBUAAIAACmQAigoAxAAQBmAAACB2IAADJg");
	this.shape_7.setTransform(479.575,384.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah9CjQgvg3AAhgIAAgZQAAg9AWguQAWgvAngYQAogZA0AAQBJAAAtAnQAtAnAGBHIhWAAQgEgpgUgSQgTgSgoAAQgrAAgVAeQgWAfAABCIAAAfQAABFAUAfQAVAfAsAAQAoAAAUgRQAUgTADgmIBWAAQgEBEgtAnQguAnhKAAQhRAAgug2g");
	this.shape_8.setTransform(443.95,385.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqC2QgjgsAAhNQAAhJAigrQAggsA6AAQAsAAAeAiIAAigIBUAAIAAG9IhMAAIgDgiQggAogwAAQg4AAgggsgAg5BDQAAAsAQAXQAPAYAdAAQAnAAAPghIAAh8QgQgggmAAQg8AAAABig");
	this.shape_9.setTransform(555.95,214.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhsCIQgegbgBgoQAAgyAmgaQAkgbBFAAIAnAAIAAgSQAAgWgLgNQgLgNgYAAQgVAAgLAKQgMALgBARIhTAAQAAgbARgXQAQgXAfgOQAfgNAlAAQA6AAAjAdQAhAdABA1IAACHQgBAtAMAXIAAAFIhUAAQgGgMgCgQQgfAigwAAQgtAAgfgbgAg2A6IgBAEQAAAQAMAKQAKAKAUAAQARAAAQgIQAPgIAIgOIAAg2IgfAAQg+AAgEAsg");
	this.shape_10.setTransform(523.9,221.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_11.setTransform(492.225,221.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABVDTIAAi1IipAAIAAC1IhXAAIAAmlIBXAAIAACrICpAAIAAirIBXAAIAAGlg");
	this.shape_12.setTransform(454.9,215.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAyDfIhQh+IgfAeIAABgIhTAAIAAm9IBTAAIAAD2IARgVIBPhdIBkAAIhwCCIB6C3g");
	this.shape_13.setTransform(561.65,44.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhhB4QgngrAAhLIAAgFQgBhIAngsQAngrBCAAQA7AAAjAiQAkAhAAA4IhOAAQgBgZgOgPQgPgPgYAAQgbAAgPAVQgQAVABAwIAAAIQgBAxAQAVQAOAVAdAAQAYAAAOgNQAOgNABgVIBOAAQAAAggRAbQgRAagdAPQgfAPgjAAQhCAAgngrg");
	this.shape_14.setTransform(528.6,51.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_15.setTransform(497.125,51.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABVDTIipkVIAAEVIhXAAIAAmlIBXAAICpEVIAAkVIBXAAIAAGlg");
	this.shape_16.setTransform(459.775,45.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhDCVQgfgPgRgYQgSgZAAgcIBQAAQABAWAPAMQAQAMAZAAQAYAAAMgJQAMgJAAgPQAAgPgPgJQgPgJghgHQhwgXAAhHQAAgqAjgcQAjgcA3AAQA7AAAkAcQAkAcAAAtIhUAAQAAgSgLgLQgMgMgZAAQgUAAgLAJQgMAKAAAPQAAAOANAIQANAJAfAGQAfAGAVAIQBDAYAAA8QAAAqglAbQglAbg6AAQgnAAgegOg");
	this.shape_17.setTransform(411.325,682.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhYCgIAAk5IBQAAIACAlQAYgrAtAAQAOAAAMAEIgBBRQgRgDgNAAQgwAAgOAgIAADNg");
	this.shape_18.setTransform(386.725,682.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_19.setTransform(358.875,682.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKDQQghgOgRgWIAmgzQAfAjAtAAQAgAAATgSQASgSAAggIAAgRQgdAhguAAQg5AAgigtQgkgrAAhJIAAgDQABhJAigsQAigrA6gBQAzAAAdAkIAEgeIBLAAIAAEuQABAqgTAeQgTAegiARQgiAPgtAAQgiAAghgNgAgqiAQgRAZAAAxQAAArARAXQASAYAdAAQAlAAARgcIAAiDQgQgdgmAAQgdAAgSAYg");
	this.shape_20.setTransform(324.95,688.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA0CgIAAjIQAAgbgMgMQgLgMgcAAQgiAAgSAeIAADdIhTAAIAAk5IBPAAIACAkQAigqA3AAQAyAAAYAdQAZAeABA6IAADKg");
	this.shape_21.setTransform(291.9,682.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpDbIAAk5IBTAAIAAE5gAghiQQgNgMAAgTQAAgTANgMQANgMAUAAQAWAAANAMQAMAMAAATQAAATgMAMQgNANgWAAQgUAAgNgNg");
	this.shape_22.setTransform(267.5,676.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiJDTIAAmlIESAAIAABGIi7AAIAABtICnAAIAABGIinAAIAACsg");
	this.shape_23.setTransform(244.55,676.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhDCVQgfgPgRgYQgSgZAAgcIBQAAQABAWAPAMQAQAMAZAAQAYAAAMgJQAMgJAAgPQAAgPgPgJQgPgJghgHQhwgXAAhHQAAgqAjgcQAjgcA3AAQA7AAAkAcQAkAcAAAtIhUAAQAAgSgLgLQgMgMgZAAQgUAAgLAJQgMAKAAAPQAAAOANAIQANAJAfAGQAfAGAVAIQBDAYAAA8QAAAqglAbQglAbg6AAQgnAAgegOg");
	this.shape_24.setTransform(179.925,553.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_25.setTransform(149.175,553.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhrB3QgpgrAAhLIAAgDQAAgvASgkQASglAigUQAigUAsAAQA/AAAoAnQAoAnAFBDIABAUQAABIgpAsQgoAshEAAQhDAAgogsgAgvhGQgRAYAAAxQAAAtARAXQARAYAeAAQAfAAARgYQARgXAAgyQAAgsgRgYQgRgYgfAAQgeAAgRAYg");
	this.shape_26.setTransform(116.025,553.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsDTIAAlfIh/AAIAAhGIFXAAIAABGIiCAAIAAFfg");
	this.shape_27.setTransform(80.9,548.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgvBuIAAipIgtAAIAAg+IAtAAIAAhMIBTAAIAABMIA2AAIAAA+Ig2AAIAACcQAAARAHAHQAHAJASgBQAOABALgDIAABAQgZAIgaAAQhXgBgChYg");
	this.shape_28.setTransform(177.025,380.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_29.setTransform(151.575,384.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_30.setTransform(119.475,384.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiIDTIAAmlIERAAIAABGIi7AAIAABtICnAAIAABGIinAAIAACsg");
	this.shape_31.setTransform(88.05,378.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA0DfIAAjHQAAgagMgNQgLgNgbAAQgkAAgRAcIAADfIhUAAIAAm9IBUAAIAACmQAigoAxAAQBmAAACB2IAADJg");
	this.shape_32.setTransform(231.225,207.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhhB4QgngrgBhLIAAgFQAAhIAngsQAngrBCAAQA7AAAkAiQAjAhABA4IhPAAQAAgZgPgPQgOgPgZAAQgcAAgPAVQgOAVAAAwIAAAIQAAAxAOAVQAPAVAdAAQAXAAAPgNQAPgNAAgVIBPAAQAAAggSAbQgRAagdAPQgfAPgkAAQhCAAgmgrg");
	this.shape_33.setTransform(199.35,214.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhsCIQgegbAAgoQAAgyAlgaQAkgbBGAAIAmAAIAAgSQAAgWgLgNQgLgNgYAAQgVAAgMAKQgMALAAARIhTAAQgBgbASgXQARgXAegOQAfgNAlAAQA6AAAjAdQAhAdABA1IAACHQAAAtAMAXIAAAFIhVAAQgGgMgCgQQgfAigvAAQgvAAgegbgAg2A6IgBAEQABAQAKAKQALAKAUAAQARAAAQgIQAPgIAIgOIAAg2IgfAAQg+AAgEAsg");
	this.shape_34.setTransform(167.75,214.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ACNCgIAAjHQAAgbgKgMQgLgNgaAAQgmAAgOAkIAADXIhTAAIAAjHQAAgbgLgNQgLgMgaAAQgjAAgQAeIAADdIhUAAIAAk5IBPAAIACAjQAigpA4AAQA8AAAXAwQAhgwA9AAQAzAAAZAeQAZAeAAA7IAADIg");
	this.shape_35.setTransform(126.15,213.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhrB3QgpgrAAhLIAAgDQAAgvASgkQASglAigUQAigUAsAAQA/AAAoAnQAoAnAFBDIABAUQAABIgpAsQgoAshEAAQhDAAgogsgAgvhGQgRAYAAAxQAAAtARAXQARAYAeAAQAfAAARgYQARgXAAgyQAAgsgRgYQgRgYgfAAQgeAAgRAYg");
	this.shape_36.setTransform(83.625,214.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgvBtIAAioIgtAAIAAg+IAtAAIAAhMIBTAAIAABMIA2AAIAAA+Ig2AAIAACcQAAARAHAHQAHAIASAAQAOAAALgCIAABAQgZAHgaAAQhXABgChag");
	this.shape_37.setTransform(56.425,210.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhPDHQgogSgVgfQgVgfAAgpIBXAAQAABGBTAAQAfAAASgNQAQgMABgXQgBgZgQgNQgSgNgtgPQgsgOgbgOQhIgmAAhCQAAgjATgaQAUgbAkgPQAkgPAsAAQAtAAAjAQQAkAQATAeQAUAeAAAnIhXAAQAAgdgSgQQgSgRgiAAQgeAAgSAOQgSANAAAWQAAAVAVAOQAUAOAoAMQBKAWAiAgQAiAiAAAwQAAA4gpAfQgqAfhGAAQgwAAgogSg");
	this.shape_38.setTransform(28.45,208.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhqC2QgjgsAAhNQAAhJAigrQAggsA6AAQAsAAAeAiIAAigIBUAAIAAG9IhMAAIgDgiQggAogwAAQg4AAgggsgAg5BDQAAAsAQAXQAPAYAcAAQAoAAAPghIAAh8QgQgggmAAQg8AAAABig");
	this.shape_39.setTransform(236.9,38.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhsCIQgfgbABgoQAAgyAlgaQAkgbBGAAIAmAAIAAgSQAAgWgLgNQgLgNgXAAQgWAAgMAKQgMALABARIhVAAQAAgbARgXQASgXAegOQAfgNAlAAQA6AAAjAdQAhAdAAA1IAACHQAAAtANAXIAAAFIhVAAQgGgMgDgQQgeAigvAAQgvAAgegbgAg2A6IgBAEQAAAQALAKQALAKAUAAQASAAAPgIQAQgIAHgOIAAg2IgfAAQg+AAgEAsg");
	this.shape_40.setTransform(204.9,44.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_41.setTransform(173.175,44.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA0DfIAAjHQAAgagMgNQgLgNgbAAQgkAAgRAcIAADfIhUAAIAAm9IBUAAIAACmQAigoAxAAQBmAAACB2IAADJg");
	this.shape_42.setTransform(140.225,37.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhiB4QgrgqAAhHIAAgHQAAgvASglQASgmAigUQAhgUAqAAQBAAAAmApQAkAoAABLIAAAhIjGAAQAEAfAUASQAVATAeAAQAwAAAcgjIApAuQgTAbggAPQggAPgoAAQhEAAgrgrgAgkhNQgPARgFAfIB0AAIAAgHQgBgcgOgPQgPgPgaAAQgYAAgQARg");
	this.shape_43.setTransform(107.875,44.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhYCgIAAk5IBQAAIACAlQAYgrAtAAQAOAAAMAEIgBBRQgRgDgNAAQgwAAgOAgIAADNg");
	this.shape_44.setTransform(81.925,44.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhrB3QgpgrAAhLIAAgDQAAgvASgkQASglAigUQAigUAsAAQA/AAAoAnQAoAnAFBDIABAUQAABIgpAsQgoAshEAAQhDAAgogsgAgvhGQgRAYAAAxQAAAtARAXQARAYAeAAQAfAAARgYQARgXAAgyQAAgsgRgYQgRgYgfAAQgeAAgRAYg");
	this.shape_45.setTransform(53.025,44.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AiIDTIAAmlIERAAIAABGIi7AAIAABtICnAAIAABGIinAAIAACsg");
	this.shape_46.setTransform(21.2,38.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,582.9,716.6), null);


(lib.Rubric_Base = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(16,60,49,0.498)").s().p("EifJAOdIAA85ME+TAAAIAAc5g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1018.5,-92.5,2037.1,185);


(lib.Rubric = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgiAhQgPgNAAgUQAAgTAPgNQAOgNAUgBQAVABAPANQANANAAATQAAAUgNANQgOANgWAAQgUAAgOgNg");
	this.shape.setTransform(790.5,17.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3DgIAAhDIAOABQAYAAANgIQAMgHAHgRIAKgbIhylIIBeAAIA7DMIA9jMIBdAAIiDF5IgHARQgdBBhDgBQgTAAgUgFg");
	this.shape_1.setTransform(766.225,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvC+QgjguAAhRQAAhLAiguQAigtA8AAQAuAAAgAkIAAinIBXAAIAAHPIhPAAIgEgjQghApgyAAQg6AAgigtgAg7BGQAAAtAQAZQAQAYAdABQApAAARgjIAAiAQgRgigoAAQg+AAAABmg");
	this.shape_2.setTransform(732.575,-1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwB8QgqgtAAhOIAAgDQAAgxATgmQATglAjgVQAjgWAuABQBCAAAqAoQApApAFBFIABAWQAABKgqAuQgqAthHAAQhGAAgqgtgAgxhJQgSAZAAA0QAAAuASAZQARAYAgAAQAgAAASgYQARgYAAg1QAAgugRgZQgSgZggAAQggAAgRAZg");
	this.shape_3.setTransform(698.325,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhADCIgEAjIhOAAIAAnPIBXAAIAACmQAegjAwAAQA8AAAiAsQAiAsAABPIAAAEQAABPghAsQgiAsg8AAQg0AAgggpgAg7ACIAACAQAQAiAqABQApAAAOgqQAGgUAAgoQAAgygQgWQgPgXgfAAQgpAAgQAig");
	this.shape_4.setTransform(664.125,-1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhmB9QgugsAAhJIAAgIQAAgxAUgmQATgnAjgVQAigVAtAAQBCAAAnAqQAmAqAABOIAAAjIjPAAQAFAfAVAUQAVATAgAAQAyAAAcglIArAxQgUAcghAPQgiAPgoAAQhHABgtgtgAglhRQgQATgFAgIB4AAIAAgHQAAgdgPgQQgQgQgbAAQgZAAgQARg");
	this.shape_5.setTransform(614.25,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2DoIAAjPQAAgbgMgOQgMgNgcAAQgmAAgRAdIAADoIhXAAIAAnPIBXAAIAACtQAjgqAzAAQBrAAABB7IAADRg");
	this.shape_6.setTransform(579.875,-1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxByIAAivIgvAAIAAhBIAvAAIAAhQIBXAAIAABQIA4AAIAABBIg4AAIAACiQAAASAHAIQAHAHATAAQAPAAALgCIAABCQgaAJgbgBQhaAAgDhcg");
	this.shape_7.setTransform(551.7,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5DrIAAkFIgwAAIAAhBIAwAAIAAgbQAAg4AggeQAegeA5AAQASAAAaAGIAABDQgLgCgQAAQgxAAAAAuIAAAaIBBAAIAABBIhBAAIAAEFg");
	this.shape_8.setTransform(515.625,-1.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwB8QgqgtAAhOIAAgDQAAgxATgmQATglAjgVQAjgWAuABQBCAAAqAoQApApAFBFIABAWQAABKgqAuQgqAthHAAQhGAAgqgtgAgxhJQgSAZAAA0QAAAuASAZQARAYAgAAQAgAAASgYQARgYAAg1QAAgugRgZQgSgZggAAQggAAgRAZg");
	this.shape_9.setTransform(486.625,5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGCbQgggPgSgZQgSgaAAgdIBSAAQACAXAQAMQAQAMAaAAQAZAAANgJQAMgJAAgQQAAgQgPgJQgQgJgigHQh1gZAAhJQAAgsAkgdQAkgdA5AAQA/AAAlAdQAlAeAAAuIhXAAQAAgTgMgLQgMgNgaAAQgVAAgMAKQgMAKAAAPQAAAOAOAKQANAIAgAHQAhAHAWAHQBFAZAAA+QAAAtgmAcQgnAcg8gBQgoAAgggOg");
	this.shape_10.setTransform(437.525,5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwByIAAivIgwAAIAAhBIAwAAIAAhQIBWAAIAABQIA4AAIAABBIg4AAIAACiQAAASAHAIQAHAHATAAQAPAAALgCIAABCQgZAJgcgBQhbAAgBhcg");
	this.shape_11.setTransform(411,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhbCnIAAlHIBSAAIACAoQAZguAvABQAOAAANADIgBBUQgSgCgNAAQgyAAgOAiIAADVg");
	this.shape_12.setTransform(391.1,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhxCOQgfgcAAgrQAAg0AmgaQAngcBIAAIAoAAIAAgTQAAgXgMgNQgMgNgYAAQgWAAgMAKQgNAKAAATIhXAAQAAgcASgZQARgYAggOQAggNAnAAQA8AAAkAeQAjAfAAA2IAACNQABAuAMAYIAAAGIhYAAQgGgMgDgSQgfAjgyAAQgwABgggcgAg5A8IAAAGQAAAPAMALQALALAUAAQASAAARgIQAQgKAIgOIAAg4IghAAQhAAAgFAtg");
	this.shape_13.setTransform(361.875,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiSDlIAAnDIBRAAIADAgQAfgmAzAAQA8AAAhAtQAiAsAABPIAAAEQAABLgiAtQgjAug5AAQgxAAgegjIAACagAg6h+IAACFQAPAgApAAQA+AAAAhlQAAgugQgYQgQgZgeAAQgpAAgPAfg");
	this.shape_14.setTransform(328.5,11.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhmB9QgugsAAhJIAAgIQAAgxAUgmQATgnAjgVQAigVAsAAQBDAAAnAqQAmAqAABOIAAAjIjPAAQAFAfAVAUQAVATAgAAQAyAAAdglIAqAxQgUAcghAPQgiAPgoAAQhHABgtgtgAglhRQgQATgFAgIB5AAIAAgHQgBgdgPgQQgPgQgcAAQgZAAgQARg");
	this.shape_15.setTransform(278.65,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA2DoIAAjPQAAgbgMgOQgMgNgcAAQgmAAgRAdIAADoIhXAAIAAnPIBXAAIAACtQAjgqAzAAQBrAAABB7IAADRg");
	this.shape_16.setTransform(244.275,-1.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxByIAAivIgvAAIAAhBIAvAAIAAhQIBXAAIAABQIA4AAIAABBIg4AAIAACiQAAASAHAIQAHAHAUAAQAOAAALgCIAABCQgZAJgbgBQhcAAgChcg");
	this.shape_17.setTransform(216.1,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5DrIAAkFIgwAAIAAhBIAwAAIAAgbQAAg4AggeQAegeA5AAQASAAAaAGIAABDQgLgCgQAAQgxAAAAAuIAAAaIBBAAIAABBIhBAAIAAEFg");
	this.shape_18.setTransform(180.025,-1.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhwB8QgqgtAAhOIAAgDQAAgxATgmQATglAjgVQAjgWAuABQBCAAAqAoQApApAFBFIABAWQAABKgqAuQgqAthHAAQhGAAgqgtgAgxhJQgSAZAAA0QAAAuASAZQARAYAgAAQAgAAASgYQARgYAAg1QAAgugRgZQgSgZggAAQggAAgRAZg");
	this.shape_19.setTransform(151.025,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhGCbQgggPgSgZQgSgaAAgdIBSAAQACAXAQAMQAQAMAaAAQAZAAANgJQAMgJAAgQQAAgQgPgJQgQgJgigHQh1gZAAhJQAAgsAkgdQAkgdA5AAQA/AAAlAdQAlAeAAAuIhXAAQAAgTgMgLQgMgNgaAAQgVAAgMAKQgMAKAAAPQAAAOAOAKQANAIAgAHQAhAHAWAHQBFAZAAA+QAAAtgmAcQgnAcg8gBQgoAAgggOg");
	this.shape_20.setTransform(101.975,5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhmB9QgugsAAhJIAAgIQAAgxAUgmQATgnAjgVQAigVAsAAQBEAAAmAqQAmAqAABOIAAAjIjPAAQAFAfAVAUQAVATAgAAQAyAAAdglIAqAxQgUAcghAPQghAPgpAAQhHABgtgtgAglhRQgQATgFAgIB5AAIAAgHQgBgdgPgQQgPgQgcAAQgZAAgQARg");
	this.shape_21.setTransform(69.95,5.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ACTCnIAAjQQAAgbgLgNQgLgOgcAAQgnAAgPAmIAADgIhWAAIAAjQQAAgcgLgMQgLgOgbAAQglABgRAfIAADmIhXAAIAAlHIBSAAIACAlQAjgqA7AAQA+gBAYAyQAigyBAABQA1gBAaAgQAaAeAAA/IAADQg");
	this.shape_22.setTransform(26.175,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhxCOQgfgcAAgrQAAg0AmgaQAngcBIAAIAoAAIAAgTQAAgXgMgNQgMgNgYAAQgWAAgMAKQgNAKAAATIhXAAQAAgcASgZQARgYAggOQAggNAnAAQA8AAAkAeQAjAfAAA2IAACNQABAuAMAYIAAAGIhYAAQgGgMgDgSQgfAjgyAAQgwABgggcgAg5A8IAAAGQAAAPAMALQALALAUAAQASAAARgIQAQgKAIgOIAAg4IghAAQhAAAgFAtg");
	this.shape_23.setTransform(-17.225,5.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA2CnIAAjRQAAgbgMgMQgMgOgcAAQgkAAgTAgIAADmIhXAAIAAlHIBSAAIADAmQAjgrA6AAQA0AAAZAeQAZAfABA8IAADTg");
	this.shape_24.setTransform(-51.175,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxByIAAivIgvAAIAAhBIAvAAIAAhQIBXAAIAABQIA4AAIAABBIg4AAIAACiQAAASAHAIQAHAHAUAAQAOAAALgCIAABCQgZAJgbgBQhcAAgChcg");
	this.shape_25.setTransform(-94.75,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhlB9QgpgtAAhOIAAgFQAAhLAogtQApguBFABQA8AAAmAiQAkAjABA7IhRAAQgBgagQgQQgOgQgZAAQgdAAgQAXQgQAWAAAyIAAAIQAAAyAPAWQAQAWAfAAQAXAAAPgNQAQgNABgXIBRAAQAAAigSAcQgRAbggAQQgfAPglgBQhFAAgogsg");
	this.shape_26.setTransform(-120.65,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhmB9QgugsAAhJIAAgIQAAgxAUgmQATgnAjgVQAigVAsAAQBDAAAnAqQAmAqAABOIAAAjIjPAAQAFAfAVAUQAVATAgAAQAyAAAdglIAqAxQgUAcghAPQgiAPgoAAQhHABgtgtgAglhRQgQATgFAgIB5AAIAAgHQgBgdgPgQQgPgQgcAAQgZAAgQARg");
	this.shape_27.setTransform(-153.35,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhbCnIAAlHIBSAAIACAoQAZguAvABQAOAAANADIgBBUQgSgCgNAAQgyAAgOAiIAADVg");
	this.shape_28.setTransform(-180.3,5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhcCnIAAlHIBTAAIADAoQAZguAuABQAOAAAOADIgCBUQgSgCgOAAQgxAAgOAiIAADVg");
	this.shape_29.setTransform(-202.85,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhwB8QgqgtAAhOIAAgDQAAgxATgmQATglAjgVQAjgWAuABQBCAAAqAoQApApAFBFIABAWQAABKgqAuQgqAthHAAQhGAAgqgtgAgxhJQgSAZAAA0QAAAuASAZQARAYAgAAQAgAAASgYQARgYAAg1QAAgugRgZQgSgZggAAQggAAgRAZg");
	this.shape_30.setTransform(-232.975,5.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhlB9QgpgtAAhOIAAgFQAAhLAogtQApguBFABQA9AAAlAiQAkAjABA7IhRAAQgBgagQgQQgOgQgZAAQgeAAgPAXQgQAWAAAyIAAAIQAAAyAQAWQAPAWAfAAQAYAAAOgNQAQgNABgXIBRAAQAAAigSAcQgSAbgeAQQggAPglgBQhFAAgogsg");
	this.shape_31.setTransform(-266.35,5.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhmB9QgugsAAhJIAAgIQAAgxAUgmQATgnAjgVQAigVAsAAQBDAAAnAqQAmAqAABOIAAAjIjPAAQAFAfAVAUQAVATAgAAQAyAAAdglIAqAxQgUAcghAPQgiAPgoAAQhHABgtgtgAglhRQgQATgFAgIB5AAIAAgHQgBgdgPgQQgPgQgcAAQgZAAgQARg");
	this.shape_32.setTransform(-314.45,5.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA2DoIAAjPQAAgbgMgOQgMgNgcAAQgmAAgRAdIAADoIhXAAIAAnPIBXAAIAACtQAjgqAzAAQBrAAABB7IAADRg");
	this.shape_33.setTransform(-348.825,-1.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgxByIAAivIgvAAIAAhBIAvAAIAAhQIBXAAIAABQIA4AAIAABBIg4AAIAACiQAAASAHAIQAHAHAUAAQAOAAALgCIAABCQgZAJgbgBQhcAAgChcg");
	this.shape_34.setTransform(-377,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiSDlIAAnDIBRAAIADAgQAggmAxAAQA9AAAiAtQAhAsAABPIAAAEQAABLgiAtQgiAug6AAQgxAAgegjIAACagAg6h+IAACFQAQAgAoAAQA+AAAAhlQAAgugQgYQgRgZgdAAQgqAAgOAfg");
	this.shape_35.setTransform(-419.15,11.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhwB8QgqgtAAhOIAAgDQAAgxATgmQATglAjgVQAjgWAuABQBCAAAqAoQApApAFBFIABAWQAABKgqAuQgqAthHAAQhGAAgqgtgAgxhJQgSAZAAA0QAAAuASAZQARAYAgAAQAgAAASgYQARgYAAg1QAAgugRgZQgSgZggAAQggAAgRAZg");
	this.shape_36.setTransform(-454.725,5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhcCnIAAlHIBTAAIACAoQAaguAuABQAPAAANADIgCBUQgRgCgOAAQgyAAgOAiIAADVg");
	this.shape_37.setTransform(-482.15,5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AinDcIAAm3ICHAAQA5AAAuAaQAuAaAZAxQAaAwAAA9IAAATQAAA9gZAwQgZAwgvAaQguAag4ABgAhMCTIArAAQA0AAAcgjQAdgiAAhBIAAgWQAAhDgbgjQgdgjg0AAIgsAAg");
	this.shape_38.setTransform(-514.2,-0.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhvC+QgjguAAhRQAAhLAiguQAigtA8AAQAuAAAgAkIAAinIBXAAIAAHPIhPAAIgEgjQghApgyAAQg6AAgigtgAg7BGQAAAtAQAZQAQAYAdABQApAAARgjIAAiAQgRgigoAAQg+AAAABmg");
	this.shape_39.setTransform(-568.475,-1.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA2CnIAAjRQAAgbgMgMQgMgOgcAAQgkAAgTAgIAADmIhXAAIAAlHIBSAAIADAmQAjgrA6AAQA0AAAZAeQAZAfABA8IAADTg");
	this.shape_40.setTransform(-602.575,5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhxCOQgfgcAAgrQAAg0AmgaQAngcBIAAIAoAAIAAgTQAAgXgMgNQgMgNgYAAQgWAAgMAKQgNAKAAATIhXAAQAAgcASgZQARgYAggOQAggNAnAAQA8AAAkAeQAjAfAAA2IAACNQABAuAMAYIAAAGIhYAAQgGgMgDgSQgfAjgyAAQgwABgggcgAg5A8IAAAGQAAAPAMALQALALAUAAQASAAARgIQAQgKAIgOIAAg4IghAAQhAAAgFAtg");
	this.shape_41.setTransform(-636.425,5.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhNDZQgigPgRgWIAmg2QAhAlAuAAQAiAAATgSQAUgTAAgiIAAgSQgfAigwAAQg7AAgkguQgkguAAhLIAAgEQAAhLAkguQAjguA9AAQA1AAAeAlIADgfIBPAAIAAE7QAAArgTAgQgUAggjAQQgjARgvAAQgkAAgigOgAgriFQgSAaAAAzQAAAsASAZQASAZAeAAQAnAAASgeIAAiJQgSgegnAAQgeAAgSAag");
	this.shape_42.setTransform(-686.725,11.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhxCOQgfgcAAgrQAAg0AmgaQAngcBIAAIAoAAIAAgTQAAgXgMgNQgMgNgYAAQgWAAgMAKQgNAKAAATIhXAAQAAgcASgZQARgYAggOQAggNAnAAQA8AAAkAeQAjAfAAA2IAACNQABAuAMAYIAAAGIhYAAQgGgMgDgSQgfAjgyAAQgwABgggcgAg5A8IAAAGQAAAPAMALQALALAUAAQASAAARgIQAQgKAIgOIAAg4IghAAQhAAAgFAtg");
	this.shape_43.setTransform(-720.375,5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhcCnIAAlHIBTAAIADAoQAZguAuABQAOAAAOADIgCBUQgSgCgOAAQgxAAgOAiIAADVg");
	this.shape_44.setTransform(-746.9,5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AinDcIAAm3ICHAAQA5AAAuAaQAtAaAaAxQAaAwAAA9IAAATQAAA9gZAwQgZAwgvAaQgtAag5ABgAhMCTIArAAQA0AAAdgjQAbgiABhBIAAgWQAAhDgbgjQgdgjg0AAIgsAAg");
	this.shape_45.setTransform(-778.95,-0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-978.3,-39.8,1956.6999999999998,79.69999999999999);


(lib.root_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.root_bg, new cjs.Rectangle(0,0,1280,720), null);


(lib.Point_Cir = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AA2AAQAAAWgQAQQgPAQgXAAQgWAAgQgQQgPgQAAgWQAAgVAPgQQAQgQAWAAQAXAAAPAQQAQAQAAAVg");
	this.shape.setTransform(5.4,5.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAmQgPgQAAgWQAAgVAPgQQAQgQAWAAQAXAAAPAQQAQAQAAAVQAAAWgQAQQgPAQgXAAQgWAAgQgQg");
	this.shape_1.setTransform(5.4,5.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Point_Cir, new cjs.Rectangle(-1,-1,12.8,12.9), null);


(lib.mcTxt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(126,162,163,0.008)").s().p("AhFBVIAAipICLAAIAACpg");
	this.shape.setTransform(7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTxt, new cjs.Rectangle(0,0,14,17), null);


(lib.hit_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(80,51,22,0.008)").s().p("AnzDIIAAmPIPnAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hit_btn, new cjs.Rectangle(-50,-20,100,40), null);


(lib.Drop_ract = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1C7C9F").s().p("Ar0DwQgoAAgBgoIAAmPQABgoAoAAIXqAAQAnAAAAAoIAAGPQAAAognAAg");
	this.shape.setTransform(83.55,27.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEEEF5").s().p("AsZETQgqAAAAgtIAAnKQAAguAqAAIYzAAQAqAAAAAuIAAHKQAAAtgqAAg");
	this.shape_1.setTransform(83.575,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop_ract, new cjs.Rectangle(0,0,167.2,55), null);


(lib.Drop_Base_Anim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-367.5,-409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop_Base_Anim, new cjs.Rectangle(-367.5,-409,735,818), null);


(lib.dOTTED_LINE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("APsAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIAgAAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAN0AHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAL8AHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAKEAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAIMAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAGUAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAEcAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgACkAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAAsAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAhLAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAjDAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAk7AHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAmzAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAorAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAqjAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAsbAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAuTAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAwLAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-1,209.2,2);


(lib.divider_anim = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls(["rgba(157,220,241,0)","#92D0DC","rgba(156,219,239,0)"],[0,0.502,1],-0.1,-353.4,-0.1,182.6).ss(3,2,1).p("EAAAgpbMAAABS3");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.divider_anim, new cjs.Rectangle(-1.5,-266.7,3,533.4), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#EB5564","#EB5968","#ED6572","#EF7884","#F2949E","#F6B8BF","#FBE4E6","#FFFFFF"],[0,0.153,0.306,0.459,0.612,0.765,0.918,1],0,0,0,0,0,83.6).s().p("Aj2NmQisgziKh0QiFhvhTiaQhTicgUivQgVi1AzixQAyixBwiNQBtiJCXhWQCYhWCqgVQCwgVCsAzQCsAzCKBzQCFBvBTCcQBTCbAUCvQAVC0gzCxQgyCxhwCOQhtCJiXBVQiYBXiqAUQg1AHgzAAQh7AAh5gkg");
	this.shape.setTransform(88.225,90.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0.1,0,176.3,181.2), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#EB5564","#EB5968","#ED6572","#EF7884","#F2949E","#F6B8BF","#FBE4E6","#FFFFFF"],[0,0.153,0.306,0.459,0.612,0.765,0.918,1],0,0,0,0,0,83.6).s().p("Aj2NmQisgziKhzQiFhvhTibQhTicgUivQgVi0AzixQAyixBwiOQBtiJCXhWQCYhVCqgVQCwgWCsAzQCsAzCKBzQCFBwBTCbQBTCbAUCvQAVC0gzCxQgyCxhwCOQhtCJiXBWQiYBViqAVQg1AHgzAAQh7AAh5gkg");
	this.shape.setTransform(88.175,90.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,176.4,181.2), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#734D2C").s().p("AouO2QgLgFABgLQADgSALgnQBDj1BJjQQBVj4Bbi+QBgjLB0iqQB6i2CKiHQBMhLBOg8QBIg5Bgg2QAIgEAEAIQAEAHgHAFIgqAcQipB3iHCRQiFCOhyC1QhuCuhcDPQhXDDhSDxQglBwgjBxIgjBwIgRA3QgLAggJAWQgDAIgGAAIgGgCg");
	this.shape.setTransform(56.8887,165.8586);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#734D2C").s().p("AN/MlIg2hKIgTgVIhsiNQhdhyg8hGQidi2irikQioigi9iWQixiMjQiGQhdg9hrg/QiUhWg6ggQgKgGAGgKQAGgLALAFIA2AZQCxBTDtCZQC6B5DICgQC9CZCoClQCrCnCbC4QBPBeBHBhIAkAvQAVAcANAWQARAcAPAXIAgAyQAIALgMAHQgEADgEAAQgHAAgFgHg");
	this.shape_1.setTransform(544.62,81.1401);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#734D2C").s().p("AIvOqQhLhLhVhpQhNhdhLhgQkumDi7lEQjnmRhsmDQgCgIAIgCQAIgDADAIQBFDYBvDpQChFPEXGIQBxCgCQC1ICJCoQBQBjAyBIQAHAKgKAHQgFAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(374.283,142.0267);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#734D2C").s().p("AHuM1QgUgLgZgUIgpgkQgogjgnglQhKhFhLhRQj6kPi6leQhaiqhDizQhBiugpjFQgCgKAKgDQAJgCADAJQAzDABWDVQCMFeDgEyQBrCSCFCMQBEBJBBA9IBGA/IAkAfQAWASAMAPQAKALgJAMQgGAHgHAAQgEAAgFgCg");
	this.shape_3.setTransform(308.5708,131.0779);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#734D2C").s().p("AKKNGIh0jPQhDh1g4hWQh4i5iBiZQhxiHipinQjjjehAhFQieiphgiZQgFgJAJgGQAJgFAGAJQBsClC7C8QBiBiDIC/QChCeB4CSQCLCqBrCtQB/DNBCCtQADAIgIADIgFABQgEAAgDgFg");
	this.shape_4.setTransform(574.8366,180.179);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#734D2C").s().p("AQRQTIgxg4Igzg5IgYgcIgXgdQg5hEgrgxQhvh+hihYQhwhlh+hLQg9gkhUgnIiVhBQirhLhnhEQhphFhthnQiwiqiskKQgng+gkg9IgSgfQgKgWgGgKIgig+QhTiXgwhlQgGgMALgGQALgHAHALIAjA8QA8BsBSCLQAGALAPATIARAdIAlA8QAgAzAuBFQCuECC3ChQBnBaB0BFQA8AkBSAnICTBDQCmBMBvBOQBxBPBzBuQBiBeBtCAQBEBPAbAkIAsA+IAuA9QAFAHgIAHQgEADgEAAQgDAAgDgEg");
	this.shape_5.setTransform(539.0164,201.5358);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#734D2C").s().p("AMBLpQhUgpgggSIlTi+Qhxg/hHguQhig/hJg/QiHhyiYi2QiEieh1iwQhyirhhjEQgCgGAFgCQAFgDADAFQA5BlBBBmQBVCGApA8QB2CrCICcQCaCxCMBvQBJA5BpA+QAlAXCWBTIEtCnIBhA8QALAHgGALQgEAHgGAAQgEAAgEgCg");
	this.shape_6.setTransform(275.7541,154.4383);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#734D2C").s().p("AMFJWIg0gNQgegJgUgIQg8gagogTQhdgshhg5Qichbimh9QiGhminiOQi1ibhwhnQhRhLg5g/QhGhOgwhMQgEgGAGgDQAGgDAEAFQA3BTBVBUQA9A9BlBVQC0CYB0BdQCkCDCLBlQClB4CdBYQBQAtBbAqIBWAmIBUAqQAMAGgFANQgFAKgJAAIgFgBg");
	this.shape_7.setTransform(257.672,187.8092);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#734D2C").s().p("AmPUYQgLgegLgoQgPg3gKheQgHhKgChMQgDiJASijQAfkRBPkVQBKkEBuj0QBwj1CPjhQCMjZC6jMQAJgJAIAJQAIAIgHAKIgqAyQhUBrhHBpQhjCSgtBLQiJDkhlDxQhpD8hCD2QhNEigWECQgOCeAHCMQAEBGAJBMQAKBRAKBBQADAOgOAEIgFABQgKAAgDgLg");
	this.shape_8.setTransform(61.8723,264.4057);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,645,396), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EF7155").s().p("EgE0A3oQwThkppmJQrRnLkNuaQiTnYh7k3QgxingMi1QgMimASjDQA8pPEup4QD2oEGtpIQKsvjMPk5QM+lNP2GUQHrDFHSFYQG/FLFhGdQDhEcBOB/QCODrAcDjQABBEgiBgQgxCOgFATQg/DJgsCoQgYBaggCCIgYBmQhrHIhgJlQgqE0goC3Qg5ELhXDRQi0HKklFiQkgFcl6DhQl7Dhm8BVQkBAxkOAAQjKAAjRgcgEgrXgELQhSHmAfMZQA3FeCXFkQCdFyDqE0QD7FLEzDWQFPDqFzBJQIWBYGhAGQHUAIGbhcQQwi8Hw7FQBgkkCDnGQBplqA/jsQiUjDndmjQmTlii/iJIDQD9I1XilIBsAXQB1AcA0AbQClBVosAnQorAnr3m8QjuiKjlirIi1iOInlIaIkAjfQk1H4hjJQg");
	this.shape.setTransform(329.4984,358.9088);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0.1,659,717.6999999999999), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhbHJQjSg5hmifQhoifAzi/QA1jKCGhhQCShqDHA3QDRA5BwCwQBwCwgzC/QgzDEiRBXQhcA3hxAAQhFAAhPgWg");
	mask.setTransform(47.3317,47.8245);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBOQgfgfgBgsQgBgqAdghQAdggArgBQAqgCAfAfQAfAeABAsQACArgeAgQgdAggrABIgDAAQgoAAgegcg");
	this.shape.setTransform(72.227,45.5251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494746").s().p("AjnEQQhzhugNiZQgOibBohyQBphzCVACQCRABByBuQBxBtAFCQQAECPhqB0QhqB1iJAHIgPAAQh/AAhqhmg");
	this.shape_1.setTransform(42.1816,42.6175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbHJQjSg5hmifQhoifAzi/QA1jKCGhhQCShqDHA3QDRA5BwCwQBwCwgzC/QgzDEiRBXQhcA3hxAAQhFAAhPgWg");
	this.shape_2.setTransform(47.3317,47.8245);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,94.7,95.7), null);


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
	mask.graphics.p("AhuHAQjQgqheiVQhciPAnjGQAnjCCxhrQCxhrDTAsQDLApBUChQBOCUgpDMQgmDCiiBgQhuBCiHAAQg9AAhDgOg");
	mask.setTransform(47.7131,46.1146);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBnQgqgKgXglQgXglALgqQAJgrAkgXQAlgXAoAJQAqAKAWAlQAYAlgKAqQgKArgkAYQgaAQgcAAQgLAAgMgDg");
	this.shape.setTransform(77.6,42.9104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494746").s().p("AhUFtQiSgbhRiFQhQiEAriWQAqiTCGhWQCChVCFAiQCEAhBTCIQBRCGggCMQggCMiDBVQhlBBhqAAQgiAAgjgHg");
	this.shape_1.setTransform(47.3275,39.7954);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuHAQjQgqheiVQhciPAnjGQAnjCCxhrQCxhrDTAsQDLApBUChQBOCUgpDMQgmDCiiBgQhuBCiHAAQg9AAhDgOg");
	this.shape_2.setTransform(47.7131,46.1146);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,-0.1,95.5,92.39999999999999), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.StartAnim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(337,78);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(640.1,517.8,0.768,0.768,0,0,0,598.4,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.bg = new lib.root_bg();
	this.bg.name = "bg";
	this.bg.cache(-2,-2,1284,724);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartAnim, new cjs.Rectangle(0,0,1280,720), null);


(lib.Rubric_anim_inside = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rubric("synched",0);
	this.instance.setTransform(43.2,35.15);

	this.instance_1 = new lib.Rubric_Base("synched",0);
	this.instance_1.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1021.5,-92.5,2043.1,185);


(lib.Rubric_Anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1));

	// Layer_1
	this.instance = new lib.Rubric_anim_inside("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:143.5},34,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1021.5,-92.5,2043.1,328.5);


(lib.Drop9 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(0.05,0.25,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Drop_ract();
	this.instance.setTransform(-2.45,0.75,1.0004,1.0004,0,0,0,80,27.7);

	this.instance_1 = new lib.Point_Cir();
	this.instance_1.setTransform(-141.4,0.3,1.0003,1.0003,0,0,0,5.5,5.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFKAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgADSAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgABaAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAgdAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA7AAQADAAACACQACACAAACQAAADgCACQgCACgDAAgAiVAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAkNAHQgDAAgCgCQgCgCgBgDQABgCACgCQACgCADAAIA8AAQADAAACACQACACABACQgBADgCACQgCACgDAAgAmFAHQgDAAgCgCQgCgCAAgDQAAgCACgCQACgCADAAIA8AAQADAAACACQACACAAACQAAADgCACQgCACgDAAg");
	this.shape.setTransform(-112.181,-0.1682,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop9, new cjs.Rectangle(-147.4,-27,232.10000000000002,55.2), null);


(lib.Drop8 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.3,-0.15,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Point_Cir();
	this.instance.setTransform(165.55,-0.45,1.0004,1.0004,0,0,0,5.7,5.5);

	this.instance_1 = new lib.Drop_ract();
	this.instance_1.setTransform(-3.55,0.35,1.0004,1.0004,0,0,0,80.1,27.7);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(97.1,-0.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop8, new cjs.Rectangle(-83.7,-27.4,254.89999999999998,55.2), null);


(lib.Drop7 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.4,-0.3,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Drop_ract();
	this.instance.setTransform(-3.3,0.2,1.0004,1.0004,0,0,0,80,27.7);

	this.instance_1 = new lib.Point_Cir();
	this.instance_1.setTransform(-109.15,-0.3,1.0003,1.0003,0,0,0,5.6,5.7);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(-34.85,-1,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop7, new cjs.Rectangle(-115.2,-27.6,199.10000000000002,55.2), null);


(lib.Drop6 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(0.05,-0.1,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Drop_ract();
	this.instance.setTransform(-3.15,0.4,1.0004,1.0004,0,0,0,80,27.7);

	this.instance_1 = new lib.Point_Cir();
	this.instance_1.setTransform(-142,-0.2,1.0003,1.0003,0,0,0,5.6,5.6);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(-70.9,-0.55,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop6, new cjs.Rectangle(-148.1,-27.4,232.3,55.2), null);


(lib.Drop5 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(0,-0.3,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Point_Cir();
	this.instance.setTransform(221.1,-0.6,1.0004,1.0004,0,0,0,5.7,5.5);

	this.instance_1 = new lib.Drop_ract();
	this.instance_1.setTransform(-3.05,0.2,1.0004,1.0004,0,0,0,80.1,27.7);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(146.85,-0.75,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop5, new cjs.Rectangle(-83.4,-27.6,310.1,55.2), null);


(lib.Drop4 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.05,-0.1,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Drop_ract();
	this.instance.setTransform(-3.55,0.4,1.0004,1.0004,0,0,0,80,27.7);

	this.instance_1 = new lib.Point_Cir();
	this.instance_1.setTransform(-221.65,-0.1,1.0003,1.0003,0,0,0,5.6,5.7);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(-149.65,-0.35,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop4, new cjs.Rectangle(-227.7,-27.4,311.79999999999995,55.2), null);


(lib.Drop3 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-2.1,-1.85,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Point_Cir();
	this.instance.setTransform(218.95,-2.15,1.0004,1.0004,0,0,0,5.7,5.5);

	this.instance_1 = new lib.Drop_ract();
	this.instance_1.setTransform(-5.25,-1.35,1.0004,1.0004,0,0,0,80,27.7);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(150.95,-2.25,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop3, new cjs.Rectangle(-85.5,-29.1,310.1,55.2), null);


(lib.Drop2 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-84.5,-28.2,1.6768,1.3816,0,0,0,-50,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Drop_ract();
	this.instance.setTransform(-4.4,-0.2,1.0004,1.0004,0,0,0,80.1,27.7);

	this.instance_1 = new lib.Point_Cir();
	this.instance_1.setTransform(191.05,-0.7,1.0004,1.0004,0,0,0,5.8,5.5);

	this.instance_2 = new lib.dOTTED_LINE("synched",0);
	this.instance_2.setTransform(117.1,-1,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop2, new cjs.Rectangle(-84.5,-28.3,281.1,55.3), null);


(lib.Drop1 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.2,-0.3,1.6752,1.3805,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.dOTTED_LINE("synched",0);
	this.instance.setTransform(-152.2,-0.5,0.667,0.667);

	this.instance_1 = new lib.Drop_ract();
	this.instance_1.setTransform(-3,0.3,1.0004,1.0004,0,0,0,80,27.8);

	this.instance_2 = new lib.Point_Cir();
	this.instance_2.setTransform(-226.55,-0.3,1.0003,1.0003,0,0,0,5.7,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Drop1, new cjs.Rectangle(-232.7,-27.6,316.9,55.2), null);


(lib.drag2 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(0.35,-4.85,1.9943,1.6265,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_2
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-6.65,-9.95);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiCUIAAiEQABgRgIgIQgIgJgSAAQgYAAgKASIAACUIg5AAIAAkoIA5AAIAABvQAWgaAhAAQBDgBACBOIAACGg");
	this.shape.setTransform(68.4,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBQQgZgcgBgzIAAgDQABgwAZgdQAZgcAtAAQAnAAAYAWQAYAWAAAlIg1AAQAAgQgKgKQgKgKgPAAQgTAAgKANQgKAPAAAgIAAAFQAAAgAKAOQAKAPATAAQAPAAAKgJQAKgIAAgPIA1AAQAAAVgMASQgLASgUAKQgUAJgYABQgsAAgagdg");
	this.shape_1.setTransform(47.15,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBbQgVgSAAgbQAAgiAZgQQAYgSAugBIAaAAIAAgLQAAgPgIgJQgHgJgPAAQgOAAgIAIQgJAHAAALIg3AAQAAgSALgQQALgPAVgJQAUgJAZABQAmAAAYATQAWATAAAkIAABZQAAAeAIAPIAAADIg4AAQgEgHgCgMQgUAYgfAAQggAAgTgSgAgjAnIgBACQAAALAIAHQAHAGANABQALgBAKgFQALgGAFgIIAAgkIgVAAQgpAAgCAdg");
	this.shape_2.setTransform(26.05,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABeBqIAAiEQAAgSgHgIQgHgIgSAAQgZAAgKAYIAACOIg2AAIAAiEQAAgSgIgIQgGgIgRAAQgYAAgLAUIAACSIg4AAIAAjQIA0AAIACAYQAWgbAmAAQAogBAPAgQAWggAoABQAjgBAQAVQARATAAAoIAACEg");
	this.shape_3.setTransform(-1.65,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBPQgbgdAAgxIAAgCQAAgfAMgZQAMgYAWgOQAXgMAdAAQAqAAAbAZQAaAaADAsIABAOQAAAwgbAdQgaAeguAAQgtAAgagegAgfgvQgMARAAAgQAAAeAMAQQALAQAUAAQAUAAAMgQQALgQAAgiQAAgcgLgRQgLgPgVAAQgUAAgLAPg");
	this.shape_4.setTransform(-30,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBJIAAhwIgeAAIAAgpIAeAAIAAg0IA3AAIAAA0IAkAAIAAApIgkAAIAABnQAAANAFAFQAEAEANABQAJAAAHgCIAAAqQgQAFgSABQg6AAgBg8g");
	this.shape_5.setTransform(-48.175,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1CFQgagMgOgVQgOgVAAgbIA6AAQAAAvA3AAQAVAAALgJQAMgIAAgPQAAgRgMgIQgMgJgcgKQgfgKgRgJQgxgZAAgsQABgXANgSQANgSAYgKQAYgKAdAAQAdAAAYALQAYALANAUQANAUAAAZIg6AAQAAgTgNgLQgLgLgWAAQgVAAgMAKQgLAIAAAPQAAAOANAJQAOAJAaAJQAyAOAXAWQAWAWAAAgQAAAlgcAVQgbAVgvAAQggAAgbgMg");
	this.shape_6.setTransform(-66.8,-1.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag2, new cjs.Rectangle(-98.9,-37,199.4,65.1), null);


(lib.drag1 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(0.35,-4.85,1.9943,1.6265,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-6.65,-9.95);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHB5QgWgdAAg0QAAgvAWgdQAVgdAnAAQAdAAAUAWIAAhrIA4AAIAAEoIgyAAIgDgVQgVAaggAAQglAAgWgegAgmAtQAAAdALAQQAKAQASAAQAaAAALgXIAAhTQgKgUgaAAQgoAAAABBg");
	this.shape.setTransform(72.225,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBbQgUgSAAgbQAAgiAZgQQAZgSAtgBIAaAAIAAgLQAAgPgHgJQgIgJgPAAQgOAAgIAIQgIAHAAALIg4AAQAAgSALgQQALgPAUgJQAVgJAZABQAnAAAWATQAXATAAAkIAABZQAAAeAIAPIAAADIg4AAQgEgHgCgMQgUAYggAAQgeAAgVgSgAgkAnIAAACQAAALAHAHQAIAGAMABQAMgBALgFQAKgGAFgIIAAgkIgVAAQgpAAgDAdg");
	this.shape_1.setTransform(50.85,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAWgNQAXgNAcAAQAqAAAZAbQAZAbAAAxIAAAWIiFAAQADAVAOAMQANANAVAAQAggBASgXIAcAeQgNATgVAKQgWAJgaABQgtAAgdgdgAgXgzQgLALgDAVIBNAAIAAgEQgBgUgJgJQgKgKgRAAQgQAAgKALg");
	this.shape_2.setTransform(29.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjCUIAAiEQgBgRgHgIQgIgJgSAAQgXAAgMASIAACUIg4AAIAAkoIA4AAIAABvQAXgaAgAAQBEgBABBOIAACGg");
	this.shape_3.setTransform(7.7,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQANgZAVgNQAXgNAcAAQArAAAYAbQAZAbAAAxIAAAWIiFAAQAEAVANAMQANANAUAAQAhgBASgXIAcAeQgNATgVAKQgWAJgaABQgtAAgdgdgAgXgzQgLALgDAVIBNAAIAAgEQAAgUgKgJQgKgKgRAAQgQAAgKALg");
	this.shape_4.setTransform(-13.85,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BqIAAjQIA1AAIABAZQAQgcAeAAQAJAAAIACIgBA2IgUgCQggAAgIAVIAACIg");
	this.shape_5.setTransform(-31.175,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBPQgbgdAAgxIAAgCQAAgfAMgZQAMgYAXgOQAWgMAdAAQAqAAAbAZQAbAaACAsIABAOQAAAwgbAdQgbAegtAAQgsAAgbgegAgfgvQgLARAAAgQAAAeALAQQALAQAUAAQAVAAAKgQQAMgQAAgiQAAgcgMgRQgLgPgUAAQgUAAgLAPg");
	this.shape_6.setTransform(-50.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhbCNIAAkZIC3AAIAAAvIh9AAIAABJIBvAAIAAAuIhvAAIAABzg");
	this.shape_7.setTransform(-71.675,-1.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag1, new cjs.Rectangle(-98.9,-37,199.4,65.1), null);


(lib.divider = function(mode,startPosition,loop,reversed) {
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
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Layer_1
	this.instance = new lib.divider_anim();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({alpha:1},34,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-267.2,4,534.4);


(lib.darg9 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.45,-0.1,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHB5QgWgdAAg0QAAgvAWgeQAVgdAnAAQAdABAUAWIAAhqIA4AAIAAEoIgyAAIgDgXQgVAaggAAQglAAgWgdgAgmAtQAAAdALAQQAKAPASAAQAaABALgWIAAhTQgKgVgaAAQgoAAAABBg");
	this.shape.setTransform(35.275,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBrIAAiGQAAgRgHgIQgIgIgSAAQgXAAgMAUIAACTIg3AAIAAjRIA0AAIACAYQAWgcAlAAQAhAAARAUQAQATAAAoIAACGg");
	this.shape_1.setTransform(13.425,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBaQgUgRAAgcQAAggAZgRQAZgSAtAAIAaAAIAAgNQAAgOgHgIQgIgKgPABQgOgBgIAIQgJAGABAMIg4AAQAAgSALgPQALgQAUgJQAVgJAZAAQAnAAAWAUQAXATAAAjIAABaQAAAeAIAPIAAAEIg4AAQgEgIgCgLQgUAWgfAAQgfABgVgTgAgkAnIAAADQAAAKAHAHQAIAHAMAAQAMAAALgGQAKgFAFgKIAAgkIgVAAQgpAAgDAeg");
	this.shape_2.setTransform(-8.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5CNIAAh5IhxAAIAAB5Ig6AAIAAkZIA6AAIAAByIBxAAIAAhyIA6AAIAAEZg");
	this.shape_3.setTransform(-32.875,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg9, new cjs.Rectangle(-73.2,-26.1,146.4,52.3), null);


(lib.darg8 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.45,-0.1,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBJIAAhwIgeAAIAAgpIAeAAIAAgzIA3AAIAAAzIAkAAIAAApIgkAAIAABoQAAALAFAGQAEAEANAAQAJABAHgCIAAArQgQAEgSAAQg6ABgBg8g");
	this.shape.setTransform(44.575,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBjQgUgJgLgRQgMgQAAgTIA1AAQAAAPALAIQAKAHARABQAQAAAHgHQAJgFAAgLQAAgJgKgGQgKgHgWgEQhLgPAAgwQAAgcAYgSQAWgTAlAAQAoAAAYATQAYATgBAeIg4AAQAAgMgHgIQgIgIgQAAQgOAAgHAGQgIAHAAAKQAAAJAJAGQAJAGATAEQAWAEAOAFQAsAQAAAnQAAAdgYASQgZARgnAAQgZAAgVgJg");
	this.shape_1.setTransform(27.8,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAXgNQAWgOAbAAQAsAAAZAbQAYAcAAAxIAAAWIiEAAQACAVAOAMQAOAMATAAQAhAAASgXIAbAeQgMASgWAKQgVAKgaAAQgtAAgdgcgAgYg0QgKAMgDAVIBNAAIAAgEQAAgUgKgKQgKgJgSgBQgPABgLAKg");
	this.shape_2.setTransform(7.25,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiCVIAAiFQABgRgIgJQgIgIgSAAQgYAAgKASIAACVIg4AAIAAkoIA4AAIAABuQAWgaAggBQBFAAABBOIAACHg");
	this.shape_3.setTransform(-14.75,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTBsQgfgkAAhAIAAgQQAAgpAPgfQAOgfAagQQAbgRAiAAQAxAAAeAaQAeAaAEAwIg6AAQgCgcgNgMQgNgMgbAAQgcAAgOAVQgOAUgBAsIAAAUQAAAuAOAVQAOAVAdAAQAaAAANgMQAOgMABgaIA7AAQgDAtgeAbQgfAagxAAQg2AAgfglg");
	this.shape_4.setTransform(-38.5,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg8, new cjs.Rectangle(-73.2,-26.1,146.4,52.3), null);


(lib.darg7 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.45,-0.1,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHB5QgWgdAAg0QAAgvAWgeQAVgdAnAAQAdABAUAWIAAhqIA4AAIAAEoIgyAAIgDgXQgVAaggAAQglAAgWgdgAgmAtQAAAdALAQQAKAPASAAQAaABALgWIAAhTQgKgVgaAAQgoAAAABBg");
	this.shape.setTransform(34.775,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBaQgUgRAAgcQAAggAZgRQAZgSAtAAIAaAAIAAgNQAAgOgHgIQgIgKgPABQgOgBgIAIQgIAGAAAMIg4AAQAAgSALgPQALgQAUgJQAVgJAZAAQAnAAAWAUQAXATAAAjIAABaQAAAeAIAPIAAAEIg4AAQgEgIgCgLQgUAWgfAAQgfABgVgTgAgkAnIAAADQAAAKAHAHQAIAHAMAAQAMAAALgGQAKgFAFgKIAAgkIgVAAQgpAAgDAeg");
	this.shape_1.setTransform(13.4,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAWgNQAXgOAcAAQAqAAAZAbQAZAcAAAxIAAAWIiFAAQADAVAOAMQANAMAVAAQAgAAASgXIAbAeQgMASgVAKQgWAKgaAAQgtAAgdgcgAgXg0QgLAMgDAVIBNAAIAAgEQgBgUgJgKQgKgJgRgBQgQABgKAKg");
	this.shape_2.setTransform(-7.75,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5CNIAAh5IhxAAIAAB5Ig6AAIAAkZIA6AAIAAByIBxAAIAAhyIA6AAIAAEZg");
	this.shape_3.setTransform(-32.625,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg7, new cjs.Rectangle(-73.2,-26.1,146.4,52.3), null);


(lib.darg6 = function(mode,startPosition,loop,reversed) {
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
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-6.95,-8.45);

	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.45,-0.1,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.mcTT}]}).wait(1));

	// Layer_3
	this.mcTT_1 = new lib.mcTxt();
	this.mcTT_1.name = "mcTT_1";
	this.mcTT_1.setTransform(-4.65,-5.65,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.mcTT_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhCVIg1hUIgUAUIAABAIg4AAIAAkoIA4AAIAACjIAKgOIA1g+IBEAAIhMBWIBSB7g");
	this.shape.setTransform(36.3,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBQQgZgcAAgzIAAgDQAAgwAZgdQAagcArgBQAoABAXAWQAYAWAAAlIg0AAQAAgQgKgLQgKgJgQgBQgSABgKAOQgKAOAAAgIAAAFQAAAgAKAOQAKAOATAAQAQABAJgJQAKgJAAgOIA0AAQAAAVgLASQgMASgTAJQgUAKgYAAQgsAAgagcg");
	this.shape_1.setTransform(14.25,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAWgNQAXgOAcAAQAqAAAZAbQAZAcAAAxIAAAWIiFAAQADAVAOAMQANAMAVAAQAgAAASgXIAcAeQgNASgVAKQgWAKgaAAQgtAAgdgcgAgXg0QgLAMgDAVIBNAAIAAgEQgBgUgJgKQgKgJgRgBQgQABgKAKg");
	this.shape_2.setTransform(-6.75,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA4CNIhvi5IAAC5Ig7AAIAAkZIA7AAIBwC5IAAi5IA6AAIAAEZg");
	this.shape_3.setTransform(-31.65,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg6, new cjs.Rectangle(-73.2,-26.1,146.4,52.3), null);


(lib.darg5 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.4,-0.35,1.9943,1.6265,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBjQgVgJgMgRQgLgQAAgTIA1AAQABAPAKAIQAKAHAQABQARAAAIgHQAIgFAAgLQAAgJgKgGQgKgHgWgEQhLgPABgwQAAgcAWgSQAXgTAlAAQAoAAAYATQAYATAAAeIg4AAQAAgMgIgIQgIgIgQAAQgNAAgIAGQgIAHAAAKQAAAJAJAGQAJAGATAEQAVAEAPAFQAsAQAAAnQAAAdgZASQgYARgnAAQgZAAgUgJg");
	this.shape.setTransform(56.3,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BrIAAjRIA1AAIABAZQAQgcAegBQAJABAIACIgBA1IgUgBQggAAgIAWIAACIg");
	this.shape_1.setTransform(39.925,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAXgNQAWgOAbAAQAsAAAZAbQAYAcAAAxIAAAWIiEAAQACAVAOAMQANAMAVAAQAgAAASgXIAbAeQgMASgWAKQgVAKgaAAQgtAAgdgcgAgYg0QgKAMgDAVIBNAAIAAgEQAAgUgKgKQgKgJgSgBQgPABgLAKg");
	this.shape_2.setTransform(21.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxCLQgVgKgMgOIAZgiQAVAXAeAAQAVAAAMgMQANgMAAgWIAAgLQgUAWgfAAQglAAgXgdQgYgeABgwIAAgCQAAgwAWgeQAXgdAnAAQAhAAATAYIADgUIAyAAIAADJQABAcgMAUQgNAUgXALQgWALgeAAQgXAAgWgJgAgbhVQgMAQAAAhQABAdAKAPQAMAQATAAQAZAAAMgTIAAhXQgLgTgZAAQgUAAgLAQg");
	this.shape_3.setTransform(-1.35,7.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBrIAAiGQAAgRgHgIQgIgIgSAAQgXAAgMAUIAACTIg3AAIAAjRIA0AAIACAYQAWgcAlAAQAhAAARAUQAQATAAAoIAACGg");
	this.shape_4.setTransform(-23.375,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbCSIAAjQIA3AAIAADQgAgWhfQgIgIgBgNQAAgNAJgIQAJgIANAAQAOAAAIAIQAJAIAAANQAAANgJAIQgIAIgOAAQgNAAgJgIg");
	this.shape_5.setTransform(-39.65,-0.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhbCNIAAkZIC3AAIAAAvIh9AAIAABJIBvAAIAAAuIhvAAIAABzg");
	this.shape_6.setTransform(-54.925,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg5, new cjs.Rectangle(-99.7,-32.5,199.4,65.1), null);


(lib.darg4 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-0.45,-0.1,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBjQgVgJgMgRQgLgQAAgTIA1AAQABAPAKAIQAKAHARABQAPAAAJgHQAIgFAAgLQAAgJgKgGQgLgHgVgEQhKgPAAgwQgBgcAXgSQAYgTAkAAQAoAAAYATQAYATAAAeIg5AAQABgMgIgIQgIgIgQAAQgOAAgHAGQgIAHAAAKQAAAJAJAGQAJAGAUAEQAUAEAPAFQAsAQAAAnQAAAdgYASQgZARgnAAQgZAAgUgJg");
	this.shape.setTransform(33.95,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAXgNQAWgOAbAAQArAAAaAbQAYAcAAAxIAAAWIiEAAQACAVAOAMQAOAMATAAQAhAAASgXIAcAeQgNASgWAKQgVAKgaAAQgtAAgdgcgAgYg0QgKAMgDAVIBNAAIAAgEQgBgUgJgKQgKgJgSgBQgPABgLAKg");
	this.shape_1.setTransform(13.45,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBPQgbgcAAgzIAAgBQAAgfAMgYQAMgZAXgNQAWgNAdgBQAqABAbAZQAbAaACAtIABANQAAAwgbAdQgbAdgtAAQgsAAgbgdgAgfgvQgMARABAgQgBAeAMAQQALAPAUAAQAUAAAMgPQALgQAAgiQAAgdgLgQQgLgPgVgBQgUABgLAPg");
	this.shape_2.setTransform(-8.65,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcCNIAAjqIhWAAIAAgvIDlAAIAAAvIhWAAIAADqg");
	this.shape_3.setTransform(-32.125,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg4, new cjs.Rectangle(-73.2,-26.1,146.4,52.3), null);


(lib.darg3 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.hit_btn();
	this.btn.name = "btn";
	this.btn.setTransform(-1.5,-0.4,1.4641,1.1873,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-7,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBJIAAhwIgeAAIAAgpIAeAAIAAgzIA3AAIAAAzIAkAAIAAApIgkAAIAABoQAAALAFAGQAEAEANAAQAJABAHgCIAAArQgQAEgSAAQg6ABgBg8g");
	this.shape.setTransform(31.675,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQANgZAVgNQAXgOAbAAQArAAAaAbQAYAcAAAxIAAAWIiEAAQADAVANAMQAOAMATAAQAhAAASgXIAcAeQgNASgWAKQgVAKgaAAQgtAAgdgcgAgYg0QgKAMgDAVIBNAAIAAgEQgBgUgJgKQgKgJgSgBQgPABgLAKg");
	this.shape_1.setTransform(14.7,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBQQgdgcAAgvIAAgFQAAgfAMgZQAMgZAXgNQAWgOAbAAQAsAAAZAbQAYAcAAAxIAAAWIiEAAQACAVAOAMQAOAMATAAQAhAAASgXIAbAeQgMASgWAKQgVAKgaAAQgtAAgdgcgAgYg0QgKAMgDAVIBNAAIAAgEQAAgUgKgKQgKgJgSgBQgPABgLAKg");
	this.shape_2.setTransform(-6.7,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbCNIAAkZIC3AAIAAAvIh9AAIAABJIBvAAIAAAuIhvAAIAABzg");
	this.shape_3.setTransform(-27.675,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg3, new cjs.Rectangle(-74.2,-26.1,146.4,52.3), null);


(lib.body = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CA8158").s().p("AhfgJQjDgCjngsIG3AeIAfAoIAcgtIIhAZIoWgBIgkA+g");
	this.shape.setTransform(137.3763,203.4633,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA8158").s().p("Ai7ACQCzgkDEAwQizgQjEAEg");
	this.shape_1.setTransform(137.25,281.2163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E43941").s().p("AkkCsQi6gqiYh7QBJhHCkg1QCcgxDDgTQDEgSCvAUQC8AWByA+QivCvkABLQiVAsiNAAQhnAAhjgXg");
	this.shape_2.setTransform(136.1065,157.4877,0.2195,0.2195);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEDEDE").s().p("AkSByQjzgCiJiUQgSgpACglQE/CNF6gMQEcgJFohlQgPA8gWAoQicBGkLAZQigAPjmAAIhfgBg");
	this.shape_3.setTransform(136.1482,146.703,0.2195,0.2195);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AnQBZQiPhKgvhsQgSgpACglQE/CPF6gMQEcgJFohnQgPA8gWAqQg5BsiQAzQilA5lOAGIgSAAQjcAAighTg");
	this.shape_4.setTransform(136.1482,147.9491,0.2195,0.2195);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B31E27").s().p("AjzGeQi6griXh6QhohUhMhwQhGhngjhsQhDjSAkgvQArg5DXBkIATAIQE/CPF6gMQEdgJFohnIBjgdQBsghgaCMQgRBYg3BwQguBbhIBSIgiAjQiuCwkBBMQiUAsiOAAQhmAAhkgXg");
	this.shape_5.setTransform(135.0161,152.1797,0.2195,0.2195);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA5C37").s().p("AA+GXQgIgSAPgIQBjg0AphXIACgEIAMgnIAAAAIAAgCIAAgTIgBgFIgHgTIgEgIIgKgRIgEgGIAAgBIgDgDQgFgHgJgHIgGgGIgDgDIgCgBQgkgbgwgLIgLgCIgDAAIgUgBQgUgBgXADIgCAAIglAIQgRAEgcAIQgsAPghATQgRAIgPALIgIAHIgJAKQgMANgTgFQgTgFgEgSQgkiXAMhrQAIhJAPhDQAThZAbgxQAMgWAYALQAYAKgGAYIgSBCQgMApgGAaQgNA+gHA+QgKBTATBrIAggSQA1gZA4gPQB0gdBVAgQA6AWAgAjQAdAdATAvQAZBAgzBQQg5BahsAqQgEACgEAAQgKAAgFgOg");
	this.shape_6.setTransform(136.8501,126.0061,0.2195,0.2195);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(170.6,113.2,0.2195,0.2195,0,0,0,51.5,51.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494746").s().p("Ah5HXQjYg7hrizQhqixA0jHQA1jICjhcQCnhfDWA7QDaA8B2C2QB1C2g0DEQg0DGiwBcQhrA4h7AAQhOAAhVgYg");
	this.shape_7.setTransform(170.8842,112.2509,0.2195,0.2195);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED875E").s().p("Ah+HnQjag8h0i5Qh1i4A1jJQA1jJC/hlQC/hkDZA7QDaA8BzC5QB1C4g1DJQg1DKi/BkQh4A/iCAAQhNAAhQgWg");
	this.shape_8.setTransform(171.2512,110.9648,0.2195,0.2195);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(101.5,113.5,0.2195,0.2195,0,0,0,52,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494746").s().p("AhdHZQjdguh2ijQh2iiAnjIQAojIC5huQC4htDcAtQDaAtBtChQBqCdgoDKQgoDLisBuQh9BQiTAAQg6AAg+gNg");
	this.shape_9.setTransform(101.2643,112.4194,0.2195,0.2195);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED875E").s().p("AhhHuQjcguiAiwQh/ixAojMQAojNC5hwQC5hwDcAtQDcAuCACwQB/CxgoDLQgpDNi4BxQiDBQiWAAQg8AAhAgNg");
	this.shape_10.setTransform(101.5239,110.9977,0.2195,0.2195);

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(170.9,131.8,0.2196,0.2196,0,0,0,90.4,93.2);
	this.instance_2.alpha = 0.3008;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(101.25,133.1,0.2196,0.2196,0,0,0,90.4,93.2);
	this.instance_3.alpha = 0.3008;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_3();
	this.instance_4.setTransform(134.15,62.7,0.2196,0.2196,0,0,0,325.2,200.6);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#672806").s().p("Am3DZQgagFgQgWQgQgUABgcQAAgdAUgRQAvgoAzgeQAogYAxgZQCkhVC+g5QBWgZBegQQBKgLAhAAIAwADIAWACQANACAJgBQAVgCAQARQAPARABAVQABAWgRAPQgPAOgWACIgBABIgGADIguAPQgqAOgQAEQhJAQgkAKIhsAdQhgAbhgAoIgOAGQhHAehJAlIhNAqQgwAageAOQgTAJgSAAIgNgBg");
	this.shape_11.setTransform(96.1164,91.0466,0.2195,0.2195);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#672806").s().p("AF5DsQgjgThFgsQhEgsglgUQh2hChkgrQhHgbh0goQhHgVgigMQgUgHgQgHIAGACIgJgEIADACIg6gZIgJgBQgVgEgLgWQgKgTAFgVQAFgWAUgKQATgJAWAEIABAAIgDgBIAJAAIAIgBIAZAAQAdAAAWACQAzAGBCAQQCiApC/BfQBYAsBIAtQBsBFAzAzQATATACAbQABAbgQAVQgRAVgaAFQgHACgIAAQgSAAgRgKg");
	this.shape_12.setTransform(174.6039,91.1246,0.2195,0.2195);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#884E2C").s().p("EAqNAYdQgMhVgUhaQhKlEiolhQiAkOjeloQhJh1gagnQg5hYgzg/QhoiCihhyQkGi3lvizQlHiflhhyQisg4iugrQg+gPh9gbQh9gbg+gPQhsgbjshaQjchTh/gaQkkg+kvA3QkoA1kECbQkHCci4DrQgFAHgHgGQgIgFAFgHQAwg/AugyQDJjbEUiJQEQiGEsgfQE1ghEhBWQBKAWBrApIC0BDQCWA3DmAwQLrCeKJFWQCkBXCjBkQBZA4A9ArQBQA4A9A3QB0BoB0CwQBMBxB3DHQDZFrB5EeQCbFuAqFQQACANgOABIgEAAQgLAAgCgKg");
	this.shape_13.setTransform(149.8755,34.5214,0.2192,0.2192);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#884E2C").s().p("ASERqQgHgTgegfQgNgOgogiQgigegRgUQgjgohVhpQgzhAhCgxQgYgRgrgbIhDgsIhHgwQgpgcgfgSQgygbhmgxQhmgxgxgcQgegQgogaIhEgtQgrgbhdg3Qhag0gvgeQhLgwg1gtQgZgVghghIg5g5QgogmhUhOQhShLgqgpQiBh+hciGQhWh8hPipQgnhTgSgzQgchNgHhBQAAgKAKgBQALgCACAKQAEAcAKAhQAPA0ApBZQAXAzApBPQBVChBuCJQBPBhCaCQQCkCXBOBOQAyAxBIAyQAyAiBTAxICJBQIBEAsIBEArQA5AkBbAsICYBKQBTAqA/AtQA3AnBQA1QBTA4AsArQAaAaAiArIA4BIQAqA0AOAQIAyAyQAfAgAPAUQAXAeAKAeQAEANgNAEIgFAAQgJAAgDgJg");
	this.shape_14.setTransform(180.3178,69.5231,0.2192,0.2192);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#884E2C").s().p("AL7JQIg4gUQhugnh1giQiYgshMgZQjVhGi3h6Qhbg8hUhKQgZgWgnglIg/g7QhbhTgmgnQhGhHgshAQg2hNgXhLQgcheAThFQACgHAIABQAIAAAAAIIgCApQgBBOAoBRQAfBBA8BJQAvA5BHBEIB+B0IBFA/QAoAlAfAZQBPBABhA5QCsBoDiBEIDjBCQCMArBQApQAMAGgGAOQgEAKgJAAIgGgBg");
	this.shape_15.setTransform(112.1034,58.2227,0.2192,0.2192);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#884E2C").s().p("AmpWxQgQgagOgdQg3h2gXiaQgXicANiCQAEgeAIgtIANhLIAcioQARhZAVhIQAJgfAUg0IAehTQAVg+AXhoQAdiCAKglQAYhZAihDQAdg6A5hIQAmgvBFhIQBWhbAXgaQA7hCAkg4QAmg6AhheIAehSQARgvAQghIBHiMQAqhXAfgtQAWggAagaQAKgLAWgKIAigSQAGgCAEAFQAEAEgFAFQgUATgGAKQgMAUgJAJQgsAtgpBMQgtBZgXArIglBFQgPAggSAvIgdBQQgRAugPAgQgzBtiICMQimCtgqA8QgtBAggBSQgZBBgXBcIgTBRIgTBSQgUBKgiBZQgwB7ghDGIgdCqQgNBHgDA+QgFCNAdCTQAfCcA8BkQAFAIgJAFQgDACgDAAQgEAAgDgFg");
	this.shape_16.setTransform(80.4835,78.7021,0.2192,0.2192);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#884E2C").s().p("AhKbLQgngRgggYQg3gqgphIQgWglgqhkQgXg2g9h7Qg4hxgahBQgshsgNhgQgKhUAPhqIAQhlQAKg9AEgpQANiTAIhJQAHhBAdiZQAciRAShAQANgrAXg8IAohmQAsh0AYhaQBvmfC/lvQAthWAsg9QA3hKA/gyQBFg1A/giQBLgpA3AEQAIABAAAHQAAAIgIAAQgYABgjAQQg5AYhOA2QhFAxgnArQg2A7gyBZQgeA1gyBtQheDLhAC4QglBqgZBcIgbBlQgRA7gOAqQgXBEg1CFQgiBWgZByQgWBogSBkQgNBOgNCMQgOCWgJA8IgPBbQgIA1gDAmQgFBeAcBoQAXBTAwBoIAsBaIAtBaQAOAdATAtIAhBKQAjBSAgAoQAtA5BMAiQAUAIgLATQgIANgMAAQgFAAgGgCg");
	this.shape_17.setTransform(61.343,66.9379,0.2192,0.2192);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#975731").s().p("EgzLAgtQiki4gbkSQgYj7BVmkQA8kkC4qlQCmphF4oLQGdo8I9lKQKDlyL7gNQNXgPOyG4QMxF8HeKmQF/IfCPK4QBpIDgnHtQgOCwgcBxQgZBmgPgbQi1lMitjvQlinrkjheQqTjUmanoQiAiYhYijIg+iDQBdIVEGFwQCEC5BwBOQn0jIjahEQhEgVgfgFIgSgCQByAhChBqQBRA1A6AvQoJgnnIiEQitg2gqgLQg8gQARAeQAfA7DrB/QB2A/BvA0QqZBSsKprQj0jBjhjxQhHhLg8hHIgug4QhQEmi8D7QheB8hOBDIhGmhQnoJNjTIwQioG/AQGYQALEjBnDyQAzB5AxA/QlciUiii2g");
	this.shape_18.setTransform(133.2255,63.0335,0.2196,0.2196);

	this.instance_5 = new lib.CompoundPath();
	this.instance_5.setTransform(136.05,96.85,0.2196,0.2196,0,0,0,332,361.4);
	this.instance_5.alpha = 0.3984;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7B690").s().p("EgB+A35QunhEpmkZQoJjuk8mVQjskuinnVQgmhthWkQQhJjmgvh4IgdhJQgTglgWhHQgsiQgOiwIgCgNQgqo4EIqwQFwvBOdwrQLWtHPXgdQMwgZNxINQF1DeFTEpQE4ESDrEmQDiEbBpDsQBqDxgvCEQiRGdhzH0QggCKgYBzIgJAsQgrDOgnDgQgyEgg0FnQg7GYi6GVQjUHPlJFaQl7GPnuDFQnMC5obAAQh1AAh7gJg");
	this.shape_19.setTransform(135.9179,96.7492,0.2196,0.2196);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#884E2C").s().p("EAubArCQhEgDqwg2QrXg5oYgdQ77hjqtCIQuIC0odleQiohthwiVQgkgvgZgtIgSgjQk6q1AQrGQAMo3DdooQCemKD3lcQB7iuBchfQh6g3hjAUQhLAOhLA+QhOBHgjAaQg6AsgxgOQgogMgJgsQgJgsAegfQEPkWFlASQCzAKB8BAQAZhchchdQhehfjChKQgVgIgBgYQAAgXAVgJQDFhPDBCYQBhBMA5BcQhVj8Bjj8QBfj1D4jGQAagVAaAWQAZAVgOAfIiZE+Qh+EHgQA4QgHAcARgZQCHi1BThJQBWhLClhPQPznjQzDqQOhDKM7KyQFvEyEtFxQEgFhDBFwQC/FrBGFCQBHFLhCDyQiVInijJiQhiFhg9BwQglBUgeA9Qg4BygaAAIgBAAg");
	this.shape_20.setTransform(131.6816,61.2012,0.2196,0.2196);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC7443").s().p("ABaGuQhKgfg4hAQhFhMgoh1QgnhzgThyQgXiTAPh5QADgZAUgUQAagbADgFQBEBRAnBrQAeBSAPBrQAPBwAQAjQAeBFBaA7QAIAFAnAiQBBA+g5BDQgWAZggANQgSAHgPAAQgKAAgIgDg");
	this.shape_21.setTransform(61.4916,122.6132,0.2195,0.2195);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED875E").s().p("ADZKHQgRgFgSgDQh7gViJhzQiHhwhnijQhtitgliuQgpjCA5ieIAPgkQAhhIAzg7IAVgWIgBADQg4BwgZBpQghCLAXBxQAlCwC8EKQBeCFBWBiIAcAWQAlAbAoAVQB9BCBkgMQBjgLBAA3QgrAIg3AAQhJAAhcgOg");
	this.shape_22.setTransform(56.2297,122.9591,0.2195,0.2195);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7956B").s().p("ACNHvQkGhgh5jDQglg+gjhbQgmhkgLgUQgthTAHhqQAHhlAwhLQAzhOBJgLQBTgLBWBSQAaAZARAVQBDBRAnBrQAeBSAPBrQAQBwAQAjQAeBFBaA7QAMAIAOALQAzArAVA5QAWA5gSArQgTAvg8AKQgQADgTAAQg7AAhRgeg");
	this.shape_23.setTransform(58.1398,122.0388,0.2195,0.2195);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7B690").s().p("AB9K2IgkgGQh6gViKhzQiIhwhnikQhsitglivQgpjDA6ieIAPgjQAehDA1g9IAVgXQDtjtEtFfQCYCwBoDgIBPCmQBUDAAZB/QAHAiACAgQAHBogqA7QgtBAhoATQgrAIg3AAQhJAAhcgOg");
	this.shape_24.setTransform(58.249,121.9391,0.2195,0.2195);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC7443").s().p("AiaGlQgfgOgVgbQg3hEBDg8QAqgiAGgEQBcg4AhhEQAQgiAThwQAThrAhhQQArhqBGhPQADAFAaAcQASAUADAaQALB5gdCSQgWBygsByQgsBzhHBKQg6A+hLAdQgIADgJAAQgPAAgTgIg");
	this.shape_25.setTransform(196.6175,122.5587,0.2195,0.2195);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ED875E").s().p("AnvJ/QBDg2BiAPQBkAPB/g/QBAggAqgiIA6hAQBFhQA+hSQDFkEArivQAbhwgciMQgWhqg0hxIgBgDIAUAXQAyA8AeBJQAIATAFASQA0CfgwDBQgrCthzCpQhsCgiLBsQiNBuh7ASQgSACgSAFQhNAJhAAAQhFAAg1gLg");
	this.shape_26.setTransform(201.7432,123.0242,0.2195,0.2195);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7956B").s().p("AlKICQg7gNgSgvQgQgsAXg4QAYg4A0gqQARgNAKgFQBcg4AghEQARgjAUhvQAThrAhhRQAqhqBGhOQARgUAbgZQBahQBSAOQBIANAxBQQAuBMADBlQADBqgvBSQgMATgqBjQgmBbgnA8QiADAkJBYQhOAag5AAQgWAAgTgEg");
	this.shape_27.setTransform(199.9394,122.0359,0.2195,0.2195);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7B690").s().p("AmXKxQhngWgrhBQgog+ALhmQAEgfAIgjQAdh+Bbi+IBVikIBLiDQBfiZBjhrQE5lWDkD0IAVAXQAxA8AdBHQAIATAGARQA0CggvDBQgrCuhyCpQhtChiLBsQiOBvh7ARIgkAEQhNAKhAAAQhFAAg2gLg");
	this.shape_28.setTransform(199.799,121.9395,0.2195,0.2195);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA9364").s().p("AgZG5Qk2gelJhNQAviaAOjSIAFi1QgCiJCqhAQCWg4DmAPQDcAPCqBFQC3BLATBiQANBEANC7QALCZAbBMIAMAnQAKAfAlBEQilAfjNAAQiWAAiqgQg");
	this.shape_29.setTransform(135.7446,171.9908,0.2196,0.2196);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AF86").s().p("AtlMcQjbg4CHjPQAqhABghrQBnhxAVgeIAMgPQBAhNAriJQAviaAOjTIAFi1QgCiJCqhAQCWg4DlAPQDdAPCqBFQC3BLATBiQANBEANC8QALCZAbBMIAMAnQAKAeAlBEQAsBUA/BjQA/BkAlAuQB1CRjXA9QigAunnAXQgrACoJBHQlBAsiEAAQgwAAgXgGg");
	this.shape_30.setTransform(133.723,179.5662,0.2196,0.2196);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DF6A50").s().p("AHjR3QhRmfhSm1QiitoABhtQABgzgzgTQgsgRhEAKQhBAKgyAbQg0AcgDAeQgRDbizM+QhaGghWF0QjkACk9gQQDKmgCOl8QDfpYAAlIQAAkxhui2QhChwhXgoIACAAQAZAHCWAxQCsAyCoAVQILBEG0jMIgnBFQgwBWgnBZQh/EdABDRQAABnAzDeQA2DqBVD7QDaKDD1D8QkngLk5hEg");
	this.shape_31.setTransform(136.7821,380.7732,0.2196,0.2196);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF7155").s().p("EARnAi9QkngLk5hEQhRmfhSm1QiitpABhtQABgzgzgTQgsgRhFAKQhAAKgyAbQg0AcgDAeQgRDbizM/QhaGghWF0QjkACk9gQQo5gdmjhQQpChujSjAMAH7g7fQALhQA9g1QA8g1BRAAMBCKAAAQBNAAA7AzQA5AzALBNMAH2A64IhrBZQiPBqizBVQoFD6p1AAQhAAAhAgCg");
	this.shape_32.setTransform(135.9916,358.4858,0.2196,0.2196);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7A071").s().p("AjsFyQi+g2gxiJQgxiIBOhGQBDg9CJAAQBrAAC5iLQBEgzA6g2QA0gyAKgUIAfAVQAmAbAiAeQBtBhAdBbQATA6gEBSQgEBcgfBQQhQDNjLAQQhJAGhDAAQicAAh0ghg");
	this.shape_33.setTransform(30.9801,348.668,0.2198,0.2198);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7A071").s().p("AivGNQjLgQhQjNQgfhQgEhcQgEhRATg7QAdhbBthhQAjgeAmgbIAfgVQAJAUA1AyQA5A2BFAzQC4CLBrAAQCKAABCA9QBOBGgxCIQgxCJi9A2Qh1AhicAAQhDAAhJgGg");
	this.shape_34.setTransform(239.693,348.668,0.2198,0.2198);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E79771").s().p("AhYBdQglgnAAg2QAAg2AlgmQAlgmAzAAQA0AAAlAmQAlAmAAA2QAAA2glAnQglAmg0AAQgzAAglgmg");
	this.shape_35.setTransform(163.5716,233.5224,0.2196,0.2196);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E79771").s().p("AhYBdQglgnAAg2QAAg2AlgmQAlgmAzAAQA0AAAlAmQAlAmAAA2QAAA2glAnQglAmg0AAQgzAAglgmg");
	this.shape_36.setTransform(105.7194,233.5224,0.2196,0.2196);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E79771").s().p("AhYBdQglgnAAg2QAAg2AlgmQAlgmAzAAQA0AAAlAmQAlAmAAA2QAAA2glAnQglAmg0AAQgzAAglgmg");
	this.shape_37.setTransform(135.532,305.1365,0.2196,0.2196);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7AF86").s().p("EhMkBHsQhAguAZnQQAHiEASjMQAOitAAgUQAAg+gngZQgMgIgPgDIgMgBIhaFOQhoFnhBB7QggA9gaBNIgkBuQgTAzgWAVQgbAbguAAQhSAAgfhBQgRgiAAgyQAAgFB4mlQB9m1APhmQAQhtgKgFQgDgCgKAIQgMAJgHAAQgNAAkdHQQkqHJhPgeQhRgfgGhcQgCgdAGgrIAGg0QAAgPCDjXQDhlwA0hZQGCqJheAAQgvAAhfAZQhyAhg+AQQjpA6h8g6QiNhEA5hzQAxhhCLhDQAvgWBBgQIB3geQClguDJiFQDTiLCIg4QBEgcAaAAQC2mkCClCQA5iNEivrQEPurA4hdQBBhtAxkAQA3lUAnjTQAThoAxk1QA2lXAhi+QB5q1BxkjQB9lED+iYQByhECng2QB8goDkg2QCggnFvglQHLguHMgEQE3gCJjgLQIhgGGbATQKfAgJbBuQI8BqB6BkQD7DQCuHrQBkEbBIF7QAaCICIN1QCKNPA/CIQBJCdB6FxQBtFLBVExQBrF+DaJpQD/LVBFAhQA7AcEAChQEfC0AvAbQAnAWBaAbICjAyQDOBFAvBoQA1B1hzApQgtAQg6gEQg3gDgogTQhBgfjpg+Ijdg3IAHBBQANBQAgBOQANAeEhInQETIOAuCCQAyCQhcAjQghANgtgEQgmgEgYgLQgggQkenPIkXnNIAnCcQAuC+AgCkQBoIOhBBNQhBBNhAgSQgVgGgSgPIgNgNQhOkXhYkNQivoagxAvQgaAYAICgQAFBdAaD4QAaD3AFBoQAICrgaApQgzBShfhCQgjgZgbgkQgZgiAAgUQAAg8g7mXQg/m6gihQQgRgqgOBRQgJA7gMClQgeGkgWBUQgSBFgkAgQgfAcgmgGQgigEgZgdQgZgdAAglQAAhrghluQglmjgiiTQgdh8gHmLQgGlqgKgJQgLgLlNqSQlqrNhiitQiGjtihm4QiemvgojjQgjjJkFsUQj5rsgwhcQgjhEAEI4QAEIcAXDcQANB+gNLIQgNKrANA9QASBXBrRgQBoRKAcF7Ih4AwQjvBlh4AxQjQBUidAuQlGBgloAoQjQAWj7AIQh6oQgOgbQgKgTgvgQQgugRg7gHQiTgRg2AzQgaAZhhF+InQAHQkpAGimABQh+ABlfASQksAQixgFQhcgDhTgHQAwl/AiozQAio1AOqWQAQr2go4mIgr2PQgigQiQHnQhZEuhsGaQgkCMgpFNQglEtgpB1Qg0CTjgH7Qi6GmhtDqQhoDfpvSjQAQChg6FtIgpD+QgUB6AAAmQAABEgNGlQgNGlAAAfQAAA/gqAkQgyAqhagSQhOgPgNlXQAAlzgNg+QgQhOgggGQgLgCgKAFIgJAGIhAFtQhBGMAACbQAACqhOAlQgVAKgYAAQgyAAg9gsg");
	this.shape_38.setTransform(135.5738,287.0147,0.2198,0.2198);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7A071").s().p("ApZRPQhGkWjCsuQjBswhOk0IGhAIQBYACC/ABQC3ABBgADQBhACCMAHIDvANQC9AIBtABQClACCGgNQAgDyAlCNQA6DbBiS3QlAEBotBWQkEAokmAAQiVAAiegLg");
	this.shape_39.setTransform(169.2923,389.5983,0.2196,0.2196);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7AF86").s().p("EgBQBJOQhIglg1hwQgXgyAIhNQAQhkAFhBQAFhJgJimQgJiZAHg1QAIg5AXhsIApi/QAwj5gPijQgPiZhQnjQhfpAgTiGQhurDhLoQQiOvyAQkFQAJiQgxivQgmiHhXjFQhrjng1h4QhdjVgxihQgihygsixQhHkWjBsuQjBsxhOk0IGgAIQBZACC/ABQC2ABBhADQBgACCOAHIDvANQC9AIBrABQCmACCFgNQAhDyAlCNQA6DbBhS4IBTQvQAnH2AIAYQAYBDAnCTQA+DmAvD9QCTMIghLJQhJYzAAFDQAACPAhBYQAWA5BGCJQDlH+BsCyQA0BWCsDCQCGCsgvBZQgSAig3ASQhLAYhfgeQgfgKgUAMQgNAHgWAdQgyBAhGAJQhaAMhEglQgVgMgQgPIgMgNIgMAOQgQARgUAPQhBAvhVAKQhhAKhBhSQgagkgJgJQgPgPgNAUQgQAYgpAbQgwAfg0ALQiRAfheiFQgOgVguBAQg1BMgEACQg0AWgtAAQgqAAglgTg");
	this.shape_40.setTransform(181.679,468.4528,0.2196,0.2196);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7A071").s().p("AkzQgQnog4lahvQBr04A7jhQAliLAhj0QCFANCmgCQBtgBC8gIIDvgNQCMgHBhgCQBhgDC2gBQC/gBBYgCIGhgIQhPE2i2MFQjAMnhDELQivAYjQAAQj5AAkpgjg");
	this.shape_41.setTransform(105.1064,389.0942,0.2196,0.2196);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7AF86").s().p("EgBgBJLQgEgCg0hMQgthAgPAVQheCFiRgfQg0gLgwgfQgpgbgQgYQgNgUgPAPQgJAJgaAkQhBBShhgKQhVgKhBgvIgwguIgMANQgQAPgVAMQhEAlhagMQhGgJgyhAQgWgdgNgHQgUgMgfAKQhfAehLgYQg4gSgRgiQgvhZCGisQCsjCA0hWQBDhvBvjpQA7h8BkjcQBHiJAVg5QAhhYAAiPQAAkzhJ5DQghrJCTsIQAvj9A+jmQAniTAYhDQAIgYAjnDIBMvbQBr05A7jhQAliLAhj0QCFANCmgCQBrgBC9gIIDugNQCOgHBhgCQBggDC3gBQC/gBBYgCIGhgIQhPE2i3MFQi/MohDELQg8DyghBsQgxCihdDUQg2B4hqDnQhXDFgmCHQgxCvAJCQQAQEFiPPyQhKIQhvLDQgTCKheI8QhQHkgPCYQgPCkAwD4IApC/QAXBsAIA5QAHA1gICZQgKCmAFBJQAFBBAQBkQAIBOgXAxQg1BwhIAlQglATgrAAQgsAAg1gWg");
	this.shape_42.setTransform(92.8405,468.4528,0.2196,0.2196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_5},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,271.2,571.9), null);


(lib.start_screen = function(mode,startPosition,loop,reversed) {
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
	this.frame_40 = function() {
		this.stop();
		this.parent.fStartGamneAnim();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(621.85,279.45,0.2293,0.3989,0,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(41));

	// Layer_1
	this.instance = new lib.StartAnim();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.0117},29).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.drag_base = function(mode,startPosition,loop,reversed) {
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
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(1));

	// Layer_4
	this.instance = new lib.divider();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(34));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9KBAAMAAAh//MB6VAAAMAAAB//g");
	mask.setTransform(-23.975,-3.225);

	// Layer_1
	this.instance_1 = new lib.Drop_Base_Anim();
	this.instance_1.setTransform(0,832);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:0},33,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.5,-409,735,815.4);


(lib.game_screen = function(mode,startPosition,loop,reversed) {
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
	this.frame_163 = function() {
		this.stop();
		this.parent.fstartActivity();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(163).call(this.frame_163).wait(1));

	// drag9
	this.drag9 = new lib.darg9();
	this.drag9.name = "drag9";
	this.drag9.setTransform(1151.9,504.15);

	this.timeline.addTween(cjs.Tween.get(this.drag9).wait(164));

	// drag8
	this.drag8 = new lib.darg8();
	this.drag8.name = "drag8";
	this.drag8.setTransform(1149.7,390.5);

	this.timeline.addTween(cjs.Tween.get(this.drag8).wait(164));

	// drag7
	this.drag7 = new lib.darg7();
	this.drag7.name = "drag7";
	this.drag7.setTransform(1151.9,277);

	this.timeline.addTween(cjs.Tween.get(this.drag7).wait(164));

	// drag6
	this.drag6 = new lib.darg6();
	this.drag6.name = "drag6";
	this.drag6.setTransform(1152.55,163);

	this.timeline.addTween(cjs.Tween.get(this.drag6).wait(164));

	// drag5
	this.drag5 = new lib.darg5();
	this.drag5.name = "drag5";
	this.drag5.setTransform(1034.65,584.25);

	this.timeline.addTween(cjs.Tween.get(this.drag5).wait(164));

	// drag4
	this.drag4 = new lib.darg4();
	this.drag4.name = "drag4";
	this.drag4.setTransform(901.55,499.75);

	this.timeline.addTween(cjs.Tween.get(this.drag4).wait(164));

	// drag3
	this.drag3 = new lib.darg3();
	this.drag3.name = "drag3";
	this.drag3.setTransform(901.65,386.15);

	this.timeline.addTween(cjs.Tween.get(this.drag3).wait(164));

	// drag2
	this.drag2 = new lib.drag2();
	this.drag2.name = "drag2";
	this.drag2.setTransform(901.7,275.15);

	this.timeline.addTween(cjs.Tween.get(this.drag2).wait(164));

	// drag1
	this.drag1 = new lib.drag1();
	this.drag1.name = "drag1";
	this.drag1.setTransform(900.25,161.15);

	this.timeline.addTween(cjs.Tween.get(this.drag1).wait(164));

	// drop4
	this.drop4 = new lib.Drop9();
	this.drop4.name = "drop4";
	this.drop4.setTransform(595.2,679.95,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop4).wait(164));

	// drop5
	this.drop5 = new lib.Drop7();
	this.drop5.name = "drop5";
	this.drop5.setTransform(596.45,498.95);

	this.timeline.addTween(cjs.Tween.get(this.drop5).wait(164));

	// drop7
	this.drop9 = new lib.Drop6();
	this.drop9.name = "drop9";
	this.drop9.setTransform(595.75,422,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop9).wait(164));

	// drop8
	this.drop8 = new lib.Drop4();
	this.drop8.name = "drop8";
	this.drop8.setTransform(595.85,335.1,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop8).wait(164));

	// drop9
	this.drop7 = new lib.Drop1();
	this.drop7.name = "drop7";
	this.drop7.setTransform(595.75,131.15,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop7).wait(164));

	// drop3
	this.drop3 = new lib.Drop8();
	this.drop3.name = "drop3";
	this.drop3.setTransform(155.15,663.4,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop3).wait(164));

	// drop2
	this.drop2 = new lib.Drop5();
	this.drop2.name = "drop2";
	this.drop2.setTransform(154.85,404.1,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop2).wait(164));

	// drop6
	this.drop6 = new lib.Drop3();
	this.drop6.name = "drop6";
	this.drop6.setTransform(156.95,297.95,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop6).wait(164));

	// drop1
	this.drop1 = new lib.Drop2();
	this.drop1.name = "drop1";
	this.drop1.setTransform(156,186.45,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.drop1).wait(164));

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1008.9,372.75,0.667,0.667,0,0,0,291.4,358.4);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.1,103.6,1154.7,604.5);


(lib.Boy_body = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.body();
	this.instance.setTransform(135.5,935.8,1,1,0,0,0,135.5,289.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:289.5},29,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.2,1218.2);


// stage content:
(lib.ui = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		this.fGenerateCreateJSText = function(mc, strText, xx, yy, nLineHeight, nLineWidth, strFont, strColor, strAlign)
		{	
			var tt = new createjs.Text();
			tt.text = strText;
			tt.font = strFont;
			tt.color = strColor;
			tt.textAlign = strAlign;
			tt.mouseEnabled = false;
			tt.x = xx;
			tt.y = yy;
			tt.y = -(tt.getMeasuredHeight()/3);
			tt.lineHeight = nLineHeight;
			tt.lineWidth = nLineWidth;
			mc.tt = tt;
			mc.addChild(tt);
			mc.strText = strText;
			mc.nW += tt.getMeasuredWidth();
			return tt;
		}
		this.audio = new Audio();
		this.playAudio = function (name)
		{
			this.name = name;	
			this.audio.src = "sounds/" + name + ".mp3";
			this.audio.play();	
		}
		
		this.onCompleteAudio = function(strName)
		{
			this.audio.addEventListener("ended", this.var1 = this[strName].bind(this));	
		}
		this.fRemoveChiled = function(name)
		{
			this.removeChild(name);
		}
		
		//CustomGame.rootAnimComplete();
		this.stop();
		var insText = "Drag and Drop the correct names of the parts of the body.";
		var dragText = new Array("Forehead", "Stomach", "Feet", "Toes", "Fingers", "Neck", "Head", "Chest", "Hand");
		var flag;
		var audioFlag;
		var nCount = 0;
		stage.enableMouseOver(10);
		this.initFunction = function () {
			this.mcStart = new lib.start_screen();
			this.mcStart.btn.addEventListener('mousedown', this.fPlayInitScreen.bind(this));
			this.addChild(this.mcStart);
			this.mcStart.btn.cursor = 'pointer';
		}
		this.fPlayInitScreen = function () {
			this.mcStart.play();
		}
		this.fStartGamneAnim = function () {
			this.removeChild(this.mcStart);
			this.mcRubric.play();
			this.mcBody.play();
			this.mcDragPanel.play();
			this.playAudio("instruction");	
			setTimeout(function () {
				this.fLoadGameScreen();
				//this.fstartActivity();
			}.bind(this), 500);
		}
		this.fLoadGameScreen = function () {
			this.mcGameScreen = new lib.game_screen();
			this.addChild(this.mcGameScreen);
			//this.mcGameScreen.scaleX = 0.33;
			//this.mcGameScreen.scaleY = 0.33;
			//this.fPrintDragText();
		}
		this.fstartActivity = function(){
			this.fAddListener();
		}
		
		this.fAddListener = function()
		{
			//console.log("fAddListener");
			for (var i = 1; this.mcGameScreen["drag" + i] != undefined; i++)
			{
				this.mcDragObj = this.mcGameScreen["drag" + i];
				this.mcDropObj = this.mcGameScreen["drop" + i];
				this.mcDragObj._id = this.mcDropObj._id = i;
				this.mcDragObj.xx = this.mcDragObj.x;
				this.mcDragObj.yy = this.mcDragObj.y;	
				this.mcDragObj.hitArea = this.mcDragObj.btn;
				this.mcDragObj.addEventListener("mousedown", this.fPressDragFunction.bind(this));
				this.mcDragObj.cursor = "pointer";
				
			}
		}
		this.fRemoveListener = function()
		{
			for(var i = 1; this.mcGameScreen["drag" + i]!=undefined; i++)
			{
				this.mcDrag = this.mcGameScreen["drag" + i]
				this.mcDrag.hitArea = this.mcDrag.btn;
				this.mcDrag.removeEventListener("mousedown", this.fPressDragFunction.bind(this));
				this.mcDrag.cursor = null;		
			}
		}
		this.fPressDragFunction = function(e)
		{
			//console.log("fPressDragFunction");
			this.mcCurrentElement = e.currentTarget;
			//this.fRemoveListener(e.currentTarget);
			this.addChild(this.mcCurrentElement);	
			this.mcCurrentElement.mouseEnabled = false;
			this.mcCurrentElement.x = stage.mouseX;
			this.mcCurrentElement.y = stage.mouseY;
			stage.addEventListener("stagemousemove", this.stageMouseMove = this.stageMouseMoveEvent.bind(this));
			stage.addEventListener("stagemouseup", this.stageMouseUp = this.stageMouseUpEvent.bind(this));
		};
		this.stageMouseMoveEvent = function(e)
		{
			this.mcCurrentElement.x = stage.mouseX;
			this.mcCurrentElement.y = stage.mouseY;
			stage.update();
		};
		this.stageMouseUpEvent = function(e)
		{
			
			stage.removeEventListener("stagemousemove", this.stageMouseMove, false);
			stage.removeEventListener("stagemouseup", this.stageMouseUp, false);
			this.fCheckDrop()
		}
		this.fCheckDrop = function()
		{
			flag = false;
			audioFlag = false;
			for (var i = 1; this.mcGameScreen["drop" + i] != undefined; i++)
			{
				this.mcDropObj = this.mcGameScreen["drop" + i]
				this.mcDropObj.pt = this.mcDropObj.btn.globalToLocal(stage.mouseX, stage.mouseY);
				if (this.mcCurrentElement.btn.hitTest(this.mcDropObj.pt.x, this.mcDropObj.pt.y)) 
				{
					audioFlag = true;
					if(this.mcDropObj._id == this.mcCurrentElement._id)flag = true;
					break;
				}
			}
			if(flag)
			{
				nCount++;
				this.mcCurrentElement.x = this.mcDropObj.x;
				this.mcCurrentElement.y = this.mcDropObj.y;
				this.mcCurrentElement.scaleX = .8
				this.mcCurrentElement.scaleY = .8
				this.mcCurrentElement.mouseEnabled = false;
				this.playAudio("right");
				if(nCount == [dragText.length])this.showEndScreen();//setTimeout(this.showEndScreen(), 4000);
			}
			else
			{
				if(audioFlag)this.playAudio("wrong");
				createjs.Tween.get(this.mcCurrentElement, { loop: false }).to({ x: this.mcCurrentElement.xx, y: this.mcCurrentElement.yy}, 800, createjs.Ease.getPowInOut(4)).call(this.fEnableCurrentElement.bind(this));
			}
		}
		this.fRemoveListener = function()
		{
			for (var i = 1; this.mcGameScreen["drag" + i] != undefined; i++) 
			{		
				this.mcDrag = this.mcGameScreen["drag" + i]
				this.mcDrag.btn.removeEventListener("mousedown", this.fPressDragFunction.bind(this));
				this.mcDrag.btn.cursor = null;		
			}
		}
		this.fEnableCurrentElement = function ()
		{
			this.mcCurrentElement.mouseEnabled = true;
		}
		this.showEndScreen = function()
		{
			//createjs.Tween.get(this.mcGameScreen, {loop: false}).to({alpha: 0}, 1000, createjs.Ease.getPowInOut(4));
			this.playAudio("welldone");
			this.endScreen = new lib.end_screen();
			this.addChild(this.endScreen);
			//this.fReplay();
		}
		
		this.fPrintDragText = function () {
			for (var i = 1; this.mcGameScreen["drag" + i] != undefined; i++) {
				this.mcDrag = this.mcGameScreen["drag" + i];
				this.mcDrag.mcTT.tt = this.fGenerateCreateJSText(this.mcDrag.mcTT, dragText[i - 1], 0, 0, 0, 200, "32px Roboto", "#FFF", "left");
			}
		}
		this.initFunction();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bOY
	this.mcBody = new lib.Boy_body();
	this.mcBody.name = "mcBody";
	this.mcBody.setTransform(237.95,113.3,0.9988,0.9994);

	this.timeline.addTween(cjs.Tween.get(this.mcBody).wait(1));

	// Rubric
	this.mcRubric = new lib.Rubric_Anim();
	this.mcRubric.name = "mcRubric";
	this.mcRubric.setTransform(611.2,-82.95,0.6667,0.6667,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.mcRubric).wait(1));

	// Drag_base
	this.mcDragPanel = new lib.drag_base();
	this.mcDragPanel.name = "mcDragPanel";
	this.mcDragPanel.setTransform(1018.3,351.35,0.6667,0.6667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mcDragPanel).wait(1));

	// BG
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(570.2,215.4,722,1115.3);
// library properties:
lib.properties = {
	id: 'A8C379FB69C3C04B9739D76B6EAE3FEB',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ui_atlas_P_1.png?1728872056584", id:"ui_atlas_P_1"},
		{src:"images/ui_atlas_NP_1.jpg?1728872056584", id:"ui_atlas_NP_1"}
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
an.compositions['A8C379FB69C3C04B9739D76B6EAE3FEB'] = {
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