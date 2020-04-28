const path = require('path');
let customerWebpackConfig;

try {
    customerWebpackConfig = require(path.resolve(".") + "/webpack.config");
} catch (e) {
    customerWebpackConfig = {};
}
module.exports = customerWebpackConfig;
