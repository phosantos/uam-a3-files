import { getPost, newPost, updatePost } from '../../etc/api.js';

async function getSinglePost(id) {
  const { url } = getPost(id);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function editor() {
  const id = new URLSearchParams(location.search).get('id');
  const form = document.querySelector('.editor');
  const publishBtn = document.querySelector('.editor .btn');

  if (id) {
    publishBtn.textContent = 'Atualizar';
    const { title, subheading, body } = await getSinglePost(id);
    form.title.value = title;
    form.subheading.value = subheading;
    form.content.value = body;
  }

  async function handleClick(e) {
    e.preventDefault();

    //validacao

    const title = form.title.value;
    const subheading = form.subheading.value;
    const body = form.content.value;

    const { url, options } = id
      ? updatePost(id, { title, subheading, body })
      : newPost({ title, subheading, body });

    try {
      const response = await fetch(url, options);
      const { success, auth } = await response.json();

      if (auth === false) location.href = '/admin/login.html';

      if (success) {
        location.href = '/admin/';
      }
    } catch (error) {
      console.log(error);
    }
  }

  publishBtn.addEventListener('click', handleClick);
}

export default editor;
