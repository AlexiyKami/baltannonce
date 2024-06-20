export function isPasswordCorrect(passwordRequirements) {
  return !Object.values(passwordRequirements).some((value) => value === false);
}
