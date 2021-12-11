var mouthy= 0;
var mouthx= 0;

function preload(){
    clown_mouth= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);

}

function Takesnapshot(){
 save("Image.png");


}
 
function draw(){
image(video,0,0,300,300);
fill("#32a8a2");
stroke("#3236a8");

image(clown_mouth,mouthx,mouthy,30,30);

}

function modelLoaded(){
    console.log("poseNet is Intialized");
    
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    mouthx=results[0].pose.mouth.x-15;
mouthy=results[0].pose.mouth.y-15;
    console.log("mouthx= "+mouthx);
    console.log("mouth= "+mouthy);

}
}