import UserHeader from './components/UserHeader'
import Gaveta from './components/Gaveta'
import Footer from './components/Footer'

function App() {
  const post = "Home"
  const acad = "Education"
  const projetos = "Projects"
  const contato = "Contact"

  return (
    <div className="App container justify-content-center">
      <UserHeader/>
      <Gaveta keyword={post}/>
      <Gaveta keyword={acad}/>
      <Gaveta keyword={projetos}/>
      <Gaveta keyword={contato}/>
      <Footer/>
    </div>
  );
}

export default App;
