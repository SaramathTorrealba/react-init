import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import CardImage from './components/Card';
import Alert from 'react-bootstrap/Alert';

const headerText ="Galería imágenes de rosas con react"
const footerText= "Todos los derechos reservados"
const descriptionButton= "Ver más"

function App() {
  return (
    <>
    <Header name={headerText}/>
    <div className="App">
    <CardImage button={descriptionButton} url="https://cdn.pixabay.com/photo/2022/08/01/10/36/tulips-7357877_1280.jpg" title="Tulipanes rojos en primavera"/>
    <CardImage button={descriptionButton} url= "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg" title="Rosa azul con rocío"/>
    <CardImage button={descriptionButton} url="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg" title="Rosa de varios colores con rocío"/>
    <Alert  variant="success">
          Imágenes extraídas de pixabay! 
        </Alert>
    </div>
    <Footer footer={footerText}/>
    </>
  );
}

export default App;
