// Layouts
import { NoSidebar } from '../components/Layouts';

// Pages
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Detail } from '../pages/Detail';

const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/detail',
        component: Detail,
        layout: NoSidebar,
    },
];

export { publicRouter };
