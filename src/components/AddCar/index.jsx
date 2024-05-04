import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCar } from "../../redux/actions/car";

function AddCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState();
    const [rentperday, setRentperday] = useState("");
    const [cartype_id, setCartype_id] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the addCar action
        dispatch(
            addCar(navigate, name, photo, rentperday, cartype_id,  setIsLoading)
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="photo" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentperday">
                <Form.Label>Rent per Day *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter rentperday"
                    value={rentperday}
                    onChange={(e) => setRentperday(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cartype_id">
                <Form.Label>cartype_id *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="cartype_id"
                    value={cartype_id}
                    onChange={(e) => setCartype_id(e.target.value)}
                    required
                />
            </Form.Group>

            

            <Button variant="success" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Add"}
            </Button>
        </Form>
    );
}

export default AddCar;