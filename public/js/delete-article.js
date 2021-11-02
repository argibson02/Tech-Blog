async function deleteFormHandler(event) {
  event.preventDefault();
  console.log("HIT DELETE ARTICLE JS");
// window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/article/${id}`, {
    method: 'DELETE',
    // body: "",
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/`);
  } else {
    alert('Failed to delete article');
  }
}

document.querySelector('.delete-article-form').addEventListener('submit', deleteFormHandler);
