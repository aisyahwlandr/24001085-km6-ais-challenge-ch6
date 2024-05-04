import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/car";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { car } = useSelector((state) => state.car);

    useEffect(() => {
        // get car details by params id
        dispatch(getCar(navigate, id));
    }, [dispatch, id, navigate]);

    return (
        <Row>
            <Col md={6} className="offset-md-3 pb-5">
                <Card style={{ backgroundColor: "#EEF7FF" }}>
                    <Card.Header style={{ backgroundColor: "#7AB2B2", color: "#ffffff" }}>{car?.name}</Card.Header>
                    <Card.Body>
                        <Form>
                            {!car ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    {car?.photo && (
                                        <Image
                                            src={car?.photo}
                                            className="img-fluid"
                                            rounded
                                        />
                                    )}

                                    <div className={car?.photo && "mt-4"}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="rentperday"
                                        >
                                            <Form.Label>Rent per Day</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={`Rp ${car?.rentperday},-`}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="cartype_id"
                                        >
                                            <Form.Label>Car Type Id</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.cartype_id}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="cartype"
                                        >
                                            <Form.Label>Car Type</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.cartype?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Profile;