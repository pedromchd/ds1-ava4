# Desenvolvimento de CRUD em NODEJS + HANDLEBARS + Sequelize + MYSQL

Neste projeto, vamos desenvolver um CRUD mínimo para lidar com os seguintes campos em uma tabela de empregados:

- **id**: int a.i.
- **nome**: varchar
- **salario_bruto**: decimal
- **departamento**: enum

Os departamentos disponíveis são:
1. Administrativo
2. Designer
3. Contabilidade
4. Fábrica

## Funcionalidades do CRUD

O CRUD irá incluir as seguintes funcionalidades:

1. Criar um novo empregado com informações como nome, salário bruto e departamento.
2. Ler as informações de um empregado, incluindo id, nome, salário bruto, SALÁRIO LÍQUIDO e a descrição do departamento.
3. Atualizar as informações de um empregado existente.
4. Deletar um empregado do banco de dados.

## Cálculo do Salário Líquido

O cálculo do salário líquido será feito da seguinte forma:

- INSS = Salário Bruto * 11%
- IRPF = Calculado com base em uma tabela de alíquotas, variando de acordo com a faixa salarial.

Tabela de Alíquotas do IRPF:

| Base de Cálculo mensal (R$) | Alíquota (%) |
|-----------------------------|--------------|
| Até 1.903,98                | Isento       |
| De 1.903,98 até 2.826,65    | 7,5          |
| De 2.826,65 até 3.751,06    | 15           |
| De 3.751,06 até 4.664,68    | 22,5         |
| Acima de 4.664,68           | 27,5         |

Exemplo de cálculo do IRPF:
- Para um salário de 5000 reais:
  - Isento até 1.903,98
  - 7,5% de 2.826,65 (2826 * 7,5%)
  - 15% de 3751,06 (valor entre 3751,06 e 4664,68)
  - 27,5% de (5000 - 4664,68)
- Somando as alíquotas, teremos o valor do IRPF.
- Salário líquido = Salário Bruto - INSS - IRPF

## Perguntas a serem respondidas

1. Quem ganha o maior salário?
2. Quem ganha o menor salário?
3. Pesquisar empregados por parte do nome.
4. Classificar empregados por setor de trabalho.
5. Quantos empregados trabalham no setor administrativo?

## Entrega

A entrega do projeto está prevista para **28 de agosto** e valerá **3 pontos**. Para ajudar na compreensão, você pode consultar o projeto de exemplo de CRUD desenvolvido em aula [neste repositório](https://github.com/ewbriao1978/Aula-middleware-controller).

Lembre-se de seguir as instruções e utilizar as tecnologias mencionadas para desenvolver o CRUD e responder às perguntas propostas.
