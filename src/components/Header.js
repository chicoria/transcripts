
import React , {Component} from 'react';
import { connect } from 'react-redux';

import LoadDocumentIcon from '../assets/fetch-document.svg';
import UploadIcon from '../assets/upload.svg';
import {
    fetchTranscripts,
    uploadTranscripts
} from '../reducer/TranscriptsReducer';

class Header extends Component {
    render=()=>{
        return (
            <div className="app-header">
                <div className="app-header-branding-container">
                    <span className="app-transcripts">Transcripts</span>
                </div>
                <div className="app-header-actions-container">
                    <div className="app-header-actions-item">
                        <img src={LoadDocumentIcon} alt="Load Transcripts" onClick={() => this.props.fetchTranscripts()} />
                    </div>
                    <div className="app-header-actions-item">
                        <img src={UploadIcon} alt="Add Data" onClick={() => this.props.uploadTranscripts()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        transcripts: state.transcriptsReducer.transcripts
    }),
    {
        fetchTranscripts,
        uploadTranscripts
    }
)(Header);
