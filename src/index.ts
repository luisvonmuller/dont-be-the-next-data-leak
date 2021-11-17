import { generatePassword, verifyPassword, GeneratedPasswordAndHash } from './Modules/Password';
// 🔑 Key Relation Storage... 🤔
import { KeysStorage, fieldKeyRelation } from './Models/KeyStorage/type';

// End-User  😳
import EndUser from './Models/User/type'

// AdminUser 🤩
import AdminUserLike from './Models/AdminUser/type';

const generateEndUser = async (): Promise<EndUser> => {
  let generateSaltedPassword: GeneratedPasswordAndHash = await generatePassword('enduser');
  return {
    email: 'batatinha@gmail.com',
    password: generateSaltedPassword.hash,
    salt: generateSaltedPassword.salt,
    privateStuff: [
      {
        sensitiveField: 'Histórico do navegador do Luís 👀', // Esse campo deve ser $Ifrado (Endereço)
        anotherSensitiveField: 'Falar que rust lang não presta 🦀', // Esse campo deve ser $Ifrado (CPF)
      }
    ]
  }
}

/** ### Gera um User Administrativo Estático 
 *  * Recebe nada. Retorna AdminUser;
 * 
 *  Todo: Randomize it. (Para depois fazer benchmarcks)
*/
async function generateAdminUser() {
  const generateSaltedPassword: GeneratedPasswordAndHash = await generatePassword('123456789');
  return {
    email: string;
    password: string; /* One way encryption -> Salted Hash 🧂. */
    salt: string;
  }
}

// To check password.   console.log(await verifyPassword({ password: '123456789', ...genPasswordHashObj }));



(async () => {
  try {
    const endUser: EndUser = await generateEndUser();
  } catch (err) {
    console.log(err);
  }

  /**
   * todo: Try/Catch
   * !STEP 1: Saving a new user.
   * * Cyphers with the private key the private fields;
   * * Generate a public key to read that fields
   * * Populate the KeyStorage relation mappings for every ADM user with a new assymetric key by the ADMUser 
   */

  /**
   * !STEP 2.
   * Todo: (try/catch)  
   * * Uncypher the public key to read the fields with private key (Salted Password from the ADMuser);  
  */


})();
