
import Home from '~/pages/Home/Home'
import Profile from '~/pages/Profile/Profile'
import Following from '~/pages/Following/Following'
import Upload from '~/pages/Upload/Upload'
import Search from '~/pages/Search'
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly'
import config from '~/configs'

const configRoute = config.routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: configRoute.home, component: Home },
    { path: configRoute.following, component: Following },
    { path: configRoute.profile, component: Profile },
    { path: configRoute.upload, component: Upload, layout: HeaderOnly },
    { path: configRoute.search, component: Search, layout: null },

]
const privateRoutes = []
export { publicRoutes, privateRoutes }