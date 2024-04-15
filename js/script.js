let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Question 1
document.querySelector("#host-name").innerHTML = "Evan";

document.querySelector("#collaborator-name").innerHTML = "Flora";

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let hidebutton = document.querySelector("#instruction_button");
hidebutton.addEventListener("click", hideInstructions);

function hideInstructions() {
    let questions = document.querySelectorAll(".question"); 
    for(let i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }
}

// Challenge: Add a keyboard shortcut 'i' to do the same.
hidebutton.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'i'
    if (event.key === 'i') {
        let questions = document.querySelectorAll(".question"); 
        for(let i = 0; i < questions.length; i++){
            questions[i].style.display = "none";
        }
    }
});

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let firstName = document.getElementById("first_name"); 
firstName.addEventListener('input', function() { // change event works too 
    let x = document.getElementById("first_name").value;
    let text;
    if (x == "John") {
        document.getElementById("last_name").value = "Doe";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#user_name").addEventListener('input', function() { // change event works too 
    let userName = document.querySelector("#user_name").value;
    let isUsernameUnique = true;

    for(let i = 0; i < pokemonList.length; ++i) {
        if (userName === pokemonList[i]) {
            isUsernameUnique = false;
            break; // Exit the loop as soon as a matching username is found
        }
    }

    if (!isUsernameUnique) {
        document.querySelector("#username-alert").innerHTML = "Username already exists"; 
    } else {
        document.querySelector("#username-alert").innerHTML = "Unique username created";
    }
});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#password").addEventListener('input', function() {
    match();
});

document.querySelector("#confirm_password").addEventListener('input', function() {
    match();
});

function match(){
    let p1 = document.querySelector("#password").value;
    let p2 = document.querySelector("#confirm_password").value;

    if (p1 !== p2) {
        document.querySelector("#password-alert").innerHTML = "Password does not match";
    } 
    else{
        document.querySelector("#password-alert").innerHTML = "Password Matches";
    }

}

// Challenge: Implement the Hide Password button. The button text should change accordingly. 
// Also add a keyboard shortcut 'h' to do the same.
let hidePasswordButton = document.querySelector("#hide-password");

hidePasswordButton.addEventListener("click", hidePassword);

function hidePassword() {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm_password");

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        hidePasswordButton.innerHTML = "Show Password";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        hidePasswordButton.innerHTML = "Hide Password";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        hidePassword();
    }
});



//Question 6
// Once an option is selected, there is no way to reset a radio button. Add a 'Reset' button below and clear the selected value.
document.querySelector("#radio-reset-button").addEventListener("click", function(){
    let choice = document.querySelector('input[name="favorite_day"]:checked');
    choice.checked = false; 
});


//Question 7 
// If the chosen image is larger than 100KB, alert the user. Remove the chosen file selection
document.getElementById("profile_pic").addEventListener("change", function() {
    // Get the selected file input element
    let fileInput = document.getElementById("profile_pic");

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Get the selected file
        let file = fileInput.files[0];
        
        // Check if the file size exceeds 100KB (100 * 1024 bytes)
        if (file.size > 100 * 1024) {
            // Alert the user
            alert("The chosen image is larger than 100KB. Please select a smaller image.");
            
            // Clear the selected file
            fileInput.value = "";
        }
    }
});

//Question 8
// Change the background color of the page, when the user chooses a color
document.getElementById("color-picker").addEventListener("input", function() {
    let color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = color;
});

//Question 9 
// This button should clear all the form values.
function resetForm() {
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    document.body.style.backgroundColor = "";

    let file = document.getElementById("profile_pic");
    if (file) {
        file.value = "";
    }

    let radioButtons = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}

document.querySelector(".reset-form-button").addEventListener("click", resetForm);


// Challenge: Add a keyboard shortcut 'r' to do the same.
document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        resetForm();
    }
});

