import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdDeleteForever  } from "react-icons/md";


function Task({priority , idx , title, onDelete}) {

    const checkPriority = (priority) => {
        switch (priority) {
          case 'High':
            return 'danger';
          case 'Medium':
            return 'warning';
          case 'Low':
            return 'success';
          default:
            return 'secondary';
        }
    }
  
    return (
    <Card
          bg= {checkPriority(priority)}
          text = "white"
          style={{ width: '18rem' }}
          className="m-2"
        >
          <Card.Header>Task {idx}</Card.Header>
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <MdDeleteForever  onClick = {onDelete} style={{"width" :"24px" , "height" :"24px", cursor : "pointer"}}/>
          </Card.Body>
        </Card>
  )
}

export default Task