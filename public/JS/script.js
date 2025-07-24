const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const sendBtnText = document.getElementById('sendBtnText');
const sendBtnLoader = document.getElementById('sendBtnLoader')


 
 const menuBtn = document.getElementById('menu-btn');
 const mobileBtn = document.getElementById('mobile-menu');

 menuBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('hidden');
 });

 setTimeout(() => {
    document.getElementById('aviso').style.display = 'block';

    setTimeout(() => {
      document.getElementById('aviso').style.display = 'none';
    }, tempoVisivel);
 }, tempoParaAparecer);

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


const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        
        const alphabet = katakana + latin + nums + symbols;
        
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        
        const rainDrops = [];
        
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                
                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };
        
        setInterval(draw, 30);
        
        // Efeito de digitação no título
        const titleText = "Portfólio Backend";
        const typingTitle = document.getElementById('typing-title');
        let i = 0;
        
        function typeWriter() {
            if (i < titleText.length) {
                typingTitle.innerHTML += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                typingTitle.classList.add('terminal-effect');
            }
        }
        
        typeWriter();
        
        // Animação das barras de habilidades
        document.addEventListener('DOMContentLoaded', () => {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => {
                observer.observe(bar);
            });
        });
        
        // Responsividade do canvas
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });