import UpdateCarComponent from "../../components/UpdateCar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const UpdateCar = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
            <Card style={{ backgroundColor: "#EEF7FF" }}>
                <Card.Header className="text-center fw-bold h4"
                style={{ backgroundColor: "#7AB2B2", color: "#EEF7FF" }}>Update Car</Card.Header>
                    <Card.Body>
                        <UpdateCarComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UpdateCar;