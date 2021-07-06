import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import ArticleDetail from "./ArticleDetail";

const Articles = () => {

  const [itemsMas, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  const deleteItem = (id) => {
        setItems(itemsMas.filter(article => article.id !== id))
    }

  const articles = [
      {
        id: 1,
        title: 'First Article',
        description: 'Just description',
        category: 'Cat'
      },
      {
        id: 2,
        title: 'Second Article',
        description: 'Just description',
        category: 'Dog'
      },
      {
        id: 3,
        title: 'Third Article',
        description: 'Just description',
        category: 'Fog'
      }
    ];


  const styleLink = 'text-decoration-none text-dark d-block col-11'

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    // const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    // const items = await data.json();
    // console.log(items.data)
    // setItems(items.data);
    setItems(articles);
  };

  //get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = itemsMas.slice(indexOfFirstArticle, indexOfLastArticle);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='font-weight-bold'>Статьи</div>
      {currentArticles.map(item => (
        <div className='mb-3 pl-3 pt-2 pr-3 pb-3 border rounded container'>
        {/*//   <h2 key={item.itemId}>*/}
        {/*//     <Link to={`/content/articles/${item.itemId}`} style={styleLink}>{item.item.name}</Link>*/}
        {/*  // </h2>*/}
          <div key={item.id} className='row' >
            <Link to={`/content/articles/${item.id}`} className={styleLink}>
                <div className='font-weight-bold'>
                    {item.title}
                    <span className="ml-2 badge badge-dark">{item.category}</span>
                </div>
                <div className=''>
                    {item.description}
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