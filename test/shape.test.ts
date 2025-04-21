import { Rectangle } from '../src/shapes/Rectangle';
import { Circle } from '../src/shapes/Circle';
import { Triangle } from '../src/shapes/Triangle';

// Группа тестов для проверки корректности расчёта площади разных фигур
describe('Area calculations (OOP)', () => {
    test('Rectangle area', () => {
        // Создаем экземпляр прямоугольника со сторонами 4 и 5
        const rect = new Rectangle(4, 5);

        // Проверяем, что площадь прямоугольника считается как 4 * 5 = 20
        expect(rect.getArea()).toBe(20);
    });

    test('Circle area', () => {
        // Создаем экземпляр круга с радиусом 1
        const circle = new Circle(1);

        // Ожидаемое значение площади круга: π * r² = π * 1² = π
        // Используем toBeCloseTo, так как число π — нецелое и округляется
        expect(circle.getArea()).toBeCloseTo(Math.PI);
    });

    test('Triangle area', () => {
        // Создаем экземпляр треугольника с основанием 10 и высотой 5
        const triangle = new Triangle(10, 5);

        // Площадь треугольника: (1/2) * основание * высота = 0.5 * 10 * 5 = 25
        expect(triangle.getArea()).toBe(25);
    });
});
