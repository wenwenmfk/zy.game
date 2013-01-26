/**********************************************************
对象处理模块
**********************************************************/

zyGame.object={
	obj:[]//对象数组
};

//绘制对象组中对象
zyGame.object.draw=function(){
	for (var i in this.obj){
		this.obj[i].draw();
	}
};

//向对象组添加一个对象
zyGame.object.add=function(obj){
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
zyGame.object.del=function(obj){
	for (var i in this.obj){
		if (obj===this.obj[i]){
			return this.obj.splice(i,1);
		}
	}
};

//大小重置事件
zyGame.object.resize=function(){
	for (var i in this.obj){
		this.obj[i].resize();
	}
};
		
//鼠标点击事件
zyGame.object.click=function(x,y){
	for (var i in this.obj){
		if (typeof(this.obj[i].click)=='function'){
			if (x>=this.obj[i].l && y>=this.obj[i].t && x<=this.obj[i].r && y<=this.obj[i].b){
				this.obj[i].click(x,y);
			}
		}
	}
};
	
//鼠标移动事件
zyGame.object.mousemove=function(x,y){
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


