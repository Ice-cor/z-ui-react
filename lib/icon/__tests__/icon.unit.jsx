import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';
import {mount} from 'enzyme';

describe('icon', () => {
    it('这是一个icon', () => {
        const json = renderer.create(<Icon name="info" />).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('onClick', () => {
        const component = mount(<Icon name="info" onClick={fn}/>)
        component.find()
    })
});
