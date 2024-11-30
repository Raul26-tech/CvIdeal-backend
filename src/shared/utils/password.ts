import bcrypt from "bcryptjs";

async function hashGenerate(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function hashCompare(password: string, hash: string) {
  const match = await bcrypt.compare(password, hash);
  return match;
}

export { hashGenerate, hashCompare };
