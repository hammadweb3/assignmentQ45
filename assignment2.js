"use strict";
// Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// const person:string = `hammad`;
// const personname:string = `Hello ${person}, would you like to learn some Python today`
// console.log(personname);
//3.  Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
// var name0:string = "hammad want to become a developer"
// var lowercase:string = name0.toLowerCase()
// var uppercase:string = name0.toUpperCase()
// var titlecase:string = name0.replace(/\b\w/g, (outfit) => outfit.toUpperCase())
// console.log(name0)
// console.log(uppercase)
// console.log(lowercase)
// console.log(titlecase)
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
// var famouscode: string = `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
// var author:string = "Alber Einstein"
// console.log(` ${famouscode} by, "${author}"`)
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
// var famouscode: string = `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
// var author:string = "Alber Einstein"
// var message:string = ` "${famouscode}" by "${author}"`
// console.log(message)
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
//var stippingname: string = '\t\n    hammad ahmad       \t\n'
// console.log(stippingname);
// var strippedname0:string = stippingname.trim()
// var uppercase:string = strippedname0.toUpperCase()
// console.log(strippedname0)
// console.log(uppercase)
// for(var i = 0; i <stippingname.length; i++){
// var counting = stippingname[i]
// if(counting === ' ' || counting === '\t' || counting === '\n'){
// console.log( ` ${i} whitespaces with name at poistion `)
// }
// }
//7.. Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
// var add0:number = 5 + 3
// var less0: number = 11-3
// var addition0: number = 4 * 2 
// var division0: number = 16 / 2
// console.log(add0)
// console.log(less0)
// console.log(addition0)
// console.log(division0)
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line
// console.log(5 + 3)
// console.log(11 - 3)
// console.log(4 * 2)
// console.log(16 / 2)
//9 Favorite Number: Store your favorite number in a variable. Then, using that variable, 
//create a message that reveals your favorite number. Print that message.
// var favoritenum:number = 9
// console.log (`My Favourite number is ${favoritenum}`)
//Question no. 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//store the name and current date
// var myname:string = "Hammad Ahmad"
// var year0:number = 42
// // run the program
// console.log(`${myname} and my agge is ${year0}`)
// Question 11 Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
// var friendnames:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// for ( var i = 0; i < friendnames.length; i ++){
//     var eachelement:any = 0
//     console.log(friendnames[i])
// }
// console.log(friendnames)
// Question # 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var friendnames:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// for ( var i = 0; i < friendnames.length; i ++){
//     var eachelement:any = 0
//     eachelement =   friendnames[i]
//     console.log( ` ${eachelement} have a good day`)
// }
// console.log(friendnames)
//Question no 13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// for (var i = 0 ; i < guestname.length; i++){
//     var guestpoistion = guestname[i]
//     console.log( `we are ver thankful if you join our dinner party ${guestpoistion}`)
// }
//Question # 14 Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// guestname.push('Yaqoob');
// guestname.shift();
// console.log(guestname)
// console.log(`Dear ${guestname},\n\nYou are cordially invited to a dinner gathering at my home. Your presence would be an honor, and I would love to engage in insightful conversations with you.\n\nPlease let me know if you can attend.\n\nSincerely,\n[Your Name]`);
//Question # 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// guestname.push("yaqoob")
// guestname.shift()
// for ( var i = guestname.length-1; i >= 0; i-- ){
//    var newguestlist = guestname[i]
// console.log(`Hello ${newguestlist} \n\n i hope your are find and enjoying a good health. we have a lavish dinner for your. \n\n please join us`)
// }
// 2nd way code'=
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// var GuestNotAttend= "sarfraz"
// console.log (` ${GuestNotAttend} appologize recieved not attend the dinner`)
// var guestnotattend0 = guestname.indexOf(GuestNotAttend)
// if (guestnotattend0 !== -1){
//    guestname[guestnotattend0] = "yaqoob"
// guestname.splice(8,0,"hanan", "umair", "uzair")
// for( var i = 0; i <guestname.length; i ++){
//    console.log( `\n\n Hello  ${guestname[i]} \n\n i hope you have a good health, pleaes join a lavish dinner. \n\n sincerely\n\n Hammad Ahmad`)
// }
// }
//Question no 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. •
// Print a new set of invitation messages, one for each person in your list.
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// var GuestNotAttend= "sarfraz"
// console.log (` ${GuestNotAttend} appologize recieved not attend the dinner`)
// var guestnotattend0 = guestname.indexOf(GuestNotAttend)
// if (guestnotattend0 !== -1){
//    guestname[guestnotattend0] = "yaqoob"
// guestname.splice(8,0,"hanan", "umair", "uzair")
// for( var i = 0; i <guestname.length; i ++){
//    console.log( `\n\n Hello  ${guestname[i]} \n\n i hope you have a good health, pleaes join a lavish dinner. \n\n sincerely\n\n Hammad Ahmad`)
// }
// }
// Question no 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
// var guestname:string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin']
// for( var i = 0 ; i < guestname.length; i++){
//console.log(`${guestname[i]} we can invite only two people for dinner`)
// }
//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
// guestname.splice(0,3)
// for(var i = 0 ; i < guestname.length; i++){
//    console.log( `${guestname[i]} they are still invited`)
// }
// var onepeople:string = 'bilal'
// var twopeople:string = 'sarfraz'
// var threepeople:string = 'Rafique'
// console.log ( `${onepeople} you are not invited sorry`)
// console.log ( `${twopeople} you are not invited sorry`)
// console.log ( `${threepeople} you are not invited sorry`)
// guestname.pop()
// guestname.pop()
// if(guestname.length  < 0){
//    console.log( `list is empty`)
// }
// else{
//    console.log(`list is not empty`)
// }
// console.log(guestname)
//    //Question no 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let location0: string [] = ["Africa", "Japan", "China", "India", "Russia"]
// // • Print your array in its original order.// • Show that your array is still in its original order by printing it.
//    console.log(location0)
// // • Print your array in alphabetical order without modifying the actual list.
// let alphabetical = [...location0].sort()
// console.log(alphabetical)
// //// • Show that your array is still in its original order by printing it.
// console.log(location0)
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// let reverseorder = [...location0].sort().reverse()
//  console.log(reverseorder)
// //print origninal array
// console.log(location0)
// // • Reverse the order of your list. Print the array to show that its order has changed.
// let reverseorder0 = [...location0].reverse()
// console.log(reverseorder0)
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log((reverseorder0).reverse())
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log((reverseorder0).sort())
// //reverse the alphabetica with order
// let reversealphabeticalorder = [...location0].sort((a,b) => b.localeCompare(a))
// console.log(reversealphabeticalorder)
// console.log((location0).sort().reverse())
//Question no 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
// var guestname: string[] = ['bilal', 'sarfraz', 'Rafique', 'yaseen', 'amin'];
// var i = 0
// while(i < guestname.length){
// var africa = guestname[i]  
// i ++
// console.log( `${africa} please visit for dinner ` )
// }
// var j =  guestname.length-1
// while ( j > 2){
//    var africa0 = guestname[j]
//    j--
//    console.log(africa0)
// }
//Question Node. 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing these items.
// const countries: string[] = ["USA", "ravi", "K2", "mounteverst", "Australia"]
// console.log("List of Countries:");
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
//}
//Question no 21 They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
//  type carrtype = { carmode:string, model: number, status:boolean, horsepower: number }
//  var car : carrtype = {
//    carmode: "honda",
//    model: 2020,
//    status: true,
//    horsepower: 125}
// var car0 : carrtype = {
//       carmode: "hyundaie",
//       model: 2023,
//       status: false,
//       horsepower: 2500}
// console.log(car0.model, car.status)
//Question no 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.
// var errorindex : number [] = [2,3,4,5,6,7]
// console.log(errorindex[9])
// let i = 9
// if( i >=0 && i < errorindex.length){
//    console.log(errorindex[i])
// }
// else{
//    console.log( "index not accessible")
// }
// Question Node. 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// // • Test whether an item is not in a array
// let number1 = 2
// let number2 = 6
// let number3 = 6
// let string1 = "india"
// let stringg2 = "africa"
// let isstatement = true
// let thatstatement = false
// let items:string [] = ['banana', 'apple', 'pineapple']
// //test for equality and enquality of strings
// console.log("test of equality of string")
// console.log( string1 == stringg2)
// console.log('test of inequality string')
// console.log( string1 !== stringg2)
// // • Tests using the lower case function
// console.log('test the lower case')
// console.log(string1.toLocaleLowerCase() == string1)
// console.log(stringg2.toLocaleLowerCase() == string1)
// console.log(string1.toLocaleLowerCase() == string1)
// // • Numerical tests involving equality and inequality, greater than and less than,
// // greater than or equal to, and less than or equal to
//  console.log(`number greater than is true`)
// console.log( number1 < number2 )
// console.log(number1 > number2)
// console.log(`number equalit`)
// console.log(number1 == number2)
// console.log(`number inequality`)
// console.log(number1 !== number2)
// // • Tests using "and" and "or" operators
// console.log(" comparison")
// console.log( number1 ==number2 && number2 == number3)
// console.log( number1 ==number2 || number2 == number3)
// //Test whether an item is in a array
//  console.log(" array test")
// console.log(items.includes("apple"))
// console.log(items.includes("orange"))
//Question no 26. Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alies = "green"
// let alies1 = "yellow"
// switch(alies1){
//    case "green":
//    console.log( "player earned 05 point")
// break;
// case "yellow": console.log("players earned 0 marks")
// break;
// default: console.log("10 point ")
// }
// 
// question no 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age = 18
// if (age < 2){
//    console.log(` person is a baby`)
// }
// else if( age >= 4 && age < 13){
// console.log(`the person is a toddler`)
// }
// else if(age > 13 && age < 20){
//    console.log(`person is kid`)
// }
// else if ( age >= 20 && age < 65){
//    `persin is an adult`
// }
// else{
//    console.log(`person is elder`)
// }
// Question no 29 Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let fruits: string[] = ["banana", "apple", "oragnes", "pineapple"];
// if (fruits.includes("oragnes")) {
//     console.log("You really like oranges");
// } else {
//     console.log("You don't have oranges in your favorites.");
// }
// if (fruits.includes("grape")) {
//     console.log("You really like grapes");
// } else {
//     console.log("You don't have grapes in your favorites.");
// }
// Question no 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// var admin:string [] = [ "admin", "username1", "username2", "username3", "username6"]
// for( var i = 0; i < admin.length ; i++) {
//  if  (admin[i] ===  "admin"){
// console.log("Hello admin, would you like to see a status report?")
//  }
//  else{
// console.log(`Hello ${admin[i]} thank you for logging in again`)
//  }
// }
// q no 30. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// 
//Question 32  Checking Usernames: Do the following to create a program that simulates 
//how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Make a list of current users
// let current_users: string[] = ["hammad", "bilal", "sarfra", "umar", "adnan"]
// let newuser_list: string [] = ["aleem", "alishan", "hammad", "umar", "arslan"]
// for ( let i = 0 ; i < current_users.length; i++){
// let usernameexist = false
// for (let j=0 ; j < newuser_list.length; j++){
//    if(current_users[i] == newuser_list[j]){
//     usernameexist = false
//     break;
//     }
//    }
//     if (usernameexist){
//    console.log(` use name ${current_users[i]} is available`)
//     }
//     else {
//       console.log(`user name ${current_users[i]} is not available`)
//     }
//    }
// Question no 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
// and each result should be on a separate line.
// let ordinalnum: number[] = [1,2,3,4,5,6,7,8,9]
// for ( let i = 0; i< ordinalnum.length; i++ ){
// if (ordinalnum[i] == 1){
// console.log(` ${ordinalnum[i]}st`)
// }
// else if (ordinalnum[i] == 2){
//    console.log(` ${ordinalnum[i]}nd`) 
// }
// else if( ordinalnum[i] == 3){
//    console.log(` ${ordinalnum[i]}rd`)
// }
// else{
//    console.log(` ${ordinalnum[i]}th`)
// }
//}
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let fvtpizze: string [] = ["applepizze","orangepiza" , "ninpizze"]
// for (var pizza of fvtpizze){
//    console.log(pizza)
// } 
// for (pizza of fvtpizze){
// console.log(`i like ${pizza}`)
// }
//Question no 25 Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • 
//Modify your program to print a statement about each animal, such as A dog would make a great pet. • 
//Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
// let animal1: string [] = ["lion", "cat", "dog"]
// for (var i = 0 ; i < animal1.length; i++){
//    if ((animal1[i]) === "dog"){
// console.log("A dog would make a great pet")}
//  else{
//    console.log(`these animals ${animal1[i]} would make a great pet!`)
//  }
//    }
//Queston no 36 T-Shirt: Write a function called make_shirt() that accepts a size and 
//the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. 
//Call the function.
//    function make_shirt(size:number, ready: string){
// console.log(`size of the shirt ${size} and ${ready} to wear`)
//    }
//    make_shirt( 18, "wao")
//Question no 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
// function make_shirt(size: string = "large", ready:string = "i love type script"){
// console.log( `shirts are ${size} by default = ${ready}`)
// }
// make_shirt()
// make_shirt("medium")
// make_shirt("small", "wao type script")
// Question no 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence,
//  such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, 
// at least one of which is not in the default country.
// function describe_City(city: string, country: string = "Unknown") {
//    console.log(`${city} is in ${country}.`);
//  }
//  describe_City("Karachi", "Pakistan");
//  describe_City("New York"); 
//  describe_City("Paris", "France");
//Question no 39 City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function cityCountry(city: string, country: string){
//    return `${city}, ${country}`
//  }
//  const result1 = cityCountry("Lahore", "Pakistan")
// const result2 = cityCountry("New York", "USA")
//  const result3 = cityCountry("Paris", "France")
//  console.log(result1)
//  console.log(result2)
//  console.log(result3)
// var album1 = {
//   artist: "shahruk khan",
//   title: "main hoon na",
//   tracks: 5
// }
// const album2 = {
//   artist: "salman khan",
//   title: "hum aap ky hain kon",
//   tracks: 12
// }
// const album3 = {
//   artist: "amir khan",
//   title: "aey kayea bolti tu",
// }
// console.log(album1)
// console.log(album2)
// console.log(album3)
//Question no 41 Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function showmagician( magic: string[]){
//    for (var i = 0 ; i < magic.length; i ++){
//       console.log(`i am a ${magic[i]}`)
//    }
// }
// showmagician(["jacob", "jacobi"])
//Q no 42 Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function makegreat(magic) {
    for (let magician of magic) {
        console.log(`${magician} are great`);
    }
}
makegreat(["jacob", "jacobi"]);
