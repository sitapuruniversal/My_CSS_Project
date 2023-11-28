// Random Password Generator 
function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./";

  let allChars = "";

  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; ++i) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

document
  .getElementById("generateBtn")
  .addEventListener("click", function () {
    const length = document.getElementById("passwordLength").value;
    const includeUppercase =
      document.getElementById("includeUppercase").checked;
    const includeLowercase =
      document.getElementById("includeLowercase").checked;
    const includeNumbers =
      document.getElementById("includeNumbers").checked;
    const includeSymbols =
      document.getElementById("includeSymbols").checked;

    const generatedPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    if (generatedPassword !== "") {
      document.getElementById("passwordOutput").value = generatedPassword;
    }
  });

document.getElementById("copyBtn").addEventListener("click", function () {
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
