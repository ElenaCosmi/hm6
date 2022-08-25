const emailRequest = prompt('Enter Email');
if (emailRequest === 'admin@test.io') {
  const passwordRequest = prompt('Enter Password');
  if (passwordRequest === 'admin1234') {
    alert('Successful Login');
  } else {
    alert('Wrong Password');
  }
} else {
  alert("Wrong Email");
}