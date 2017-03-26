/**
 * Created by Stefani on 24.3.2017 г..
 */
function PrintLines(array)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]=="Stop")
        {
            break;
        }
        console.log(array[i]);
    }
}

