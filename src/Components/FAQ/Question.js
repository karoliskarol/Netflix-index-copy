import Accordion from 'react-bootstrap/Accordion';

const Question = ({ q, a, k }) => {
    return (
        <Accordion.Item eventKey={k}>
            <Accordion.Header>
                { q }
            </Accordion.Header>
            <Accordion.Body>
                { a }
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Question;