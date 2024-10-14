import "./App.css";
import ButtonAndInput from "./3-TodoList/To-do.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="mt-5">TODO_LIST</h1>
            <ButtonAndInput />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
