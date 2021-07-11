import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const EditContent = (props) => {
  const history = useHistory()

  //Вместо этого будут get запросы
  const articlesMas = JSON.parse(localStorage.getItem('Articles'));
  const categoriesMas = JSON.parse(localStorage.getItem('Categories'));

  //функция подстановки нужного параметра в форму
  const checkDefaultValue = (parametr) => {
    let n;
    articlesMas.map(item => {
      if (item.id == props.match.params.id){
        n = item[parametr]
      }
    })
    return n;
  }

  console.log(articlesMas, props.match.params.id)

  const createArticleOnClick = (event) => {
    // ВМЕСТО ЛОКАЛ СТОРЭДЖ НАДО ЗАПРОСЫ НА СЕРВ ОТПРАВЛЯТЬ
    event.preventDefault()
    let mas1 = {
      id: parseInt(props.match.params.id),
      title: event.target[0].value,
      category: event.target[1].value,
      description: event.target[2].value,
    }
    delete articlesMas[parseInt(props.match.params.id)];
    articlesMas.splice(mas1.id - 1, 0, mas1)
    console.log(articlesMas)
    // localStorage.setItem('Articles', JSON.stringify(articlesMas))
    history.push(`/content/articles`)
  }

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" defaultValue={checkDefaultValue('title')}/>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect">
        <Form.Label>Выбрать категорию</Form.Label>
        <Form.Control as="select" defaultValue={checkDefaultValue('category')}>
          {categoriesMas.map(item => (
            <option>{item.title}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Добавить описание</Form.Label>
        <Form.Control as="textarea" defaultValue={checkDefaultValue('description')}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default EditContent;