import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import CardBoard from '../../src/components/CardBoard';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

describe('CardBoard', () => {
    const build = () => {
        const wrapper = shallowMount(CardBoard);

        return {
            wrapper
        };
    };
    
    it('renders the component', () => {
        const {wrapper} = build();

        expect(wrapper.html()).toMatchSnapshot();
    });
});
