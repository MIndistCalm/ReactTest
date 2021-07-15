import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import {Figure} from "react-bootstrap";
import CreateArticle from '../../static/plus-square.svg'

const Articles = () => {

  const [articlesMas, setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesMas.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteItem = async (id) => {
    await fetch('http://localhost:8000/api/content/contents/' + id, {
      method: 'DELETE',
      headers: {
        "YT-AUTH-TOKEN": "YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226",
        "Content-Type": "application/json",
      }
    })
      .then(res => res.text()) // or res.json()
      .then(res => console.log(res))
    getArticles()
  }

  const styleLink = 'text-decoration-none text-dark d-block col-11'

  //восстановить локал сторэдж
  // localStorage.setItem('Articles', JSON.stringify(articles));
  // localStorage.setItem('Categories', JSON.stringify(categories));

  useEffect(() => {
    getArticles()
    getArticles()
  }, [])

  const getArticles = async () => {
    await fetch(`http://localhost:8000/api/content/contents/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data.data);
      });
  }
  console.log(articlesMas)

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
            <button type="button" className="close col-1" aria-label="Close" onClick={() => {deleteItem(item.id)}}>
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