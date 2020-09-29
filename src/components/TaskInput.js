import React from 'react';
 import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Button from 'react-bootstrap/Button';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles(() => ({
//     taskInputArea: {
//       paddingTop: 20
//     },
//     column: {
//         textAlign: "center"
//     }
// }));

function TaskInput() {
    return (

<Form>
  <Form.Group controlId="formTaskInput">
    <Form.Label>Task</Form.Label>
    <Form.Control type="text" placeholder="e.g. Empty the dishwasher" />
  </Form.Group>
</Form>


        // <Form>
        //     <Form.group controlId="taskItem">
        //         <Form.label>Your task</Form.label>
        //         <Form.Control plaintext placeholder="Fetch the milk"></Form.Control>
        //     </Form.group>
        // </Form>
    );
}

// function TaskInput() {
//     // const classes = useStyles();
//     return (
//         <Grid className={classes.taskInputArea} container spacing={3} justify="center" alignItems="center">
//             <Grid item xs={12} md={6} className={classes.column}>
//                 <TextField required label="Your task" fullWidth />
//             </Grid>
//             <Grid item xs={12} md={3} className={classes.column}>
//                 <Button variant="contained" color="primary" >
//                     ADD
//                 </Button>
//             </Grid>
//         </Grid>
//     );
// }

export default TaskInput;