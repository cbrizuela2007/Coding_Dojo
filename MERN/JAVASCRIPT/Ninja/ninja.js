class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    
    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`***Datos del Ninja***\nNombre: ${this.nombre}\nSalud: ${this.salud}\nVelocidad: ${this.velocidad}\nFuerza: ${this.fuerza}`)
    }

    drinkSake(){
        this.salud += 10;
    }
}


const Ninja1 = new Ninja("Carlos",100);
Ninja1.sayName();
Ninja1.drinkSake();
Ninja1.showStats();
