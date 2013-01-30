/**********************************************************
刷新率(fps)类
**********************************************************/

zyGame.pls.fps=function(l,t){
	this.fps      = 0;
	this.frame    = 0;
	this.lastTime = Date.now();
	this.text     = new zyGame.cls.text(l,t);
	this.text.text= '';
	
	this.zindex	  = 0;
};

//显示
zyGame.pls.fps.prototype.show=function(){
	zyGame.object.add(this);
};

//隐藏
zyGame.pls.fps.prototype.hidden=function(){
	zyGame.object.del(this);
};

//移动
zyGame.pls.fps.prototype.move=function(l,t){
	this.text.move(l,t);
};

//绘制
zyGame.pls.fps.prototype.draw=function(){
	this.frame++;
	
 	var now=Date.now();
	if ((now-this.lastTime)>=1000){
		this.lastTime=now;
		this.fps=this.frame;
		this.frame=0;
	}
	this.drawCallback();
};

//绘制回调
zyGame.pls.fps.prototype.drawCallback=function(){
	this.text.text='fps:'+this.fps;
	this.text.draw();
};






