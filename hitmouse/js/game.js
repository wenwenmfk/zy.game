/*******************************************************************************************
# zyGame引擎 #
  * 声明: 
    * 不得擅自修改本引擎代码、注释等内容
    * 非经书面许可，不得使用本引擎开发商业化产品
  * 适合游戏类型：基于html5-canvas的2d、2.5d贴图游戏
  * 引擎设计目标：为游戏开发者提供，一种面向控件编写游戏的框架，提供丰富的控件类及通用方法
  * 网址: 17h5.com
  * 信箱: 176206@qq.com
  * QQ群: 194563450
*******************************************************************************************/

//参数设置
zyGame.config={
	title: 
		//游戏标题
		'快乐地鼠',
	width: 
		//游戏区域宽(若全屏显示,则为最小宽度)
		500,
	height: 
		//游戏区域高(若全屏显示,则为最小高度)
		500,
	fullscreen: 
		//0为非全屏，1为全屏
		0,
	fpslimit: 
		//最高刷新上限(建议使用默认值)
		60,
	src:
		/*
		需预先加载的资源文件
			图片文件支持jpg,png格式,放在目录img下
			声音文件支持mp3格式,放在目录aud下
			视频文件支持mp4格式,放在目录vid下
			如果有子目录,写上相对路径即可
		*/
		['bg.jpg','unit.jpg','hole.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg','0123456789.png','bar_bg.jpg','bar_fore.jpg'],
	start:
		//引擎加载完成,调用该函数开始游戏
		gameStart
};


//初始化游戏
function gameInit(){
	imgBg=new zyGame.cls.image(100,100,30,30);
	imgBg.setSrc('bg.jpg');
	imgBg.animation.add('move');

	imgBg2=new zyGame.cls.image(10,10,30,30);
	imgBg2.setSrc('bg.jpg');
	imgBg2.animation.add('move');

	layTest=new zyGame.cls.layer(300,300,100,100);
	imgBg2.setParent(layTest);

	layTest2=new zyGame.cls.layer(100,100,200,200);

	imgBg.onClick=function(){
		console.log('111');
	};

	imgBg2.onClick=function(){
		console.log('222');
	};

	txtTool=new zyGame.cls.text(10,10);
	txtTool.setText('工具');
	
	btnProp1=new zyGame.cls.button(80,430,30,30);
	btnProp1.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnProp1.onClick=function(){
		console.log('click');
	};
	btnProp1.onMousedown=function(){
		console.log('down');
	};
	btnProp1.onMouseup=function(){
		console.log('up');
	};
	
	barFarmHP=new zyGame.cls.bar(100,15,120,20);
	barFarmHP.setSrc('bar_bg.jpg','bar_fore.jpg');
	barFarmHP.ceil=100;
	barFarmHP.value=60;
	
	/* 
	var fps=new zyGame.pls.fps(10,70);

	var imgUnit=new zyGame.cls.image(10,10,50,50);
	imgUnit.src='unit.jpg';
	var txtUnit=new zyGame.cls.text(22,30);
	txtUnit.text='第1关';

	var txtFarmHP=new zyGame.cls.text(70,20);
	txtFarmHP.text='HP：';


	var txtGold=new zyGame.cls.text(70,40);
	txtGold.text='金币：';
	var nifGold=new zyGame.pls.numberImgFont(130,40,8,13);
	nifGold.src='0123456789.png';
	nifGold.number=9876543210;

	var imgWeather=new zyGame.cls.image(260,10,50,50);
	imgWeather.src='unit.jpg';
	var txtWeather=new zyGame.cls.text(280,30);
	txtWeather.text='晴';
	var txtScore=new zyGame.cls.text(250,70);
	txtScore.text='积分：1000';

	var imgWater=new zyGame.cls.image(10,420,50,50);
	imgWater.src='unit.jpg';
	var txtWater=new zyGame.cls.text(25,440);
	txtWater.text='水缸';

	var imgProp2=new zyGame.cls.image(120,430,30,30);
	imgProp2.src='unit.jpg';
	var imgProp3=new zyGame.cls.image(160,430,30,30);
	imgProp3.src='unit.jpg';
	var imgProp4=new zyGame.cls.image(200,430,30,30);
	imgProp4.src='unit.jpg';

	var imgTool=new zyGame.cls.image(260,420,50,50);
	imgTool.src='unit.jpg';
	var txtTool=new zyGame.cls.text(275,440);
	txtTool.text='工具';

	var imgHole=[];
	for (var i=0;i<16;i++){
		imgHole[i]=new zyGame.cls.image(5+80*(i%4),100+80*Math.floor(i/4),70,70);
		imgHole[i].src='hole.jpg';
	} */
}

//加载完毕开始游戏
function gameStart(){
	//alert('game loaded');
	
	gameInit();
	
	layTest.show();
	layTest2.show();
	txtTool.show();
	btnProp1.show();
	//imgBg.show();
	//imgBg.move(100,200,'straight',10000);
	imgBg2.show();
	barFarmHP.show();
	//imgBg2.move(200,100,'straight',5000);
	/* fps.show();
	
	imgUnit.show();
	txtUnit.show();
	
	txtFarmHP.show();
	barFarmHP.show();
	txtGold.show();
	nifGold.show();
	
	imgWeather.show();
	txtWeather.show();
	txtScore.show();
	
	imgWater.show();
	txtWater.show();
	
	imgProp2.show();
	imgProp3.show();
	imgProp4.show();
	imgTool.show();
	txtTool.show();
	
	for (var i=0;i<16;i++){
		imgHole[i].show();
	}*/
}

 







