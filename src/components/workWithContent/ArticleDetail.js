import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Figure, Row} from "react-bootstrap";
import EditImage from '../../static/edit.png'

const ArticleDetail = (props) => {

  const styleLink = 'pl-3 pr-3 text-decoration-none align-middle rounded'

  const url = 'http://localhost:8000/api/content/contents/';
  const data = {
    "id": 1,
    "title": "Шестая статья",
    "description": "Первая отправленая статья",
    "userId": 1,
    "publishedAt": "2021-07-01T10:38:01+0000",
    "modifiedAt": "2021-07-01T10:38:01+0000",
    "categories": [
      {
        "id": 1,
        "name": "Технологии"
      }
    ]
  };

  useEffect(() => {
    fetchItem();
    getCategories()
    getContent()
  }, []);

  const fetchItem = async () => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      //make sure to serialize your JSON body
      headers: {
        "YT-AUTH-TOKEN": "YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226",
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        response.json()
        // console.log(response)
      })
      .then(body => {
        console.log(body);
      });
  }

  const getCategories = async () => {
    await fetch(`http://localhost:8000/api/content/categories/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  const getContent = async () => {
    await fetch(`http://localhost:8000/api/content/contents/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

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
          <div className='h5 font-weight-bold text-muted pl-3'>Категория: {props.location.state.item.category}</div>
          <div className='h5 text-monospace pl-3 pb-3'>{props.location.state.item.description}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetail;