/** Simple presentation component for a quote.
 *
 * Props:
 * - quote: like { text, author }
 *
 * { App } -> InspoQuote -> Quote
 **/
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
