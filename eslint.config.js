'use strict';

const init = require('eslint-config-metarhia');

init[0].rules['no-sparse-arrays'] = 'off';
init[0].rules['no-undef'] = 'off';

module.exports = init;
