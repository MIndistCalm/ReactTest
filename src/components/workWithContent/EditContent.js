import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {getItem, postItem, putItem} from "./Requests";

const EditContent = (props) => {
  const history = useHistory()

  const [articleMas, setArticle] = useState([]);
  const [categoryMas, setCategories] = useState([]);

  const urlContent = `http://localhost:8000/api/content/contents/`
  const urlContentId = `http://localhost:8000/api/content/contents/${props.match.params.id}`
  const urlCategory = `http://localhost:8000/api/content/categories/`

  let condition
  // if there is id in props then: true, else false
  condition = !!props.match.params.id;
  console.log(props.match.params.id)

  const createArticleOnClick = (event) => {
    event.preventDefault()
    const data = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[2].value,
      "userId": 1,
      "categories": [parseInt(event.target[1].value)],
      "content": "asldfkjjsd"
    };
    console.log(event.target[0].value, event.target[1].value, event.target[2].value)
    condition ? putItem(urlContentId, data) : postItem(urlContent, data)
    history.push(`/content/articles`)
  }

  useEffect(() => {
    const item = getItem(urlCategory)
    item.then((data) => {
      setCategories(data.data)
    })
    if (condition) {
      const item1 = getItem(urlContentId)
      item1.then((data) => {
        setArticle(data)
      })
    }
  }, [])

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" defaultValue={condition ? articleMas.title : null}/>
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
        <Form.Control as="textarea" defaultValue={condition ? articleMas.description: null}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default EditContent;