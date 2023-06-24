import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './new-recipe.css';

function New() {
    return (
        <div class="new-container">
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ingredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="Ingredients" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default New;