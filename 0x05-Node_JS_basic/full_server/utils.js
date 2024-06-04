import fs from 'fs';

const readDatabase = (filePath) => (
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
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

        resolve(fields);
      }
    });
  })
);

export default readDatabase;
