import home from '../admin/scripts/home.js';
import editor from './scripts/editor.js';
import login from './scripts/login.js';
import logout from './scripts/logout.js';

const path = location.pathname;

if (!localStorage.getItem('token') && path !== '/admin/login.html') {
  location.href = '/admin/login.html';
}

if (path === '/admin/' || path === '/admin/index.html') {
  home();
  logout();
}

if (path === '/admin/editor.html') {
  editor();
  logout();
}

if (path === '/admin/login.html') {
  login();
}
