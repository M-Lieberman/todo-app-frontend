import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Task({ tasks }) {

    return (
        <Row >
            <Col md={6}>
                {tasks.taskDescription}
            </Col>
            <Col md={3}>
                {!tasks.completed &&
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
    );

    // return (
    //     tasks.map(task =>

    //         <Row >
    //             <Col md={6}>
    //                 {task.taskDescription}
    //             </Col>
    //             <Col md={3}>
    //                 {!task.completed &&
    //                     <Button type="button" variant="primary" >
    //                         DONE
    //                 </Button>
    //                 }
    //             </Col>
    //             <Col md={3}>
    //                 <Button type="button" variant="danger" >
    //                     DELETE
    //             </Button>
    //             </Col>
    //         </Row>
    //     )
    // );    
}

export default Task;