/**********************************************************
定时器类
**********************************************************/

zyGame.cls.timer=function(){
	this.interval=1000;
	this.enabled=0;
	
	this.tick=function(){};
};


//开
zyGame.cls.timer.prototype.on=function(){
	if (this.enabled==0){
		this.enabled=1;
		this.lastTime=Date.now();
		zyGame.timer.obj.push(this);
	}
};

//关
zyGame.cls.timer.prototype.off=function(){
	if (this.enabled==1){
		this.enabled=0;
		for (var i in zyGame.timer.obj){
			if (obj===zyGame.timer.obj[i]){
				zyGame.timer.obj.splice(i,1);
				break; 
			}
		}
	}
};