export class RomanConverter {
    // Карта римских символов и их значений
    private static romanMap: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    /**
     * Преобразует римское число в арабское.
     * @param roman Строка с римским числом.
     * @returns Число или null, если строка некорректна или превышает 1999.
     */
    static romanToInt(roman: string): number | null {
        const s = roman.toUpperCase(); // Приводим к верхнему регистру для универсальности
        let total = 0; // Итоговая сумма
        let prev = 0;  // Предыдущее значение символа (используется для вычитания)

        for (const char of s) {
            const value = this.romanMap[char]; // Получаем значение символа из карты

            // Если символ не существует в карте — возвращаем null (ошибка)
            if (!value) return null;

            // Если текущий символ больше предыдущего — это случай вычитания
            // Например, IV = 5 - 2 * 1 = 3 (уже добавили 1 ранее, поэтому вычитаем удвоенное)
            total += value > prev ? value - 2 * prev : value;

            // Запоминаем текущее значение как предыдущее для следующего символа
            prev = value;
        }

        // Проверяем, чтобы итоговое число было в допустимом диапазоне
        if (total < 1 || total > 1999) return null;

        // Дополнительно проверяем корректность записи — сравниваем с обратным преобразованием
        const reconstructed = this.intToRoman(total);

        // Если результат преобразования не совпадает с исходной строкой — ошибка
        return reconstructed === s ? total : null;
    }

    /**
     * Преобразует арабское число в римское.
     * @param num Арабское число.
     * @returns Римская строка.
     */
    static intToRoman(num: number): string {
        // Список пар: значение и соответствующий римский символ
        const numerals: [number, string][] = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
        ];

        let result = ''; // Итоговая римская строка

        // Проходим по всем парам от большего к меньшему
        for (const [value, symbol] of numerals) {
            // Пока число больше или равно текущему значению — вычитаем и добавляем символ
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }

        // Возвращаем собранную строку
        return result;
    }
}
