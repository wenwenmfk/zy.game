/**
 * 示例 文本控件 zyGame.cls.text
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
        ['bg.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};

function gameStart(){
    var text1 = new zyGame.cls.text(10, 20);// 创建文本
    text1.setText('hello world!');//设置文本文字
    text1.setFontFamily('Sans-serif');//设置字体
    text1.setFontSize('14px');//设置字体大小
    text1.setFontWeight('bold');//设置字体粗细
    
    var layTest=new zyGame.cls.layer(10,10,300,300);//创建图层
    text1.setParent(layTest);//设置文本图层
    

    layTest.show();//显示图层
    text1.show();//显示文本
    
}