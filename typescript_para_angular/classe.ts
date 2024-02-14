//superclasse
class Character{
    public name:string;
    skill:number;
    stregth:number;
    constructor(name:string,stregth:number,skill:number){
        this.name=name;
        this.stregth=stregth;
        this.skill=skill;

    }
    attack_force():void {
        console.log(`Attack ${this.name} with ${this.stregth} points`)
    }
}
//subclasse
class Magican extends Character{
    magicpoints:number;
    constructor(
        name:string,
        skill:number,
        stregth:number,
        magicpoints:number
    ){
    super(name,stregth,skill)
    this.magicpoints=magicpoints
};
}
const p1=new Character("Kirby",50,98);
const p2=new Magican("Yoshi",3,28,2222);
p2.attack_force();
p1.attack_force();