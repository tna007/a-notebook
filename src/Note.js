import React from 'react';

function Note({notes}) {
    return (
        <div>
            {notes.map((note) => (
                <ul key={note.id}>
                <li>
                  {note.content}
                </li>
              </ul>
            ))}
        
        </div>
    );
}

export default Note;