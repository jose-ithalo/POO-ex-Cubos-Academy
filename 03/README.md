![](https://i.imgur.com/xG74tOh.png)

# Exercício 03

## Fatura

Implemente uma classe `Fatura` que será responsável por registrar todos os lançamentos de compras no  
cartão de crédito de um cliente específico.

Ao criar um novo objeto instaciado a classe `Fatura`, será necessário informar o nome do cliente  
responsável pela fatura.

A classe terá duas funcionalidades.

a) Deverá registrar o produto, numa lista de transações, onde o produto terá o seguinte formato:

``` 
{
  descricao: 'Camisa Preta',
  valor: 5990,
  quantidade: 2
},
{
  descricao: 'Camisa Azul',
  valor: 7900,
  quantidade: 1
}
```

b) Deverá fechar a fatura. Essa funcionalidade deverá retornar o texto a seguir:

```
Cliente: João

2 - Camisa Preta (R$: 59,90) = R$ 119,80  
1 - Camisa Azul (R$: 79,00) = R$ 79,00

Total: R$ 198,80
```

Não é necessário transpilar o código.

Faça o teste com outor exemplos.

Faça o commit do resultado.

---
