function logout() {
  const logout = document.querySelector('.logout');

  function handleClick() {
    localStorage.removeItem('token');
    location.href = '/admin/login.html';
  }

  logout.addEventListener('click', handleClick);
}

export default logout;
