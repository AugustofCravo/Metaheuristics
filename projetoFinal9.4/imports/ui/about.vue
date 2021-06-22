<template>
	<div>
		<div class="texto">
			<h2>SOBRE NÓS</h2>
	    	<p>Este Projeto foi desenvolvido como trabalho final do curso de ciência da computação e tem o objetivo de auxiliar pesquisadores veteranos e iniciantes que trabalham com os algoritmos de otimização por enxame de partículas, como o PSO (Particle Swarm Optimization), desde a análise de dados até a compreensão sobre o método de execução através de gráficos.</p>
	    	
	    	<p>Os algoritmos disponíveis para estudo são utilizados em problemas de otimização, utilizando técnicas bio-inspiradas para encontrar as soluções.</p>
		</div>
		<div class="texto">
	    	
	    	<h2>ALGORITMOS DE OTIMIZAÇÃO</h2>
	    	<h3>PSO - Particle Swarm Optimization</h3>
	    	<p>O algoritmo Particle Swarm Optimization (PSO) é uma metaheurista não determinística, aleatória e inspirada na natureza, especializada na solução de problemas de otimização de caixa preta contínua. PSO tem sido usado por muitos especialistas de diferentes domínios da ciência, pois o algoritmo tem o potencial de resolver problemas complexos com formulações matemáticas simples.</p>
	    	<h3>SAPSO - Semi Autonomus Particle Swarm Optimization</h3>
	    	<p>Um otimizador de enxame de partículas semi-autônomo, denominado SAPSO, que usa informações baseadas em gradiente e controle de diversidade para otimizar funções multimodais é fornecido. Este algoritmo evita as desvantagens de abordagens determinísticas e não determinísticas, reduzindo os esforços computacionais de investigação local e escapando de ótimos locais.</p>
    	</div>
		<div class="texto">
			<h2>EXPLORAÇÃO DE VARIÁVEIS</h2>
			<br />
			<h3>DIM: </h3><p>É a variável que define o número de dimensões a serem trabalhados.</p>
			<h3>NPART: </h3><p>É a variável que define o número de Partículas a serem usadas no dominio.</p>
			<h3>MAXITER: </h3><p>É a variável que define o número máximo de iterações do algoritmo.</p>
			<h3>CMAX: </h3><p>É o número máximo de avaliações locais.</p>
			<h3>STOPC: </h3><p>É a variável que define o critério de parada do algoritmo.</p>
			<h3>DIR: </h3><p>É a variável que define a direção das partículas durante a busca.</p>
			<h3>DT: </h3><p>-----------------------------------------------------------------------</p>
			<h3>INERTIA WEIGHT: </h3><p>Responsavel por definir o pesa da inércia a ser usado nos cálculos.Este parâmetro desempenha um papel importante no equilíbrio entre a pesquisa global e a local. Pode ser uma constante positiva ou mesmo uma função linear ou não linear positiva do tempo. Um valor moderado entre [0.9, 1.2] é um bom intervalo para escolher inertia weight.</p>
			<h3>DOMINIO: </h3><p>Define o limite inferior e superior do espaço de busca do algoritmo.</p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {}
	}
};
	
</script>
<style>
.texto {
	width: auto;
	border-style: hidden;
	border-color: #FFFFFF;
	background-color: #00BFFF;
	padding-bottom: 50px;
	border-radius: 10px;
}

.texto h2 {
	padding-top: 10px;
	font-family: sans-serif; 
	margin-left: 15px;
	color: #000000;
	font-size: 20px;
}

.texto h3 {
	padding-top: 20px;
	margin-left: 15px;
	font-size: 15px;
	font-style: italic;
	color: #363636;
}

.texto p {
	padding-top: 10px;
	font-family: serif;
	font-size: 20px;
	margin-left: 15px;
	margin-right: 15px;
	text-align: justify;
	line-height: 1.8;	
}
/*.body .texto p {
	font-family: serif;
	font-size: 20px;
	margin-left: 15px;
	margin-right: 15px;
	text-align: justify;
	line-height: 1.8;	
}
.body .texto {
	border-style: solid #e7e7e7;
	border-width: 10px;
	margin-top: 10px;
	background-color: #00BFFF;
	margin-right: 10px;
	padding-bottom: 50px;
	border-radius: 10px;
	float: left;
	display: block;
	width: 1000px;

}*/
</style>

