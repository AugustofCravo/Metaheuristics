import  math from "mathjs";
import {sphere, levi, ackley, alpine, ellipsoid, griewank, rastrigin, rosenbrock} from "../../lib/sapso/multdim/multidim_functions.js";
import {debi, himmelblau, impossible, levi13, schaffer2, schaffer4, schwefel} from "../../lib/sapso/twodim/twodim_functions.js";
import {getRow,initFitness} from "../../lib/functions.js";

    
export function PSO(opt) {
    var padrao = {         
        func: '',
        npart: 20,
        dim: 2,
        maxIter: 100,
        grau: 4,
        stopc: 0.000000001,
        passos: 10000,
        fitness: function (posi) {
            var soma = 0;
            for (var i = 0; i < posi.length; i++) {
                soma += posi[i] * posi[i];
            }
            return Math.sqrt(soma);
        },
        criteria: function (posi) {
            return this.fitness(posi) <= 1.0e-2;
        },
        C1: 2.05,
        C2: 2.05,
        X: 0.729,
        variacao: 1.0e-12
    };
    opt || (opt = {});
    for (var o in padrao){
        if (opt.hasOwnProperty(o)){
        } else {
            opt[o] = padrao[o];
        }
        this[o] = opt[o];
    }
    this.opt = opt;
    this.fitnessAtual = [];
    this.partMelhorFit = [];
    this.velocidades = [];
    this.posicoes = [];
    this.partMelhorPos = [];
    this.arestas = [];
    this.melhorParticulaNeighs = [];
    this.melhorParticula = 0;
    this.passoC = 0;
    this.inicializar();
}

PSO.prototype.rnd = function () {
    return Math.random() - 0.5;
};

PSO.prototype.inicializar = function () {
    var n, link;
    //for (var i = 0; i < this.npart; i++) {
    //    this.partMelhorFit.push(Number.MAX_VALUE);       
    //    this.fitnessAtual.push(Number.MAX_VALUE);
    //}
    //cria particulas randomicas
    for (n = 0; n < this.npart; n++) {
        this.posicoes.push([]);
        this.partMelhorPos.push([]);
        this.velocidades.push([]);
        for (var d = 0; d < this.dim; d++) {
            this.posicoes[n].push(this.rnd());
            this.partMelhorPos[n].push(this.posicoes[n][d]);
            this.velocidades[n].push(0);
        }  
    }
    this.partMelhorFit = initFitness(this.posicoes, this.npart, this.func);
    this.fitnessAtual = initFitness(this.posicoes, this.npart, this.func);    
    //cria arestas randomicas para individuos 
    for (n = 0; n < this.npart; n++) {
        this.arestas.push([]);
        for (var e = 0; e < this.grau; e++) {
            link = n;
            while ( n==link || (this.arestas[n].indexOf(link)>-1)){
                link = Math.floor(this.npart * Math.random());
            }
            this.arestas[n].push(link);
        }
    }
};

PSO.prototype.reset = function(opt){
    PSO.call(this, opt || this.opt);
};

PSO.prototype.passo = function () {
    this.fitnessAtual = this.posicoes.map(this.fitness, this);
    this.substituirMelhoresParticulas();
    this.updateVelocidades();
    this.updatePosicoes();
};

PSO.prototype.evolue = function () {
    this.passoC = 0;
    while (!this.sucesso() && (this.passoC++<this.passos)){
        this.passo();
    }
    return this.resultado();
};

PSO.prototype.sucesso = function () {
    return this.criteria.call(this, this.resultado());
};

PSO.prototype.resultado = function () {
    return this.partMelhorPos[this.melhorParticula];
};

PSO.prototype.updatePosicoes = function () {
    for (var n = 0; n < this.npart; n++) {
        for (var d = 0; d < this.dim; d++) {
            this.posicoes[n][d] += this.velocidades[n][d];
            this.posicoes[n][d] += this.rnd() * this.variacao;
        }
    }
};

PSO.prototype.updateVelocidades = function () {
    for (var n = 0; n < this.npart; n++) {
        for (var d = 0; d < this.dim; d++) {
            this.velocidades[n][d] = this.X * (this.velocidades[n][d]
                + this.C1 * Math.random() * (this.partMelhorPos[n][d] - this.posicoes[n][d])
                + this.C2 *  Math.random() * (this.partMelhorPos[this.melhorParticulaNeighs[n]][d] - this.posicoes[n][d])
                );
        }
    }
};

PSO.prototype.substituirMelhoresParticulas = function () {
    var n;
    //melhor fitness para cada particula
    for (n = 0; n < this.npart; n++) {
        if (this.fitnessAtual[n] < this.partMelhorFit[n]) {
            this.partMelhorFit[n] = this.fitnessAtual[n];
            for (var d = 0; d < this.dim; d++) {
                this.partMelhorPos[n][d] = this.posicoes[n][d];
            }
        }
    }
    //melhor particula para a vizinhança de i: g[i]
    var melhorLocalFitness;
    for (n = 0; n < this.npart; n++) {
        this.melhorParticulaNeighs[n] = n; //considera a melhor particula, a mesma
        melhorLocalFitness = this.partMelhorFit[n];
        for (var e in this.arestas[n]) { //para todos os neighs
            e = this.arestas[n][e];
            if (this.partMelhorFit[e] < melhorLocalFitness) { //se o seu fits é melhor que o atual
                melhorLocalFitness = this.partMelhorFit[e];
                this.melhorParticulaNeighs[n] = e;
            }
        }
        //melhor global
        if (this.partMelhorFit[n] < this.partMelhorFit[this.melhorParticula]) {
            this.melhorParticula = n;
        }
    }
};