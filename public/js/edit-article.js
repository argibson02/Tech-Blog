async function editFormHandler(event) {
  event.preventDefault();
  const article_title = document.querySelector('#article_title').value;
  const description = document.querySelector('#description').value;
  console.log("HIT EDIT ARTICLE JS");
// window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];


  const response = await fetch(`/api/article/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      article_title,
      description
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/api/article/${id}`);
  } else {
    alert('Failed to edit article');
  }
}

document.querySelector('.edit-article-form').addEventListener('submit', editFormHandler);
