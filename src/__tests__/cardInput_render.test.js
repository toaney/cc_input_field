// cardInput.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardInput from '../cardInput';

describe('basic CardInput component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render a placeholder', () => {
        // const placeholder_text = "1234 1234 1234 1234";
        const wrapper = shallow(<CardInput />);
        // const input = wrapper.find('input')
        expect(wrapper.find('.card-input').at(0).props().placeholder).toEqual("1234 1234 1234 1234");
    });
});
