import LoopLangLexer from "./generated/LoopLangLexer.js";
import LoopLangParser from "./generated/LoopLangParser.js";
import { CustomLoopLangVisitor } from "./CustomLoopLangVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no existe el archivo, pide entrada por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Proceso la entrada
    let inputStream = CharStreams.fromString(input);
    let lexer = new LoopLangLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LoopLangParser(tokenStream);
    parser.buildParseTrees = true;

    let tree = parser.program();

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        const visitor = new CustomLoopLangVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
