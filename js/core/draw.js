/**********************************************************
绘制模块
**********************************************************/

zyGame.draw={};


zyGame.draw.textStyle=function(font,align,valign,color){
	zyGame.ctx.font=zyGame.util.join(font,' ');
	zyGame.ctx.textAlign=align;
	zyGame.ctx.textBaseline=valign;
	zyGame.ctx.fillStyle=color;
};

zyGame.draw.save=function(){
	zyGame.ctx.save();
};

zyGame.draw.restore=function(){
	zyGame.ctx.restore();
};



//清除矩形区域
zyGame.draw.clear=function(l,t,w,h){
	if (arguments.length==4){
		zyGame.ctx.clearRect(l,t,w,h);
	}else{
		zyGame.ctx.clearRect(0,0,zyGame.width,zyGame.height);
	}
};

//绘制一个图像
zyGame.draw.image=function(s,a1,a2,a3,a4,a5,a6,a7,a8){
	switch (arguments.length){
		case 3:
			zyGame.ctx.drawImage(zyGame.src.img[s],a1,a2);
			break;
		case 5:
			zyGame.ctx.drawImage(zyGame.src.img[s],a1,a2,a3,a4);
			break;
		case 9:
			zyGame.ctx.drawImage(zyGame.src.img[s],a1,a2,a3,a4,a5,a6,a7,a8);
			break;
	}
};

//绘制一个文本
zyGame.draw.text=function(t,x,y){
	zyGame.ctx.fillText(t,x,y);
};

//绘制一个矩形
zyGame.draw.rect=function(l,t,w,h,c){
	zyGame.ctx.fillStyle=c;
	zyGame.ctx.fillRect(l,t,w,h);
};






