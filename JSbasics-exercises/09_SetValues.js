function Index(text)
{
    let count=Number(text[0]);
    let array=[];

    for(let i=1; i<text.length; i++)
    {
        let temp=text[i].split(' - ');
        let index=temp[0];
        let number=temp[1];

        array[index]=number;
    }

    for(let i=0; i<count; i++)
    {
        if (array[i] == undefined) {
            console.log(0);
        }
        else
        {
            console.log(array[i]);
        }
    }
}