 export const getTranscripts = () => {
     return fetch(`http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c`)
     .then(res => res.json())
     .catch(ex => {
         console.log('parsing failed', ex)
    });
 }

export const uploadTranscripts = (transcripts) => {
    return fetch(`http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(transcripts)
        })
        .then(res => res.json());

}

