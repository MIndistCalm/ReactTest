import React from 'react';
import {Button, Form} from "react-bootstrap";

const EditContent = ({match}) => {

  const pathMap = match.url.split('/');
  let path = '';

  switch (pathMap[2]) {
    case 'articles':
      path = 'статьи';
      break;
    case 'quotes':
      path = 'цитаты';
      break;
  }
  console.log(pathMap, path)

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Изменить название {path}</Form.Label>
        <Form.Control type="text" placeholder="Изменить название" />
        <Form.Text className="text-muted">
          Изменить название {path}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Изменить описание</Form.Label>
        <Form.Control type="text" placeholder="Изменить описание" />
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

export default EditContent;