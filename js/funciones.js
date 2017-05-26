$(document).ready(function () {
            $("#preEnunciado").css("display", "none");
            /*$("#formu").mouseover(function () {
                $("#preEnunciado").css("display", "block");
            });
            $("#mnuEnunciado").mouseout(function () {
                $("#preEnunciado").css("display", "none");
            });*/
            $("#Loading").css("display", "none");
});

/*$(".load").click(function(event))
{
    $("#Loading").css("display", "block");
}*/

function MostrarForm()
{
    $("#preEnunciado").css("display", "block");
}

function CancelarPost()
{
    $("#preEnunciado").css("display", "none");
}

function Enviar()
    {
        var email = $("#email").val();
        var password = $("#pass").val();
        var datosLogin = { 'email' : email, 'password' : password };

        console.info(datosLogin);
        var pagina = "http://localhost:1337/login";

        $.ajax({
            url : pagina,
            type : 'POST',
            data : JSON.stringify(datosLogin),
            async : true
        })
        .done(function (respuesta){
            if(respuesta = "si")
            {
                window.location = "index.html";
            }
            else
            {
                alert("Error");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
        
    }

/*function Postear()
{
    var pagina = "http://localhost:1337/postearNuevaEntrada";

    var texttitle = $("#texttitle").val();
    var textheader = $("#textheader").val();
    var posttext = $("#posttext").val();
            
    var datosPost = { "title" : texttitle, "header" : textheader, "posttext" : posttext };

    $.ajax({
        type: 'POST',
        url: pagina,
        data: JSON.stringify(datosPost),
        async: true
        })
        .done(function (form) {
            console.info(form);
            //$("#post").html(form);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
}*/

function enviarPost()
{
    $("#preEnunciado").css("display", "none");
    $("#Loading").css("display", "block");

    var texttitle = $("#texttitle").val();
    var textheader = $("#textheader").val();
    var posttext = $("#posttext").val();

    var Pagina = "http://localhost:1337/postearNuevaEntrada";

    var datosPost = {
        "title" : texttitle,
        "header" : textheader,
        "posttext" : posttext,
    };

    //autor = localstorage.getItem("email");

    //preferencias = localstorage.geitem("preferencias");

    var funcionajax= $.ajax({
        url: Pagina,
        type : 'POST',
        data : JSON.stringify(datosPost)
    })
    .done(function(retorno){
        //$("#btnprincipal").html("<button class=...");
        var posts;

        posts += '<div class="container">';
        posts += '<div class="row">';
        posts += '<div class="col-xs-12 col-sm-8 col-md-9 col-lg-9">';
        posts += '<h2>'+retorno.title+'</h2>';
        posts += '<h3>'+retorno.header+'</h3>';
        posts += '<p>'+retorno.posttext+'</h3>';
        posts += '</div>';
        posts += '</div>';
        posts += '</div>';
        posts += '<hr>'
        //etc etc...

        $("#posteos").after("<div id='POSTS'></div>");
        $("#POSTS").html($("#posts").html()+posts);
        $("#Loading").css("display", "none");
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}

