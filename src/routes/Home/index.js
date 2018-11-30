// import HomeView from './components/HomeView'

// // Sync route definition
// export default {
//   component : HomeView
// }

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path : '/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HomeViewContainer = require('./containers/HomeViewContainer').default
      const reducer = require('./modules/tables').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'tables', reducer })

      /*  Return getComponent   */
      cb(null, HomeViewContainer)

    /* Webpack named bundle   */
    }, 'tables')
  }
})
