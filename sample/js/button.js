/**
 * 示例 按钮控件 zyGame.cls.button
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
function gameStart(){
	var btn=new zyGame.cls.button(10,20,50,30);//创建按钮
    btn.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn.setText('提交');//设置按钮文字
	
    var btn2=new zyGame.cls.button(100,20,50,30);//创建按钮
    btn2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn2.setText('button');//设置按钮文字　
    
    var layTest=new zyGame.cls.layer(10,10,300,300);//创建图层
    btn2.setParent(layTest);//设置按钮图层
    btn.setParent(layTest);//设置按钮图层
    
    btn2.disable();//设置铵钮失效
    
    layTest.show();//显示图层
    btn2.show();//显示按钮
    btn.show();//显示按钮
   
    
}
