function getDataForWebpackConstants() {
    return `{
  "ENVS": {
    "production": "production",
    "development": "development",
    "staging": "staging",
    "test": "test"
  }
}
      
`
}

function getDataForApiHosts() {
    return `{
  "test": "http://test/api",
  "staging": "http://test/api",
  "development": "http://test/api",
  "production": "http://test/api"
}      
` 
}

function getDataForWebpackConfig(appliactionName) {
    appliactionName = appliactionName || '';
    return `const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const currentEnv = process.env.NODE_ENV;
const currentHost = require('./api-hosts')[currentEnv];
const {ENVS} = require('./webpack.constants');

const version = (function () {
    const date = new Date();
    const v = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ].join('_');

    fs.writeFileSync(path.join(__dirname, 'version.txt'), v, 'utf8');

    return v;
})();

const PLUGINS = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.ejs'),
        hash: (currentEnv !== ENVS.production),
        mode: currentEnv,
        version: version,
        title: "${appliactionName}"
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(currentEnv),
        'process.env.hostName': JSON.stringify(currentHost),
        'process.env.version': JSON.stringify(version)
    })
];

if (currentEnv === ENVS.production) {
    [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ].forEach((plugin) => PLUGINS.push(plugin));
}

const LOADERS = [
    {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    'es2015',
                    'react',
                    'stage-0',
                    'stage-1',
                    'stage-2',
                    'stage-3'
                ]
            }
        }
    },
    {
        test: /\\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
        test: /\\.css$/,
        loaders: ['style-loader', 'css-loader']
    },
    {
        test: /\\.(svg|png|jpg|jpeg|gif)$/,
        exclude: /gltf/,
        loader: 'url-loader?limit=5120&name=./[hash].[ext]'
    },
    {
        test: /\\.(mp3|mp4)$/,
        loader: 'file-loader'
    },
    {
        test: /\\.(ttf|otf|eot|woff(2)?)(\\?[a-z0-9]+)?$/,
        loader: 'file-loader'
    },
    {
        test: /\\.(gltf)$/,
        loader: 'gltf-loader-2'
    },
    {
        test: /gltf.*\\.(bin|png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[hash:7].[ext]'
        }
    }
];

module.exports = {
    entry: ['babel-polyfill',  __dirname + '/src/index.js'],
    mode: (currentEnv === ENVS.production ? currentEnv : ENVS.development),
    devtool: (currentEnv === ENVS.production ? '' : 'source-map'),
    devServer: {
        port: 3078,
        host: '0.0.0.0',
        contentBase: './',
        inline: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: LOADERS
    },
    resolve: {
        alias: {
            enums: path.resolve(__dirname, 'src/core/enums/'),
            hooks: path.resolve(__dirname, 'src/hooks/'),
            helpers: path.resolve(__dirname, "src/core/helpers/helpers.js"),
            config: path.resolve(__dirname, "src/core/settings/config.js"),
        }
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].bundle.js?version=' + version
    },
    plugins: PLUGINS
}; 
` 
}

function getEjsFile() {
    return `<% const version = htmlWebpackPlugin.options.version %>
<% const title = htmlWebpackPlugin.options.title %>
<!----------------------------------------------------------->
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" type="image/png"
          href="image.png?v=<%= version %>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <title><%= title %></title>
</head>
<body>

<div id="root"></div>

</body>
</html>
`
}

module.exports = {
    getEjsFile,
    getDataForWebpackConstants,
    getDataForApiHosts,
    getDataForWebpackConfig,
}