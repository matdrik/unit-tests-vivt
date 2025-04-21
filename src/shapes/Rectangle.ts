import { Shape } from './Shape';

/**
 * Класс, представляющий прямоугольник.
 * Наследуется от абстрактного класса Shape.
 */
export class Rectangle extends Shape {
    /**
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     */
    constructor(private width: number, private height: number) {
        super();
    }

    /**
     * Вычисляет площадь прямоугольника по формуле: width * height
     */
    getArea(): number {
        return this.width * this.height;
    }
}
