/**********************************************************
定时器模块
**********************************************************/

zyGame.timer={};


//开始
zyGame.timer.start=function(){
	this.handle=setInterval(this.frame,1);
};
	
//停止
zyGame.timer.stop=function(){
	clearTimeout(this.handle);
};

//定时器函数
zyGame.timer.frame=function(){
	zyGame.draw.clear();
	zyGame.object.draw();
};