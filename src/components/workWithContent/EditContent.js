import React from 'react';
import {Button, Form} from "react-bootstrap";

const EditContent = () => {

  return (
    <Form >
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" placeholder="Заголовок статьи"/>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect">
        <Form.Label>Выбрать категорию</Form.Label>
        <Form.Control as="select">
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Добавить описание</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default EditContent;