jQuery(document).ready(function( $ ) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
  	if ($(this).scrollTop() > 100) {
  		$('.back-to-top').fadeIn('slow');
  		$('#header').addClass('header-fixed');
  	} else {
  		$('.back-to-top').fadeOut('slow');
  		$('#header').removeClass('header-fixed');
  	}
  });
  $('.back-to-top').click(function(){
  	$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  	return false;
  });
  $('.sv_next_btn').click(function(){
  	$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  	return false;
  });
  $('.sv_prev_btn').click(function(){
  	$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  	return false;
  });
  
  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
  	animation: {opacity:'show'},
  	speed: 400
  });

  // Mobile Navigation
  if( $('#nav-menu-container').length ) {
  	var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
  	$mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
  	$('body').append( $mobile_nav );
  	$('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
  	$('body').append( '<div id="mobile-body-overly"></div>' );
  	$('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

  	$(document).on('click', '.menu-has-children i', function(e){
  		$(this).next().toggleClass('menu-item-active');
  		$(this).nextAll('ul').eq(0).slideToggle();
  		$(this).toggleClass("fa-chevron-up fa-chevron-down");
  	});

  	$(document).on('click', '#mobile-nav-toggle', function(e){
  		$('body').toggleClass('mobile-nav-active');
  		$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  		$('#mobile-body-overly').toggle();
  	});

  	$(document).click(function (e) {
  		var container = $("#mobile-nav, #mobile-nav-toggle");
  		if (!container.is(e.target) && container.has(e.target).length === 0) {
  			if ( $('body').hasClass('mobile-nav-active') ) {
  				$('body').removeClass('mobile-nav-active');
  				$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  				$('#mobile-body-overly').fadeOut();
  			}
  		}
  	});
  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
  	$("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
  	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

  		var target = $(this.hash);
  		if (target.length) {
  			var top_space = 0;

  			if( $('#header').length ) {
  				top_space = $('#header').outerHeight();

  				if( ! $('#header').hasClass('header-fixed') ) {
  					top_space = top_space - 20;
  				}
  			}

  			$('html, body').animate({
  				scrollTop: target.offset().top - top_space
  			}, 1500, 'easeInOutExpo');

  			if ( $(this).parents('.nav-menu').length ) {
  				$('.nav-menu .menu-active').removeClass('menu-active');
  				$(this).closest('li').addClass('menu-active');
  			}

  			if ( $('body').hasClass('mobile-nav-active') ) {
  				$('body').removeClass('mobile-nav-active');
  				$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  				$('#mobile-body-overly').fadeOut();
  			}
  			return false;
  		}
  	}
  });

  // Porfolio filter
  $("#portfolio-flters li .filter-active").ready ( function() {
  	var selectedFilter = ".filter-alumni";
  	$("#portfolio-wrapper").fadeTo(100, 0);
  	$(".portfolio-item").fadeOut().css('transform', 'scale(0)');
  	$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
  	$("#portfolio-wrapper").fadeTo(300, 1);    
  });
  $("#portfolio-flters li").click ( function() {
  	$("#portfolio-flters li").removeClass('filter-active');
  	$(this).addClass('filter-active');

  	var selectedFilter = $(this).data("filter");
  	$("#portfolio-wrapper").fadeTo(100, 0);

  	$(".portfolio-item").fadeOut().css('transform', 'scale(0)');

  	setTimeout(function() {
  		$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
  		$("#portfolio-wrapper").fadeTo(300, 1);
  	}, 300);
  });

  // Educon filter
  $("#Educon-flters li .filter-active").ready ( function() {


  	var selectedFilter = ".filter-econ";
  	$("#Educon-wrapper").fadeTo(100, 0);
  	$(".Educon-item").fadeOut().css('transform', 'scale(0)');
  	$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
  	$("#Educon-wrapper").fadeTo(300, 1);
  });
  $("#Educon-flters li").click ( function() {
  	$("#Educon-flters li").removeClass('filter-active');
  	$(this).addClass('filter-active');

  	var selectedFilter = $(this).data("filter");
  	$("#Educon-wrapper").fadeTo(100, 0);

  	$(".Educon-item").fadeOut().css('transform', 'scale(0)');

  	setTimeout(function() {
  		$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
  		$("#Educon-wrapper").fadeTo(300, 1);
  	}, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
  	delay: 10,
  	time: 1000
  });






});



$(document).ready(function(){
	$("#send").click(function(){
		var preg1 = $( "input:radio[name=preg1]:checked" ).val();
		var preg2 = $( "input:radio[name=preg2]:checked" ).val();
		var preg2text = $( "#preg2text" ).val();
		var preg3 = $( "input:radio[name=preg3]:checked" ).val();
		var preg3text = $( "#preg3text" ).val();
		var preg4 = $( "input:radio[name=preg4]:checked" ).val();
		var preg4text = $( "#preg4text" ).val();
		var preg5 = $( "input:radio[name=preg5]:checked" ).val();
		var preg6 = $( "input:radio[name=preg6]:checked" ).val();
		var preg6text = $( "#preg6text" ).val();
		var preg7 = $( "input:radio[name=preg7]:checked" ).val();
		var ubi = $( "#ubicacion" ).val();
// Returns successful data submission message when the entered information is stored in database.
var dataString ="";
dataString= 'preg1='+ preg1 + '&preg2='+ preg2 + '&preg2text='+ preg2text + '&preg3='+ preg3 + '&preg3text='+ preg3text+ '&preg4='+ preg4  + '&preg4text='+ preg4text+ '&preg5='+ preg5 + '&preg6='+ preg6  + '&preg6text='+ preg6text+ '&preg7='+ preg7 +'&ubi='+ ubi;
if (preg1 === undefined|| preg2 === undefined || preg3 === undefined || preg4 === undefined|| preg5 === undefined|| preg6 === undefined|| preg7 === undefined) {
	$('#Errorencuesta').modal('show');
}else {
// AJAX Code To Submit Form.
$.ajax({
	type: "POST",
	url: "lib/phptransac/insert.php",
	data: dataString,
	cache: false,
	success: function(result){
		if(result == 'saved')
		{
			$('#encuestaok').modal('show');
		}
		else
		{
			$('#Errorencuesta').modal('show');
		};
	}

});
}
return false;
});

	/*email*/
	$(function(){
		$('#solicitud').on('submit', function (e){
          e.preventDefault(); // Evitamos que salte el enlace.
          /* Creamos un nuevo objeto FormData. Este sustituye al 
          atributo enctype = "multipart/form-data" que, tradicionalmente, se 
          incluía en los formularios (y que aún se incluye, cuando son enviados 
          desde HTML. */
          var paqueteDeDatos = new FormData();
          
          paqueteDeDatos.append('uploadedfile', $('#uploadedfile')[0].files[0]);
          paqueteDeDatos.append('cuenta', $('#ct').val());
          paqueteDeDatos.append('email', $('#mail').val());
          paqueteDeDatos.append('tel', $('#tel').val());

          var destino = "lib/phptransac/uploader.php"; // El script que va a recibir los campos de formulario.
          /* Se envia el paquete de datos por ajax. */
          $.ajax({
          	url: destino,
            type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
            contentType: false,
            data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
            processData: false,
            cache: false, 
            beforeSend: function () {

            	$('#respuesta').modal('show');
            },
            success: function(resultado){ // En caso de que todo salga bien.
            	console.log(resultado);
            	var result =$.trim(resultado);
            	$('#bp').remove();
            	switch (result)
            	{
            		case 'ok': 
            		$( "#modal-body" ).append( "<div  class='alert alert-success' role='alert'>Estamos atendiendo tú solicitud, pronto estaremos en contacto contigo.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Generado': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú solicitud presenta estatus de generado</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Solicitado': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú solicitud presenta estatus de solicitado</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Confirmado': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú solicitud presenta estatus de confirmado</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'noexiste': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Número de cuenta no encontrado,si ya eres Egresado envia un correo a <a style='color:blue;' href='mailto:gmartinezap@uaemex.mx'>gmartinezap@uaemex.mx</a> indicando tu periodo de egreso y un documento que te acredite como egresado, gracias.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio1': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio2': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio3': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio4': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio5': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;

            		case 'filenosupported': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Tipo de archivo no admitido; intenta de nuevo.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'menora3m': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>El archivo debe tener un peso menor o igual a 3 MB.</div>" );
            		$('#respuesta').modal('show');
            		break;


            	}; 
            },
            error: function (){ // Si hay algún error.
            	alert("Algo ha fallado.");
            }

        });
      });
});
$("#resets").click(function(){
	location.reload();
});

$("#buscar").click(function(){
	var cuenta = $( "#cuenta" ).val();
	var espacio = $( "#espacio" ).val();
// Returns successful data submission message when the entered information is stored in database.
var dataString ="";
dataString= 'cuenta='+ cuenta +'&espacio='+ espacio;
if (cuenta === undefined|| cuenta===""||espacio === undefined|| espacio==="") {
	alert('Por favor ingresa un número de cuenta; o selecciona el espacio académico donde estudiaste.');

}else {
// AJAX Code To Submit Form.
$.ajax({
	type: "POST",
	url: "lib/phptransac/buscar.php",
	data: dataString,
	cache: false,
	success: function(result){
		if (result===""|| result===null) {
			$('#ErrorModal').modal('show');
		}else{
			var nombre =result;
			$('#nombre').append('Tu nombre es '+nombre+'*********');
			$('#buscar').hide();
			$( '#next' ).show();
			$('#regis').show();
		}
	}

});
}
return false;
});

$("#regis").click(function(){

	var cuenta = $( "#cuenta" ).val();
  var espacio = $( "#espacio" ).val();
	var correo =$('#correo').val();
// Returns successful data submission message when the entered information is stored in database.
var dataString ="";
dataString= 'cuenta='+ cuenta +'&correo='+ correo+'&espacio='+ espacio;
if (cuenta === undefined|| cuenta===""||correo === undefined|| correo==="" ) {
	$('#ErrorModal1').modal('show');

}else {
	$('#exampleModalCenter').modal('hide');
// AJAX Code To Submit Form.
$.ajax({
	type: "POST",
	url: "lib/phptransac/regis.php",
	data: dataString,
	cache: false,
	success: function(result){

		switch (result)
		{
			case 'Exist': $('#ExistModal').modal('show');;
			break;

			case 'saved': $('#Modal').modal('show');;
			break;

			case 'notsend': $('#ErrorModal').modal('show');;
			break;

		};  
	}

});
}
return false;
});

/*credencial*/
$("#btinicio").click(function(){
	$("#p1").remove();
	$("#p2").show();
});

$("#buscarcta").click(function(){
	var cuenta = $( "#ctac" ).val();
// Returns successful data submission message when the entered information is stored in database.
var dataString ="";
dataString= 'cuenta='+ cuenta;
if (cuenta === undefined|| cuenta==="") {
	alert('Por favor ingresa un número de cuenta; o selecciona el espacio académico donde estudiaste.');
}else {
// AJAX Code To Submit Form.
$.ajax({
	type: "POST",
	url: "lib/phptransac/bcred.php",
	data: dataString,
	cache: false,
	success: function(result){
		if (result===""|| result===null) {
			$('#ErrorModal').modal('show');
		}else{
			var res =result;
			$("#p2").hide();
			$("#envioc").show();
			$('#solcred').append(res);

		}
	}

});
}
return false;
});
/*credencial*/
$(function(){
	$('#solcred').on('submit', function (e){
          e.preventDefault(); // Evitamos que salte el enlace.
          /* Creamos un nuevo objeto FormData. Este sustituye al 
          atributo enctype = "multipart/form-data" que, tradicionalmente, se 
          incluía en los formularios (y que aún se incluye, cuando son enviados 
          desde HTML. */
          var paqueteDeDatos = new FormData();
          
          paqueteDeDatos.append('uploadedfile', $('#uploadedfile')[0].files[0]);
          paqueteDeDatos.append('cuenta', $('#ct').val());
          paqueteDeDatos.append('email', $('#mail').val());
          

          var destino = "lib/phptransac/uploaderc.php"; // El script que va a recibir los campos de formulario.
          /* Se envia el paquete de datos por ajax. */
          $.ajax({
          	url: destino,
            type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
            contentType: false,
            data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
            processData: false,
            cache: false, 
            beforeSend: function () {

            	$('#respuesta').modal('show');
            },
            success: function(resultado){ // En caso de que todo salga bien.
            	console.log(resultado);
            	var result =$.trim(resultado);
            	$('#bp').remove();
              var cten =$('#cte').val();
            	switch (result)
            	{
            		case 'ok': 
            		$( "#modal-body" ).append( "<div  class='alert alert-success' role='alert'>Estamos atendiendo tú solicitud, pronto estaremos en contacto contigo por favor descarga el recibo de pago.</div><form action='cobt.php' method='post'><input type='hidden' name='dc' value='"+cten+"'><input class='btn btn-success' type='submit' value='Descargar comprobante de registro'></form>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Generada': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú credencial presenta estatus de generada</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Solicitada': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú credencial presenta estatus de solicitada </div> <form action='cobt.php' method='post'><input type='hidden' name='dc' value='"+cten+"'><input class='btn btn-success' type='submit' value='Descargar comprobante de registro'></form>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'Entregada': 
            		$( "#modal-body" ).append( "<div class='alert alert-warning' role='alert'>Tú credencial presenta estatus de confirmada</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'noexiste': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Número de cuenta no encontrado, por favor comunícate con nosotros.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio1': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio2': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio3': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio4': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'errorenvio5': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Ha surgido un error; intenta de nuevo más tarde.</div>" );
            		$('#respuesta').modal('show');
            		break;

            		case 'filenosupported': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>Tipo de archivo no admitido; intenta de nuevo.</div>" );
            		$('#respuesta').modal('show');
            		break;
            		case 'menora3m': 
            		$( "#modal-body" ).append( "<div class='alert alert-danger' role='alert'>El archivo debe tener un peso menor o igual a 3 MB.</div>" );
            		$('#respuesta').modal('show');
            		break;


            	}; 
            },
            error: function (){ // Si hay algún error.
            	alert("Algo ha fallado.");
            }

        });
      });
});
/*sesp*/
$(function(){
  $('#sespacio').on('submit', function (e){
          e.preventDefault(); // Evitamos que salte el enlace.
          /* Creamos un nuevo objeto FormData. Este sustituye al 
          atributo enctype = "multipart/form-data" que, tradicionalmente, se 
          incluía en los formularios (y que aún se incluye, cuando son enviados 
          desde HTML. */
          var paqueteDeDatos = new FormData();
          
          
          paqueteDeDatos.append('espacio', $('input[name=Radios]:checked', '#sespacio').val());
          paqueteDeDatos.append('cuenta', $('#usr').val());
          paqueteDeDatos.append('pass', $('#pw').val());
          

          var destino = "lib/phptransac/userplan.php"; // El script que va a recibir los campos de formulario.
          /* Se envia el paquete de datos por ajax. */
          $.ajax({
            url: destino,
            type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
            contentType: false,
            data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
            processData: false,
            cache: false, 
            
            success: function(resultado){
             // En caso de que todo salga bien.
              console.log(resultado);
              var result =$.trim(resultado);
              $("#sespacio").remove();
              $("#sendplan").remove();
              $('#splan').html(result);
              $("#splan").show();
              $("#sendall").show();
             
            },
            error: function (){ // Si hay algún error.
              alert("Algo ha fallado.");
            }

        });
      });
});


});
/*spl*/
$(function(){
  $('#splan').on('submit', function (e){
          e.preventDefault(); // Evitamos que salte el enlace.
          /* Creamos un nuevo objeto FormData. Este sustituye al 
          atributo enctype = "multipart/form-data" que, tradicionalmente, se 
          incluía en los formularios (y que aún se incluye, cuando son enviados 
          desde HTML. */
          var paqueteDeDatos = new FormData();
          paqueteDeDatos.append('plan', $('input[name=Radios]:checked', '#splan').val());
          paqueteDeDatos.append('cuenta', $('#usr').val());
          paqueteDeDatos.append('espacio', $('#esp').val());
          

          var destino = "lib/phptransac/userload.php"; // El script que va a recibir los campos de formulario.
          /* Se envia el paquete de datos por ajax. */
          $.ajax({
            url: destino,
            type: 'POST', // Siempre que se envíen ficheros, por POST, no por GET.
            contentType: false,
            data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
            processData: false,
            cache: false, 
            
            success: function(resultado){
             // En caso de que todo salga bien.
              console.log(resultado);
             if (resultado='ok') {
               $(location).attr('href','1cuestionario.php');
             }else{
              $(location).attr('href','1dae.php');
             }
             
            },
            error: function (){ // Si hay algún error.
              alert("Algo ha fallado.");
            }

        });
      });
});