function calcularSalarioLiquido(salarioBruto) {
    // Tabela de alíquotas do INSS
    const aliquotasINSS = [
        { limite: 1320, aliquota: 0.075 },
        { limite: 2571.29, aliquota: 0.09 },
        { limite: 3856.94, aliquota: 0.12 },
        { limite: 7507.49, aliquota: 0.14 }
    ];

    // Tabela de alíquotas do IRRF
    const aliquotasIRRF = [
        { limite: 2112, aliquota: 0 },
        { limite: 2826.65, aliquota: 0.075 },
        { limite: 3751.05, aliquota: 0.15 },
        { limite: 4664.68, aliquota: 0.225 },
        { limite: Infinity, aliquota: 0.275 }
    ];

    // Cálculo do INSS
    let descontoINSS = 0;
    for (const aliquota of aliquotasINSS) {
        if (salarioBruto <= aliquota.limite) {
            descontoINSS = salarioBruto * aliquota.aliquota;
            break;
        } else {
            descontoINSS = aliquota.limite * aliquota.aliquota;
        }
    }

    // Cálculo da Base de Cálculo para o IRRF
    const baseCalculoIRRF = salarioBruto - descontoINSS;

    // Cálculo do IRRF
    let descontoIRRF = 0;
    for (const aliquota of aliquotasIRRF) {
        if (baseCalculoIRRF <= aliquota.limite) {
            descontoIRRF = baseCalculoIRRF * aliquota.aliquota;
            break;
        } else {
            descontoIRRF = aliquotasIRRF.at(-1).limite * aliquotasIRRF.at(-1).aliquota;
        }
    }

    // Cálculo do salário líquido
    const salarioLiquido = salarioBruto - descontoINSS - descontoIRRF;

    return salarioLiquido.toFixed(2);
}

module.exports = { calcularSalarioLiquido };
