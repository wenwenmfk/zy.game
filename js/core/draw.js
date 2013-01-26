/**********************************************************
绘制模块
**********************************************************/

zyGame.draw={};

//清除矩形区域
zyGame.draw.clear=function(l,t,w,h){
	if (arguments.lenght==4){
		zyGame.ctx.clearRect(l,t,w,h);
	}else{
		zyGame.ctx.clearRect(0,0,zyGame.width,zyGame.height);
	}
};

//绘制一个图像
zyGame.draw.image=function(s,l,t,w,h){
	zyGame.ctx.drawImage(zyGame.src.img[s],l,t,w,h);
};

//绘制一个文本
zyGame.draw.text=function(t,x,y,s){
	zyGame.ctx.save();
	zyGame.util.textStyle(s);
	zyGame.ctx.fillText(t,x,y);
	zyGame.ctx.restore();
};

//绘制一个矩形
zyGame.draw.rect=function(l,t,w,h,c){
	zyGame.ctx.fillStyle='rgb('+c+')';
	zyGame.ctx.fillRect(l,t,w,h);
};






