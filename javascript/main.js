$('.invite-button-opening').on('click', function() {
  $(this).closest('.invite-front')
  .removeClass('active')
  .addClass('flipped')
  .next('.invite-opening')
  .addClass('active')
  .siblings();

  setTimeout(function() {
    $('.invite-opening').css('opacity', 1);
  }, 200);
});

$('.invite-button-close').on('click', function() {
  $(this).closest('.invite-opening').removeClass('active');
  $(this).closest('.invite-opening').siblings('.invite-front').removeClass('flipped').addClass('active');

  setTimeout(function() {
    $('.invite-opening').css('opacity', 0);
  }, 800);
});