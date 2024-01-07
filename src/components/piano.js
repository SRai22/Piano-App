import React from 'react';
import PianoKey from './pianoKey';

const Piano = () => {
    const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B', 
                    'C2', 'Cs2', 'D2', 'Ds2', 'E2', 'F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2'];
    const keyBindings = {'a': 'C', 'w': 'Cs', 's': 'D', 'e': 'Ds', 'd': 'E', 'f': 'F', 'r': 'Fs', 'g': 'G', 't': 'Gs', 'h': 'A', 'y': 'As', 'j': 'B'};

    const playNote = (note) => {
        const audio = new Audio(`https://nemo0.github.io/js-piano/notes/${note}4.mp3`);
        audio.play();
    };

    const handleKeyDown = (event) => {
        const note = keyBindings[event.key];
        if (note) {
            playNote(note);
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="piano">
            {notes.map((note, index) => (
                <PianoKey key={index} note={note} playNote={() => playNote(note)} />
            ))}
        </div>
    );
};

export default Piano;
