/**********************************************************
按钮类
**********************************************************/

zyGame.pls.numberImgFont=function(l,t,w,h){
	//大小、定位
	this.left=l;
	this.top=t;
	this.align='left';
	this.valign='top';
	
	//其它属性
	this.src='';
	this.number=0;
	this.width=w;
	this.height=h;
	
	//通用属性
	this.visible=0;
	this.zindex=0;
	this.parent=zyGame;
	
	//事件
	this.beforeDraw=function(){};
	this.afterDraw=function(){};
}

zyGame.pls.numberImgFont.prototype.show=zyGame.method.show;
zyGame.pls.numberImgFont.prototype.hidden=zyGame.method.hidden;
zyGame.pls.numberImgFont.prototype.move=zyGame.method.move;

//绘制
zyGame.pls.numberImgFont.prototype.draw=function(){
	this.beforeDraw();
	var strNumber=this.number+'';
	for (var i=0;i<strNumber.length;i++){
		var n=parseInt(strNumber.substr(i,1));
		zyGame.draw.image(this.src,n*this.width,0,this.width,this.height,this.left+this.parent.left+i*this.width,this.top+this.parent.top,this.width,this.height);
	}
	this.afterDraw();
};










