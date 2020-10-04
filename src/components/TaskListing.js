import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Task from './task/Task';

function TaskListing({ taskData }) {

    const incompleteTasks = taskData.filter((task) => task.completed === false);
    const completedTasks = taskData.filter((task) => task.completed === true);

    return (
        <Container>
            <Row>
                <Col >
                <h5>Incomplete Tasks</h5>
                    <Task tasks={incompleteTasks} />
                </Col>
                <Col>
                <h5>Completed Tasks</h5>
                    <Task tasks={completedTasks} />
                </Col>
            </Row>
        </Container>
    );
}


// function TaskListing({taskData}) {

//     const incompleteTasks = taskData.filter((task) => task.completed === false);
//     const completedTasks = taskData.filter((task) => task.completed === true);

//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//                 <Typography variant="h6">Tasks to do:</Typography>
//                 {incompleteTasks.map((task) =>
//                     <Task task={task} />
//                 )}
//             </Grid>
//             <Grid item xs={12} md={6}>
//                 <Typography variant="h6">Complete tasks:</Typography>
//                 {completedTasks.map((task) => 
//                         <Task task={task} />
//                 )}
//             </Grid>
//         </Grid>
//     );
// }

export default TaskListing;