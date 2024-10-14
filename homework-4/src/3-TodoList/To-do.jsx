import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
function ButtonAndInput() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [difultTask, setDifultTask] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDifultTask(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^\s*$/; //* I used AI for this regex :)
    if (!regex.test(task)) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="New task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={task}
            onChange={handleTaskChange}
          />
          <Button
            gap={3}
            className="primary w-25"
            variant="primary"
            id="button-addon2"
            type="submit"
          >
            Add
          </Button>
        </InputGroup>
      </Form>

      <ul>
        {/* {difultTask.map((task, index) => (
          <li key={index}>{task}</li>
        ))} */}
        {difultTask.map((obj) => {
          {
            console.log(obj);
          }
          <li key={obj.id + 100}>{obj.title}</li>;
        })}

        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default ButtonAndInput;
