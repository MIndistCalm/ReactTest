import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {getItem, putItem} from "./Requests";

const EditContent = (props) => {
  const history = useHistory()

  const [articleMas, setArticle] = useState([]);
  const [categoryMas, setCategories] = useState([]);

  const urlContent = `http://localhost:8000/api/content/contents/${props.match.params.id}`
  const urlCategory = `http://localhost:8000/api/content/categories/`

  const createArticleOnClick = (event) => {
    const data = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[2].value,
      "userId": 1,
      "categories": [parseInt(event.target[1].value)],
      "content": "asldfkjjsdlkj123"
    };
    putItem(urlContent, data)
    history.push(`/content/articles`)
  }

  useEffect(() => {
    const item = getItem(urlCategory)
    item.then((data) => {
      setCategories(data.data)
    })
    const item1 = getItem(urlContent)
    item1.then((data) => {
      setArticle(data)
    })
  }, [])

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" defaultValue={articleMas.title}/>
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
        <Form.Control as="textarea" defaultValue={articleMas.description}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default EditContent;