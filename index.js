class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    string = this.capitalize(string)
    const wordList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const stringSplit = string.split(' ')
    for(let i=0; i<stringSplit.length; i++){
      if(wordList.includes(stringSplit[i])===false){
        stringSplit[i] = this.capitalize(stringSplit[i])
      }
    }
    return stringSplit.join(' ')
  }
}

console.log(Formatter.titlesize('happy birthday and the new year'))