/**
 * 示例 计时器控件 zyGame.cls.clock
 */

//参数设置
zyGame.config={
    title:      //游戏标题
        '快乐地鼠',
    width:      //游戏区域宽(若全屏显示,则为最小宽度)
        500,
    height:     //游戏区域高(若全屏显示,则为最小高度)
        500,
    fullscreen: //0为非全屏，1为全屏
        0,
    fpslimit:   //最高刷新上限(建议使用默认值)
        60,
    src:
        /*
           需预先加载的资源文件
           图片文件支持jpg,png格式,放在目录img下
           声音文件支持mp3格式,放在目录aud下
           视频文件支持mp4格式,放在目录vid下
           如果有子目录,写上相对路径即可
         */
        ['bar_bg.jpg','bar_fore.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};
//设置按钮文字
zyGame.cls.button.prototype.setText = function(s) {
        this.text.setText(s);
};
function gameStart() {

    var clock_text = new zyGame.cls.clock();//创建时间(取当前时间戳)
    
    var text1 = new zyGame.cls.text(10, 70);// 创建文本
    text1.setSize('36px');//设置文本大小    
    
	var layTest = new zyGame.cls.layer(10, 10, 300, 300);//创建图层
    text1.setParent(layTest);//设置文本图层
	
	var btn2=new zyGame.cls.button(100,20,50,30);//创建按钮
    btn2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn2.setText('设置时间戳');//设置按钮文字　
    btn2.setParent(layTest);//设置按钮图层
    btn2.show();//显示按钮
    
    var btn=new zyGame.cls.button(40,20,50,30);//创建按钮
    btn.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn.setText('获取时间差');//设置按钮文字　
    btn.setParent(layTest);//设置按钮图层
    btn.show();//显示按钮
    
    btn.onClick=function(){
	    var time_difference = clock_text.get();//获取(当前时间戳－设置时间戳)的差值(毫秒数)
        text1.setText(time_difference);//设置文本文字为时间差
    };
    
    btn2.onClick=function(){
        clock_text.set(Date.now());//(设置一个时间戳)默认为当前时间戳
		
    };
    
    layTest.show();//显示图层
    text1.show();//显示文本
    btn.show();//显示按钮
	btn2.show();//显示按钮
}
 
