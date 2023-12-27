
$(document).ready(function () {
  $("#signup_form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 4
      },
      sname: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      fname: {
        required: "Please enter your first name",
        minlength: "First name should be at least 4 characters long"
      },
      sname: {
        required: "Please enter your last name",
        minlength: "Last name should be at least 4 characters long"
      }
    }
  });
});
