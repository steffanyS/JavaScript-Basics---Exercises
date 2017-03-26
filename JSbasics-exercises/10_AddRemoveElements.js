/**
 * Created by Stefani on 24.3.2017 г..
 */
function AddRemove(array)
{
    let newArray=[];

    for(let i=0; i<array.length; i++)
    {
        let temp=array[i].split(' ');
        let command=temp[0];
        let number=temp[1];

        if(command=="add")
        {
            newArray.push(number);
        }

        if(command=="remove")
        {
            if(number>=0 && number<newArray.length)
            {
                newArray.splice(number,1);
            }
        }
    }

    for(let j=0; j<newArray.length; j++)
    {
        console.log(newArray[j]);
    }
}