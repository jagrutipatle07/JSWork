// Strings Methods

// Quotes
// console.log('Hello, World!'); // Single quotes
// console.log("Hello, World!"); // Double quotes
// console.log(`Hello, World!`); // Template literals or backticks

// Length

// let str = "Hello";
// console.log(str.length);

// let str2 = "Hello, World!";
// console.log(str2.length);

// let str = "Hello";
// console.log(str[0]); // first character
// console.log(str[-1]);
// console.log(str[4]);
// let strLength = str.length;
// console.log("Length of the string is:", strLength);
// console.log(str[strLength - 1]); // last character

// let str = "Abc";
// Index value of A is 0, b is 1, and c is 2
// console.log(str.length); // 3
// console.log(str[0]);
// console.log(str[str.length - 1]);

// let str = "Hello, World!";
// console.log(str[str.length - 1]);

// let str = "Hello";
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.at(-1));
// console.log(str.at(-2));


// Strings are immutable

// let str = "Hello";
// str[0] = "h";
// console.log(str[0]);

// let str = "Hello";
// str = "hello";
// console.log(str);


// Changing the case of a string

// let str = "HELLO";
// console.log(str.toLowerCase());

// let str = "hello";
// console.log(str.toUpperCase());

// let str = "hello";
// let firstChar = str[0].toUpperCase();
// let remainingChars = str.slice(1).toLowerCase();
// console.log(firstChar + remainingChars);


// indexOf() - Returns the index of (the position of) the first occurrence of a specified text in a string

// let str = "Hello";
// console.log(str.indexOf("H"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("l"));
// console.log(str.indexOf("o"));

// let str = "This is a string";
// console.log(str.indexOf("i"));
// console.log(str.indexOf("is"));
// console.log(str.indexOf("i", 6));

// lastIndexOf() - Returns the index of (the position of) the last occurrence of a specified text in a string

// let str = "This is a string";
// console.log(str.lastIndexOf("i"));


// let str = "This is a string";

// console.log(str.indexOf("This"));

// if(str.indexOf("This") !== -1) {
//     console.log("Found");
// }

// if(str.indexOf("this") !== -1) {
//     console.log("Found");
// }

// if(str.indexOf("w") !== -1) {
//     console.log("Found");
// }


// includes() - Returns true if a string contains a specified string, otherwise false

// let str = "This is a string";
// console.log(str.includes("This"));
// console.log(str.includes("this"));

// console.log("Hello".includes("H"));
// console.log("Hello".includes("l"));
// console.log("Hello".includes("o", 4));
// console.log("Hello".includes("o", 2));
// console.log("Hello".includes("e", 0));
// console.log("Hello".includes("H", 1));


// startsWith() - Returns true if a string starts with a specified string, otherwise false

// console.log("Hello".startsWith("H"));
// console.log("Hello".startsWith("h"));
// console.log("Hello".startsWith("e"));
// console.log("Hello".startsWith("He"));
// console.log("Hello".startsWith("Hel"));


// endsWith() - Returns true if a string ends with a specified string, otherwise false

// console.log("Hello".endsWith("o"));
// console.log("Hello".endsWith("lo"));
// console.log("Hello".endsWith("ol"));


// slice() - Extracts a part of a string and returns a new string

// let str = "this is a string";
// console.log(str.slice(0, 3));
// console.log(str.slice(5, 8));
// console.log(str.slice(0));
// console.log(str.slice(5));
// console.log(str.slice(-6));
// console.log(str.slice(5, -6));


// substring() - Extracts the characters from a string, between two specified indices

// let str = "this is a string";
// console.log(str.slice(0, 3));
// console.log(str.substring(0, 3));
// console.log(str.slice(3, 0));
// console.log(str.substring(3, 0));


// substr() - Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

// let str = "this is a string";
// console.log(str.substr(0, 4));
// console.log(str.substr(2, 5));
// console.log(str.substr(-4, 3));


// concat() - Joins two or more strings, and returns a new joined strings

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2));
// console.log(str1 + " " + str2);


// trim() - Removes whitespace from both ends of a string

// let str = "    Hello World    ";
// console.log(str.trim());

// trimStart() - Removes whitespace from the beginning of a string

// let str = "    Hello World    ";
// console.log(str.trimStart());

// trimEnd() - Removes whitespace from the end of a string

// let str = "    Hello World    ";
// console.log(str.trimEnd());


// padStart() - Pads a string with another string, until the resulting string reaches the given length

// let str = "5";
// console.log(str.padStart(4, "0"));
// console.log(str.padStart(4, "1"));
// console.log(str.padStart(4, "a"));
// console.log(str.padStart(4, "ab"));

// let str = "Hello";
// console.log(str.padStart(5, "a"));

// let str = 5;
// let newStr = str.toString();
// console.log(newStr.padStart(5, "0"));

// let str = "Hello";
// console.log(str.padStart(2, "a"));


// padEnd() - Pads a string with another string, until the resulting string reaches the given length

// let str = "5";
// console.log(str.padEnd(4, "0"));
// console.log(str.padEnd(8, "x"));


// repeat() - Returns a new string with a specified number of copies of an existing string

// let str = "Hello";
// console.log(str.repeat(3));
// console.log(str.repeat(0));


// replace() - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

// let str = "Hello World";
// console.log(str.replace("World", "Universe"));

// let str = "Hello World World";
// console.log(str.replace("World", "Universe"));
// console.log(str.replaceAll("World", "Universe"));
