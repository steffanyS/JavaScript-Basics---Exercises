/**
 * Created by Stefani on 25.3.2017 г..
 */

function solve(args){
    let studentData=args
        .map(a=>a.split(' -> '))
        .map(tokens=>{

            return {
                name:tokens[0],
                age:tokens[1],
                grade:tokens[2]
            };
        });

    studentData.forEach(student=>{
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    })

}