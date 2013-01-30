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
	this.zindex=0;
	this.parent=zyGame;
}

//显示
zyGame.cls.layer.prototype.show=function(){
	this.parent.object.add(this);
};

//隐藏
zyGame.cls.layer.prototype.hidden=function(){
	this.parent.object.del(this);
};

//移动
zyGame.cls.layer.prototype.move=function(l,t){
	this.left=l;
	this.top=t;
};

//重置大小
zyGame.cls.layer.prototype.resize=function(w,h){
	this.width=w;
	this.height=h;
};

//绘制
zyGame.cls.layer.prototype.draw=function(){
	zyGame.draw.rect(this.left+this.parent.left,this.top+this.parent.top,this.width,this.height,'rbg(0,0,0)');
	this.object.draw();
};













