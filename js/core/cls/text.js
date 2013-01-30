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
	
	this.zindex=0;
	this.parent=zyGame;
};

//显示
zyGame.cls.text.prototype.show=function(){
	this.parent.object.add(this);
};

//隐藏
zyGame.cls.text.prototype.hidden=function(){
	this.parent.object.del(this);
};

//移动
zyGame.cls.text.prototype.move=function(l,t){
	this.left=l;
	this.top=t;
};

//绘制
zyGame.cls.text.prototype.draw=function(){
	zyGame.draw.save();
	zyGame.draw.textStyle(this.font,this.align,this.valign,this.color);
	zyGame.draw.text(this.text,this.left+this.parent.left,this.top+this.parent.top);
	zyGame.draw.restore();
};

