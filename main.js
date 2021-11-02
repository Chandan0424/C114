noseX=0;
noseY=0;

function preload(){
    moustache=loadImage("Moustache.png");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    image(moustache,noseX,noseY,50,50)
}

function takeSnapShot(){
    save('mustache.png');
}

function modelLoaded(){
    console.log("Model is Loaded!!!!:):o");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-115;
        noseY=results[0].pose.nose.y-50;
    }
}