async function newFormHandler(event) {
  event.preventDefault();

  const article_title = document.querySelector('#article_title').value;
  const description = document.querySelector('#description').value;

  const response = await fetch(`/api/article`, {
    method: 'POST',
    body: JSON.stringify({
      article_title,
      description
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
