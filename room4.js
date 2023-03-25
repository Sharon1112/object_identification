
img = "";
status = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('kitchen.jpg');
}

function draw(){
    image(img, 0, 0, 550, 420);
    fill("#050505");
    text("Table", 30, 200);
    noFill();
    stroke("#050505");
    rect(25, 180, 350, 200);

    fill("#050505");
    text("Fridge", 355, 120);
    noFill();
    stroke("#050505");
    rect(350,100,150,220);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if (error){
    console.error;
}
console.log(results);
}