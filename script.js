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
