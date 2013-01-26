/**********************************************************
加载模块
**********************************************************/

zyGame.load=function(){
	this.src=[];
	this.callback;
};

//加载回调
zyGame.load.prototype.loaded=function(o){
	o.src.pop();
	if (o.src.length==0){//加载完成
		o.callback();
	}
};

//加载资源
zyGame.load.prototype.load=function(s){
	this.src=s;
	for (var i in s){
		switch (s[i].slice(-4)){
			case '.jpg':
			case '.png':
				this.loadimg(s[i]);
				break;
			case '.mp3':
				this.loadaud(s[i]);
				break;
			case '.mp3':
				this.loadvid(s[i]);
				break;
		}
	}
};

zyGame.load.prototype.loadimg=function(s){
	var o=this;
	zyGame.src.img[s]=new Image();
	zyGame.src.img[s].onload=function(){
		o.loaded(o);
	};
	zyGame.src.img[s].src='img/'+s;
};

zyGame.load.prototype.loadaud=function(s){
	var o=this;
	zyGame.src.aud[s]=new Audio();
	zyGame.src.aud[s].addEventListener("canplaythrough", function(){
		if (typeof(oTrailer)=='undefined'){
			o.loaded(o);
		}
	});
	zyGame.src.aud[s].src='aud/'+s;
};

zyGame.load.prototype.loadvid=function(s){
	var o=this;
	zyGame.src.aud[s]=new Audio();
	zyGame.src.aud[s].addEventListener("canplaythrough", function(){
		if (typeof(oTrailer)=='undefined'){
			o.loaded(o);
		}
	});
	zyGame.src.aud[s].src='aud/'+s;
};







