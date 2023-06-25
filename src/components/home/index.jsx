import Table from "react-bootstrap/Table";
import "./home.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [recipeData, setRecipeData] = useState([]);
  const [show, setShow] = useState(false);
  const [del, setDel] = useState();

  //get data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((response) => {
        setRecipeData(response.data);
      })
      .catch((err) => {
        console.log("Can not get data ", err);
      });
  }, []);

  //delete recipe
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((response) => {
        alert(response.data);
        setRecipeData(recipeData.filter((recipe) => recipe._id !== id));
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="home-container">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Recipe Name</th>
            <th>Ingredients</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeData.map((recipe, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.description}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate(`edit/${recipe._id}`);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    setShow(true);
                    setDel(recipe._id);
                  }}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              handleDelete(del);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
