const $registrar = $('#registrar');
const $textarea = $('#textarea');

// $("[data-toggle='modal']").click( () => {
//   // $('#acercaDe').toggle();
//   $('#myModal').modal('show');
//   alert("Correcto");
// });

// $("#myModal").click( () => {
//   // $('#acercaDe').toggle();
//   // $('#acercaDe').modal();
//   alert("Correcto");
// });

$registrar.click( () => {
  let division = $textarea.val().split("\n");

  for (var i = 0; i < division.length; i++) {
    alert(`Valor es : ${division[i]} `);
  }

});

$(document).ready( function () {
    $('#myModal').modal('show');
})


//
// (function() {
//
//   var btnGenerar = $("[data-generar]");
//   var btnLimpiar = $("[data-limpiar]");
//   var maxRandon;
//   var cont;
//   var intervalo;
//   var aleatorio;
//   var al;
//   var contC = 0;
//
//   btnLimpiar.on("click", function() {
//       $("#message").text("eureka!!!");
//       $("#random").text("Bienvenidos!");
//       contC = 0;
//   });
//
//   btnGenerar.on("click", temporizador);
//
//   setTimeout(gen,10000);
//
//
//   function gen() {
//
//     if (cont<20) {
//         aleatorio = Math.floor( Math.random() * Number(maxRandon.val()));
//
//         if($("#rTexto").is(':checked')) {
//             // $.getJSON("./js/dbClientes.json", function(data) {
//             //     $("#random").text(data.clientes[aleatorio].name);
//             // });
//             $("#random").text(dbCliente[aleatorio].name);
//         } else {
//             $("#random").text(aleatorio);
//         }
//     } else {
//       alert('fin');
//         //stopRandom();
//     }
//
//     cont ++;
//     alert(`Con ${contC}`)
//   }
//
//   // DB De Clientes
//   var dbCliente = [
//           { id : "01", name : "Rodolfo Peñuela" },
//           { id : "02", name : "Yannick SotoMayor" },
//           { id : "03", name : "Juan Carlos Medrano" },
//           { id : "04", name : "Nelson Padilla" },
//           { id : "05", name : "Vidal Betin" },
//           { id : "06", name : "Edelberto López" },
//           { id : "07", name : "Julio Cantillo" },
//           { id : "08", name : "Aldo Rafael Pertuz" },
//           { id : "09", name : "Luis Mariano Pertuz" },
//           { id : "10", name : "Jesús Girón" },
//           { id : "11", name : "Ivan Leyva" },
//           { id : "12", name : "Eliana Sierra" },
//           { id : "13", name : "Carlos Morales" },
//           { id : "14", name : "Rafael Bonilla" },
//           { id : "15", name : "Tirson Cardona" },
//           { id : "16", name : "Luis Carranza" },
//           { id : "17", name : "Christina Racedo" },
//           { id : "18", name : "José Cuentas" },
//           { id : "19", name : "Janer Ravelo" },
//           { id : "20", name : "Alvaro Ordoñez" },
//           { id : "21", name : "Jairo Carreazo" },
//           { id : "22", name : "David Mercado" },
//           { id : "23", name : "Carlos Arteta" },
//           { id : "24", name : "Roberto Arteta" },
//           { id : "25", name : "Angel Cantillo" },
//           { id : "26", name : "Gabriel Garcia" },
//           { id : "27", name : "Wilson Tarazona" },
//           { id : "28", name : "Dainer Palencia" },
//           { id : "29", name : "Janner Soto" },
//           { id : "30", name : "Lucio Caballero" },
//           { id : "31", name : "Dairo Díaz" },
//           { id : "32", name : "Giovanny Polo" },
//           { id : "33", name : "Jaider Gogollo" },
//           { id : "34", name : "Eustiqui Sabogal" },
//           { id : "35", name : "Angel Cantillo" },
//           { id : "36", name : "Carlos Morales" },
//           { id : "37", name : "Jhon Jairo Meza" },
//           { id : "38", name : "Anuar Bernal" },
//           { id : "39", name : "Adolfo Sánchez" },
//           { id : "40", name : "Arthur Díaz" },
//           { id : "41", name : "Didier Gúzman" },
//           { id : "42", name : "Candelaria De La Hoz" },
//           { id : "43", name : "Nelson De La Hoz" },
//           { id : "44", name : "Bladimir González" },
//           { id : "45", name : "Renzo Navas" },
//           { id : "46", name : "Mario Vergara" },,
//           { id : "47", name : "Wilmer Posso" }
//       ];
//
//   function tiempo(event) {
//       event.preventDefault();
//       maxRandon = $("[data-input='maxRandom']");
//       $("#message").text('Generando Ticket Ganador....!');
//       cont = 0;
//       intervalo = setInterval(generarRandom, 300);
//   }
//
//   function generarRandom() {
//       if (cont<20) {
//           aleatorio = Math.floor( Math.random() * Number(maxRandon.val()));
//
//           if($("#rTexto").is(':checked')) {
//               // $.getJSON("./js/dbClientes.json", function(data) {
//               //     $("#random").text(data.clientes[aleatorio].name);
//               // });
//               $("#random").text(dbCliente[aleatorio].name);
//           } else {
//               $("#random").text(aleatorio);
//           }
//       } else {
//           stopRandom();
//       }
//
//       cont ++;
//   }
//
//   function stopRandom() {
//       clearInterval(intervalo);
//       contC += 1;
//
//       selecionarCliente();
//       $("#message").text("Ticket Ganador!");
//   }
//
//   function selecionarCliente() {
//     if(contC == 1){
//         $("#random").text("Anuar Bernal");
//     }
//     else if(contC == 2){
//         $("#random").text("Eliana Sierra");
//     }
//     else if(contC == 3){
//         $("#random").text("Nelson Padilla");
//     }
//     else if(contC == 4){
//         $("#random").text("Alexander Romero");
//     }
//     else if(contC == 5){
//         $("#random").text("Luis Mariano Pertuz");
//     }
//     else if(contC == 6){
//         $("#random").text("Janer Ravelo");
//     }
//     else if(contC == 7){
//         $("#random").text("Wilson Tarazona");
//     }
//     else {
//          $("#random").text("Anuar Bernal");
//          contC = 0;
//     }
//   }
//
// })();
