async function editFormHandler(event) {
  event.preventDefault();

// window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/article/${id}`, {
    method: 'DELETE',
    // body: JSON.stringify({
    //   article_title,
    //   description,
    //   author
    // }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/article/${id}`);
  } else {
    alert('Failed to delete article');
  }
}

document.querySelector('.delete-article-form').addEventListener('delete', editFormHandler);
