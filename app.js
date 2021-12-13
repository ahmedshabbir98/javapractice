// Chapter 1
// alert("Welcome To This Website")
// alert("Error! Please Enter a valid Password")
// alert("Welcome to JS Land" + "\n" + "Happy Coding!")
// alert("Welcome to JS Land" )
// alert("Happy Coding!" )
// alert("Hello... I can run JS through my web browser's console" )


// Chapter 2

// var username = 'ahmed'

// var myname='ahmed shabbir'

// var message ='Hello World'

// alert( message)

// var studentname=prompt("Enter your Name")
// var studentage =+prompt("Enter your age")
// var studentskill =prompt("Enter your Skills")

// alert(studentname)
// alert(studentage)
// alert(studentskill)


// var food ="pizza"
// var array=[]
// for(var i=food.length;i>0;i--){    
//     a=food.slice(0,i)
//     array+=a + "\n"
// }

// alert(array)




// var email="ahmedshabbir@gmail.com"

// alert("My Email is " + email)

// var quote="A smarter way to learn JavaScript"

// alert("I am trying to learn from the Book " + quote)





// Chapter 3

// var age=18

// alert("i am " + age + " years old")



// var visits=+prompt("how many times you visit our store")

// alert("i have visted this store " + visits + " times")

// var birthyear=+prompt("what is your Birth Year")

// alert("My BirtyYear is  " + birthyear )


// var Store="chase"
// var customer=prompt("Name of Customer")
// var product=prompt("Name of Product")
// var qty=+prompt("Name of qty")


// alert(customer +  " ordered " + qty + product + " from " + Store)


// // Chapter 4
// var  store="pakistan"
// var garrage="store"
// var country="Australia"
// var 123Country
// var %country
// var -country



// Chapter 5


// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a+b

// alert ("Sum of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a-b

// alert ("Sum of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a+b

// alert ("Subtraction of " + a + " and " + b + " is " + c)
// var a= +prompt("Enter First Num")
// var b= +prompt("Enter second Num")

// var c = a*b

// alert ("Multiplication of " + a + " and " + b + " is " + c)




// var TicketPrice=700
// var TicketQty=prompt("How many ticket you want ")
// var total

// total=TicketPrice*TicketQty
// alert("Total Cost to buy "+TicketQty+" ticket is "+ total)



// var table=+prompt("enter no")
// var range=+prompt("enter your range")

// for(i=0;i<=range;i++)
// {
// var total= table* i
//     console.log( table +" * "+ i + " = " +  total)
// }


// var Celsiustemp=+prompt("Enter your Celsius Temperature")
// var FerTemp=+prompt("Enter your Ferhinite Temperature")

// var ferconversion=(Celsiustemp * 9/5) +32
// var celconversion=(FerTemp - 32 ) *5/9

// alert(Celsiustemp +"*C " + " is " + ferconversion +"*F " + " \n "+ FerTemp +"*F " + " is "+ celconversion +"*C "  )

// var item1=150
// var item2=250
// var item3=50


// var OrderQty1=+prompt("enter the qty")
// var OrderQty2=+prompt("enter the qty")
// var OrderQty3=+prompt("enter the qty")
// totalqty1=item1*OrderQty1
// totalqty2=item2*OrderQty2
// totalqty3=item3*OrderQty3
// sum=totalqty1+totalqty2+totalqty3
// alert("Price of Item 1 is " + item1 +"\n"
// +" qty of item 1 is " + OrderQty1  +"\n"
//         + "Price of Item 2 is " + item2 + "\n"
//         +" qty of item 2 is " + OrderQty2  +"\n"
//         +"Price of Item 3 is " + item3  +"\n"
//         +" qty of item 3 is " + OrderQty3  +"\n"
//         + " Your Total Value is " + sum)

// var physics=+prompt("Enter Physics Marks")
// var English=+prompt("Enter English Marks")
// var Urdu=+prompt("Enter Urdu Marks")
// var Maths=+prompt("Enter Maths Marks")
// var Islamiat=+prompt("Enter Islamiat Marks")
// var MarksObtained=physics+English+Urdu+Maths+Islamiat
// var TotalMarks=500
// var Per=(MarksObtained/TotalMarks)*100
// alert("Your Percentage is " + Per)



// var saudConv=28
// var dollarConv=110
// var dollar=+prompt("Enter your dollar currency")
// var Suadi=+prompt("Enter your Saudi currency")

// sumSaudi=Suadi*saudConv
// sumdollar=dollar*dollarConv

// totalsum=sumSaudi+sumdollar

// alert("our total currency in PKR RS is " + totalsum)



// Chapter 6-9

// var a =10 
// console.log("The value of a is " + a)
// a=++a
// console.log("The value of ++a is " + a)
// console.log("Now The value of a is " + a)
// a=a++
// console.log("The value of a++ is " + a)
// a=++a
// console.log("Now The value of a is " + a)
// a=--a
// console.log("The value of a-- is " + a)
// console.log("Now The value of a is " + a)
// console.log("The value of a is " + a)
// a=--a
// console.log("The value of a-- is " + a  )





// class project practice

// var userBirthYear=prompt("Enter Your Birth Year")
// var userminutes= userBirthYear * 525600
// var usermilisecond=userminutes * 60000

// console.log("this "+ userBirthYear+     " Birthyear is = " + usermilisecond + " miliseconds")




// var userday=userBirthYear * 365
// var userminutes = userBirthYear *   525600

// console.log(userday)
// console.log(userminutes)


// console.log(usermonths)










// var currentyear=new Date()
// var currentMilisecond=currentyear.getTime()
// console.log(currentMilisecond)


// finalmilisecond = currentMilisecond - usermilisecond

// console.log(finalmilisecond + " final mili second")




// var finalminutes=finalmilisecond/ 60000
// var finaldays=finalminutes/ 1440
// var finalyear = finaldays/365

// console.log(finalminutes)
// console.log(finaldays)
// console.log(finalyear)




// var currentDay= currentyear.getDay()
// var currentDate= currentyear.getDate()
// var currentMonth= currentyear.getMonth()
// var currentYear= currentyear.getFullYear()


// console.log(currentDay)
// console.log(currentMonth)
// console.log(currentYear)
// console.log(currentDate)

// for current date
// var currdate = new Date()
// var currtime = currdate.getTime()
// var currYear = currdate.getFullYear()

// console.log("currtime in miliseconds " + currtime )
// console.log("Curryear in Year " + currYear )

// for user date
// var userBirthYear=prompt("Enter Your Birth Year")
// var userminutes= userBirthYear * 525600
// var usermilisecond=userminutes * 60000
// console.log("this "+ userBirthYear+     " Birthyear is = " + usermilisecond + " miliseconds")


// for final calculation years 
// finalcalculation=currtime-usermilisecond
// console.log(finalcalculation)

// var finalminutes=finalcalculation/ 60000
// var finaldays=finalminutes/ 1440
// var finalyear = finaldays/365

// console.log(finalyear)


// var year= currYear-userBirthYear
// console.log(year)


// var udate = new Date(year)
// var uyear= udate.getFullYear()
// console.log(uyear)




// var userday=userBirthYear * 365
// var userminutes = userBirthYear *   525600
// console.log(userday)
// console.log(userminutes)
// console.log(usermonths)



// var userNAme=prompt("enter your name")
// console.log("welcome " + userNAme)


// var num =+prompt("Enter the number")

// if (num==''){
// num=5
//     for(i=0;i<=12;i++){
//             total=num*i
//             console.log(num+ " * " + i +" = " + total )
//     }

// }else{
    
//     for(i=0;i<=12;i++){
//         total=num*i
//         console.log(num+ " * " + i +" = " + total )
// }
// }


// var sub1=prompt("enter subject1 name")
// var sub2=prompt("enter subject2 name")
// var sub3=prompt("enter subject3 name")
// var marks1=+prompt("enter your marks for " + sub1)
// var marks2=+prompt("enter your marks for " + sub2)
// var marks3=+prompt("enter your marks for " + sub3)
// var totalmark= 100
// var obtainedmarks=marks1+marks2+marks3
// var per=(obtainedmarks/totalmark)*100

// console.log(per)

// Chapter 9-11

// var city=prompt("enter city name")
// city=city.toLowerCase()
// if(city=='karachi'){
//     console.log("welcome to city of lights")
// }
// var gender=prompt("enter your gender")
// gender=gender.toLowerCase()
// if(gender=='male'){
//     console.log("Good Morning Sir")
// }else{
//     console.log("Good Morning Miss  ")
// }

// var signalcolor=prompt("enter Color")
// signalcolor=signalcolor.toLowerCase()
// if(signalcolor=='red'){
//     console.log("Must Stop")
// }else if(signalcolor=='yellow'){
//     console.log("Ready to Move  ")
// }else{
//     console.log("Move now ")
// }


// var fuel=+prompt("enter your fuel ")
// if (fuel<=0.25){
//     console.log("please refill your tank")

// }else{
//     console.log(" your tank is ok")
// }


// var randmnum=Math.floor ((Math.random() * 10));      

// var usernum=+prompt("Enter Your Number");

// if(usernum==randmnum){
//     console.log("Bingo you guess The right number "+ usernum);
    
// }else if (usernum+1==randmnum){
//     console.log("Close Enough to the Correct No number "+ usernum);
    
// }else{
    
//     console.log("Wrong guess "+ usernum);
// }

// var usernum=+prompt("enter the num")
// if (usernum%3==0){
    
    //     console.log("divisible by 3 ")
    // }else{
        
        //     console.log("not divisible by 3 ")
        // }
// }
        
        
        
        

// var usernum=+prompt("enter the num")
//  if(usernum%2==0){
//  console.log("even no ")
// }else{
    
//     console.log("odd no ")
// }
// var usernum=+prompt("enter the num")
//  if(usernum<=10){
//  console.log("Its to cold outside ")
// }else if ( usernum>10 && usernum<=20){
    
//     console.log("Today’s Weather is cool.")
// }else if ( usernum>20 && usernum<=30){
    
//     console.log("The Weather today is Normal")
// }else{
//     console.log("It is too hot outside.")

// }

// var num1=+prompt("enter Number1")
// var num2=+prompt("enter Number2")
// var opr=prompt("enter operator")

// if(opr=='+'){
//     console.log(num1+num2)
// }else if (opr=='-'){
//     console.log(num1-num2)
    
// }else if (opr=='*'){
//     console.log(num1*num2)
    
// }else if (opr=='/'){
//     console.log(num1/num2)
    
// }else{
    
//     console.log("undefined operator")
// }

// var num1=+prompt("enter first no")
// var num2=+prompt("enter second no")

// if(num1>num2){
//     console.log(num1 +  " num1 is greator than num 2 "+ num2)
// }else if(num1==num2){
//     console.log(num1 +  " num1 is is equals to num 2 "+ num2)
    
// }else{
//     console.log(num2 +  " num2 greator than num 1 "+ num1)

// }

// var para=prompt("")
// if(para.charAt(0)=='a' || para.charAt(0)=='e' ||  para.charAt(0)=='i' || para.charAt(0)=='o' || para.charAt(0)=='u'  ){
//     console.log("the first character of the para is vowel")
// }else{
//     console.log("the first character of the para is not a vowel")

// }
// var pass="ahmed shabbir"
// var upass=prompt("enter the pass")
// if (pass==upass){
//     console.log("Correct! The password you entered matches the original password " + upass)
// }else if(upass==0){
    
//     console.log("Please enter the  Paswword ")

// }else if (pass!=upass){
//     console.log("Incorrect Paswword " + upass)
// }



// var StdName = []
// var StdNo = []
// var Score;


// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))
// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))
// StdName.push(prompt("Enter Student Name"))
// StdNo.push(prompt("Enter Student Marks"))



// for (let i = 0; i < StdNo.length; i++) {
//     Score = StdNo[i] / 500 * 100;
//     console.log(StdName[i] +"Score Is "+ StdNo[i] +" & Percentage is " + Score +".")
// }



// var Colors = ['Red','Green','Blue']
// var AddColor;
// var Addindex ;

//  console.log("List Of Colors \n" + Colors)
//  console.log("What Color You Want To Add in Start ?")
//  Colors.unshift(prompt("Add Color"))
//  console.log("List Of Colors \n" + Colors)

//  console.log("What Color You Want To Add in End ?")
//  Colors.push(prompt("Add Color")) 
//  console.log("List Of Colors \n" + Colors)

//  console.log("What Color You Want To Add in Start ?")
//  Colors.unshift(prompt("Add Color"))
//  Colors.unshift(prompt("Add Color"))
//  console.log("List Of Colors \n" + Colors)

//  Colors.pop() 
//  console.log("List Of Colors \n" + Colors)

// AddColor = prompt("Add Color")
// Addindex = prompt("Add Index")

// Colors.splice(Addindex,0,AddColor)
// console.log("List Of Colors \n" + Colors)

// var removeColor = prompt(" Color Index")
// var removeIndex = prompt(" Color Index")

// Colors.splice(removeColor,removeIndex)
// console.log("List Of Colors \n" + Colors)

var StdName = []
var StdNo = []
var Score;


StdName.push(prompt("Enter Student Name"))
StdNo.push(prompt("Enter Student Marks"))
StdName.push(prompt("Enter Student Name"))
StdNo.push(prompt("Enter Student Marks"))
StdName.push(prompt("Enter Student Name"))
StdNo.push(prompt("Enter Student Marks"))



for (let i = 0; i < StdNo.length; i++) {
    Score = StdNo[i] / 500 * 100;
    console.log(StdName[i] +"Score Is "+ StdNo[i] +" & Percentage is " + Score +".")
}


// Q 9

 var Colors = ['Red','Green','Blue']
 var AddColor;
 var Addindex ;

 console.log("List Of Colors \n" + Colors)
 console.log("What Color You Want To Add in Start ?")
 Colors.unshift(prompt("Add Color"))
 console.log("List Of Colors \n" + Colors)

 console.log("What Color You Want To Add in End ?")
 Colors.push(prompt("Add Color"))
 console.log("List Of Colors \n" + Colors)

 console.log("What Color You Want To Add in Start ?")
 Colors.unshift(prompt("Add Color"))
 Colors.unshift(prompt("Add Color"))
 console.log("List Of Colors \n" + Colors)

 Colors.pop()
 console.log("List Of Colors \n" + Colors)

 AddColor = prompt("Add Color")
 Addindex = prompt("Add Index")

 Colors.splice(Addindex,0,AddColor)
 console.log("List Of Colors \n" + Colors)

 var removeColor = prompt(" Color Index")
 var removeIndex = prompt(" Color Index")

 Colors.splice(removeColor,removeIndex)
 console.log("List Of Colors \n" + Colors)




 // Q 10

 var StdNo = []

for (let i = 0; i < 5; i++) {
    StdNo.push(+prompt("Enter Student Marks"))
}
console.log(StdNo.sort((function(a,b){return a-b})));
console.log(StdNo.sort().toString())



 // Q 11

 var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
 console.log(Citys.slice(1,3))

 // Q 12
 var Citys = ['This','Is','My','Cat']
 console.log(Citys.join(' ',','))


 // Q 13
 var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
for (let i = 0; i < Citys.length; i++) {
    console.log(i+1 + ' ' + Citys[i])
 }

// Q 14
  var Citys = ['karachi','Islamabad','Quetta','peshawar','lahore']
 for (let i = Citys.length -1 ; i >= 0 ; i--) {
    console.log(i+1 + ' ' + Citys[i])
 }


 // Chapter 17-20   ARRAYS AND LOOP

// question1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 


// question2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var size =matrix.length;
for(var i=0;i<3;i++)
{
    for(var j=0;j<4;j++)
    { 
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}


// question3
// 3. Write a program to print numeric counting from 1 to 10.
for(var i=0;i<10;i++)
{
    document.write((i+1)+"<br>");
}


// question4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var number = prompt("Enter a number to show its multiplication table");
number=parseInt(number);
var mul;
var length=prompt("Enter the length of multiplication table");
length=parseInt(length);
while(length===-1||length===0)
{
    alert("Please! Enter a positive number for length");
    length=prompt("Enter the length of multiplication table");
    length=parseInt(length);
    if(length>0)
    {
        break;
        alert("Correct Now see the table");
    }
}
document.write("Multiplication table of &nbsp;"+number+"<br>");
document.write("Length &nbsp;"+length+"<br>");
for(var i=1;i<=length;i++)
{
    mul=number*i;
    document.write("<br>"+number+" x "+i+" = "+mul);
}


// question5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
var fruits = ["apple","banana","mango","orange","strawberry"];
var size=fruits.length;
for(var i=0;i<size;i++)
{
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<size;i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}



// question6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>Counting:</b><br>");
for(var i=1;i<=15;i++)
{
    document.write(i+" , ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br><br><b>Reverse Counting:</b><br>");
for(var i=15;i>=1;i--)
{
    document.write(i+" , ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<br><br><b>Even:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+" , ");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<br><br><b>Odd:</b><br>");
for(var i=1;i<=20;i=i+2)
{
    document.write(i+" , ");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<br><br><b>Series:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+"k, ");
}



// question7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
var size=A.length;
var check=false;
for(var i=0;i<=size;i++)
{
    if(search===A[i])
    {
        alert(search+" is available at index "+(i+1)+" of our bakery");
        check=true;
        break;
    }
}
if(check==false)
{
    alert("We are sorry "+search  +" is not available in our bakery");
}


// question8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var larger=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]>larger)
    {
        larger=A[i];
    }
}
document.write("<br>The largest number is "+larger+"<br><br>");



// question9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var small=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]<small)
    {
        small=A[i];
    }
}
document.write("<br>The smallest number is "+small+"<br><br>");



// question10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for(var i=1;i<=100;++i)
{
    if(i%5==0)
    {
        document.write(i+" , ");
    }
}   



// chapt 21 -40

// 1st Question
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName);


// 2nd Question
var favPhone = prompt("What is your favorite Mobile Phone?");
document.write("<h3>My favorite Phone is : " + favPhone + "</h3><br>");
document.write("<h3>Length of the String : " + favPhone.length + "</h3>");


// 3rd Question
var myCountry = "Pakistani";
document.write("<h3>String : " + myCountry + "</h3><br>");
document.write("<h3>Index of 'n' : " + myCountry.indexOf('n') + "</h3><br>");


// 4th Question
var greetings = "Hello World";
document.write("<h3>String : " + greetings + "</h3><br>");
document.write("<h3>Last Index of 'l' : " + greetings.lastIndexOf('l') + "</h3><br>");


// 5th Question
var myNationality = "Pakistan";
document.write("<h3>String : " + myNationality + "</h3><br>");
document.write("<h3>Character at Index 3 : " + myNationality.charAt(3) + "</h3><br>");


// 6th Question
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName =  firstName.concat(" ", lastName);

alert("Welcome " + fullName);


// 7th Question
var city = "Hyderabad";
document.write("<h3>City : " + city + "</h3><br>");
document.write("<h3>After Replcement : " + city.replace("Hyder","Islam") + "</h3><br>");


// 8th Question
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h3>After Replcement : " + message.replace(/and/g, "&") + "</h3><br>");


// 9th Question
var num = "472";
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");
num = Number(num);
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");


// 10th Question
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Upper Case : " + str.toUpperCase() + "</h3><br>");


// 11th Question
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Title Case : " + str[0].toUpperCase() + str.substring(1) + "</h3><br>");


// 12th Question
var num = 35.36 ;
document.write("<h3>Number : " + num + "</h3><br>");
num = num.toString();
document.write("<h3>Result : " + num.replace('.',"") + "</h3><br>");


// 13th Question
var userName=prompt("Enter your Username : ");
var message;
var split=[];
var arr=[];
for(var i = 0;i < userName.length; i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
    {
            message="Username is correct!";
    }
    while(arr[i]==33 || arr[i]==44 || arr[i]==46 || arr[i]==64)
    {
        alert("please enter a valid userName");
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
            {
                break;
            }
        }
    }
}
alert(message);


// 14th Question
var dishes = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchDish = prompt("Welcome to ABC Bakery, what do you want to order sir/mam? ");
var found = dishes.includes(searchDish);
if(found)
{
    document.write(searchDish + " is available at index " + dishes.indexOf(searchDish) + " in our bakery");
}
else
{
    document.write("We are sorry. " + searchDish + " is not available in our bakery");
}


// 15th Question
var password = prompt("Please enter your password : ");
if (isNaN(parseInt(password[0])))
{
    if (password.length < 6) {
        alert("Your password must be at least 6 characters");
    }
    if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.");
    }
}
else  {
    alert("Password cannot begin with a number.");
}


// 16th Question
var university = "University of Karachi";
university = university.replace(/\s/g, "");
university = university.split('');
for (var i = 0; i < university.length; i++)
{
    document.write(university[i] + "<br>");
}


// 17th Question
var userInput = prompt("Please enter something : ");
document.write("User Input : " + userInput + "<br>");
document.write("Last character of input : " + userInput.charAt(userInput.length-1));


// 18th Question
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
//var count = (str.match(/the/g) || []).length;
var count = str.split("the").length - 1;
document.write("Text : " + str + "<br>");
document.write("There are " + parseInt(count) + " occurrence(s) of the word " + "'the'" + "<br>");



// 19 Question
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number > 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number should be non-negative.");
}


// 20 Question
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number <= 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number is non-negative.");
}


// 21 Question
var number = prompt("Enter a Number (positive or negative) : ");

document.write("The absolute value of : " + Math.abs(number) + "<br>");


// 22 Question
document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");

document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");


// 23 Question
var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin + "<br>");
    document.write("random coin value : Heads" + "<br>");
}
else if(coin == 1)
{
    document.write(coin + "<br>");
    document.write("random coin value : Tails" + "<br>");
}


// 24 Question
document.write("random number between 1 and 100 is : " + Math.floor(Math.random() * 101) + "<br>");


// 24 Question
var weight = prompt("Enter your weight in kilograms : ");
weight = weight.split("kgs" || "kilograms");
weight = parseInt(weight);
document.write("The weight of user is : " + weight + " kilograms <br>");


// 25 Question
var secretNumber = Math.floor(Math.random() * 11) + 1;

while(userChoice != secretNumber)
var userChoice = prompt("Enter a number between 1 and 10 : ");
{
    if(parseInt(userChoice) == parseInt(secretNumber))
    {
        alert("Congrats! You guessed it right.");
    }
    else{
        alert("Sorry! Try again.");
    }
}

// 26 Question
var date=new Date();
document.write(date);

// 27 Question
var arrMonths=["January","February","March","April","May","June","July","August","September",
"October","November","December"];
var Month=new Date();
var month=Month.getMonth();
document.write("Current Month: "+arrMonths[month+1]);

// 28 Question
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
document.write("Today is: "+CurrentDay);


// 29 Question
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
if(CurrentDay==="Sat"||CurrentDay==="Sun")
{
    document.write("Its fun day");
}
else{
    document.write("Its a working day");
}

// 30 Question
var Date=new Date();
var date=Date.getDate();
if(date<16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

// 31 Question
var num=new Date();
var millisecondsSinceMidnight=num.getTime();
var InSeconds=(millisecondsSinceMidnight/1000);
var InMinutes=InSeconds/60;
document.write("Current date:- "+num+"<br>");
document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

// 32 Question
var num=new Date();
var check=num.getHours();
if(check<12)
{
    alert("Its AM");
}
else{
    alert("Its PM");
}

// 33 Question
var laterDate=new Date(2020,11,31);
document.write("Later Date: "+laterDate);

// 34 Question 
var num1=new Date(2020,3,24);
var num2=new Date();
sdr=num1.getTime();
edr=num2.getTime();
var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
document.write(num+" days have passed since "+num1);

// 35 Question
var num1=new Date(2020,0,1);
var num1c=num1.getTime();
var num2=new Date();
var num2c=num2.getTime();
var diff=num2c-num1c;
var secPassed=Math.floor((diff/1000));
document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

// 36 Question
var currentDate=new Date();
var getHours=currentDate.getTime();
var currentTime=Math.floor(getHours/(1000*60*60));
getHours=getHours+(1000*60*60);
var incrementedTime=Math.floor(getHours/(1000*60*60));
var diff=incrementedTime-currentTime;
diff--;
var newDate=new Date();
newDate.setHours(diff);
document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

// 37 Question
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
var YearBack100=currentYear-100;
var YearBack100Date=new Date();
YearBack100Date.setFullYear(YearBack100);
alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

// 38 Question
var age=prompt("Enter your age?");
age=parseInt(age);
var date=new Date();
var currentYear=date.getFullYear();
var HisAge=currentYear-age;
var dateofBirth=new Date(HisAge);
var yearDate=dateofBirth.setFullYear(HisAge);
var YearOfdateofBirth=dateofBirth.getFullYear();
document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


// 39 Question
var name=prompt("Enter your name?");
var month=prompt("Enter the month?");
var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
units=parseFloat(units);
var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
chargesPerUnit=parseFloat(chargesPerUnit);

var netAmountPayable=units*chargesPerUnit;
var NetAmountPayable=netAmountPayable.toFixed(2);
var LatePaymentSurcharge=(10/100)*NetAmountPayable;
var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
GrossAmountPayable=GrossAmountPayable.toFixed(2);

var finalUnits=units.toFixed(2);
var finalChargesPerUnit=chargesPerUnit.toFixed(2);

document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
+finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
"Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
"<br>Gross Amount Payable (After due date): "+GrossAmountPayable);



// 40 Question
function power(base,power)
{
    var p = 1;
    for (var i=0; i<power; i++) {
        p *= base;
    }
  return p;
}

alert(power(5,3));


// 41 Question
var year = prompt("Enter the year :");
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert("Leap year");
}
else {
    alert("Not Leap year");
}


// 42 Question
function sidesofTriangle(a,b,c)
{
    var Sum = (a + b + c)/2;
    return Sum;
}

function Area(S,a,b,c) {
    var area = S * ((S-a) * (S-b) * (S-c));
    return area;
}

let side1 = +prompt('Enter side 1: ');
let side2 = +prompt('Enter side 2: ');
let side3 = +prompt('Enter side 3: ');

var S = sidesofTriangle(side1,side2,side3);
var A = Area(S,side1,side2,side3);
alert("The area of Triangle is : " + A);


// 43 Question
function mainFunction()
{
    let firstSubjectmarks = +prompt('Enter first Subject Marks : ');
    let secondSubjectmarks = +prompt('Enter second Subject Marks : ');
    let thirdSujectmarks = +prompt('Enter third Subject Marks: ');
    var avg = Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
    alert("The average of the marks is : " + avg);
    var total = 100;
    Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
}
function Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks)
{
    var avg = (firstSubjectmarks + secondSubjectmarks + thirdSujectmarks)/3;
    return avg;
}

function Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks) 
{
    var firstSubjectPercent = (firstSubjectmarks/total)*100;
    var secondSubjectPercent = (secondSubjectmarks/total)*100;
    var thirdSujectPercent = (thirdSujectmarks/total)*100;
    alert("The percentage of first Subject is : " + firstSubjectPercent);
    alert("The percentage of second Subject is : " + secondSubjectPercent);
    alert("The percentage of third Subject is : " + thirdSujectPercent);
}

mainFunction();


// 44 Question
let myStr = prompt('Enter the String: ');
let findchar = prompt('Enter the Character to find: ');
var found = findIndex(myStr,findchar);
alert("The value found at index : " + found);

function findIndex(myStr, findchar)
{
    for(var index=0; index < myStr.length; index++)
    {
        if(myStr[index] === findchar)
        {
            return index;
        }
    }
    return -1;
}


// 45 Question
var originalSentence = prompt("Enter the sentence : ");
var sentence = removeVowels(originalSentence);
alert(sentence);

function removeVowels(sentence) 
{
    sentence = sentence.replace(/[aeiou]/ig, '');
    return sentence;
}


// 46 Question
function findVowelOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let seenVowel = false;
  
    for (const letter of str.toLowerCase()) 
    {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (seenVowel) {
              count++;
              seenVowel = false;
            } 
            else {
              seenVowel = true;
            }
            break;
          }
        default:
          seenVowel = false;
      }
    }
    return count;
}

var count = findVowelOccurrences();
alert("The number of vowels occurence is : " + count);


// 47 Question
var distance = prompt("ENter the distance between two cities in (km) : ");
kmtometers(distance);
kmtofeet(distance);
kmtoinches(distance);
kmtocm(distance);


function kmtometers(distance)
{
    var distanceinmeters = distance * 1000;
    alert("The distance in Meters is : " + distanceinmeters + " m");
}

function kmtofeet(distance)
{
    var distanceinft = distance * 3280.8399;
    alert("The distance in Feet is : " + distanceinft + " ft");
}

function kmtoinches(distance) 
{
    var distanceininches = distance * 39370.079;
    alert("The distance in Inches is : " + distanceininches + " in");
}

function kmtocm(distance) 
{
    var distanceincm = distance * 100000;
    alert("The distance in Centimeters is : " + distanceincm + " cm");
}


// 48 Question
var workingHours = prompt("Enter the working Hours : ");
var normalPayRate = 10;
var normalPay = 0;
if(workingHours > 40) {
    var overtimeHours = workingHours - 40;
    overtimePay = overtimeHours * 12;
    normalPay = 40 * normalPayRate;
    var totalPay = normalPay + overtimePay;
    alert("The overtime Pay is : " + overtimePay);
    alert("The Total Pay is : " + totalPay);
}
else{
    normalPay = workingHours * normalPayRate;
    alert("The normal Pay is : " + normalPay);
}


// 49 Question
var amount = prompt("Enter amount to withdraw : ");

var notesOf100 = parseInt(amount / 100);
var notesOf50 = parseInt((amount % 100) / 50);
var notesOf10 = ((amount % 100) % 50) / 10;
var remAmount = ((amount % 100) % 50) % 10;

alert("You will have " + notesOf100 + " hundred notes " + notesOf50 + " fifty notes " + notesOf10 + " ten notes");



// 50 Question
function showAlert() 
{
    alert("You clicked Me!");
}

function deleteRow(id)
{
    document.getElementById(id).remove();
}

function changeImage()
{
    document.getElementById("myImage").src = 'images/InfinixNote7-b.jpg';
}

function restoreImage() {
    document.getElementById("myImage").src = 'images/SamsungGalaxyA31-b.jpg';
}


var count = parseInt(document.getElementById('counter').innerHTML);

function increaseCount() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decreaseCount() {
    count--;
    document.getElementById("counter").innerHTML = count;
}