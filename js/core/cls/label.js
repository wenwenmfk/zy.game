/**********************************************************
标签类
**********************************************************/

zyGame.cls.label=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	this.right=this.left+this.width;
	this.bottom=this.top+this.height;
	
	this.text=new zyGame.cls.text();
	this.align='';
	this.valign='';
	this.color;
	
	this.zindex=4;
};

//移动
zyGame.cls.label.prototype.move=function(){
};

//拖拽
zyGame.cls.label.prototype.drop=function(){
};

zyGame.cls.label.prototype.init=function(){
};

zyGame.cls.label.prototype.resize=function(){
};

//绘制
zyGame.cls.label.prototype.draw=function(){
	zyGame.draw.rect(this.rect.left,this.rect.top,this.rect.width,this.rect.height,'100,100,100');
	zyGame.draw.text(this.text,this.rect.left,this.rect.top,this.textStyle);
};


