/**********************************************************
加载模块
**********************************************************/

zyGame.load={
	src      : [],
	callback : function(){}
};

//加载回调
zyGame.load.loaded=function(o){
	o.src.pop();
	if (o.src.length==0){//加载完成
		o.callback();
	}
};

//加载资源
zyGame.load.load=function(s,cb){
	this.src=s;
	this.callback=cb;
	
	for (var i in s){
		switch (s[i].slice(-4)){
			case '.jpg':
			case '.png':
				this.loadimg(s[i]);
				break;
			case '.mp3':
				this.loadaud(s[i]);
				break;
			case '.mp4':
				this.loadvid(s[i]);
				break;
		}
	}
};

//加载图像
zyGame.load.loadimg=function(s){
	var o=this;
	zyGame.src.img[s]=new Image();
	zyGame.src.img[s].onload=function(){
		o.loaded(o);
	};
	zyGame.src.img[s].src='img/'+s;
};

//加载声音
zyGame.load.loadaud=function(s){
	var o=this;
	zyGame.src.aud[s]=new Audio();
	zyGame.src.aud[s].addEventListener("canplaythrough", function(){
		o.loaded(o);
	});
	zyGame.src.aud[s].src='aud/'+s;
};

//加载视频
zyGame.load.loadvid=function(s){
	var o=this;
	zyGame.src.vid[s]=new Video();
	zyGame.src.vid[s].addEventListener("canplaythrough", function(){
		o.loaded(o);
	});
	zyGame.src.vid[s].src='vid/'+s;
};







