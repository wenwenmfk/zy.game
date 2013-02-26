/**
 * 示例 刷新率 zyGame.plg.fps
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
        ['bar_bg.jpg','bar_fore.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};

function gameStart() {
    
    var fps1 = new zyGame.plg.fps(20,70,100,30);//创建
    
  fps1.show();//显示
   

}
 
