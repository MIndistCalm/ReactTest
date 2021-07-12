import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Figure} from "react-bootstrap";
import CreateArticle from "../../static/plus-square.svg";
import Pagination from "./Pagination";

const CategoryArticles = () => {

  const [categoryMas, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);

  const indexOfLastCategory = currentPage * articlesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - articlesPerPage;
  const currentCategories = categoryMas.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteItem = async (id) => {
    await fetch('http://localhost:8000/api/content/categories/' + id, {
      method: 'DELETE',
      headers: {
        "YT-AUTH-TOKEN": "YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226",
        "Content-Type": "application/json",
      }
    })
      .then(res => res.text()) // or res.json()
      .then(res => console.log(res))
    getCategories()
  }

  useEffect(() => {
    getCategories()
  }, [])


  const getCategories = async () => {
    await fetch(`http://localhost:8000/api/content/categories/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  }
  console.log(categoryMas)

  return (
    <div>
      <div className='d-flex font-weight-bold h3'>
        <div className='flex-grow-1'>
          Категории статей
        </div>
        <Link to={`/content/category/articles/create`}>
          <Figure>
            <Figure.Image src={CreateArticle} width={35}/>
          </Figure>
        </Link>
      </div>
      {currentCategories.map(item => (
        <div key={item.id} className='mb-3 pl-3 pt-2 pr-3 pb-3 border rounded container'>
          <div className='row '>
            <div className='font-weight-bold text-decoration-none text-dark d-block col-11'>
              {item.name}
            </div>
            <button type="button" className="close col-1" aria-label="Close" onClick={() => {deleteItem(item.id)}}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      ))}
      <Pagination articlesPerPage={articlesPerPage} totalArticles={categoryMas.length} paginate={paginate}/>
    </div>
  );
};

export default CategoryArticles;