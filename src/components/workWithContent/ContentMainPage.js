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

  const styleLink = {
    width: '100%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '.375rem .75rem',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '.25rem',
    marginTop: '.75rem'
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <ButtonGroup vertical>
            <Link to={`/content/articles`} style={styleLink}>Статьи</Link>
            <Link to={`/content/quotes`} style={styleLink}>Цитаты</Link>
            <Link to={`/content/category/articles`} style={styleLink}>Категории статей</Link>
            <Link to={`/content/category/quotes`} style={styleLink}>Категории цитат</Link>
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