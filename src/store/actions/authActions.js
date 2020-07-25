export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        
        firestore.collection('notifications').doc(credentials.email).set({
            content: 'Logged In',
            user: `${credentials.email}`,
            time: new Date()
          }).then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

  export const signOut = () => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().signOut().then(() => {
        // firestore.collection('users').doc(resp.user.uid).update({status: "inactive"});
        dispatch({ type: 'SIGNOUT_SUCCESS' })
        
      });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
          role: newUser.role,
          status: newUser.status
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }