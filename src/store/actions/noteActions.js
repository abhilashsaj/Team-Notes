export const createNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('notes').add({
          ...note,
          authorFirstName: 'Abhilash',
          authorLastName: 'Saj',
          authorId: 12345,
          createdAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_NOTE_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_NOTE_ERROR' }, err);
        });
      }
  };