let rotation=0;
let interval;

const height = window.innerHeight/2;
const width = window.innerWidth/2;

let circleState = {
coordinates: []
};

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
    },1000);
}

function generateCircleElements(count, radius, degree, radian, isRotationEnabled){
    let parent = document.getElementById('parent');
    let container1 = document.getElementById('circle-container');
    if(container1){
        container1.remove();
    }

    let container = document.createElement("div");
    container.setAttribute('id', 'circle-container');
    let angle = isRotationEnabled ? radian : 0;
    for(let i=1; i<=count ; i++){
        let parentDiv = document.createElement("div");
        parentDiv.classList.add('node');
        parentDiv.setAttribute('id', i);
        const x = Math.round(width + (radius * Math.cos(angle)));
        const y = Math.round(height + (radius * Math.sin(angle)));
        parentDiv.style.left = x + 'px';
        parentDiv.style.top = y + 'px';
        container.append(parentDiv);
        parent.append(container);
        circleState.coordinates.push({
            id: i,
            xCoordinate: x,
            yCoordinate: y,
            reductionCount: 0
        });
        angle += degree;
    }
}

document.addEventListener('keydown' ,(e)=>{
    switch(e.key) {
        case "ArrowUp":
            rotation+=20;
            document.getElementById("parent").style.transform = `rotateX(${rotation}deg)`;
            break;
        case "ArrowDown":
            rotation-=20;
            document.getElementById("parent").style.transform = `rotateX(${rotation}deg)`;
            break;
        default: return;
    }
})

// let rotation=0;
// let interval;
// let gRadius;

// class Point{
//     constructor(x, y, side, angle){
//         this.x=x;
//         this.y=y;
//         this.side= side;
//         this.shift=0;
//         this.angle= angle;
//     }
// }

// let points=[];

// function generateCircle() {
//     let numberOfElements = document.getElementById('elements').value;
//     let radius = document.getElementById('radius').value;
//     let degree = document.getElementById('speed').value;
//     let angle = (2*Math.PI) / numberOfElements;
//     const radian = ((Math.PI * (degree%360))/180);
//     let rotationSpeed = radian;
//     gRadius=radius;

//     if(!numberOfElements|| numberOfElements < 0 || !radius || radius < 0 || !degree){
//         alert('Please enter valid value in all the fields');
//         return
//     }

//     if(interval){
//         clearInterval(interval);
//     }

//     let ang=0;
//     const height = window.innerHeight/2;
//     const width = window.innerWidth/2;

//     console.log(height);

//     for(let i=0;i<numberOfElements;i++){
//         let y= Math.round(height + (radius * Math.sin(ang)));
//         let side;
//         if(y>height){
//             side="UP";
//         }else if(y<height){
//             side="DOWN";
//         }
//         points[i]= new Point(Math.round(width + (radius * Math.cos(ang))),
//             y, side, ang);
//         ang+=angle;
//         console.log(points[i].side)
//     }

//     generateCircleElements(numberOfElements, radius, angle, 0, false);

//     interval = setInterval(function() {
//         generateCircleElements(numberOfElements, radius, angle, rotationSpeed, true);
//         rotationSpeed += radian;
//     },500);
// }

// function generateCircleElements(count, radius, degree, radian, isRotationEnabled){
//     let parent = document.getElementById('parent');
//     let container1 = document.getElementById('circle-container');
//     if(container1){
//         container1.remove();
//     }

//     let container = document.createElement("div");
//     container.setAttribute('id', 'circle-container');
//     const height = window.innerHeight/2;
//     const width = window.innerWidth/2;
//     let angle = isRotationEnabled ? radian : 0;
//     for(let i=0; i<count ; i++){
//         let parentDiv = document.createElement("div");
//         parentDiv.classList.add('node');
//         points[i].x= Math.round(width + (radius * Math.cos(angle)));
//         points[i].y= Math.round(height + (radius * Math.sin(angle)));
//         let shift= points[i].y;
//             shift +=points[i].shift;
        
//         points[i].angle= angle;
//         parentDiv.style.left = points[i].x + 'px';
//         parentDiv.style.top = shift + 'px';
//         container.append(parentDiv);
//         parent.append(container);
//         angle += degree;
//     }
// }

// document.addEventListener('keydown',(e)=>{
//     switch(e.key){
//         case "ArrowUp":
//             upKeyClicked();
//             break;
//         case "ArrowDown":
//             downKeyClicked();
//             break;
//     }
// })

// let loop=false;

// function upKeyClicked(){
//     if(!loop){
//         loop= true;
//         const height = window.innerHeight/2;
//         for(let i=0;i<points.length;i++){
//         if(points[i].side=="UP"){
//             let y= Math.round(height + (gRadius * Math.sin(points[i].angle)));
//             points[i].shift -=1;
//             console.log("dasdas")
//             let shift= y-height;
//             let s= height-shift;
//             if((points[i].y+points[i].shift)<=s){
//                 points[i].side= "DOWN";
//             }
//         }else if(points[i].side=="DOWN"){
//             let y= Math.round(height + (gRadius * Math.sin(points[i].angle)));
//             points[i].shift +=1;
//             console.log("***************888")
//             let shift= height-y;
//             let s= height+shift;
//             if((points[i].y+points[i].shift)>=s){
//                 points[i].side= "UP";
//             }
//         }
//         }   
//     }
//     loop= false;
// }

// function downKeyClicked(){
//     if(!loop){
//         loop= true;
//         const height = window.innerHeight/2;
//         for(let i=0;i<points.length;i++){
//         if(points[i].side=="UP"){
//             let y= Math.round(height + (gRadius * Math.sin(points[i].angle)));
//             points[i].shift +=1;
//             let shift= height-y;
//             let s= height+shift;
//             if((points[i].y+points[i].shift)>=s){
//                 points[i].side= "DOWN";
//             }
//         }else if(points[i].side=="DOWN"){
//             let y= Math.round(height + (gRadius * Math.sin(points[i].angle)));
//             points[i].shift -=1;
//             let shift= y-height;
//             let s= height-shift;
//             if((points[i].y+points[i].shift)<=s){
//                 points[i].side= "UP";
//             }
//         }
//     }
//     }
//     loop=false;
// }