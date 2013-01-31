/**********************************************************
图像类
**********************************************************/

zyGame.cls.image=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	
	this.src='';
	
	this.visible=0;
	this.zindex=0;
	this.parent=zyGame;
	
	this.beforeDraw=function(){};
	this.afterDraw=function(){};
}


zyGame.cls.image.prototype.show=zyGame.method.show;
zyGame.cls.image.prototype.hidden=zyGame.method.hidden;
zyGame.cls.image.prototype.move=zyGame.method.move;

//绘制
zyGame.cls.image.prototype.draw=function(){
	this.beforeDraw();
	zyGame.draw.image(this.src,this.left+this.parent.left,this.top+this.parent.top,this.width,this.height);
	this.afterDraw();
};



