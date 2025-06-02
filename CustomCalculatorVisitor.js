import ANSICVisitor from "./generated/ANSICVisitor.js";

export class CustomCalculatorVisitor extends ANSICVisitor {
    constructor() {
        super();
        this.output = [];
        this.indent = "";
    }

    visitPrograma(ctx) {
        this.visit(ctx.instrucciones());
        return this.output.join("\n");
    }

    visitInstrucciones(ctx) {
        for (let instr of ctx.instruccion()) {
            this.visit(instr);
        }
    }

    visitInstruccion(ctx) {
        if (ctx.bucle()) return this.visit(ctx.bucle());
    }

    visitBucle(ctx) {
        this.output.push(`${this.indent}do {`);
        const prevIndent = this.indent;
        this.indent += "    ";
        this.visit(ctx.sentencia());
        this.indent = prevIndent;
        const cond = this.visit(ctx.condicion());
        this.output.push(`${this.indent}} while (${cond});`);
    }

    visitSentencia(ctx) {
        for (let child of ctx.children) {
            this.visit(child);
        }
    }

    visitSalida(ctx) {
        const texto = this.visit(ctx.cadena());
        this.output.push(`${this.indent}console.log(${texto});`);
    }

    visitTerminar(ctx) {
        this.output.push(`${this.indent}break;`);
    }

    visitCondicion(ctx) {
        if (ctx.CERO()) return "false";
        if (ctx.UNO()) return "true";
    }

    visitCadena(ctx) {
        // ctx.CADENA() devuelve el token con comillas
        const token = ctx.CADENA().getText();
        // Quita las comillas del principio y final
        const contenido = token.substring(1, token.length - 1);
        return `"${contenido}"`;
    }

    visitCadenaContenido(ctx) {
        let texto = "";
        for (let c of ctx.caracter()) {
            texto += this.visit(c);
        }
        return texto;
    }

    visitCaracter(ctx) {
        if (ctx.LETRA()) return ctx.LETRA().getText();
        if (ctx.DIGITO()) return ctx.DIGITO().getText();
        if (ctx.SIMBOLO()) return ctx.SIMBOLO().getText();
    }
}