// Generated from c:/Users/Jeropa/Desktop/sacando etiquetas (1)/ANSIC.G4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,77,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,
1,11,5,11,64,8,11,10,11,12,11,67,9,11,1,11,1,11,1,12,4,12,72,8,12,11,12,
12,12,73,1,12,1,12,0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
21,11,23,12,25,13,1,0,2,3,0,10,10,13,13,34,34,3,0,9,10,13,13,32,32,78,0,
1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,30,1,0,0,0,5,36,1,0,0,0,7,42,1,0,0,0,9,47,
1,0,0,0,11,49,1,0,0,0,13,51,1,0,0,0,15,53,1,0,0,0,17,55,1,0,0,0,19,57,1,
0,0,0,21,59,1,0,0,0,23,61,1,0,0,0,25,71,1,0,0,0,27,28,5,100,0,0,28,29,5,
111,0,0,29,2,1,0,0,0,30,31,5,119,0,0,31,32,5,104,0,0,32,33,5,105,0,0,33,
34,5,108,0,0,34,35,5,101,0,0,35,4,1,0,0,0,36,37,5,98,0,0,37,38,5,114,0,0,
38,39,5,101,0,0,39,40,5,97,0,0,40,41,5,107,0,0,41,6,1,0,0,0,42,43,5,112,
0,0,43,44,5,117,0,0,44,45,5,116,0,0,45,46,5,115,0,0,46,8,1,0,0,0,47,48,5,
40,0,0,48,10,1,0,0,0,49,50,5,41,0,0,50,12,1,0,0,0,51,52,5,123,0,0,52,14,
1,0,0,0,53,54,5,125,0,0,54,16,1,0,0,0,55,56,5,59,0,0,56,18,1,0,0,0,57,58,
5,48,0,0,58,20,1,0,0,0,59,60,5,49,0,0,60,22,1,0,0,0,61,65,5,34,0,0,62,64,
8,0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,
0,0,0,67,65,1,0,0,0,68,69,5,34,0,0,69,24,1,0,0,0,70,72,7,1,0,0,71,70,1,0,
0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,6,12,0,
0,76,26,1,0,0,0,3,0,65,73,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class gramaticaLexer extends antlr4.Lexer {

    static grammarFileName = "ANSIC.G4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'do'", "'while'", "'break'", "'puts'", "'('", 
                         "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
	static symbolicNames = [ null, "DO", "WHILE", "BREAK", "PUTS", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", "CERO", 
                          "UNO", "CADENA", "WS" ];
	static ruleNames = [ "DO", "WHILE", "BREAK", "PUTS", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "SEMICOLON", "CERO", "UNO", "CADENA", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

gramaticaLexer.EOF = antlr4.Token.EOF;
gramaticaLexer.DO = 1;
gramaticaLexer.WHILE = 2;
gramaticaLexer.BREAK = 3;
gramaticaLexer.PUTS = 4;
gramaticaLexer.LPAREN = 5;
gramaticaLexer.RPAREN = 6;
gramaticaLexer.LBRACE = 7;
gramaticaLexer.RBRACE = 8;
gramaticaLexer.SEMICOLON = 9;
gramaticaLexer.CERO = 10;
gramaticaLexer.UNO = 11;
gramaticaLexer.CADENA = 12;
gramaticaLexer.WS = 13;



