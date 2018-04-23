const path = require('path');

let tsconfigOverride = {
    // declaration: true,
    // declarationDir: 'types',
    sourceMap: false,
    noEmit: false
};

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: 'ts-polyfill.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tsPolyfill',
        libraryTarget: 'umd'
    },
    // devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: tsconfigOverride
                }
            },
        ]
    },
};
