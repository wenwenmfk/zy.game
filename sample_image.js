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
        ['bg.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};
function gameStart(){
    var imgBg = new zyGame.cls.image(10, 10, 150, 200);// 创建图片
    imgBg.setSrc('bg.jpg');//设置图片地址
    var layTest=new zyGame.cls.layer(10,10,300,300);//创建图层
    imgBg.setParent(layTest);//设置图片图层
    layTest.show();//显示图层
    imgBg.show();//显示图片
    imgBg.onClick=function(){
        imgBg.setLocation(20,20);//设置坐标
        imgBg.setSize(100,150);//设置图片大小
        imgBg.position('center');//设置图片位置(left,center,right,fullx,top,middle,bottom,fully)
        imgBg.onClick=function(){
            imgBg.hide();//隐藏图片
        }   
    }   

