//Q.1 Sum of positive number

var array = [1, -2, 3, 4, -5]
function sumOfPositiveNumber() {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum = sum + array[i]
        }
    }
    console.log("sum of positive Number :", sum)
}

sumOfPositiveNumber()

// output
// PS E:\github\awdiz\Javascript-Test1\Test1> node .\Test1.js
// sum of positive Number : 



//Q.2  find key

var obj = { name: "john", age: 25, city: "New York" }
var key = "age"
function doesKeyExists(obj, key) {
    //console.log()
    // if(key==obj.age)
}

doesKeyExists(obj, key)


//Q.3 max value

var array = [2, 8, 5, 1, 9]
var max = array[0];
function findMaxVal() {
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log("max value:", max)
}

findMaxVal()

/*output
PS E:\github\awdiz\Javascript-Test1\Test1> node .\Test1.js
max value: 9  */

//Q.5 Array Reverse

var array = [1, 2, 3, 4, 5]
var reversearray = []
function reverseArray() {

    for (var i = array.length - 1; i >= 0; i--) {
        reversearray.push(array[i])
    }
    console.log("reverse array:", reversearray)
}
reverseArray()

/* output
PS E:\github\awdiz\Javascript-Test1\Test1> node .\Test1.js
reverse array: [ 5, 4, 3, 2, 1 ]
*/


//Q.7 Remove duplicate elements

var array = [1, 2, 2, 3, 4, 4, 5]
var arr = []
var cnt = 0
function removeDuplicateElement() {
    for (var i = 0; i < array.length; i++) {
        cnt = 0
        for (var j = i + 1; j < array.length; j++) {
            // console.log(array[i], array[j])
            if (array[i] == array[j]) {
                cnt++

            }

        }
        if (cnt == 0) {
            arr.push(array[i])
        }
    }
    console.log(" unique elements of array :",arr)
}

removeDuplicateElement()

/* output

PS E:\github\awdiz\Javascript-Test1\Test1> node .\Test1.js
unique elements of array :[ 1, 2, 3, 4, 5 ]
*/


//Q.9 element frequency

var array=[1,2,3,1,2,4,1]
var frequency=new Object()
function elementFrequency()
{
    for(var i=0;i<array.length;i++)
    {
        var cnt=0
        for(var j=0;j<array.length;j++)
        {
            if(array[i]==array[j])
            {
                cnt++
            }
        }
         frequency.assign(array[i],cnt)


    }
    console.log(frequency)
}

elementFrequency()




