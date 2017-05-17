
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
		  },
		  country: {
		  	required: true
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
      country: "Please select your country"
      
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

  
  $('#checkout input, .selectric-scroll li').on('keyup blur click', function () { 
        if ($('#checkout').valid()) { 
            $('button').prop('disabled', false);
            $('button').removeClass('btn-disabled');
        } else {
            $('button').prop('disabled', 'disabled');
            $('button').addClass('btn-disabled');
            $('.selectric-wrapper').after($('#country-error')).appendTo();
        }
    });

// ORDER SUMMARY
  var basket = 2;
  var shipping = 20;
    
  function Products(container){
  	this.qty = 1;
	  this.plus = container.find('.plus');
	  this.minus = container.find('.minus');
	  this.qtyContainer = container.find('.quantity');
	  this.priceContainer = container.find('.product-price-amount');
	  this.price = parseInt(this.priceContainer.text());
  }

  function sum(){
  	var st = (product1.qty) * (product1.price) + (product2.qty) * (product2.price);
  	$('#subtotal').text('$' + st);
  	
  	var total = st + shipping;
  	$('#shipping').text('$' + shipping);
  	$('#total').text('$' + total);
  }
  
  Products.prototype.addQty = function(){
		var self = this;
		this.plus.click(function(){
	  	self.qty += 1;
	    self.qtyContainer.text(self.qty);
	    
	    basket += 1;
	    $('.basket-quantity').text(basket);

	    sum();
	  })
	}

	Products.prototype.removeQty = function(){
		var self = this;
		this.minus.click(function(){
	  	if (self.qty > 0){

	  		self.qty -= 1;
	  		self.qtyContainer.text(self.qty);

	  		basket -= 1;
	    	$('.basket-quantity').text(basket);

	    	sum();
	  	}
	  })
	}


	var product1 = new Products($("#product1"));
	product1.addQty();
	product1.removeQty();

	var product2 = new Products($("#product2"));
	product2.addQty();
	product2.removeQty();

	sum();


  $(document).click(function() {
			if ($icon.hasClass('icon-collapse')) $icon.toggleClass('icon-collapse icon-expand')
				else if (!$icon.hasClass('icon-expand')) $icon.toggleClass('icon-expand')
	});
});