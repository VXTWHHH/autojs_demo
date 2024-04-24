auto();
//请求横屏截图Capture
requestScreenCapture(false);


//角色x 90 y 135

//快速整理图标x 1244 y 86
//快速整理x 1200 y 670

//最右上角返回x 1216 y30

//购买x 982 y 588

//购买钱不够 左上角 x 417 y 468 右下角 x 522 y 500
// 钱不够的X x 969 y 166
//商品购买界面的X x 1122 y 89 

//邮箱x 1093 y 36
//物资归还 x 50 y 220
//前往领取 x 1094 y 666
//第一组科恩币x84 y147
//第一个空位x 694 y 160
//市场 x85 y359
//要购买的商品 x 412 y 486


let role = [90, 135],
    arrange_i = [1244, 86],
    arrange = [1200, 670],
    back_m = [1216, 30],
    buy = [982, 588],
    back_n = [969, 166],
    back = [1122, 89],
    mail = [1093, 36],
    revert = [50, 220],
    receive = [1094, 666],
    money = [84, 147],
    empty = [694, 160],
    market = [85, 359],
    goods = [690, 309];


while (true) {
    clickC(market);
    clickC(goods);
    clickC(buy);
    //钱不够循环
    while (findColorM(captureScreen(), 406, 473, 100, 50)||findColorM(captureScreen(),885,604,30,4)) {
        clickC_M(back_n,50);
        clickC_M(back,50);
        clickC_M(goods,0);
        clickC_M(buy,0);
        sleep(100);
    }
    clickC(back);
    clickC(back);
    clickC(back_m);
    clickC(role);
    clickC(arrange_i);
    clickC(arrange);
    clickC(back_m);
    clickC(mail);
    clickC(revert);
    clickC(receive);
    clickC(money);
    clickC(empty);
    clickC(back_m);
    clickC(back_m);
}



function clickM(x, y) {
    let r = Mathx.randInt(0, 10) - 5;
    sleep(300);
    while (!click(x + r, y + r));
    sleep(300);
}

function clickC(coordinate) {
    clickM(coordinate[0], coordinate[1]);
}

function click_M(x, y, t) {
    let r = Mathx.randInt(0, 10) - 5;
    if (t > 0) sleep(t);
    while (!click(x + r, y + r));
    if (t > 0) sleep(t);
}

function clickC_M(coordinate,t) {
    click_M(coordinate[0], coordinate[1], t);

}

function cr(img) {
    let xr = img.getWidth() / 2;
    let yr = img.getHeight() / 2;
    return [xr, yr];
}

function findColorM(img, x, y, xx, yy) {
    let point = findColor(img, "#FF703B", {
        region: [x, y, xx, yy],
        threshold: 100
    });
    console.log(img);
    console.log(point);
    return point;
}