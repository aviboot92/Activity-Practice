function Character(name,profession,gender,age,strength,hitPoints){
    this.name = name;
    this.profession=profession;
    this.gender=gender;
    this.age=age;
    this.strength=strength;
    this.hitPoints=hitPoints;
    this.printStats = function(){
        var x;
        for (x in this) {
            console.log(x+" : "+this[x]);
    };
}

var vivek = new Character("vivek","buisiness","male",28,75,20);
vivek.printStats();