import { postLogin } from '../../etc/api.js';

async function login() {
  const form = document.querySelector('.loginForm');
  const btn = form.querySelector('button');

  async function handleClick(e) {
    e.preventDefault();

    const data = { user: form.user.value, password: form.password.value };
    const { url, options } = postLogin(data);

    try {
      const response = await fetch(url, options);
      const { auth, token } = await response.json();

      if (auth) {
        localStorage.setItem('token', token);
        location.href = '/admin/';
      } else {
        const error = form.querySelector('.error');
        error.classList.add('active');
      }
    } catch (error) {
      console.log(error);
    }
  }

  btn.addEventListener('click', handleClick);
}

export default login;
