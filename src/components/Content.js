import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Route, Switch, useHistory} from "react-router-dom";
import {ARTICLES_ROUTE, CATEGORY_ROUTE, CONTENT_ROUTE, QUOTES_ROUTE} from "../utils/consts";
import Article from "./Article";
import Quote from "./Quote";
import CategoryArticle from "./CategoryArticle";
import CategoryQuote from "./CategoryQuote";

const Content = () => {
    const history = useHistory()

    return (
        <Router>
            <Container className={'d-flex'}>
                <Col md={3}>
                    {/*<Button*/}
                    {/*    variant='outline-dark'*/}
                    {/*    className='mr-3 mt-3'*/}
                    {/*    style={{width: 200}}*/}
                    {/*    onClick={() => {history.push(CONTENT_ROUTE + ARTICLES_ROUTE)}}*/}
                    {/*>*/}
                    {/*    Статьи*/}
                    {/*</Button>*/}
                    <Row>
                    <NavLink to={CONTENT_ROUTE + ARTICLES_ROUTE}
                             className='mr-5 mt-3'
                    >
                        Статьи
                    </NavLink>
                    {/*<Button*/}
                    {/*    variant='outline-dark'*/}
                    {/*    className='mr-3 mt-3'*/}
                    {/*    style={{width: 200}}*/}
                    {/*    onClick={() => {history.push(CONTENT_ROUTE + QUOTES_ROUTE)}}*/}
                    {/*>*/}
                    {/*    Цитаты*/}
                    {/*</Button>*/}
                    <NavLink to={CONTENT_ROUTE + QUOTES_ROUTE}
                             className='mr-5 mt-3'
                    >
                        Цитаты
                    </NavLink>
                    {/*<Button*/}
                    {/*    variant='outline-dark'*/}
                    {/*    className='mr-3 mt-3'*/}
                    {/*    style={{width: 200}}*/}
                    {/*    onClick={() => {history.push(CONTENT_ROUTE + CATEGORY_ROUTE + ARTICLES_ROUTE)}}*/}
                    {/*>*/}
                    {/*    Категории статей*/}
                    {/*</Button>*/}
                    <NavLink to={CONTENT_ROUTE + CATEGORY_ROUTE + ARTICLES_ROUTE}
                             className='mr-5 mt-3'
                    >
                        Категории статей
                    </NavLink>
                    {/*<Button*/}
                    {/*    variant='outline-dark'*/}
                    {/*    className='mr-3 mt-3'*/}
                    {/*    style={{width: 200}}*/}
                    {/*    onClick={() => {history.push(CONTENT_ROUTE + CATEGORY_ROUTE + QUOTES_ROUTE)}}*/}
                    {/*>*/}
                    {/*    Категории цитат*/}
                    {/*</Button>*/}
                    <NavLink to={CONTENT_ROUTE + CATEGORY_ROUTE + QUOTES_ROUTE}
                             className='mr-5 mt-3'
                    >
                        Категории цитат
                    </NavLink>
                    </Row>
                </Col>
                <Col md={9} className={'mt-3'}>
                    <Switch>
                        <Route path={CONTENT_ROUTE + ARTICLES_ROUTE}>
                            <Article />
                        </Route>
                        <Route path={CONTENT_ROUTE + QUOTES_ROUTE}>
                            <Quote />
                        </Route>
                        <Route path={CONTENT_ROUTE + CATEGORY_ROUTE + ARTICLES_ROUTE}>
                            <CategoryArticle />
                        </Route>
                        <Route path={CONTENT_ROUTE + CATEGORY_ROUTE + QUOTES_ROUTE}>
                            <CategoryQuote />
                        </Route>
                    </Switch>
                </Col>
            </Container>
        </Router>
    );
};

export default Content;