let fs = require('fs');
const fs2 = require('fs');

fs2.readFile('./header.json', 'utf8', (error, jsonFile) => {
    if (error) return console.log(error);
    // console.log(jsonFile);

    const jsonData = JSON.parse(jsonFile);
    console.log(jsonFile);

    //비동기 방법
    fs.readFile('./todos.json', 'utf8', (error, jsonFile) => {
        if (error) return console.log(error);
        // console.log(jsonFile);

        const jsonData = JSON.parse(jsonFile);
        console.log(jsonFile);

        const todos = jsonData.todos;
        todos.forEach(todo => {
            console.log(todo);
        });

    });
});

//동기 방법
// const fs2 = require('fs');
// const jsonFile = fs2.readFileSync('./todos.json', 'utf8');
// const jsonData = JSON.parse(jsonFile);
// console.log(jsonData);
// const todos = jsonData.todos;
// todos.forEach(todo => {
//     console.log(todo);
// });