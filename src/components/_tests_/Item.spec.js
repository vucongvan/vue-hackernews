import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item', () => {
    const wrapper = shallowMount(Item)
    debugger
    expect(wrapper.text()).toContain('item')
  })
})

// describe('/api/apis', () => {
//   describe('error response', () => {
//     describe('with 500', () => {
//       test('throws error', () => {
//         // test
//       })
//     })
//   })
// })

// describe('/api/apis', () => {
//   test('throws error when server responds with 500', () => {
//     // test
//   })
// })
