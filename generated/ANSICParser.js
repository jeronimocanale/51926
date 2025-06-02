// Generated from c:/Users/Jeropa/Desktop/sacando etiquetas (1)/ANSIC.G4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ANSICListener from './ANSICListener.js';
import ANSICVisitor from './ANSICVisitor.js';

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,4,1,23,8,1,11,1,12,1,24,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,4,4,41,8,4,11,4,
12,4,42,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,0,0,9,0,
2,4,6,8,10,12,14,16,0,1,1,0,10,11,51,0,18,1,0,0,0,2,22,1,0,0,0,4,26,1,0,
0,0,6,28,1,0,0,0,8,40,1,0,0,0,10,44,1,0,0,0,12,50,1,0,0,0,14,53,1,0,0,0,
16,55,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,23,3,4,2,0,22,
21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,27,
3,6,3,0,27,5,1,0,0,0,28,29,5,1,0,0,29,30,5,7,0,0,30,31,3,8,4,0,31,32,5,8,
0,0,32,33,5,2,0,0,33,34,5,5,0,0,34,35,3,14,7,0,35,36,5,6,0,0,36,37,5,9,0,
0,37,7,1,0,0,0,38,41,3,10,5,0,39,41,3,12,6,0,40,38,1,0,0,0,40,39,1,0,0,0,
41,42,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,9,1,0,0,0,44,45,5,4,0,0,45,
46,5,5,0,0,46,47,3,16,8,0,47,48,5,6,0,0,48,49,5,9,0,0,49,11,1,0,0,0,50,51,
5,3,0,0,51,52,5,9,0,0,52,13,1,0,0,0,53,54,7,0,0,0,54,15,1,0,0,0,55,56,5,
12,0,0,56,17,1,0,0,0,3,24,40,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ANSICParser extends antlr4.Parser {

    static grammarFileName = "ANSIC.G4";
    static literalNames = [ null, "'do'", "'while'", "'break'", "'puts'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
    static symbolicNames = [ null, "DO", "WHILE", "BREAK", "PUTS", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", 
                             "CERO", "UNO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ANSICParser.ruleNames;
        this.literalNames = ANSICParser.literalNames;
        this.symbolicNames = ANSICParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ANSICParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.instrucciones();
	        this.state = 19;
	        this.match(ANSICParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ANSICParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 21;
	            this.instruccion();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ANSICParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ANSICParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(ANSICParser.DO);
	        this.state = 29;
	        this.match(ANSICParser.LBRACE);
	        this.state = 30;
	        this.sentencia();
	        this.state = 31;
	        this.match(ANSICParser.RBRACE);
	        this.state = 32;
	        this.match(ANSICParser.WHILE);
	        this.state = 33;
	        this.match(ANSICParser.LPAREN);
	        this.state = 34;
	        this.condicion();
	        this.state = 35;
	        this.match(ANSICParser.RPAREN);
	        this.state = 36;
	        this.match(ANSICParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ANSICParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 40;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 38;
	                this.salida();
	                break;
	            case 3:
	                this.state = 39;
	                this.terminar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 42; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ANSICParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(ANSICParser.PUTS);
	        this.state = 45;
	        this.match(ANSICParser.LPAREN);
	        this.state = 46;
	        this.cadena();
	        this.state = 47;
	        this.match(ANSICParser.RPAREN);
	        this.state = 48;
	        this.match(ANSICParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ANSICParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(ANSICParser.BREAK);
	        this.state = 51;
	        this.match(ANSICParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ANSICParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ANSICParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ANSICParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ANSICParser.EOF = antlr4.Token.EOF;
ANSICParser.DO = 1;
ANSICParser.WHILE = 2;
ANSICParser.BREAK = 3;
ANSICParser.PUTS = 4;
ANSICParser.LPAREN = 5;
ANSICParser.RPAREN = 6;
ANSICParser.LBRACE = 7;
ANSICParser.RBRACE = 8;
ANSICParser.SEMICOLON = 9;
ANSICParser.CERO = 10;
ANSICParser.UNO = 11;
ANSICParser.CADENA = 12;
ANSICParser.WS = 13;

ANSICParser.RULE_programa = 0;
ANSICParser.RULE_instrucciones = 1;
ANSICParser.RULE_instruccion = 2;
ANSICParser.RULE_bucle = 3;
ANSICParser.RULE_sentencia = 4;
ANSICParser.RULE_salida = 5;
ANSICParser.RULE_terminar = 6;
ANSICParser.RULE_condicion = 7;
ANSICParser.RULE_cadena = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(ANSICParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(ANSICParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(ANSICParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(ANSICParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(ANSICParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(ANSICParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(ANSICParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(ANSICParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(ANSICParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(ANSICParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(ANSICParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(ANSICParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(ANSICParser.BREAK, 0);
	};

	SEMICOLON() {
	    return this.getToken(ANSICParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(ANSICParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(ANSICParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANSICParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(ANSICParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANSICListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ANSICVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ANSICParser.ProgramaContext = ProgramaContext; 
ANSICParser.InstruccionesContext = InstruccionesContext; 
ANSICParser.InstruccionContext = InstruccionContext; 
ANSICParser.BucleContext = BucleContext; 
ANSICParser.SentenciaContext = SentenciaContext; 
ANSICParser.SalidaContext = SalidaContext; 
ANSICParser.TerminarContext = TerminarContext; 
ANSICParser.CondicionContext = CondicionContext; 
ANSICParser.CadenaContext = CadenaContext; 
