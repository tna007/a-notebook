import React from 'react';

function Note({notes, del}) {
    return (
        <div>
            {notes.map((note) => (
                <ul key={note.id}>
                <li>
                  {note.content}
                </li>
                {notes.length > 1 && <button onClick={del}>Delete</button>}
              </ul>
            ))}
        </div>
    );
}

export default Note;