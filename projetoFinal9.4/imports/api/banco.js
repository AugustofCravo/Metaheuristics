import { Mongo } from "meteor/mongo";

export const Banco = new Mongo.Collection("banco");

//Comando que permite o usuário inserir dados direto no banco de dados (via página)
//Não aconselhável por falta de segurança

/*Banco.allow ({
    insert(name) {
      /* verificações de usuários e documentos,
      return true para permitir inserção 
      return true; 
    }
  });*/