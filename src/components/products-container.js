import './products-container.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductsContainer = () => {
    return (
      <div class="cards-container">
            <Card style={{ width: '18rem', backgroundColor: 'red' }}>
                <Card.Body>
                    <Card.Title>Item id: 5</Card.Title>
                    <Card.Text>
                        Name: something
                    </Card.Text>
                    <Card.Text>
                        year: 2006
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor: 'yellow' }}>
                <Card.Body>
                    <Card.Title>Item id: 5</Card.Title>
                    <Card.Text>
                        Name: something
                    </Card.Text>
                    <Card.Text>
                        year: 2006
                    </Card.Text>
                </Card.Body>
            </Card>
      </div>
    );
}