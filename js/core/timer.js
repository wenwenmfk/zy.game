/**********************************************************
定时器模块
**********************************************************/

zyGame.timer={};


//开始
zyGame.timer.start=function(){
	this.handle=setInterval(this.action,1);
};
	
//停止
zyGame.timer.stop=function(){
	clearTimeout(this.handle);
};

//定时器函数
zyGame.timer.action=function(){
	zyGame.draw.clear();
	zyGame.object.draw();
};

/* 	if (typeof(oLoadingBar)=='object'){
	oLoadingBar.files=3800;
	oLoadingBar.loaded++;
}
if (typeof(oTetris)=='object'){
	oTetris.movedown();
} */
//oFps.frame++;