# JS-Mastery

check out the course (https://codewithmosh.com/p/javascript-basics-for-beginners)

Master JS Basics

# How to run a script

Install node.js on your machine
navigate to current directory
open terminal
node (filname).js

# What is JavaScript?

JavaScript is a programming language, and big companies like Netflix, Walmart and PayPal are built entirely using JavaScript. You can work as frontend, backend and full stack developer.

# What can you do with it?

For long time JavaScript was only used in browser to build frontend interaction features, but today will a lot of community support and investment you can build full web and mobile apps, Real-time networking applications like chat and video services, command line tools and even games.

# Where does JavaScript code runs?

JavaScript was design to run only in browsers, so every browser has what we call JavaScript engine that can execute JavaScript code. For example JavaScript engine in Firefox and Chrome are Spider Monkey and V8. In 2009 a software engineer Ryan Dahl took the open source JavaScript engine in chrome and embedded in a C++ program, he called that program Node. So node is a C++ program that includes V8 JavaScript engine. Now with this we can run our JavaScript code outside of a browser. So we can pass our JavaScript code to node for execution. And this mean with JavaScript we can build backend with our web and mobile applications.
So in a nutshell JavaScript code can be run inside of a browser or in node. Browser and node provide runtime environment for our JavaScript code.

# Difference between JavaScript and ECMAScript?

ECMAScript (European Computer Manufacturer Association Script Invented by Brendan Eich at Netscape, made its first appearance in the Navigator 2.0 browser, so we have an organization that take care of this ECMAScript specification) is just a specification, JavaScript is a programming language that confirms to this specification.
First release of ECMAScript was in 1997 v1, then starting from 2015 ECMA has been working on annual releases of new specification.
In 2015 they’ve released ES2015/ES6. ES6 define many new feature for JavaScript.
Head over to chrome, right click and go in to inspect, from there navigate to console and write some JavaScript code.

# JavaScript and Node

• Now how to run JavaScript code in Node, as we know JavaScript code runs only on browser and in Node. These are the two runtime environment that enable JavaScript code to run
• Now install node and open terminal head over to the folder where you have created the files and run JavaScript file node 1-basics.js
• Same output as browser so node is a program that includes Google’s v8 JavaScript engine, we can give a piece of JavaScript code to it and it’ll execute that code just like we run it in browser. So node is a runtime environment
• Integrated terminal in vs code, shortcut ctrl + `

# Folder structure

```
.
├── 1.basics
│   └── 1.variables.js
│   └── 2.primitive.types.js
│   └── 3.dynamic.typing.js
│   └── 4.objects.js
│   └── 5.arrays.js
│   └── 6.functions.js
|   └── 7.types.of.functions.js
│
├── 1.operators
│   └── 1.javascript.operators.js
│   └── 2.arithmetic.operators.js
│   └── 3.assignment.operators.js
│   └── 4.Comparison.Operators.js
│   └── 5.equality.operators.js
│   └── 6.ternary.operator.js
|   └── 7.logical.operators.js
│   └── 8.logical.operators.with.non.booleans.js
│   └── 9.bitwise.operators.js
│   └── 10.operators.precedence.js
│   └── 11.ex.swap.varaibles.js
│
├── 3.control flow
│   └── 1_conditional_statements.js
│   └── 2_loops.js
│   └── 3_break_and_continue.js
│   └── 4_ex1_max_of_two.js
│   └── 5_ex2_landscape_or_portrait.js
│   └── 6_ex3_fizzbuzz.js
|   └── 7_ex4_demerit_points.js
│   └── 8_ex5_even_and_odd_numbers.js
│   └── 9_ex6_count_truthy.js
│   └── 10_ex7_string_properties.js
│   └── 11_ex8_sum_of_multiples.js
│   └── 12_ex9_grade.js
│   └── 13_ex10_stars.js
│   └── 14_ex11_prime_numbers.js
│
├── 4.objects
│   └── 1.object.basics.js
│   └── 2.factory.functions.js
│   └── 3.constructor.functions.js
│   └── 4.dynamic.nature.objects.js
│   └── 5.constructor.property.js
│   └── 6.functions.are.objects.js
|   └── 7.values.vs.reference.types.js
│   └── 8.enumerating.properties.of.object.js
│   └── 9.cloning.object.js
│   └── 10.garbage.collection.and.built.in.objects.js
│   └── 11.ex1.address.object.js
│   └── 12.ex2.factory.and.constructor.function.js
│   └── 13.ex3.object.equality.js
│   └── 14.ex4.blog.post.object.js
│   └── 15.ex5.blog.post.constructor.function.js
│   └── 16.ex6.price.range.objects.js
│
├── 5.array
│   └── 1.adding.elements.array.js
│   └── 2.finding.elements.primitives.js
│   └── 3.finding.elements.reference.types.js
│   └── 4.removing.elements.js
│   └── 5.emptying.array.js
│   └── 6.combining.and.slicing.arrays.js
|   └── 7.spread.operator.arrays.js
│   └── 8.iterating.an.array.js
│   └── 9.joining.arrays.js
│   └── 10.sorting.arrays.js
│   └── 11.testing.elemenets.of.array.js
│   └── 12.filtering.an.array.js
│   └── 13.mapping.an.array.js
│   └── 14.reducing.an.array.js
│   └── 15.ex1.array.from.range.js
│   └── 16.ex2.custom.includes.function.js
│   └── 17.ex3.except.js
│   └── 18.ex4.moving.an.element.js
│   └── 19.ex5.counting.occurences.js
│   └── 20.ex6.get.max.js
│   └── 21.ex7.movies.js
│
├── 6.functions
│   └── 1.function.declarations.vs.expressions.js
│   └── 2.hoisting.js
│   └── 3.arguments.js
│   └── 4.rest.operator.js
│   └── 5.default.parameters.js
│   └── 6.getters.and.setters.js
|   └── 7.try.and.catch.js
│   └── 8.local.vs.global.scope.js
│   └── 9.let.vs.var.js
│   └── 10.this.keyword.js
│   └── 11.changing.this.js
│   └── 12.ex1.sum.of.arguments.js
│   └── 13.ex2.area.of.circle.js
│   └── 14.ex3.error.handling.js
```
