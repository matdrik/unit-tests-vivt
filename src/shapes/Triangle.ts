import { Shape } from './Shape';

/**
 * Класс, представляющий треугольник (по основанию и высоте).
 * Наследуется от абстрактного класса Shape.
 */
export class Triangle extends Shape {
    /**
     * @param base Основание треугольника
     * @param height Высота, опущенная на основание
     */
    constructor(private base: number, private height: number) {
        super();
    }

    /**
     * Вычисляет площадь треугольника по формуле: 0.5 * base * height
     */
    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}
