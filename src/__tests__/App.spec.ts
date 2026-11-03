import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '@/App.vue'
import { routes } from '@/router'

// Mounts the application with an in-memory router at the given path.
async function mountAt(path: string) {
  const router = createRouter({ history: createMemoryHistory(), routes, linkExactActiveClass: 'active' })
  await router.push(path)
  await router.isReady()
  const wrapper = mount(App, { global: { plugins: [router] } })
  return { wrapper, router }
}

describe('App', () => {
  it('renders the home page', async () => {
    const { wrapper } = await mountAt('/')

    expect(wrapper.get('h1').text()).toBe('Your Vue app is running.')
    expect(wrapper.text()).toMatch(/Vue \d+\.\d+/)
  })

  it('navigates to the about page without a page load', async () => {
    const { wrapper, router } = await mountAt('/')

    await wrapper.get('.actions a[href="/about"]').trigger('click')
    await flushPromises()

    expect(router.currentRoute.value.path).toBe('/about')
    expect(wrapper.get('h1').text()).toBe('Routes without a server.')
    expect(wrapper.get('nav a.active').text()).toBe('About')
  })

  it('renders the not found page for unknown paths', async () => {
    const { wrapper } = await mountAt('/missing')

    expect(wrapper.get('h1').text()).toBe('Page not found.')
    expect(wrapper.text()).toContain('/missing')
  })
})
