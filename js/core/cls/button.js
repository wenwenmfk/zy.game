/**********************************************************
按钮类
**********************************************************/

zyGame.cls.button=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	
	this.align='left';
	this.valign='top';
	this.enabled=1;
	this.text=new zyGame.cls.text(l,t);
	this.text.text='button';
	this.image=new zyGame.cls.image(l,t,w,h);
	this.src=[];
	
	this.visible=0;
	this.zindex=0;
	this.parent=zyGame;
	
	//事件
	this.beforeDraw=function(){};
	this.afterDraw=function(){};
	this.onClick=function(){};
	this.onMousedown=function(){};
	this.onMouseup=function(){};
}

zyGame.cls.button.prototype.show=zyGame.method.show;
zyGame.cls.button.prototype.hidden=zyGame.method.hidden;
zyGame.cls.button.prototype.move=zyGame.method.move;

zyGame.cls.button.prototype.disable=function(){
	this.enabled=0;
	this.image.src=this.src[this.src.length-1];
};
zyGame.cls.button.prototype.enable=function(){
	this.enabled=1;
	this.image.src=this.src[0];
};
zyGame.cls.button.prototype.setsrc=function(){
	this.src=arguments;
	if (this.enabled==0){
		this.image.src=this.src[this.src.length-1];
	}else{
		this.image.src=this.src[0];
	}
};

//绘制
zyGame.cls.button.prototype.draw=function(){
	this.beforeDraw();
	this.image.draw();
	if (this.text.text!=''){
		this.text.draw();
	}
	this.afterDraw();
};

//鼠标事件
zyGame.cls.button.prototype.click=function(){
	if (this.enabled==1){
		this.onClick();
	}
};

zyGame.cls.button.prototype.mousedown=function(){
	if (this.enabled==1){
		if (this.src.length==3){
			this.image.src=this.src[1];
		}
		this.onMousedown();
	}
};
zyGame.cls.button.prototype.mouseup=function(){
	if (this.enabled==1){
		if (this.src.length==3){
			this.image.src=this.src[0];
		}
		this.onMouseup();
	}
};


