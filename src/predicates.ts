import { element, Predicate } from './index'

const AddToZero: Predicate = (...xyz: element) => {
    return xyz.reduce((a, b) => a + b) == 0
}

const IsPositive: Predicate = (n: number) => {
    return n > 0
}

const IsMultiplicativeInverse: Predicate = (x: number, y: number) => {
    return x * y == 1
}

export { AddToZero, IsPositive, IsMultiplicativeInverse }
