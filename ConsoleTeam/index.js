
// var shell = new Termly({ 'daniel': 'daniel'})

var customCommands = {
    daniel: { // keep it equal to name till I change it
      name: 'daniel', // keep it equal to the key till I change it
      type: 'builtin', // OPTIONAL default to 'usr' if not passed
      man: 'List of available commands', // Manual Entry for the command OPTIONAL
      fn: function daniel() {
          
        // Here is where the action goes, do what you want and return a value
        // (more on context and arguments below)
        return `daniel you got the sauce`
      },
    },
    // ...more commands
  }
  var shell = new Termly({ commands: customCommands })









const terminal = document.querySelector('.terminal')
const display = document.querySelector('.display')
console.log(display)
terminal.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' ){
   console.log(e)
    const SHELL = []
    SHELL.push(`<br>${shell.run(`${e.target.value} `)}`)
    render(SHELL)
    }

})
let body =""

const render = (SHELL)=>{

    for(let i = 0 ; i < SHELL.length; i++  ){
        

        body += SHELL[i]
    }
display.innerHTML = body



}