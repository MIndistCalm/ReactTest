import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";


const CreateContent = () => {
  const history = useHistory()

  const createArticleOnClick = (event) => {
    // ВМЕСТО ЛОКАЛ СТОРЭДЖ НАДО ЗАПРОСЫ НА СЕРВ ОТПРАВЛЯТЬ
    event.preventDefault()
    const mas = JSON.parse(localStorage.getItem('Articles'));
    let mas1 = {
      id: mas[mas.length - 1].id + 1,
      title: event.target[0].value,
      category: event.target[1].value,
      description: event.target[2].value,
    }
    mas.push(mas1)
    localStorage.setItem('Articles', JSON.stringify(mas))
    history.push(`/content/articles`)
  }

  // вместо этого нужно делать get запрос на сервер
  const masCategories = JSON.parse(localStorage.getItem('Categories'));


  // const goArticles = () => {
  //   window.location.assign('.');
  // }

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" placeholder="Заголовок статьи"/>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect">
        <Form.Label>Выбрать категорию</Form.Label>
        <Form.Control as="select">
          {masCategories.map(item => (
            <option>{item.title}</option>
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