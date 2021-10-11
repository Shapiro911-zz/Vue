import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Form from '../../src/components/PaymentForm'
import ListData from '../../src/components/PaymentListData'

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('PaymentList', () => {
    let fakeStore
    let fakeMutations
    let fakeActions
    beforeEach(() => {
        fakeMutations = {
            setCurrentPage: jest.fn()
        }
        fakeActions = {
            fetchData: jest.fn()
        }
        fakeStore = new Vuex.Store({
            namespace: true,
            mutations: fakeMutations,
            actions: fakeActions,
        })
    })

    test('Choose page', () => {
        const wrapper = mount(ListData, {
            store: fakeStore,
            localVue: LocalVue
        })
        const pagination = wrapper.find('.pagination');
        pagination.findAll('button').trigger('click')
        expect(fakeMutations.setCurrentPage).toHaveBeenCalled()
    })

    test('Fetch data', () => {
        const wrapper = mount(ListData, {
            store: fakeStore,
            localVue: LocalVue
        })
        expect(fakeActions.fetchData).toHaveBeenCalled()
    })

    test('Form input', () => {
        const wrapper = mount(Form)
        const inputCategory = wrapper.find('input[name=category]')
        inputCategory.setValue('Food')
        const inputValue = wrapper.find('input[name=value]')
        inputValue.setValue(200)
        const inputDate = wrapper.find('input[name=date]')
        inputDate.setValue('28.02.2021')
        expect(wrapper.vm.category).toBe('Food')
        expect(wrapper.vm.value).toBe(200)
        expect(wrapper.vm.date).toBe('28.02.2021')
    })
})

