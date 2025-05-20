const LoopLangVisitor = require('./generated/LoopLangVisitor').LoopLangVisitor;

class CustomLoopLangVisitor extends LoopLangVisitor {
  constructor() {
    super();
  }

  // Nodo raíz: programa
  visitProgram(ctx) {
    return ctx.instruction().map(instr => this.visit(instr));
  }

  // Cada instrucción es un bucle para
  visitInstruction(ctx) {
    return this.visit(ctx.loop());
  }

  visitLoop(ctx) {
    const id = ctx.ID().getText(); // nombre de la variable de control
    const desde = parseInt(ctx.NUMBER(0).getText());
    const hasta = parseInt(ctx.NUMBER(1).getText());

    for (let i = desde; i <= hasta; i++) {
      for (const stmt of ctx.sentence()) {
        const result = this.visit(stmt);
        if (result === 'break') return; // salir; detectado
      }
    }
  }

  visitSentence(ctx) {
    if (ctx.output()) return this.visit(ctx.output());
    if (ctx.terminate()) return this.visit(ctx.terminate());
  }

  visitOutput(ctx) {
    const rawText = ctx.STRING().getText(); // incluye comillas
    const cleanText = rawText.slice(1, -1);  // elimina las comillas
    console.log(cleanText);
  }

  visitTerminate(ctx) {
    // Podrías cortar el bucle con una señal especial
    return 'break';
  }
}

module.exports = CustomLoopLangVisitor;
