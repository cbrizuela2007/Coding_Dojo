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


class Sensei extends Ninja{
    
    constructor(nombre){
        super(nombre,200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdow(){
        super.drinkSake()
        console.log('"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses".')
    }
      
}

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdow();
sensei1.showStats();
console.log("Sabiduria: "+ sensei1.sabiduria)