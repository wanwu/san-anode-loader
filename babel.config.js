/**
 * @file babel config
 */
 module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins: ["@babel/plugin-proposal-class-properties"],
    exclude: 'node_modules'
};
