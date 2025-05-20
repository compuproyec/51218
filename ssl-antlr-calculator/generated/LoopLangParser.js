// Generated from c:/Users/TOTY/ssl-antlr-calculator/LoopLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LoopLangListener from './LoopLangListener.js';
import LoopLangVisitor from './LoopLangVisitor.js';

const serializedATN = [4,1,15,49,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,1,2,1,3,1,3,3,3,38,8,3,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,45,0,13,1,0,0,0,2,17,
1,0,0,0,4,19,1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,45,1,0,0,0,12,14,3,2,1,
0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,
18,3,4,2,0,18,3,1,0,0,0,19,20,5,1,0,0,20,21,5,12,0,0,21,22,5,2,0,0,22,23,
5,13,0,0,23,24,5,3,0,0,24,25,5,13,0,0,25,26,5,4,0,0,26,30,5,5,0,0,27,29,
3,6,3,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,33,1,
0,0,0,32,30,1,0,0,0,33,34,5,6,0,0,34,5,1,0,0,0,35,38,3,8,4,0,36,38,3,10,
5,0,37,35,1,0,0,0,37,36,1,0,0,0,38,7,1,0,0,0,39,40,5,7,0,0,40,41,5,8,0,0,
41,42,5,14,0,0,42,43,5,9,0,0,43,44,5,10,0,0,44,9,1,0,0,0,45,46,5,11,0,0,
46,47,5,10,0,0,47,11,1,0,0,0,3,15,30,37];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LoopLangParser extends antlr4.Parser {

    static grammarFileName = "LoopLang.g4";
    static literalNames = [ null, "'para'", "'desde'", "'hasta'", "'hacer'", 
                            "'{'", "'}'", "'imprimir'", "'('", "')'", "';'", 
                            "'salir'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "program", "instruction", "loop", "sentence", "output", 
                         "terminate" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LoopLangParser.ruleNames;
        this.literalNames = LoopLangParser.literalNames;
        this.symbolicNames = LoopLangParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LoopLangParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.instruction();
	            this.state = 15; 
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LoopLangParser.RULE_instruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.loop();
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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LoopLangParser.RULE_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(LoopLangParser.T__0);
	        this.state = 20;
	        this.match(LoopLangParser.ID);
	        this.state = 21;
	        this.match(LoopLangParser.T__1);
	        this.state = 22;
	        this.match(LoopLangParser.NUMBER);
	        this.state = 23;
	        this.match(LoopLangParser.T__2);
	        this.state = 24;
	        this.match(LoopLangParser.NUMBER);
	        this.state = 25;
	        this.match(LoopLangParser.T__3);
	        this.state = 26;
	        this.match(LoopLangParser.T__4);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===11) {
	            this.state = 27;
	            this.sentence();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(LoopLangParser.T__5);
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



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LoopLangParser.RULE_sentence);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.output();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.terminate();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LoopLangParser.RULE_output);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(LoopLangParser.T__6);
	        this.state = 40;
	        this.match(LoopLangParser.T__7);
	        this.state = 41;
	        this.match(LoopLangParser.STRING);
	        this.state = 42;
	        this.match(LoopLangParser.T__8);
	        this.state = 43;
	        this.match(LoopLangParser.T__9);
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



	terminate() {
	    let localctx = new TerminateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LoopLangParser.RULE_terminate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(LoopLangParser.T__10);
	        this.state = 46;
	        this.match(LoopLangParser.T__9);
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

LoopLangParser.EOF = antlr4.Token.EOF;
LoopLangParser.T__0 = 1;
LoopLangParser.T__1 = 2;
LoopLangParser.T__2 = 3;
LoopLangParser.T__3 = 4;
LoopLangParser.T__4 = 5;
LoopLangParser.T__5 = 6;
LoopLangParser.T__6 = 7;
LoopLangParser.T__7 = 8;
LoopLangParser.T__8 = 9;
LoopLangParser.T__9 = 10;
LoopLangParser.T__10 = 11;
LoopLangParser.ID = 12;
LoopLangParser.NUMBER = 13;
LoopLangParser.STRING = 14;
LoopLangParser.WS = 15;

LoopLangParser.RULE_program = 0;
LoopLangParser.RULE_instruction = 1;
LoopLangParser.RULE_loop = 2;
LoopLangParser.RULE_sentence = 3;
LoopLangParser.RULE_output = 4;
LoopLangParser.RULE_terminate = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_program;
    }

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_instruction;
    }

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_loop;
    }

	ID() {
	    return this.getToken(LoopLangParser.ID, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LoopLangParser.NUMBER);
	    } else {
	        return this.getToken(LoopLangParser.NUMBER, i);
	    }
	};


	sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenceContext);
	    } else {
	        return this.getTypedRuleContext(SentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_sentence;
    }

	output() {
	    return this.getTypedRuleContext(OutputContext,0);
	};

	terminate() {
	    return this.getTypedRuleContext(TerminateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_output;
    }

	STRING() {
	    return this.getToken(LoopLangParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitOutput(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitOutput(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoopLangParser.RULE_terminate;
    }


	enterRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.enterTerminate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoopLangListener ) {
	        listener.exitTerminate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoopLangVisitor ) {
	        return visitor.visitTerminate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LoopLangParser.ProgramContext = ProgramContext; 
LoopLangParser.InstructionContext = InstructionContext; 
LoopLangParser.LoopContext = LoopContext; 
LoopLangParser.SentenceContext = SentenceContext; 
LoopLangParser.OutputContext = OutputContext; 
LoopLangParser.TerminateContext = TerminateContext; 
