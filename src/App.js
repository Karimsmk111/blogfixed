
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id='page-body'>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/articles' element={<ArticlesListPage/>}></Route>
        <Route path='/articles/:articleId' element={<ArticlePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
       </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
