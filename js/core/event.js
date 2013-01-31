/**********************************************************
事件模块
**********************************************************/

zyGame.event={};


//添加事件
zyGame.event.add=function(e){
	switch (e){
		case 'click':
			zyGame.cvs.onclick=this.onClick;
			break;
		case 'mousemove':
			zyGame.cvs.onmousemove=this.onMousemove;
			break;
		case 'contextmenu':
			zyGame.cvs.oncontextmenu=this.onContextmenu;
			break;
		case 'resize':
			zyGame.body.onresize=this.onResize;
			break;
		case 'keydown':
			zyGame.body.onkeydown=this.onKeydown;
			break;
		case 'keypress':
			zyGame.body.onkeypress=this.onKeypress;
			break;
	}
};

//点击
zyGame.event.onClick=function(e){
	zyGame.object.click(e);
};



