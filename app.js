
$(function(){
  $('.getNewBalance').on('click', function(){
    var promise = $.ajax('/balance');
    promise.then(function(data){
      $('.balance').empty();
      // console.log(data);
      $('.balance').append('<p>' + data.header + '</p>');
      $('.balance').append('<p>' + data.message + '</p>');
        $('p').hide();
        $('p').slideDown("slow");
    })
  })

  $('submit').on('click', function(event){
    event.preventDefault;

  })
})
