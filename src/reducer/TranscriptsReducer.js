import { 
    getTranscripts, 
    uploadTranscripts as uploadTranscriptsAPI
    } from '../services/TranscriptService'; 
    
const initState = {
    transcripts: [],
    transcriptUpdateStatus: 'SETTING'
}

export const TRANSCRIPTS_UPDATE_STATUS_SETTING = 'SETTING';
export const TRANSCRIPTS_UPDATE_STATUS_SUBMITTED = 'SUBMITTED';
export const TRANSCRIPTS_UPDATE_STATUS_SUCCESS = 'SUCCESS';
export const TRANSCRIPTS_UPDATE_STATUS_FAILED = 'FAILED'; 

const TRANSCRIPTS_UPDATE_STATUS = "TRANSCRIPTS_UPDATE_STATUS";
const TRANSCRIPTS_LOAD_DATA = 'TRANSCRIPTS_LOAD_DATA';
const TRANSCRIPTS_UPDATE_TRANSCRIPT = 'TRANSCRIPTS_UPDATE_TRANSCRIPT';
const TRANSCRIPTS_ADD_TRANSCRIPT = "TRANSCRIPTS_ADD_TRANSCRIPT";
const TRANSCRIPTS_DELETE_TRANSCRIPT = "TRANSCRIPTS_DELETE_TRANSCRIPT";

export const updateTranscriptUpdateStatusAction = (status) => ({
    type: TRANSCRIPTS_UPDATE_STATUS, payload: status
})


export const loadTranscriptsAction = (transcripts) => ({
    type: TRANSCRIPTS_LOAD_DATA, payload: transcripts 
})

export const updateTranscriptAction = (transcript) => ({
    type: TRANSCRIPTS_UPDATE_TRANSCRIPT, payload: transcript
})

export const addTranscriptAction = (transcript) => ({
    type: TRANSCRIPTS_ADD_TRANSCRIPT, payload: transcript
})

export const deleteTranscriptAction = (id) => ({
    type: TRANSCRIPTS_DELETE_TRANSCRIPT, payload: id
})
export const fetchTranscripts = () => {
    return (dispatch, getState) => {
        getTranscripts()
            .then(transcripts => dispatch(loadTranscriptsAction(transcripts)))
    }
}

export const uploadTranscripts=()=>{
    return (dispatch, getState) => {
        const transcripts = getState().transcriptsReducer.transcripts; 
        uploadTranscriptsAPI(transcripts)
    }
}

export const updateTranscript = transcript => {
    return (dispatch, getState) => {
        if (transcript.id!==undefined){
            dispatch(updateTranscriptAction(transcript));
        }        
    }
}

export const addTranscript = (transcript ) => {
    return (dispatch, getState) => {
        let transcripts = getState().transcriptsReducer.transcripts; 
        if (transcripts !== undefined && transcripts.length > 0){
            var id = transcripts.length > 0 ? transcripts[transcripts.length - 1].id + 1 : transcripts.length + 1; 
            dispatch(addTranscriptAction({ id: id}));
        }else {
            dispatch(addTranscriptAction({ id: 1 }));
        }

    }
}


export const deleteTranscript=(id)=>{
    return(dispatch)=>{       
        dispatch(deleteTranscriptAction( id ));
    }
}


export default (state = initState, action) => {
    switch (action.type) {


        case TRANSCRIPTS_UPDATE_STATUS:
            return {
                ...state, 
                transcriptUpdateStatus: action.payload
            }  

        case TRANSCRIPTS_LOAD_DATA:
            return {
                ...state,
                transcripts: action.payload
            };

        case TRANSCRIPTS_UPDATE_TRANSCRIPT:

            return {
                ...state,
                transcripts: state.transcripts.map((transcript) => {
                    if (transcript.id !== parseInt(action.payload.id)) {
                        return transcript
                    }
                    return {    
                        ...transcript,             
                        [action.payload.field]: action.payload.value
                    }
                })
            };
                  
    case TRANSCRIPTS_ADD_TRANSCRIPT :
            return  {
                ...state,
        
                transcripts: [
                    ...state.transcripts, {
                        id: action.payload.id,
                        text: 'New transcription',
                        voice: 'New Voice'
                    }
                ]

            }
        case TRANSCRIPTS_DELETE_TRANSCRIPT:
            return {
                ...state,
                transcripts: state.transcripts.filter(transcript => action.payload !== transcript.id)
            }            
        default:
            return state
    }
}