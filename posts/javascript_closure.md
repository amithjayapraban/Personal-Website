---
date: May 23, 2023
title: Javascript Closure
id: 1
socialImage: Closure.png
descpription: A Closure retains access to variables in its lexical environment, even after the outer function has finished executing.
publish : true
---
Before going into **Closure**, let's first build a simple counter.

```javascript
let n = 0;
function Counter() { 
  return {
    increment: function () {
      n += 1;
      console.log(n);
    },
    decrement: function () {
      n -= 1;
      console.log(n);
    },
  };
}

const inner = Counter();
inner.increment(); //  1
inner.increment(); //  2
n-=1;
console.log(n)     //  1 
```
&nbsp;  

The problem with the above counter is that the variable `n`, which has a **global scope**, can be modified by any subsequent statements.

To solve this, we can use closures.

&nbsp;  

> *Closures allow us to have private variables.*
---

&nbsp;  


Here's a counter implemented using closure: 
~~~javascript
function Counter() {
  let n = 0;
  return {
    increment: function () {
      n += 1;
      console.log(n);
    },
    decrement: function () {
      n -= 1;
      console.log(n);
    },
  };
}

const inner = Counter();
inner.increment(); //  1
inner.increment(); //  2
inner.decrement(); //  1
~~~
&nbsp;  

In this example, the function `Counter` returns `decrement` and `increment`, which is a **closure** that has access to variable `n`. This is because of lexical scoping in javascript.

&nbsp;  


 >  *Lexical scoping allows the inner function to access variables from the parent scope.* 

 
&nbsp;  
A **Closure** retains access to variables in its lexical environment, even after the outer function has finished executing. \
  \
That's it.
Hope you understood. 😊


 