import UserHeader from './components/UserHeader'
import Gaveta from './components/Gaveta'

function App() {
  const post = "post"
  const acad = "academic"

  return (
    <div className="App container justify-content-center">
      <UserHeader/>
      <Gaveta keyword={post}/>
      <Gaveta keyword={acad}/>
    </div>
  );
}

export default App;
