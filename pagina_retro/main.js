$(document).ready(function() {
    // Seleccionar el formulario de comentarios
    var formComentarios = $('#form-comentarios');
  
    // Agregar evento submit al formulario
    formComentarios.submit(function(event) {
      // Prevenir el comportamiento predeterminado del formulario
      event.preventDefault();
  
      // Obtener los valores del formulario
      var nombre = $('#nombre').val();
      var comentario = $('#comentario').val();
  
      // Agregar el comentario al elemento div
      $('#comentarios').append('<p><strong>' + nombre + ':</strong> ' + comentario + '</p>');
  
      // Limpiar el formulario
      formComentarios[0].reset();
    });
  });
  