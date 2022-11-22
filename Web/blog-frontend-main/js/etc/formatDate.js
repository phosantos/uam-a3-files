function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-br', {
    day: 'numeric',
    month: 'short',
  });
}

export default formatDate;
