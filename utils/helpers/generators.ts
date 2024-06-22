import * as crypto from "crypto";

export const GenerateRandomPassword = (): string => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_+={}[];':\"\\|,.<>/?";

  // Combine all character pools:
  const allChars = lowercaseChars + uppercaseChars + numbers + symbols;

  // Generate random characters using crypto.randomFillSync:
  const passwordBuffer = new Uint8Array(10);
  crypto.randomFillSync(passwordBuffer);

  // Convert bytes to password characters:
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor((passwordBuffer[i] / 256) * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};
