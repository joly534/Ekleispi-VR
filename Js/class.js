class Sphere {
    constructor(){
        let light= document.createElement('a-sphere');
        this.x = 2;
        this.y = 1;
        this.z = -1;
        this.radius = 0.2;
        this.color = "white";

        this.draw = function() {
            light.setAttribute('radius', this.radius);
            light.setAttribute('position', { x:this.x, y:this.y, z:this.z} );            
        }

        this.move = function() {
            this.z -= 0.5;
        }
    }
}