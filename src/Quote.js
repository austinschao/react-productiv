function Quote({ text, author }) {
  return (
    <>
      <p>
        <em>
          {text} - {author}
        </em>
      </p>
    </>
  );
}

export default Quote;
