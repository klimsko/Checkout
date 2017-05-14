
$(function() {
  $('select').selectric();
  var $icon = $('.selectric').find('i');
  $('.selectric').click(function(){
  	$icon.toggleClass('icon-expand icon-collapse');
  });
  $('.hamburger').click(function(){
		$('.menu').toggleClass('show');
	});
  $(document).click(function() {
			if ($icon.hasClass('icon-collapse')) $icon.toggleClass('icon-collapse icon-expand')
				else if (!$icon.hasClass('icon-expand')) $icon.toggleClass('icon-expand')
	});
});