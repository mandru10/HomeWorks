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

function runPostsApp() {
    var postsBaseUrl = 'https://jsonplaceholder.typicode.com';
    var postsContainerEl = document.querySelector('#postscontainer');

    function renderrPostsList(posts) {
        posts.forEach(function (post) {
          var postDiv = createPost(post.title, post.body);
          if (postDiv){
            postsContainerEl.appendChild(postDiv);
          }
        });
    }

function createPost(title, body) {
        var div = document.createElement('div');
        div.innerHTML = 
        "<div class='post-title'>" +
        "<h2>" + 
        title +
        "</h2>" +
        "</div><div class='post-body'>" + 
        body + 
        "/div"; 
        
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

function runEditApp() {


}

var pageInit = function () {
 runWheaterApp();
 runPostsApp();
};

window.addEventListener('load', function () {
    pageInit();
});