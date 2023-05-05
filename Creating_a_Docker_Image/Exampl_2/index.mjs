import fs from 'fs'

fs.appendFile('my-file.txt', 'fille create Node.js', (err) => {
    if (err) throw err
    console.log('File save!')
})

setTimeout(()=> console.log('END'), 100000)