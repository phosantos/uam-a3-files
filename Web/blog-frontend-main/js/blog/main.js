import home from './scripts/home.js';
import post from './scripts/post.js';
import newsletter from './scripts/newsletter.js';

const path = location.pathname;

if (path === '/' || path === '/index.html') {
  home();
}

if (path === '/post/' || path === '/post/index.html') {
  post();
}

newsletter();
