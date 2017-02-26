function Contar_Palabras() {
    
    var lc_Palabra          = document.getElementById('fc_palabra').value

    if ( lc_Palabra.replace(/\s/,'') == "" ) {
        alert( 'La palabra no puede ser nula.' );    
    } else {
        var li_Total_Caracteres = lc_Palabra.length;
        
        var lc_RegExp_Vocal   = /[aeiou]{1}/;
        var lc_RegExp_Numero  = /[0-9]{1}/;
    
        var li_Total_Vocales = 0;
        var li_Total_Numeros = 0;
        
        //console.log( li_Total_Caracteres );
        
        for (li_Caracter=0; li_Caracter < li_Total_Caracteres; li_Caracter++ ) {
            var lc_Caracter   = lc_Palabra.substr(li_Caracter, 1);
            var la_Vocales  = lc_RegExp_Vocal.exec(lc_Caracter);
            if (la_Vocales != null) {
                li_Total_Vocales++;
                console.log('vocal ' + lc_Caracter);
            } else {
                // CONTAR LOS NÚMEROS
                var la_Numeros  = lc_RegExp_Numero.exec(lc_Caracter);
                if (la_Numeros != null) {
                    li_Total_Numeros++;
                    console.log('numero ' + lc_Caracter);
                }
            }
        }
        
        // ASIGNAR LOS TOTALES A CADA CAMPO
        $('#fc_Total_Vocales').text( li_Total_Vocales );
        $('#fc_Total_Numeros').text( li_Total_Numeros );
    }
}

function Imprimir_Alreves() {
    var lc_Palabra          = document.getElementById('fc_palabra').value;
    if ( lc_Palabra.replace(/\s/,'') == "" ) {
        alert( 'La palabra no puede ser nula.' );    
    } else {
        var li_Total_Caracteres = lc_Palabra.length;
        
        for (li_Caracter=(li_Total_Caracteres-1); li_Caracter >= 0; li_Caracter-- ) {
            var lc_Caracter   = lc_Palabra.substr(li_Caracter, 1);
            //console.log('vocal ' + lc_Caracter);
            $('#fc_Resultado').text( $('#fc_Resultado').text() + lc_Caracter );
        }
    }
}

$(document).ready(function() {

    $('.boton_accion').click(function() {
        $(this).css( { 'background-image':'url(./img/resultado.png)' } ); 
    });
     
    // EVENTO DINÁMICO PARA CAMBIAR IMAGEN DEL BOTÓN
    $('.reves').click(function() {
          // EJECUTAR LA ACCIÓN
          Imprimir_Alreves();
          // CAMBIAR DIV QUE PRESENTA EL RESULTADO
          $('.div_resultado').css( { color:'#fff', background:'#006699' } ); 
    });

});
