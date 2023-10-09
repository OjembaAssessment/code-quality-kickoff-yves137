/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if(!password) return 0
  if (typeof password !== "string") password = String(password);
  const sequenceRegex = /(.+?)\1{1,}/g;
  const regex = new RegExp(sequenceRegex, 'g');
  const matches = password.match(regex);
  let maxLength= matches===null ?0:matches.map(v=>v.length===2?1:2).reduce((acc,red)=>acc+red,0)===1?1:2
  return maxLength

}
