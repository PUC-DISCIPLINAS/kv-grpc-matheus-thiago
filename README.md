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

# Entrar na pasta de código
$ cd kv-grpc-matheus-thiago/src

# Instalar dependências
$ npm i
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

Retorna uma lista de comandos possíveis. Eles são:
<hr>

**GET**: Esse comando recebe uma key e retorna um valor, é usado no formato "node client.js get ${key}". **Exemplo:**


```bash
# Executar o cliente para método GET
$ node client.js get 1
```
Nesse exemplo, o usuário digitou a key 1, então será retornado o valor do objeto com a key 1, ou uma mensagem de que não foi possível encontrar o objeto.

<hr>

**PUT**: Esse comando recebe uma key e um value, e cria um item com esses dados. **Exemplo**:
```bash
# Executar o cliente para método PUT
$ node client.js put 2 two
```
Nesse exemplo, o usuário digitou a key 2 com o valor "two", criando um objeto com esses dados.
```json
{
    "key": "2",
    "value": "two"
}
```

<hr>

**LIST**: Esse comando recebe nenhum parâmetro e retorna todos os itens cadastrados. **Exemplo**:

```bash
# Executar o cliente para método LIST
$ node client.js list
```

<hr>

Todos os comandos *são case insensitive*, logo escrevê-los com letras maiúsculas ou minúsculas tem o mesmo resultado.
