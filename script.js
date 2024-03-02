const password1 = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");
const newPara = document.createElement("p");
const rightform = document.querySelector(".right-form");
const button = document.querySelector("button");
const inputPassword = document.querySelectorAll(".error")

function checkSimilarity () {
    if (!rightform.contains(newPara)) {
        rightform.appendChild(newPara);
      }
    
      if (password1.value === password2.value) {
        newPara.textContent = "Password Match ✓";
        newPara.style.cssText = "color:green; margin: 0; padding: 0; position: absolute; left: 50px; ";
        rightform.appendChild(newPara);
        inputPassword.forEach((pass) => {
            pass.style.border = '1px solid green';
        })
        
      } else {
        newPara.textContent = "Passwords do not Match";
        newPara.style.cssText =
          "color:red; margin: 0; padding: 0; position: absolute; left: 50px; ";
          inputPassword.forEach((pass) => {
            pass.style.border = '1px solid red';
        })
      }
}

password2.addEventListener('input', checkSimilarity);

function updateButtonState () {
    if(password1.value !== password2.value) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}

password1.addEventListener('input', updateButtonState)
password2.addEventListener('input', updateButtonState)
