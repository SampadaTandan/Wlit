const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchAPI(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    handleData(data);
  } catch (error) {
    console.error("An error occurred", error);
  }
}

function handleData(data) {
  console.log('Received data', data);
  const heading = document.getElementById("heading");
  const post = data[0];  
  heading.innerText = `Post Title: ${post.title}`;
  document.body.innerHTML += `<p>${post.body}</p>`;
}

fetchAPI(DEMO_URL);
