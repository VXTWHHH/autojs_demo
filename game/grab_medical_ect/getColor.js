requestScreenCapture(true);
sleep(1000);
//var img = captureScreen("/sdcard/screencapture" + 1 + ".png");
 var img = captureScreen();
 let arr = [];
 for(let i = -100;i<=100;i++){
    for(let j = -100;j<=100;j++){
        var color = images.pixel(img, 673+i, 915+j);
        if(colors.toString(color)!=='#00000000'){
            arr.push(color);
        }
    }
 }
 console.log(arr);
 var color = images.pixel(img, 673, 915);
    //显示该颜色值
    sleep(1000);
    toast(colors.toString(color));
    sleep(1000);


    console.log(colors.toString(color));