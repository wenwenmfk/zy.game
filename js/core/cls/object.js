/**********************************************************
对象处理类
**********************************************************/

zyGame.cls.object=function(){
	this.obj=[];
};


//绘制对象组中对象
zyGame.cls.object.prototype.draw=function(){
	for (var i in this.obj){
		this.obj[i].draw();
	}
};

//向对象组添加一个对象
zyGame.cls.object.prototype.add=function(obj){
	if (this.obj.length==0){
		this.obj.push(obj);
	}else{
		for (var i in this.obj){
			if (obj.zindex<=this.obj[i].zindex){
				return this.obj.splice(i,0,obj);
			}
		}
		this.obj.push(obj);
	}
};
	
//删除对象组中指定对象
zyGame.cls.object.prototype.del=function(obj){
	for (var i in this.obj){
		if (obj===this.obj[i]){
			return this.obj.splice(i,1);
		}
	}
};

//大小重置事件
zyGame.cls.object.prototype.resize=function(){
	for (var i in this.obj){
		this.obj[i].resize();
	}
};
		
//鼠标点击事件
zyGame.cls.object.prototype.click=function(x,y){
	//console.log(x,y);
	for (var i in this.obj){
		if (typeof(this.obj[i].click)=='function'){
			if (x>=this.obj[i].left && 
				y>=this.obj[i].top && 
				x<=this.obj[i].left+this.obj[i].width &&
				y<=this.obj[i].top+this.obj[i].height){
				this.obj[i].click(x,y);
			}
		}
	}
};
	
//鼠标移动事件
zyGame.cls.object.prototype.mousemove=function(x,y){
	for (var i in this.obj){
		if (typeof(this.obj[i].mousemove)=='function'){
			if (x>=this.obj[i].l && y>=this.obj[i].t && x<=this.obj[i].r && y<=this.obj[i].b){
				this.obj[i].mousemove(x,y);
			}else if (typeof(this.obj[i].mouseout)=='function'){
				this.obj[i].mouseout();
			}
		}
	}
};


