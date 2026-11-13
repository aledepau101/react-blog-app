import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentForm from '../components/comments/CommentForm';
import axios from 'axios';

function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((postData) => {
        setPost(postData);
        return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      })
      .then((response) => response.json())
      .then((userData) => setUser(userData))
      .catch((error) => console.error('Error fetching post:', error));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        const formatted = data.map((c) => ({ id: c.id, name: c.name, text: c.body }));
        setComments(formatted);
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }, [id]);

  const addComment = (newComment) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId: Number(id),
        name: newComment.name,
        body: newComment.text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([{ id: Date.now(), name: data.name, text: data.body }, ...comments]);
      })
      .catch((error) => console.error('Error posting comment:', error));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {user && (
          <p>
            <strong>Author:</strong> {user.name} ({user.email})
          </p>
        )}
      </article>

      <h2>Comments</h2>
      <CommentForm onAddComment={addComment} />

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IndividualPostPage;