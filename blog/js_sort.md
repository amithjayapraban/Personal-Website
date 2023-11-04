---
date: Nov 5, 2023
title: How to sort an array of numbers in javascript?
id: 2
socialImage: sort.webp
description: The sort() method performs a lexicographic comparison.
publish : true
---
~~~javascript
let numbers = [3, 1, 10, 2, 21];
numbers.sort(); 
~~~
The above snippet won't produce the result you expect.&nbsp;

Instead, it will produce
~~~javascript
 [1, 10, 2, 21, 3]
~~~
&nbsp;

**Why?**

The `sort()` method performs a lexicographic comparison. The `sort()` converts the number to a string and then sorts by using the Unicode values of each character.

&nbsp;

*For example, `10` comes before `2` when using `sort()`.&nbsp;*
*This is because the `sort()` compares the first character of "10" and "2". ie.`2` (U+0002) & `1` (U+0001).*

&nbsp;

**So, how can you sort numbers?**

~~~javascript
numbers.sort((a, b) => a - b) // ascending
numbers.sort((a, b) => b - a) // descending
~~~ 
&nbsp;

That's it.
Hope you understood. 😊