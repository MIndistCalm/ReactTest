import React from 'react';
import {Button, Form} from "react-bootstrap";

const CreateContent = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Создать статью</Form.Label>
        <Form.Control type="text" placeholder="Создать статью" />
        <Form.Text className="text-muted">
          Создать статью
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Добавить описание</Form.Label>
        <Form.Control type="text" placeholder="Добавить описание" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Подтвердить" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default CreateContent;