// export async function onRequestPost(context) {
//   const formdata = await context.request.formData(); // await the promise
//   const username = formdata.get('user-name-1');
//   const email = formdata.get('email-1');
  
//   await context.env.USER_DATA_STORE.put(username, email);
//   return new Response(`${username} - ${email}`); // Corrected string interpolation
// }


import { createHash } from 'crypto';

export async function onRequestPost(context) {
  const formdata = await context.request.formData(); // Await the promise
  const username = formdata.get('user-name-1');
  const email = formdata.get('email-1');
  const password = formdata.get('password-1');

  // Encrypt the password
  const encryptedPassword = createHash('sha256').update(password).digest('hex');
  
  // Store the username, email, and encrypted password
  await context.env.USER_DATA_STORE.put(username, JSON.stringify({ email, password: encryptedPassword }));

  return new Response(`${username} - ${email}`);
}
