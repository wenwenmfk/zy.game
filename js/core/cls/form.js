/**********************************************************
窗体类
align		水平对齐 0左 1居中 2右
valing		垂直对齐 0上 1居中 2下
**********************************************************/

zyGame.cls.form=function(left,top,width,height){
	this.left=left;
	this.top=top;
	this.width=width;
	this.height=height;
	
	this.align=1;
	this.valign=1;
}

zyGame.cls.form.prototype.draw=function(){
	
};

zyGame.cls.form.prototype.resize=function(){
	if (this.align==1){
		this.left=Math.round(this.container.width-this.width/2);
	}else if(this.align==2){
		this.left=Math.round(CVS.width-this.width);
	}
	
	if (this.valign==1){
		this.top=Math.round(this.container.height-this.height/2);
	}else if(this.valign==2){
		this.top=Math.round(CVS.height-this.height);
	}
};


