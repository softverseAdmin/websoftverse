import Footer from './components/footer/Footer';
import Main from './components/main/Main';
//import Menu from './components/Menu/Menu';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="header bg-transparent">
        <Menus />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
