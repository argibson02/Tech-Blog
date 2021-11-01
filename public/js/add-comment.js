async function newFormHandler(event) {
  event.preventDefault();
console.log("HIT ADD COMMENT JS");
  const article_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const description = document.querySelector('#description').value;

  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      description,
      article_id
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/api/article/${article_id}`);
  } else {
    alert('Failed to add comment');
  }
}

document.querySelector('.add-comment-form').addEventListener('submit', newFormHandler);
