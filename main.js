noseX = "";
noseY = "";
leftWristX = "";
rightWristX = "";
difference = 0;

function setup() {
    canvas = createCanvas(400, 450);
    canvas.position(650, 70);
    video = createCapture(VIDEO);
    video.size(600, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("model initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        console.log("noseX="+noseX);
        noseY=results[0].pose.nose.y;
        console.log("noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        console.log("leftwristX="+leftWristX);
        rightWristX=results[0].pose.rightWrist.x;
        console.log("rightWristX="+rightWristX);
        difference=leftWristX-rightWristX;
    }

}

function draw() {
    background("grey");
    fill("red");
    square(noseX,noseY,difference);

}