import { postNewsletter } from '../../etc/api.js';

function newsletter() {
  const form = document.querySelector('.newsletter');
  const btn = form.querySelector('button');

  async function handleClick(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const error = form.querySelector('.error');
    error.classList.remove('active');

    //validacao
    if (!name.trim() || !email.trim()) {
      error.innerText = 'Preencha todos os campos!';
      error.classList.add('active');
    } else {
      const { url, options } = postNewsletter({ name, email });
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          form.name.value = '';
          form.email.value = '';

          btn.innerText = 'INSCRITO!';

          setTimeout(() => {
            btn.innerText = 'SE INSCREVER';
          }, 3000);
        } else {
          error.innerText = 'Email já cadastrado!';
          error.classList.add('active');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  btn.addEventListener('click', handleClick);
}

export default newsletter;
