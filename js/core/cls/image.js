/**********************************************************
图像类
**********************************************************/

zyGame.cls.image=function(l,t,w,h){
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	this.z=4;
	this.init();
}

zyGame.cls.image.prototype.init=function(){
	this.align=0;
	this.valign=0;
};

zyGame.cls.image.prototype.resize=function(){

};

zyGame.cls.image.prototype.draw=function(){
	zyGame.draw.image(this.src,this.left,this.top,this.width,this.height);
};



