const axios = require('axios')
const {program} = require('commander')
const packageJson = require('./../package.json')

const Index = () => {
  program.option('-v, --version', 'output version')

  program.parse(process.argv)

  const options = program.opts()

  if (options.version) {
    console.log(packageJson.version)
  } else {
    // axios
    //   .get('https://api.66mz8.com/api/quotation.php?format=json')
    //   .then(res => {
    //     console.log(res.data.quotation)
    //   })
    //   .catch(err => {
    //     console.log('something wrong!!! check out network')
    //   })
    console.log('wait a second, the source dismissed.')
  }
}

module.exports = Index
