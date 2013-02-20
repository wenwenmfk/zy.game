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
		320,
	height: 
		//游戏区域高(若全屏显示,则为最小高度)
		480,
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
		['bg.jpg','unit.jpg','mouse1_3.jpg','mouse1_2.jpg','mouse1_1.jpg','mouse2_3.jpg','mouse2_2.jpg','mouse2_1.jpg','mouse3_3.jpg','mouse3_2.jpg','mouse3_1.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg','0123456789.png','bar_bg.jpg','bar_fore.jpg','death.mp3'],
	start:
		//引擎加载完成,调用该函数开始游戏
		gameStart,
	
};



//初始一个全局对象存储数值
var StaticVar = {
	//背景图
	imgBg:'bg.jpg',
	//关卡号
	imgUnit:{
		setSrc:'unit.jpg',
		setText:1,
	},
	//农场HP
	txtFarmHP:{
		HPceil:10,
		HPvalue:10,
	},
	//金币
	nifGold:0,
	//天气
	imgWeather:0, //0晴,1下雨,2下雪
	//积分
	nifScore:0,
	//创建时间记录对象
	GradeTime:{
		GTime: 0,  //初始显示时间为0
		//GradeTrim:zyGame.timer.createTimer(1)//创建记录时间轴
	},
	speed:3000, //出现速度
	clkTime: new zyGame.cls.clock(), //计时器
	TimOverTime:zyGame.timer.createTimer(),//创建最后一个地鼠显示的时间
}



//初始化游戏
function gameInit(){

	/*//启动时间记录轴、判断时间1分钟情况	
	GradeShow=new zyGame.cls.text(80,70);//运行时间显示
	StaticVar.GradeTime.GradeTrim.on();   //启动时间轴
	//时间轴每豪秒回调处理
	StaticVar.GradeTime.GradeTrim.tick = function(){
		
		//判断1分钟情况
		if(StaticVar.GradeTime.GTime == 1000){
			//通过第一关游戏结束
			txtOver.setLocation(80, 190)
			txtOver.setText('恭喜过关');
			txtOver.setFontSize('20px');
			txtOver.setFontWeight('bold');
			txtOver.setFontColor('#ff0000');
			
			//设置初始值
			StaticVar.GradeTime.GTime = 0;  //将时间轴归0
			StaticVar.imgUnit.setText ++;	//关卡号+1
			StaticVar.txtFarmHP.HPceil = 10; //HP加满
			StaticVar.txtFarmHP.HPvalue = 10;//HP加满
			
			
			//显示提示信息			
			GradeLayer.show();
			NextGrade.show();
			txtOver.show();	
			
			//关闭定时器
			timMouse.off();//关闭主定时器
			StaticVar.GradeTime.GradeTrim.off();//关闭时间记录定时器
		}
		else{
			//累加记录时间
			StaticVar.GradeTime.GTime++;
			GradeShow.setText('运行时间：'+StaticVar.GradeTime.GTime);
			GradeShow.show();	
		}
	}
	
	
	//初始一个提示层
	GradeLayer = new zyGame.cls.layer(55,150,200,140);
	//下一关按钮
	NextGrade = new zyGame.cls.button(125,240,50,30);
	NextGrade.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	NextGrade.text.setText('下一关');
	NextGrade.onClick=function(){
		//隐藏提示
		GradeLayer.hide();
		NextGrade.hide();
		txtOver.hide();
		
		//重新给值
		txtUnit.setText("第" + StaticVar.imgUnit.setText + "关");
		barFarmHP.ceil=StaticVar.txtFarmHP.HPceil;
		barFarmHP.value=StaticVar.txtFarmHP.HPvalue;
		
		//重新启动时间轴
		timMouse.on();
		StaticVar.GradeTime.GradeTrim.on();
	};
	*/
	
	
	//初始一个提示层
	GradeLayer = new zyGame.cls.layer(55,150,200,140);
	//下一关按钮
	NextGrade = new zyGame.cls.button(125,240,50,30);
	NextGrade.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	NextGrade.text.setText('下一关');
	NextGrade.onClick=function(){
		//隐藏提示
		GradeLayer.hide();
		NextGrade.hide();
		txtOver.hide();
		
		//重新给值
		txtUnit.setText("第" + StaticVar.imgUnit.setText + "关");
		barFarmHP.ceil=StaticVar.txtFarmHP.HPceil;
		barFarmHP.value=StaticVar.txtFarmHP.HPvalue;
		StaticVar.GradeTime.GTime = StaticVar.clkTime.set(Date.now());	//设置时间戳
		
		//重新启动时间轴
		timMouse.on();
		StaticVar.GradeTime.GradeTrim.on();
	}
	//设置时间戳
	StaticVar.GradeTime.GTime = StaticVar.clkTime.set(Date.now());
	GradeShow=new zyGame.cls.text(80,70);//运行时间显示

	
	//背景图
	imgBg=new zyGame.cls.image(0,0,zyGame.width,zyGame.height);
	imgBg.setSrc(StaticVar.imgBg);
	imgBg.show();
	
	fps=new zyGame.plg.fps(20,70);
	fps.show();
	
	//关卡号
	imgUnit=new zyGame.cls.image(10,10,50,50);
	imgUnit.setSrc(StaticVar.imgUnit.setSrc);
	imgUnit.show();
	txtUnit=new zyGame.cls.text(22,30);
	txtUnit.setText("第" + StaticVar.imgUnit.setText + "关");
	txtUnit.show();
	
	
	//农场HP
	txtFarmHP=new zyGame.cls.text(70,20);
	txtFarmHP.setText('HP：');
	txtFarmHP.show();
	barFarmHP=new zyGame.cls.bar(100,15,120,20);
	barFarmHP.setSrc('bar_bg.jpg','bar_fore.jpg');
	barFarmHP.ceil=StaticVar.txtFarmHP.HPceil;
	barFarmHP.value=StaticVar.txtFarmHP.HPvalue;
	barFarmHP.show();
	
	//金币
	txtGold=new zyGame.cls.text(70,40);
	txtGold.setText('金币：');
	txtGold.show();
	nifGold=new zyGame.plg.numberImgFont(100,40,8,13);
	nifGold.setSrc('0123456789.png');
	nifGold.setNumber(StaticVar.nifGold);
	nifGold.show();
	
	//天气
	imgWeather=new zyGame.cls.image(260,10,50,50);
	imgWeather.setSrc('unit.jpg');
	imgWeather.show();
	txtWeather=new zyGame.cls.text(280,30);
	txtWeather.text='晴';
	txtWeather.show();
	
	//积分
	txtScore=new zyGame.cls.text(250,70);
	txtScore.setText('积分：');
	txtScore.show();
	nifScore=new zyGame.plg.numberImgFont(280,70,8,13);
	nifScore.setSrc('0123456789.png');
	nifScore.setNumber(StaticVar.nifScore);
	nifScore.show();
	
	//水桶
	var btnWater=new zyGame.cls.button(10,420,50,50);
	btnWater.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnWater.text.setText('水桶');
	btnWater.onClick=function(){
		console.log('倒水');
	};
	btnWater.show();
	
	//工具
	var imgTool=new zyGame.cls.image(260,420,50,50);
	imgTool.setSrc('unit.jpg');
	imgTool.show();
	
	//道具
	btnProp1=new zyGame.cls.button(80,430,30,30);
	btnProp1.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnProp1.text.setText('小网');
	btnProp1.onClick=function(){
		console.log('使用小网');
	};
	btnProp1.show();
	btnProp2=new zyGame.cls.button(80+35*1,430,30,30);
	btnProp2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnProp2.text.setText('毒药');
	btnProp2.onClick=function(){
		console.log('使用毒药');
	};
	btnProp2.show();
	btnProp3=new zyGame.cls.button(80+35*2,430,30,30);
	btnProp3.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnProp3.text.setText('磁铁');
	btnProp3.onClick=function(){
		console.log('使用磁铁');
	};
	btnProp3.show();
	btnProp4=new zyGame.cls.button(80+35*3,430,30,30);
	btnProp4.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');
	btnProp4.text.setText('肥料');
	btnProp4.onClick=function(){
		console.log('使用肥料');
	};
	btnProp4.show();
	
	//提示信息
	txtInfo=new zyGame.cls.text(100,220);
	txtInfo.setFontSize('36px');
	txtInfo.setFontWeight('bold');
	txtInfo.setFontColor('#ff0000');
	
	//游戏结束
	txtOver=new zyGame.cls.text(100,220);
	txtOver.setText('游戏结束');
	txtOver.setFontSize('36px');
	txtOver.setFontWeight('bold');
	txtOver.setFontColor('#ff0000');
	
	//地鼠对象数组(编号0-15,4*4=16只)
	imgMouse=[];
	//地鼠图像数组
	srcMouse=[['mouse1_1.jpg','mouse1_2.jpg','mouse1_3.jpg'],['mouse2_1.jpg','mouse2_2.jpg','mouse2_3.jpg'],['mouse3_1.jpg','mouse3_2.jpg','mouse3_3.jpg']];
	for (var i=0 ; i<16 ; i++){		
		imgMouse[i]=new zyGame.cls.image(5+80*(i%4),100+80*Math.floor(i/4),70,70);
		imgMouse[i].i=i;
		imgMouse[i].timStay=zyGame.timer.createTimer();//停留时间定时器
		imgMouse[i].timStay.i=i;
		imgMouse[i].timStay.tick=function(){//地鼠逃走
			imgMouse[this.i].hide();
			
			StaticVar.txtFarmHP.HPvalue = (StaticVar.txtFarmHP.HPvalue<=imgMouse[this.i].damage ? 0 : StaticVar.txtFarmHP.HPvalue - imgMouse[this.i].damage);//破坏农场
			//barFarmHP.value = (barFarmHP.value<=imgMouse[this.i].damage ? 0 : barFarmHP.value - imgMouse[this.i].damage);//破坏农场
			barFarmHP.value=StaticVar.txtFarmHP.HPvalue;

			this.off();
			
			//最后一个地鼠出现的停留显示
			LastMouse(imgMouse[this.i].timStay.interval);
			
			if (StaticVar.txtFarmHP.HPvalue==0){//游戏结束
				txtOver.setText('游戏结束');
				txtOver.setFontSize('36px');
				txtOver.setFontWeight('bold');
				txtOver.show();
				
				for (var i=0 ;i<imgMouse.length;i++){
					if(imgMouse[i].visible == 1)
						imgMouse[i].hide();
						
						imgMouse[i].timStay.off();
   				}
				timMouse.off();//关闭主定时器
				StaticVar.TimOverTime.off(); //关闭最后一个鼠出现定时器
			}
		};
		
	
		
		
		//击中地鼠
		imgMouse[i].onClick=function(){
			
			//最后一个地鼠出现的停留显示
			LastMouse(imgMouse[this.i].timStay.interval);
			
			if (timMouse.enabled==1){
				this.hp--;//减1点血
				imgMouse[this.i].setSrc(srcMouse[imgMouse[this.i].kind][imgMouse[this.i].hp-1]);//换图
				if (this.hp==0){//地鼠死了
					//zyGame.src.aud['death.mp3'].play();//播放死亡叫声
					imgMouse[this.i].hide();
					imgMouse[this.i].timStay.off();
					
					StaticVar.nifScore += imgMouse[this.i].score; //加积分	
					StaticVar.nifGold += imgMouse[this.i].gold; //加金币
					nifScore.setNumber(StaticVar.nifScore);
					nifGold.setNumber(StaticVar.nifGold);
					//nifScore.setNumber(nifScore.getNumber()+imgMouse[this.i].score);//加积分
					//nifGold.setNumber(nifGold.getNumber()+imgMouse[this.i].gold);//加金币
					
					//显示加积分提示文本
					txtInfo.setLocation(imgMouse[this.i].x+5,imgMouse[this.i].y+12);
					txtInfo.setText('+'+imgMouse[this.i].score);
					txtInfo.show();
				}
			}
		};
	}    
	
	//最后地鼠停留的时间回调处理方法
	LastMouse = function (Timeinterval){
		//判断时间情况(1分钟)	
		if(StaticVar.GradeTime.GTime >= 30000){
				for (var i in imgMouse){
					imgMouse[i].timStay.off();
				}

				StaticVar.TimOverTime.on();
				StaticVar.TimOverTime.setInterval(Timeinterval+Timeinterval*0.5); //得到最后一个地鼠显示时间
				//得到最后一个地鼠显示时间回调函数
				StaticVar.TimOverTime.tick = function(){
					for (var i=0 ;i<imgMouse.length;i++){
						if(imgMouse[i].visible == 1)
						imgMouse[i].hide();
						
						imgMouse[i].timStay.off();
					}
					PassShow(); //过关显示

					timMouse.off();//关闭主定时器				
					StaticVar.TimOverTime.off(); //关闭最后一个鼠出现定时器
					txtInfo.hide();
				}
			}
	}
	//过关之后的显示和信息的赋初值
    function PassShow(){
		//通过第一关游戏结束
		txtOver.setLocation(80, 190)
		txtOver.setText('恭喜过关');
		txtOver.setFontSize('20px');
		txtOver.setFontWeight('bold');
		txtOver.setFontColor('#ff0000');
		
		//设置初始值
		StaticVar.speed = StaticVar.speed*0.8;
		StaticVar.imgUnit.setText ++;	//关卡号+1
		StaticVar.txtFarmHP.HPceil = 10; //HP加满
		StaticVar.txtFarmHP.HPvalue = 10;//HP加满
			
		//显示提示信息			
		GradeLayer.show();
		NextGrade.show();
		txtOver.show();	
	}
	
	
	//主定时器
	timMouse=zyGame.timer.createTimer(1500,1);
	timMouse.tick=function(){		
		
		//计时器显示数据
		StaticVar.GradeTime.GTime =	StaticVar.clkTime.get();
		GradeShow.setText('运行时间：'+ Math.floor( StaticVar.GradeTime.GTime/1000)+'速度:'+ Math.floor(StaticVar.speed));
		GradeShow.show();
		
		
		txtInfo.hide();		
		do{//随机得到一个空的洞口
			var rnd=zyGame.util.rnd(0,imgMouse.length-1);
		}while(imgMouse[rnd].visible!=0);
		
		imgMouse[rnd].kind=zyGame.util.rnd(0,2);//随机得到一个地鼠种类
		//设置地鼠属性
		switch (imgMouse[rnd].kind){
			case 0:
				imgMouse[rnd].hp=1;//血量
				imgMouse[rnd].damage=1;//破坏值
				imgMouse[rnd].score=10;//奖励积分
				imgMouse[rnd].gold=5;//奖励金币
				imgMouse[rnd].timStay.setInterval(StaticVar.speed);//停留时长
				break;
			case 1:
				imgMouse[rnd].hp=2;
				imgMouse[rnd].damage=2;
				imgMouse[rnd].score=20;
				imgMouse[rnd].gold=10;
				imgMouse[rnd].timStay.setInterval(StaticVar.speed*0.875);
				break;
			case 2:
				imgMouse[rnd].hp=1;
				imgMouse[rnd].damage=1;
				imgMouse[rnd].score=80;
				imgMouse[rnd].gold=25;
				imgMouse[rnd].timStay.setInterval(StaticVar.speed*0.75);
				break;
		}
		imgMouse[rnd].setSrc(srcMouse[imgMouse[rnd].kind][imgMouse[rnd].hp-1]);
		imgMouse[rnd].show();
		imgMouse[rnd].timStay.on();
	};
}

//加载完毕开始游戏
function gameStart(){
	

	gameInit();
	timMouse.on();
	
}

 







