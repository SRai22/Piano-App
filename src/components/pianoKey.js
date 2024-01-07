import React from 'react';

const PianoKey = ({ note, playNote }) => {
    const isBlackKey = note.includes('s');
    const keyClass = isBlackKey ? 'key black' : 'key white';

    return (
        <div className={keyClass} onClick={playNote}>
            {note}
        </div>
    );
};

export default PianoKey;
