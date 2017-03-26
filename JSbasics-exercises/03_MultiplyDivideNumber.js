/**
 * Created by Stefani on 24.3.2017 г..
 */

function multiplyDivide(array) {
    let num1=Number(array[0]);
    let num2=Number(array[1]);
    let result=0;

    if(num2>=num1)
    {
        result=num1*num2;
    }
    else
    {
        result=num1/num2;
    }

    console.log(result);
}

multiplyDivide(['13','13']);