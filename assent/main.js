let card = ""
let contenidoJSON = []
let btnStar = $("#btn")

const showUsers = () => {
    $.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType: 'json',
        success: function(data) {
            contenidoJSON = data.results
            $.each(contenidoJSON, function(i){
                card += `<article class="randomUsers__user">
                                <img src="${contenidoJSON[i].picture.thumbnail}" alt="" onclick="persona('${data.info.seed}','${contenidoJSON[i].email}')">
                                <h3>${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</h3>
                                <h3>${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</h3>
                        </article>`

                $("#contenido").html(card)
                $('#userContenido').fadeIn("slow", function() {
                    $('#hero').slideUp("slow")
                 })
            })
        }
    });
}

btnStar.click(showUsers)

function persona (seed,email){

    let data = {
        "seed" : seed,
        "email" : email
    }

    let datosString = JSON.stringify(data);

    localStorage.setItem('datos', datosString);
    window.location = 'user.html';
}
