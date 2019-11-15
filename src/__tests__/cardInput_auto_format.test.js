// cardInput_auto_format.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardInput from '../cardInput';
import axios from 'axios';

jest.mock('axios');

describe('basic CardInput component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should format the input value after entering visa number', () => {
        const newValue1 = "4222222222222222";
        const expectedValue1 = "4222 2222 2222 2222"
        const wrapper = shallow(<CardInput />);
        const input = wrapper.find('.card-input').at(0);

        input.simulate('change', { target: { value: newValue1 }});

        expect(wrapper.find('.card-input').at(0).props().value).toEqual(expectedValue1);
    });
    // test for amex input formatting requires api call
    // it('should format the input value after entering amex number', () => {
    //     const newValue2 = "378282246310005";
    //     const expectedValue2 = "3782 82246 310005"
    //     const wrapper = mount(<CardInput />);
    //     const input = wrapper.find('.card-input').at(0);

    //     input.simulate('change', { target: { value: newValue2 }});

    //     expect(wrapper.find('.card-input').at(0).props().value).toEqual(expectedValue2);
    // });
});
