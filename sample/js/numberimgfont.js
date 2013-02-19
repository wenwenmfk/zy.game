/**
 * 示例 数字图像化 zyGame.cls.numberimgfont
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
        ['0123456789.png','button_normal.jpg','button_down.jpg','button_disabled.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};
//设置按钮文字
zyGame.cls.button.prototype.setText = function(s) {
        this.text.setText(s);
};
function gameStart() {

    niftest = new zyGame.plg.numberImgFont(20,20,8,13);
    niftest.setSrc('0123456789.png');//设置图像地址
    
    niftest.setNumber('9');//设置显示数字
   
    niftest.setLength('2');//设置显示数字长度
    console.log(niftest);
    
    
    
    layTest=new zyGame.cls.layer(10,10,300,300);
    niftest.setParent(layTest);
    
    btn=new zyGame.cls.button(40,20,50,30);//创建按钮
    btn.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn.setText('显示数字');//设置按钮文字
    btn.setParent(layTest);//设置按钮图层
    btn.show();//显示按钮
    
    btn.onClick=function(){
    	alert(niftest.getNumber());//获得显示数字
    };
  
    layTest.show(); 
    niftest.show();
}
 
