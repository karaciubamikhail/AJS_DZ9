export default class Character{
    constructor(name,type){
        if(name<2|| name>=10|| typeof name == 'string'){
            this.name = name;
        }else
        {
            throw('not name')
        }
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if(type.includes(types) ){
            this.type;
        }else{
            throw('not type');
        }
        this.health = 100;
        this.level = 1;
        this.distance = 1;
    }
    get attack(){
        let attack = this.base_attack - 10*(this.distance - 1);
        if (this.stonedStatus) {
            attack = attack - Math.log2(this.distance) * 5;
          }
          return Math.round(attack);
    }
    set attack(value){
        this.base_attack = value;
    }
    get stoned (){
        return this.stonedStatus;
    }
    set stoned (status){
        this.stonedStatus = status;
    }
}