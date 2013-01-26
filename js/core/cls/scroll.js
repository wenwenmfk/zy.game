/**********************************************************
卷轴类
**********************************************************/

function clsScroll(left,top,width,height){
	this.left=left;
	this.top=top;
	this.width=width;
	this.height=height;
	this.right=this.left+this.width;
	this.bottom=this.top+this.height;
	
	//ctx.fillStyle="#fff"; 
	//ctx.font='10px 宋体';
	//ctx.fillText();//◀▶▼▲ //✖X号
}

clsScroll.prototype.init=function(){
	this.align=0;
	this.valign=0;
};

clsScroll.prototype.resize=function(){

};

clsScroll.prototype.draw=function(){
	Set_Shadow('1','1','1','0,0,0','1');
	mDraw.arrow(this.left,this.top,10,2,'255,255,255');
	mDraw.rect(this.left+10,this.top+4,this.width-20,2,'255,255,255');
	mDraw.rect(this.left+50,this.top,5,10,'255,255,255');
	mDraw.arrow(this.left+this.width-10,this.top,10,3,'255,255,255');
	Set_Shadow('0','0','0','0,0,0','1');
	
};

