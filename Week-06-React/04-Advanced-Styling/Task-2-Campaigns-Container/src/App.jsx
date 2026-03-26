import Header from './components/Header';
import Footer from './components/Footer';
import Offer from './components/Offer';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        <Offer />
      </div>
      <Footer />
    </>
  );
}

export default App;
