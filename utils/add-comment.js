async function newFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector('#description').value;
  const author = document.querySelector('#author').value;

  const response = await fetch(`/api/dish`, {
    method: 'POST',
    body: JSON.stringify({
      description,
      author
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add article');
  }
}

document.querySelector('.new-article-form').addEventListener('submit', newFormHandler);
