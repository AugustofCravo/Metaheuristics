import Sapso from '../imports/ui/sapso.vue'
import AboutVue from '../imports/ui/about.vue'
import home from '../imports/ui/home.vue'
import PSO from '../imports/ui/pso.vue'


const routes = [{ 
	path: '/sapso', 
	component: Sapso 
	},
	{
		path: '/about',
		name: 'about',
		component: AboutVue
	},
	{
		path: '/',
		name: 'Home',
		component: home //home.vue
	},
	{
		path: '/pso',
		component: PSO
	}
]

export default routes

