/**
 * 示例 图像控件 zyGame.cls.image
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
//设置按钮文字
zyGame.cls.button.prototype.setText = function(s) {
        this.text.setText(s);
};
function gameStart(){
    var imgBg = new zyGame.cls.image(10, 50, 150, 200);// 创建图片
    imgBg.setSrc('bg.jpg');//设置图片地址

    var layTest=new zyGame.cls.layer(10,10,300,300);//创建图层
    imgBg.setParent(layTest);//设置图片图层
   
    var btn=new zyGame.cls.button(40,20,50,30);//创建按钮
    btn.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn.setText('隐藏图片');//设置按钮文字
    btn.setParent(layTest);//设置按钮图层
    btn.show();//显示按钮

    var btn2=new zyGame.cls.button(100,20,50,30);//创建按钮
    btn2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn2.setText('显示图片');//设置按钮文字　
    btn2.setParent(layTest);//设置按钮图层
    btn2.show();//显示按钮

    var btn3=new zyGame.cls.button(160,20,50,30);//创建按钮
    btn3.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn3.setText('锁锚');//设置按钮文字　
    btn3.setParent(layTest);//设置按钮图层
    btn3.show();//显示按钮

    layTest.show();//显示图层
    imgBg.show();//显示图片
    imgBg.onClick=function(){
        imgBg.setLocation(20,50);//设置图片坐标
        imgBg.setSize(100,150);//设置图片大小
        imgBg.position('center');//设置图片位置(left,center,right,fullx,top,middle,bottom,fully)
    }
    btn.onClick=function(){
        imgBg.hide();//隐藏图片
    }
    btn2.onClick=function(){
        imgBg.show();//显示图片
    }
    btn3.onClick=function(){
        imgBg.setAnchor(0,1,0,1);//设置锚锁(上下左右)
        imgBg.setAutoResize(1);//控制自身大小。0不变，１变        

        layTest.setLocation(20,10);//设置图层坐标
        layTest.setSize(400,400);//设置图层大小
    }
}
