import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/actions/car";
import Protected from "../../components/Protected";


const CarsCard = ({ car }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            dispatch(deleteCar(id, navigate));
        }
    };

    return (
        <Col md={4} className="mb-4">
            <Card style={{ backgroundColor: "#EEF7FF" }}>
                <Card.Header style={{ backgroundColor: "#7AB2B2", color: "#EEF7FF" }}>{car?.name}</Card.Header>
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
                    <div className="row">
                        <div className="col-md-6">
                            <Link to={`/cars/${car?.id}`}>
                                <Button variant="primary">View Details</Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Protected roles={["admin", "superadmin"]}>
                                <Link to={`/cars/update/${car?.id}`}>
                                    <Button variant="warning">Update</Button>
                                </Link>
                                <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                            </Protected>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

CarsCard.propTypes = {
    car: PropTypes.object,
};

export default CarsCard;