
let data = JSON.parse(localStorage.getItem('datos'));
let seed = data.seed;
let email = data.email;

$.ajax({
    url: 'https://randomuser.me/api/?results=50&seed=' + seed,
    dataType: 'json',
    success: function(data) {
        let contenido = data.results
        $.each(contenido, function(i){
            if (contenido[i].email === email){
                let person = contenido[i]
                let cardDetalle = `<article class="user__card">
                                        <img src="${person.picture.large}" alt="">
                                        <h3 class="user__nombre">${person.name.title} ${person.name.first} ${person.name.last}</h3>
                                        <p class="user__userName">${person.login.username}</p>
                                        <p class="user__info">${person.gender}</p>
                                        <p class="user__info">${person.dob.age} años</p>
                                        <p class="user__info">Tel.: ${person.phone}</p>
                                        <p class="user__info">${person.email}</p>
                                        <p class="user__info">${person.location.city}</p>
                                        <p class="user__info">${person.nat}</p>
                                        <div class="btn"  onclick='(function(){ window.location = "index.html" })() ;' > VOLVER </div> 
                                        </div>
                                    </article>`
                $("#user__container").html(cardDetalle)
            }
        })
    }
})
