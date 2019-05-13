$('form').on("submit",function(e){
    e.preventDefault();
    var input = $('#input').val();
    if(isNaN(input)){
        $('#task').append("<p>"+input+"<p>");
        return;
    }
    else{
        alert("enter a string");
        return;
    }
});