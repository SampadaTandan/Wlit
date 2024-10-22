const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("An error occurred", error));
}

function handleData(data) {
  console.log('Received data', data);
  const heading = document.getElementById("heading");
  const post = data[0];  // Showing the first post as an example
  heading.innerText = `Post Title: ${post.title}`;
  document.body.innerHTML += `<p>${post.body}</p>`;
}

fetchData(DEMO_URL, handleData);
