/**********************************************************
定时器模块
**********************************************************/

zyGame.timer={
	obj : []
};


//开始
zyGame.timer.on=function(){
	this.handle=setInterval(this.tick,1);
};
	
//停止
zyGame.timer.off=function(){
	clearTimeout(this.handle);
};

//定时器函数
zyGame.timer.tick=function(){
	//指行定时器
	for (var i in zyGame.timer.obj){
		var now=Date.now();
		if ((now-zyGame.timer.obj[i].lastTime)>=zyGame.timer.obj[i].interval){
			zyGame.timer.obj[i].lastTime=now;
			zyGame.timer.obj[i].tick();
		}
	}

	//绘制对象
	zyGame.object.draw();
};