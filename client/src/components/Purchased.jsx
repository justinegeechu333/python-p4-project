import { useNavigate, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import * as confetti from "confettis";
import { useEffect } from "react";

const Purchased = () => {
    const { confirmationId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        confetti.create();
    }, []);
    return (
        <div>
            <h2>Purchased Successfully!</h2>
            <h3>Confirmation Id: {confirmationId}</h3>
            <Button
                data-test="test"
                onClick={() => {
                    navigate("/");
                }}
            >
                Go back Home
            </Button>
        </div>
    );
};

export default Purchased;
