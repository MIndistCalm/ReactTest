import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {getItem, postItem, putItem} from "./Requests";

const EditContent = (props) => {
  const history = useHistory()

  const [articleMas, setArticle] = useState({
    categories: ['Loading']
  });
  const [categoryMas, setCategories] = useState([]);

  const urlContent = `http://localhost:8000/api/content/contents/`
  const urlContentId = `http://localhost:8000/api/content/contents/${props.match.params.id}`
  const urlCategory = `http://localhost:8000/api/content/categories/`

  let condition
  // if there is id in props then: true, else false
  condition = !!props.match.params.id;

  const createArticleOnClick = (event) => {
    event.preventDefault()
    const selectCategory = categoryMas.filter(item => item.select).map(item => {
      return item.id
    });
    const data = {
      "id": 1,
      "title": event.target[0].value,
      "description": event.target[event.target.length - 2].value,
      "userId": 1,
      "categories": selectCategory,
      "content": "asldfkjjsd"
    };

    condition ? putItem(urlContentId, data) : postItem(urlContent, data)
    history.push(`/content/articles`)
  }

  useEffect(() => {
    if (condition){
      const item1 = getItem(urlContentId)
      item1.then((data) => {
        console.log(data)
        setArticle(data)
      })
    }
  }, [])

  useEffect(() => {
    if (condition) {
      let mas = []
      articleMas.categories.map(item => mas.push(item.id))
      const item = getItem(urlCategory)

      item.then((data) => {
        setCategories(
          data.data.map(category => {
            mas.forEach(element => {
              if (category.id === element) category.select = true
            })
            return {
              select: !!category.select,
              id: category.id,
              name: category.name
            }
          })
        )
      })
    } else {
      const item = getItem(urlCategory)
      item.then((data) => {
        setCategories(
          data.data.map(item => {
            return {
              select: false,
              id: item.id,
              name: item.name
            }
          })
        )
      })
    }
  }, [articleMas])

  return (
    <Form onSubmit={createArticleOnClick}>
      <Form.Group controlId="formBasicArticle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control type="text" defaultValue={condition ? articleMas.title : null}/>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect">
        <Form.Label>Выбрать категорию</Form.Label>
        {categoryMas.map(item => (
          <Form.Check key={item.id} type='checkbox' label={item.name}
                      checked={item.select}
                      onChange={event => {
                        let checked = event.target.checked
                        setCategories(
                          categoryMas.map(data => {
                            if (item.id === data.id) data.select = checked
                            return data
                          })
                        )
                      }}
          />
        ))}
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Добавить описание</Form.Label>
        <Form.Control as="textarea" defaultValue={condition ? articleMas.description: null}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
};

export default EditContent;