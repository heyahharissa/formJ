// $( "button.submit" ).click(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });
//$('form').validate();
// var name = $('#username').val();
// console.log('name');
//
// var email = $('#email').val();
// console.log('email');
//
// var password = $('#password').val();
// console.log('password');
//
// var errors = [];
//
//
// $('name').click( function() {
//     if (name.length > 0) {
//       console.log("I hate raisins")
//       push(errors)
//     }
// });

$('form').validate({
	rules: {
		username: {
      required: true,
      minlength: 7,
      username: true
    },
		email: {
			required: true,
			email: true
		},
		password: {
			required: true,
			minlength: 25,
      password: true
		}
	}
});
