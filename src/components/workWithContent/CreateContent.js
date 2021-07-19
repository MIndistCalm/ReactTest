import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {getItem, postItem} from "./Requests";

const CreateContent = (props) => {
  const history = useHistory()
  const [categoryMas, setCategories] = useState([]);
  const urlContent = `http://localhost:8000/api/content/contents/`
  const urlCategory = `http://localhost:8000/api/content/categories/`

  const createArticleOnClick = (event) => {
    event.preventDefault()
    const article = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[2].value,
      "userId": 1,
      "categories": [parseInt(event.target[1].value)],
      "content": "asldfkjjsdlkj123"
    }

    postItem(urlContent, article)
    history.push(`/content/articles`)
  }

  useEffect(() => {
    const item = getItem(urlCategory)
    item.then((data) => {
      setCategories(data.data)
    })
  }, [])

  let condition
  console.log(props.match.params)
  if (props.match.params.length === 0) {
    condition = true
  } else {
    condition = false
  }
  console.log(condition)
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