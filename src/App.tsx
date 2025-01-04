import '@styles/App.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Vanilla from '@pages/Vanilla.tsx';
import Home from '@pages/Home.tsx';
import Mui from '@pages/Mui.tsx';

const Layout = () => (
  <>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/vanilla">Vanilla </Link>
      <Link to="/mui"> Mui </Link>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
