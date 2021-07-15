import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const CategoryArticlesCreate = () => {
  const history = useHistory()

  const createCategoryOnClick = (event) => {
    event.preventDefault()
    const urlCategory = 'http://localhost:8000/api/content/categories/'
    const category = {
      "id": 1,
      "name": event.target[0].value
    }

    fetch(urlCategory, {
      method: "POST",
      body: JSON.stringify(category),
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