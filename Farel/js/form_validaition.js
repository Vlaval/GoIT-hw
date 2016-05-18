(function( $ ){

    $(function() {

        $('.rf').each(function(){
            // Declare variables (form and submit button)
            var form = $(this),
                btn = form.find('.btn_submit');

            // Adding an indication that the field is empty
            form.find('.rfield').addClass('empty_field');

            // Function for form fields checking
            function checkInput(){
                form.find('.rfield_1').each(function(){
                    if($(this).val() != ''){
                    	$(this).removeClass('empty_field');
						form.find('.empty_field_text_1').addClass('hidden');    
                    } else {
                    	$(this).addClass('empty_field');
                    	form.find('.empty_field_text_1').removeClass('hidden');    
                    }
                });

                form.find('.rfield_2').each(function(){
                    if($(this).val() != ''){
                      	$(this).removeClass('empty_field');
                    	form.find('.empty_field_text_2').addClass('hidden');    
                    } else {
                      	$(this).addClass('empty_field');
                    	form.find('.empty_field_text_2').removeClass('hidden');    
                    }
                });

                form.find('.rfield_3').each(function(){
                    if($(this).val() != ''){
                      	$(this).removeClass('empty_field');
                    	form.find('.empty_field_text_3').addClass('hidden');    
                    } else {
                      	$(this).addClass('empty_field');
                    	form.find('.empty_field_text_3').removeClass('hidden');    
                    }
                });
            }

            // Submit-button event
            btn.click(function(){
                checkInput();
                var sizeEmpty = form.find('.empty_field').size();

                if(sizeEmpty > 0){
                    if(btn.hasClass('submit_disabled')){
                    	return false
                    } else {
                    	btn.addClass('submit_disabled')
                    }
                } else {
                    btn.removeClass('submit_disabled')
                    return true
                }

                if($(this).hasClass('submit_disabled')){
                    return false
                } else {
                	form.submit();
                }
            });
        });
    });

})( jQuery );