import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Task({ tasks }) {

    return (

        <Container>
            <Row>
                <Col>
                    Description: {tasks.taskDescription}
                    {/* {!task.completed &&
                        <Button type="button" className="primary" >
                            DONE
                    </Button>
                    } */}
                    column 1
                </Col>
                <Col>

                    {/* <Button type="button" className="danger" >
                        DELETE
                </Button> */}
                column 2
            </Col>
            </Row>
        </Container>

    );
}

export default Task;