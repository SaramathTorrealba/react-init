import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardImage(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt={props.alt} src= {props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">{props.button} </Button>
      </Card.Body>
    </Card>
  );
}

export default CardImage;