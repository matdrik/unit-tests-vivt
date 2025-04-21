import { RomanConverter } from '../src/RomanConverter';

describe('Конвертер римских цифр (класс RomanConverter)', () => {
    test('Ввод существующих римских цифр (метод romanToInt)', () => {
        expect(RomanConverter.romanToInt('XII')).toBe(12);
        expect(RomanConverter.romanToInt('IV')).toBe(4);
        expect(RomanConverter.romanToInt('MCMXC')).toBe(1990);
        expect(RomanConverter.romanToInt('MM')).toBeNull(); // не поддерживается (больше 1999)
    });

    test('Ввод несуществующих римских цифр (метод romanToInt)', () => {
        expect(RomanConverter.romanToInt('IIII')).toBeNull();
        expect(RomanConverter.romanToInt('ABC')).toBeNull();
        expect(RomanConverter.romanToInt('')).toBeNull();
    });

    test('Из арабских в римские - intToRoman', () => {
        expect(RomanConverter.intToRoman(12)).toBe('XII');
        expect(RomanConverter.intToRoman(1990)).toBe('MCMXC');
        expect(RomanConverter.intToRoman(4)).toBe('IV');
    });
});
