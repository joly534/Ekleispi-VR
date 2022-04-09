let cubes = document.querySelectorAll('.cube');
let scene = document.getElementById('world');

setInterval(() => {
    for(let i=0;i<cubes.length;i++){
        let Couleurs = ['black', '#ffd700', '#ffd700', '#ffd700'];
        
        let randomize = Math.floor(Math.random()* 7);
        cubes[i].setAttribute('material', {
            color:Couleurs[randomize]
        })

    }
    

}, 500);


// let video= document.getElementById('video_prestations');
// video.setAttribute('src', 'assets/video/prestations.mp4');
// video.setAttribute('width', '3');
// video.setAttribute('height', '1.5');
// video.setAttribute('position', '-7.46 2.25 -9.99');
// video.setAttribute('loop', 'false');

let ring= document.getElementById('ring');
let camera = document.getElementById('camera');
document.addEventListener('keydown', function (e) {
    console.log(e.codez)
    if(e.code === 'KeyA') {
        console.log(camera.getAttribute('position'));
        camera.object3D.position.x -=0.05;
    } else if(e.code === 'KeyD'){
        camera.object3D.position.x +=0.05;

    }  else if(e.code === 'KeyW'){
        camera.object3D.position.z -=0.05;

    }  else if(e.code === 'KeyS'){
        camera.object3D.position.z +=0.05;

    } 
});


// éléments du bureau
let bureau = [];

let tiroir1 = document.getElementById('tiroir1');
let tiroir2 = document.getElementById('tiroir2');
let tiroir3 = document.getElementById('tiroir3');
let tiroir4 = document.getElementById('tiroir4');
let tiroir5 = document.getElementById('tiroir5');
let tiroir6 = document.getElementById('tiroir6');

bureau.push(tiroir1, tiroir2, tiroir3, tiroir4, tiroir5, tiroir6);

bureau.forEach(element => {
    element.addEventListener('mouseenter', function(){
        element.setAttribute('position', {z: 0.6}, true);

    })
    element.addEventListener('mouseleave', function(){
        element.setAttribute('position', {z: 0.214}, true);

    })
    
});
