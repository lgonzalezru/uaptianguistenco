		$(function() {
			load(1);
		});
		function unload(page){
			$("#q").val("");
			$("#sel1").val("");
			load(1);
		}
		function load(page){
			
			$("#loader").fadeOut('slow');
			
		}
		function exportar(){
			var query=$("#q").val();
			var query2=$("#sel1").val();
			var parametros = {"action":"export",'query':query,'query2':query2};
			$("#loader").fadeIn('slow');
			$.ajax({
				url:'ajax/listar_productos.php',
				data: parametros,
				beforeSend: function(objeto){
					
				},
				success:function(data){
					$(".outer_div").html(data).fadeIn('slow');
					$("#loader").fadeOut('slow');
				}
			})
		}
		$('#viewProductModal').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Button that triggered the modal
		  
		  var cuenta=button.data('cuenta')   
		  $('#view_cuenta').val(cuenta)
		  var nombre=button.data('nombre')  
		  $('#view_nombre').val(nombre)
		  var clave_espacio=button.data('clave_espacio')   
		  $('#view_clave_espacio').val(clave_espacio)
		  var plan=button.data('plan')   
		  $('#view_plan').val(plan)
		  var sexo=button.data('sexo')   
		  $('#view_sexo').val(sexo)
		  var egreso=button.data('egreso')   
		  $('#view_egreso').val(egreso)
		  var email=button.data('email')   
		  $('#view_email').val(email)
		  var emailuaem=button.data('emailuaem')   
		  $('#view_emailuaem').val(emailuaem)
		  var telefono=button.data('telefono')   
		  $('#view_telefono').val(telefono)
		  var titulacion=button.data('titulacion')   
		  $('#view_titulacion').val(titulacion)
		  var periodo=button.data('periodo')   
		  $('#view_periodo').val(periodo)
		  var rfc=button.data('rfc')   
		  $('#view_rfc').val(rfc)
		  var curp=button.data('curp')   
		  $('#view_curp').val(curp)
		  var lugar_trabajo=button.data('lugar_trabajo')   
		  $('#view_lugar_trabajo').val(lugar_trabajo)
		  var fecintra=button.data('fecintra')  
		  $('#view_fecintra').val(fecintra)
		  var clave_plan=button.data('clave_plan')   
		  $('#view_clave_plan').val(clave_plan)
		  var espacio=button.data('espacio')   
		  $('#view_espacio').val(espacio)
		  var cargo=button.data('cargo')   
		  $('#view_cargo').val(cargo)
		  var telefono_d=button.data('telefono_d')   
		  $('#view_telefono_d').val(telefono_d)
		  var fb=button.data('fb')   
		  $('#view_fb').val(fb)
		  var twitter=button.data('twitter')   
		  $('#view_twitter').val(twitter)
		  var c_costo=button.data('c_costo')   
		  $('#view_c_costo').val(c_costo)
		  var organismo_aca=button.data('organismo_aca')   
		  $('#view_organismo_aca').val(organismo_aca)
		  var labora=button.data('labora')   
		  $('#view_labora').val(labora)
		  var deculab=button.data('deculab')   
		  $('#view_deculab').val(deculab)
		  var tiptrabajo=button.data('tiptrabajo')   
		  $('#view_tiptrabajo').val(tiptrabajo)
		  var desbustrab=button.data('desbustrab')   
		  $('#view_desbustrab').val(desbustrab)
		  var contest=button.data('contest')   
		  $('#view_contest').val(contest)
		  var qestudia=button.data('qestudia')   
		  $('#view_qestudia').val(qestudia)
		  var espacio_actual=button.data('espacio_actual')   
		  $('#view_espacio_actual').val(espacio_actual)
		  var generacion=button.data('generacion')   
		  $('#view_generacion').val(generacion)
		  var ublugtrab=button.data('ublugtrab')   
		  $('#view_ublugtrab').val(ublugtrab)
		  var relforaca=button.data('relforaca')   
		  $('#view_relforaca').val(relforaca)
		  var tilab=button.data('tilab')   
		  $('#view_tilab').val(tilab)
		  var funciones=button.data('funciones')   
		  $('#view_funciones').val(funciones)
		  var capacitacion=button.data('capacitacion')   
		  $('#view_capacitacion').val(capacitacion)
		  var tiempobuscemp=button.data('tiempobuscemp')   
		  $('#view_tiempobuscemp').val(tiempobuscemp)
		  var aquetededicas=button.data('aquetededicas')   
		  $('#view_aquetededicas').val(aquetededicas)
		  var calle=button.data('calle')   
		  $('#view_calle').val(calle)
		  var colonia=button.data('colonia')   
		  $('#view_colonia').val(colonia)
		  var municipio=button.data('municipio')   
		  $('#view_municipio').val(municipio)
		  var estado=button.data('estado')   
		  $('#view_estado').val(estado)
		  var pais=button.data('pais')   
		  $('#view_pais').val(pais)
		  var aviso_acc=button.data('aviso_acc')   
		  $('#view_aviso_acc').val(aviso_acc)
		  var ingreso=button.data('ingreso')   
		  $('#view_ingreso').val(ingreso)
		  var tiemposintrab=button.data('tiemposintrab')   
		  $('#view_tiemposintrab').val(tiemposintrab)
		  var buscemp=button.data('buscemp')   
		  $('#view_buscemp').val(buscemp)
		  var fecsolcre=button.data('fecsolcre')   
		  $('#view_fecsolcre').val(fecsolcre)
		  var credencial=button.data('credencial')   
		  $('#view_credencial').val(credencial)
		  var cdc=button.data('cdc')   
		  $('#view_cdc').val(cdc)
		  var caex=button.data('caex')   
		  $('#view_caex').val(caex)
		  var fecasplat=button.data('fecasplat')   
		  $('#view_fecasplat').val(fecasplat)
		  var fecactinf=button.data('fecactinf')   
		  $('#view_fecactinf').val(fecactinf)
		  var infalumni=button.data('infalumni')   
		  $('#view_infalumni').val(infalumni)
		  var fecrefinf=button.data('fecrefinf')   
		  $('#view_fecrefinf').val(fecrefinf)

		})
		$('#editProductModal').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Button that triggered the modal
		  var code = button.data('code') 
		  $('#edit_code').val(code)
		  var name = button.data('name') 
		  $('#edit_name').val(name)
		  var category = button.data('category') 
		  $('#edit_category').val(category)
		  var stock = button.data('stock') 
		  $('#edit_stock').val(stock)
		  var price = button.data('price') 
		  $('#edit_price').val(price)
		  var id = button.data('id') 
		  $('#edit_id').val(id)
		})
		
		$('#deleteProductModal').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Button that triggered the modal
		  var id = button.data('id') 
		  $('#delete_id').val(id)
		})
		
		
		$( "#edit_product" ).submit(function( event ) {
			var parametros = $(this).serialize();
			$.ajax({
				type: "POST",
				url: "ajax/editar_producto.php",
				data: parametros,
				beforeSend: function(objeto){
					$("#resultados").html("Enviando...");
				},
				success: function(datos){
					$("#resultados").html(datos);
					load(1);
					$('#editProductModal').modal('hide');
				}
			});
			event.preventDefault();
		});
		
		
		$( "#add_product" ).submit(function( event ) {
			var parametros = $(this).serialize();
			$.ajax({
				type: "POST",
				url: "ajax/guardar_producto.php",
				data: parametros,
				beforeSend: function(objeto){
					$("#resultados").html("Enviando...");
				},
				success: function(datos){
					$("#resultados").html(datos);
					load(1);
					$('#addProductModal').modal('hide');
				}
			});
			event.preventDefault();
		});
		
		$( "#delete_product" ).submit(function( event ) {
			var parametros = $(this).serialize();
			$.ajax({
				type: "POST",
				url: "ajax/eliminar_producto.php",
				data: parametros,
				beforeSend: function(objeto){
					$("#resultados").html("Enviando...");
				},
				success: function(datos){
					$("#resultados").html(datos);
					load(1);
					$('#deleteProductModal').modal('hide');
				}
			});
			event.preventDefault();
		});