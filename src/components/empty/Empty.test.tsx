import * as React from 'react';
import { shallow, render } from 'enzyme';
import { Empty } from './index';

describe('Testing empty component', function() {

    it('it should render without throwing an error', function() {
        const wrapper = shallow(<Empty />);
        expect(
            wrapper.contains(<div className="empty_content"><div>No content Loaded</div></div>)
        )
        .toBe(true);
    });

    it('it should render the title', () => {
        const wrapper = render(<Empty />);
        expect(wrapper.text()).toBe('No content Loaded');
    });

});
