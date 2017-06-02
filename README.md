Kata Supermarket Refactoring
====

The following TDD Kata is a variation on classical [Supermarket Kata](http://codekata.com/kata/kata01-supermarket-pricing/).  

In this my own version I used it to get a base of legacy code to be altered with new functionalities. The TDD approach want you to cover the code by tests and then refactor it before start adding features.

How to conduct the kata
--- 

* Make your attendees fork this repository and them the legacy code base in the language you like (checkout master branch).  
* Make them create a new branch for executing the kata.
* Start asking them adding a new feature in that messy code
  * they would be cover and refactor existing code before; you can previusly provide them tests if you like
* Continue adding feature using TDD Test First approach


KataSupermarket
---

Implement the code for a checkout system that handles pricing schemes such as "apples cost 50 cents, three apples cost $1.30.  
In a normal supermarket, things are identified using Stock Keeping Units, or SKUs.   
In our store, we’ll use individual letters of the alphabet (A, B, C, and so on).  
Our goods are priced individually.   
In addition, some items are multipriced: buy n of them, and they’ll cost you y cents.   
For example, item ‘A’ might cost 50 cents individually,   
but this week we have a special offer: buy three ‘A’s and they’ll cost you $1.30.   

In fact this week’s prices are:  

|Item   | Unit Price  | Special Price |   
|---|---|---|
| A | 50  |  3 for 130 |   
| B | 30  |  2 for 45 |   
| C | 20  |   |   
| D | 15  |   |   

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and price them at 45 (for a total price so far of 95).   
Because the pricing changes frequently, we need to be able to pass in a set of pricing rules each time we start handling a checkout transaction.  
