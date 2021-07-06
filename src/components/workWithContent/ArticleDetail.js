import React, {useState, useEffect} from 'react';
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {ButtonGroup, Col, Container, Row} from "react-bootstrap";

const ArticleDetail = ({ match }) => {

  const styleLink = 'w-100 bg-dark text-white pl-3 pt-2 pr-3 pb-2 text-decoration-none align-middle rounded ml-2'

  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  // const [item, setItem] = useState({
  //   images: {}
  // });

  const fetchItem = async () => {
    // const fetchItem = await fetch( `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    // const items = await fetchItem.json();
    // setItem(item);
    // console.log();
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={9}>
          <div>Item {}</div>
          {/*<img src={item.images.background} alt="" style={styleImages}/>*/}
        </Col>
        <Col md={3}>
          <ButtonGroup horizontal>
            <Link to={`/content/articles/${match.params.id}/edit`} className={styleLink}>Редактировать</Link>
            <Link to={`/content/articles/${match.params.id}/delete`} className={styleLink}>Удалить</Link>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetail;