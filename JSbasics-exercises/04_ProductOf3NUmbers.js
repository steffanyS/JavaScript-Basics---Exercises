/**
 * Created by Stefani on 24.3.2017 г..
 */
function Product(array)
{
    let num1=Number(array[0]);
    let num2=Number(array[1]);
    let num3=Number(array[2]);

    if(num1<0 && num2<0 && num3<0)
    {
        console.log("Negative");
    }

   else if(num1<0 ^ num2<0 ^ num3<0)
    {
        console.log("Negative");
    }

    else
    {
        console.log("Positive")
    }
}

Product(['2','3','1']);