


function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_FhSaDhkT/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("HELLO")
    classifier.classify(gotresult)
}



function gotresult(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
    }
}