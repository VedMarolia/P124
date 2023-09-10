noseX = 0
noseY = 0
rightWristX = 0
leftWristX = 0
difference = 0

function preload(){

}

function setup(){
    canvas = createCanvas(550 , 500)
    canvas.position(700 , 100)
    
    video = createCapture(VIDEO)
    video.size(550 , 500)

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotPoses)
}

function draw(){
    background("gray")
    fill("blue")
    stroke("red")
    rect(noseX , noseY , difference , difference)
}

function modelLoaded(){
    console.log("Model is Loaded")
}

function gotPoses(error,result){

    if(error){
        console.log(error)
    }

    else{
        console.log(result)
        
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = "+noseX+ "&& noseY = " + noseY)

        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        console.log("Right Wrist X = " +rightWristX+ "&& Left Wrist X = " +leftWristX)

        difference = Math.floor(rightWristX - leftWristX)
        console.log("difference = " +difference)
    }
}
