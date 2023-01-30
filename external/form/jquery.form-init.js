jQuery(function($) {
	function successModal(){
		if($('body').hasClass('modal-open')){
			var objModal = $('.modal');
			if(!objModal.hasClass('show')) return false;
			objModal.find('.tt-modal-message').addClass('tt-active');
			setTimeout(function(){
				objModal.find('.close').trigger('click');
				objModal.find('.tt-modal-message').removeClass('tt-active');
			}, 1600);
		};
	};
	function successForm1(obj){
		var objMessage = $(obj).next('.tt-modal-message');
		objMessage.addClass('tt-active');
		setTimeout(function(){
			objMessage.removeClass('tt-active');
		}, 3600);
	};
	function successForm(obj){
		var objMessage = $(obj).find('.tt-modal-message');
		objMessage.addClass('tt-active');
		setTimeout(function(){
			objMessage.removeClass('tt-active');
		}, 3600);
	};
	//contact.html
	var formContactForm = $('#feedbackform');
	if (formContactForm.length){
		formContactForm.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/contact-form.php",
					success: function() {
						$('#success').fadeIn();
						formContactForm.each(function(){
							this.reset();
						});
						successForm(formContactForm);
					},
					error: function() {
						formContactForm.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//newsletterform
	var subscribeform = $('#subscribeform');
	if (subscribeform.length){
		subscribeform.validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/newsletter-form.php",
					success: function() {
						$('#success').fadeIn();
						subscribeform.each(function(){this.reset();});
						successForm(subscribeform);
					},
					error: function() {
						subscribeform.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//jsFormMakeAppointment
	var formjsFormMakeAppointment = $('#jsFormMakeAppointment');
	if (formjsFormMakeAppointment.length){
		formjsFormMakeAppointment.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/modal-make-appointment.php",
					success: function(){
						$('#success').fadeIn();
						formjsFormMakeAppointment.each(function(){this.reset();});
						successModal(formjsFormMakeAppointment);
					},
					error: function() {
						formjsFormMakeAppointment.fadeTo( "slow", 1, function(){
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	//contact.html
	var blogCommentForm = $('#feedbackComment');
	if (blogCommentForm.length){
		blogCommentForm.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/comment-form.php",
					success: function() {
						$('#success').fadeIn();
						blogCommentForm.each(function(){
							this.reset();
						});
						successForm(blogCommentForm);
					},
					error: function() {
						blogCommentForm.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
	var orderForm = $('#orderform');
	if (orderForm.length){
		orderForm.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"external/form/index-request-services-today.php",
					success: function() {
						$('#success').fadeIn();
						orderForm.each(function(){
							this.reset();
						});
						successForm1(orderForm);
					},
					error: function() {
						orderForm.fadeTo( "slow", 1, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};
});