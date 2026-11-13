function BlogPost({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
    </article>
  );
}

export default BlogPost;