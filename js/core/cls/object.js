/**********************************************************
对象处理类
**********************************************************/

zyGame.cls.object=function(){
	this.obj=[];
	this.focus=0;
	this.mousedowned=0;
};


//绘制
zyGame.cls.object.prototype.draw=function(){
	for (var i in this.obj){
		this.obj[i].draw();
	}
};

//添加
zyGame.cls.object.prototype.add=function(o){
	if (this.obj.length==0){
		this.obj.push(o);
	}else{
		for (var i in this.obj){
			if (o.zindex<this.obj[i].zindex){
				return this.obj.splice(i,0,o);
			}
		}
		this.obj.push(o);
	}
};
	
//删除
zyGame.cls.object.prototype.del=function(o){
	for (var i in this.obj){
		if (o===this.obj[i]){
			return this.obj.splice(i,1);
		}
	}
};

//大小重置
zyGame.cls.object.prototype.resize=function(){
	for (var i in this.obj){
		this.obj[i].resize();
	}
};
		

//鼠标按下
zyGame.cls.object.prototype.mousedown=function(){
	for (var i in this.obj){
		var j=this.obj.length-1-i;
		if (typeof(this.obj[j].mousedown)=='function'){
			if (event.offsetX>=this.obj[j].left+this.obj[j].parent.left && 
				event.offsetY>=this.obj[j].top+this.obj[j].parent.top && 
				event.offsetX<=this.obj[j].left+this.obj[j].width+this.obj[j].parent.left &&
				event.offsetY<=this.obj[j].top+this.obj[j].height+this.obj[j].parent.top){
				this.mousedowned=this.obj[j];
				this.obj[j].mousedown();
				break;
			}
		}
	}
};

//鼠标抬起
zyGame.cls.object.prototype.mouseup=function(){
	if (this.mousedowned!=0){
		this.mousedowned.mouseup();
		if (typeof(this.mousedowned.click)=='function'){
			if (event.offsetX>=this.mousedowned.left+this.mousedowned.parent.left && 
				event.offsetY>=this.mousedowned.top+this.mousedowned.parent.top && 
				event.offsetX<=this.mousedowned.left+this.mousedowned.width+this.mousedowned.parent.left &&
				event.offsetY<=this.mousedowned.top+this.mousedowned.height+this.mousedowned.parent.top){
				this.mousedowned.click();
			}
		}
		this.mousedowned=0;
	}
};










