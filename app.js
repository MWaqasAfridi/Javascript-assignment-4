// Question no 1
// var userName = [];


// Question no 3
// var stringArray=['waqas','sameer','nisar','tahir'];


// Question no 4
// var numberArray=[10,11,12,13,34,56];


// Question no 5
// var booleanArray=[true,false,true,true];


// Question no 6 
// var mixedArray=['waqas',12,true,'mustafa',20,];


// Question no 7 (method 1)
// document.write("<h1>Qualification</h1>")
// var qualification=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','Phd'];
// document.write("1) "+qualification[0]+"<br>");
// document.write("2) "+qualification[1]+"<br>");
// document.write("3) "+qualification[2]+"<br>");
// document.write("4) "+qualification[3]+"<br>");
// document.write("5) "+qualification[4]+"<br>");
// document.write("6) "+qualification[5]+"<br>");
// document.write("7) "+qualification[6]+"<br>");
// document.write("8) "+qualification[7]+"<br>");


// Question no 7 (method 2)
// document.write("<h1>Qualification</h1>")
// var qualification=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','Phd'];
// document.write("<ol>");
// document.write("<li>" + qualification[0] + "</li>");
// document.write("<li>" + qualification[1] + "</li>");
// document.write("<li>" + qualification[2] + "</li>");
// document.write("<li>" + qualification[3] + "</li>");
// document.write("<li>" + qualification[4] + "</li>");
// document.write("<li>" + qualification[5] + "</li>");
// document.write("<li>" + qualification[6] + "</li>");
// document.write("<li>" + qualification[7] + "</li>");
// document.write("</ol>");


//  Question no 8

// var studentName = ["Sameer","Waqas","Tahir"];

// var studentScore = [456,499,450];

// percentageSameer = studentScore[0]/500*100;
// percentageWaqas = studentScore[1]/500*100;
// percentageTahir = studentScore[2]/500*100;

// document.write(`Score of ${studentName[0]} is ${studentScore[0]}. Percentage: ${percentageSameer} % <br>`);
// document.write(`Score of ${studentName[1]} is ${studentScore[1]}. Percentage: ${percentageWaqas} % <br>`);
// document.write(`Score of ${studentName[2]} is ${studentScore[2]}. Percentage: ${percentageTahir} % <br>`);


// Question no 9
// var color = ['green','blue','white'];

// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning");
// color.unshift(colorToAddAtBeginning);
// document.write(color+"<br>");

// var colorToAddAtEnd = prompt("Enter a color to add to the End");
// color.push(colorToAddAtEnd);
// document.write(color+"<br>");

// color.unshift('orange','red');
// document.write(color+"<br>");

// color.shift();
// document.write(color+"<br>");

// color.pop();
// document.write(color+"<br>");

// var indexToAddColor = prompt("Enter your index where you want to add a color");
// var colorToAddAtIndex = prompt("Enter your color you want to add");
// color.splice(indexToAddColor,0,colorToAddAtIndex);
// document.write(color+"<br>");

// var indexToDeltColor = prompt("Enter your index from where you want to delt a color");
// var numberOfColorsToDelt = prompt("Enter how many colors you want to delt");

// color.splice(indexToDeltColor,numberOfColorsToDelt);
// document.write(color);


// Question no 10
// var studentScore=[320,230,480,120];
// console.log("Scores of Students: "+studentScore);
// studentScore.sort();
// console.log("Ordered Scores of Students: "+studentScore);


// Question no 11
// var cities=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// console.log("Cities list: "+cities);
// var selectedcities=cities.slice(2,4);
// console.log("Selected Cities list: "+selectedcities);


// Quesion no 12
// var arr=["This","is","my","cat"];
// console.log("Array: "+arr);
// var singleString=arr.join(" ");
// console.log("String: "+singleString);


//Question no 13
// var fifo = [];

// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");
// fifo.push("monitor");

// document.write("Devices:<br>");
// document.write(fifo);

// document.write(`<br><br>out:<br>${fifo.shift()}<br> out:<br>${fifo.shift()}<br> out:<br>${fifo.shift()}<br> out:<br>${fifo.shift()}`);


//Question no 14
// var lifo = [];

// lifo.push("keyboard");
// lifo.push("mouse");
// lifo.push("printer");
// lifo.push("monitor");

// document.write("Devices:<br>");
// document.write(lifo);

// document.write(`<br><br>out:<br>${lifo.pop()}<br> out:<br>${lifo.pop()}<br> out:<br>${lifo.pop()}<br> out:<br>${lifo.pop()}`);


// Question no 15
// var phoneManufactures = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// document.write(`<select>

//              <option>${phoneManufactures[0]}</option>
//              <option>${phoneManufactures[1]}</option>
//              <option>${phoneManufactures[2]}</option>
//              <option>${phoneManufactures[3]}</option>
//              <option>${phoneManufactures[4]}</option>
//              <option>${phoneManufactures[5]}</option>

// </select>`)





