
import Pages from "./pages/_index.js"

export default [
	{ path: '/hello', component: Pages.HelloWorld},
	{ path: '/home', component: Pages.home},
	{ path: '/objs', component: Pages.objs},
	{ path: '/detail/:id', component: Pages.detail},
	{ path: '/', redirect: '/hello'},
	{ path: '/*', redirect: '/hello'}
]