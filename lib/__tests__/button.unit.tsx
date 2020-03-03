import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

describe('button', () => {
    it('这是一个div', () => {
        const json = renderer.create(<Button/>).toJSON();
        expect(json).toMatchSnapshot();
    })
});
