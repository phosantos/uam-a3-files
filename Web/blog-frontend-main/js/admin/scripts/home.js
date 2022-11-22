import { getPosts, deletePost } from '../../etc/api.js';
import formatDate from '../../etc/formatDate.js';

function createPostElement(id, title, subheading, date) {
  const article = document.createElement('article');
  article.classList.add('post');
  article.innerHTML = `<a href="/admin/editor.html?id=${id}">
    <h1 class="title">${title}</h1>
    <h2 class="subheading">${subheading}</h2>
  </a>
  <span class="date">${date}</span>
  <button class="delete" data-postid="${id}">
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
      <title>Trash</title>
      <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" />
      <path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>
    Excluir</button>`;

  return article;
}

async function getAllPosts() {
  const postsArea = document.querySelector('.posts');
  const { url } = getPosts();
  const response = await fetch(url);
  const data = await response.json();

  data.forEach(({ id, title, subheading, created_at }) =>
    postsArea.appendChild(
      createPostElement(id, title, subheading, formatDate(created_at)),
    ),
  );

  const deleteBtns = document.querySelectorAll('.delete');

  async function handleDelete(e) {
    e.preventDefault();
    const { postid } = this.dataset;
    const { url, options } = deletePost(postid);
    const response = await fetch(url, options);
    const { auth } = await response.json();
    if (auth === false) location.href = '/admin/login.html';
    location.reload();
  }

  deleteBtns.forEach((btn) => btn.addEventListener('click', handleDelete));
}

export default getAllPosts;
