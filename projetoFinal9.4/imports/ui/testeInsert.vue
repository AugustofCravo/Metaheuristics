<template>
<div class="main">
	<div class="header">
    	<div class="header_resize">
      		<div class="logo">
        		<h1><a href="#">#<span>Metaheuristcs</span><small>Algoritmos Metaheuísticos</small></a></h1>
      		</div>
      		<div class="menu_nav">
        		<ul>	
          			<li><router-link :to="{path: '/'}">Início</router-link>
					</li>
          			<!--li><a><router-link to="/sapso">Algoritmos</router-link>
					<router-view></router-view></a></li-->
					<li><router-link :to="{path: '/about'}">Sobre</router-link>
					</li>

          			<!--li><a><div v-blaze="'loginButtons'"></div></a></li-->
        		</ul>
        		
      		</div>
      		<div class="clr"></div>	
    	</div>
    </div>

    <!-- Home -->
    
</div>
    <!--It's working-->
  			<!--div v-if="image" style="margin-top:40px; width:600px; height:200px" :style="{ 'background-image': 'url(' + image + ')'}"></div-->

  		<!--IMG not working-->
      	<!--img src="@/assets/testeImage.png" width="625" height="205" alt="" --> 
    	  
	
	<!--router-link to="/sapso">Sapso</router-link>
		<router-view></router-view>

		<br>
		<br>
		<label>Inserindo uma string</label>
		<br>
		{{ banco }}
		<br>
		<input v-model="string" type="text" @keypress.enter="handleClick">
		<br>
		<br>
		<label>Inserindo números</label>
		<br>
		<label>numero1</label>
		<input v-model.number="number" type="number" @keypress.enter="handleTeste">
		<br>
		<label>numero2</label>
		<input v-model.number="number2" type="number" @keypress.enter="handleTeste" placeholder="numero 2">
		<br>
		<label>numero3</label>
		<input v-model.number="number3" type="number" @keypress.enter="handleTeste1"-->
</template>

<script>
import { Banco }  from "../api/banco";
import { MyFunctions } from "../../lib/mainSapso.js";
import  math from "mathjs";
import FileReader from "./FileReader.vue";

export default{
	name: 'App',
	data() {
		return { 
			string: '',
			number: '',
			number2: '',
			number3: '',
			//backgroundUrl,
			image: 'https://www.id-hub.com/wp-content/uploads/2020/04/data.jpg' //working
		};
	},
	components: {
		sapso:()=>import('./sapso.vue')
	}

};
</script>
<style>
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
	text-decoration:underline;
}
.header {
	border-style: outset;
	border-color: #DCDCDC;
	background-color: rgb(48,48,48);
	border-radius: 10px;
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
	margin:0 0 0 40px;
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

.sapso-graph {
	width: auto;
}


</style>
