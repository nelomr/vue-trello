import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CardBoard from '../../src/components/CardBoard';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('CardBoard', () => {
    let popupOpen = false;
    let props;
    let actions;
    let store;
   
    beforeEach(() => {
        props = {
            popupOpen
        };
        actions = {
            setDescriptionTask: jest.fn(),
            setTitleTask: jest.fn()
        };
        store = new Vuex.Store({
            actions
        });
    });

    const build = () => {
        const wrapper = shallowMount(CardBoard,
            {
                propsData: props,
                mocks: {$store: store}
            }
        );

        const input = wrapper.find('input');
        const textarea = wrapper.find('textarea');

        return {
            wrapper,
            input,
            textarea,
            button: () => wrapper.find('.card-board--buttons a')
        };
    };

    it('renders the component', () => {
        const {wrapper} = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('calls store action "setTitleTask" when input is changued', async() => {
        const {wrapper, input} = build();

        await wrapper.vm.$nextTick();
        input.trigger('input', 'task 2');
        expect(actions.setTitleTask).toHaveBeenCalled();
    })

    it('calls store action "setDescriptionTask" when input is changued', async() => {
        const {wrapper, textarea} = build();

        await wrapper.vm.$nextTick();
        textarea.trigger('input', 'this is some description');
        expect(actions.setDescriptionTask).toHaveBeenCalled();
    })

    it('open popup on click', async() => {
        const {wrapper, button} = build();

        button().trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.popupOpen).toBe(true);
    });
});
