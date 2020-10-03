import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Task({ tasks }) {

    return (

        tasks.map(task =>
            <Row>
                <Col>
                    Description: {task.taskDescription}
                </Col>
                <Col>
                    {!task.completed &&
                        <Button type="button" className="primary" >
                            DONE
                    </Button>
                    }
                    <Button type="button" className="danger" >
                        DELETE
                </Button>
                </Col>
            </Row>

        )


    );
}

export default Task;