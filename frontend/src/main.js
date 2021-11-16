// Router
import { initJK, Route } from '/jk.js'

// Init global state
//import './store/global.js'

// Views
import Err404 from './views/Err404/Err404.js'
import Home from './views/Home/Home.js'

const routes = [
    new Route(
        null,       // Path
        Err404,     // View
        'Error'     // Title
    ),
    new Route(
        '/',        // Path
        Home,       // View
        'Home'      // Title
    ),
]

initJK(routes)