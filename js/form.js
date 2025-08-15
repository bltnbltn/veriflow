const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_pg5d0wq';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    }
  );
});
