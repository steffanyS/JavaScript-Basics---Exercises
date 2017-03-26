/**
 * Created by Stefani on 24.3.2017 г..
 */
function solve(args)
{
    let obj={};

    for(let arg of args.slice(0,args.length-1))
    {
        let tokens=arg.split(' ');

        let key=tokens[0];
        let value=tokens[1];

        obj[key]=value;
    }

    let key=args[args.length-1];

    console.log(obj[key] || "None");
}

solve('key value\n eulav\ntest tset\nkey'.split('\n'));