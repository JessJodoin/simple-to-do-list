$('form').on('submit', function (e) {

  var $li = $('<li>');

  e.preventDefault();

  $li.html($('#list').val());
  $('ul').append($li);

  $('#list').val('');

  $li.on('click', function () {
    $li.toggleClass('checked');
  });
});
