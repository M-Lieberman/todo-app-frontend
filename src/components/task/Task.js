import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

function Task({ tasks }) {

    return (

        tasks.map(task =>

            <Row >
                <Col md={6}>
                    {task.taskDescription}
                </Col>
                <Col md={3}>
                    {!task.completed &&
                        <Button type="button" variant="primary" >
                            DONE
                    </Button>
                    }
                </Col>
                <Col md={3}>
                    <Button type="button" variant="danger" >
                        DELETE
                </Button>
                </Col>
            </Row>
        )
    );
}

export default Task;