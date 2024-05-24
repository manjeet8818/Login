// export async function onRequestPost(context) {
//   const formdata = await context.request.formData(); // await the promise
//   const username = formdata.get('user-name-1');
//   const email = formdata.get('email-1');
  
//   await context.env.USER_DATA_STORE.put(username, email);
//   return new Response(`${username} - ${email}`); // Corrected string interpolation
// }




export async function onRequestPost(context) {
  const formdata = await context.request.formData();
  const username = formdata.get('user-name-1');
  const email = formdata.get('email-1');
  const password = formdata.get('password-1');

  // Encrypt the password using Web Crypto API
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const encryptedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Store the username, email, and encrypted password
  await context.env.USER_DATA_STORE.put(username, JSON.stringify({ email, password: encryptedPassword }));

  return new Response(`${username} - ${email}`);
}

