class jogador {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque

    if (this.tipo === "Mago") {
      ataque = "magia"
    } else if (this.tipo === "Guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "Monge") {
      ataque = "artes marciais"
    } else(this.tipo === "Ninja");{
      ataque = "shuriken"
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
  }
}
let personagem1 = new jogador("", "", "Mago")
let personagem2 = new jogador("", "", "Guerreiro")
let personagem3 = new jogador("", "", "Monge")
let personagem4 = new jogador("", "", "Ninja")

personagem1.atacar()
personagem2.atacar()
personagem3.atacar()
personagem4.atacar()
