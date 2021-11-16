import { initRouter } from './router.js'

// Export tools
export * from './tools/index.js'

export function initJK(routes){

    // Init global jk keyholder
    window.jk = {
        global: {
            state: {}
        }
    }

    initRouter(routes)

}

