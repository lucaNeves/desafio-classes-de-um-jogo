class Hero{
    constructor(name, age, type="humano"){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack(){
        let typeOfAttack
        switch(this.type){
            case "mago":
                typeOfAttack = "magia"
                break
            case "guerreiro":
                typeOfAttack = "espada"
                break
            case "monge":
                typeOfAttack = "artes marciais"
                break
            case "ninja":
                typeOfAttack = "shuriken"
                break
            default:
                typeOfAttack = "apenas sua coragem"
        }
        console.log(`O ${this.type} atacou usando ${typeOfAttack}`)
    }
}

let h1 = new Hero("Jorge",25,"monge")
let h2 = new Hero("Paulo",18)
let h3 = new Hero("Paulo",30,"guerreiro")

h1.attack()
h2.attack()
h3.attack()