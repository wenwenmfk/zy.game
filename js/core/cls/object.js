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
	
//删除对象组中指定对象
zyGame.cls.object.prototype.del=function(o){
	for (var i in this.obj){
		if (o===this.obj[i]){
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
zyGame.cls.object.prototype.click=function(e){
	//console.log(x,y);
	for (var i in this.obj){
		var j=this.obj.length-1-i;
		if (typeof(this.obj[j].click)=='function'){
			if (e.offsetX>=this.obj[j].left+this.obj[j].parent.left && 
				e.offsetY>=this.obj[j].top+this.obj[j].parent.top && 
				e.offsetX<=this.obj[j].left+this.obj[j].width+this.obj[j].parent.left &&
				e.offsetY<=this.obj[j].top+this.obj[j].height+this.obj[j].parent.top){
				this.obj[j].click(e);
				break;
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


