
// Validation

// getting form
let form = document.querySelector("#validation_form");

let validate = () => {

    // getting input field

    let username = document.querySelector("#uname").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    let confirm_password = document.querySelector("#cpassword").value.trim();

    // getting error fields
    let name_error = document.querySelector('.name_error');
    let email_error = document.querySelector('.email_error');
    let p_error = document.querySelector('.p_error');
    let cp_error = document.querySelector('.cp_error');

    // getting output
    let output = document.querySelector(".output_data");

    name_error.innerText = "";
    email_error.innerText = "";
    p_error.innerText = "";
    cp_error.innerText = "";

    let isvalid = true;

    if( username === ''){
        name_error.innerText = " Username is empty";
        isvalid = false;
    }
    if( email === '' || !email.includes('@gmail.com')){
        email_error.innerText = " Invalid Email Address";
        isvalid = false;
    }
    if ( password === '' || password.length < 6){
        p_error.innerText = " Password is too short";
        isvalid = false;
    }
    if ( password !== confirm_password){
        p_error.innerText = " Donot match";
        isvalid = false;
    }
    
    // Submitting in page

    if (isvalid) {
        output.innerHTML = `
          <h3>Submitted Data:</h3>
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
        `;
        form.reset(); // Clear form fields
      }
};

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    validate();
});