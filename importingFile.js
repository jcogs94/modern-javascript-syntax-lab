import name, { age, job } from './exportingFile.js'

const ex7 = () => {
    console.log('Name:', name)
    console.log('Age:', age)
    console.log('Job:', job, '\n')
}

export { ex7 }
