// document.getElementById('login-form').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const form = event.target;
//   const formData = new FormData(form);

//   try {
//     const response = await fetch(form.action, {
//       method: form.method,
//       body: formData,
//     });

//     const errorMessage = document.getElementById('error-message');

//     if (!response.ok) {
//       const errorText = await response.text();
//       errorMessage.textContent = errorText;
//       errorMessage.style.display = 'block';
//     } else {
//       errorMessage.style.display = 'none';
//       const successText = await response.text();
//       alert(successText);
//       // Redirect or other actions can be performed here upon successful login
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     const errorMessage = document.getElementById('error-message');
//     errorMessage.textContent = 'An error occurred. Please try again later.';
//     errorMessage.style.display = 'block';
//   }
// });

// const formOpenBtn = document.querySelector("#form-open"),
//   home = document.querySelector(".home"),
//   formContainer = document.querySelector(".form_container"),
//   formCloseBtn = document.querySelector(".form_close"),
//   signupBtn = document.querySelector("#signup"),
//   loginBtn = document.querySelector("#login"),
//   pwShowHide = document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if (getPwInput.type === "password") {
//       getPwInput.type = "text";
//       icon.classList.replace("uil-eye-slash", "uil-eye");
//     } else {
//       getPwInput.type = "password";
//       icon.classList.replace("uil-eye", "uil-eye-slash");
//     }
//   });
// });

// signupBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.add("active");
// });
// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.remove("active");
// });


document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    const errorMessage = document.getElementById('error-message');

    if (!response.ok) {
      const errorText = await response.text();
      errorMessage.textContent = errorText;
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      const successText = await response.text();
      alert(successText);
      // Redirect or other actions can be performed here upon successful login
    }
  } catch (error) {
    console.error('Error during login:', error);
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'An error occurred. Please try again later.';
    errorMessage.style.display = 'block';
  }
});
