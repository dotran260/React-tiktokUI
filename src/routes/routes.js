
import Home from '~/pages/Home/Home'
import Profile from '~/pages/Profile/Profile'
import Following from '~/pages/Following/Following'
import Upload from '~/pages/Upload/Upload'
import Search from '~/pages/Search'
import HeaderOnly from '~/components/Layouts/HeaderOnly/HeaderOnly'
import routes from '~/configs/routes'
const publicRoutes = [
    { path: '/home', component: Home },
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.search, component: Search, layout: null },

]
const privateRoutes = []
export { publicRoutes, privateRoutes }