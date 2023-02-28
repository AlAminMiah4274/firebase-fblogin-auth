import './App.css';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './Firebase/Firebase.init';

const auth = getAuth(app);

function App() {

  const facebookProvider = new FacebookAuthProvider();

  const handleFacebookSignIn = (e) => {

    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })
      .catch(e => {
        console.error(e);
      })
  }

  return (
    <div className="App">
      <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
      <button>Sign Out</button>
    </div>
  );
}

export default App;
