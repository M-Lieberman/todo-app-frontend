import React from 'react';
import { render } from '@testing-library/react';
import Task from './Task';

describe('Task component', () => {

    test(`Given the required props,
    When the component is rendered,
    Then it should render the Task text`, () => {
            const exampleText = "This is a test task";

            const requiredProps = {
                tasks: {
                    taskDescription: exampleText,
                    completed: false
                }
            }

            const { getByText } = render(<Task {...requiredProps} />);
            expect(getByText(exampleText)).toBeTruthy();
        })

    test(`Given the required props,
    When the component is rendered,
    Then it should not render a delete button`, () => {
        const requiredProps = {
            tasks: {
                taskDescription: "This is a test task",
                completed: true
            }
        }
        const { getAllByRole }  = render(<Task {...requiredProps} />);
    expect(getAllByRole('button').find(button => button.textContent === 'DELETE')).toBeTruthy();
    })

    test(`Given the required props,
    When the component is rendered,
    Then it should render a Done button`, () => {
        const requiredProps = {
            tasks: {
                taskDescription: "This is a test task",
                completed: false
            }
        }
        const { getAllByRole }  = render(<Task {...requiredProps} />);
    expect(getAllByRole('button').find(button => button.textContent === 'DONE')).toBeTruthy();
    })

    test(`Given the required props,
    When the component is rendered,
    Then it should not render a Done button`, () => {
        const requiredProps = {
            tasksq: {
                taskDescription: "This is a test task",
                completed: true
            }
        }
        const {getAllByRole} = render(<Task {...requiredProps} />);
        expect(getAllByRole('button').find(button => button.textContent === 'DONE')).toBeFalsy();

    })

    })



