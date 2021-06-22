<template>
	
	
	<div class="bodier">
		<!--Botão de Login-->
		<!--div id="login">
			<div v-blaze="'loginButtons'" align="right"></div>
		</div-->
		<testeInsert />
		<router-view></router-view>

		<!--pso2 />
		<div id="app">
    <TabNav :tabs="['Home', 'Settings', 'Profile']" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'Home'" >
        <p>Some test text</p>
        <sapso />
        <router-link to="/sapso">Sapso</router-link>
		<router-view></router-view>
      </Tab>
      <Tab :isSelected="selected === 'Settings'" >
        <h1>More test text</h1>
      </Tab>
      <Tab :isSelected="selected === 'Profile'" >
        <ul>
          <li>List test 1</li>
          <li>List test 2</li>
          <li>List test 3</li>
        </ul>
      </Tab>
    </TabNav>
  </div-->

		<!--Se o usuário estiver logado-->
		<!--div v-if="currentUser">
			<p>arroz</p>
			<resetPassword />
		</div>
		


		<p>
			{{ greeting }}
		</p>
		<teste />
		<br>
		<br>
		<sapso /-->
		

	
</div>

</template>

<script>
import { Banco } from "../api/banco.js";
import {MyFunctions} from "../../lib/mainSapso.js";
import Teste from "./testeInsert.vue";
import Sapso from "./sapso.vue";

export default {
	name: 'App',
	data() {
		return {
			selected: 'Home',
			greeting: "Olá do vue"
		}
	},
	components: {
		//comando pra conseguir importar os arquivos de um arquivo .js 
  		testeInsert: () => import('./testeInsert.vue'),
  		sapso: () => import('./sapso.vue')
	}
};
</script>

<style>
.bodier {
	background-color: #e7e7e7;
 color: #FFF;
 padding: 5px; margin: 0; font: 0.7em Arial, sans-serif; line-height: 1.5em;
 border-radius: 5px;
}
  .main {
	padding:0;
	margin:0;
}
.main {
}
.clr {
	clear:both;
	padding:0;
	margin:0;
	width:100%;
	font-size:0;
	line-height:0;
}
.logo {
	margin:0;
	padding:0;
	float:left;
	width:auto;
}
h1 {
	margin:0;
	padding:0;
	color:#1ab8c5;
	font:normal 42px/1.2em Arial, Helvetica, sans-serif;
	letter-spacing:-3px;
}
h1 span {
	color:#FFFFFF;
}
h1 a, h1 a:hover {
	color:#1ab8c5;
	text-decoration:none;
}
h1 small {
	display:block;
	padding-left:50px;
	font:normal 12px/1.2em Arial, Helvetica, sans-serif;
	color:#FFFFFF;
	letter-spacing:normal;
}
router-link, router-view {
	color:#20bac6;
	text-decoration:none;
}
.header {
	border-style: outset;
	border-color: #DCDCDC;
	background-color: rgb(48,48,48);
}
.header_resize {
	margin:0 auto;
	padding:16px 40px 0;
	width:890px;
	height:150px;
}
.menu_nav {
	float:right;
	margin:0;
	padding:16px 24px 0;
	height:42px;
}
.menu_nav ul {
	list-style:none;
}
.menu_nav ul li {
	margin:0 24px 0 0;
	padding:0;
	float:left;
}
.menu_nav ul li a {
	display:block;
	margin:0;
	color:#959595;
	text-decoration:none;
	font-size:13px;
}
.menu_nav ul li.active a, .menu_nav ul li a:hover {
	color:#20bac6;
}

</style>