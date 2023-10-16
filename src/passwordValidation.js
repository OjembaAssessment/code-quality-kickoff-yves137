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

  // check if password is not ten characters long
  if (!/^.{10}$/.test(password)) return false;

  // check if password is not containing numerical characters
  if (/^\d+$/.test(password)) return false;

  // check if password does not contains alphabetic characters
  if (/^[a-zA-Z]+$/.test(password)) return false;

  // check if password contains characters other than alphanumeric characters
  if (!/^[a-zA-Z0-9]+$/.test(password)) return false;

  // check if the password to contain at least one lowercase letter and at least one uppercase letter
  if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) return false;

  // check if password has directly ascending/descending sequence of numbers
  if (
    !/^(?!.*(123|321|234|432|345|543|456|654|567|765|678|876)).*$/.test(
      password
    )
  )
    return false;

  // check if password includes forbidden password
  if (forbiddenPasswords.includes(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false; // check if password length is less than 4 characters
  return true;
}
