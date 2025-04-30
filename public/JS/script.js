const form = document.getElementById('contactForm');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };


  try {
    const response = await fetch('https://portfolio-backend-1e5b.onrender.com', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Formulario enviado com sucesso!');
      form.reset();
    } else {
      alert('Erro ao enviar formulario. Tente novamente.');
    }
  } catch (err) {
    console.error(err);
    alert('Erro de rede ou servidor. Tente novamente.');
  }
});
