import '@styles/App.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Vanilla from '@pages/Vanilla.tsx';
import Home from '@pages/Home.tsx';
import Mui from '@pages/Mui.tsx';
import AntDesign from '@pages/AntDesign.tsx';
import Bootstrap from '@pages/Bootstrap.tsx';
import ChakraUI from '@pages/ChakraUI.tsx';
import SemanticUI from '@pages/SemanticUI.tsx';

const Layout = () => (
  <>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/vanilla">Vanilla </Link>
      <Link to="/mui"> Mui </Link>
      <Link to="/bootstrap"> Bootstrap </Link>
      <Link to="/antdesign"> AntDesign </Link>
      <Link to="/chakraui"> ChakraUI </Link>
      <Link to="/semanticui"> SemanticUI </Link>
    </nav>

    <div id="content">
      <Outlet />
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vanilla" element={<Vanilla />} />
          <Route path="/mui" element={<Mui />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/antdesign" element={<AntDesign />} />
          <Route path="/chakraui" element={<ChakraUI />} />
          <Route path="/semanticui" element={<SemanticUI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
