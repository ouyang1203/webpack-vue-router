import VueRouter from 'vue-router';

import Account from './main/Account.vue';
import Goodslist from './main/Goodslist.vue';
import login from './subcom/login.vue';
import register from './subcom/register.vue';

var router = new VueRouter({
    routes:[
        {
            path:'/account',
            component:Account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path:'/goodslist',component:Goodslist}
    ]
});

/**暴露出路由属性 */
export default router;