auto();
for (let i = 0; i < 30; i++) {



    clickM(442, 385);
    clickM(755, 674);
    clickM(1015, 605);

    //请求横屏截图
    requestScreenCapture(true);
    //截图
    var img = captureScreen();
    //获取在点(100, 100)的颜色值
    var color = images.pixel(img, 100, 100);
    //显示该颜色值
    toast(colors.toString(color));



    var img = images.read("/sdcard/大图.png");
    var templ = images.read("/sdcard/小图.png");
    var p = findImage(img, templ);
    if (p) {
        toast("找到啦:" + p);
    } else {
        toast("没找到");
    }













}

function clickM(x,y){
    let r = Mathx.randInt(0, 10) - 5;
    sleep(100);
    while(!click(x+r, y+r));
    sleep(100);
}