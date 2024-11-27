import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src="https://placehold.co/286x180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary" className='w-100'>Buy Now</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;