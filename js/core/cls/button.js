/**********************************************************
按钮类
**********************************************************/

function clsButton(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	this.right=l+w;
	this.bottom=t+h;

	this.zindex=4;
	this.title;
	this.container;
	this.align;
	this.valign;
	this.image;
	this.text;
	this.z=4;
	this.borderstyle=1;
	this.src;
	//this.text=text;
	
	//事件
	this.onClick=function(){};
	this.onMousemove=function(){};
	this.onMouseover=function(){};
	this.onMouseout=function(){};
}

clsButton.prototype.init=function(){//初始化

};

clsButton.prototype.resize=function(){//初始化

};

clsButton.prototype.draw=function(){
	mDraw.image(this.src,this.left,this.top,this.width,this.height);

	CTX.save();
	Set_Shadow(1,1,1,'0,0,0','');
	Set_Font('12px 宋体','center','middle','255,255,255','');	
	CTX.fillText(this.text,this.left+this.width/2,this.top+this.height/2);
	CTX.restore();
}

clsButton.prototype.click=function(){
	this.onClick();
};

clsButton.prototype.mousemove=function(){
	BODY.style.cursor='pointer';
	this.onMousemove();
};

clsButton.prototype.mouseover=function(){
	this.onMouseover();
};

clsButton.prototype.mouseout=function(){
	BODY.style.cursor='auto';
	this.onMouseout();
};





