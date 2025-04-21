import { RomanConverter } from '../src/RomanConverter';

describe('RomanConverter', () => {
    // Группа тестов для корректных римских чисел
    test('Valid roman numerals', () => {
        // Проверяем обычное римское число
        expect(RomanConverter.romanToInt('XII')).toBe(12); // 10 + 1 + 1

        // Проверка правильной обработки вычитания (IV = 5 - 1 = 4)
        expect(RomanConverter.romanToInt('IV')).toBe(4);

        // Проверка сложного корректного случая (MCMXC = 1990)
        // M(1000) + CM(900) + XC(90)
        expect(RomanConverter.romanToInt('MCMXC')).toBe(1990);

        // Проверка, что число больше 1999 отклоняется (по заданному ограничению)
        expect(RomanConverter.romanToInt('MM')).toBeNull(); // 2000 — не допускается
    });

    // Группа тестов для некорректных римских чисел
    test('Invalid roman numerals', () => {
        // 'IIII' — некорректная форма (в римской записи нельзя повторять 'I' более 3 раз)
        expect(RomanConverter.romanToInt('IIII')).toBeNull();

        // Строка, содержащая недопустимые символы
        expect(RomanConverter.romanToInt('ABC')).toBeNull();

        // Пустая строка должна возвращать null (не может быть валидным римским числом)
        expect(RomanConverter.romanToInt('')).toBeNull();
    });

    // Группа тестов для преобразования арабских чисел в римские
    test('Int to roman', () => {
        // Проверяем, что число 12 правильно конвертируется в XII
        expect(RomanConverter.intToRoman(12)).toBe('XII');

        // Проверяем конвертацию числа 1990 в сложную комбинацию символов
        expect(RomanConverter.intToRoman(1990)).toBe('MCMXC');

        // Проверяем корректное преобразование вычитательной формы (4 = IV)
        expect(RomanConverter.intToRoman(4)).toBe('IV');
    });
});
