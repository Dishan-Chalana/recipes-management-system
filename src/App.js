import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home';
import New from './components/new-recipe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="new" element={ <New /> } />
          {/* <Route path="blogs" element={ <Blogs /> } />
          <Route path="contact" element={ <Contact /> } /> */}
          <Route path="*" element={ <div>No Page</div> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
