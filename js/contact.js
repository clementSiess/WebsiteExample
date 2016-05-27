$(document).ready(function() {
                  $('#contact_form').bootstrapValidator({
                                                        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
                                                        feedbackIcons: {
                                                        valid: 'glyphicon glyphicon-ok',
                                                        invalid: 'glyphicon glyphicon-remove',
                                                        validating: 'glyphicon glyphicon-refresh'
                                                        },
                                                        fields: {
                                                        first_name: {
                                                        validators: {
                                                        stringLength: {
                                                        min: 2,
                                                        },
                                                        notEmpty: {
                                                        message: 'Please supply your first name'
                                                        }
                                                        }
                                                        },
                                                        last_name: {
                                                        validators: {
                                                        stringLength: {
                                                        min: 2,
                                                        },
                                                        notEmpty: {
                                                        message: 'Please supply your last name'
                                                        }
                                                        }
                                                        },
                                                        email: {
                                                        validators: {
                                                        notEmpty: {
                                                        message: 'Please supply your email address'
                                                        },
                                                        emailAddress: {
                                                        message: 'Please supply a valid email address'
                                                        }
                                                        }
                                                        },
                                                        
                                                        comment: {
                                                        validators: {
                                                        stringLength: {
                                                        min: 10,
                                                        max: 200,
                                                        message:'Please enter at least 10 characters and no more than 200'
                                                        },
                                                        notEmpty: {
                                                        message: 'Please tell us what you would like to know'
                                                        }
                                                        }
                                                        }
                                                        }
                                                        })
                  .on('success.form.bv', function(e) {
//                      $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                      $('#contact_form').data('bootstrapValidator').resetForm();
                      
                      if ($("#human").val() != ""){
                      //It is a spam
                      }
                      
                      
                      formSuccess();
                      // Prevent form submission
                      e.preventDefault();
                      
                      // Get the form instance
                      var $form = $(e.target);
                      
                      // Get the BootstrapValidator instance
                      var bv = $form.data('bootstrapValidator');
                      
                          var firstName = $("#firstName").val();
                          var lastName = $("#lastName").val();
                          var email = $("#email").val();
                          var message = $("#message").val();
                      
                      console.log(firstName);
                      console.log(lastName);

                      console.log(email);
                      console.log(message);
                      
                      // Use Ajax to submit form data
                      $.post($form.attr('action'), $form.serialize(), function(result) {
                             console.log(result);
                             


                             }, 'json');
                      });
                  
                  
                  });

function formSuccess(){
    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
}

//
//function submitForm(){
//    // Initiate Variables With Form Content
//    var name = $("#name").val();
//    var email = $("#email").val();
//    var message = $("#message").val();
//    
//    $.ajax({
//           type: "POST",
//           url: "php/form-process.php",
//           data: "name=" + name + "&email=" + email + "&message=" + message,
//           success : function(text){
//           if (text == "success"){
//           formSuccess();
//           }
//           }
//           });
//}

