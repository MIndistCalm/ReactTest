import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./Pagination";
import {Figure} from "react-bootstrap";
import CreateArticle from '../../static/plus-square.svg'

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
        title: 'Кастрация кота',
        description:
          'Кастрация кота – это искусственное прекращение функции половых желёз, ' +
          'чаще всего при этой операции удаляют оба семенника.\n ' +
          'Во многих странах эта операция является обязательной для неплеменных животных, ' +
          'так называемого, пет-класса (домашних любимцев).\n',
        category: 'Cat'
      },
      {
        id: 2,
        title: 'Летний уход за бесшерстной собакой',
        description:
          'Чем больше у собаки открыта кожа, тем опаснее ей находиться на солнце. ' +
          'Даже краткосрочное пребывание под прямыми солнечными лучами может спровоцировать сильные ожоги. ' +
          'Другие, не такие опасные, но неприятные последствия – это дерматит, сухость, перхоть.',
        category: 'Dog'
      },
      {
        id: 3,
        title: 'Статья про туман',
        description: 'Эх... туман',
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