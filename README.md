# DiscreteJS
DiscreteeJS is a library for expressing [discrete mathematics](https://en.wikipedia.org/wiki/Discrete_mathematics) in JavaScript. It currently features:
- Quantifiers

## Installation
```bash
npm install discretejs
```

## Usage
### Quantifiers
[Quantifiers](https://en.wikipedia.org/wiki/Quantifier_(logic)) are logical operators that allow you to quantify how many elements in a set a predicate is true for.

[Universal Quantifiers](https://en.wikipedia.org/wiki/Universal_quantification) assert that a predicate is true for all elements in a set, written as ∀x P(x), where P(x) is the predicate and x is the element. 
> "For all x, P(x) is true."

[Existential Quantifiers](https://en.wikipedia.org/wiki/Existential_quantification) assert that a predicate is true for at least one element in a set, written as ∃x P(x), where P(x) is the predicate and x is the element.
> "There exists an x such that P(x) is true."

#### Expressing quantifiers in code
The signature for quantifiers is `quantifier(predicate, domain)`.
```js
import { A, E } from 'discretejs';

const numbers = [1, 2, 3, 4, 5]; // set for domain
const isEven = x => x % 2 === 0; // predicate

// Expressing ∃x isEven(x)
E(x => isEven(x), numbers); // true
// Expressing ∀x isEven(x)
A(x => isEven(x), numbers); // false
```
*Note: it is possible to omit the lambda and pass the predicate directly `E(isEven, numbers)`, but it's recommended to use the lambda for consistency with the nested quantification syntax and to imitate the mathematical notation.*

#### Expressing nested quantifiers in code
DiscreteJS uses lambda syntax to achieve nested quantification.

Instead of immediately passing a predicate, you can pass an inline lambda function that takes and passes the current element to another quantifier, which is then passed another lambda function that takes and passes the next element to the predicate.

Expressing ∀x ∃y (x + y = 0) 
```js
A(x => E(y => (x + y == 0), numbers), numbers);
```
Expressing ∃x ∀y (x + y = 0) 
```js
E(x => A(y => (x + y == 0), numbers), numbers);
```

There are lengthier aliases for the quantifiers that can be used if preferred:
```js
import { A, E, All, Exists, forAll, thereExists } from 'discretejs';

// All Equivalent:
A(x => E(y => P(x, y), domain), domain);
All(x => Exists(y => P(x, y), domain), domain);
forAll(x => thereExists(y => P(x, y), domain), domain);
```

## Contributing
This repository follows [this](https://github.com/michaelmoreno/git-commit-ontology) convention for commits.
