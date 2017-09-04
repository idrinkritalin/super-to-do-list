//Check if a Todo is completed
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        var toDel = $(this).text().replace(" ", "");
        removeFromArray(toDel);
    });
    e.stopPropagation;
});

// Add a new Todo
$("input").on("keypress", function(event){
    var newTodo = $(this).val();
    if(event.which === 13){
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newTodo +  "</li>");
        $("input").val("");
        pushToArray(newTodo);
        updateList()
    }
});

// Toggle for add new Todo
$(".fa-minus").on("click", function(){
    $("input").fadeToggle(200);
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});

// Create an empty tasks arrays
var task = [];

// Define functions for add and delete a task in the array
function pushToArray(newTask){
    task.push(newTask);
}

function removeFromArray(rem){
    var remove = task.indexOf(rem);
    task.splice(remove, 1);
};


// WORK IN PROGRESS
$(document).ready(function(){
    var loadedList = loadList(listObj);
    console.log(loadedList)
});

var listObj = {};

function ArrToObj(arr) {
  var taskObj = {};
  for (var i = 0; i < arr.length; ++i){
      listObj[i] = arr[i]; 
  }
    return listObj
}

function saveList(obj){
    // Put the object into storage
    localStorage.setItem('obj', JSON.stringify(obj));
}

function loadList(obj){
    // Retrieve the object from storage
    var retrievedObj = localStorage.getItem('obj');
    console.log('retrievedObj: ', JSON.parse(retrievedObj));
}

function updateList(){
    ArrToObj(task);
    saveList(listObj);
}