//Algoritmo para 2x2
function Algoritmo2 () {

	var opciones = {
		"R" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "L" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "U" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "D" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "F" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] },
        "B" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] }
	};

	var principal = ["R", "L", "U", "D", "F", "B"];

	var provisional = [];
	
	for (var i = 0; i <= 10; i++) {
		do 
        {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
        opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3)){
            case 0: agregado = "";
          	break;

          	case 1: agregado = "'";
          	break;

          	case 2: agregado = "2"; 
          	break;
        }
        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
	}
	$("#algoritmo").html(algoritmofinal);
}

//Algoritmo para 3x3
function Algoritmo3 () {

    var opciones = {
        "R" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "L" : { "allowed" : true, "enables" : ["U", "D", "F", "B"] },
        "U" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "D" : { "allowed" : true, "enables" : ["R", "L", "F", "B"] },
        "F" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] },
        "B" : { "allowed" : true, "enables" : ["R", "L", "U", "D"] }
    };

    var principal = ["R", "L", "U", "D", "F", "B"];

    var provisional = [];
    
    for (var i = 0; i <= 19; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
          } while(! opciones[face]["allowed"])

          opciones[face]["allowed"]= false;

          for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
          };

          switch(Math.floor(Math.random() * 3))
          {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
          }

          provisional[i] = " " + face + agregado;
          var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

//algoritmo para 4x4 y 5x5
function Algoritmo45 () {

	var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "Lw" : { "allowed" : true, "enables" : ["U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "Dw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "F", "Fw", "B", "Bw"] },
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] },
        "Bw" : { "allowed" : true, "enables" : ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw"] }
    };

    var principal = ["R", "Rw", "L", "Lw", "U", "Uw", "D", "Dw", "F", "Fw", "B", "Bw"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}

//Algoritmo para 6x6 y 7x7
function Algoritmo6 () {

	var opciones = {
        "R"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Rw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "L"  : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Lw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Lw" : { "allowed" : true, "enables" : ["U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "U"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Uw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] }, 
        "D"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "Dw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] },
        "3Dw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"] }, 
        "F"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "3Fw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] }, 
        "B"  : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "Bw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] },
        "3Bw" : { "allowed" : true, "enables" : ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw"] }
    };

    var principal = ["R", "Rw", "3Rw", "L", "Lw", "3Lw", "U", "Uw", "3Uw", "D", "Dw", "3Dw", "F", "Fw", "3Fw", "B", "Bw", "3Bw"];

    var provisional = [];
  
    for (var i = 0; i <= 24; i++) {
        do {
            rand = Math.floor(Math.random() * (principal.length)); //toma una letra

            face = principal[rand];
          
        } while(! opciones[face]["allowed"])

        opciones[face]["allowed"]= false;

        for (var j = 0; j < opciones[face]["enables"].length; j++) {
            opciones[opciones[face]["enables"][j]]["allowed"] = true;
        }

        switch(Math.floor(Math.random() * 3))
        {
            case 0: agregado = "";
            break;

            case 1: agregado = "'";
            break;

            case 2: agregado = "2"; 
            break;
        }

        provisional[i] = " " + face + agregado;
        var algoritmofinal = provisional.join(" ");//quita las comas del arreglo antes de imprimirlo
    }
    $("#algoritmo").html(algoritmofinal);
}
