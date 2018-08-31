
/*
function printString(string, callback){
    setTimeout(
      () => {
        console.log(string)
        callback()
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

  function printAll(){
    printString("A", () => {
      printString("B", () => {
        printString("C", () => {})
      })
    })
  }
  printAll()


  
*/

function addString(previous, current, callback){
    setTimeout(
      () => {
        callback((previous + ' ' + current))
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }
  
  
  function addAll(){
    addString('', 'A', result => {
      addString(result, 'B', result => {
        addString(result, 'C', result => {
         console.log(result) // Prints out " A B C"
        })
      })
    })
  }
  addAll()
  