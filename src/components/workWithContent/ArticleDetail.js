import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const ArticleDetail = ({match}) => {

  const styleImages = {
    'width': '400px',
  }

  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch( `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const items = await fetchItem.json();
    setItem(items.data.item);
    console.log(items);
  }

  return (
    <div>
      <h2>Item {item.name}</h2>
      <img src={item.images.background} alt="" style={styleImages}/>
    </div>
  );
}

export default ArticleDetail;