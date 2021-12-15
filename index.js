let content=document.getElementById("contentDiv")
let avtrURL=document.getElementById("avater_url")
// let url="https://api.github.com/users"
let url="https://jsonplaceholder.typicode.com/photos"
const responseFromFetch = fetch(url).then(response => {
    // signifies retrieving of the data
    return response.json()
}).then(data => {
    // data manipulation
    console.log(data)
    

    buildTable(data)
function buildTable(data)
{
    var table=document.getElementById('myTable')

    for(var i=0;i<=10;i++)
    {
        var row= `
                <tr>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td>${data[i].url}</td>
                <td>${data[i].thumbnailUrl}</td>
                </tr>
                 `
        table.innerHTML += row;

    }
}
})