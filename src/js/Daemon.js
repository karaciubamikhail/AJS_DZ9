import Character from './Сharacter'

export class Daemon extends Character{
    constructor (name,type){
        super(name,type);
        this.attack = 100;
        this.defence = 40;
    }
}