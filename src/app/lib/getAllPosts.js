export default async function getAllPosts() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return posts.json();
}
