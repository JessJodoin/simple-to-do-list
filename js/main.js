$('form').on('submit', function (e) {

  var $li = $('<li>');

  e.preventDefault();

  $li.html($('#list').val());
  $('ul').append($li);

  $('#list').val('');
});

$('ul').on('click', 'li', function () {
  $(this).toggleClass('checked');
});
