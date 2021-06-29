import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Main from "./components/Main";
import Content from "./components/Content";
import {Button} from "react-bootstrap";
import {CONTENT_ROUTE} from "./utils/consts";

function App() {
    const history = useHistory()

    return (
            <Router>
                {/*<Button variant="outline-dark" onClick={() => {history.push(CONTENT_ROUTE)}}>Работа с компонентами</Button>*/}
                <NavLink to={CONTENT_ROUTE}>Работа с компонентами</NavLink>
                <Switch>
                    <Route path={CONTENT_ROUTE}>
                        <Content />
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
