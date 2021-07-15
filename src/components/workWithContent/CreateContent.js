import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const CreateContent = () => {
  const history = useHistory()
  const [categoryMas, setCategories] = useState([]);

  const createArticleOnClick = (event) => {
    event.preventDefault()
    console.log(event.target[0].value, parseInt(event.target[1].value), event.target[2].value)
    const urlArticle = 'http://localhost:8000/api/content/contents/'
    const article = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[2].value,
      "userId": 1,
      "categories": [parseInt(event.target[1].value)],
      "content": "asldfkjjsdlkj123"
    }

    fetch(urlArticle, {
      method: "POST",
      body: JSON.stringify(article),
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
    history.push(`/content/articles`)
  }

  // вместо этого нужно делать get запрос на сервер
  // const masCategories = JSON.parse(localStorage.getItem('Categories'));

  const getCategories = async () => {
    await fetch(`http://localhost:8000/api/content/categories/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" placeholder="Заголовок статьи"/>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect">
        <Form.Label>Выбрать категорию</Form.Label>
        <Form.Control as="select">
          {categoryMas.map(item => (
            <option key={item.id}>{item.id} {item.name}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Добавить описание</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Подтвердить
      </Button>

    </Form>
  );
};

export default CreateContent;