const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.trim().split('\n').slice(1);
    const fields = {};

    for (const student of students) {
      const [firstname, lastname, age, field] = student.split(',');
      if (firstname && lastname && age && field) {
        if (fields[field]) {
          fields[field].push(firstname);
        } else {
          fields[field] = [firstname];
        }
      }
    }

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
