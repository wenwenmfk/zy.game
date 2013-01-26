/**********************************************************
单选框类
**********************************************************/

function clsRadio(left,top,width,height){
	this.left=left;
	this.top=top;
	this.width=width;
	this.height=height;
	this.text;
	this.z=4;
}


clsRadio.prototype.init=function(){//初始化

};

clsRadio.prototype.radio=function(){

};

clsRadio.prototype.draw=function(){
	CTX.beginPath();
	CTX.arc(this.left,this.top,4,0,Math.PI*2,false);
	CTX.fillStyle='rgb(255,255,255)';
	CTX.fill();
	CTX.beginPath();
	CTX.arc(this.left,this.top,2,0,Math.PI*2,false);
	CTX.fillStyle='rgb(0,0,0)';
	CTX.fill();
	
	Set_Font('12px 宋体','left','middel','255,255,255','1');
	CTX.fillText(this.text,this.left+8,this.top+4);
}
