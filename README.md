# kv-grpc-matheus-thiago
## Autores

* [Matheus Felipe Ferreira Martins](https://github.com/MatheusFFM)
* [Thiago Jorge Queiroz Silva](https://github.com/ThiagoQueirozSilva)

## Sobre o sistema

Este trabalho é um Key-Value store in memory utilizando o gRPC.

As primitivas do Key-Value Store são:

- put(key, value)
- get(key) : value
- getAllKeys() : Key[]

## Execução

```bash
# Clonar o repositório
$ git clone https://github.com/PUC-DISCIPLINAS/kv-grpc-matheus-thiago.git
```

### Execução - Servidor

```bash
# Executar o servidor
$ node client.js
```

Retorna que o servidor está pronto se a execução ocorrer com sucesso.

### Execução - Cliente

```bash
# Executar o cliente
$ node client.js
```