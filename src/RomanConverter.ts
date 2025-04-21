export class RomanConverter {
    private static romanMap: Record<string, number> = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000,
    };

    static romanToInt(roman: string): number | null {
        const s = roman.toUpperCase();
        let total = 0;
        let prev = 0;

        for (const char of s) {
            const value = this.romanMap[char];
            if (!value) return null;

            total += value > prev ? value - 2 * prev : value;
            prev = value;
        }

        if (total < 1 || total > 1999) return null;
        const reconstructed = this.intToRoman(total);
        return reconstructed === s ? total : null;
    }

    static intToRoman(num: number): string {
        const numerals: [number, string][] = [
            [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
            [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
            [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
        ];

        let result = '';
        for (const [value, symbol] of numerals) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }

        return result;
    }
}
