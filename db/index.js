'use strict'
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// create the database instance that can be used in other database files
const db = module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});

// run our models file (makes all associations for our Sequelize objects)
const models = require('./models')

const studentNames = ['Anton Cataldi', 'Chaim Sash', 'Daniel Fattal', 'Dean Guo', 'Denise Agathocleous', 'Edmond Kotwick', 'Emily Tseng', 'Gabriel Rowe', 'Hannah Kim', 'Jacob Kayen', 'Jason Miguel', 'Jeff Kandel', 'Jonathan Liu', 'Judah Hamaoui', 'Julius Cassin', 'Keisuke Kido', 'Lada Tochtcheva', 'Marc Molta', 'Marcos Reynoso', 'Mike Luz', 'Natasha Desai', 'Nate Anecone', 'Pimpila Howe', 'Sam Bakkila', 'Samir Awuapara', 'Tina Lam', 'Wilson Wong', 'Zach Caceres', 'Ben McCain', 'Chloe Choi', 'Christopher Gupta', 'Edward Goo', 'Isaac Ibiapina', 'Jonah Livingston', 'Michael Chen', 'Ross Lowry']

const instructorNames = ['Cassio Zen', 'John McDonald', 'Gabriel Lebec', 'Omri Bernstein', 'Zeke Nierenberg', 'Damon Ye', 'Ian Munro', 'Lisa Pan', 'Robbyn Tongue', 'Sam Wheeler', 'Yoo-Nah Park']

const campusNames = ['FSA NYC', 'FSA Chicago', 'Grace Hopper']
const campusLocations = ['New York, New York', 'Chicago, Illinois', 'New York, New York']

const courseNames = ['Data Structures', 'Selector.js', 'Game of Life', 'Twitter.js', 'Wikistack', 'Shoestring', 'Trip Planner', 'Juke', 'Auther']

function generateStudents () {
  return studentNames.map(student => {
    var names = student.toLowerCase().split(' ')
    return models.Student.create({
      name: student,
      email: `${names[0]}${names[1]}@fullstackacademy.com`,
      password: `${names[0]}-${names[1]}123`
    })
  })
}

function generateInstructors () {
  return instructorNames.map(instructor => {
    return models.Instructor.create({
      name: instructor
    })
  })
}

function generateCampuses () {
  return campusNames.map((campus, index) => {
    return models.Campus.create({
      name: campus,
      location: campusLocations[index]
    })
  })
}

function randomCodeNum () {
  return Math.round(Math.random() * 100 + 200)
}

function generateCourses () {
  var codeNumArr = []
  return courseNames.map(course => {
    var codeNum = randomCodeNum()
    while (codeNumArr.indexOf(codeNum) !== -1) {
      codeNum = randomCodeNum()
    }
    codeNumArr.push(codeNum)
    return models.Course.create({
      name: course,
      code: `CS ${codeNum}`
    })
  })
}

function seed () {
  return Promise.all(generateCampuses().concat(generateInstructors(), generateStudents(), generateCourses()))
}

function setCampusAssociation (instance) {
  return instance.setCampus(Math.floor(Math.random() * 3 + 1))
}

function setManyAssociations (numOfAssocsInDB) {
  var numToMake = Math.floor(Math.random() * numOfAssocsInDB + 1)
  var arrOfAssocs = []
  for (var i = 0; i < numToMake; i++) {
    var assocId = Math.floor(Math.random() * numOfAssocsInDB + 1)
    while (arrOfAssocs.indexOf(assocId) !== -1) {
      assocId = Math.floor(Math.random() * numOfAssocsInDB + 1)
    }
    arrOfAssocs.push(assocId)
  }
  return arrOfAssocs
}

function generateAssociations () {
  return models.Student.findAll()
  .then(students => {
    students.forEach(student => {
      setCampusAssociation(student)
      student.setCourses(setManyAssociations(9))
    })
    return models.Course.findAll()
  })
  .then(courses => {
    courses.forEach(course => {
      setCampusAssociation(course)
      course.setInstructor(Math.floor(Math.random() * 11 + 1))
    })
    return models.Instructor.findAll()
  })
  .then(instructors => {
    instructors.forEach(instructor => {
      setCampusAssociation(instructor)
    })
  })
  .catch(console.error)
}

// sync the db, creating it if necessary
function sync(force=true, retries=0, maxRetries=5) {
  return db.sync({force})
  .then(function () {
    console.log('Seeding database...')
    return seed()
  })
  .then(function () {
    return generateAssociations()
  })
  .then(ok => console.log(`Synced models to db ${connectionString}`))
  .catch(fail => {
    // Don't do this auto-create nonsense in prod, or
    // if we've retried too many times.
    if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
      console.error(chalk.red(`********** database error ***********`))
      console.error(chalk.red(`    Couldn't connect to ${connectionString}`))
      console.error()
      console.error(chalk.red(fail))
      console.error(chalk.red(`*************************************`))
      return
    }
    // Otherwise, do this autocreate nonsense
    console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${name}...`)
    return new Promise((resolve, reject) =>
      require('child_process').exec(`createdb "${name}"`, resolve)
    ).then(() => sync(true, retries + 1))
  })
}

db.didSync = sync();
