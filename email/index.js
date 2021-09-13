function sendEmail() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const recEmail = document.getElementById('recEmail');
  const subject = document.getElementById('subject');
  const emailBody = document.getElementById('emailBody');
  try {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: username,
      Password: password,
      To: recEmail,
      From: username,
      Subject: subject,
      Body: emailBody,
    }).then((message) => alert('mail sent successfully'));
  } catch (error) {
    console.log('Something Went Wrong');
  }
}
