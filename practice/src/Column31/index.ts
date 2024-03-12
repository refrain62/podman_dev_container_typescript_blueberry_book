import { increment, value } from "./counter.js"

console.log(`カウンタの値は${increment()}です。`)
console.log(`カウンタの値は${increment()}です。`)
console.log(`カウンタの値は${increment()}です。`)

increment()
console.log(`カウンタの値は${value}です。`)
increment()
console.log(`カウンタの値は${value}です。`)
increment()
console.log(`カウンタの値は${value}です。`)

// エラー 
// value = 100
