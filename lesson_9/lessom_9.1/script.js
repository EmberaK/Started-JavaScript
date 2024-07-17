let company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 600 },
    ],
    development: {
        web: [
            { name: "Petter", salary: 2000 },
            { name: "Alex", salary: 1000 },
        ],
        internals: [{ name: "Jack", salary: 1200 }],
    },
};

function sumSalaries(company) {
    let sum = 0;
    if (Array.isArray(company)) {
        for (let i = 0; i < company.length; i++) {
            sum += company[i].salary;
        }
    } else {
        for (let key in company) {
            sum += sumSalaries(company[key]);
        }
    }
    return sum;
}

let newSumSalaries = sumSalaries(company);
console.log(newSumSalaries);