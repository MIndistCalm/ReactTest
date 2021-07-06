import React from 'react';
import {ButtonGroup, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const MainMenu = () => {

  const styleLink = 'w-100 bg-dark text-decoration-none text-white p-2 rounded mt-2'

  return (
    <Container>
      <Col className="mt-3 text-center">
        <h1>Main Menu</h1>
        <ButtonGroup vertical>
          <Link to='/content' className={styleLink}>Работа с контентом</Link>
          <Link to='/chat' className={styleLink}>Тест чата</Link>
          <Link to='/crypto' className={styleLink}>Крипта</Link>
          <Link to='/comments' className={styleLink}>Комментарии</Link>
        </ButtonGroup>
      </Col>
    </Container>
  );
};

export default MainMenu;