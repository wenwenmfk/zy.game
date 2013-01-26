/**********************************************************
标签类
**********************************************************/

zyGame.cls.label=function(l,t,w,h,a,v){
	this.rect=new zyGame.type.rect(l,t,w,h);
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	this.text='label';
	this.zindex=4;
	this.textStyle=new zyGame.type.textStyle();
	
	this.align;
	this.valign;
	this.textAlign;
	this.textValign;
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


