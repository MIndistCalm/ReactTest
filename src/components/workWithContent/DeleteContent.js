import React from 'react';
import {Link} from "react-router-dom";
import {ButtonGroup} from "react-bootstrap";

const DeleteContent = ({match}) => {

  const styleLink = {
    width: '100%',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '.375rem .75rem',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '.25rem',
    marginLeft: '.75rem'
  }

  return (
    <div>
      <h1>Delete Content</h1>
      <h3>Уверены?</h3>
      <ButtonGroup horizontal>
        <Link to={``} style={styleLink}>Да</Link>
        <Link to={`/content/articles/${match.params.id}`} style={styleLink}>Нет</Link>
      </ButtonGroup>
    </div>
  );
};

export default DeleteContent;