$(document).ready(function(){
  $('button#trigger-menu').click(function() {
    $('ul#button-menu').animate({height:"toggle"}, 500, function() {});
  });
  
  $('button#content-button').click(function() {
    $('ul#content-small').toggle('slow');
    $('button#content-button').css({"background":"#4c9cda","color":"#fff", "border":"1px solid #4c9cda"});
  });
  
  $('button#fields-button').click(function() {
    $('ul#fields-small').toggle('slow');
    $('button#fields-button').css({"background":"#4c9cda","color":"#fff", "border":"1px solid #4c9cda"})
  });
  
  $('div.button.submit#submit-application').click(function() {
    $('div.container.status#ok').slideDown('normal');
  });
  
  $('div.container.status#ok i.icon-chevron-up').click(function() {
    $('div.container.status#ok').slideUp('normal');
  });
  
  $('ul.subnav-small li.header#strengthen-button i').click(function() {
    $('ul.expertise-small#strengthen').toggle('normal');
  });
  
  $('ul.subnav-small li.header#specialise-button i').click(function() {
    $('ul.expertise-small#specialise').toggle('normal');
  });
  
});