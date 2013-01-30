/**********************************************************
窗体(form)类
**********************************************************/

zyGame.cls.form=function(l,t,w,h){
	this.obj=[];
	this.left=l;
	this.top=t;
	this.width=w;
	this.height=h;
	
	this.align='left';
	this.valign='top';
	
	this.zindex=0;
	this.parent=0;
}

zyGame.cls.form.prototype.resize=function(){

};

//绘制
zyGame.cls.form.prototype.draw=function(){
	for (var i in this.obj){
		this.obj.draw();
	}
};


