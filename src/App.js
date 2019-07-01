import React, {  Component } from 'react';
import { connect } from 'react-redux';

import { 
  fetchTranscripts, 
  addTranscript
} from './reducer/TranscriptsReducer';

import AddTranscriptIcon from './assets/add-row.svg';

import './App.scss';
import TranscriptList from './components/TranscriptList'; 
import Header from './components/Header'; 

class App extends Component {

  componentDidMount = () => {
    this.props.fetchTranscripts();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-main-content">     
          <TranscriptList />
          <div className="app-add-item-container">
            <img src={AddTranscriptIcon} 
              alt="Add Transcript" 
              onClick={() => this.props.addTranscript()}/>
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
    addTranscript,
  }
)(App);
