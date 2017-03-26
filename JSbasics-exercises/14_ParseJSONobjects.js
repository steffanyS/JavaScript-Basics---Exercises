/**
 * Created by Stefani on 25.3.2017 г..
 */
function solve(args) {
    let students=[];
    args.forEach(jsonString=>{
        let student=JSON.parse(jsonString);
        students.push(student);
    });

    console.log(students);
}