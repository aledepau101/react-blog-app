import { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || text.trim() === '') {
      setError('Please enter both a name and a comment.');
      return;
    }

    onAddComment({ name: name.trim(), text: text.trim() });
    setName('');
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a comment</h3>
      <input className="comment-input"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea className="comment-input"
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;