(function() {

  var btnGenerar = $("[data-generar]");
  var btnLimpiar = $("[data-limpiar]");
  var btnRegistrar = $("[data-registrar]");
  var btnCerrar = $("[data-close]");
  var btnLimpiarLista = $("[data-limpiar-lista]");
  var taCliente;
  var listaCliente = [];
  var maxRandon = 0;
  var inputRadio;
  var intervalo;
  var aleatorio;
  var activar = true;
  var progreso;


  $("input[name=rRandom]").click( () => {
    inputRadio = $('input:radio[name=rRandom]:checked').val();
    $(".alert").hide();
    $(".progress").hide();
    if (inputRadio == "numero") {
      $("[data-input='maxRandom']").show();
    }
    else {
      $("[data-input='maxRandom']").hide();
    }
  });


  btnLimpiar.on("click", function() {
      $("#message").text("eureka!!!");
      $("#random").text("Bienvenidos!");
      $("[data-input='maxRandom']").val("");
      $(".alert").hide();
      $(".progress").hide();
  });

  btnLimpiarLista.click( () => {
    listaCliente = [];
    $("#cliente").val("");
  });

  btnCerrar.click( () => {
    $(".alert").hide();
  });


  btnGenerar.on("click", temporizador);

  function temporizador(event)
  {
      event.preventDefault();
      $(".alert").hide();
      inputRadio = $('input:radio[name=rRandom]:checked').val();
      activar = true;

      if (inputRadio == 'numero')
      {
        maxRandon = Number($("[data-input='maxRandom']").val());

        if (maxRandon == 0)
        {
          $("#messageAlert").text("Seguramente No Ha Digitado Ningún Número En La Casila Max. Random ó Esté Es 0..!");
          $(".alert").show();
          activar = false;
        }
      }
      else if (inputRadio == 'texto')
      {
        maxRandon = abecedario.length;
      }
      else if (inputRadio == 'lista')
      {
        maxRandon = listaCliente.length;
        if (listaCliente.length == 0 )
        {
          $("#messageAlert").text("Seguramente No Se Ha Registrado Datos En La Lista De Eventos..!");
          $(".alert").show();
          activar = false;
        }
      }

      if (activar)
      {
        $("#message").text('Generando Ticket Ganador....!');
        cont = 0;
        intervalo = setInterval(generar, 300);
      }
  }

  function generar()
  {
      $(".progress").show();
      if (cont < 20)
      {
          aleatorio = Math.floor( Math.random() * maxRandon) + 1;

          if ($('input:radio[name=rRandom]:checked').val() == 'numero')
          {
            $("#random").text(aleatorio);
          }
          else if ($('input:radio[name=rRandom]:checked').val() == 'texto')
          {
            $("#random").text(abecedario[aleatorio].name);
          }
          else if ($('input:radio[name=rRandom]:checked').val() == 'lista')
          {
                $("#random").text(listaCliente[aleatorio-1]);
          }
          else
          {
              $("#random").text(aleatorio);
          }
      }
      else
      {
          desactivarIntervalo();
      }

      progreso = parseInt((cont / 20) * 100);
      $("#bar").css('width', progreso + '%').find("span").text(progreso);
      cont ++;
  }

  function desactivarIntervalo()
  {
      clearInterval(intervalo);
      $("#message").text("Ticket Ganador!");
  }

  // Objeto Abecedario
  var abecedario = [
        { id : "01", name : "A" },
        { id : "02", name : "B" },
        { id : "03", name : "C" },
        { id : "04", name : "D" },
        { id : "05", name : "E" },
        { id : "06", name : "F" },
        { id : "07", name : "G" },
        { id : "08", name : "H" },
        { id : "09", name : "I" },
        { id : "10", name : "J" },
        { id : "11", name : "K" },
        { id : "12", name : "L" },
        { id : "13", name : "M" },
        { id : "14", name : "N" },
        { id : "15", name : "Ñ" },
        { id : "16", name : "O" },
        { id : "17", name : "P" },
        { id : "18", name : "Q" },
        { id : "19", name : "R" },
        { id : "20", name : "S" },
        { id : "21", name : "T" },
        { id : "22", name : "U" },
        { id : "23", name : "V" },
        { id : "24", name : "W" },
        { id : "25", name : "X" },
        { id : "26", name : "Y" },
        { id : "27", name : "Z" }
      ];


  btnRegistrar.click( () =>
  {

    taCliente = $("#cliente");
    if (taCliente.val() == "")
    {
      $("#messageAlert").text("Debe Haber Al Menos Un Registro..!");
      $(".alert").show();
    }
    else
    {
      listaCliente = taCliente.val().split("\n");
      $("#messageAlert").text("Datos Registrados Satisfactoriamente..!");
      $(".alert").show();
    }

  });

  // $("[data-toggle='modal']").click( () => {
  //   // $('#acercaDe').toggle();
  //   $('#acercaDe').modal('show');
  // });


  // $('.escala').hover( function() {
  //   $('.fa-ticket').css('transform', 'translate(60px)');
  //   }, function() {
  //    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
  //   $('.fa-ticket').css('transform', 'translate(0)');
  // });

})();
