import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Input } from './Input';

const input = {
    protocol: 'FTP',
    format: 'CSV',
    url: 'ftp://datadrop.com/file.csv',
    parameters: '{a: "1", b: 2}',
    mapping: '{value: "wind_speed"}',
    state: 'active',
    checkEvery: 1,
    isActive: 'true'
};

describe('Testing Input component', function() {

    it('it should check stack of props', function() {
        const wrapper = mount(<Input input={input} />);
        expect(wrapper.props().input).toBe(input);
    });

    it('it should render without throwing an error', function() {
        const wrapper = shallow(<Input input={input} />);
        expect(wrapper.contains(
            <tr>
                <td>{input.protocol}</td>
                <td>{input.format}</td>
                <td>{input.url}</td>
                <td>{input.parameters}</td>
                <td>{input.mapping}</td>
                <td>{input.state}</td>
                <td>{input.checkEvery}</td>
                <td>{input.isActive}</td>
            </tr>
        )).toBe(true);
    });

    it('it should check values from props', function() {
        const wrapper = render(<Input input={input} />);
        expect(wrapper.find('tr>td:first-child').text()).toBe('FTP');
        expect(wrapper.find('tr>td:nth-child(2)').text()).toBe('CSV');
        expect(wrapper.find('tr>td:nth-child(3)').text()).toBe('ftp://datadrop.com/file.csv');
        expect(wrapper.find('tr>td:nth-child(4)').text()).toBe('{a: "1", b: 2}');
        expect(wrapper.find('tr>td:nth-child(5)').text()).toBe('{value: "wind_speed"}');
        expect(wrapper.find('tr>td:nth-child(6)').text()).toBe('active');
        expect(wrapper.find('tr>td:nth-child(7)').text()).toBe('1');
        expect(wrapper.find('tr>td:last-child').text()).toBe('true');
    });

});