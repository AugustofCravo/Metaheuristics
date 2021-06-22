<template>
    <div>
<div class="body">
    	<!--div class="texto">
	    	
	    	<h2>Algoritmos de Otimização</h2>
	    	<h3>PSO - Particle Swarm Optimization</h3>
	    	<p>O algoritmo Particle Swarm Optimization (PSO) é uma metaheurista não determinística, aleatória e inspirada na natureza, especializada na solução de problemas de otimização de caixa preta contínua. PSO tem sido usado por muitos especialistas de diferentes domínios da ciência, pois o algoritmo tem o potencial de resolver problemas complexos com formulações matemáticas simples.</p>
	    	<h3>SAPSO - Semi Autonomus Particle Swarm Optimization</h3>
	    	<p>Um otimizador de enxame de partículas semi-autônomo, denominado SAPSO, que usa informações baseadas em gradiente e controle de diversidade para otimizar funções multimodais é fornecido. Este algoritmo evita as desvantagens de abordagens determinísticas e não determinísticas, reduzindo os esforços computacionais de investigação local e escapando de ótimos locais.</p>
    	</div-->
        <div class="titulo2">
            <h1>Clique no botão do algoritmo desejado:</h1>
        </div>
    	<div class="buttons">           
            <ul>
            <div class="button1">
                    <li><button><router-link style="text-decoration: none; color: white; " to='/pso'>PSO</router-link></button></li>
            </div>
            <div class="button2">
                    <li><button><router-link style="text-decoration: none; color: white; " to='/sapso'>SAPSO</router-link></button></li>
            </div>
    			
            </ul>
    	</div>
    	
    </div>
</div>
</template>
 <script>
     export default {
        name: 'home'
     };
 </script>

 <style>
 .body {
  margin-top: 15px;
  border: 10px hiden #00BFFF;
  border-radius: 10px;
  width: auto;
  display: flex;
}

 .body .buttons .button1 {
    float: left;
    padding:40px;
    list-style:none;
    width: 500px;
    font-size: 60px;

    
 }

  .body .titulo2 h1 {   
    font-size: 30px;
    text-align: center    
 }

 .body .buttons .button2 {
    float: right;
    padding:40px 100px 100px;
    list-style:none;
    width: 500px;
    font-size: 45px;

 }
    /*.body .button1 {
    margin:10 auto;
    padding:40px 40px 0;
    width:1550px;
    height:150px;   

    display:block;
    color:#959595;
    text-decoration:none;
    font-size:13px;
    float: left;
    }

    .body .button1 ul li{
    list-style:none;
}

    .body .button2 {
    margin:10 auto;
    padding:40px 40px 0;
    width:1550px;
    height:150px;   
    }

    .body .button2 ul li{
    list-style:none;
}*/
 </style>
