lipsX=0;
lipsY=0;
lipsstick_lips=loadimage
function preload() {
    clown_lips=loadImage('https://i.postimg.cc/HjGrrW0r/360-F-121890646-w-Rl-GFSJh-TPrv-VAFfj63u-YEf-BGWm-IYb-CK.jpg');
}
    function setup()  {
        canvas = createCanvas(300,300);
        canvas.center();
    }

    function draw() {
    }
    
    function take_snapshot(){
    save('myFilterImage.png');
    }
    function preload(){

    }
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO)
        video.size(300, 300);
        video.hide();
         
        poseNet = ml5.poseNet(video, modelLoaded)
        poseNet.on('pose', gotPoses);
    }

    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }

    function gotPoses(results)  
    {
        if(results.length > 0)
        {
            console.log(results);
            lipsX = results[0].pose.lips.x;
            lipsY = results[0].pose.lips.y;
            console.log("lips x = " + lipsX);
            console.log("lips y = " + lipsY);
        }
    }

    function draw() {
        image(video, 0, 0, 300, 300,);
        fill(255,0,0);
        stroke(255,0,0);
        image(lipsstick_lips, lipsX, lipsY, 30, 30);
    }

    function take_snapshot(){
        save('myFilterImage.png')
    }

    