import React from 'react';
import { render } from '@testing-library/react';
import Task from './Task';

describe('Task component', () => {
    test(`Given the required props,
    When the component is rendered,
    Then it should render the Task text`, () => {
            const exampleText = "This is a test task";

            const requiredProps = {
                tasks: [{
                    taskDescription: exampleText,
                    completed: false
                },]
            }

            const { getByText } = render(<Task {...requiredProps} />)
            expect(getByText(exampleText)).ToBeTruthy();
        })

    })



