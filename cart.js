///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
const summedPrices = cart.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.price;
}, 0);

console.log(summedPrices);



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    tax = (summedPrices * .06); 
    couponValue = 2;
    cartTotal = summedPrices + tax - couponValue;
    return cartTotal;
}
console.log(calcFinalPrice());


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   The properties I chose for the customer object are: name, food allergies, age, phone number,
   food preferences, and regular customer. I chose the name property becuase it's important to know which
   customer you are serving. I chose food allergies becuase the business needs to careful to not serve 
   anything that could potentially trigger a food allergy in a customer. I chose age because different 
   age groups will like different foods, and this will help waiters make suggestions to customers. I
   chose phone number in case the business needs to contact a customer before or after their visit. I
   chose food preferences so that the business can make better food suggestions to the customers based on
   their preferred tastes. I chose regular customer because the business can then use this data to keep
   track of whether or not the customer is satisfied with their business.

   Name is a string and food allergies are strings becuase JS treats names and items as strings. Age and
   phone number are represented by numbers and, so, will each have the data type of a number. Food 
   preferences has a string data type because the property's value is the word, 'vegan.' The Regular
   propert's data type is a boolean value because we need to know if the customer is a regular or not.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Jason',
    foodAllergies: ['dairy','gluten'],
    age: 28,
    phoneNumber: 754-369-1528,
    foodPreferences: 'vegan',
    regular: true,
};
