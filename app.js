// ........................ch 21-25.....................................................................
// .....................................................................................................

// q1

// var f_name = String(prompt("enter your first name : "));
// var l_name = String(prompt("enter your last name : "));

// var FullName = f_name +" "+ l_name;
// alert("welcome "+FullName);


// q2
// var mbl = String(prompt("enter your favourite mobile phone details : "));
// a = mbl.length;
// alert("my favourite mobile phone is : " + mbl + "\nlenght of string is : " + a );



// q3
// var country = "pakistan";
// var a = country.indexOf('n');
// alert("string : "+country+"\nindex on 'n' : "+a);


// q4
// var st = "Hello World";
// var a = st.lastIndexOf('l');
// alert("string : "+st+"\nindex on 'l' : "+a);


// q5

// var country = "pakistan";
// var a = country.charAt(3)
// alert("string : "+country+"\nCharacter at index 3  : "+a);


// q6

// var f_name = String(prompt("enter your first name : "));
// var l_name = String(prompt("enter your last name : "));

// var FullName = f_name.concat(l_name)
// alert("welcome "+FullName);


// q7
//  var city = "hyderabad";
//  var c =  city.replace('hyder','islam')
//  alert(c)


// q8
// var message = 'Ali and Sami are best friends They play cricket and football together';
// var a = message.replace(/and/g,'&');
// alert(a)


// q9
// var a = "472";
// var b = parseInt(a);

// document.write("value : "+a+"<br>");
// document.write("type : "+ typeof(a)+"<br>");
// document.write("value : "+b+"<br>");
// document.write("type : "+ typeof(b));


// q10
// var user_in = prompt("enter : ");
// var a = user_in.toUpperCase();
// alert(a)


// q11
// var user_in = prompt("enter : ");
// var a = user_in.slice(0,1);
// var b = a.toUpperCase();
// var c = user_in.slice(1,user_in.length);
// var d = c.toLowerCase();
// var titlecase = b.concat(d);
// alert(titlecase)


// q12
// var number = 35.23;
// var a = number.toString();
// alert(a);


// q14
// var bakery = ["cake","biscuit","juice","milk"];
// var sell = String(prompt("enter item : "));
// var sell1 = sell.toLowerCase();
// for(i = 0 ; i < bakery.length ; i++){
//     if(bakery[i] == sell1){
//         a = bakery.indexOf(bakery[i])
//         alert(sell1+" is available at our bakery on index "+a);
//         break
//     }
//     else{
//         alert("sorry "+sell1+" is not available");
//         break
//     }
// }


// q16
// var university = 'University of Karachi';
// var a = university.split("<br>",3);
// document.write(a);

// q18
// var a = "the quick brown fox jumps over the lazydog";
// var b = a.match(/the/g).length
// alert(b);

// ...................................ch 26-30.............................................
// ........................................................................................


// q1
// var n = +prompt("enter a number :");
// document.write(n+"<br>");
// document.write(Math.round(n)+"<br>");
// document.write(Math.floor(n)+"<br>");
// document.write(Math.ceil(n)+"<br>");


// q2
// var n = -prompt("enter a number :");
// document.write(n+"<br>");
// document.write(Math.round(n)+"<br>");
// document.write(Math.floor(n)+"<br>");
// document.write(Math.ceil(n)+"<br>");

// q3
// var n = prompt("enter a number :")
// document.write(Math.abs(n));



// q4
// var a = Math.floor(Math.random() * 6) + 1
// document.write("random dice number :"+a)

// var b = Math.floor(Math.random() * 6) + 1
// document.write("random dice number :"+b)


// q5

// var b = Math.floor(Math.random() * 2) + 1
// document.write("random dice number :"+b+" <br>")
// if(b == 1){
//     document.write("random coin value : tails")
// }
// else if(b == 2){
//     document.write("random coin value : heads")
// }


// q6

// var b = Math.floor(Math.random() * 100) + 1
// document.write("random dice number :"+b)


// q7

// var b = Math.floor(Math.random() * 10) + 1

// var a = prompt("enter a number between 1 to 10")
// if(b == a){
    // document.write("congratulations !");
// }


// ........................................................................................
// / ...................................ch 31-34.............................................
//q1



// var date = new Date();
// document.write(date)


// q2
// var a = ["january","february","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date();
// var m = date.getMonth() ;
// document.write(a[m])

// q3
// var a = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date = new Date();
// var b = date.getDay();
// document.write(a[b])

// q4
// var a = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date = new Date();
// var b = date.getDay();
// if( a[b] == "Sun" || a[b] == "Sat" ){
//     alert("it is funday today ! ")
// }



// q5
// var a = new Date();
// var b = a.getDate();
// if (b<=15){
//     alert("first fifteen days of month")
// }
// else{
//     alert("last fifteen days of month ")
// }



// q6
// var a = new Date();
// var b = a.getMilliseconds();
// var c = a.getMinutes();
// document.write("date : "+a+"<br>")

// document.write("time in milisecond : "+b+"<br>")

// document.write("time in minutes : "+c+"<br>")


// q7
// var a = new Date();
// var b = a.getHours();
// if(b<12){
//     alert("its am")
// }
// else{
//     alert("its pm")
// }


// q8
// var a = new Date("Thu Dec 31, 2020")
// document.write(a)


// q13
// var a = new Date();
// var b = prompt("enter your age :");
// var c = a.getFullYear();
// var d = c - b
// document.write("your birth year is : "+d);


// q14
// document.write("<h1>K-ELECTRIC BILL</h1><br>");
// var a = prompt("enter your name : ");
// var b = new Date().getMonth();
// var c = prompt("enter numbers of units : ");
// var d = 16;
// var f = c*d
// document.write("Consumer name  :"+a+"<br>");
// document.write("billing for the month of :"+b+"<br>");
// document.write("units consumed :"+c+"<br>");
// document.write("Amount payable within due date :"+f+"<br>");
// var e = 350;
// document.write("late payment surcharge : "+e+"<br>");
// document.write("amount payable after due date : "+(f+e));





// ........................................................................................
// / ...................................ch 35-38.............................................


//q1
// function TellDate(){
//     var a = new Date();
//     document.write(a)
// }

// TellDate()



// // q2
// function greet(){
//     var a = prompt("enter your first name :");

//     var b = prompt("enter your last name :");

//     document.write("welcome, "+a+" "+b)

// }
// greet()


// q3
// function SumIt(){
//     var a = +prompt("enter your first num :");

//     var b = +prompt("enter your second num :");

//     document.write("added, "+ (a+b))

// }
// SumIt()



// q4
// function Calculator(num1,num2,operator){
//     if (operator == "+"){
//         b = num1 + num2
//     }
//     else if (operator == "-"){
//         b = num1 - num2
//     }
//     else if (operator == "*"){
//         b = num1 + num2
//     }
//     else if (operator == "/"){
//         b = num1 / num2
//     }
//     var a = num1+operator+num2+"="+b;
//     alert(a)
// }
// Calculator(5,10,"-")




// q5
// function square(number){
//     var a = number*number
//     alert(a)
// }
// square(10)



// q7
// function counting(){
//     var a = parseInt(prompt("enter starting number : "));
//     var b = parseInt(prompt("enter ending number : "));
//     for(i = a;i>=b;i++){
//         document.write(i+"<br>")
//     }
// }

// counting()


// q9
// function area(h,w){
//     var a = h*w;
//     alert("area is : "+a);
// }
// area(10,5)

// q10

























