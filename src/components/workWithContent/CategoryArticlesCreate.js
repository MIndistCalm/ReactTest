import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {postItem} from "./Requests";

const CategoryArticlesCreate = () => {
  const history = useHistory()

  const createCategoryOnClick = (event) => {
    event.preventDefault()
    const urlCategory = 'http://localhost:8000/api/content/categories/'
    const category = {
      "id": 1,
      "name": event.target[0].value
    }

    postItem(urlCategory, category)
    history.push(`/content/category/articles`)
  }

  return (
    <Form onSubmit={createCategoryOnClick}>
      <Form.Group controlId="formBasicCategory">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" placeholder="Название категории"/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Подтвердить
      </Button>
    </Form>
  );
};

export default CategoryArticlesCreate;