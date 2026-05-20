const alunos = [
    { nome: "Clara", idade: 16, disciplinaPreferida: "Geografia" },       // posição 0
    { nome: "Bruno", idade: 16, disciplinaPreferida: "História" },         // posição 1
    { nome: "Bueno", idade: 16, disciplinaPreferida: "Educação Física" }, // posição 2
    { nome: "Lívia", idade: 16, disciplinaPreferida: "Geografia" },       // posição 3
    { nome: "Gustavo", idade: 16, disciplinaPreferida: "Filosofia" },     // posição 4
];

const nomeDoPrimeiro = alunos[0].nome;
const disciplinaDoUltimo = alunos[4].disciplinaPreferida;

alert(`Nome do primeiro aluno: ${nomeDoPrimeiro}\nDisciplina do último aluno: ${disciplinaDoUltimo}`);