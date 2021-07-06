import React from 'react';

import {ButtonGroup, Col, Container, Row} from 'react-bootstrap';
import {Link, Route, Switch} from "react-router-dom";

import Articles from "./Articles";
import Quotes from "./Quotes";
import CategoryArticles from "./CategoryArticles";
import CategoryQuotes from "./CategoryQuotes";
import ArticleDetail from "./ArticleDetail";
import EditContent from "./EditContent";
import DeleteContent from "./DeleteContent";

const ContentMainPage = () => {

  // const {path} = props.match;

  const styleLink = 'w-100 bg-dark text-decoration-none text-center text-white p-2 rounded mt-2'
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <ButtonGroup vertical>
            <Link to={`/content/articles`} className={styleLink}>Статьи</Link>
            <Link to={`/content/quotes`} className={styleLink}>Цитаты</Link>
            <Link to={`/content/category/articles`} className={styleLink}>Категории статей</Link>
            <Link to={`/content/category/quotes`} className={styleLink}>Категории цитат</Link>
          </ButtonGroup>
        </Col>

        <Col md={9}>
          <Switch>
            <Route path={`/content/articles`} exact component={Articles} />
            <Route path={`/content/articles/:id`} exact component={ArticleDetail} />
            <Route path={`/content/articles/:id/edit`} component={EditContent} />
            <Route path={`/content/articles/:id/delete`} component={DeleteContent} />
            <Route path={`/content/quotes`} component={Quotes} />
            <Route path={`/content/category/articles`} component={CategoryArticles} />
            <Route path={`/content/category/quotes`} component={CategoryQuotes} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentMainPage;