

function printAll(){
    printString("A")
    .then(() => {
      return printString("B")
    })
    .then(() => {
      return printString("C")
    })
  }
  printAll()

async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()

  async function addAll(){
    let toPrint = ''
    toPrint = await addString(toPrint, 'A')
    toPrint = await addString(toPrint, 'B')
    toPrint = await addString(toPrint, 'C')
    console.log(toPrint) // Prints out " A B C"
  }
  addAll()

  
  