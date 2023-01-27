function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function () {
    return this.salary
  },
  setSalary: function (sal) {
    this.salary = sal
  },
  //2. dobijenu f-ju pozivamo i to na this, emp1 objektu
  accept: function (visitorFunction) {
    visitorFunction(this)
  },
}
///
const emp1 = new Employee('Jon Doe', 700)
console.log(emp1)

function extraSalary(emp) {
  //3. menjamo salary jer imamo pristup emp objektu
  emp.setSalary(emp.getSalary() * 2)
}

//1. emp1 prosledjujemo f-ju, visitor f-ju
emp1.accept(extraSalary)
console.log(emp1.getSalary())
