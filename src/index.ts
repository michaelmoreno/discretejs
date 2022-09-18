type element = any
type set = element[]
type Propsition = boolean
type Predicate = (...xyz: element) => Propsition
type Quantifier = (P: Predicate | Quantifier, domain: set) => Propsition


const A: Quantifier = (P: Predicate, domain: set) => {
    for (let element of domain) {
        if (P(element) != true)
            return false
    }
    return true
}


const E: Quantifier = (P: Predicate, domain: set) => {
    for (let element of domain) {
        if (P(element))
            return true
    }
    return false
}


const All = A
const Exists = E
const forAll = A
const thereExists = E
