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

O cálculo do salário líquido envolve os descontos de INSS e IRRF (Imposto de Renda Retido na Fonte). Vamos detalhar cada um deles:

### INSS (Instituto Nacional do Seguro Social)

O INSS é calculado sobre o salário bruto do trabalhador e tem alíquotas progressivas. Os valores atualizados das alíquotas do INSS são os seguintes:

- 7,5%: para salários de até R$ 1.320,00;
- 9%: para salários entre R$ 1.320,01 e R$ 2.571,29;
- 12%: para salários entre R$ 2.571,30 e R$ 3.856,94;
- 14%: para salários entre R$ 3.856,95 e R$ 7.507,49.

O cálculo do INSS é feito multiplicando o salário bruto pela alíquota correspondente.

### IRRF (Imposto de Renda Retido na Fonte)

O cálculo do IRRF permanece baseado na tabela de alíquotas que varia de acordo com a faixa salarial. A tabela de alíquotas do IRRF, com os valores atualizados, é a seguinte:

| Base de Cálculo mensal (R$) | Alíquota (%) |
|-----------------------------|--------------|
| Até 2.112,00                | Isento       |
| De 2.112,01 até 2.826,65    | 7,5          |
| De 2.826,66 até 3.751,05    | 15           |
| De 3.751,06 até 4.664,68    | 22,5         |
| Acima de 4.664,68           | 27,5         |

O cálculo do IRRF envolve aplicar a alíquota correspondente a cada faixa sobre a parcela do salário que se enquadra naquela faixa. Por exemplo, para um salário de R$ 5.000:

- Isento até R$ 2.112,00;
- 7,5% sobre R$ 714,65 (R$ 2.826,65 - R$ 2.112,00);
- 15% sobre R$ 924,40 (R$ 3.751,05 - R$ 2.826,65);
- 22,5% sobre R$ 913,36 (R$ 4.664,68 - R$ 3.751,05);
- 27,5% sobre R$ 335,32 (R$ 5.000 - R$ 4.664,68).

Somando as alíquotas aplicadas, você obterá o valor total do IRRF.

### Salário Líquido

Finalmente, o salário líquido é calculado subtraindo o valor do INSS e do IRRF do salário bruto:

Salário Líquido = Salário Bruto - INSS - IRRF

## Perguntas a serem respondidas

1. Quem ganha o maior salário?
2. Quem ganha o menor salário?
3. Pesquisar empregados por parte do nome.
4. Classificar empregados por setor de trabalho.
5. Quantos empregados trabalham no setor administrativo?

## Entrega

A entrega do projeto está prevista para **28 de agosto** e valerá **3 pontos**. Para ajudar na compreensão, você pode consultar o projeto de exemplo de CRUD desenvolvido em aula [neste repositório](https://github.com/ewbriao1978/Aula-middleware-controller).

Lembre-se de seguir as instruções e utilizar as tecnologias mencionadas para desenvolver o CRUD e responder às perguntas propostas.
