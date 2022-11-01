import IndexDaily from "@/views/IndexDaily";
import MainPage from "@/components/MainPage";

const routes = [
    {
        name: 'main',
        path: '/index',
        component: MainPage,
        children:[
            {
                path: '',
                component: IndexDaily
            }
        ]
    }

];

export default routes