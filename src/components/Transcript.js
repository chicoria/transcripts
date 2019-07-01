import React from 'react';
import ContentEditable from 'react-contenteditable';
import {disableNewlines,handlePaste} from '../utils/Util'
import PersonIcon from '../assets/person.svg';
import DeleteIcon from '../assets/delete.svg';

const Transcript = ( props  ) => {

    let { transcript } = props; 

    if (transcript=== undefined) {
        return <div></div>
    }
    return (
        <div className="app-list-item" key={transcript.id}>
            <div className="app-list-item-checkbox-container app-list-item-collumn">
                <input type="checkbox" className="styled-checkbox" id={`checkbox-${transcript.id}`} />
                <label htmlFor={`checkbox-${transcript.id}`}></label>
            </div>
            <div className="app-list-item-face app-list-item-collumn">
                <img src={PersonIcon} alt="Person iicon for voice" />
            </div>
            <div className="app-list-item-text app-list-item-collumn">
                <ContentEditable key={`item-voice-${transcript.id}`}
                    html={transcript.voice}
                    field="voice"
                    id={transcript.id}
                    className="app-list-item-title"
                    onChange={props.updateTranscript}
                    onPaste={handlePaste}
                    onKeyPress={disableNewlines}
                />
                <ContentEditable key={`item-text-${transcript.id}`}
                    html={transcript.text}
                    field="text"
                    id={transcript.id}
                    className="app-list-item-body"
                    onChange={props.updateTranscript}
                    onPaste={handlePaste}
                    onKeyPress={disableNewlines}
                />

            </div>
            <div className="app-list-item-delete app-list-item-collumn">
                <img src={DeleteIcon} alt="Delete Voice" onClick={() => props.deleteTranscript(transcript.id)}/>
            </div>
        </div>
    );
}

export default Transcript;