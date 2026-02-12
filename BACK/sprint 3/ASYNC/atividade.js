const fs = require('fs')

async function readFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const palavras = data.split(' ');
        console.log(palavras.length);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
}

readFile('texto.txt')

