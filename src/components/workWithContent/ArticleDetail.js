import React, {useState, useEffect} from 'react';
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {ButtonGroup, Col, Container, Row} from "react-bootstrap";

const ArticleDetail = ({ match }) => {


  const styleImages = {
    width: '400px',
  }

  const styleLink = {
    width: '100%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '.375rem .75rem',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '.25rem',
    marginLeft: '.75rem'
  }


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
          <h2>Item {}</h2>
          {/*<img src={item.images.background} alt="" style={styleImages}/>*/}
        </Col>
        <Col md={3}>
          <ButtonGroup horizontal>
            <Link to={`/content/articles/${match.params.id}/edit`} style={styleLink}>Редактировать</Link>
            <Link to={`/content/articles/${match.params.id}/delete`} style={styleLink}>Удалить</Link>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetail;