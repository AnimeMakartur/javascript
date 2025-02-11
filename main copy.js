
const minSalary = 500
const maxSalary = 5000
const employees = 10
let totalSalary = 0


console.log(`Задача 1: Напишіть скрипт, який підраховує загальну суму зарплат працівників`)
for (let i = 1; i <= employees; i++) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    )

    console.log(`ЗП працівника номер ${i}: ${salary}$`)
    totalSalary += salary
} 
console.log(`Загальна сума зарплат: ${totalSalary}$`)


console.log(`Завдання 1 до задачі 1`)
for (let i = 1; i <= employees; i++) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    )
    if (salary > 3000) {
        console.log(`ЗП працівника номер ${i}: ${salary}$`)
    }
    totalSalary += salary
}
console.log(`Загальна сума зарплат: ${totalSalary}$`)


console.log(`Завдання 2 до задачі 1`)
for (let i = 1; i <= employees; i++) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    );
    console.log(`ЗП працівника номер ${i}: ${salary}$`)
    totalSalary += salary
}
const averageSalary = totalSalary / employees
console.log(`Середня зарплата: ${averageSalary}$`)


console.log(`Завдання 3 до задачі 1`);
const employees1 = parseInt(prompt("Введіть кількість працівників:"))
for (let i = 1; i <= employees1; i++) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    );
    console.log(`ЗП працівника номер ${i}: ${salary}$`)
    totalSalary += salary
}
console.log(`Загальна сума зарплат: ${totalSalary}$`)


console.log(`Задача 2: Підрахунок суми парних чисел у діапазоні`)
let start = Math.abs(prompt("Введіть початок діапазону:"))
let end = Math.abs(prompt("Введіть кінець діапазону:"))
if (start > end) {
    let temp = start
    start = end
    end = temp
}
let sum = 0
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}
console.log("Сума парних чисел у діапазоні: " + sum);


