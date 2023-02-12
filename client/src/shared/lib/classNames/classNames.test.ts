import { classNames } from './classNames';

describe('ClassNames function test', () => {
    test(('Default function behavior'), () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('Function behavior with additionals', () => {
        expect(classNames('someClass', {}, ['someAdditional'])).toBe('someClass someAdditional');
    });

    test('Function behavior with mods and additionals', () => {
        const expected = 'someClass someAdditional someMode someModeHovered';
        expect(
            classNames(
                'someClass',
                { someMode: true, someModeHovered: true },
                ['someAdditional'],
            ),
        ).toBe(expected);
    });

    test('Function behavior with mods falsy and additionals', () => {
        const expected = 'someClass someAdditional someMode';
        expect(
            classNames(
                'someClass',
                { someMode: true, someModeHovered: false },
                ['someAdditional'],
            ),
        ).toBe(expected);
    });

    test('Function behavior with mods undefined and additionals', () => {
        const expected = 'someClass someAdditional someMode';
        expect(
            classNames(
                'someClass',
                { someMode: true, someModeHovered: undefined },
                ['someAdditional'],
            ),
        ).toBe(expected);
    });

    test('Function behavior with main class, mods and additionals undefined', () => {
        const expected = 'mainClass someMode';
        expect(
            classNames(
                'mainClass',
                { someMode: true },
                [undefined],
            ),
        ).toBe(expected);
    });

    test('Function behavior with all undefined', () => {
        expect(classNames('')).toBe('');
    });
});
