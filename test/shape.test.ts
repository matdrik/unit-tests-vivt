import { Rectangle } from '../src/shapes/Rectangle';
import { Circle } from '../src/shapes/Circle';
import { Triangle } from '../src/shapes/Triangle';

describe('Расчет площади фигур (метод getArea)', () => {
    test('Прямоугольник (класс Rectangle)', () => {
        const rect = new Rectangle(4, 5);
        expect(rect.getArea()).toBe(20);
    });

    test('Круг (класс Circle)', () => {
        const circle = new Circle(1);
        expect(circle.getArea()).toBeCloseTo(Math.PI);
    });

    test('Треугольник (класс Triangle)', () => {
        const triangle = new Triangle(10, 5);
        expect(triangle.getArea()).toBe(25);
    });
});
