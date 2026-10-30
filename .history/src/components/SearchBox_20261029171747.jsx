import React, { useState, useRef, useEffect } from "react";

function SearchBox() {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>Search Box</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type to search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Your search text: {text}</p>
      <p>Component render count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;
