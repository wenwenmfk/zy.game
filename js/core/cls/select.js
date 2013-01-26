/**********************************************************
下拉框类
**********************************************************/

function clsSelect(left,top,width,height){
	this.left=left;
	this.top=top;
	this.width=width;
	this.height=height-1;
	this.text;
	this.z=4;
	this.option=[];
}

clsSelect.prototype.init=function(){//初始化

};

clsSelect.prototype.resize=function(){//初始化

};

clsSelect.prototype.draw=function(){
	mDraw.rect(this.left,this.top,this.width,this.height,'0,0,0');
	mDraw.rect(this.left+1,this.top+1,this.width-2,this.height-2,'255,255,255');
	Set_Font('12px 宋体','left','middle','0,0,0','1');
	mDraw.text('右北平郡',this.left+3,this.top+10);
	
	
	Set_Shadow('1','1','1','0,0,0','1');
	//mDraw.round(this.left+this.width-this.height+10,this.top+10,7,'150,150,150');
	mDraw.rect(this.left+this.width-16,this.top+3,12,12,'192,192,192');
	//Set_Shadow('1','1','1','255,255,255','1');
	Set_Shadow('0','0','0','0,0,0','1');
	mDraw.arrow(this.left+this.width-13,this.top+7,6,1,'0,0,0');
	//Set_Shadow('0','0','0','0,0,0','1');
	
}


