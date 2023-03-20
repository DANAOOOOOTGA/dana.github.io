//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=3;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=5; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comienza";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#ED8318"; colorButton="#B80EAB"; colorText="#000000"; colorSele="#D52B2B";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTEEEE:D"; messageTime="ya no queda más tiempo:("; messageError="lo siento, no lo has logrado D':"; messageErrorG="lo siento, no lo has logrado D':"; messageAttempts="se te acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#33BE2C";borderError="#FF0000"; borderAttempts="#C525A9";
var wordsGame="bmF0dXJhbGV6YQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="800"; actMaxHeight="600";profG=0;dirMedia="naturaleza_resources/media/";
var indexG=0;
var words1G=["RW4gbGEgbmF0dXJhbGV6YSBoYXkgbXVjaG9zIHNlcmVzIHZpdm9z","YWxndW5vcyBkZSBlc3RvcyBzZSBwdWVkZW4=","Y2xhc2lmaWNhciBjb21vIGZsb3JhIHkgZmF1bmE=","bGEgZmxvcmEgZXMgdG9kbyB0aXBvIGRlIHBsYW50YXMsIGxhIHZpZGEgdmVnZXRhbA==","eSBsYSBmYXVuYSBzb24gbG9zIGFuaW1hbGVzIGVuIGdlbmVyYWwu"];
var words2G=[];
var words3G=[];
var c1=[39,26,29,49,39];
var c2=[];
var c3=[];
