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

    function renderrPostsList(posts) {
        posts.forEach(function (post) {
          var postDiv = createPost(post.title, post.body, post.id);
          if (postDiv){
            postsContainerEl.appendChild(postDiv);
          }
        });
    }

function createPost(title, body, id) {
        var div = document.createElement('div');
        div.innerHTML = 
        "<div class='post-title'>" +
        "<h2>" + 
        title +
        "</h2>" +
        "</div><div class='post-body'>" + 
        body +
        "</div><div class='post-body'>" + 
        id +  
        "</div>"; 
        
        return div;
    }

    fetch(postsBaseUrl + '/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function (posts) {
        renderrPostsList(posts);
    });

}

function runEditApp(){

var postsBaseUrl = 'https://jsonplaceholder.typicode.com';
var postsContainerEl = document.querySelector('#postscontainer');

fetch(postsBaseUrl + '/posts/1', {
method: 'PUT',
headers:{
    'Content-Type':'application/json'
},
body: JSON.stringify({
id: 1,
title: 'foo',
body: 'bar',
userId: 1
})
}).then(function(response){
return response.json();
}).then(function(jsonEdit) {
renderrPostsList(jsonEdit); });

function renderrPostsList(post) {
          var postDiv = createPost(post.title, post.body, post.id);
          if (postDiv){
            postsContainerEl.appendChild(postDiv);
          }
        };

function createPost(title, body, id) {
        var div = document.createElement('div');
        div.innerHTML = 
        "<div class='post-title'>" +
        "<h2>" + 
        title +
        "</h2>" +
        "</div><div class='post-body'>" + 
        body +
        "</div><div class='post-body'>" + 
        id +  
        "</div>"; 
        
        return div;
    }

}

function runDeleteApp(){

var postsBaseUrl = 'https://jsonplaceholder.typicode.com';

fetch(
postsBaseUrl + '/posts/1', {
method: 'DELETE'
}).then(function(response){
return response.json();
}).then(function(jsonDelete) {
console.log(jsonDelete);
});

}

var pageInit = function () {
 runWheaterApp();
 runPostsApp();
 runEditApp();
 runDeleteApp();   

};

window.addEventListener('load', function () {
    pageInit();
});