// __tests__/headerApp.spec.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import {HeaderApp} from '../components/header/HeaderApp';
import * as nextRouter from 'next/router';
import {mockRealtors} from '../__mocks__/mockRealtors';
import {RealtorsProvider} from '../context/realtors-context';

describe('HeaderApp', () => {
    const push = jest.fn();
    let tree;
    beforeEach(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({
            query: {realtorsId: '101'},
            push
        }));
        tree = render(
            <RealtorsProvider realtors={mockRealtors}>
                <HeaderApp/>
            </RealtorsProvider>
        )
    })
    it('renders correctly a heading', () => {
        expect(tree).toMatchSnapshot();
    })

    it('renders a heading', () => {
        const heading = screen.getByRole('heading', {
            name: 'Revenir à la messagerie',
        })
        expect(heading).toBeInTheDocument()
        const logo = screen.getByRole('img', {
            name: 'logo de Meilleurs agents',
        })
        expect(logo).toBeInTheDocument()
        const selectOption = screen.getByTestId('select-realtors');
        expect(selectOption).toBeInTheDocument()

    })

    it('onSelect agency, it should push a new route', () => {
        const selectOption = screen.getByTestId('select-realtors');
        expect(selectOption).toBeInTheDocument()
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(1 + mockRealtors.length);
        fireEvent.change(selectOption, {target: {value: 101}});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(push).toHaveBeenCalledWith('/realtors/101');

    })
})
