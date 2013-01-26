/**********************************************************
刷新率(fps)类
**********************************************************/

zyGame.pls.fps=function(){
	this.fps      = 0;
	this.frame    = 0;
	this.lastTime = Date.now();
	this.label    = new zyGame.cls.label();
};

zyGame.pls.fps.prototype.on=function(){
	zyGame.object.add(this);
	zyGame.object.add(this.label);
};

zyGame.pls.fps.prototype.off=function(){
	zyGame.object.del(this);
	zyGame.object.del(this.label);
};

zyGame.pls.fps.prototype.draw=function(){
	this.frame++;
	
 	var now=Date.now();
	if ((now-this.lastTime)>=1000){
		this.lastTime=now;
		this.fps=this.frame;
		this.frame=0;
		
		//this.label.text='fps:'+this.fps;
	}
};








