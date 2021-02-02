function beggars(str = '') {
  return str.replace(/[A-Z]/g, (s) => ` ${s}`)
}

console.log(beggars('mochaPad'))
console.log(beggars('mochaPadPad'))
console.log(beggars('mochaPadMac'))
