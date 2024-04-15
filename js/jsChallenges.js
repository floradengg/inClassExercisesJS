// challenge 1: when you check the box the email field appears
let x = document.getElementById("subscribe");
function challenge1() {
    if (x.checked) {
        document.getElementById("emailDiv").style.display = 'block';
    }
    else {
        document.getElementById("emailDiv").style.display = 'none';
    }
}

// with event listener
document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked){
        document.querySelector("#emailDiv").style.display="block";
    }
    else{
        document.querySelector("#emailDiv").style.display="none";
    }
});

// challenge 2: When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
let billing = document.getElementById("sameAddress");
billing.addEventListener("change", function(){
    if (billing.checked){
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").readOnly = true; // or .disabled = true;
    }
    else {
        document.getElementById("home").readOnly = false; // or .disabled = false;
        document.getElementById("home").value = "";
    }
});

// challenge 3: Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert
function challenge3() {
    let standing = document.querySelector('input[name="standing"]:checked'); // all the inputs where the names is standing 
    let grad_date = document.querySelector('input[name="gradDate"]:checked'); // all the inputs where the names is gradDate 

    if(standing == null || grad_date == null){
        alert("must choose one grad date and standing"); 
        return false;
    }
}

// with event listener
document.querySelector("#ch3form").addEventListener("submit", function(e) {
    let date = document.querySelectorAll('input[name="gradDate"]');
    let standing = document.querySelectorAll('input[name="standing"]');
    if (date == null || standing == null){
        alert("You must select a choice from each set of radio buttons");
        e.preventDefault();
    }
});

// challenge 4: show error messages
function challenge4() {
    if (document.querySelector("#name").value == "" && document.querySelector("#addr").value == "") {
        document.querySelector("#nameError").classList.remove("errormsg");
        document.querySelector("#addrError").classList.remove("errormsg");
        return false;
    }
    else if (document.querySelector("#name").value != "" && document.querySelector("#addr").value == "") {
        document.querySelector("#nameError").classList.add("errormsg");
        document.querySelector("#addrError").classList.remove("errormsg");
        return false;
    }
    else if (document.querySelector("#name").value == "" && document.querySelector("#addr").value != "") {
        document.querySelector("#nameError").classList.remove("errormsg");
        document.querySelector("#addrError").classList.add("errormsg");
        return false;
    }
    else {
        document.querySelector("#nameError").classList.add("errormsg");
        document.querySelector("#addrError").classList.add("errormsg");
        return true;
    }
}

// with event listener
document.querySelector("#challenge4_form").addEventListener('submit', function() {
    nameField = document.querySelector("#name").value;
    addrField = document.querySelector("#addr").value;
    nameError = document.querySelector("#nameError");
    addrError = document.querySelector("#addrError");
    if (nameField.length == 0) {
        nameError.classList.remove("errormsg");
    }
    else {
        nameError.classList.add("errormsg")
    }
    if (addrField.length == 0){
        addrError.classList.remove("errormsg")
    }
    else {
        addrError.classList.add("errormsg")
    }
    if (nameField.length == 0 || addrField.length == 0){
        return false
    }
    return true
});

// challenege 5: Hover over the images and display both the image and the alt text on top of the image
// Update the html so that you can tab to all of the image
thumbnails = document.querySelectorAll(".thumbnail");
for (let index = 0; index < thumbnails.length; index++) { 
    thumbnails[index].addEventListener('mouseover', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')";
        document.querySelector("#display").innerHTML = this.alt;
    });
}















