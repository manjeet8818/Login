export async function onRequestPost(context) {
  const formdata = context.request.formData();
  const username = formdata.get('user-name-');
  const email = formdata.get('email-1');
  // return new Response('Hello : ' + "${username} - ${email}");
  return new Response('${username} - ${email}');
}
