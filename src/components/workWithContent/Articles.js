import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import ArticleDetail from "./ArticleDetail";

const Articles = () => {

  const [itemsMas, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  const [articles, setArticles] = useState([
      {
        id: 1,
        title: 'First Article',
        description: 'Just description'
      },
      {
        id: 2,
        title: 'Second Article',
        description: 'Just description'
      },
      {
        id: 3,
        title: 'Third Article',
        description: 'Just description'
      },
    ]);

  const styleLink = {
    textDecoration: 'none',
    color: 'black',
  }

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
      <h1>Статьи</h1>
      {currentArticles.map(item => (
        <div className='mb-3 pl-3 border rounded'>
          {/*<h2 key={item.itemId}>*/}
          {/*  <Link to={`/content/articles/${item.itemId}`} style={styleLink}>{item.item.name}</Link>*/}
          {/*</h2>*/}
          <h2 key={item.id}>
            <Link to={`/content/articles/${item.id}`} style={styleLink}>{item.title}</Link>
          </h2>
        </div>
      ))}
      <Pagination articlesPerPage={articlesPerPage} totalArticles={itemsMas.length} paginate={paginate}/>
    </div>
  );
};

export default Articles;