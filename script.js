const password1 = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");
const newPara = document.createElement("p");
const rightform = document.querySelector(".right-form");
const button = document.querySelector("button");
const inputPassword = document.querySelectorAll(".error")

if (!rightform.contains(newPara)) {
  rightform.appendChild(newPara);
}

function checkSimilarity () {
      if (password1.value === password2.value) {
        newPara.textContent = "Password Match ✓";
        newPara.style.cssText = "color:green; margin: 0; padding: 0; position: absolute; left: 50px; font-size: 12px; ";
        rightform.appendChild(newPara);
        inputPassword.forEach((pass) => {
            pass.style.border = '1px solid green';
        })
        button.disabled = false;
        
      } else {
        newPara.textContent = "Passwords do not Match";
        newPara.style.cssText =
          "color:red; margin: 0; padding: 0; position: absolute; left: 50px; font-size: 12px;";
          inputPassword.forEach((pass) => {
            pass.style.border = '1px solid red';
        })
        button.disabled = true;
      }
}

password2.addEventListener('input', checkSimilarity);


