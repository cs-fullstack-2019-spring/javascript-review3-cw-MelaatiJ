// PROBLEM1
// Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
//     Once the user quits, print all items in the array.
//     DO NOT print the array, print the items/elements in the array.


    function problem1()
    {
    //making a function where it ask the user what is there favorite color
    var favoriteColor=[];
    //making an empty array so that way whatever the person inuts automatically goaes in the array

    var userinput = prompt("What is your favorite color? Print quit when finished");


    while(userinput !== "quit")
    {
        favoriteColor.push(userinput);
        userinput = prompt("what is your favorite color? Print quit when finished");
        //console.log(userinput);

    }


    favoriteColor.forEach(
        function(color)
        {
            console.log(color)
        }

    );



//console.log(favoriteColor);

}


}

//
// Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
//     You should be able to call your function from your main function.
//

function problem2()


{
var spanishTranslator = prompt("Enter a number from 1 through 5");
//making a switch case where whatever imput the user provides i provide the answer with the correspoding input.
switch (spanishTranslator)
{
    case "1":
        console.log("Uno");
        break;
    case "2":
        console.log("Dos");
        break;
    case "3":
        console.log("Tres");
        break;
    case "4":
        console.log("Cuatro");
        break;
    case "5":
        console.log("Cinco");
        break;
    default:
        console.log("Did not enter a number 1 through 5")



}


}

function problem3()
{










}
main();


function main()
{
    // problem1();
    // problem2();
    // problem3();
    // problem4();
//
}