<template>
<div>
	<section class="conteiner">
		<div class="text-sapso">
			<h1>SAPSO</h1>
			<br />
			<br />
		</div>
			<div class="box-params">
			<section class="buttons">
				<div class="button-upload">
					<br>    
            <button class="sample-csv" @click="downloadCSV">Arquivo Exemplo</button>             <input  type="file" id="myFile"><button class="process-button" @click= "processFile()">Processar Arquivo</button>
                  
	          <br /> 
            <br />
            <br />
            <br />
            <br />
          <br />
	     </div>
      </section> 
            <br />
      <h3>___________________________________________</h3>
      <br />

			<h1 id="manual-insert">INSERÇÃO MANUAL</h1>
      <h3>___________________________________________</h3>
			<br />
	
<!------------------------------------------------- -->
			<br />
			<div><select v-model="selected" @change="onChange($event)">
				  <option disabled value="">Selecionar Função</option>
				  <option>Ackley</option>
				  <option>Alpine</option>
				  <option>Griewank</option>
				  <option>Rastrigin</option>
				  <option>Rosenbrock</option>
				  <option>Sphere</option>
				  <option>Debi</option>
				  <option>Himmelblau</option>
				  <option>Impossible</option>
				  <option>Levi</option>
				  <option>Levi13</option>
				  <option>Schaffer2</option>
				  <option>Schaffer4</option>
				  <option>Schwefel</option>
				  <option>Testando</option>
				</select>
				<!--span>Selected: {{ selected }}</span-->
				<label for="bd-price"><span v-tooltip="'Funções para testar o algoritmo.'" >FUNÇÕES DE TESTE</span></label>
				
				</div><br /><br />
			<div class="row"><label for="bd-num"><span v-tooltip="'Número de dimensões do problema.'" >DIM</span></label>
				<input v-model.number="dim" type="number" id="DIM" placeholder="Ex.: 2 "></div><br />

			<div class="row"><label for="bd-num"><span v-tooltip="'Número de partículas.'">NPART</span></label>
				<input v-model.number="npart" type="number" placeholder="Ex.: 20 " id="NPART"></div><br>

			<div class="row"><label for="bd-num"><span v-tooltip="'Número máximo de Iterações.'" >MAXITER</span></label>
				<input v-model.number="maxiter" type="number" placeholder="Ex.: 500 " id="MAXITER"></div><br />

			<div class="row"><label for="bd-num"><span v-tooltip="'Número máximo de avaliações locais.'">CMAX</span></label>
				<input v-model.number="evalMax" type="number" placeholder="Ex.: 3 " id="CMAX"></div><br />

			<!--div class="row"><label for="bd-price"><span v-tooltip="'Controle de Diversidade.'">DIR(Atração)</span></label>
				<input v-model.number="attraction" type="number" placeholder="Ex: 1" ></div><br /-->

			<div class="row"><label><span v-tooltip="'É a variável que define o critério de parada do algoritmo.'">STOPC</span></label>
				<input v-model.number="stopc" type="number" placeholder="Ex.:0.0000000001" id="STOPC"></div><br />


			<div class="row"><label for="bd-price"><span v-tooltip="'Controle de Diversidade.'">DIR(Atração)</span></label>
				<input v-model.number="DIR" type="number" placeholder="Ex: 1" id="dir" ></div><br />

			<!--div class="row"><label for="bd-price">DT</label>
				<input v-model.number="number2" type="number" placeholder="dlow=0.1 " disabled>
				<input v-model.number="number2" type="number" placeholder="dhigh=0.25 " disabled>
			</div--><br />

			<div class="row"><label for="bd-price"><span v-tooltip="'Define o peso da inércia a ser utlizado nos cálculos.'">INERTIA WEIGHT</span></label>
				<input v-model.number="iwmin" type="number" placeholder="IWMIN" id="IWMIN">
				<input v-model.number="iwmax" type="number" placeholder="IWMAX" id="IWMAX">
			</div><br />

			<div class="row"><label for="bd-price"><span v-tooltip="'Define o limite inferior e superior do espaço de busca do algoritmo.'">DOMINIO</span></label>
				<input v-model="dom1" type="number" placeholder="Ex.:[-47.5]" id="DOM1">
				<input v-model="dom2" type="number" placeholder="Ex.:[47.5]" id="DOM2">
			</div><br /><br />

			<!--div class="row">
			<form @submit.prevent="send()"><input type="checkbox" style="float:right;" class="larger" id="myCheck" @click="ligaGrafico">
				<label >GRAFICO</label>
			</form></div-->
      <br />
      <br />

      <div class="row">
        <label>DOWNLOAD: </label><a v-if= "show" v-on:click="" :href="myUrl" :download="myFilename">DOWNLOAD_CSV_Fitness_Media_Desv_Padrao</a><br />
        <label> </label><a v-if= "show" v-on:click="" :href="myUrl1" :download="myFilename1">DOWNLOAD_CSV_Fitness_por_Geracao</a><br />
        <label> </label><a v-if= "show" v-on:click="" :href="myUrl2" :download="myFilename2">DOWNLOAD_CSV_Particulas_Finais</a><br />
      </div>

			<button id="execButton" class="btn-toggle" @click="testa(),show=true">Executar SAPSO</button>
			
		</div>

	         <section class="conteiner1">
	            <div class="grafico1" id="graph"></div>             
            </section>      
            <section class="conteiner2">
                <div class="grafico11" id="myDiv11"></div>
                <div class="grafico12" id="myDiv12"></div>
                <div class="grafico13" id="myDiv13"></div>
                <div class="grafico14" id="myDiv14"></div>
                <div class="grafico15" id="myDiv15"></div>
	            <div class="grafico2" id="myDiv"></div>
                <div class="grafico3" id="myDiv1"></div> 
                <div class="grafico4" id="myDiv2"></div>           
            </section>  
		
    </section>
    <!--v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular-->
    <!--div class="variables">
    	<div class="text-variables">
    		<label>X = </label>
			<p id="resultadoSapsoX"></p>

			<label> XFIT = </label>
			<p id="resultadoSapsoXFIT"></p>
		</div>
	</div-->

	<!--div class="text_container" id="oneteste">
	<h3>This is a third title...</h3>
	<div><div that we want to hide>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, eros id adipiscing congue, lorem ante sagittis elit, id malesuada nibh est sed orci</p>
	</div>
</div><end div_text_container-->
<br />
</div>
</template>

<script>
import {sphere, ackley, alpine, ellipsoid, griewank, levi, rastrigin, rosenbrock} from "../../lib/sapso/multdim/multidim_functions.js";
import {debi, himmelblau, impossible, levi13, schaffer2, schaffer4, schwefel, vincent} from "../../lib/sapso/twodim/twodim_functions.js";
import { MyFunctions } from "../../lib/mainSapso.js";
import {getBestGlobal , getDiversity, getGradient, getRow, getVelocity, init, iniFitness, initGrad, initialization, truncGrad, truncSpace, truncVel, updateBest, updateDir, updateImportance} from "../../lib/functions.js";
import  math from "mathjs";

	export default {
		name: "app",
	data() {
		return {
			dim: '',
			npart: '',
			maxiter: '',
			evalMax: '',
			attraction: '',
			iwmax:'',
			iwmin:'',
			dom1: '',
			dom2: '',
			stopc: '',
			DIR: '',
			interval: {},
            value1: 0,
            show: false,
            myUrl: '#',
            myUrl1: '#',
            myUrl2: '#',
            myFilename: '',
            myFilename1: '',
            myFilename2: '',
            grafico:'',
            csv:'',    
            value: [],
			liminferior: '',
			liminsuperior: '',
			number: '',
			number2: '',
			graph: '',
			checkedNames: [],
			number3: '',
			selected: '',
			itemText: '',
			th: '',
			text : 'sampleText',
			loading: false,
    		csv1: [
      			{ DIM: '10', NPART: '20', MAXITER: '30', CMAX: '3', STOPC: '1e-12', DIR: '1', IWMIN: '0.4', IWMAX: '0.7', DOMINIO: '-47.5,47.5' }
    		]



		}
	},	
	
	methods: {
	
			downloadCSV: function(){
      			let csv1 = '\ufeff' + 'DIM,NPART,MAXITER,CMAX,STOPC,DIR,IWMIN,IWMAX,DOMINIO\n'
      			this.csv1.forEach(el => {
        		var line = el['DIM'] + ',' + el['NPART'] + ',' + el['MAXITER'] +  ',' + el['CMAX'] +  ',' + el['STOPC'] +  ',' + el['DIR'] +  ',' + el['IWMIN'] +  ',' + el['IWMAX'] +  ',' + el['DOMINIO'] + '\n'
        		csv1 += line
      			})
      			var blob = new Blob([ csv1 ], { "type" : "csv/plain" });
      			let link = document.createElement('a')
      			link.href = window.URL.createObjectURL(blob)
      			link.download = 'sampleCsv.csv'
      			link.click()
    		},

			ligaGrafico: function(){
              // Get the checkbox
              var checkBox = document.getElementById("myCheck");                          

              // If the checkbox is checked, display the output text
              if (checkBox.checked == true){
                this.grafico = 1;
              } else {
                this.grafico = 0;
              }              
        },
			onChange: function(event,th) {
				evento = event.target.value

				switch (evento) {
	            	case 'Sphere':
	            	this.th = sphere;
	            	console.log(this.th);
	            	break;

	            	case 'Levi':
	            	this.th = levi;
	            	console.log(this.th);
	            	break;

	            	case 'Ackley':
	            	this.th = ackley;
	            	console.log(this.th);
	            	break;

	            	case 'Alpine':
	            	this.th = alpine;
	            	console.log(this.th);
	            	break;

	            	case 'Ellipsoid':
	            	this.th = ellipsoid;
	            	console.log(this.th);
	            	break;

	            	case 'Griewank':
	            	this.th = griewank;
	            	console.log(this.th);
	            	break;

	            	case 'Rastrigin':
	            	this.th = rastrigin;
	            	console.log(this.th);
	            	break;

	            	case 'Rosenbrock':
	            	this.th = rosenbrock;
	            	console.log(this.th);
	            	break;

	            	case 'Debi':
	            	this.th = debi;
	            	console.log(this.th);
	            	break;

	            	case 'Himmelblau':
	            	this.th = himmelblau;
	            	console.log(this.th);
	            	break;

	            	case 'Impossible':
	            	this.th = impossible;
	            	console.log(this.th);
	            	break;

	            	case 'Levi13':
	            	this.th = levi13;
	            	console.log(this.th);
	            	break;

	            	case 'Schaffer2':
	            	this.th = schaffer2;
	            	console.log(this.th);
	            	break;

	            	case 'Schaffer4':
	            	this.th = schaffer4;
	            	console.log(this.th);
	            	break;

	            	case 'Schwefel':
	            	this.th = schwefel;
	            	console.log(this.th);
	            	break;

	            	
	            default:
	            	window.alert("Selecione uma funcao valida!");
	            	console.log("Selecione uma função válida!");
	            }        
			},

			processFile: function(){ // funcão que lê arquivo do usuário
          var file = document.querySelector('#myFile').files[0];
          var reader = new FileReader();
          reader.readAsText(file);      

          //Ao carregar o arquivo
          reader.onload = function(event) {

            //pega o arquivo
            var csv = event.target.result;
            
            // criando vetor de resultado final e contador
            var result = []
            var cont = 0;

            //divide e bota as linhas em um array
            var rows = csv.split('\n');

            //varre linha por linha
            for (var i = 1; i < rows.length; i++) {
              //split by separator (,) and get the columns
              cols = rows[i].split(',');

              //varre coluna por coluna
              for (var j = 0; j < cols.length; j++) {            
                // trata dos resultados
                result[cont] = parseFloat(cols[j]); 
                cont++;                                                                    
              }                   
            }  
                             
            document.getElementById("DIM").value = result[0];
            localStorage.dim = result[0];  
                                               
            document.getElementById("NPART").value = result[1];
            localStorage.npart = result[1];

            document.getElementById("MAXITER").value = result[2];
            localStorage.maxiter = result[2];

            document.getElementById("CMAX").value =result[3];
            localStorage.evalMax = result[3];    

            document.getElementById("STOPC").value =result[4];
            localStorage.stopc = result[4];
     
            document.getElementById("dir").value =result[5];
            localStorage.DIR = result[5];
            
            document.getElementById("IWMIN").value =result[6];
            localStorage.iwmin = result[6];
            
            document.getElementById("IWMAX").value =result[7];
            localStorage.iwmax = result[7];
            
            document.getElementById("DOM1").value =result[8];
            localStorage.dom1 = result[8];
            
            document.getElementById("DOM2").value =result[9];
            localStorage.dom2 = result[9];
                                 
            console.log("Upload Arquivo")
            console.log("NPART", localStorage.npart)
            console.log("DIM",localStorage.dim)
            console.log("MAXITER",localStorage.maxiter)
            console.log("CMAX",localStorage.evalMax)
            console.log("IWMIN: ", localStorage.iwmin, "IWMAX: ", localStorage.iwmax)
            console.log("Dom1: ", localStorage.dom1, 'Dom2: ', localStorage.dom2);
            console.log("STOPC: ", localStorage.stopc)
            console.log("DIR: ", localStorage.DIR)
                                                
          }                    
        },

			send() {
      			console.log(this.checkedNames.toString());
    		},

		testa: function(){ 

        // GRÁFICO DE LOADING
        var fim = 0;
              
        // Limpando gŕaficos              
        Plotly.purge(graph);
        Plotly.purge(myDiv); 
        Plotly.purge(myDiv1); 
        Plotly.purge(myDiv11);
        Plotly.purge(myDiv12);
        Plotly.purge(myDiv13);
        Plotly.purge(myDiv14);
        Plotly.purge(myDiv15);   
        
        // Declarando Variáveis     
        var gra = this.grafico
        gra = 1      // LINHA QUE DESLIGA FUNÇÃO DE GRÁFICOS, PARA REVERTER, BASTA APAGAR ESSA LINHA
        var f = this.th;
        console.log("Funcao F: ",f)                                              // name of the test function
        //var RANGE = [-47.5 , 47.5]                                       // search domain

        //////////// Parâmetros PSO /////////////   
    
       var DIM = '';
       var NPART = '';
       var MAXITER = '';
       var CMAX = '';
       var RANGE = '';
       var IWMIN = '';
       var IWMAX = '';
       var STOPC = '';
       var dir = '';      
       //var IWMIN = 0.4
       //var IWMAX = 0.7
        
       //Condicional para determinar qual entrada de arquivo está sendo utilizada. Manual ou por upload de csv.    
       if (localStorage.dim){
            var DIM = parseInt(localStorage.dim);          
       }else {
            var DIM = parseInt(this.dim)                    // number of dimensions                              
       }

       if (localStorage.npart){
            var NPART = parseInt(localStorage.npart);
       }else {
            var NPART = parseInt(this.npart)                // number of particles                        
       }

       if (localStorage.maxiter){
            var MAXITER = parseInt(localStorage.maxiter);
       }else {
            var MAXITER = parseInt(this.maxiter)            // max number of iterations                          
       }
       if (localStorage.evalMax){
            var CMAX = parseInt(localStorage.evalMax);
       }else   {
            var CMAX = parseInt(this.evalMax)               //consecutive evaluations                          
       }
       if (localStorage.stopc){
          var STOPC = parseFloat(localStorage.stopc);
       }else {
          var STOPC = parseFloat(this.stopc);
       }
       if (localStorage.DIR){
          var dir = parseFloat(localStorage.DIR);
       }else {
          var dir = parseFloat(this.DIR);
       }
       if (localStorage.iwmin){
       		var IWMIN = parseFloat(localStorage.iwmin);
       }else {
       		var IWMIN = parseFloat(this.iwmin);
       }
       if (localStorage.iwmax){
       		var IWMAX = parseFloat(localStorage.iwmax);
       }else {
       		var IWMAX = parseFloat(this.iwmax);
       }
       if (localStorage.dom1){
       		var RANGE = [parseFloat(localStorage.dom1),parseFloat(localStorage.dom2)]
       }else {
       		var RANGE = [parseFloat(this.dom1),parseFloat(this.dom2)]
       }
       
        if(DIM){
            
        }else{
            return window.alert("Erro, arquivo não encontrado Faça o Upload do Arquivo.")
        }          

        console.log("Arquivos Carregados")                              
        console.log("Dim", DIM)
        console.log("NPART", NPART)
        console.log("MAXITER", MAXITER)
        console.log("CMAX", CMAX)
        console.log("IWMIN: ", IWMIN, "IWMAX: ", IWMAX)
        console.log('RANGE', RANGE)
        console.log("STOPC", STOPC)
 
        //STOPC = 0.0000000001                                         // stop criterion
        
        var c = 0                                                

        var fits1 = []  // variável para guardar médias dos 5 melhores XFITS
        var fits2 = []
        var fits3 = []
        var fits4 = []
        var fits5 = []

        var media1 = [] // variável para guardar a média de todos no XFIT
        var media2 = [] 
        var media3 = [] 
        var media4 = []
        var media5 = []

        var ultimoXfit1 = 0 // variáeis para guardar o ultimo xfit
        var ultimoXfit2 = 0
        var ultimoXfit3 = 0
        var ultimoXfit4 = 0
        var ultimoXfit5 = 0

        var ultimox1 = [] // variável para guardar o ultimo x
        var ultimox2 = []
        var ultimox3 = []
        var ultimox4 = []
        var ultimox5 = []

        var ifits1 = []  // variável para guardar médias dos 5 piores XFITS
        var ifits2 = []
        var ifits3 = []
        var ifits4 = []
        var ifits5 = []

        var ultimosXfits1 = [] // variáveis para guardar todos XFITS por geração
        var ultimosXfits2 = []
        var ultimosXfits3 = []
        var ultimosXfits4 = []
        var ultimosXfits5 = []

        var repet = 0
            if (gra == 1){
                repet = 5
            }else{
                repet = 1
            }
                for(var t = 0;t < repet; t++ ){
                // inicializa variáveis
                var k1 = 1
        
                var DT = [0.1 , 0.25 ]                                           //dlow and dhigh
                var dir = 1                                                      //attraction as default
               
                
                var params = {
                    'IW': IWMAX,       
                    'CC': 0, 
                    'SC': 4,      
                    'GC': 0.1       
                }
                var L = math.norm(math.multiply(math.ones(DIM)._data, (RANGE[1] - RANGE[0])))               // diagonal length of the space
                var VMAX = k1 * (RANGE[1] - RANGE[0]) / 2                                              // maximum velocity
                 
                var iw = []
                for(var i = 0; i< MAXITER; i++){
                   iw[i] = IWMAX - (i+1) * (IWMAX - IWMIN) / MAXITER
                }                                                                                // inertia weight through iterations           
               
                ///////////////Main iteration/////////////////
                var p = init(NPART, DIM, RANGE, VMAX, f)
                var G1 = getBestGlobal(p);
                  
                var cont = 0; // variável para contar execuções                  
                console.log("execução",t+1)
                    if(gra == 0){
                        var trace1 = {
                              x: math.zeros(NPART)._data,
                              y: math.zeros(NPART)._data,
                              mode: 'markers',
                              type: 'scatter'
                            };

                        var data = [trace1];                       

                        var layout = {
                            title: 'Andamento dos dados'
                        }
                        Plotly.newPlot('graph', data, layout)                             
                    }
                    
                    for (var i1 = 0; i1 < MAXITER; i1++){
           
                       for (var j = 0; j < NPART; j++){               
	                     
	                       for(var k = 0; k < DIM; k++){
		                       p.G[j][k] = getGradient(p.X[j], f)[k]
		                     }
	                       
	                       for (var k = 0; k < DIM; k++){          
		                       p.G[j][k] = truncGrad(p.G[j], VMAX)[k]  // trunc gradient                         
	                       }   
	                      
	                       for (var k = 0; k < DIM; k++){         
		                       p.V[j][k] = getVelocity(p.X[j], p.V[j], p.P[j], p.G[j], G1, p.I[j], params, dir, DIM)[k]         
	                       }         
	                    
	                       for (var k = 0; k < DIM; k++){
		                       p.V[j][k] = truncVel(p.V[j], VMAX)[k] // trunc velocity
	                       }     
		                     
	                       p.X[j] = math.add(p.X[j] , p.V[j])    //trolotinho                  
	                       

                    var trunc = truncSpace(p.X[j],p.I[j],p.C[j],RANGE)   // I e C são matrizes, mas dependendo de truncspace eles se                       

                      trunc1 = trunc[0]
                      p.I[j] = trunc[1]                  
                      p.C[j] = trunc[2]
                      for (var k = 0; k < DIM; k++){
		                     p.X[j][k] = trunc1[k]
	                       }    
	                      
                     p.XFIT[j] = sphere(p.X[j])


                     var update = updateBest(p.X[j], p.XFIT[j], p.P[j], p.PFIT[j], G1)   
                     p.PFIT[j] = update[1]
                     G1 = update[2]
                     
                     for (var k = 0; k < DIM; k++){         
		                       p.P[j][k] = update[0][k]
		                    }

                      }
                    cont=cont +1 
                    console.log(cont)
                    var update1 = updateImportance(p.X, p.I, p.XFIT, p.OLDXFIT, p.C, p.G, G1.X1, CMAX, NPART)
                    p.I = update1[0]
                    p.C = update1[1]
                    // escolha de partícula 
                     
                    var diversity = getDiversity(p.X, L, NPART, DIM)
                     
                    var updateDir1 =  updateDir(dir, diversity, p.I, DT, NPART)
                    dir = updateDir1[0]
                    p.I = updateDir1[1]

                    for (var k = 0; k < NPART; k++){
		                       p.OLDXFIT[k] = p.XFIT[k] // igualando OLDXFIT com XFIT
	                       }
                     
                    params.IW = iw[i1] 
                     
                    //console.log('ITER: ', num2str[i], ' | G: ', num2str[G.XFIT], ' | dir: ', num2str[dir], ' | Div: ', num2str[diversity])
                    
                    if(gra == 0){          
                      var pontosx = math.zeros(NPART)._data
                      var pontosy = math.zeros(NPART)._data
                      
                      for(var j2 = 0; j2 < NPART; j2++){
                       pontosx[j2] = p.X[j2][0]
                       pontosy[j2] = p.X[j2][1]               
                      }
                      
                          
                          Plotly.animate('graph', {                          
                            data: [{x: pontosx, 
                                    y: pontosy}],
                            traces: [0],
                            layout: {}
                          }, {
                            transition: {
                              duration: 500,
                              easing: 'cubic-in-out'
                            },
                            frame: {
                              duration: 500
                            }
                          })
                          
                    }                  
                    //SEPARANDO 5 MELHORES XFITS e A MÉDIA DE TODOS
                    var auxXFIT = p.PFIT // p.XFIT original; p.X1 não funciona; 
                    math.sort(auxXFIT)
                    var len = auxXFIT.length
                    
                    if(gra == 1){
                        if(t == 0){
                            fits1.push(auxXFIT[0])
                            //ifits1.push((auxXFIT[len-5] + auxXFIT[len-1] + auxXFIT[len-2] + auxXFIT[len-3] + auxXFIT[len-4])/5)
                            media1.push(math.mean(auxXFIT))
                            ultimosXfits1.push(G1.XFIT) 
                            ultimoXfit1 = G1.XFIT;
                            ultimox1 = G1.X1;
                        }
                        if(t == 1){
                            fits2.push(auxXFIT[0])
                            //ifits2.push((auxXFIT[len-5] + auxXFIT[len-1] + auxXFIT[len-2] + auxXFIT[len-3] + auxXFIT[len-4])/5)
                            media2.push(math.mean(auxXFIT))
                            ultimosXfits2.push(G1.XFIT)
                            ultimoXfit2 = G1.XFIT;
                            ultimox2 = G1.X1;
                        }
                        if(t == 2){
                            fits3.push(auxXFIT[0])
                            //ifits3.push((auxXFIT[len-5] + auxXFIT[len-1] + auxXFIT[len-2] + auxXFIT[len-3] + auxXFIT[len-4])/5)
                            media3.push(math.mean(auxXFIT))
                            ultimosXfits3.push(G1.XFIT)
                            ultimoXfit3 = G1.XFIT;
                            ultimox3 = G1.X1;
                        }
                        if(t == 3){
                            fits4.push(auxXFIT[0])
                            //ifits4.push((auxXFIT[len-5] + auxXFIT[len-1] + auxXFIT[len-2] + auxXFIT[len-3] + auxXFIT[len-4])/5)
                            media4.push(math.mean(auxXFIT))
                            ultimosXfits4.push(G1.XFIT)
                            ultimoXfit4 = G1.XFIT;
                            ultimox4 = G1.X1;
                        }
                        if(t == 4){
                            fits5.push(auxXFIT[0])
                            //ifits5.push((auxXFIT[len-5] + auxXFIT[len-1] + auxXFIT[len-2] + auxXFIT[len-3] + auxXFIT[len-4])/5)
                            media5.push(math.mean(auxXFIT))
                            ultimosXfits5.push(G1.XFIT)
                            ultimoXfit5 = G1.XFIT;
                            ultimox5 = G1.X1;
                        }
                    }
                    
                    if(G1.XFIT < STOPC)break                            
                    } 
                                                                           
                }  
                            
                                 
                // Definindo maior fits
                var vfits = [fits1.length,fits2.length,fits3.length,fits4.length,fits5.length]                    
                var maiorfits = math.max(vfits)                 
                //Preenchendo fits com o último valor.
                
                var ultimovalor1 = fits1[fits1.length -1]
                var ultimovalorM1 = media1[media1.length -1]
                //var iultimovalor1 = ifits1[ifits1.length -1] 
                var limite1 = maiorfits - fits1.length 
                for(var b = 0; b < limite1; b++){
                    fits1.push(ultimovalor1)                  
                    media1.push(ultimovalorM1)
                }
            
                var ultimovalor2 = fits2[fits2.length -1]
                var ultimovalorM2 = media2[media2.length -1]
                //var iultimovalor2 = ifits2[ifits2.length -1]
                var limite2 = maiorfits - fits2.length
                for(var b = 0; b < limite2; b++){
                    fits2.push(ultimovalor2)
                    media2.push(ultimovalorM2)
                }

                var ultimovalor3 = fits3[fits3.length -1]
                var ultimovalorM3 = media3[media3.length -1]
                //var iultimovalor3 = ifits3[fits3.length -1]
                var limite3 = maiorfits - fits3.length
                for(var b = 0; b < limite3; b++){
                    fits3.push(ultimovalor3)
                    media3.push(ultimovalorM3)
                }

                var ultimovalor4 = fits4[fits4.length -1]
                var ultimovalorM4 = media4[media4.length -1]
                var iultimovalor4 = ifits4[fits4.length -1]
                var limite4 = maiorfits - fits4.length
                for(var b = 0; b < limite4; b++){
                    fits4.push(ultimovalor4)
                    media4.push(ultimovalorM4)
                }

                var ultimovalor5 = fits5[fits5.length -1]
                var ultimovalorM5 = media5[media5.length -1]
                //var iultimovalor5 = ifits5[fits5.length -1]
                var limite5 = maiorfits - fits5.length
                for(var b = 0; b < limite5; b++){
                    fits5.push(ultimovalor5)
                    media5.push(ultimovalorM5)
                }               
              
                // Gráfico XFITS Melhores, piores e média    
                if(gra == 1){
                    var indices = [] 
                    var indices2 = []                      
                    var fits = [] // variável XFITS Melhores
                    for(var b = 0; b < maiorfits; b++){  
                        fits.push(1/((fits1[b] + fits2[b] + fits3[b] + fits4[b]+ fits5[b])/5))
                    }

                    var medias = [] // variável das Médias 
                    for(var b = 0; b < maiorfits; b++){
                        medias.push(1/((media1[b] + media2[b] + media3[b] + media4[b]+ media5[b])/5))
                    }
                  
                    // Indices para gráficos para inverso
                    var fits11 = []
                    for(var b = 0; b < fits.length; b++){
                        fits11.push(1/fits1[b])
                    }
                    var fits12 = []
                    for(var b = 0; b < fits.length; b++){
                        fits12.push(1/fits2[b])
                    }
                    var fits13 = []
                    for(var b = 0; b < fits.length; b++){
                        fits13.push(1/fits3[b])
                    }
                    var fits14 = []
                    for(var b = 0; b < fits.length; b++){
                        fits14.push(1/fits4[b])
                    }
                    var fits15 = []
                    for(var b = 0; b < fits.length; b++){
                        fits15.push(1/fits5[b])
                    }
                    
                    for(var b = 0; b < fits.length; b++){
                        indices.push(b)
                    }
                    indices2 = indices
                    for(var b = 0; b < fits.length; b++){
                        indices2.push(fits.length-b-1)
                    }                                    
                    
                    //definindo media e desvio padrão de fits para arquivo de saída csv
                    var mediaFits = ((ultimoXfit1 + ultimoXfit2 + ultimoXfit3 + ultimoXfit4 + ultimoXfit5)/5)
                    var desvFits = math.std([ultimoXfit1,ultimoXfit2,ultimoXfit3,ultimoXfit4,ultimoXfit5])        

                    // definindo desvio padrão para gráfico                                      
                    var desvmed = math.std(fits) 
                    
                    var difup = [] // diferença entre médias e desvios padrões para cima
                    for(var b = 0; b < maiorfits; b++){  
                        difup.push(fits[b] + desvmed)
                    }

                    var difdown = [] // diferença entre médias e desvios padrões para baixo
                    for(var b = 0; b < maiorfits; b++){  
                        difdown.push(fits[b] - desvmed)
                    }                         

                    var diftotal = [] // junção das diferenças up e down
                    for(var b = 0; b < maiorfits; b++){  
                        difup.push(difdown[difdown.length - b -1])
                    }
  
                    diftotal = difup                                                         
                    var trace1 = { //grafico maiores valores
                      x: indices, 
                      y: fits, 
                      name: "Maiores Valores",
                      mode: 'scatter'
                    };
                    var trace11 = { //grafico maiores valores
                      x: indices, 
                      y: fits11, 
                      name: "Maiores Execução 1",
                      mode: 'scatter'
                    };
                    var trace12 = { //grafico maiores valores
                      x: indices, 
                      y: fits12, 
                      name: "Maiores Execução 2",
                      mode: 'scatter'
                    };
                    var trace13 = { //grafico maiores valores
                      x: indices, 
                      y: fits13, 
                      name: "Maiores Execução 3",
                      mode: 'scatter'
                    };
                    var trace14 = { //grafico maiores valores
                      x: indices, 
                      y: fits14, 
                      name: "Maiores Execução 4",
                      mode: 'scatter'
                    };
                    var trace15 = { //grafico maiores valores
                      x: indices, 
                      y: fits15, 
                      name: "Maiores Execução 5",
                      mode: 'scatter'
                    };
                    
                    var trace4 = { // grafico desvio padrao
                      x: indices, 
                      y: diftotal, 
                      fill: "tozerox", 
                      fillcolor: "rgba(0,100,80,0.2)", 
                      line: {color: "transparent"}, 
                      name: "Desvio Padrão", 
                      showlegend: true, 
                      type: "scatter"
                    };
                                            
                    var data2 = [ trace1 ];
                    var data3 = [ trace1, trace4 ];
                    var data11 = [ trace11 ];
                    var data12 = [ trace12 ];
                    var data13 = [ trace13 ];
                    var data14 = [ trace14 ];
                    var data15 = [ trace15 ];
                    var layout = {
                      title:'Média 5 maiores de cada execução(Média de 5 execuções)'
                    };
                    
                    var layout2 = {
                      title:'Maior com Desvio Padrão'
                    };         
                    var layout11 = {
                       title:'1ª Execução (Maior fit)'
                    };
                    var layout12 = {
                       title:'2ª Execução (Maior fit)'
                    };
                    var layout13 = {
                       title:'3ª Execução (Maior fit)'
                    };
                    var layout14 = {
                       title:'4ª Execução (Maior fit)'
                    };
                    var layout15 = {
                       title:'5ª Execução (Maior fit)'
                    };               

                    Plotly.newPlot('myDiv', data2, layout);
                    Plotly.newPlot('myDiv1', data3, layout2);
                    Plotly.newPlot('myDiv11', data11, layout11);
                    Plotly.newPlot('myDiv12', data12, layout12);
                    Plotly.newPlot('myDiv13', data13, layout13);
                    Plotly.newPlot('myDiv14', data14, layout14);
                    Plotly.newPlot('myDiv15', data15, layout15);
                    console.log("XFIT", p.XFIT)                 
                    //teste grafico de variáveis
                    var indicesx = [];

                    for(var b = 0; b < p.XFIT.length; b++){
                        indicesx.push(b)
                    }
                    var XFITinv = [];
                    for(var b = 0; b < p.XFIT.length; b++){
                        XFITinv.push(1/p.XFIT[b])
                    }                    
                    console.log("indice",indicesx)
                    var trace5 = { //grafico teste valores
                      x: indicesx, 
                      y: p.XFIT, 
                      name: "Teste",
                      mode: 'scatter'
                    };                    
                    
                    var data4 = [trace5];

                    var layout3 = {
                       title:'Teste variáveis'
                    };

                    
                    //gravando arquivo csv
                    var produtos = [
                    { Execucao: '01',
                    FitnessFinal: ultimoXfit1,
                    Media: mediaFits,
                    DesvioPadrao: desvFits 
                    },
                    { Execucao: '02',
                    FitnessFinal: ultimoXfit2,
                    Media: ' ',
                    DesvioPadrao: ' ' 
                    },
                    { Execucao: '03',
                    FitnessFinal: ultimoXfit3,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: '04',
                    FitnessFinal: ultimoXfit4,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: '05',
                    FitnessFinal: ultimoXfit5,
                    Media: ' ',
                    DesvioPadrao: ' '
                    }                 
                    ];

                    var csv = 'Execucao, Fitness Final, Média, Desvio Padrão X\n';

                    produtos.forEach(function(row) {
                     csv += row.Execucao;
                     csv += ','+ row.FitnessFinal;
                     csv += ','+ row.Media;
                     csv += ','+ row.DesvioPadrao;                   
                     csv += '\n';
                    });      
                    
                    const jsonData = encodeURIComponent('{"is_valid": true}')
                    
                    this.myUrl = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
                    this.myFilename = 'results.csv'


                    //gravando arquivo csv
                    var produtos1 = [                   
                    { Execucao: 'Fitness por geração',
                    FitnessFinal: ' ',
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 1',
                    FitnessFinal: ultimosXfits1,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 2',
                    FitnessFinal: ultimosXfits2,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 3',
                    FitnessFinal: ultimosXfits3,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 4',
                    FitnessFinal: ultimosXfits4,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 5',
                    FitnessFinal: ultimosXfits5,
                    Media: ' ',
                    DesvioPadrao: ' '
                    }               
                    ];

                    var csv1 = ' \n';

                    produtos1.forEach(function(row) {
                     csv1 += row.Execucao;
                     csv1 += ','+ row.FitnessFinal;
                     csv1 += ','+ row.Media;
                     csv1 += ','+ row.DesvioPadrao;                   
                     csv1 += '\n';
                    });      
                    
                    const jsonData1 = encodeURIComponent('{"is_valid": true}')
                    
                    this.myUrl1 = 'data:text/csv;charset=utf-8,' + encodeURI(csv1);
                    this.myFilename1 = 'results1.csv'


                    //gravando arquivo csv
                    var produtos2 = [                   
                    { Execucao: 'Partículas Finais',
                    FitnessFinal: ' ',
                    Media: ' ',
                    DesvioPadrao: ' '
                    },                                           
                    { Execucao: 'Execução 1',
                    FitnessFinal: ultimox1,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 2',
                    FitnessFinal: ultimox2,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 3',
                    FitnessFinal: ultimox3,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 4',
                    FitnessFinal: ultimox4,
                    Media: ' ',
                    DesvioPadrao: ' '
                    },
                    { Execucao: 'Execução 5',
                    FitnessFinal: ultimox5,
                    Media: ' ',
                    DesvioPadrao: ' '
                    }
                    ];

                    var csv2 = '\n';

                    produtos2.forEach(function(row) {
                     csv2 += row.Execucao;
                     csv2 += ','+ row.FitnessFinal;
                     csv2 += ','+ row.Media;
                     csv2 += ','+ row.DesvioPadrao;                   
                     csv2 += '\n';
                    });      
                    
                    const jsonData2 = encodeURIComponent('{"is_valid": true}')
                    
                    this.myUrl2 = 'data:text/csv;charset=utf-8,' + encodeURI(csv2);
                    this.myFilename2 = 'results2.csv'
                    	                  
                    //reiniciando variáveis para uso de dados em inserção manual ou por upload de arquivo csv
                    localStorage.dim = ''                      // number of dimensions 
                    localStorage.npart = ''                    // number of particles       
                    localStorage.maxiter = ''                  // max number of iterations    
                    localStorage.evalMax = ''                  // consecutive evaluations  
                
                    this.dim = '';
                    this.npart = '';
                    this.maxiter = '';
                    this.evalMax = '';
                    
                    //fim spinner
                    this.value1 = 0;
                    clearInterval(this.interval);   
                  		                                                                                            
		    }                      
	    }        
    }      
};
    
</script>

<style>
.text1 {
  width: auto;
  border: 5px solid #00BFFF;
  padding: 50px;
  margin: auto;
  border-radius: 10px;

}

.text1 p {
	color: black;
	font-family:AR CENA;
	font-size:20px;
}

.conteiner .text-sapso {
	width: auto;
	text-align: left;
	position: absolute;
	margin-top: -20px;
}

button {
	position: relative;
  /*top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);*/
  background-color: #00BFFF;
  color: black;
  font-size: 16px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  float: right;
}

button :hover {
	background-color: green;
  color: white;
  text-align: center;
}

.conteiner {
  margin-top: 5px;
  width: auto;
  border: 5px solid #00BFFF;
  padding: 40px 40px 50px 100px;
  margin: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}

.conteiner #manual-insert {
  text-align: center;

}
.conteiner2  {
	width: 50%;
	/*border: 2px solid black;*/
	border-radius: 10px;
	float: right;
	margin-top: 40px;
	margin: 40px 10px 10px 50px;
}

#graph {
  
  /*border: 2px solid black;*/
  border-radius: 10px;
  float: right;
  margin-top: 40px;
  margin: 40px 10px 10px 100px;
}
.conteiner .box-params {
	border: 2px solid black;
	border-radius: 10px;
	margin: 0 0 10px -20px;
	padding: 0px 30px 20px 25px;
	width: 40%;
	float: left;
	margin-top: 40px;
	font-size: 15px;
	color: black;

}

.buttons .button-upload .sample-csv {
  float: right;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 10px 10px 10px 10px;
  height: 10px;
  
  font-size: 10px; 
  line-height: 3px;
  
}

.buttons .button-upload .process-button {
  
  padding:auto;
  margin-top: 20px;
  margin: 20px 5px 20px 20px; 
  padding: 20px 80px 20px 80px;
  text-align: center;
  line-height: 3px;
}

.conteiner .box-params label {
	float: left;
	font-size: 20px;
}

.conteiner .box-params input {
	float: left;
}
.conteiner .box-params .row .inpt1 input{
	width: 20px;
	float: left;
	
	
}

.conteiner .box-params .row .inpt2 input{
	width: 50px;
	float: left;
	
	
	
}
.conteiner .box-params div:hover {
	color: black;
}

.conteiner .box-params select {
	color: black;
}

.conteiner .box-params button {
	height: 40px;
}

.conteiner .md-raised button {
	height: 40px;
}
.variables {
	color: black;
	width: auto;
	margin-bottom: 50px;
	padding: 30px;
	border: 3px solid #00BFFF;
	border-radius: 10px;
	margin-top: 10px;
}

.variables .text-variables label {
	text-align: left;
	font-family: fantasy;
	font-size: 20px;
}

.variables .text-variables p {
	text-align: left;
	text-overflow: ellipsis;
	width: 370px;
	white-space: nowrap;
	overflow: hidden;
	max-width: 75ch;
	font-size: 20px;
}

.conteiner button {
	height: 25px;
	margin-top: 50px;
	text-align: center;
	font-size: 15px;
}

.v-progress-circular {
  margin: 1rem;
}

.hidden>div {
	display:none;
	color: black;
}

.visible>div {
	display:block;
	color: black;
}

input.larger {
        transform: scale(2);
        margin: 0px;
      }
/*
[data-tooltip] {
  position: relative;
  font-weight: bold;
}

[data-tooltip]:after {
  display: none;
  position: absolute;
  top: -5px;
  padding: 5px;
  border-radius: 3px;
  top: calc(100% + 2px);
  content: attr(data-tooltip);
  white-space: nowrap;
  background-color: #0095ff;
  color: White;
  font-size: 12px
}

[data-tooltip]:hover:after {
  display: block;
}
*/
</style>
