function calcularSalarioLiquido(salarioBruto) {
    // Tabelas de alíquotas do INSS e IRRF
    const aliquotasINSS = [
        { limite: 1320, aliquota: 0.075 },
        { limite: 2571.29, aliquota: 0.09 },
        { limite: 3856.94, aliquota: 0.12 },
        { limite: 7507.49, aliquota: 0.14 }
    ];

    const aliquotasIRRF = [
        { limite: 2112, aliquota: 0 },
        { limite: 2826.65, aliquota: 0.075 },
        { limite: 3751.05, aliquota: 0.15 },
        { limite: 4664.68, aliquota: 0.225 },
        { limite: Infinity, aliquota: 0.275 }
    ];

    // Cálculo do desconto de acordo com a tabela de alíquotas
    function calcularDesconto(valor, aliquotas) {
        for (const aliquota of aliquotas) {
            if (valor <= aliquota.limite) {
                return valor * aliquota.aliquota;
            } else {
                valor = aliquota.limite * aliquota.aliquota;
            }
        }
        return 0;
    }

    const descontoINSS = calcularDesconto(salarioBruto, aliquotasINSS);
    const baseCalculoIRRF = salarioBruto - descontoINSS;
    const descontoIRRF = calcularDesconto(baseCalculoIRRF, aliquotasIRRF);

    const salarioLiquido = salarioBruto - descontoINSS - descontoIRRF;

    return salarioLiquido.toFixed(2);
}

module.exports = { calcularSalarioLiquido };
