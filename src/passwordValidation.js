export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  
  if (
    !/^.{10}$/.test(password) ||
    /^\d+$/.test(password) ||
    /^[a-zA-Z]+$/.test(password) ||
    !/^[a-zA-Z0-9]+$/.test(password) ||
    !/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password) ||
    !/^(?!.*(123|321|234|432|345|543|456|654|567|765|678|876)).*$/.test(password) ||
    forbiddenPasswords.includes(password)
  )
    return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}

