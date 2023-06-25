import Table from 'react-bootstrap/Table';
import './home.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Home() {

    const [recipeData, setRecipeData]=useState([]);

       //get data from backend
       useEffect(()=>{
        axios.get("http://localhost:8000")
        .then((response)=>{
            setRecipeData(response.data);
        }).catch((err)=>{
            console.log("Can not get data ", err);
        })
    },[])

    //delete recipe
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/delete/${id}`).then((response)=>{
          
          alert(response.data);
          setRecipeData(recipeData.filter((recipe)=>recipe._id !==id));
  
        }).catch((error)=>{
          alert(error)
        })
  

  
    }
    return (
        <div className='home-container'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th >#</th>
                        <th >Recipe Name</th>
                        <th >Ingredients</th>
                        <th >Description</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {recipeData.map((recipe,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.ingredients}</td>
                            <td>{recipe.description}</td>
                            <td>
                                <Button variant="primary">Edit</Button>{' '}
                                <Button variant="danger" onClick={()=>handleDelete(recipe._id)}>Delete</Button>{' '}
                            </td>
                        </tr>
                    ))}
     
                </tbody>
            </Table>
        </div>
    )
}

export default Home;