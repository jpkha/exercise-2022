// __tests__/headerApp.spec.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render, screen} from '@testing-library/react'
import * as nextRouter from 'next/router';
import MessageListLayout from '../components/MessageList/MessageListLayout';
import {mockMessagesPage} from '../__mocks__/mockMessagesPage';
import {MessageCard} from '../components/Messages/MessageCard';
import {mockMessageEmail, mockMessagePhone, mockMessageSms} from '../__mocks__/mockMessage';

describe('MessageListLayout', () => {
    const push = jest.fn();
    beforeEach(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({
            query: {realtorsId: '101'},
            push
        }));
    })

    it('should render correctly a list of message', () => {
        const tree = render(<>
            <MessageListLayout messagesData={mockMessagesPage}/>
        </>)
        expect(tree).toMatchSnapshot();
    })
    it('should render a list of message', () => {
        render(
            <MessageListLayout messagesData={mockMessagesPage}/>
        )
        const messageList = screen.getByTestId('message-list-container');
        expect(messageList).toBeInTheDocument()
        const listItem = screen.getAllByRole('listitem');
        expect(listItem.length).toBe(10);
        expect(listItem[0]).toBeInTheDocument();
    })

})
