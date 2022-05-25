let arrayReq = [
    [null,200], [100,300], [200,null]
]
for (let j = 0; j < arrayReq.length;j++){
    let requiredRange = arrayReq[j];
let i = 0
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let result = courses.filter(el => !(el.prices[i] == null & el.prices[i+1] == null)
    ? (el.prices[i] != null ? (requiredRange[i+1] != null ? el.prices[i] <= requiredRange[i+1] : true): false )
    & (el.prices[i+1] != null ? (requiredRange[i] != null ? el.prices[i+1] >= requiredRange[i] : true) : true )

    || (el.prices[i+1] != null ? (requiredRange[i] != null ? el.prices[i+1] >= requiredRange[i] : true)
        & (requiredRange[i+1] != null ? el.prices[i+1] <= requiredRange[i+1] : true) : false) : false)

console.log(result)
}