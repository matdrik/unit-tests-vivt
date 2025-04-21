import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(private base: number, private height: number) {
        super();
    }

    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}
