const axios = require('axios')
const {program} = require('commander')

const Index = () => {
  program.option('-v, --version', 'output version')

  program.parse(process.argv);

  const options = program.opts();

  if (options.version) {
    console.log('v1.0.0')
  } else {
    axios
      .get('https://api.66mz8.com/api/quotation.php?format=json')
      .then(res => {
        console.log(res.data.quotation)
      })
  }
}

module.exports = Index

// https://api.66mz8.com/api/quotation.php?format=json
