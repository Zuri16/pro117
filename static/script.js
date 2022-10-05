$(document).ready(function(){

    console.log('Listo')

    //  Obtén la fecha actual y actualízala en el DOM.
    var date=new Date()
    var display_date='fecha'+date.toLocaleDateString()
    $(document).ready(function(){
        $('#display_date').html(display_date)
    })

    //  Escribe un evento, cuando se hace clic en el botón eviar.
    $('').click(function(){

        //  Obtén el valor del texto, del área de texto, con el método 'val()'.
        let text_value = $('').val()

        //  Conviértelo en un objeto JS.
        //  Proporciona una 'clave' aquí y en escribe lo mismo en el archivo app.py; también para extraer los datos.
        let input_text = {'' : text_value}
        console.log(input_text)

        //  Requerimiento AJAX.
        $.ajax({

            //  Tipo de requerimiento web.
            type : 'POST',url:'/predict-emotion',data:JSON.stringify(input_data),dataType:'json',contentType:'aplication/json',

            //  Datos a ser enviados en formato JSON.
            data : JSON.stringify(),

            //  Tipo de respuesta esperada en JSON.
            dataType : 'json',

            //  contentType - (tipo de contenido).
            contentType : 'application/json',

            //  Si todo es exitoso, ejecuta esta función.
            success : function(result){

                // Extrae la predicción y la URL del emoticón del resultado.
                predicted_emotion=result.data.predicted_emotion

                //  Actualiza los elementos del DOM.
                emo_url = result.data.predicted_emotion_emoticon

                //  Muestra los elementos.
                $('#prediction').html(predicted_emotion)
                $('#prediction').css('display','block')
                $('#emo_img_url').attr('src',emo_url)
                $('#emo_img_url').css('display','block')

            },

            //  Si hay algún error, ejecuta esta función.
            error : function(result){

                console.log(result)
            }
        })


        //  Borra el cuadro de texto después de cada clic en el botón.
        $('#text').val("")
    })
        
})