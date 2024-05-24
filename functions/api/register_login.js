export async function onRequestPost(context) {
  const formdata = await context.request.formData(); // await the promise
  const username = formdata.get('user-name-1');
  const email = formdata.get('email-1');
  
  await context.env.USER_DATA_STORE.put(username, email);
  // return new Response('Hello : ' + "${username} - ${email}");
  return new Response(`${username} - ${email}`); // Corrected string interpolation
}
