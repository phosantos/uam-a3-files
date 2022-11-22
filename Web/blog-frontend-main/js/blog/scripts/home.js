import { getPosts } from '../../etc/api.js';
import formatDate from '../../etc/formatDate.js';

function createPostElement(id, title, subheading, date) {
  const article = document.createElement('article');
  article.classList.add('post');
  article.innerHTML = `<a href="/post/?id=${id}"><h1 class="title">${title}</h1><h2 class="subheading">${subheading}</h2></a><span class="date">${date}</span>`;

  return article;
}

async function getAllPosts() {
  document.querySelector('title').innerText = 'Blog | Home';
  const postsArea = document.querySelector('.posts');

  let posts = [];
  const { url } = getPosts();
  try {
    const response = await fetch(url);
    posts = await response.json();
  } catch (error) {
    console.log(error);
  }

  posts.forEach(({ id, title, subheading, created_at }) =>
    postsArea.appendChild(
      createPostElement(id, title, subheading, formatDate(created_at)),
    ),
  );
}

export default getAllPosts;
