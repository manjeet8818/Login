document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });
  
    const errorMessage = document.getElementById('error-message');
  
    if (response.status === 401) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      const text = await response.text();
      alert(text);
      // You can redirect to another page or perform any action on successful login
    }
  });
  