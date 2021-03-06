import React from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Figure, Row} from "react-bootstrap";
import EditImage from '../../static/edit.png'

const ArticleDetail = (props) => {
  const styleLink = 'pl-3 pr-3 text-decoration-none align-middle rounded'

  return (
    <Container>
      <Row className='mt-3'>
        <Col className='shadow'>
          <div className='d-flex h2 font-weight-bold pl-3 pt-3 justify-content-between'>
            <div>
              {props.location.state.item.title}
            </div>
            <Link to={`/content/articles/${props.match.params.id}/edit`}
                  className={styleLink}>
              <Figure>
                <Figure.Image src={EditImage} width={20} />
              </Figure>
            </Link>
          </div>
          <div className='h5 font-weight-bold text-muted pl-3'>Категория: {
            props.location.state.item.categories.map(item => {
              return item.name + ' '
            })
          }</div>
          <div className='h5 text-monospace pl-3 pb-3'>{props.location.state.item.description}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetail;