auto();
//请求横屏截图Capture
requestScreenCapture(false);

while (true) {
    for (let i = 0; i < 2; i++) {

        clickM(449, 373);
        sleep(500);
        //截图
        // captureScreen('./capy.png');
        // var img = images.read('./capy.png');
        var img = captureScreen();;
        //var img = images.read('./y.png');

        let templ = images.read('./ne.png');
        var p = findImage(img, templ, {
            region: [1032, 649]
        });
        //条件不足

        if (!p) {
            clickM(1123, 672);
            continue;
        }
        let x = p.x + cr(templ)[0];
        let y = p.y + cr(templ)[1]
        //toast("找到啦:" + x + "," + y);

        do {
            //补齐
            clickM(757, 674);

            while (true) {
                sleep(500);
                img = captureScreen();
                let text = ocr(img, [490, 580, 120, 50]);
                // 使用正则表达式提取数字部分
                let firstElement = text[0];
                let match = firstElement.match(/\d+/); // 匹配连续的数字部分
                // 提取到的数字部分
                let number = match ? parseInt(match[0]) : null;
                if (number && number < 1900) {
                    break;
                }
                clickM(1005, 110);

            }

            //补齐材料
            clickM(1021, 600);
            img = captureScreen();;
            p = findImage(img, templ, {
                region: [1032, 649]
            });

        } while (p);


        //交换
        clickM(1122, 675);
    }
    sleep(2000);
    //
    clickM(1250, 87);
    clickM(1194, 672);
    //
    sleep(1000);
    clickM(694, 321);

    let point;
    do {
        clickM(1169, 679);
        //sleep(3000);
        img = captureScreen();
        //sleep(3000);
        point = findColor(img, "#FF703B", {
            region: [400, 330, 30, 30],
            threshold: 100
        });
        //sleep(3000);
        if (point) {
            //log("找到啦:" + point);
            clickM(854, 496);
            clickM(876, 373);
            clickM(1061, 620);
            clickM(1222, 30);
        } else {
            //log("没找到");

            //clickM(1177, 674);
            clickM(950, 205);
        }
    } while (!point);



}
//2052 1000
//2280 1046

// clickM(1646,986);
// clickM(1799,910);



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