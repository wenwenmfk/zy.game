/**********************************************************
层(layer)类
**********************************************************/

zyGame.cls.layer=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	
	this.align='left';
	this.valign='top';
	this.object=new zyGame.cls.object();
	
	this.visible=0;
	this.zindex=0;
	this.parent=zyGame;
	
	this.beforeDraw=function(){};
	this.afterDraw=function(){};
}

zyGame.cls.layer.prototype.show=zyGame.method.show;
zyGame.cls.layer.prototype.hidden=zyGame.method.hidden;
zyGame.cls.layer.prototype.move=zyGame.method.move;

//绘制
zyGame.cls.layer.prototype.draw=function(){
	this.beforeDraw();
	zyGame.draw.rect(this.left+this.parent.left,this.top+this.parent.top,this.width,this.height,'rbg(0,0,0)');
	this.object.draw();
	this.afterDraw();
};

zyGame.cls.layer.prototype.click=function(e){
	this.object.click(e);
};













