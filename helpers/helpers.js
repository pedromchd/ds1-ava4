const helpers = {
    parseBRL: function (value) {
        const BRL = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return BRL.format(value);
    },
    deptoNome: function (depto) {
        const departamentos = [
            'Administrativo',
            'Designer',
            'Contabilidade',
            'Fábrica'
        ];
        return departamentos.at(parseInt(depto) - 1);
    }
};

module.exports = helpers;
