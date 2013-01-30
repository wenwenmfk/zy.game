/**********************************************************
类型模块
**********************************************************/

zyGame.type={};

//字体类型
zyGame.type.font=function(){
	this.style   = 'normal';
	this.variant = 'normal';
	this.weight  = 'normal';
	this.size    = '12px';
	this.family  = '宋体';
};


//线框类型
zyGame.type.stroke=function(){

};

//阴影类型
zyGame.type.shadow=function(){

};


//矩形区域
zyGame.type.rect=function(){
	this.left   = 0;
	this.top    = 100;
	this.width  = 120;
	this.height = 52;
	this.right  = this.left + this.width;
	this.bottom = this.top  + this.height;
};





/* //设置默认
function Set_Default(a,g){
	for (var i in a){
		if (a[i]===''){a[i]=g[i];}
	}
}

Set_Default(arguments,global.SHADOW);


FONT : ['12px 宋体','center','middel','255,255,255','1'],
	


.fillStyle='rgba('+c+','+a+')';
 */
