import Card from './components/Card'
import bg from './assets/Neyland.png'
function App() {
  return (
      <div 
      style={{backgroundImage: `url(${bg})`}} 
      className="h-screen w-screen">
        <div className="container mx-auto flex 
        items-center justify-center h-screen">
          <Card />
        </div>  
      </div>
  );
}

export default App
