import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';

export const buildDevServer = ({ port, paths }: BuildOptions): DevServerConfiguration => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
