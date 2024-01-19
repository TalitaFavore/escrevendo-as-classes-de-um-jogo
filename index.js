class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "atacou";
        }

        console.log(`${this.tipo} ${this.nome} de ${this.idade} anos de idade atacou usando ${ataque}`);
    }

    exibirInformacoes() {
        console.log(`Nome: `);
        console.log(`Idade: `);
        console.log(`Tipo: ${this.tipo}`);

        console.log("------------");
    }
}

let heroi = new Heroi("Talita", 19, "Ninja");
heroi.atacar();
