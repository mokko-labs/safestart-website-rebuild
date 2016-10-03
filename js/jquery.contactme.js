(function($){
	$(document).ready(function() {
		$('#applynow').click(function(e){
		
			e.preventDefault();
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var firstname  = $('#form_name').val(),
				email  = $('#form_email').val(),
				product  = $('#form_product').val(),
				phone  = $('#form_phone').val(),
				message  = $('#form_message').val(),
				data_html,
				success = $('#success');
				
    		if(firstname == "" || firstname == 'First Name'){
                $('#form_name').val('Please enter your name').addClass('error');
				} else if(firstname !='' && firstname !='Please enter your name'){
					$('#form_name').removeClass('error');
			}	
	
			if(phone == "" || phone == 'Phone Number'){
                $('#form_phone').val('Please enter your telephone').addClass('error');
				} else if(phone !='' && phone !='Please enter your telephone'){
					$('#form_phone').removeClass('error');
			}

            if(email == "" || email == 'Email Address'){
                $('#form_email').val('Your email is required').addClass('error');
            	} else if(reg.test(email) == false){
                	$('#form_email').val('Invalid Email Address.').addClass('error');
            	} else if(reg.test(email) != false){
					$('#form_email').removeClass('error');	
				}
			
            if(message == "" || message == 'Tell us about your project'){
                $('#form_message').val('Message is required').addClass('error');
				} else if(message !='' && message != 'Message is required'){
					$('#form_message').removeClass('error');
			}

            if(message != "" && name != "" && reg.test(email) != false) {
            	data_html = "name=" + name + "&email="+ email + "&product=" + product + "&phone="+ phone + "&message" + message;

				$('.overlay').fadeOut(200);
				open = false;
				
                //alert(data_html);
                $.ajax({
                    type: 'POST',
                    url: 'contact_form.php',
                    data: data_html,
                    success: function(msg){
						
						if (msg == 'sent'){
                        	success.html('<div class="alert alert-success">Message <strong>successfully</strong> sent!</div>')  ;
                            $('#form_name').val('');
							$('#form_email').val('');
							$('#form_message').val('');
                        }else{
                            success.html('<div class="alert alert-error">Message <strong>not</strong> sent! Please Try Again!</div>')  ; 
                        }
                    }
                });
    
            }
            return false;
        });
	});
})(jQuery);