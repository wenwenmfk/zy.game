/**********************************************************
初始化模块
**********************************************************/

var zyGame={
	cls : {},//基础类
	pls : {},//插件类
	src : {img:{},aud:{},vid:{},map:{}}//资源对象
};

window.onload=function(){
	zyGame.init();
};

//初始化
zyGame.init=function(){
	document.title=this.config.title;
	this.body=document.body;
	this.cvs=document.getElementsByTagName('canvas')[0];
	this.ctx=this.cvs.getContext('2d');
	
	this.resize(this.config.width,this.config.height,this.config.fullscreen);
	this.timer.start();
};


//重置canvas大小
zyGame.resize=function(w,h,fs){
	if (fs==0){
		this.width=w;
		this.height=h;
	}else{
		this.minwidth=w
		this.minheight=h;
		this.width=(w>=this.body.clientWidth ? w : this.body.clientWidth);
		this.height=(h>=this.body.clientHeight ? h : this.body.clientHeight);
		this.body.style.margin=0;
	}

	this.fullscreen=fs;
	this.cvs.width=this.width;
	this.cvs.height=this.height;
};







/*


//页面加载完毕
window.onload=function(){
	BODY=document.body;
	CVS=document.getElementById('canvas');
	CTX=CVS.getContext('2d');

	CVS.width=320;
	CVS.height=480;
	CVS.style.position='absolute';
	mEvt.onResize();
	
	eBODY.width=BODY.clientWidth;
	eBODY.height=BODY.clientHeight;

	//监听事件
	BODY.onresize=mEvt.onResize;
	BODY.onkeydown=mEvt.onKeydown;
	BODY.oncontextmenu=function(){return false;};//屏蔽系统右键菜单
	CVS.addEventListener("click", mEvt.onClick, false);
	CVS.addEventListener("mousemove", mEvt.onMousemove, false);
	CVS.addEventListener("contextmenu", mEvt.onContextmenu, false);
	
	

/* 	oLoadingBar=new clsLoadingBar();
	mObj.add(oLoadingBar);
	
	LOAD.callback=function(){
		oTetris=new clsTetris();
		mObj.add(oTetris);
		oGrid=new clsGrid();
		mObj.add(oGrid);
	};
	LOAD.load([
		'rect.jpg',
	]); 
	
 	//oFps=new clsFps();
	//mObj.add(oFps);
}

*/







