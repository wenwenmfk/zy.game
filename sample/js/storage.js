/**
 * 示例 存储控件 zyGame.cls.storage
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
        ['button_normal.jpg','button_down.jpg','button_disabled.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};
//设置按钮文字
zyGame.cls.button.prototype.setText = function(s) {
        this.text.setText(s);
};
function gameStart() {

    var storage1 = new zyGame.cls.storage();//创建存储(默认是session,还有一个是local)
    //  storage1 = new zyGame.cls.storage('local');//创建存储(默认是session,还有一个是local)
    
    storage1.save('id', '1000');//设置存储信息
    storage1.save('name', 'zm');//设置存储信息
    storage1.save('age', '100');//设置存储信息
    
    
    var btn=new zyGame.cls.button(40,20,50,30);//创建按钮
    btn.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn.setText('获取');//设置按钮文字   
    btn.show();//显示按钮

    var btn2=new zyGame.cls.button(100,20,50,30);//创建按钮
    btn2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn2.setText('删除');//设置按钮文字　
    btn2.show();//显示按钮

    var btn3=new zyGame.cls.button(160,20,50,30);//创建按钮
    btn3.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn3.setText('设置');//设置按钮文字　
    btn3.show();//显示按钮
    
    var btn4=new zyGame.cls.button(210,20,50,30);//创建按钮
    btn4.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn4.setText('清空');//设置按钮文字　
    btn4.show();//显示按钮
    
    btn.onClick=function(){
        alert(storage1.get('name'));//获取存储信息
    };
    btn2.onClick=function(){
    	storage1.del('name');//删除存储信息
    };
    btn3.onClick=function(){
    	storage1.save('name', 'zm');//设置存储信息
    };
    btn4.onClick=function(){
    	storage1.clear();//清空存储信息
    };
    
    
    btn.show();//显示按钮
    btn2.show();//显示按钮
    btn3.show();//显示按钮
    btn4.show(); //显示按钮
}
 
