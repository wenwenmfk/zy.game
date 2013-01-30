/**********************************************************
图像(Picture)类
**********************************************************/

zyGame.cls.picture=function(l,t,w,h){
	this.image=new zyGame.cls.image(l,t,w,h);
	this.align='left';
	this.valign='top';
	
	this.zindex=0;
	this.parent=zyGame;
}

//显示
zyGame.cls.picture.prototype.show=function(){
	this.parent.object.add(this);
};

//隐藏
zyGame.cls.picture.prototype.hidden=function(){
	this.parent.object.del(this);
};

//移动
zyGame.cls.picture.prototype.move=function(l,t){
	this.image.left=l+this.parent.left;
	this.image.top=t+this.parent.top;
};

//重置大小
zyGame.cls.picture.prototype.resize=function(w,h){
	this.image.width=w;
	this.image.height=h;
};

//设置容器
zyGame.cls.layer.prototype.setParent=function(o){
	this.parent=o;
	this.move(this.left,this.top);
};

//绘制
zyGame.cls.picture.prototype.draw=function(){
	this.image.draw();
};



