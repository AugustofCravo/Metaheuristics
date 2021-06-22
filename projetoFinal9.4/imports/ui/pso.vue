<template>
<div>
<section class="conteiner">
  <div class="text-pso">
    <h1>PSO</h1>
      <br />
      <br />
  </div>
    <div class="box-params">
      <section class="buttons">
        <div class="button-upload">
          <br />
            <button class="sample-csv" @click="downloadCSV">Arquivo Exemplo CSV</button>                           <input type="file" id="myFile"><button class="process-button" @click= "processFile()">PROCESSAR ARQUIVO</button>

            <br />
            <br />
            <br />
            <br />
            <br />              
        </div>
      </section>

      <br />

      <h3>____________________________________________</h3>
      <br />

      <h1 id="manual-insert">INSERÇÃO MANUAL</h1>
      <h3>____________________________________________</h3>
      <br />

      <br />
      <div><select v-model="selected" @change="onChange($event)">
          <option disabled value="">Selecionar Função</option>
          <option>Ackley</option>
          <option>Alpine</option>
          <option>Griewank</option>
          <option>Rastrigin</option>
          <option>Rosenbrock</option>
          <option>Sphere</option>
          <option>Ellipsoid</option>
          <option>Debi</option>
          <option>Himmelblau</option>
          <option>Impossible</option>
          <option>Levi</option>
          <option>Levi13</option>
          <option>Schaffer2</option>
          <option>Schaffer4</option>
          <option>Schwefel</option>
        </select>
        <!--span>Selected: {{ selected }}</span-->
        <label for="bd-price"><span v-tooltip="'Funções para testar o algoritmo.'" >FUNÇÕES DE TESTE</span></label>
        
      </div><br /><br />

      <div class="row"><label for="bd-price"><span v-tooltip="'Número de dimensões do problema.'" >DIM</span></label>
        <input v-model.number="dim1" type="number" id="DIM" placeholder="Ex.: 2 "></div><br />
      
      <div class="row"><label for="bd-price"><span v-tooltip="'Número de partículas.'">NPART</span></label>
        <input v-model.number="npart1" type="number" id="NPART" placeholder="Ex.: 20 "></div><br>
      <div class="row"><label for="bd-price"><span v-tooltip="'Número de Iterações.'" >MAXITER</span></label>
        <input v-model.number="maxIter" type="number" id="MAXITER" placeholder="Ex.: 500 "></div><br />
      <div class="row"><label for="bd-price"><span v-tooltip="'É a variável que define o critério de parada do algoritmo.'">STOPC</span></label>
        <input v-model.number="stopc1" type="number" id="STOPC" placeholder="Ex.:0.00001"></div><br />
      <!--div class="row"><label for="bd-price">K1</label>
        <input v-model.number="number2" type="number"></div><br />
      <div class="row"><label for="bd-price">CMAX</label>
        <input v-model.number="number2" type="number"></div><br />
      <div class="row"><label for="bd-price">DLOW/DHIGH</label>
        <input v-model.number="number2" type="number"></div><br />
      <div class="row"><label for="bd-price">DIR</label>
        <input v-model.number="number2" type="number"></div><br />
      <div class="row"><label for="bd-price">IWMIN</label>
        <input v-model.number="number2" type="number"></div><br />
      <div class="row"><label for="bd-price">IWMAX</label>

     

        <input v-model.number="number2" type="number"></div><br /-->
        <br />
        <br />
      <!--div class="row">
      <form @submit.prevent="send()"><input type="checkbox" style="float:right;" class="larger" id="myCheck" @click="ligaGrafico">
        <label >GRAFICO</label>
      </form></div-->

      <br />
      <br />

      <div class="row">
        <label>DOWNLOAD: </label><a v-if= "show" v-on:click="" :href="myUrl" :download="myFilename">DOWNLOAD_CSV</a><br />
      </div>
            
      <button @click = "pso1(),show=true">EXECUTAR PSO</button>
        
    </div>
          <section class="conteiner1">
            <div class="graph" id="graph"></div>
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
</div>

  
</template>

<script>
import {PSO} from "./pso.js";
import  math from "mathjs";
import {sphere, levi, ackley, alpine, ellipsoid, griewank, rastrigin, rosenbrock} from "../../lib/sapso/multdim/multidim_functions.js";
import {debi, himmelblau, impossible, levi13, schaffer2, schaffer4, schwefel} from "../../lib/sapso/twodim/twodim_functions.js";


export default {
  data() {
    return {         
      value: ' ',
      number: '',
      number2: '',
            selected: '',
            th: '',
            dim1: '',
            func: '',
            maxIter: '',
            stopc1: '',
            npart1: '',
            grafico:'',
            myUrl: '#',
            myFilename: '',
            show: false,
            csv1: [
            { DIM: '10', NPART: '20', MAXITER: '30', STOPC: '1e-12' }
        ]
      
    };
  },
  methods: {
    downloadCSV: function(){
            let csv1 = '\ufeff' + 'DIM,NPART,MAXITER,STOPC\n'
            this.csv1.forEach(el => {
            var line = el['DIM'] + ',' + el['NPART'] + ',' + el['MAXITER'] + ',' + el['STOPC'] + '\n'
            csv1 += line
            })
            var blob = new Blob([ csv1 ], { "type" : "csv/plain" });
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'sampleCsv.csv'
            link.click()
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
              console.log("Selecione uma função válida!");
            }        
    },  
    
        send() {
            console.log(this.checkedNames.toString());
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
                localStorage.dim1 = result[0];  
                                                              
                document.getElementById("NPART").value = result[1];
                localStorage.npart1 = result[1];
                
                document.getElementById("MAXITER").value = result[2];
                localStorage.maxIter = result[2];
                 
                document.getElementById("STOPC").value =result[3];
                localStorage.stopc1 = result[3]; 
                                                                                                                                   
                console.log("Upload Arquivo")
                console.log("NPART", localStorage.npart1)
                console.log("DIM",localStorage.dim1)
                console.log("MAXITER",localStorage.maxIter)                                       
                console.log("STOPC: ", localStorage.stopc1)
                
                                                
          }                    
        },
   
        pso1: function(th, dim1, maxIter){
        
            // Limpando gŕaficos              
            Plotly.purge(graph);
            Plotly.purge(myDiv); 
            Plotly.purge(myDiv1); 
            Plotly.purge(myDiv11);
            Plotly.purge(myDiv12);
            Plotly.purge(myDiv13);
            Plotly.purge(myDiv14);
            Plotly.purge(myDiv15);

           //Condicional para determinar qual entrada de arquivo está sendo utilizada. Manual ou por upload de csv.    
           if (localStorage.dim1){
                var DIM = parseInt(localStorage.dim1); 
                console.log("upload")         
           }else {
                var DIM = parseInt(this.dim1)                    // number of dimensions
                console.log("manual")                              
           }

           if (localStorage.npart1){
                var NPART = parseInt(localStorage.npart1);
           }else {
                var NPART = parseInt(this.npart1)                // number of particles                        
           }

           if (localStorage.maxIter){
                var MAXITER = parseInt(localStorage.maxIter);
           }else {
                var MAXITER = parseInt(this.maxIter)            // max number of iterations                          
           }
           if (localStorage.evalMax){
                var CMAX = parseInt(localStorage.evalMax);
           }else   {
                var CMAX = parseInt(this.evalMax)               //consecutive evaluations                          
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
           if (localStorage.stopc1){
              var STOPC = parseFloat(localStorage.stopc1);
           }else {
              var STOPC = parseFloat(this.stopc1);
           }
           if (localStorage.DIR){
              var dir = parseFloat(localStorage.DIR);
           }else {
              var dir = parseFloat(this.DIR);
           }
           
            if(DIM){
                
            }else{
                return window.alert("Erro, arquivo não encontrado Faça o Upload do Arquivo.")
            }
                       
            var fits1 = []; //variável para guardar melhores fitness
            var fits2 = [];
            var fits3 = [];
            var fits4 = [];
            var fits5 = [];
            
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

            var ultimox1 = [] //variável para guardar o ultimo x
            var ultimox2 = []
            var ultimox3 = []
            var ultimox4 = []
            var ultimox5 = []

            var cont = 0; // contador de iterações
            

            var gra = this.grafico;  
            gra = 1      // LINHA QUE DESLIGA FUNÇÃO DE GRÁFICOS, PARA REVERTER, BASTA APAGAR ESSA LINHA         
            var repet = 0;

            if (gra == 1){
                repet = 5
            }else{
                repet = 1
            }
            
            if(gra == 0){
                   // variáveis gráfico (inicio)
                var trace = {
                          x: math.zeros(NPART)._data,
                          y: math.zeros(NPART)._data,
                          mode: 'markers',
                          type: 'scatter'
                        };
                    
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
                   // variáveis gráfico (fim)
            }
            

            for(var t = 0;t < repet; t++ ){  
                var pso = new PSO({
                    npart: NPART,
                    dim: DIM,
                    stopc: STOPC,
                    maxIter: MAXITER,
                    func: this.th// determina a função a ser utilizada           
                });
                    

                var maxIteration = pso.maxIter;
                var iterations = maxIteration;
                                     

                for (var k = 0; k < iterations; k++){ // interrompe a execução após número máximo de iterações.              
                   
                    let pontosx = math.zeros(pso.npart)._data
                    let pontosy = math.zeros(pso.npart)._data
          
                    for(var j2 = 0; j2 < pso.npart; j2++){
                      pontosx[j2] = pso.posicoes[j2][0]
                      pontosy[j2] = pso.posicoes[j2][1]               
                    }
                                        
                     
                    //SEPARANDO 5 MELHORES XFITS e A MÉDIA DE TODOS
                        var auxXFIT = pso.partMelhorFit // p.XFIT original; p.X1 não funciona; 
                        math.sort(auxXFIT)
                        var len = auxXFIT.length              
                                                   
                        if(gra == 1){
                            if(t == 0){
                                fits1.push((auxXFIT[0] + auxXFIT[1] + auxXFIT[2] + auxXFIT[3] + auxXFIT[4])/5)                               
                                media1.push(math.mean(auxXFIT))
                                ultimoXfit1 = pso.partMelhorFit[pso.melhorParticula];
                                ultimox1 = pso.partMelhorPos[pso.melhorParticula];
                            }
                            if(t == 1){
                                fits2.push((auxXFIT[0] + auxXFIT[1] + auxXFIT[2] + auxXFIT[3] + auxXFIT[4])/5)                               
                                media2.push(math.mean(auxXFIT))
                                ultimoXfit2 = pso.partMelhorFit[pso.melhorParticula];
                                ultimox2 = pso.partMelhorPos[pso.melhorParticula];
                            }
                            if(t == 2){
                                fits3.push((auxXFIT[0] + auxXFIT[1] + auxXFIT[2] + auxXFIT[3] + auxXFIT[4])/5)                               
                                media3.push(math.mean(auxXFIT))
                                ultimoXfit3 = pso.partMelhorFit[pso.melhorParticula];
                                ultimox3 = pso.partMelhorPos[pso.melhorParticula];
                            }
                            if(t == 3){
                                fits4.push((auxXFIT[0] + auxXFIT[1] + auxXFIT[2] + auxXFIT[3] + auxXFIT[4])/5)
                                media4.push(math.mean(auxXFIT))
                                ultimoXfit4 = pso.partMelhorFit[pso.melhorParticula];
                                ultimox4 = pso.partMelhorPos[pso.melhorParticula];
                            }
                            if(t == 4){
                                fits5.push((auxXFIT[0] + auxXFIT[1] + auxXFIT[2] + auxXFIT[3] + auxXFIT[4])/5)
                                media5.push(math.mean(auxXFIT))
                                ultimoXfit5 = pso.partMelhorFit[pso.melhorParticula];
                                ultimox5 = pso.partMelhorPos[pso.melhorParticula];
                            }
                       }
                      //imprimindo gráfico (inicio)
                 
                 
                         if(gra == 0){   
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
                        cont=cont +1 
                        console.log(cont)
                        //imprimindo gráfico (fim)               
                        //setTimeout(proximoPasso, 200); 
                      pso.passo();
                     }  
                   
                    //console.log("esse", fits1, "length", fits1[0])  // fits1 não guarda array. guarda o trolotinho                                                                
                        
            }
            
            
              if(gra == 1){           
                //imprime gráficos 5 melhores
                
                var indices = [] 
                var indices2 = []                      
                var fits = [] // variável XFITS Melhores
                var maiorfits = fits1.length;
                
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
                                                                          
                var desvmed = math.std(fits) // definindo desvio padrão
                
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
                
                //imprimindo graficos

                Plotly.newPlot('myDiv', data2, layout);
                Plotly.newPlot('myDiv1', data3, layout2);
                Plotly.newPlot('myDiv11', data11, layout11);
                Plotly.newPlot('myDiv12', data12, layout12);
                Plotly.newPlot('myDiv13', data13, layout13);
                Plotly.newPlot('myDiv14', data14, layout14);
                Plotly.newPlot('myDiv15', data15, layout15);

            
                //gravando arquivo csv
                    var produtos = [
                    { Execucao: '01',
                    MelhorFitness: fits1[0],
                    Media5melhoresFitness: ((fits1[0]+fits1[1]+fits1[2]+fits1[3]+fits1[4])/5),
                    UltimoXFIT: ultimoXfit1,
                    UltimaPosicao: ultimox1
                    },
                    { Execucao: '02',
                    MelhorFitness: fits2[0],
                    Media5melhoresFitness: (fits2[0]+fits2[1]+fits2[2]+fits2[3]+fits2[4])/5,
                    UltimoXFIT: ultimoXfit2,
                    UltimaPosicao: ultimox2
                    },
                    { Execucao: '03',
                    MelhorFitness: fits3[0],
                    Media5melhoresFitness: (fits3[0]+fits3[1]+fits3[2]+fits3[3]+fits3[4])/5,
                    UltimoXFIT: ultimoXfit3,
                    UltimaPosicao: ultimox3
                    },
                    { Execucao: '04',
                    MelhorFitness: fits4[0],
                    Media5melhoresFitness: (fits4[0]+fits4[1]+fits4[2]+fits4[3]+fits4[4])/5,
                    UltimoXFIT: ultimoXfit4,
                    UltimaPosicao: ultimox4
                    },
                    { Execucao: '05',
                    MelhorFitness: fits5[0],
                    Media5melhoresFitness: (fits5[0]+fits5[1]+fits5[2]+fits5[3]+fits5[4])/5,
                    UltimoXFIT: ultimoXfit5,
                    UltimaPosicao: ultimox5
                    }];
                    

                    var csv = 'Execucao, Melhor Fitness, Media 5 melhores Fitness, Ultimo XFIT, Ultima Posição X\n';

                    produtos.forEach(function(row) {
                     csv += row.Execucao;
                     csv += ','+ row.MelhorFitness;
                     csv += ','+ row.Media5melhoresFitness;
                     csv += ','+ row.UltimoXFIT;
                     csv += ','+ row.UltimaPosicao;
                     csv += '\n';
                    });       
                    
                    const jsonData = encodeURIComponent('{"is_valid": true}')
                    //this.myUrl = `data:text/plain;charset=utf-8,${jsonData}`
                    this.myUrl = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
                    this.myFilename = 'results.csv'              
                
                }                       
                 
                //reiniciando variáveis para uso de dados em inserção manual ou por upload de arquivo csv
                localStorage.dim1 = ''                      // number of dimensions 
                localStorage.npart1 = ''                    // number of particles       
                localStorage.maxIter = ''                  // max number of iterations    
                localStorage.stopc1 = ''                  // consecutive evaluations  
            
                this.dim1 = '';
                this.npart1 = '';
                this.maxIter = '';
                this.stopc1 = '';                           
                
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
  font-family: serif;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: justify;
  line-height: 1.8; 
}

.text1 p a  {
  text-decoration: none;
  color: blue;
    
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
.conteiner .text-pso {
  width: auto;
  text-align: left;
  position: absolute;
  margin-top: -20px;
}
.conteiner .box-params {
  
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 0 0px -10px;
  padding: 40px 30px 30px 25px;
  width: 40%;
  float: left;
  color: black;
  font-size: 15px;

}

.buttons .button-upload .process-button {
  
  padding:auto;
  margin-top: 20px;
  margin: 20px 5px 20px 20px; 
  padding: 20px 80px 20px 80px;
  text-align: center;
  line-height: 3px;
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

h1 {
  text-align: left;
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

button:hover {
  background-color: green;
  color: white;
  text-align: right;
}

label {
  display: table-cell;
    float: left;
    clear: left;
    width: 200px;
  color: black;
  margin:0px;
  padding:2px;
  font-family:AR CENA;
  font-size:20px;
}
input[type=number] {
  border: 2px solid #00BFFF;
  border-radius: 4px;
  display: table-cell;
  float: left;
  width: 100px;
  height: 30px;
  position: relative;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
div.row{
    display:table-row;
}

.text-reader {
  position: left;
  overflow: hidden;
  display: inline-table;
  float: left;

  /* Fancy button style 😎 */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}

input.larger {
        transform: scale(2);
        margin: 0px;
      }

</style>
