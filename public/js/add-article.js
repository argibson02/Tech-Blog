async function newFormHandler(event) {
  event.preventDefault();
console.log("ADD JS HIT");
  const article_title = document.querySelector('#article_title').value;
  const description = document.querySelector('#description').value;
  const author = document.querySelector('#username').innerHTML;
  const user_id = document.querySelector('#userid').innerHTML;

  console.log(author);
  console.log(user_id);
  const response = await fetch(`/api/article`, {
    method: 'POST',
    body: JSON.stringify({
      article_title,
      description,
      author,
      user_id
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add article');
  }
}

document.querySelector('.new-article-form').addEventListener('submit', newFormHandler);
