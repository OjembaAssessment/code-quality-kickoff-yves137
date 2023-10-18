/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  
  // if falsy value return 0
  if (!password) return 0;

  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  const regex = new RegExp(/(.+?)\1{1,}/, "g");
  const matchesList = password.match(regex);

  // determine penalty points
  if(matchesList === null) return 0;
  return matchesList.reduce((sum, occurrence) => (sum + occurrence.length === 2 ? 1 : 2),0);
}
