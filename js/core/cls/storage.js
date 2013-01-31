/**********************************************************
数据存取(storage)模块
**********************************************************/

zyGame.cls.storage=function(){
	if (arguments[0]=='local'){
		this.ws=window.localStorage;
	}else{
		this.ws=window.sessionStorage;
	}
	this.length=this.ws.length;
};


//保存
zyGame.cls.storage.prototype.save=function(key,value){
	this.ws.setItem(key,value);
	this.length=this.ws.length;
};

//获取
zyGame.cls.storage.prototype.get=function(key){
	return this.ws.getItem(key);
};

//移除
zyGame.cls.storage.prototype.del=function(key){
	this.ws.removeItem(key);
	this.length=this.ws.length;
};

//清除
zyGame.cls.storage.prototype.clear=function(){
	this.ws.clear();
	this.length=this.ws.length;
};