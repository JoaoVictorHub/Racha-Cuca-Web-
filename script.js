const tabuleiro = document.getElementById('tabuleiro'); 
let mp = [ 
    ['E', 'C', 'L', 'D'], 
    ['N', 'G', 'K', 'O'], 
    ['H', 'F', 'B', 'M'], 
    ['I', 'A', 'J', ' '] 
]; 
let vazioX = 3; 
let vazioY = 3; 

function exibirTabuleiro() { // Renderiza o tabuleiro do jogo na página HTML
    tabuleiro.innerHTML = ''; 
    let vitoria = true; 
    for (let i = 0; i < 4; i++) { 
        for (let j = 0; j < 4; j++) { 
            const peca = document.createElement('div'); 
            peca.classList.add('peca'); 
            peca.textContent = mp[i][j]; 
            if (mp[i][j] === ' ') { 
                peca.classList.add('vazio'); 
            } else { 
                peca.addEventListener('click', () => moverPeca(j, i)); 
            } 
            tabuleiro.appendChild(peca); 
            if (i * 4 + j !== 15 && mp[i][j] !== String.fromCharCode(i * 4 + j + 65)) { 
                vitoria = false; 
            } 
        } 
    } 
    if (vitoria) { // Se o jogador vencer, exibe uma mensagem
        alert('Parabéns, você venceu!'); 
    } 
} 

function moverPeca(x, y) { // Movimentação ao clicar na peça
    if (Math.abs(x - vazioX) + Math.abs(y - vazioY) === 1) { 
        mp[vazioY][vazioX] = mp[y][x]; 
        mp[y][x] = ' '; 
        vazioX = x; 
        vazioY = y; 
        exibirTabuleiro(); 
    } 
} 

exibirTabuleiro();