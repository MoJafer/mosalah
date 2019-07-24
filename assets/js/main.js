
  $('.content').first().addClass('active');

  $('.content').hide();
  $('.active').fadeIn(1000);

  function changeContent(content){
    $('.content.active').removeClass('active').hide();
    $('a.active').removeClass('active');
    $('a.' + content).addClass('active');
    $('.' + content).addClass('active').fadeIn(800);
  }
