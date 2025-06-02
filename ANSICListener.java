// Generated from ANSIC.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ANSICParser}.
 */
public interface ANSICListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ANSICParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(ANSICParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(ANSICParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(ANSICParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(ANSICParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(ANSICParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(ANSICParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(ANSICParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(ANSICParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(ANSICParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(ANSICParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(ANSICParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(ANSICParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(ANSICParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(ANSICParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(ANSICParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(ANSICParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ANSICParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(ANSICParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ANSICParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(ANSICParser.CadenaContext ctx);
}