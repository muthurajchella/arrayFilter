let iteams = [
    {id:1, name: "Mobile1", cost: 2000},
    {id:2, name: "Mobile1", cost: 3000},
    {id:3, name: "Mobile1", cost: 4000},
    {id:4, name: "Mobile1", cost: 5000},
    {id:5, name: "Mobile1", cost: 5000},
    {id:6, name: "Mobile1", cost: 6000},
];

let result = iteams.filter((value)=> {
    return value.cost <=5500;
});
console.log(result);