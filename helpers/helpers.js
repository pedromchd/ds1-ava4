const helpers = {
    parseBRL: function (value) {
        const BRL = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return BRL.format(value);
    }
};

module.exports = helpers;
