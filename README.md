# Kata Supermarket

[Supermarket Kata](http://codekata.com/kata/kata01-supermarket-pricing/).  

## The kata

In Jet Supermarket we have a checkout system that only can do one kind of offers, 
based on quantities of the same item (eg. 1 apple for 50 cents, 3 apples for 1.20 dollars).  
A the moment items are priced individually in cents (e.g. 1 apple costs 50 cents), 
while some items are multipriced: buy _x_ of them, and they’ll cost you _n_ cents.  

In fact the current prices are:  

|Item       | Unit Price  | Special Price |   
|-----------|-------------|---------------|
| apple     | 50          | 3 for 130     |   
| pear      | 30          | 2 for 45      |   
| pineapple | 220         |               |   
| banana    | 60          |               |   


Our checkout accepts items in any order, so that if we scan a pear, a pineapple, 
and another pear, we’ll recognize the two pear's and price them at 45 cents 
(for a total price so far of 265 cents).   
Because the pricing changes frequently, we pass in a set of pricing rules 
each time we start handling a checkout transaction.  

## Start small

Start making the system able to check individual price: discount will be calculated by hand by the cashier.  
Then start implementing offers.

### The 1<sup>st</sup> User Story

```
As a cashier, 
I want a basic checkout system
so I can let my customers pay for apples
```

#### Acceptance Criteria

```
* When I checkout an apple, the system charges 50 cents
* When I checkout 3 apples, the system charges 150 cents
```

### The 2<sup>nd</sup> User Story

Implement individual price for other fruits in list: _pear_, _pineapple_, _banana_

```
As a cashier, 
I want to add pear, pineapple and banana to the checkout system
so I can speed up the payment process
```

#### Acceptance Criteria

```
* When I checkout 1 pear, the system charges 30 cents
* When I checkout 1 pineapple, the system charges 220 cents
* When I checkout 1 banana, the system charges 60 cents

* When I checkout 2 pear, the system charges 60 cents
* When I checkout 2 pineapple, the system charges 440 cents
* When I checkout 2 banana, the system charges 120 cents
```

### The 3<sup>rd</sup> User Story

```
As a cashier, 
I want to specify offers for items
so my customers will pay less for multiple items purchase
```
#### Acceptance Criteria

```
* When I checkout 3 apples, the system charges 130 cents instead of 150
* When I checkout 2 pears, the system charges 45 cents instead of 60
* When I checkout 2 pineapple, the system charges 440 cents, as there are no offers for pineapples
```

### Add some more extra feature

Now, we think that having more items and offers will boost our earnings; so we are asking to:
* add these items:
  * mango -> 155 cents
  * coconut -> 233 cents
  * strawberry -> 120 cents
  * orange -> 45 cents
  * peach -> 40 cents

* implement a new offers system that lets us apply new pricing rules:
  * 3 x 2 offers (pay 2, get 3)
  * combo offers (eg. buy 3 apple and you will obtain an additional pear)
  
 ...[to be continued]...



