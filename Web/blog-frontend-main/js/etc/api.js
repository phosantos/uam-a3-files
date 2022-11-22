const BASE_URL = 'https://uam-a3-usabilidade-blog-api.up.railway.app/';

const getPosts = () => {
  return { url: BASE_URL + 'posts' };
};

const getPost = (id) => {
  return { url: BASE_URL + 'posts/' + id };
};

const newPost = (body) => {
  const url = BASE_URL + 'posts';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  };
  return { url, options };
};

const updatePost = (id, body) => {
  const url = BASE_URL + 'posts/' + id;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  };
  return { url, options };
};

const deletePost = (id) => {
  const url = BASE_URL + 'posts/' + id;
  const options = {
    method: 'DELETE',
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  };
  return { url, options };
};

const postLogin = (data) => {
  const url = BASE_URL + 'login';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return { url, options };
};

const postNewsletter = (data) => {
  const url = BASE_URL + 'newsletter';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return { url, options };
};

export {
  getPosts,
  getPost,
  newPost,
  updatePost,
  deletePost,
  postLogin,
  postNewsletter,
};
