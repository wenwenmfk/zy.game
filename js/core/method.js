/**********************************************************
通用方法模块
**********************************************************/

zyGame.method={};


//开
zyGame.method.show=function(){
	if (this.visible==0){
		this.parent.object.add(this);
		this.visible=1;
	}
};

//关
zyGame.method.hidden=function(){
	if (this.visible==1){
		this.parent.object.del(this);
		this.visible=0;
	}
};

//移动
zyGame.method.move=function(l,t){
	this.left=l;
	this.top=t;
};