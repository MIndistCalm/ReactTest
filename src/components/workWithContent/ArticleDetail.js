import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Figure, Row} from "react-bootstrap";
import EditImage from '../../static/edit.png'

const ArticleDetail = (props) => {

  const styleLink = 'pl-3 pr-3 text-decoration-none align-middle rounded'

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    // const fetchItem = await fetch(`http://localhost:8000/api/content/contents`)
    // fetch(`http://localhost:8000/api/content/contents`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    const token = '878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226'
    // Пример отправки POST запроса:
    // async function postData(url = '', data = {}) {
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: new Headers({
    //       'YT-AUTH-TOKEN': 'YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226',
    //       'Content-Type': 'application/json'
    //     }),
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return await response.json(); // parses JSON response into native JavaScript objects
    // }

    const url = 'http://localhost:8000/api/content/contents';
    const data = {
        id: 22,
        title: "Тестовая статья",
        description: "Новая статья из API",
        userId: 7,
        publishedAt: "2021-07-08T06:53:16+0000",
        modifiedAt: "2021-07-08T06:53:16+0000",
        categories: [
          {
            id: 1,
            name: "Технологии"
          },
          {
            id: 2,
            name: "Гайды"
          }
      ]
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),

      //make sure to serialize your JSON body
      headers: {
        'YT-AUTH-TOKEN': 'YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

    // try {
    //   const response = await fetch(url, {
    //     method: 'POST', // или 'PUT'
    //     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    //     headers: {
    //       'YT-AUTH-TOKEN': 'YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226',
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const json = await response.json();
    //   console.log('Успех:', JSON.stringify(json));
    // } catch (error) {
    //   console.error('Ошибка:', error);
    // }

    // postData('http://localhost:8000/api/content/contents', {
    //     "message": "Content successfully created",
    //     "content": {
    //       "id": 22,
    //       "title": "Тестовая статья",
    //       "description": "Новая статья из API",
    //       "userId": 7,
    //       "publishedAt": "2021-07-08T06:53:16+0000",
    //       "modifiedAt": "2021-07-08T06:53:16+0000",
    //       "categories": [
    //         {
    //           "id": 1,
    //           "name": "Технологии"
    //         },
    //         {
    //           "id": 2,
    //           "name": "Гайды"
    //         }
    //       ]
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data); // JSON data parsed by `response.json()` call
    //   });
    const fetchItems = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'YT-AUTH-TOKEN': `YourTar ${token}`,
        'Content-Type': 'application/json'
      }),
    })
    const items = await fetchItems.json();
    console.log(items)
  }

  // console.log(props)

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