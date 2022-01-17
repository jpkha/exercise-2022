// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import {HeaderApp} from '../components/header/HeaderApp';
import * as nextRouter from 'next/router';
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
    query: {realtorsId: '101'}
}));

describe('HeaderApp', () => {
    it('renders a heading', () => {

        render(<HeaderApp/>)
        const heading = screen.getByRole('heading', {
            name: "Revenir à la messagerie",
        })
        expect(heading).toBeInTheDocument()

        const logo = screen.getByRole('img', {
            name: "logo de Meilleurs agents",
        })
        expect(logo).toBeInTheDocument()

        const combobox = screen.getByRole('combobox', {
            name: "Choississez une agence:",
        })
        expect(combobox).toBeInTheDocument()
    })
})
