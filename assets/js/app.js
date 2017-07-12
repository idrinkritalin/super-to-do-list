//Check if a Todo is completed
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        var toDel = $(this).text().replace("X ", "");
        removeFromArray(toDel);
    });
    e.stopPropagation;
});

// Add a new Todo
$("input").on("keypress", function(event){
    //var deleteIcon = "<i class=""fa fa-trash-o""aria-hidden="true">";
    var newTodo = $(this).val();
    if(event.which === 13){
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newTodo +  "</li>");
        $("input").val("");
        pushToArray(newTodo);
    }
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
