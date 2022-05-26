
nosey=0;
nosex=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/tJ9PwrPb/Clown-Nose.png");

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Loaded")
}
function take_snap(){
    save("Clownoseimage.png");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        nosey= result[0].pose.nose.y;
        nosex=result[0].pose.nose.x;
        console.log("nose x ="+result[0].pose.nose.x);
        console.log("nose y ="+result[0].pose.nose.y);
    }
}
function draw(){
    image( video,0,0,300,300);
    fill("red");
    stroke("red");
    image(clown_nose,nosex-18,nosey-17,30,30);
}