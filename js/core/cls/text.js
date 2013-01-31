/**********************************************************
文本(text)类
**********************************************************/

zyGame.cls.text=function(l,t){
	this.left=l;
	this.top=t;
	
	this.text='text';
	this.font=new zyGame.type.font();
	this.align='left';//可取值: left,right,center
	this.valign='top';//可取值: top,bottom,middle
	this.color='rgb(0,0,0)';
	
	this.visible=0;
	this.zindex=0;
	this.parent=zyGame;
	
	this.beforeDraw=function(){};
	this.afterDraw=function(){};
};


zyGame.cls.text.prototype.show=zyGame.method.show;
zyGame.cls.text.prototype.hidden=zyGame.method.hidden;
zyGame.cls.text.prototype.move=zyGame.method.move;

//绘制
zyGame.cls.text.prototype.draw=function(){
	this.beforeDraw();
	zyGame.draw.save();
	zyGame.draw.textStyle(this.font,this.align,this.valign,this.color);
	zyGame.draw.text(this.text,this.left+this.parent.left,this.top+this.parent.top);
	zyGame.draw.restore();
	this.afterDraw();
};







