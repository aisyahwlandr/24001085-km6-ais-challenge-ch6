import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarsCard = ({ car }) => {
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Header>{car?.name}</Card.Header>
                <Card.Body>
                    {car?.photo && (
                        <Image
                            src={car?.photo}
                            className="img-fluid"
                            rounded
                        />
                    )}

                    <div className={car?.photo && "mt-4"}>
                        <h5>{car?.name}</h5>
                        <h6>Type: {car?.cartype?.name}</h6>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/cars/${car?.id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

CarsCard.propTypes = {
    car: PropTypes.object,
};

export default CarsCard;