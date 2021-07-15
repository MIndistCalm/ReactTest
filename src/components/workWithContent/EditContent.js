import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const EditContent = (props) => {
  const history = useHistory()

  const [articleMas, setArticle] = useState([]);
  const [categoryMas, setCategories] = useState([]);

  const url = `http://localhost:8000/api/content/contents/${props.match.params.id}`
  //Вместо этого будут get запросы
  // const articlesMas = JSON.parse(localStorage.getItem('Articles'));
  // const categoriesMas = JSON.parse(localStorage.getItem('Categories'));

  //функция подстановки нужного параметра в форму
  // const checkDefaultValue = (parametr) => {
  //   let n;
  //   articlesMas.map(item => {
  //     if (item.id == props.match.params.id){
  //       n = item[parametr]
  //     }
  //   })
  //   return n;
  // }

  // console.log(articlesMas, props.match.params.id)

  const putItem = async (data) => {
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      //make sure to serialize your JSON body
      headers: {
        "YT-AUTH-TOKEN": "YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      response.json()
    })
    .then(body => {
    });
  }

  const createArticleOnClick = (event) => {
    const data = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[2].value,
      "userId": 1,
      "categories": [parseInt(event.target[1].value)],
      "content": "asldfkjjsdlkj123"
    };
    putItem(data)
    history.push(`/content/articles`)
  }

  useEffect((url) => {
    const getArticles = async () => {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setArticle(data);
        });
    }

    const getCategories = async () => {
      await fetch(`http://localhost:8000/api/content/categories/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCategories(data.data);
        });
    }

    getArticles()
    getCategories()
  }, [])





  console.log(articleMas, categoryMas)

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