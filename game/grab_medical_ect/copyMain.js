auto();
//clickM(442, 385);
// clickM(755, 674);
// clickM(1015, 605);


//请求横屏截图Capture
requestScreenCapture(false);

while (true) {
    clickM(449, 373);
    sleep(500);
    //截图
    captureScreen('./capy.png');
    var img = images.read('./capy.png');
    //var img = images.read('./y.png');

    let templ = images.read('./ne.png');
    var p = findImage(img, templ, {
        region: [1032, 649]
    });
    if (p) {
        let x = p.x + cr(templ)[0];
        let y = p.y + cr(templ)[1]
        toast("找到啦:" + x + "," + y);
        clickM(757, 674);
        clickM(1021, 600);
        clickM(1122, 675);
        sleep(2000);
        //
        clickM(1250, 87);
        clickM(1194, 672);
        //
        sleep(1000);
        clickM(694, 321);
        clickM(1169, 679);
        let point;
        do {
            img = captureScreen();
            point = findColor(img, "#FF703B", {
                region: [400, 330, 30, 30],
                threshold: 4
            });
            if (point) {
                toast("找到啦:" + point);
                clickM(854, 496);
                clickM(876, 373);
                clickM(1061, 620);
                clickM(1222, 30);
            } else {
                toast("没找到");

                clickM(1177, 674);
                clickM(950, 205);
            }
        } while (!point);


    } else {
        toast("没找到");
        clickM(1123, 672);
    }
    //2052 1000
    //2280 1046

    // clickM(1646,986);
    // clickM(1799,910);

}

function clickM(x, y) {
    let r = Mathx.randInt(0, 10) - 5;
    sleep(300);
    while (!click(x + r, y + r));
    sleep(300);
}

function cr(img) {
    let xr = img.getWidth() / 2;
    let yr = img.getHeight() / 2;
    return [xr, yr];
}