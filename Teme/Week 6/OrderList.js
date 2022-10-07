var button = document.querySelectorAll("button");
var addCommentElement = document.getElementById("addcommenthere");
var day1 = document.querySelector('.day1');
var day2 = document.querySelector('.day2');
var day3 = document.querySelector('.day3');
var day4 = document.querySelector('.day4');
var day5 = document.querySelector('.day5');
var day6 = document.querySelector('.day6');
var day7 = document.querySelector('.day7');

function createElementOne(text){
    var div = document.createElement("div");
    if(text === ''){
    }
    else{
        div.innerHTML = text + ' <button onclick = deleteCommentElement(event)>X</button>'
    }
    return div;

}

function deleteCommentElement(event) {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}

button.forEach( add => {

    var id = add.getAttribute('id')

    add.addEventListener('click', () => {
        
        var commentElement = createElementOne(addCommentElement.value);
        
        switch(id){

            case 'addbutton1':
                day1.appendChild(commentElement);
                break;
            case 'addbutton2':
                day2.appendChild(commentElement);
                break;
            case 'addbutton3':
                day3.appendChild(commentElement);
                break;
            case 'addbutton4':
                day4.appendChild(commentElement);
                break;
            case 'addbutton5':
                day5.appendChild(commentElement);
                break;
            case 'addbutton6':
                day6.appendChild(commentElement);
                break;
            case 'addbutton7':
                day7.appendChild(commentElement);
                break;
            default:

        }    

        })})