let alunos = [
    {name: 'junior', notaMat: 2, notaPort: 7, notaCienc: 9,total: 0, situation: "?"},
    {name: 'toni', notaMat: 0, notaPort: 2, notaCienc: 2,total: 0,  situation: "?"},
    {name: 'augusto', notaMat: 8, notaPort: 5, notaCienc: 3,total: 0,  situation: "?"},
    {name: 'rafa', notaMat: 5, notaPort: 7, notaCienc: 9,total: 0,  situation: "?"},
]
alunos.forEach((pessoa)  => {
    return pessoa.total = (pessoa.notaCienc +pessoa.notaMat + pessoa.notaPort) / 3
});
alunos.forEach((pessoa)  => {
    if (pessoa.total >= 6){
        return pessoa.situation = 'aprovado'
    } else {
        return pessoa.situation = 'desaprovado'
    }
});
console.log(alunos)