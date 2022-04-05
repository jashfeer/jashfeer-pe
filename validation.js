$("#gform").validate({
    rules: {
        name:{
            minlength: 4
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength: 10
        }
    

    },
    messages: {
        name:{
         required: " please enter your name",
         minlength: "Name at least 4 characters"
        },
        email:"Please enter your email",
        phone:"Please enter valid phone number",
        message:"Please enter message.."

      },
   
   
    submitHandler: function(form) {
      form.submit();
    }
   });
   