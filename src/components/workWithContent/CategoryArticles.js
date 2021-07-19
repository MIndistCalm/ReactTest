import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Figure} from "react-bootstrap";
import CreateArticle from "../../static/plus-square.svg";
import Pagination from "./Pagination";
import {getItem, deleteItem} from "./Requests";

const CategoryArticles = () => {

  const [categoryMas, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastCategory = currentPage * articlesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - articlesPerPage;
  const currentCategories = categoryMas.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const urlCategory = `http://localhost:8000/api/content/categories/`

  const deleteItems = async (id) => {
    deleteItem(urlCategory, id)
    update()
  }

  useEffect(() => {
    update()
    update()
  }, [])

  function update(){
    const item = getItem(urlCategory)
    item.then((data) => {
      setCategories(data.data)
    })
  }

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
            <button type="button" className="close col-1" aria-label="Close" onClick={() => {deleteItems(item.id)}}>
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