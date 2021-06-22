import { Meteor } from "meteor/meteor";
import Vue from "vue";
import VueTracker from "vue-meteor-tracker";
import math from "mathjs";
import { Accounts } from "meteor/accounts-base";
import VueMeta from 'vue-meta';
import {PythonShell} from 'python-shell';
import VueRouter from 'vue-router';
import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min.js';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import routes from './router.js';

//Importando o banco de dados
import { Banco } from "../imports/api/banco";

//Importando o arquivo principal
import App from "../imports/ui/App.vue";

Vue.use(Vuetify)
Vue.use(Tooltip);
Vue.use(VueMeta)
Vue.use(VueTracker);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})



Meteor.startup(() => {
	new Vue({
    router,
		render: h => h(App)
	}).$mount("app");
})
