let rotation=0;
let interval;
function generateCircle() {
    let numberOfElements = document.getElementById('elements').value;
    let radius = document.getElementById('radius').value;
    let degree = document.getElementById('speed').value;
    let angle = (2*Math.PI) / numberOfElements;
    const radian = ((Math.PI * (degree%360))/180);
    let rotationSpeed = radian;


    if(!numberOfElements|| numberOfElements < 0 || !radius || radius < 0 || !degree){
        alert('Please enter valid value in all the fields');
        return
    }

    if(interval){
        clearInterval(interval);
    }

    generateCircleElements(numberOfElements, radius, angle, 0, false);

    interval = setInterval(function() {
        generateCircleElements(numberOfElements, radius, angle, rotationSpeed, true);
        rotationSpeed += radian;
    },3000);
}

function generateCircleElements(count, radius, degree, radian, isRotationEnabled){
    let parent = document.getElementById('parent');
    let container1 = document.getElementById('circle-container');
    if(container1){
        container1.remove();
    }

    let container = document.createElement("div");
    container.setAttribute('id', 'circle-container');
    const height = window.innerHeight/2;
    const width = window.innerWidth/2;
    let angle = isRotationEnabled ? radian : 0;
    for(let i=1; i<=count ; i++){
        let parentDiv = document.createElement("div");
        parentDiv.classList.add('node');
        parentDiv.style.left = Math.round(width + (radius * Math.cos(angle))) + 'px';
        parentDiv.style.top =  Math.round(height + (radius * Math.sin(angle)))+ 'px';
        container.append(parentDiv);
        parent.append(container);
        angle += degree;
    }
}

