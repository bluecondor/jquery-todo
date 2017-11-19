//When click on li the text is gray and add strike trough effect
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//When clicked "X" delete todo
$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    //grabbing todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to url
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});  

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});