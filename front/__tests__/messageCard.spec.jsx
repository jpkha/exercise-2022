// __tests__/headerApp.spec.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render, screen} from '@testing-library/react'
import * as nextRouter from 'next/router';
import {MessageCard} from '../components/Messages/MessageCard';
import {mockMessageEmail, mockMessagePhone, mockMessageSms} from '../__mocks__/mockMessage';
import 'moment/locale/fr';
import moment from 'moment';

describe('Message Card', () => {
    const push = jest.fn();
    moment.locale('fr');
    beforeEach(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({
            query: {realtorsId: '101'},
            push
        }));
    })

    it('should render correctly email/sms/phone', () => {
        const tree = render(<>
            <MessageCard message={mockMessageEmail}/>
            <MessageCard message={mockMessageSms}/>
            <MessageCard message={mockMessagePhone}/>
        </>)
        expect(tree).toMatchSnapshot();
    })

    it('should render a email message card', () => {
        render(
            <MessageCard message={mockMessageEmail}/>
        )
        const heading = screen.getByRole('heading', {
            name: `Charles Davis`
        })
        expect(heading).toBeInTheDocument();
        const logo = screen.getByRole('img', {
            name: `Icône Message lu`
        })
        expect(logo).toBeInTheDocument();
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/realtors/101/messages/${mockMessageEmail.id}`)
    })
    it('should render a unread sms message card', () => {
        render(
            <MessageCard message={{...mockMessageSms, read: false}}/>
        )
        const heading = screen.getByRole('heading', {
            name: `Charles Davis (06 69 58 15 08)`
        })
        expect(heading).toBeInTheDocument();
        const logo = screen.getByRole('img', {
            name: `Icône SMS non lu`
        })
        expect(logo).toBeInTheDocument();
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/realtors/101/messages/${mockMessageEmail.id}`)
    })
    it('should render a phone message card with unknown contact', () => {
        render(
            <MessageCard message={{
                ...mockMessagePhone,
                contact: {
                    ...mockMessagePhone.contact,
                    lastname: '',
                    firstname: ''
                }
            }}/>
        )
        const heading = screen.getByRole('heading', {
            name: `06 69 58 15 08`
        })
        expect(heading).toBeInTheDocument();
        const logo = screen.getByRole('img', {
            name: `Icône Message vocal lu`
        })
        expect(logo).toBeInTheDocument();
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/realtors/101/messages/${mockMessageEmail.id}`)
    })

    it('should render time like DD/MM/YYYY ', () => {
        const { container } = render(
            <MessageCard message={mockMessagePhone}/>
        )
        const time = container.querySelector('time');
        expect(time).toBeInTheDocument();
        expect(time.textContent).toBe('30/12/2021');
    })

    it('should render time like Hier ', () => {
        const { container } = render(
            <MessageCard message={{...mockMessagePhone,
            date: moment().subtract(1, 'days')}}/>
        )
        const time = container.querySelector('time');
        expect(time).toBeInTheDocument();
        expect(time.textContent).toBe('Hier');
    })

    it('should render time like hh:mm when is the same day and is over than 6 hours ', () => {
        const { container } = render(
            <MessageCard message={{...mockMessagePhone,
            date: moment().subtract(8, 'hours')}}/>
        )
        const regex = '^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'
        const time = container.querySelector('time');
        expect(time).toBeInTheDocument();
        expect(time.textContent.match(regex)).toBeTruthy();
    })

    it('should render time like il y a --- when is the same day and is less than 6 hours ', () => {
        const { container } = render(
            <MessageCard message={{...mockMessagePhone,
            date: moment().subtract(2, 'hours')}}/>
        )
        const time = container.querySelector('time');
        expect(time).toBeInTheDocument();
        expect(time.textContent).toBe('il y a 2 heures');
    })
})
