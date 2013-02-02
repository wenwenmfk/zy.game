/**********************************************************
事件模块
**********************************************************/

zyGame.event={};


//添加事件
zyGame.event.add=function(e){
	switch (e){
		case 'mousedown':
			zyGame.docu.onmousedown=this.onMousedown;
			break;
		case 'mouseup':
			zyGame.docu.onmouseup=this.onMouseup;
			break;
		case 'mousemove':
			zyGame.docu.onmousemove=this.onMousemove;
			break;
		case 'contextmenu':
			zyGame.docu.oncontextmenu=this.onContextmenu;
			break;
		case 'resize':
			zyGame.docu.onresize=this.onResize;
			break;
		case 'keydown':
			zyGame.docu.onkeydown=this.onKeydown;
			break;
		case 'keypress':
			zyGame.docu.onkeypress=this.onKeypress;
			break;
	}
};



//鼠标按下
zyGame.event.onMousedown=function(){
	zyGame.object.mousedown();
};

//鼠标抬起
zyGame.event.onMouseup=function(){
	zyGame.object.mouseup();
};











