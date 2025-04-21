import { Shape } from './Shape';

export class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}
