import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import {Figure} from "react-bootstrap";
import CreateArticle from '../../static/plus-square.svg'
import {articles} from '../../store/ArticleStore'
import {categories} from '../../store/CategoryStore'

const Articles = () => {

  const [itemsMas, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);

  const deleteItem = (id) => {
    const mas = JSON.parse(localStorage.getItem('Articles'));
    delete mas[id - 1];
    localStorage.setItem('Articles', JSON.stringify(mas.filter(item => !!item)));
    setItems(JSON.parse(localStorage.getItem('Articles')))
  }

  const styleLink = 'text-decoration-none text-dark d-block col-11'

  //восстановить локал сторэдж
  // localStorage.setItem('Articles', JSON.stringify(articles));
  // localStorage.setItem('Categories', JSON.stringify(categories));

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('Articles')))
  }, [])

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = itemsMas.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='d-flex font-weight-bold h3'>
        <div className='flex-grow-1'>
          Статьи
        </div>
        <Link to={`/content/articles/create`}>
          <Figure>
            <Figure.Image src={CreateArticle} width={35}/>
          </Figure>
        </Link>
      </div>
      {currentArticles.map(item => (
        <div className='mb-3 pl-3 pt-2 pr-3 pb-3 border rounded container'>
          <div key={item.id} className='row' >
            <Link to={{pathname: `/content/articles/${item.id}`, state: {item}}} className={styleLink}>
                <div className='font-weight-bold'>
                    {item.title}
                    <span className="ml-2 badge badge-dark">{item.category}</span>
                </div>
                <div className='text-black-50 text-monospace'>
                    {item.description.length < 100 ? item.description : item.description.substr(0, 98) + '...'}
                </div>
            </Link>
            <button type="button" className="close col-1" aria-label="Close" onClick={() => {deleteItem(item.id)}}>
                <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      ))}
      <Pagination articlesPerPage={articlesPerPage} totalArticles={itemsMas.length} paginate={paginate}/>
    </div>
  );
};

export default Articles;