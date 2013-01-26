/**********************************************************
事件模块
**********************************************************/

zyGame.event={};






/*
//初始化
zyGame.event.init=function(){
	//屏蔽系统右键菜单
	zyGame.body.oncontextmenu=function(){
		return false;
	};
	
	this.add('onresize');
	this.add('onkeydown');
	this.add('click');
	this.add('mousemove');
	this.add('contextmenu');
};

//添加事件
zyGame.event.add=function(event){
	switch (event){
		case 'click':
			zyGame.cvs.addEventListener(event, this.onClick, false);
			break;
		case 'mousemove':
			zyGame.cvs.addEventListener(event, this.onMousemove, false);
			break;
		case 'contextmenu':
			zyGame.cvs.addEventListener(event, this.onContextmenu, false);
			break;
		case 'onresize':
			zyGame.body.onresize=this.onResize;
			break;
		case 'onkeydown':
			zyGame.body.onkeydown=this.onKeydown;
			break;
		case 'onkeypress':
			zyGame.body.onkeypress=this.onKeypress;
			break;
	}
};


zyGame.event.onResize=function(){
	if (eBODY.width!=BODY.clientWidth || eBODY.height!=BODY.clientHeight){
		eBODY.width=BODY.clientWidth;
		eBODY.height=BODY.clientHeight;
		CVS.style.left=Math.round((eBODY.width-CVS.width)/2);
		CVS.style.top=Math.round((eBODY.height-CVS.height)/2);
	}
};


zyGame.event.onClick=function(event){
	zyGame.object.click(event.offsetX,event.offsetY);
};

zyGame.event.onMousemove=function(event){
	zyGame.object.mousemove(event.offsetX,event.offsetY);
};

zyGame.event.onKeypress=function(event){

};

zyGame.event.onKeydown=function(event){
	//console.log(event.keyCode);
	switch (event.keyCode){
	case 37:
		oTetris.moveleft();break;
	case 38:
		oTetris.moveup();break;
	case 39:
		oTetris.moveright();break;
	case 40:
		oTetris.movedown();break;
	};
};

*/
