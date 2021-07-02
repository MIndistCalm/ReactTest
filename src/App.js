import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";
import ContentMainPage from "./components/workWithContent/ContentMainPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={MainMenu}/>
          <Route path='/content' component={ContentMainPage}/>
          {/*  Добавить пути на компоненты из главного общего меню*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
