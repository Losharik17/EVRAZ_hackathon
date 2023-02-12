import { classNames } from 'shared/lib';
import { useTheme } from 'shared/lib/theme';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <AppRouter />
            </div>
        </div>
    );
};
