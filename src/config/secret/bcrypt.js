// This Module is responsible for encrypting user password

// Importing 3rd Party Module
import bcrypt from "bcryptjs";
import To from "await-to-js";

// This Method is responsible for encrypting password using technique of salt and hash
const encrypt = async password => {
  const saltRounds = await parseInt(process.env.SALT_ROUNDS);
  const plainPassword = password;
  const [err , salt] = await To(bcrypt.genSalt(saltRounds));
  if (salt) {
    const [err , hash] = await To(bcrypt.hash(plainPassword , salt));
    if (hash) return hash;
    else throw new Error(err);
  } else throw new Error(err);
};

// Exporting Encrypt Module
export { encrypt };