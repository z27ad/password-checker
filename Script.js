const password = document.getElementById("password");
const fill = document.getElementById("fill");
const strengthText = document.getElementById("strengthText");
const checklist = document.getElementById("checklist");
const SuggestPass = document.getElementById("SuggestPass")
const Generate = document.getElementById("Generate");

password.addEventListener("input", function() {

    let value = password.value;
    let score = 0;

    let rules = {
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        symbol: /[^A-Za-z0-9]/.test(value)
    };

    // Update checklist safely
    for (let rule in rules) {
        let element = document.getElementById(rule);

        if (rules[rule]) {
            element.innerHTML = "✔ " + element.textContent.slice(2);
            element.className = "valid";
            score++;
        } 
        
        else {
            element.innerHTML = "✖ " + element.textContent.slice(2);
            element.className = "invalid";
        }
    }

    let percent = (score / 5) * 100;
    fill.style.width = percent + "%";

    // 5 Level System
    if (score === 0) {
        strengthText.textContent = "";
        checklist.p.style.color = "#ffffff";
    }
    else if (score === 1) {
        fill.style.background = "#8B0000";
        strengthText.textContent = "Very Weak";
        strengthText.style.color = "#8B0000";
    }
    else if (score === 2) {
        fill.style.background = "red";
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    }
    else if (score === 3) {
        fill.style.background = "orange";
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
    }
    else if (score === 4) {
        fill.style.background = "#32CD32";
        strengthText.textContent = "Strong";
        strengthText.style.color = "#32CD32";
    }
    else {
        fill.style.background = "green";
        strengthText.textContent = "Very Strong";
        strengthText.style.color = "green";
    }

});

Generate.addEventListener("click", function(){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%^&*";
    let all = upper + lower + number + symbol;
    let newPassword = "";

    
    for (let i = 0; i < 14; i++) {
        let randomIndex = Math.floor(Math.random() * all.length);
        
        newPassword += all[randomIndex];
    }
    
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];
    SuggestPass.value = newPassword
});