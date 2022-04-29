import axios from "axios";
import Quote from "./Quote";
import React, { useState } from "react";

const BASE_API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

/** Show insp quote and make api request.
 *
 * Props
 * - none
 *
 * State
 * - quote
 *
 * App -> Inspquote -> { Quote }
 */
function InspoQuote() {
  const [quote, setQuote] = useState("");

  async function handleClick() {
    const response = await axios.get(BASE_API_URL);
    const inspoQuote = response.data.quote;
    setQuote(inspoQuote);
  }

  return (
    <>
      {quote ? (
        <div>
          <Quote text={quote.text} author={quote.author} />
          <button onClick={handleClick}>Nü Quøte</button>
        </div>
      ) : (
        <button onClick={handleClick}>
          Click Here for an Inspirational Quote!
        </button>
      )}
    </>
  );
}

export default InspoQuote;
