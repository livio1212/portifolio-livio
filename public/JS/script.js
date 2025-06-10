const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const sendBtnText = document.getElementById('sendBtnText');
const sendBtnLoader = document.getElementById('sendBtnLoader')


 

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  sendBtn.disabled = true;
  sendBtnText.textContent = "Enviando..."
  sendBtnLoader.classList.remove("hidden");

  try {
    const response = await fetch('https://portfolio-backend-occ7lw.fly.dev/send-email', {
      
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
    alert('Servidor temporariamente fora do ar.');
  } finally{

    sendBtn.disabled = false;
    sendBtnText.textContent = "Enviar Mensagem";
    sendBtnLoader.classList.add("hidden");
  }
});
