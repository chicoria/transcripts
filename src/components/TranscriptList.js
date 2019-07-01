import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'debounce';
import Transcript from './Transcript'; 
import {
    updateTranscript,
    addTranscript,
    deleteTranscript
} from '../reducer/TranscriptsReducer';
class TranscriptList extends Component {


    updateTranscript = debounce(event => {

        const data = {
            id: parseInt(event.currentTarget.attributes['id'].value),
            field: event.currentTarget.attributes['field'].nodeValue,
            value: event.target.value
        };
        console.log("data:", data);

        this.props.updateTranscript(data);

    }, 1300);


    render=() => {
        let transcripts = this.props.transcripts; 
        let transcriptsComponents = <div></div>;
        if (transcripts !== undefined) {
            transcriptsComponents = transcripts.map( (transcript, index) => 
                <Transcript
                    key={index}
                    transcript={transcript}
                    updateTranscript={this.updateTranscript}
                    deleteTranscript={this.props.deleteTranscript}
                />);
        }
        return (
        
                <div className="app-list-items-container ">
                {transcriptsComponents}
                </div>
    
           
        );
    }



}
export default connect(
    (state) => ({
        transcripts: state.transcriptsReducer.transcripts
    }),
    {
        updateTranscript,
        addTranscript,
        deleteTranscript
    }
)(TranscriptList);