import React from 'react';
import {ButtonGroup, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const MainMenu = () => {

  const styleLink = {
    'width': '100%',
    'background-color': '#343a40',
    'color': 'white',
    'padding': '.375rem .75rem',
    'text-decoration': 'none',
    'border-radius': '.25rem',
    'margin-top': '.75rem'
  }

  return (
    <Container>
      <Col className="mt-3 text-center">
        <h1>Main Menu</h1>
        <ButtonGroup vertical>
          <Link to='/content' style={styleLink}>Работа с контентом</Link>
          <Link to='/chat' style={styleLink}>Тест чата</Link>
          <Link to='/crypto' style={styleLink}>Крипта</Link>
          <Link to='/comments' style={styleLink}>Комментарии</Link>
        </ButtonGroup>
      </Col>
    </Container>
  );
};

export default MainMenu;