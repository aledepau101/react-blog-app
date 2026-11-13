function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input input className="comment-input" type="text" placeholder="Your name" />
        <input className="comment-input" type="email" placeholder="Your email" />
        <textarea className="comment-input" placeholder="Your message" />
        <button className="submit-btn" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;