

$('#date').on('change', function(){

    console.log('botão funcina?')
    
    var date = $('#date').val()
    

    $.ajax({

        'url': `https://api.nasa.gov/planetary/apod?api_key=mSQt4SNdemJT2Mwa7QIXhSff1RxejkQVumrUus8w&date=${date}`,
        'success':function(result){

            $("div").removeClass('invisivel')

            $('#title').html(`${result.title}`)

            $('#texto').html(`${result.explanation}`)

            if(result.media_type === "image"){

            $('#divimg').html(`
            
            <img class = "imagem" src = "${result.url}">
            
            `)

            }

            else if (result.media_type === "video"){

                $('#divimg').html(`
            
                <iframe class = "imagem" src = "${result.url}">
            
                `)
            }
            
        },
    })

})