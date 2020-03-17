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
        const fn = jest.fn();
        const component = mount(<Icon name="info" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    })
    it('测试错误',  () => {
        const n = 1;
        expect(n).toEqual(2);
    });
});
