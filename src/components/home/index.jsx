import Table from 'react-bootstrap/Table';
import './home.css';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className='home-container'>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button variant="primary">Edit</Button>{' '}
                            <Button variant="danger">Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <Button variant="primary">Edit</Button>{' '}
                            <Button variant="danger">Delete</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Home;