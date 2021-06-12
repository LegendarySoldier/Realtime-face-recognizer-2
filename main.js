function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(700,250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/upK5iFIZT/model.json', modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
    image(video, 0, 0, 500, 500);
    classifier.classify(video, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy_name").innerHTML = results[0].confidence.toFixed(3);

    }
}