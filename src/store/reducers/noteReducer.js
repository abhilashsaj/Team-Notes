const initState = {
  notes: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}
const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      console.log('create note', action.note);
      return state;

    case 'CREATE_NOTE_ERROR':
      console.log('create note error');
      return state;
    default:
      return state;
  }
  return state;
};

export default noteReducer;