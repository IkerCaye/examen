// Constructor
function Persona(nom,edat) {
    this.marca = nom;
    this.model = edat;
  }
  // Definició de mètodes a Prototype
  Persona.prototype.mostrar = function () {
    for(var prop in this){
    console.log(`${prop}: ${this[prop]}`);
    }
  };
  function Empleat(nom, edat, sou) {
    Persona.call(this, nom, edat);
    // Propietats pròpies de QuatreRodes
    this.sou = sou;
    
  };
  // Subclasse QuatreRodes paradigma ES6
  class Directiu extends Persona {
   constructor(nom, edat, sou, empleats_a_carrec) {
     super(nom, edat, sou);
     this.empleats_a_carrec = empleats_a_carrec;
   }
  }



var obj2 = {
    nom: "Tremendo",
    preu : 2,
    altura: 20
    }

var obj = {
nom: "Huawei P8 Lite",
preu : 199,
dades:  function(key, value) {
    
    switch (arguments.length){
        
        case 1 :
          if (typeof key === "string"){
            this["nom"]=key;
          } else if (typeof key === "number"){
            this["preu"]=key;
          }else if (typeof key === "object"){
           for (let j in key){
               this[j]=key[j];
           }
          } else {console.log("No passa res")};
          break;
        case 2 :
          if (typeof key === "string" && typeof value !== "function" && typeof value !== "object"){
            this["clau"]=key;
            this["valor"]=value;
          } else {console.log("El tipus de dades son incorrectes")};
          break;
        default :
          console.log("Nombre d'arguments no vàlid");
    };
  }
};

console.log(obj);
obj.dades();
obj.dades("Xiaomi");
obj.dades(1);

obj.dades("Es una clau", obj2);
console.log(obj);


const cotxes = {
    marques: ["Maserati","SEAT","Peugeot"],
    categoria : ["Italiana", "Espanyola", "Francesa"],
    missatge : function() {
        const frases = cotxes.map(frase => {
            for (let j in frase){
                frase[j]= this.marques+this.categoria;
            }
        })
return frases;    
}
    };

    console.log(cotxes.missatge());