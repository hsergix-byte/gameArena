document.querySelector('#claire').addEventListener('click', function () {
  const html = document.documentElement;
  html.classList.remove('dark');
  html.classList.add('light');
});
document.querySelector('#sombre').addEventListener('click', function () {
  const html = document.documentElement;
  html.classList.remove('light');
  html.classList.add('dark');
});

(function () {
  emailjs.init("DP8swXqPkA7aShDM5");
})();
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('sendMail_1', 'template_0356sbe', this)
    .then(function () {
      alert('Message envoyé avec succès!');
    }, function (error) {
      alert('Erreur: ' + JSON.stringify(error));
    });
});