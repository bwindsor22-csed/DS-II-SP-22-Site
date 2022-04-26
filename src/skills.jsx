import {Badge} from "react-bootstrap";

export default () => {
    return <div style={{height: '320px'}}>
        <h3>Skills</h3>
        <h4>
            <Badge bg="secondary">Java</Badge>
            <Badge bg="secondary">JavaScript</Badge>
            <br />
            <Badge bg="secondary">SQL</Badge>
            <Badge bg="secondary">Python</Badge>
            <Badge bg="secondary">System Design</Badge>
        </h4>
    </div>
}
