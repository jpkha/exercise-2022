// __tests__/headerApp.spec.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import {deleteDuplicateMessage} from '../utils/deleteDuplicateMessages';
import {mockMessagesPage} from '../__mocks__/mockMessagesPage';
import {replaceMessageForANewOne} from '../utils/replaceMessageForANewOne';


describe('utils', () => {
    it('should delete duplicate object', () => {
        const duplicateArray = [...mockMessagesPage, ...mockMessagesPage];
        expect(duplicateArray.length).toEqual(20);
        const newArray = deleteDuplicateMessage([...mockMessagesPage, ...mockMessagesPage]);
        expect(newArray.length).toEqual(10);
    })

    it('should change object', () => {
        const newSubject = 'test new subject';
        const newMesssage = {
            ...mockMessagesPage[0],
            subject: newSubject
        }
        expect(mockMessagesPage.length).toEqual(10);
        const newArrayWithNewMessage = replaceMessageForANewOne(mockMessagesPage, newMesssage);
        expect(newArrayWithNewMessage.length).toEqual(10);
        expect(newArrayWithNewMessage.find(message => message.subject === newMesssage.subject)).toEqual(newMesssage);
    })
})
