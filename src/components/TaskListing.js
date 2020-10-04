import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
    
import Task from './task/Task';

function TaskListing({ taskData }) {

    const incompleteTasks = taskData.filter((task) => task.completed === false);
    const completedTasks = taskData.filter((task) => task.completed === true);

    return (
        <Container>
            <Row>
                <Col >
                    <h5>Incomplete Tasks</h5>
                    {incompleteTasks.map((task) =>
                        <Task tasks={task} />
                    )}
                </Col>
                <Col>
                    <h5>Completed Tasks</h5>
                    {completedTasks.map((task) =>
                        <Task tasks={task} />
                    )}

                </Col>
            </Row>
        </Container>
    );
}

export default TaskListing;