import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './Componentes/AdminPanel';
import AddProductForm from './Componentes/AddProductForm';
import DetilsProductForm from './Componentes/DetilsProductForm';
import EditProfileForm from './Componentes/EditProfileForm';
import MyProducts from './Componentes/MyProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/pagina2" element={<AddProductForm />} />
          <Route path="/pagina3" element={<DetilsProductForm />} />
          <Route path="/pagina4" element={<EditProfileForm />} />
          <Route path="/pagina5" element={<MyProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
