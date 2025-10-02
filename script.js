JavaScript
document.addEventListener('DOMContentLoaded', () => {
const conselhos = [
"Na dúvida, reinicie o servidor.",
"Commit mais vezes. Seus futuros 'eu' e 'colegas' agradecerão.",
"Leia a documentação. Sério, leia.",
"Antes de otimizar, faça funcionar."
];
const textoConselho = document.getElementById('conselho-texto');
const botaoNovoConselho = document.getElementById('novo-conselho-btn');
function gerarConselho() {
const indiceAleatorio = Math.floor(Math.random() * conselhos.length);
textoConselho.textContent = conselhos[indiceAleatorio];
}
botaoNovoConselho.addEventListener('click', gerarConselho);
});
