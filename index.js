import antlr4 from "antlr4";
import { CharStreams, CommonTokenStream } from "antlr4";
import ANSICLexer from "./generated/ANSICLexer.js";
import ANSICParser from "./generated/ANSICParser.js";
import readline from "readline";
import fs from "fs";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";

// Variable para saber si hubo errores
let huboErrores = false;

// Listener personalizado para mostrar errores
class MyErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        // Detecta si el error viene del lexer o del parser
        const esLexer = recognizer.constructor.name.includes("Lexer");
        if (esLexer) {
            console.error(`\n[ERROR LÉXICO] Línea ${line}, columna ${column}: ${msg}`);
        } else {
            console.error(`\n[ERROR SINTÁCTICO] Línea ${line}, columna ${column}: ${msg}`);
        }
        huboErrores = true;
    }
}

async function main() {
    let input;

    // Intentar leer el archivo de entrada
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no existe, pedir por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Crear el lexer y obtener todos los tokens
    let inputStream = CharStreams.fromString(input);
    let lexer = new ANSICLexer(inputStream);

    // Agregar listener de errores al lexer
    lexer.removeErrorListeners();
    lexer.addErrorListener(new MyErrorListener());

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    // Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = ANSICLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Volver a crear el lexer y parser porque getAllTokens consume los tokens
    inputStream = CharStreams.fromString(input);
    lexer = new ANSICLexer(inputStream);

    // Elimina los listeners por defecto del lexer, pero NO agregues el tuyo aquí
    lexer.removeErrorListeners();

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ANSICParser(tokenStream);

    // Agregar listener de errores al parser
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());

    parser.buildParseTrees = true;
    let tree = parser.programa();

    // Mostrar árbol sintáctico
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    // Validación y traducción
    if (!huboErrores) {
        console.log("\nLa entrada es válida. No se encontraron errores de sintaxis.");
        const jsVisitor = new CustomCalculatorVisitor();
        const jsCode = jsVisitor.visit(tree);
        console.log("\nCódigo JavaScript generado:\n");
        console.log(jsCode);
        console.log("\n--- Salida de la ejecución del código generado ---\n");
        eval(jsCode);
    } else {
        console.log("\nLa entrada contiene errores de sintaxis. No se generó el código en JavaScript.");
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

// Ejecuta la función principal
main();