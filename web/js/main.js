
$(function() {
	// COUNTRY SELECTOR ICON
  $('select').selectric();
  var $icon = $('.selectric').find('i');
  $('.selectric, .selectric-scroll ul li').click(function(){
  	$icon.toggleClass('icon-expand icon-collapse');
  });

  // SHOW/HIDE MENU
  $('.hamburger').click(function(){
		$('.menu').toggleClass('show');
	});

	// FORM VALIDATION
	$("#checkout").validate({
    rules: {
      firstName: {
	      required: true,
	      minlength: 2
	    },
      lastName: {
	      required: true,
	      minlength: 2
	    },
      email: {
        required: true,
        email: true
      },
      address: {
	      required: true,
	      minlength: 2
	    },
	    zipCode: {
	      required: true,
	      minlength: 4
	    },
	    city: {
	      required: true,
	      minlength: 2
	    },
	    state: {
	      required: true,
	      minlength: 2
	    },
      cardNumber: {
		    required: true,
		    minlength: 10,
		    digits: true
		  },
		  cardHolder: {
		    required: true,
		    minlength: 4
		  },
		  cvc: {
		    required: true,
		    minlength: 3,
		    digits: true
		  }
    },
    // Specify validation error messages
    messages: {
      firstName: {
	      required: "Please enter your first name",
	      minlength: jQuery.validator.format("At least {0} characters required!")
	    },
      lastName: {
	      required: "Please enter your last name",
	      minlength: jQuery.validator.format("At least {0} characters required!")
	    },
      email: "Please enter a valid email address",
      country: "Please select an item!"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

  $('#checkout input').on('keyup blur', function () { 
        if ($('#checkout').valid() && $('.selectric .label').text() != 'Select your country') { 
            $('button').prop('disabled', false);
            $('button').removeClass('btn-disabled');
        } else {
            $('button').prop('disabled', 'disabled');
            $('button').addClass('btn-disabled');
        }
    });


	

  $(document).click(function() {
			if ($icon.hasClass('icon-collapse')) $icon.toggleClass('icon-collapse icon-expand')
				else if (!$icon.hasClass('icon-expand')) $icon.toggleClass('icon-expand')
	});
});