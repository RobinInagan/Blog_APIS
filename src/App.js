import Navbar from "./components/navbar";
import NewsContainer from './components/contenedornoticias'


function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-center my-4">Blog de Noticias</h1>
      <NewsContainer/>
    </div>
  );
}

export default App;
