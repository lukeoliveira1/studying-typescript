let nome: string = 'Luke'
let cpf: string | number = 25
let idade: number = 25
let booleano: boolean = true

console.log(`Nome ${nome}, Idade: ${idade}`)

let lista: Array<number> = [1,2, 3, 4, 5]
let lista_dois: string[] = ['l', 'k', 'm']
lista.push(6)

console.log(
    lista_dois.map((n) => {
        n.toUpperCase()
    })
)

function soma(a: number, b: number) : number {
    return a + b
}