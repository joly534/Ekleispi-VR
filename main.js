let cubes = document.querySelectorAll('.cube');
let scene = document.getElementById('world');

setInterval(() => {
    for(let i=0;i<cubes.length;i++){
        let Couleurs = ['black', '#ffd700', '#ffd700', '#ffd700'];        
        let randomize = Math.floor(Math.random()* 7);
        cubes[i].setAttribute('material', {
            color:Couleurs[randomize]
        })
    };
}, 500);


// let video= document.getElementById('video_prestations');
// video.setAttribute('src', 'assets/video/prestations.mp4');
// video.setAttribute('width', '3');
// video.setAttribute('height', '1.5');
// video.setAttribute('position', '-7.46 2.25 -9.99');
// video.setAttribute('loop', 'false');

let ring= document.getElementById('ring');
let camera = document.getElementById('camera');
// document.addEventListener('keydown', function (e) {
//     if(e.code === 'KeyA') {
//         camera.object3D.position.x -=0.05;
//     } else if(e.code === 'KeyD'){
//         camera.object3D.position.x +=0.05;
//     }  else if(e.code === 'KeyW'){
//         camera.object3D.position.z -=0.05;
//     }  else if(e.code === 'KeyS'){
//         camera.object3D.position.z +=0.05;
//     } 
// });


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
//indication de sens de progression
function createSphereSense() {
    let marquage=[];
    let groupe = document.createElement('a-entity');
    let sphere1 = document.createElement('a-sphere');
    let sphere2 = document.createElement('a-sphere');
    let sphere3 = document.createElement('a-sphere');
    let sphere4 = document.createElement('a-sphere');
    let sphere5 = document.createElement('a-sphere');

    marquage.push(sphere1, sphere2, sphere3, sphere4, sphere5)

    console.log(marquage)
    groupe.setAttribute('id', 'principale');
    sphere1.setAttribute('position', {x: 0, y:-1, z: 0}, true);
    sphere2.setAttribute('position', {x: -2, y:-1, z:2}, true);
    sphere3.setAttribute('position', {x: -4, y:-1, z:4}, true);
    sphere4.setAttribute('position', {x: 2, y:-1, z:2}, true);
    sphere5.setAttribute('position', {x: 4, y:-1, z:4}, true);
    console.log(groupe)

    for (let i=0; i<marquage.length; i++){
        marquage[i].setAttribute('radius', 0.2);
        groupe.appendChild(marquage[i]);
    }
    scene.appendChild(groupe);

}

createSphereSense()