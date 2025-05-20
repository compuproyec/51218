grammar LoopLang;

program   : instruction+ ;
instruction : loop ;

loop : 'para' ID 'desde' NUMBER 'hasta' NUMBER 'hacer' '{' sentence* '}' ;

sentence  : output | terminate ;
output    : 'imprimir' '(' STRING ')' ';' ;
terminate : 'salir' ';' ;

// Tokens léxicos
ID     : [a-zA-Z] [a-zA-Z0-9]* ;
NUMBER : [0-9]+ ;
STRING : '"' (~["\r\n])* '"' ;

WS     : [ \t\r\n]+ -> skip ;
