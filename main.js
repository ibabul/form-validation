const validation = () => {
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let uName = document.getElementById("uName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById('age').value;
    let error = document.getElementById('error');
    let text;


    error.style.padding = '10px';

    if (fName.length < 3) {
        text = "Please enter valid first name"
        error.innerHTML = text;
        return false;
    }
    if (lName.length < 3) {
        text = "Please enter valid last name"
        error.innerHTML = text;
        return false;
    }
    if (uName.length < 6) {
        text = "Please enter valid university name"
        error.innerHTML = text;
        return false;
    }
    if (age < 10) {
        text = "Please enter age 10+"
        error.innerHTML = text;
        return false;
    }
    if (email.indexOf('@') == -1 || email.length < 6) {
        text = "Please enter the valid mail"
        error.innerHTML = text;
        return false;
    }
    alert('Form submitted successfully!');
    return true

}