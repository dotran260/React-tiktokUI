
import Home from '~/pages/Home/Home'
import Profile from '~/pages/Profile/Profile'
import Following from '~/pages/Following/Following'
import Upload from '~/pages/Upload/Upload'
import Search from '~/pages/Search'
import HeaderOnly from '~/components/Layouts/HeaderOnly/HeaderOnly'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },

]
const privateRoutes = []
export { publicRoutes, privateRoutes }