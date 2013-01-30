/**********************************************************
图像类
**********************************************************/

zyGame.cls.image=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	
	this.src='';
	
	this.zindex=0;
	this.parent=zyGame;
}

//显示
zyGame.cls.image.prototype.show=function(){
	this.parent.object.add(this);
};

//隐藏
zyGame.cls.image.prototype.hidden=function(){
	this.parent.object.del(this);
};

//移动
zyGame.cls.image.prototype.move=function(l,t){
	this.left=l;
	this.top=t;
};

//绘制
zyGame.cls.image.prototype.draw=function(){
	zyGame.draw.image(this.src,this.left+this.parent.left,this.top+this.parent.top,this.width,this.height);
};



