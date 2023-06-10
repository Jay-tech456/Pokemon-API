import React from 'react';

export default function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    // This is the most common way to add an if statement in react 
    <div>
      {gotoPrevPage && <button onClick = {gotoPrevPage}> Previous </button>}
      {gotoNextPage && <button onClick = {gotoNextPage}> Next </button>}

    </div>
  );
}
