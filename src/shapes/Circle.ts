import { Shape } from './Shape';

/**
 * Класс, представляющий круг.
 * Наследуется от абстрактного класса Shape.
 */
export class Circle extends Shape {
    /**
     * @param radius Радиус круга
     */
    constructor(private radius: number) {
        super();
    }

    /**
     * Вычисляет площадь круга по формуле: π * r^2
     */
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
