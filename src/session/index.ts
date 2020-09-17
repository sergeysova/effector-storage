import { tie } from '..'
import { storage } from '../storage'

export const sessionStorage = storage(window.sessionStorage, false)
export const withStorage = tie({ with: sessionStorage })

// export `tie` just for convenience
export { tie }
