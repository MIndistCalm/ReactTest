import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import {Figure} from "react-bootstrap";
import CreateArticle from '../../static/plus-square.svg'
import {getItem, deleteItem} from "./Requests";

const Articles = () => {

  const [articlesMas, setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesMas.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const urlContent = `http://localhost:8000/api/content/contents/`
  const styleLink = 'text-decoration-none text-dark d-block col-11'

  const deleteItems = async (id) => {
    deleteItem(urlContent, id)
    upd()
  }

  useEffect(() => {
    upd()
    upd()
  }, [])

  function upd(){
    const item = getItem(urlContent)
    item.then((data) => {
      setArticle(data.data)
    })
  }

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
        <div key={item.id} className='mb-3 pl-3 pt-2 pr-3 pb-3 border rounded container'>
          <div className='row' >
            <Link to={{pathname: `/content/articles/${item.id}`, state: {item}}} className={styleLink}>
                <div className='font-weight-bold'>
                    {item.title}
                    <span className="ml-2 badge badge-dark">{item.category}</span>
                </div>
                <div className='text-black-50 text-monospace'>
                    {item.description.length < 100 ? item.description : item.description.substr(0, 98) + '...'}
                </div>
            </Link>
            <button type="button" className="close col-1" aria-label="Close" onClick={() => {deleteItems(item.id)}}>
                <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      ))}
      <Pagination articlesPerPage={articlesPerPage} totalArticles={articlesMas.length} paginate={paginate}/>
    </div>
  );
};

export default Articles;