import React from 'react';
import {Link} from "react-router-dom";
import {ButtonGroup, Button} from "react-bootstrap";

const DeleteContent = ({match}) => {

    const styleLink = 'w-100 bg-dark text-decoration-none text-white pl-4 pr-4 pt-1 pb-1 rounded m-2'
    const styleLinkWarning = 'w-100 bg-danger text-decoration-none text-white pl-4 pr-4 pt-1 pb-1 rounded m-2'
  return (
    <div>
      <div>Delete Content</div>
      <div>Уверены?</div>
      <ButtonGroup horizontal>
          <Button>
              <Link to={``} className={styleLink}>Да</Link>
          </Button>
        <Link to={`/content/articles/${match.params.id}`} className={styleLinkWarning}>Нет</Link>
      </ButtonGroup>
    </div>
  );
};

export default DeleteContent;