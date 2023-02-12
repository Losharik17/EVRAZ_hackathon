import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/buildOptions';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    // const fileLoader = {
    //     test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    //     use: [
    //         { loader: 'file-loader' },
    //     ],
    // };

    // const svgLoader: webpack.RuleSetRule = {
    //     test: /\.svg$/,
    //     type: 'asset/resource',
    //     generator: { filename: options.paths.assets.svg },
    // };

    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgUrlLoader: webpack.RuleSetRule = {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
    };

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
    };

    const babelLoader: webpack.RuleSetRule = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] },
        },
    };

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        // fileLoader,
        imgLoader,
        svgUrlLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
};
