function runWheaterApp(){ 
    
    var apiKey = '970d68ea3a2a4d059c8152108221810';
    var weatherBaseUrl = 'http://api.weatherapi.com/v1'; 
    var temperatureButton = document.getElementById('buttontemperature');
        temperatureButton.addEventListener('click', onTempButClick);
    var temperatureContainer = document.querySelector('#tempcontainer');

    function onTempButClick() {
        var queryParams = 'key=' + apiKey + '&q=Cluj-Napoca';
            fetch(weatherBaseUrl + '/current.json?' + queryParams)
                .then(function(response) {
                return response.json();
            })
                .then(function (weather) {
                console.log(weather);
        var temperature = weather.current.temp_c;
            if(temperature){
                temperatureContainer.style = null;
        var temperatureEl = temperatureContainer.querySelector('#temperature')
                console.log(temperatureEl);
                temperatureEl.innerHTML = temperature;
            } 
            });
    }

}

function runPostsApp(){
    var postsBaseUrl = 'https://jsonplaceholder.typicode.com';
    var postsContainerEl = document.querySelector('#postscontainer');
    var span = document.getElementsByClassName("close")[0];
    const modal = document.getElementById("myModal");

    //Span-ul si window pentru inchiderea modalei la click-ul pe X sau in afara ei.
    
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    //Creez o functie cu parametrii id, title si body la care aducem tagul tip textarea unde le asignam .value de title, respectiv body 
    
    function editModal(id, title, body){
    
        const buttonEdit = document.getElementById('buttonEdit');
        const modalInputTitle = document.getElementById('modalInputTitle');
        const modalInputBody = document.getElementById('modalInputBody');

        modalInputTitle.value = title;
        modalInputBody.value = body;

        modal.style.display = 'block';

        //Adaugarea pe butonul edit a unei functii de click care sa editeze continutul in functie de ce text se pune.

        buttonEdit.onclick = () => {
            const editTitle = modalInputTitle.value;
            const editBody = modalInputBody.value;

            fetch('postsBaseUrl' + '/posts/' + id, {
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    id,
                    title: editTitle,
                    body: editBody,
                })
            }).then(function(response){
                return response.json();
            }).then(function(jsonEdit) {

    
                modal.style.display = 'none';
                getPosts(); //Apeleaza functia de post sa aduca postarile de pe site.
            });
        }
    }

    //Functie prin care se creeaza pentru fiecare div container, cate un div cu title body si id.
    
    function renderrPostsList(posts) {
        posts.forEach(function (post) {
          var postDiv = createPost(post.title, post.body, post.id);
          if (postDiv){
            postsContainerEl.appendChild(postDiv);
           
            //Se aduc butoanele de Edit si Delete unde pe butonul de delete se adauga event de delete pentru postul unde te afli dupa care 
            //vine response de tip json. 

            const buttonEdit = document.getElementById('editPost-' + post.id); 
            const buttonDelete = document.getElementById('deletePost-' + post.id);
            buttonDelete.onclick = () =>{
                fetch('postsBaseUrl' + '/posts/' + post.id, {
                    method: 'DELETE',
                })
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function () {
                        getPosts();
                    });
            }
            buttonEdit.onclick = () => {
                editModal(post.id, post.title, post.body);
            }
          }
        });
    }


    //Creez o functie care aduce prin fatch informatiile de la site(API). Cu raspunsul de la getPosts se creeaza template la div-ul de mai jos.

    function createPost(title, body, id) {
        var div = document.createElement('div');

        div.innerHTML = `
        <div class='post-title'>
                <h2>${title}</h2>
            </div>
            <div class='post-body'>
                ${body}
            </div>
            <div class='post-body'>${id}</div>
            <button id='editPost-${id}'>Edit</button>
            <button id='deletePost-${id}'>Delete</button></div>`;
        
        return div;
    }

    //Functia prin care primesc raspunsul sub forma de JSON de la site(API).
    
function getPosts (){

        fetch(postsBaseUrl + '/posts')
        .then(function(response) {
            return response.json();
        })
        .then(function (posts) {
            renderrPostsList(posts);
        });
    }
    getPosts();

}


var pageInit = function () {
 runWheaterApp();
 runPostsApp();  
};

window.addEventListener('load', function () {
    pageInit();
});